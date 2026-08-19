import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    FileCheck2,
    FileText,
    FlaskConical,
    GitBranch,
    Lightbulb,
    Search,
    ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import {
    CTA,
    FAQ,
    Footer,
    SectionHeading,
} from '@/components/site'

export const metadata: Metadata = {
  title:
    'Dissertation Project Help | Research, Methodology & Postgraduate Guidance',
  description:
    'Ethical dissertation and postgraduate project guidance covering research questions, literature reviews, methodology, data analysis, technical research, academic structure and final review.',
  keywords: [
    'dissertation project help',
    'dissertation guidance',
    'dissertation research help',
    'postgraduate project help',
    'dissertation methodology help',
    'literature review guidance',
    'research methodology support',
    'MBA dissertation help',
    'DBA dissertation guidance',
    'technical dissertation support',
    'academic research guidance',
    'postgraduate research support',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/assignment-project-help/dissertation-project-help',
  },
  openGraph: {
    title:
      'Dissertation Project Help | Research, Methodology & Postgraduate Guidance',
    description:
      'Structured and ethical guidance for postgraduate dissertations, research projects, methodology, literature reviews, data analysis and technical research.',
    url:
      'https://projectassignments.com/assignment-project-help/dissertation-project-help',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const supportAreas = [
  {
    icon: <Lightbulb size={24} aria-hidden="true" />,
    title: 'Research Question Development',
    text:
      'Clarify the research problem, objectives, questions, scope and intended contribution before moving into detailed research.',
  },
  {
    icon: <Search size={24} aria-hidden="true" />,
    title: 'Literature Review',
    text:
      'Plan literature searches, organise themes, compare existing studies and identify gaps or debates relevant to the research question.',
  },
  {
    icon: <FlaskConical size={24} aria-hidden="true" />,
    title: 'Research Methodology',
    text:
      'Understand qualitative, quantitative and mixed-method approaches and evaluate whether a proposed methodology fits the research problem.',
  },
  {
    icon: <GitBranch size={24} aria-hidden="true" />,
    title: 'Research Design',
    text:
      'Work through variables, research frameworks, data sources, sampling, instruments, procedures and analytical strategies.',
  },
  {
    icon: <FileCheck2 size={24} aria-hidden="true" />,
    title: 'Data Analysis & Interpretation',
    text:
      'Understand analytical techniques, interpret findings, evaluate evidence and connect results back to the research objectives.',
  },
  {
    icon: <FileText size={24} aria-hidden="true" />,
    title: 'Structure & Documentation',
    text:
      'Review dissertation structure, argument flow, technical documentation, findings, limitations, conclusions and academic presentation.',
  },
]

const dissertationStages = [
  {
    number: '01',
    title: 'Define the research problem',
    text:
      'Start by identifying the problem, research context, objectives, questions and boundaries of the study.',
  },
  {
    number: '02',
    title: 'Review existing research',
    text:
      'Examine relevant academic literature to understand what has already been established and where meaningful gaps or debates remain.',
  },
  {
    number: '03',
    title: 'Choose the methodology',
    text:
      'Select and justify an appropriate research design, methodology, data source and analytical approach.',
  },
  {
    number: '04',
    title: 'Collect and analyse evidence',
    text:
      'Work with the selected data, evidence, experiments, interviews, surveys, datasets or technical artefacts according to the research design.',
  },
  {
    number: '05',
    title: 'Interpret the findings',
    text:
      'Move beyond reporting results by explaining what they mean, how they relate to previous research and what conclusions can reasonably be drawn.',
  },
  {
    number: '06',
    title: 'Review and refine',
    text:
      'Check the overall argument, methodology, evidence, structure, limitations, references and consistency before final submission.',
  },
]

const faqs = [
  {
    question: 'What types of dissertations do you support?',
    answer:
      'We provide guidance for technical and research-oriented postgraduate work, including MBA and DBA research, computer science, information technology, cybersecurity, software engineering, data science, information systems and related technical disciplines.',
  },
  {
    question: 'Can you help me choose a dissertation topic?',
    answer:
      'Yes. We can discuss potential research areas, help narrow a broad subject into a manageable research problem, examine possible research questions and consider whether a proposed topic is practical within the available time and resources.',
  },
  {
    question: 'Can you help with a literature review?',
    answer:
      'Yes. Guidance can cover literature-search strategy, organising sources, identifying themes, comparing studies, recognising research gaps and developing a coherent literature-review structure.',
  },
  {
    question: 'Can you help with dissertation methodology?',
    answer:
      'Yes. We can explain methodological approaches, research design, sampling, data collection, research instruments, analytical techniques and the reasoning behind methodological choices.',
  },
  {
    question: 'Can you analyse my dissertation for me?',
    answer:
      'Our approach is based on ethical academic guidance rather than completing or submitting a dissertation on a student’s behalf. We can help you understand analytical methods, interpret your own results, identify weaknesses and strengthen the reasoning behind your work.',
  },
  {
    question: 'Can you review my dissertation before submission?',
    answer:
      'Yes. A review can focus on structure, clarity, methodology, technical reasoning, consistency, documentation, interpretation, limitations and areas that may require further attention.',
  },
]

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/assignment-project-help/dissertation-project-help#webpage',
      url:
        'https://projectassignments.com/assignment-project-help/dissertation-project-help',
      name:
        'Dissertation Project Help | Research, Methodology & Postgraduate Guidance',
      description:
        'Ethical dissertation and postgraduate project guidance covering research questions, literature reviews, methodology, data analysis, technical research and academic structure.',
      isPartOf: {
        '@id': 'https://projectassignments.com/#website',
      },
      breadcrumb: {
        '@id':
          'https://projectassignments.com/assignment-project-help/dissertation-project-help#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/assignment-project-help/dissertation-project-help#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://projectassignments.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Assignment & Academic Project Help',
          item:
            'https://projectassignments.com/assignment-project-help',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Dissertation Project Help',
          item:
            'https://projectassignments.com/assignment-project-help/dissertation-project-help',
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Dissertation Support Areas',
      itemListElement: supportAreas.map((area, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: area.title,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

function DissertationVisual() {
  return (
    <div
      className="research-visual"
      aria-label="Animated dissertation research workflow showing research question, literature, methodology, analysis and findings"
      style={{
        position: 'relative',
        minHeight: '430px',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '24px',
        background:
          'linear-gradient(145deg, rgba(239,247,255,0.95), rgba(248,251,255,0.98))',
        border: '1px solid rgba(40,100,170,0.12)',
        boxShadow: '0 20px 60px rgba(30,70,120,0.08)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '12%',
          border: '1px dashed rgba(25,105,190,0.18)',
          borderRadius: '50%',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '138px',
          height: '138px',
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.95)',
          border: '1px solid rgba(30,105,190,0.2)',
          boxShadow: '0 0 35px rgba(30,105,190,0.14)',
          zIndex: 3,
        }}
      >
        <FileText size={32} />
        <strong style={{ marginTop: '8px', fontSize: '15px' }}>
          Dissertation
        </strong>
        <span
          style={{
            fontSize: '11px',
            marginTop: '4px',
            opacity: 0.65,
          }}
        >
          Research & Evidence
        </span>
      </div>

      {[
        {
          label: 'Research Question',
          icon: <Lightbulb size={20} />,
          top: '10%',
          left: '50%',
        },
        {
          label: 'Literature',
          icon: <BookOpen size={20} />,
          top: '50%',
          left: '8%',
        },
        {
          label: 'Methodology',
          icon: <FlaskConical size={20} />,
          top: '76%',
          left: '27%',
        },
        {
          label: 'Data & Analysis',
          icon: <GitBranch size={20} />,
          top: '76%',
          left: '67%',
        },
        {
          label: 'Findings',
          icon: <CheckCircle2 size={20} />,
          top: '50%',
          left: '82%',
        },
      ].map((node, index) => (
        <div
          key={node.label}
          style={{
            position: 'absolute',
            top: node.top,
            left: node.left,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 13px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.92)',
            border: '1px solid rgba(30,105,190,0.16)',
            boxShadow: '0 8px 24px rgba(30,70,120,0.08)',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            animation: `dissertationFloat 4.5s ease-in-out infinite ${index * 0.35}s`,
          }}
        >
          {node.icon}
          <span>{node.label}</span>
        </div>
      ))}

      <span
        style={{
          position: 'absolute',
          bottom: '22px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '10px',
          letterSpacing: '0.14em',
          opacity: 0.55,
          whiteSpace: 'nowrap',
        }}
      >
        RESEARCH • METHODOLOGY • ANALYSIS • ARGUMENT
      </span>

      <style>{`
        @keyframes dissertationFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }
      `}</style>
    </div>
  )
}

export default function DissertationProjectHelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      <main>
        {/* Hero */}
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                DISSERTATION • POSTGRADUATE RESEARCH • ACADEMIC GUIDANCE
              </p>

              <h1>
                Dissertation Project Help That Starts With{' '}
                <em>Understanding the Research.</em>
              </h1>

              <p className="hero-subtitle">
                A dissertation is more than a long academic document. It
                requires a defensible research question, appropriate
                methodology, credible evidence, thoughtful analysis and a
                coherent argument.
              </p>

              <p className="hero-subtitle">
                ProjectAssignments provides structured guidance to help
                postgraduate students understand those components, work through
                difficult research decisions and develop their own dissertation
                with greater confidence.
              </p>

              <div className="hero-actions">
                <Link
                  href="/contact"
                  className="button button-primary"
                >
                  Discuss Your Research <ArrowRight size={17} />
                </Link>

                <Link
                  href="/assignment-project-help"
                  className="button button-ghost"
                >
                  Explore Assignment Help <ArrowRight size={17} />
                </Link>
              </div>

              <div className="hero-proof">
                <span>
                  <CheckCircle2 size={16} /> Research-focused guidance
                </span>
                <span>
                  <CheckCircle2 size={16} /> Methodology clarity
                </span>
                <span>
                  <CheckCircle2 size={16} /> Academic integrity
                </span>
              </div>
            </div>

            <div className="hero-visual">
              <DissertationVisual />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="UNDERSTANDING DISSERTATION WORK"
              title="A strong dissertation connects the question, evidence, method and argument."
              body="Postgraduate research can become overwhelming when these elements are treated as separate tasks. A better approach is to understand how each stage supports the next."
            />

            <div
              className="two-column"
              style={{ marginTop: '42px' }}
            >
              <div>
                <p>
                  A dissertation may begin with an area of interest, but that
                  interest has to become a clearly defined research problem.
                  From there, the student needs to establish what is already
                  known, identify a meaningful research gap or question and
                  decide how the investigation should be conducted.
                </p>

                <p style={{ marginTop: '18px' }}>
                  The methodology then determines how evidence will be
                  collected and analysed. The findings need to be interpreted
                  rather than simply reported, and the final discussion needs to
                  connect those findings back to the original research
                  objectives.
                </p>
              </div>

              <div>
                <p>
                  ProjectAssignments focuses on helping students understand
                  these connections. Support may involve discussing a research
                  question, reviewing a methodology, understanding analytical
                  techniques, planning a literature review or identifying
                  weaknesses in an existing approach.
                </p>

                <p style={{ marginTop: '18px' }}>
                  The purpose is to strengthen the student&apos;s own research
                  capability rather than replace their authorship or academic
                  responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Areas */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="WHAT DISSERTATION SUPPORT CAN COVER"
              title="Support can focus on the part of your research that needs the most attention."
              body="Different researchers encounter different difficulties. Some need help narrowing a research question, while others need to understand methodology, analyse evidence or improve the structure of their argument."
            />

            <div
              className="three-column"
              style={{ marginTop: '42px' }}
            >
              {supportAreas.map((area) => (
                <article
                  className="info-card"
                  key={area.title}
                >
                  <div
                    className="icon-box"
                    aria-hidden="true"
                    style={{ marginBottom: '18px' }}
                  >
                    {area.icon}
                  </div>

                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dissertation Lifecycle */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="THE DISSERTATION JOURNEY"
              title="From research problem to defensible conclusion."
              body="While dissertation structures vary between universities and disciplines, the underlying research process usually involves a series of connected decisions."
            />

            <div
              className="approach-grid"
              style={{ marginTop: '42px' }}
            >
              {dissertationStages.map((stage) => (
                <article
                  className="approach-card"
                  key={stage.number}
                >
                  <span aria-hidden="true">{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Dissertation Research */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="TECHNICAL & RESEARCH-ORIENTED DISSERTATIONS"
              title="Technical research often needs both academic and technical understanding."
              body="Dissertations in computing and technology can combine research methodology with programming, databases, cybersecurity, data analysis, systems development or experimental work."
            />

            <div
              className="three-column"
              style={{ marginTop: '42px' }}
            >
              <article className="info-card">
                <ShieldCheck
                  size={26}
                  aria-hidden="true"
                />
                <h3>Cybersecurity Research</h3>
                <p>
                  Security assessments, threat analysis, governance, security
                  frameworks, secure architectures, experiments and research
                  interpretation.
                </p>

                <Link
                  href="/assignment-project-help/cybersecurity-assignment-help"
                  className="text-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    marginTop: '18px',
                  }}
                >
                  Explore cybersecurity projects
                  <ArrowRight size={15} />
                </Link>
              </article>

              <article className="info-card">
                <GitBranch
                  size={26}
                  aria-hidden="true"
                />
                <h3>Data & Technical Analysis</h3>
                <p>
                  Data preparation, analytical workflows, experiments, model
                  evaluation, interpretation and evidence-based technical
                  conclusions.
                </p>

                <Link
                  href="/assignment-project-help/data-science-assignment-help"
                  className="text-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    marginTop: '18px',
                  }}
                >
                  Explore data science projects
                  <ArrowRight size={15} />
                </Link>
              </article>

              <article className="info-card">
                <BookOpen
                  size={26}
                  aria-hidden="true"
                />
                <h3>Research Methodology</h3>
                <p>
                  Research questions, literature reviews, qualitative and
                  quantitative approaches, research design and interpretation of
                  academic evidence.
                </p>

                <Link
                  href="/assignment-project-help/research-project-help"
                  className="text-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    marginTop: '18px',
                  }}
                >
                  Explore research projects
                  <ArrowRight size={15} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Academic Integrity */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="ETHICAL ACADEMIC SUPPORT"
              title="The dissertation remains the researcher&apos;s work."
              body="Good guidance should make a researcher more capable, not make them dependent on someone else to produce their academic work."
            />

            <div
              className="two-column"
              style={{ marginTop: '42px' }}
            >
              <div>
                <p>
                  ProjectAssignments does not position dissertation support as
                  ghostwriting or submission of work on a student&apos;s behalf.
                  Instead, support can involve explaining difficult concepts,
                  discussing research decisions, reviewing methodology,
                  troubleshooting technical problems and providing constructive
                  feedback.
                </p>

                <p style={{ marginTop: '18px' }}>
                  This distinction matters because postgraduate research is
                  ultimately about demonstrating the researcher&apos;s own
                  ability to investigate a problem, evaluate evidence and
                  construct a defensible argument.
                </p>
              </div>

              <div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gap: '15px',
                  }}
                >
                  {[
                    'Understand difficult research concepts',
                    'Develop stronger research questions',
                    'Evaluate methodological choices',
                    'Interpret your own findings',
                    'Improve technical and academic clarity',
                    'Prepare your work for your own final submission',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        style={{ flexShrink: 0, marginTop: '2px' }}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tint">
          <div className="container faq-layout">
            <SectionHeading
              eyebrow="DISSERTATION QUESTIONS"
              title="A little more clarity before you begin."
              body="Here are some of the common questions postgraduate students have when looking for dissertation and research guidance."
            />

            <FAQ
              items={faqs.map((faq) => [
                faq.question,
                faq.answer,
              ])}
            />
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  )
}