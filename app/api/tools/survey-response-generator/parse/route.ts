import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'

type ParsedQuestion = {
  id: string
  title: string
  description?: string
  type:
    | 'short_text'
    | 'paragraph'
    | 'multiple_choice'
    | 'dropdown'
    | 'checkbox'
    | 'linear_scale'
    | 'unknown'
  options?: string[]
  scale?: {
    min: number
    max: number
    minLabel?: string
    maxLabel?: string
  }
}

const ALLOWED_HOSTS = new Set([
  'forms.gle',
  'docs.google.com',
])

function isAllowedGoogleFormsUrl(value: string) {
  try {
    const url = new URL(value)

    if (url.protocol !== 'https:') {
      return false
    }

    return ALLOWED_HOSTS.has(url.hostname)
  } catch {
    return false
  }
}

function cleanText(value: unknown): string {
  if (typeof value !== 'string') {
    return ''
  }

  return value
    .replace(/\\u003c/g, '<')
    .replace(/\\u003e/g, '>')
    .replace(/\\u0026/g, '&')
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"')
    .trim()
}

function isQuestionType(value: unknown): value is number {
  return (
    typeof value === 'number' &&
    [0, 1, 2, 3, 4, 5].includes(value)
  )
}

function extractPublicLoadData(html: string): unknown {
  const marker = 'FB_PUBLIC_LOAD_DATA_'

  const markerIndex = html.indexOf(marker)

  if (markerIndex === -1) {
    throw new Error(
      'Google Forms questionnaire data could not be found. The form may be private, restricted, or unavailable.'
    )
  }

  const equalsIndex = html.indexOf('=', markerIndex)

  if (equalsIndex === -1) {
    throw new Error('Unable to read the Google Forms questionnaire data.')
  }

  const start = html.indexOf('[', equalsIndex)

  if (start === -1) {
    throw new Error('Unable to locate the Google Forms data structure.')
  }

  /*
   * Google embeds the questionnaire as a JavaScript array.
   * We need to find the matching closing bracket rather than
   * simply stopping at the first semicolon.
   */
  let depth = 0
  let inString = false
  let escaped = false

  for (let i = start; i < html.length; i++) {
    const char = html[i]

    if (inString) {
      if (escaped) {
        escaped = false
      } else if (char === '\\') {
        escaped = true
      } else if (char === '"') {
        inString = false
      }

      continue
    }

    if (char === '"') {
      inString = true
      continue
    }

    if (char === '[') {
      depth++
    } else if (char === ']') {
      depth--

      if (depth === 0) {
        const json = html.slice(start, i + 1)

        try {
          return JSON.parse(json)
        } catch {
          throw new Error(
            'The Google Forms questionnaire was found, but its structure could not be parsed.'
          )
        }
      }
    }
  }

  throw new Error('The Google Forms questionnaire data appears incomplete.')
}

function extractQuestions(data: unknown): ParsedQuestion[] {
  const root = data as any

  /*
   * In the public Google Forms structure, questionnaire entries
   * are commonly found under root[1][1].
   */
  const entries = root?.[1]?.[1]

  if (!Array.isArray(entries)) {
    throw new Error(
      'The form structure was detected, but no questionnaire questions were found.'
    )
  }

  const questions: ParsedQuestion[] = []

  for (const entry of entries) {
    if (!Array.isArray(entry)) {
      continue
    }

    const title = cleanText(entry[1])
    const type = entry[3]

    if (!title || !isQuestionType(type)) {
      continue
    }

    /*
     * Google Forms uses:
     * 0 = short answer
     * 1 = paragraph
     * 2 = multiple choice
     * 3 = dropdown
     * 4 = checkbox
     * 5 = linear scale
     */
    let questionType: ParsedQuestion['type'] = 'unknown'

    switch (type) {
      case 0:
        questionType = 'short_text'
        break
      case 1:
        questionType = 'paragraph'
        break
      case 2:
        questionType = 'multiple_choice'
        break
      case 3:
        questionType = 'dropdown'
        break
      case 4:
        questionType = 'checkbox'
        break
      case 5:
        questionType = 'linear_scale'
        break
    }

    /*
     * The entry ID is generally stored at entry[4][0].
     * Fall back to the array position if Google changes this structure.
     */
    const id =
      cleanText(entry?.[4]?.[0]) ||
      cleanText(entry?.[0]) ||
      `question_${questions.length + 1}`

    const description = cleanText(entry[2])

    const question: ParsedQuestion = {
      id,
      title,
      description: description || undefined,
      type: questionType,
    }

    /*
     * Multiple choice, dropdown and checkbox questions normally
     * contain their options in the nested question configuration.
     */
    if (
      questionType === 'multiple_choice' ||
      questionType === 'dropdown' ||
      questionType === 'checkbox'
    ) {
      const options: string[] = []

      const possibleOptionArrays = [
        entry?.[4]?.[0]?.[1],
        entry?.[4]?.[1],
        entry?.[5],
        entry?.[4],
      ]

      for (const candidate of possibleOptionArrays) {
        if (!Array.isArray(candidate)) {
          continue
        }

        for (const option of candidate) {
          if (Array.isArray(option)) {
            const label = cleanText(option[0])

            if (label && !options.includes(label)) {
              options.push(label)
            }
          } else if (typeof option === 'string') {
            const label = cleanText(option)

            if (label && !options.includes(label)) {
              options.push(label)
            }
          }
        }
      }

      if (options.length > 0) {
        question.options = options
      }
    }

    /*
     * Linear-scale questions have their scale information nested
     * differently from choice questions. We look through the
     * configuration for numeric boundaries and labels.
     */
    if (questionType === 'linear_scale') {
      const numbers: number[] = []

      function findNumbers(value: unknown) {
        if (typeof value === 'number') {
          if (Number.isInteger(value) && value >= 0 && value <= 10) {
            numbers.push(value)
          }
          return
        }

        if (Array.isArray(value)) {
          for (const item of value) {
            findNumbers(item)
          }
        }
      }

      findNumbers(entry)

      const uniqueNumbers = [...new Set(numbers)].sort((a, b) => a - b)

      if (uniqueNumbers.length >= 2) {
        question.scale = {
          min: uniqueNumbers[0],
          max: uniqueNumbers[uniqueNumbers.length - 1],
        }
      }
    }

    questions.push(question)
  }

  if (questions.length === 0) {
    throw new Error(
      'No supported questions could be detected in this Google Form.'
    )
  }

  return questions
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const formUrl =
      typeof body?.url === 'string' ? body.url.trim() : ''

    if (!formUrl) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please enter a Google Form URL.',
        },
        { status: 400 }
      )
    }

    if (!isAllowedGoogleFormsUrl(formUrl)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Please enter a valid public Google Forms URL. Only forms.gle and docs.google.com/forms URLs are supported.',
        },
        { status: 400 }
      )
    }

    const response = await fetch(formUrl, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/153 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml',
      },
      redirect: 'follow',
      cache: 'no-store',
    })

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error:
            'The Google Form could not be accessed. Make sure the form is public and available to anyone with the link.',
        },
        { status: 400 }
      )
    }

    const finalUrl = response.url

    /*
     * forms.gle links redirect to docs.google.com.
     * Verify the final destination as well so the server does not
     * become a generic URL-fetching proxy.
     */
    if (!isAllowedGoogleFormsUrl(finalUrl)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'The supplied link did not resolve to a supported Google Forms page.',
        },
        { status: 400 }
      )
    }

    const html = await response.text()

    const data = extractPublicLoadData(html)
    const questions = extractQuestions(data)

    return NextResponse.json({
      success: true,
      formUrl,
      finalUrl,
      questionCount: questions.length,
      questions,
    })
  } catch (error) {
    console.error('Survey form parsing error:', error)

    const message =
      error instanceof Error
        ? error.message
        : 'Unable to read the Google Form.'

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    )
  }
}