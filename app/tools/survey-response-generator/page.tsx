'use client'

import {
    AlertCircle,
    CheckCircle2,
    Download,
    FileSpreadsheet,
    Loader2,
    RefreshCw,
    Sparkles,
} from 'lucide-react'
import { FormEvent, useState } from 'react'

import { Footer } from '@/components/site'

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

type ParseResult = {
  success: boolean
  error?: string
  questionCount?: number
  questions?: Question[]
}

type GeneratedRow = Record<string, string>

type GenerateResult = {
  success: boolean
  error?: string
  responseCount?: number
  questionCount?: number
  rows?: GeneratedRow[]
}

export default function SurveyResponseGeneratorPage() {
  const [url, setUrl] = useState('')
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionCount, setQuestionCount] = useState(0)

  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)

  const [error, setError] = useState('')
  const [generationError, setGenerationError] = useState('')

  const [formRead, setFormRead] = useState(false)

  const [responseCount, setResponseCount] = useState(50)

  const [rows, setRows] = useState<GeneratedRow[]>([])

  async function handleReadForm(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    setError('')
    setGenerationError('')
    setQuestions([])
    setQuestionCount(0)
    setRows([])
    setFormRead(false)

    if (!url.trim()) {
      setError('Please enter a Google Form URL.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        '/api/tools/survey-response-generator/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: url.trim(),
          }),
        }
      )

      const data: ParseResult = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || 'Unable to read the Google Form.'
        )
      }

      setQuestions(data.questions || [])
      setQuestionCount(data.questionCount || 0)
      setFormRead(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to read the Google Form.'
      )
    } finally {
      setLoading(false)
    }
  }

  async function handleGenerate() {
    setGenerationError('')
    setRows([])

    if (
      !Number.isInteger(responseCount) ||
      responseCount < 1 ||
      responseCount > 150
    ) {
      setGenerationError(
        'Please choose between 1 and 150 responses.'
      )
      return
    }

    setGenerating(true)

    try {
      const response = await fetch(
        '/api/tools/survey-response-generator/generate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            count: responseCount,
            questions,
          }),
        }
      )

      const data: GenerateResult = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || 'Unable to generate the dataset.'
        )
      }

      setRows(data.rows || [])
    } catch (err) {
      setGenerationError(
        err instanceof Error
          ? err.message
          : 'Unable to generate the dataset.'
      )
    } finally {
      setGenerating(false)
    }
  }

  function getQuestionTypeLabel(
    type: Question['type']
  ) {
    switch (type) {
      case 'short_text':
        return 'Short answer'
      case 'paragraph':
        return 'Paragraph'
      case 'multiple_choice':
        return 'Multiple choice'
      case 'dropdown':
        return 'Dropdown'
      case 'checkbox':
        return 'Checkboxes'
      case 'linear_scale':
        return 'Linear scale'
      default:
        return 'Question'
    }
  }

  function escapeCsv(value: string) {
    const escaped = String(value).replace(/"/g, '""')
    return `"${escaped}"`
  }

  function downloadCsv() {
    if (rows.length === 0) {
      return
    }

    const headers = Object.keys(rows[0])

    const csvLines = [
      headers.map(escapeCsv).join(','),
      ...rows.map((row) =>
        headers
          .map((header) => escapeCsv(row[header] ?? ''))
          .join(',')
      ),
    ]

    const csv = '\uFEFF' + csvLines.join('\r\n')

    const blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;',
    })

    const blobUrl = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = blobUrl
    link.download = 'synthetic-survey-dataset.csv'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(blobUrl)
  }

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <p className="eyebrow">Student Tool</p>

              <h1>Survey Response Generator</h1>

              <p className="page-hero-description">
                Generate synthetic survey datasets from a public
                Google Form for testing, analysis practice,
                demonstrations, and research methodology development.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div
              className="card"
              style={{
                maxWidth: '850px',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  marginBottom: '24px',
                }}
              >
                <div className="service-card-icon">
                  <FileSpreadsheet size={28} />
                </div>

                <div>
                  <h2 style={{ margin: '0 0 8px' }}>
                    Start with your Google Form
                  </h2>

                  <p style={{ margin: 0, lineHeight: 1.7 }}>
                    Paste the URL of a public Google Form below. We
                    will read the questionnaire structure and show you
                    the questions before any synthetic data is
                    generated.
                  </p>
                </div>
              </div>

              <form onSubmit={handleReadForm}>
                <label
                  htmlFor="form-url"
                  style={{
                    display: 'block',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  Google Form URL
                </label>

                <input
                  id="form-url"
                  type="url"
                  value={url}
                  onChange={(event) =>
                    setUrl(event.target.value)
                  }
                  placeholder="https://forms.gle/..."
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    background: 'var(--background)',
                    color: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />

                <p
                  style={{
                    margin: '8px 0 20px',
                    fontSize: '0.9rem',
                    color: 'var(--muted)',
                  }}
                >
                  The form must be publicly accessible. We do not
                  submit responses to your form.
                </p>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={18}
                        className="spin"
                      />
                      Reading Form...
                    </>
                  ) : (
                    <>
                      <FileSpreadsheet size={18} />
                      Read Form
                    </>
                  )}
                </button>
              </form>

              {error && (
                <div
                  role="alert"
                  style={{
                    marginTop: '24px',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background:
                      'rgba(220, 38, 38, 0.08)',
                    border:
                      '1px solid rgba(220, 38, 38, 0.2)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <AlertCircle
                    size={20}
                    style={{ flexShrink: 0 }}
                  />

                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {formRead && (
          <>
            <section className="section">
              <div className="container">
                <div
                  style={{
                    maxWidth: '950px',
                    margin: '0 auto',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent:
                        'space-between',
                      gap: '16px',
                      marginBottom: '28px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <p className="eyebrow">
                        Form Detected
                      </p>

                      <h2
                        style={{
                          margin: '6px 0 8px',
                        }}
                      >
                        Questionnaire Preview
                      </h2>

                      <p
                        style={{
                          margin: 0,
                          color: 'var(--muted)',
                        }}
                      >
                        {questionCount}{' '}
                        {questionCount === 1
                          ? 'question'
                          : 'questions'}{' '}
                        detected.
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
                        padding: '8px 12px',
                        borderRadius: '999px',
                        background:
                          'rgba(13, 148, 136, 0.1)',
                        color: 'var(--primary)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                      }}
                    >
                      <CheckCircle2 size={16} />
                      Form successfully read
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gap: '16px',
                    }}
                  >
                    {questions.map(
                      (question, index) => (
                        <article
                          key={question.id}
                          className="card"
                          style={{
                            padding: '24px',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems:
                                'flex-start',
                              gap: '16px',
                            }}
                          >
                            <div
                              style={{
                                width: '34px',
                                height: '34px',
                                minWidth: '34px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems:
                                  'center',
                                justifyContent:
                                  'center',
                                background:
                                  'rgba(13, 148, 136, 0.1)',
                                color:
                                  'var(--primary)',
                                fontWeight: 700,
                                fontSize:
                                  '0.9rem',
                              }}
                            >
                              {index + 1}
                            </div>

                            <div
                              style={{
                                flex: 1,
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems:
                                    'center',
                                  justifyContent:
                                    'space-between',
                                  gap: '12px',
                                  marginBottom:
                                    '8px',
                                  flexWrap:
                                    'wrap',
                                }}
                              >
                                <h3
                                  style={{
                                    margin: 0,
                                  }}
                                >
                                  {question.title}
                                </h3>

                                <span
                                  style={{
                                    fontSize:
                                      '0.78rem',
                                    fontWeight: 600,
                                    padding:
                                      '5px 9px',
                                    borderRadius:
                                      '999px',
                                    background:
                                      'rgba(100, 116, 139, 0.1)',
                                    color:
                                      'var(--muted)',
                                  }}
                                >
                                  {getQuestionTypeLabel(
                                    question.type
                                  )}
                                </span>
                              </div>

                              {question.description && (
                                <p
                                  style={{
                                    margin:
                                      '0 0 14px',
                                    color:
                                      'var(--muted)',
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {
                                    question.description
                                  }
                                </p>
                              )}

                              {question.options &&
                                question.options
                                  .length > 0 && (
                                  <div
                                    style={{
                                      marginTop:
                                        '14px',
                                    }}
                                  >
                                    <p
                                      style={{
                                        margin:
                                          '0 0 8px',
                                        fontWeight:
                                          600,
                                        fontSize:
                                          '0.9rem',
                                      }}
                                    >
                                      Answer
                                      options
                                    </p>

                                    <div
                                      style={{
                                        display:
                                          'flex',
                                        flexWrap:
                                          'wrap',
                                        gap: '8px',
                                      }}
                                    >
                                      {question.options.map(
                                        (
                                          option
                                        ) => (
                                          <span
                                            key={
                                              option
                                            }
                                            style={{
                                              padding:
                                                '7px 10px',
                                              borderRadius:
                                                '8px',
                                              background:
                                                'var(--background)',
                                              border:
                                                '1px solid var(--border)',
                                              fontSize:
                                                '0.88rem',
                                            }}
                                          >
                                            {
                                              option
                                            }
                                          </span>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}

                              {question.scale && (
                                <div
                                  style={{
                                    marginTop:
                                      '14px',
                                    color:
                                      'var(--muted)',
                                    fontSize:
                                      '0.9rem',
                                  }}
                                >
                                  Scale:{' '}
                                  <strong>
                                    {
                                      question
                                        .scale
                                        .min
                                    }
                                  </strong>{' '}
                                  to{' '}
                                  <strong>
                                    {
                                      question
                                        .scale
                                        .max
                                    }
                                  </strong>
                                </div>
                              )}
                            </div>
                          </div>
                        </article>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <div
                  className="card"
                  style={{
                    maxWidth: '850px',
                    margin: '0 auto',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems:
                        'flex-start',
                      gap: '16px',
                      marginBottom:
                        '20px',
                    }}
                  >
                    <div className="service-card-icon">
                      <Sparkles size={28} />
                    </div>

                    <div>
                      <p className="eyebrow">
                        Generate Dataset
                      </p>

                      <h2
                        style={{
                          margin:
                            '5px 0 8px',
                        }}
                      >
                        Choose the number of
                        responses
                      </h2>

                      <p
                        style={{
                          margin: 0,
                          color:
                            'var(--muted)',
                          lineHeight: 1.7,
                        }}
                      >
                        Generate between 1 and
                        150 synthetic responses
                        based on the detected
                        questionnaire.
                      </p>
                    </div>
                  </div>

                  <label
                    htmlFor="response-count"
                    style={{
                      display: 'block',
                      fontWeight: 600,
                      marginBottom: '8px',
                    }}
                  >
                    Number of responses
                  </label>

                  <input
                    id="response-count"
                    type="number"
                    min="1"
                    max="150"
                    value={responseCount}
                    onChange={(event) => {
                      const value =
                        Number(
                          event.target
                            .value
                        )

                      setResponseCount(
                        Number.isNaN(value)
                          ? 1
                          : Math.min(
                              150,
                              Math.max(
                                1,
                                value
                              )
                            )
                      )
                    }}
                    style={{
                      width: '180px',
                      padding:
                        '13px 14px',
                      border:
                        '1px solid var(--border)',
                      borderRadius:
                        '10px',
                      fontSize:
                        '1rem',
                      background:
                        'var(--background)',
                      color: 'inherit',
                    }}
                  />

                  <p
                    style={{
                      margin:
                        '8px 0 20px',
                      color:
                        'var(--muted)',
                      fontSize:
                        '0.9rem',
                    }}
                  >
                    Maximum: 150 responses
                  </p>

                  {generationError && (
                    <div
                      role="alert"
                      style={{
                        marginBottom:
                          '20px',
                        padding:
                          '14px 16px',
                        borderRadius:
                          '10px',
                        background:
                          'rgba(220, 38, 38, 0.08)',
                        border:
                          '1px solid rgba(220, 38, 38, 0.2)',
                        display:
                          'flex',
                        alignItems:
                          'flex-start',
                        gap: '10px',
                      }}
                    >
                      <AlertCircle
                        size={20}
                        style={{
                          flexShrink: 0,
                        }}
                      />

                      <span>
                        {
                          generationError
                        }
                      </span>
                    </div>
                  )}

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleGenerate}
                    disabled={generating}
                    style={{
                      display:
                        'inline-flex',
                      alignItems:
                        'center',
                      justifyContent:
                        'center',
                      gap: '8px',
                    }}
                  >
                    {generating ? (
                      <>
                        <Loader2
                          size={18}
                          className="spin"
                        />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles
                          size={18}
                        />
                        Generate Responses
                        Dataset
                      </>
                    )}
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {rows.length > 0 && (
          <section className="section">
            <div className="container">
              <div
                style={{
                  maxWidth: '1200px',
                  margin: '0 auto',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems:
                      'center',
                    justifyContent:
                      'space-between',
                    gap: '16px',
                    marginBottom:
                      '24px',
                    flexWrap:
                      'wrap',
                  }}
                >
                  <div>
                    <p className="eyebrow">
                      Dataset Ready
                    </p>

                    <h2
                      style={{
                        margin:
                          '5px 0 8px',
                      }}
                    >
                      Synthetic Response
                      Dataset
                    </h2>

                    <p
                      style={{
                        margin: 0,
                        color:
                          'var(--muted)',
                      }}
                    >
                      {rows.length}{' '}
                      synthetic responses
                      generated.
                    </p>
                  </div>

                  <div
                    style={{
                      display:
                        'flex',
                      gap: '10px',
                      flexWrap:
                        'wrap',
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={
                        downloadCsv
                      }
                      style={{
                        display:
                          'inline-flex',
                        alignItems:
                          'center',
                        gap: '8px',
                      }}
                    >
                      <Download
                        size={18}
                      />
                      Download CSV
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={
                        handleGenerate
                      }
                      disabled={
                        generating
                      }
                      style={{
                        display:
                          'inline-flex',
                        alignItems:
                          'center',
                        gap: '8px',
                      }}
                    >
                      <RefreshCw
                        size={18}
                      />
                      Generate Again
                    </button>
                  </div>
                </div>

                <div
                  className="card"
                  style={{
                    padding: 0,
                    overflow:
                      'hidden',
                  }}
                >
                  <div
                    style={{
                      overflowX:
                        'auto',
                      maxHeight:
                        '600px',
                    }}
                  >
                    <table
                      style={{
                        width:
                          '100%',
                        borderCollapse:
                          'collapse',
                        minWidth:
                          '800px',
                      }}
                    >
                      <thead>
                        <tr>
                          {Object.keys(
                            rows[0]
                          ).map(
                            (
                              header
                            ) => (
                              <th
                                key={
                                  header
                                }
                                style={{
                                  padding:
                                    '13px 14px',
                                  textAlign:
                                    'left',
                                  borderBottom:
                                    '1px solid var(--border)',
                                  background:
                                    'var(--background)',
                                  fontSize:
                                    '0.85rem',
                                  whiteSpace:
                                    'nowrap',
                                  position:
                                    'sticky',
                                  top: 0,
                                  zIndex:
                                    1,
                                }}
                              >
                                {
                                  header
                                }
                              </th>
                            )
                          )}
                        </tr>
                      </thead>

                      <tbody>
                        {rows
                          .slice(
                            0,
                            10
                          )
                          .map(
                            (
                              row,
                              index
                            ) => (
                              <tr
                                key={
                                  index
                                }
                              >
                                {Object.keys(
                                  rows[0]
                                ).map(
                                  (
                                    header
                                  ) => (
                                    <td
                                      key={
                                        header
                                      }
                                      style={{
                                        padding:
                                          '12px 14px',
                                        borderBottom:
                                          '1px solid var(--border)',
                                        fontSize:
                                          '0.88rem',
                                        verticalAlign:
                                          'top',
                                      }}
                                    >
                                      {
                                        row[
                                          header
                                        ]
                                      }
                                    </td>
                                  )
                                )}
                              </tr>
                            )
                          )}
                      </tbody>
                    </table>
                  </div>

                  {rows.length >
                    10 && (
                    <div
                      style={{
                        padding:
                          '14px 16px',
                        borderTop:
                          '1px solid var(--border)',
                        color:
                          'var(--muted)',
                        fontSize:
                          '0.9rem',
                      }}
                    >
                      Showing the first
                      10 responses
                      here. The
                      downloaded CSV
                      contains all{' '}
                      {rows.length}{' '}
                      responses.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container">
            <div
              className="card"
              style={{
                maxWidth: '850px',
                margin: '0 auto',
              }}
            >
              <h2>Synthetic Data Only</h2>

              <p
                style={{
                  lineHeight: 1.8,
                  marginBottom:
                    '12px',
                }}
              >
                This tool generates
                synthetic, auto-generated
                survey responses for purposes
                such as testing data-analysis
                workflows, practicing
                statistical methods,
                demonstrating research
                techniques, and developing
                project methodology.
              </p>

              <p
                style={{
                  lineHeight: 1.8,
                  margin: 0,
                  color:
                    'var(--muted)',
                }}
              >
                Generated responses are not
                real participant responses and
                should not be presented as data
                collected from actual respondents
                or used to fabricate research
                findings.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}