import { NextRequest, NextResponse } from 'next/server'

type Question = {
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

type GeneratedRow = Record<string, string>

const MAX_RESPONSES = 150

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateChoiceResponse(question: Question): string {
  if (!question.options || question.options.length === 0) {
    return ''
  }

  return randomItem(question.options)
}

function generateCheckboxResponse(question: Question): string {
  if (!question.options || question.options.length === 0) {
    return ''
  }

  const options = [...question.options]

  /*
   * Shuffle the available options.
   */
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[options[i], options[j]] = [options[j], options[i]]
  }

  /*
   * Usually select one to three options, while never selecting
   * more options than the form actually provides.
   */
  const maxSelections = Math.min(3, options.length)

  /*
   * Most checkbox responses contain only one or two choices.
   */
  const selectionCount = randomInt(1, maxSelections)

  return options.slice(0, selectionCount).join(', ')
}

function generateScaleResponse(question: Question): string {
  if (!question.scale) {
    return ''
  }

  return String(
    randomInt(question.scale.min, question.scale.max)
  )
}

function generateShortTextResponse(
  question: Question,
  rowNumber: number
): string {
  const title = question.title.toLowerCase()

  if (
    title.includes('age') ||
    title.includes('years old')
  ) {
    return String(randomInt(18, 55))
  }

  if (title.includes('email')) {
    return `synthetic${rowNumber}@example.com`
  }

  if (
    title.includes('name') ||
    title.includes('full name')
  ) {
    return `Synthetic Respondent ${rowNumber}`
  }

  if (
    title.includes('city') ||
    title.includes('location')
  ) {
    return randomItem([
      'Delhi',
      'Mumbai',
      'Bengaluru',
      'Hyderabad',
      'Chennai',
      'Kolkata',
      'Pune',
      'Jaipur',
    ])
  }

  if (
    title.includes('country') ||
    title.includes('nationality')
  ) {
    return randomItem([
      'India',
      'United Kingdom',
      'Australia',
      'Canada',
      'United States',
      'Singapore',
    ])
  }

  if (title.includes('phone') || title.includes('mobile')) {
    return `90000${String(randomInt(10000, 99999))}`
  }

  return randomItem([
    'Synthetic response',
    'Sample response',
    'Test response',
    'Example response',
    'Generated response',
  ])
}

function generateParagraphResponse(
  question: Question,
  rowNumber: number
): string {
  const title = question.title.toLowerCase()

  if (
    title.includes('suggest') ||
    title.includes('recommend') ||
    title.includes('improve')
  ) {
    return randomItem([
      'The service could be improved by providing clearer information and additional practical resources.',
      'More examples and practical guidance would make the overall experience more useful.',
      'Providing additional support materials and clearer instructions could improve the experience.',
    ])
  }

  if (
    title.includes('feedback') ||
    title.includes('comment') ||
    title.includes('opinion')
  ) {
    return randomItem([
      'Overall, the experience was satisfactory and provided useful information.',
      'The experience was generally positive, although there is room for further improvement.',
      'The information was useful and the overall process was reasonably straightforward.',
    ])
  }

  return `This is synthetic response ${rowNumber} generated for testing and analysis practice.`
}

function generateResponse(
  question: Question,
  rowNumber: number
): string {
  switch (question.type) {
    case 'multiple_choice':
    case 'dropdown':
      return generateChoiceResponse(question)

    case 'checkbox':
      return generateCheckboxResponse(question)

    case 'linear_scale':
      return generateScaleResponse(question)

    case 'short_text':
      return generateShortTextResponse(question, rowNumber)

    case 'paragraph':
      return generateParagraphResponse(question, rowNumber)

    default:
      return 'Synthetic response'
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const rawCount = Number(body?.count)
    const questions = body?.questions

    if (!Number.isInteger(rawCount)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid number of responses.',
        },
        { status: 400 }
      )
    }

    if (rawCount < 1 || rawCount > MAX_RESPONSES) {
      return NextResponse.json(
        {
          success: false,
          error: `The number of responses must be between 1 and ${MAX_RESPONSES}.`,
        },
        { status: 400 }
      )
    }

    if (!Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'No survey questions were provided.',
        },
        { status: 400 }
      )
    }

    if (questions.length > 200) {
      return NextResponse.json(
        {
          success: false,
          error: 'The questionnaire contains too many questions to process.',
        },
        { status: 400 }
      )
    }

    const validQuestions: Question[] = questions.filter(
      (question: unknown): question is Question => {
        if (!question || typeof question !== 'object') {
          return false
        }

        const item = question as Question

        return (
          typeof item.id === 'string' &&
          typeof item.title === 'string' &&
          typeof item.type === 'string'
        )
      }
    )

    if (validQuestions.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'No valid survey questions were found.',
        },
        { status: 400 }
      )
    }

    /*
     * Generate the requested number of synthetic responses.
     */
    const rows: GeneratedRow[] = []

    for (let rowNumber = 1; rowNumber <= rawCount; rowNumber++) {
      const row: GeneratedRow = {
        '#': String(rowNumber),
      }

      for (const question of validQuestions) {
        /*
         * The question title is deliberately used as the column name
         * so the resulting dataset resembles the original questionnaire.
         */
        row[question.title] = generateResponse(
          question,
          rowNumber
        )
      }

      rows.push(row)
    }

    return NextResponse.json({
      success: true,
      responseCount: rows.length,
      questionCount: validQuestions.length,
      rows,
    })
  } catch (error) {
    console.error('Synthetic dataset generation error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to generate the synthetic dataset.',
      },
      { status: 500 }
    )
  }
}