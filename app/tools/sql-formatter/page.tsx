'use client'

import { Footer } from '@/components/site'
import {
    Check,
    Clipboard,
    Download,
    Eraser,
    FileCode2,
    Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { format } from 'sql-formatter'

type SqlDialect =
  | 'sql'
  | 'mysql'
  | 'postgresql'
  | 'sqlite'
  | 'transactsql'
  | 'mariadb'
  | 'plsql'
  | 'bigquery'
  | 'snowflake'
  | 'duckdb'

const dialects: { value: SqlDialect; label: string }[] = [
  { value: 'sql', label: 'Standard SQL' },
  { value: 'mysql', label: 'MySQL' },
  { value: 'postgresql', label: 'PostgreSQL' },
  { value: 'sqlite', label: 'SQLite' },
  { value: 'transactsql', label: 'SQL Server' },
  { value: 'mariadb', label: 'MariaDB' },
  { value: 'plsql', label: 'Oracle PL/SQL' },
  { value: 'bigquery', label: 'Google BigQuery' },
  { value: 'snowflake', label: 'Snowflake' },
  { value: 'duckdb', label: 'DuckDB' },
]

const keywordCases = [
  { value: 'preserve', label: 'Preserve' },
  { value: 'upper', label: 'UPPERCASE' },
  { value: 'lower', label: 'lowercase' },
] as const

const indentationOptions = [
  { value: 2, label: '2 spaces' },
  { value: 4, label: '4 spaces' },
]

export default function SqlFormatterPage() {
  const [sql, setSql] = useState('')
  const [formattedSql, setFormattedSql] = useState('')
  const [dialect, setDialect] = useState<SqlDialect>('sql')
  const [keywordCase, setKeywordCase] = useState<
    'preserve' | 'upper' | 'lower'
  >('upper')
  const [indentation, setIndentation] = useState(2)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  function handleFormat() {
    setError('')
    setCopied(false)

    if (!sql.trim()) {
      setFormattedSql('')
      setError('Please paste some SQL before formatting.')
      return
    }

    try {
      const result = format(sql, {
        language: dialect,
        keywordCase,
        tabWidth: indentation,
        useTabs: false,
      })

      setFormattedSql(result)
    } catch {
      setFormattedSql('')
      setError(
        'Unable to format this SQL. Check the selected SQL dialect and make sure the query is syntactically compatible with it.'
      )
    }
  }

  function handleClear() {
    setSql('')
    setFormattedSql('')
    setError('')
    setCopied(false)
  }

  async function handleCopy() {
    if (!formattedSql) return

    try {
      await navigator.clipboard.writeText(formattedSql)
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setError('Unable to copy the formatted SQL.')
    }
  }

  function handleDownload() {
    if (!formattedSql) return

    const blob = new Blob([formattedSql], {
      type: 'text/plain;charset=utf-8',
    })

    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = 'formatted-query.sql'
    document.body.appendChild(link)
    link.click()
    link.remove()

    URL.revokeObjectURL(url)
  }

  return (
    <main className="page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Developer Tool</p>

          <h1>SQL Formatter</h1>

          <p className="page-hero-description">
            Format messy SQL into clean, readable queries for database
            projects, assignments, development, debugging, and documentation.
          </p>
        </div>
      </section>

      {/* =====================================================
          FORMATTER
      ===================================================== */}
      <section className="section">
        <div className="container">
          <div className="sql-formatter-tool">
            <div className="sql-tool-header">
              <div>
                <div className="tool-title-row">
                  <FileCode2 size={22} />
                  <h2>Format Your SQL</h2>
                </div>

                <p>
                  Paste your SQL query below, choose the appropriate dialect,
                  and format it instantly.
                </p>
              </div>
            </div>

            <div className="sql-tool-options">
              <div className="sql-option">
                <label htmlFor="sql-dialect">SQL Dialect</label>

                <select
                  id="sql-dialect"
                  value={dialect}
                  onChange={(event) =>
                    setDialect(event.target.value as SqlDialect)
                  }
                >
                  {dialects.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sql-option">
                <label htmlFor="keyword-case">Keyword Case</label>

                <select
                  id="keyword-case"
                  value={keywordCase}
                  onChange={(event) =>
                    setKeywordCase(
                      event.target.value as
                        | 'preserve'
                        | 'upper'
                        | 'lower'
                    )
                  }
                >
                  {keywordCases.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sql-option">
                <label htmlFor="indentation">Indentation</label>

                <select
                  id="indentation"
                  value={indentation}
                  onChange={(event) =>
                    setIndentation(Number(event.target.value))
                  }
                >
                  {indentationOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sql-editor-section">
              <div className="sql-editor-label">
                <label htmlFor="sql-input">SQL Input</label>
                <span>Paste your query here</span>
              </div>

              <textarea
                id="sql-input"
                value={sql}
                onChange={(event) => {
                  setSql(event.target.value)
                  setError('')
                }}
                placeholder={`SELECT s.student_id, s.student_name, c.course_name FROM students s JOIN courses c ON s.course_id = c.course_id WHERE s.status = 'active' ORDER BY s.student_name;`}
                spellCheck={false}
                className="sql-editor"
              />
            </div>

            <div className="sql-tool-actions">
              <button
                type="button"
                onClick={handleFormat}
                className="button button-primary"
              >
                <Sparkles size={17} />
                Format SQL
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="button button-secondary"
              >
                <Eraser size={17} />
                Clear
              </button>
            </div>

            {error && (
              <div className="sql-error" role="alert">
                {error}
              </div>
            )}

            <div className="sql-editor-section sql-output-section">
              <div className="sql-editor-label">
                <div>
                  <label htmlFor="sql-output">Formatted SQL</label>
                  <span>
                    {formattedSql
                      ? 'Ready to copy or download'
                      : 'Your formatted query will appear here'}
                  </span>
                </div>

                {formattedSql && (
                  <div className="sql-output-actions">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="sql-icon-button"
                      title="Copy formatted SQL"
                    >
                      {copied ? (
                        <>
                          <Check size={16} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Clipboard size={16} />
                          Copy
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleDownload}
                      className="sql-icon-button"
                      title="Download formatted SQL"
                    >
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                )}
              </div>

              <textarea
                id="sql-output"
                value={formattedSql}
                readOnly
                placeholder="Formatted SQL will appear here..."
                spellCheck={false}
                className="sql-editor sql-output-editor"
              />
            </div>

            <div className="sql-privacy-note">
              <strong>Your SQL stays in your browser.</strong>
              <span>
                This tool formats your query locally. ProjectAssignments does
                not execute or store your SQL.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INFORMATION
      ===================================================== */}
      <section className="sql-info-section">
        <div className="container">
          <div className="sql-info-content">
            <p className="eyebrow">About This Tool</p>

            <h2>Why use an SQL formatter?</h2>

            <p>
              SQL can become difficult to follow when queries contain joins,
              nested conditions, subqueries, grouping, ordering, or multiple
              statements. SQL Formatter restructures your query with
              consistent indentation and readable line breaks.
            </p>

            <p>
              Use it when working on SQL assignments, database projects,
              application development, debugging, documentation, or learning
              database query structure.
            </p>

            <p>
              The formatter supports several commonly used SQL dialects. For
              best results, select the dialect that matches the database
              system for which your query was written.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DISCLAIMER
      ===================================================== */}
      <section className="sql-disclaimer-section">
        <div className="container">
          <div className="tool-disclaimer">
            <strong>Formatting only.</strong>
            <span>
              This tool does not execute SQL queries, connect to databases, or
              verify database results. Always review formatted SQL before
              using it in a production environment.
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}