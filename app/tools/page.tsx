import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Code2,
    Database,
    FileSpreadsheet,
    Sparkles,
    Wrench,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer, PageHero, SectionHeading } from '@/components/site'

export const metadata: Metadata = {
  title: 'Student Tools for Assignments, Projects & Research | ProjectAssignments',
  description:
    'Useful online tools for students, researchers, and project learners, including synthetic survey data generation, SQL formatting, data analysis utilities, and more.',
  keywords: [
    'student tools',
    'online student tools',
    'assignment tools',
    'project tools',
    'research tools',
    'academic tools',
    'survey response generator',
    'synthetic survey data',
    'survey data generator',
    'SQL formatter',
    'SQL formatter online',
    'SQL query formatter',
    'SQL beautifier',
    'data analysis tools',
    'student research tools',
    'project management tools for students',
    'tools for assignments',
    'tools for research projects',
  ],
  alternates: {
    canonical: 'https://projectassignments.com/tools',
  },
}

const tools = [
  {
    title: 'Survey Response Generator',
    description:
      'Generate synthetic survey datasets from a public Google Form for testing, analysis practice, demonstrations, and research methodology development.',
    href: '/tools/survey-response-generator',
    status: 'Available',
    icon: FileSpreadsheet,
    features: [
      'Read questions from a public Google Form',
      'Generate up to 150 synthetic responses',
      'Preserve original answer option labels',
      'Download the generated dataset as CSV',
    ],
  },
  {
    title: 'SQL Formatter',
    description:
      'Format SQL queries into a clean, readable structure for database assignments, projects, development, debugging, and technical documentation.',
    href: '/tools/sql-formatter',
    status: 'Available',
    icon: Database,
    features: [
      'Format SQL queries instantly',
      'Support common SQL dialects',
      'Customize keyword case and indentation',
      'Copy or download formatted SQL',
    ],
  },
]

export default function ToolsPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Student Tools"
          title="Useful Tools for Assignments, Projects & Research"
          description="Practical online utilities designed to help students and researchers work with data, code, databases, surveys, and technical project tasks."
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Explore the Tools"
              title="Practical utilities, built for real student work"
              description="We are building a growing collection of focused tools that can save time on repetitive technical and research tasks."
            />

            <div className="card-grid two-up">
              {tools.map((tool) => {
                const Icon = tool.icon

                return (
                  <article className="service-card" key={tool.title}>
                    <div className="service-card-icon">
                      <Icon size={28} />
                    </div>

                    <div className="service-card-content">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          marginBottom: '10px',
                          flexWrap: 'wrap',
                        }}
                      >
                        <h3>{tool.title}</h3>

                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            padding: '5px 10px',
                            borderRadius: '999px',
                            background:
                              tool.status === 'Available'
                                ? 'rgba(13, 148, 136, 0.1)'
                                : 'rgba(245, 158, 11, 0.12)',
                            color:
                              tool.status === 'Available'
                                ? 'var(--primary)'
                                : '#b45309',
                          }}
                        >
                          {tool.status === 'Available' && (
                            <CheckCircle2 size={14} />
                          )}
                          {tool.status}
                        </span>
                      </div>

                      <p>{tool.description}</p>

                      <ul
                        style={{
                          margin: '20px 0',
                          paddingLeft: '20px',
                        }}
                      >
                        {tool.features.map((feature) => (
                          <li
                            key={feature}
                            style={{
                              marginBottom: '8px',
                              lineHeight: 1.6,
                            }}
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {tool.status === 'Available' ? (
                        <Link
                          href={tool.href}
                          className="btn btn-primary"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          Use This Tool
                          <ArrowRight size={18} />
                        </Link>
                      ) : (
                        <span
                          className="btn btn-secondary"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            opacity: 0.75,
                            cursor: 'default',
                          }}
                        >
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="More Tools Ahead"
              title="A growing collection of useful utilities"
              description="The Tools section will gradually expand with focused utilities for programming, databases, data analysis, research, surveys, and other common academic and technical tasks."
            />

            <div className="value-grid">
              <div className="value-card">
                <div className="service-card-icon">
                  <Code2 size={26} />
                </div>

                <h3>Programming</h3>

                <p>
                  Practical utilities for working with code, programming
                  assignments, debugging tasks, and development projects.
                </p>
              </div>

              <div className="value-card">
                <div className="service-card-icon">
                  <BarChart3 size={26} />
                </div>

                <h3>Data & Research</h3>

                <p>
                  Tools that support survey analysis, datasets, statistics,
                  research preparation, and practical data-analysis workflows.
                </p>
              </div>

              <div className="value-card">
                <div className="service-card-icon">
                  <Wrench size={26} />
                </div>

                <h3>Technical Utilities</h3>

                <p>
                  Small, focused tools for common technical tasks encountered
                  while completing IT assignments and software projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div
              className="card"
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <div
                className="service-card-icon"
                style={{ margin: '0 auto 20px' }}
              >
                <Sparkles size={28} />
              </div>

              <h2>Built to Be Useful, Not Just Decorative</h2>

              <p
                style={{
                  maxWidth: '700px',
                  margin: '16px auto 0',
                  lineHeight: 1.8,
                }}
              >
                The goal of ProjectAssignments Tools is to provide genuinely
                useful utilities that students can use while learning,
                developing projects, analysing data, and preparing academic
                work. Each tool is designed around a specific practical task
                rather than simply adding another page to the website.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}