import {
    ArrowRight,
    CheckCircle2,
    Code2,
    Database,
    FileCheck2,
    FileText,
    Network,
    Server
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer, PageHero } from '@/components/site'

export const metadata: Metadata = {
  title:
    'Technical Documentation Project Guidance | SRS, Reports & Software Documentation',
  description:
    'Technical documentation guidance for SRS documents, software documentation, architecture reports, API documentation, testing reports, project documentation, implementation guides, and academic technical reports.',
  keywords: [
    'technical documentation project help',
    'technical documentation guidance',
    'software documentation help',
    'technical report writing support',
    'SRS documentation help',
    'software requirements specification',
    'software project documentation',
    'technical project report',
    'software architecture documentation',
    'API documentation help',
    'database documentation',
    'testing documentation',
    'implementation documentation',
    'project documentation support',
    'IT technical documentation',
    'academic technical report support',
    'software engineering documentation',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/it-software-engineering/technical-documentation',
  },
  openGraph: {
    title:
      'Technical Documentation Project Guidance | SRS, Reports & Software Documentation',
    description:
      'Structured guidance for software documentation, SRS documents, technical reports, architecture documentation, API documentation, testing evidence, and project documentation.',
    url:
      'https://projectassignments.com/services/it-software-engineering/technical-documentation',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const documentationTypes = [
  {
    icon: FileText,
    title: 'Software Requirements Specification (SRS)',
    description:
      'Structured documentation that translates project objectives and stakeholder requirements into a clear technical specification for the system being developed.',
    topics: [
      'Functional requirements',
      'Non-functional requirements',
      'System constraints',
      'User roles and use cases',
      'External interfaces',
      'System assumptions',
    ],
  },
  {
    icon: Network,
    title: 'Architecture & System Documentation',
    description:
      'Documentation that explains how the major components of a software system interact and why particular architectural decisions were made.',
    topics: [
      'System architecture',
      'Component relationships',
      'Data flows',
      'Deployment architecture',
      'Technology decisions',
      'Architecture diagrams',
    ],
  },
  {
    icon: Code2,
    title: 'Software & Implementation Documentation',
    description:
      'Clear technical explanation of how an application or software component works, including implementation decisions, modules, dependencies, and configuration.',
    topics: [
      'Module descriptions',
      'Implementation details',
      'Dependencies',
      'Configuration',
      'Programming conventions',
      'Deployment instructions',
    ],
  },
  {
    icon: Server,
    title: 'API & Integration Documentation',
    description:
      'Structured documentation explaining how applications and services communicate through APIs and integration interfaces.',
    topics: [
      'Endpoints',
      'Request and response formats',
      'Authentication',
      'Error handling',
      'Parameters',
      'Integration examples',
    ],
  },
  {
    icon: Database,
    title: 'Database Documentation',
    description:
      'Technical documentation that explains the structure, relationships, constraints, and usage of application databases.',
    topics: [
      'ER diagrams',
      'Schema documentation',
      'Tables and relationships',
      'Keys and constraints',
      'Data dictionaries',
      'SQL documentation',
    ],
  },
  {
    icon: FileCheck2,
    title: 'Testing & QA Documentation',
    description:
      'Documentation that records the testing strategy, test cases, results, defects, validation evidence, and quality assessment of a software system.',
    topics: [
      'Test plans',
      'Test cases',
      'Test execution',
      'Defect reports',
      'Requirements traceability',
      'Test summaries',
    ],
  },
]

const documentationPrinciples = [
  {
    number: '01',
    title: 'Accuracy',
    description:
      'Technical documentation should accurately represent the system, implementation, architecture, configuration, and results being described.',
  },
  {
    number: '02',
    title: 'Clarity',
    description:
      'Complex technical concepts should be explained in language appropriate for the intended audience without unnecessary ambiguity or unexplained terminology.',
  },
  {
    number: '03',
    title: 'Consistency',
    description:
      'Terminology, naming conventions, diagrams, tables, headings, references, and technical descriptions should remain consistent throughout the document.',
  },
  {
    number: '04',
    title: 'Traceability',
    description:
      'Important technical decisions and implementation details should be traceable back to project requirements, architecture, testing evidence, or research objectives.',
  },
  {
    number: '05',
    title: 'Maintainability',
    description:
      'Documentation should be structured so that it can be updated as the software, architecture, requirements, or deployment environment changes.',
  },
  {
    number: '06',
    title: 'Purpose',
    description:
      'Every section should exist for a reason. Good documentation communicates useful information rather than simply increasing the page count.',
  },
]

const documentationWorkflow = [
  {
    number: '01',
    title: 'Understand the project',
    description:
      'Review the assignment brief, project requirements, architecture, implementation, research objectives, technical artefacts, and expected documentation format.',
  },
  {
    number: '02',
    title: 'Identify the documentation requirements',
    description:
      'Determine which sections, diagrams, tables, technical explanations, testing evidence, references, and appendices are required.',
  },
  {
    number: '03',
    title: 'Structure the document',
    description:
      'Create a logical information hierarchy that allows the reader to move from the project context and requirements through design, implementation, evaluation, and conclusions.',
  },
  {
    number: '04',
    title: 'Develop the technical content',
    description:
      'Explain the architecture, implementation, database, APIs, testing, deployment, or research methodology using appropriate technical depth and terminology.',
  },
  {
    number: '05',
    title: 'Add supporting evidence',
    description:
      'Integrate diagrams, screenshots, tables, code excerpts, test results, configuration details, references, and other evidence where it strengthens the explanation.',
  },
  {
    number: '06',
    title: 'Review and refine',
    description:
      'Check accuracy, consistency, readability, structure, formatting, technical terminology, traceability, and alignment with the original project requirements.',
  },
]

const documentationDeliverables = [
  'Software Requirements Specifications (SRS)',
  'Technical project reports',
  'Software design documentation',
  'System architecture documents',
  'Database design documentation',
  'API and web-service documentation',
  'Implementation guides',
  'Deployment and configuration guides',
  'Testing and QA reports',
  'User and administrator documentation',
  'Research methodology documentation',
  'Technical appendices',
  'Architecture and workflow diagrams',
  'Data dictionaries',
  'Requirements traceability matrices',
]

const audiences = [
  {
    title: 'Software Engineering Students',
    description:
      'Support with SRS documents, software architecture reports, implementation documentation, testing reports, and project documentation.',
  },
  {
    title: 'IT & Computing Students',
    description:
      'Guidance for system documentation, database documentation, API documentation, technical reports, and infrastructure-related project deliverables.',
  },
  {
    title: 'Capstone Project Teams',
    description:
      'Help turning a completed or developing system into a coherent technical document that explains the architecture, implementation, testing, and evaluation.',
  },
  {
    title: 'Postgraduate Researchers',
    description:
      'Technical documentation for research prototypes, system implementations, methodological explanations, technical evaluations, and research artefacts.',
  },
  {
    title: 'Developers & Project Teams',
    description:
      'Documentation support for software architecture, APIs, deployment, configuration, implementation details, and system handover.',
  },
  {
    title: 'Students Preparing Technical Reports',
    description:
      'Structured guidance for organising technical evidence, improving explanations, strengthening document flow, and presenting complex engineering work clearly.',
  },
]

const faqs = [
  {
    question: 'What types of technical documentation do you support?',
    answer:
      'We support software requirements specifications, technical project reports, architecture documentation, implementation documentation, API documentation, database documentation, testing reports, deployment guides, technical appendices, diagrams, and research-oriented technical documentation.',
  },
  {
    question: 'Can you help with an SRS document?',
    answer:
      'Yes. Guidance can cover functional requirements, non-functional requirements, use cases, system constraints, external interfaces, assumptions, acceptance criteria, and the overall structure of a Software Requirements Specification.',
  },
  {
    question: 'Can you document my software architecture?',
    answer:
      'Yes. We can help explain system components, relationships, data flows, deployment environments, technology decisions, architectural trade-offs, and the reasoning behind the selected design.',
  },
  {
    question: 'Can you help with API documentation?',
    answer:
      'Yes. API documentation can cover endpoints, methods, parameters, request and response formats, authentication, status codes, error handling, examples, and OpenAPI or Swagger-based documentation.',
  },
  {
    question: 'Can you help document a database?',
    answer:
      'Yes. Guidance can include ER diagrams, schemas, tables, relationships, keys, constraints, data dictionaries, SQL documentation, and explanations of how the database fits into the wider application architecture.',
  },
  {
    question: 'Can you improve an existing technical report?',
    answer:
      'Yes. We can review structure, clarity, technical explanations, consistency, diagrams, evidence presentation, section flow, and alignment with the project requirements or institutional rubric.',
  },
  {
    question: 'Can you help with testing and implementation documentation?',
    answer:
      'Yes. Support can include test plans, test cases, test results, defect documentation, implementation explanations, configuration guides, deployment procedures, and technical evaluation sections.',
  },
  {
    question: 'Do you guarantee a particular academic grade?',
    answer:
      'No. We provide technical guidance and educational support, but final grades and academic outcomes are determined by the relevant institution and assessment criteria.',
  },
]

const documentationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://projectassignments.com/services/it-software-engineering/technical-documentation#service',
      name: 'Technical Documentation Project Guidance',
      description:
        'Technical guidance for SRS documents, software documentation, architecture reports, API documentation, database documentation, testing reports, implementation guides, and technical project reports.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
      areaServed: 'Worldwide',
      serviceType: 'Technical documentation consultancy',
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/services/it-software-engineering/technical-documentation#breadcrumb',
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
          name: 'Services',
          item: 'https://projectassignments.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'IT & Software Engineering',
          item:
            'https://projectassignments.com/services/it-software-engineering',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Technical Documentation',
          item:
            'https://projectassignments.com/services/it-software-engineering/technical-documentation',
        },
      ],
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

export default function TechnicalDocumentationPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="IT SYSTEMS • TECHNICAL DOCUMENTATION • REPORTING"
          title="Technical Documentation, SRS & Software Project Report Guidance"
          body="Turn complex technical work into structured, accurate, readable documentation covering requirements, architecture, implementation, databases, APIs, testing, deployment, and project evaluation."
        />

        {/* Introduction */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">TECHNICAL DOCUMENTATION</p>

              <h2>
                Good technical work becomes much more useful when it can be
                understood and explained.
              </h2>

              <p style={{ marginTop: '18px' }}>
                A software system can be technically impressive and still be
                difficult to evaluate if its architecture, requirements,
                implementation, testing, and design decisions are poorly
                documented.
              </p>

              <p style={{ marginTop: '18px' }}>
                Technical documentation creates the connection between the
                system itself and the people who need to understand it.
                Depending on the project, that audience may include lecturers,
                researchers, developers, project managers, system
                administrators, clients, or future maintainers.
              </p>

              <p style={{ marginTop: '18px' }}>
                Our technical documentation consultancy helps students,
                researchers, developers, and project teams structure complex
                technical information into clear, professional documentation
                that reflects the actual project.
              </p>
            </div>
          </div>
        </section>

        {/* Why Documentation Matters */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">WHY TECHNICAL DOCUMENTATION MATTERS</p>

              <h2>
                Documentation is part of the engineering process, not an
                afterthought.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Documentation is often left until the end of a project. That
                can make the process unnecessarily difficult because important
                design decisions, assumptions, implementation details, and
                testing evidence may already have been forgotten or scattered
                across different files.
              </p>

              <p style={{ marginTop: '18px' }}>
                Good documentation developed alongside the project provides a
                structured record of what was designed, why decisions were
                made, how the system works, and how the implementation was
                evaluated.
              </p>

              <ul style={{ marginTop: '24px' }}>
                <li>
                  Makes complex systems easier for other people to understand.
                </li>
                <li>
                  Preserves important technical decisions and assumptions.
                </li>
                <li>
                  Provides evidence that project requirements were addressed.
                </li>
                <li>
                  Supports software maintenance and future development.
                </li>
                <li>
                  Makes testing, deployment, and troubleshooting more
                  systematic.
                </li>
                <li>
                  Helps academic reviewers evaluate technical reasoning and
                  implementation quality.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Documentation Types */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '820px',
                marginBottom: '46px',
              }}
            >
              <p className="eyebrow">DOCUMENTATION AREAS</p>

              <h2>
                Documentation across the complete software and IT project
                lifecycle.
              </h2>

              <p>
                Different project stages require different forms of technical
                documentation. A complete project may need several of these
                document types working together.
              </p>
            </div>

            <div
              style={{
                maxWidth: '920px',
                margin: '0 auto',
              }}
            >
              {documentationTypes.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    style={{
                      padding: '34px 0',
                      borderTop:
                        index === 0 ? '1px solid #dfe5ec' : undefined,
                      borderBottom: '1px solid #dfe5ec',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '18px',
                      }}
                    >
                      <div
                        className="icon-box"
                        style={{
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Icon size={23} aria-hidden="true" />
                      </div>

                      <div>
                        <h3>{item.title}</h3>

                        <p style={{ marginTop: '12px' }}>
                          {item.description}
                        </p>

                        <ul style={{ marginTop: '16px' }}>
                          {item.topics.map((topic) => (
                            <li key={topic}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* SRS */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">SOFTWARE REQUIREMENTS SPECIFICATION</p>

              <h2>
                A strong SRS gives the rest of the project something concrete
                to build against.
              </h2>

              <p style={{ marginTop: '18px' }}>
                A Software Requirements Specification translates project
                objectives and stakeholder needs into structured requirements.
                It establishes what the system is expected to do and provides a
                foundation for architecture, development, testing, and
                evaluation.
              </p>

              <p style={{ marginTop: '18px' }}>
                Depending on the project requirements, an SRS may contain:
              </p>

              <ul style={{ marginTop: '18px' }}>
                <li>Introduction and project scope</li>
                <li>System objectives</li>
                <li>Stakeholder and user descriptions</li>
                <li>Functional requirements</li>
                <li>Non-functional requirements</li>
                <li>System constraints</li>
                <li>External interface requirements</li>
                <li>Data and information requirements</li>
                <li>Security and access requirements</li>
                <li>Performance and availability requirements</li>
                <li>Assumptions and dependencies</li>
                <li>Acceptance criteria</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                We can help structure requirements so that they are specific,
                understandable, testable, and consistent with the wider
                architecture of the system.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Documentation */}
        <section className="section">
          <div className="container two-column">
            <div>
              <p className="eyebrow">ARCHITECTURE DOCUMENTATION</p>

              <h2>
                Explain how the system works, not simply what technologies it
                uses.
              </h2>

              <p>
                Architecture documentation should communicate the relationships
                between major system components and explain why the chosen
                structure is appropriate for the project's requirements.
              </p>

              <p style={{ marginTop: '18px' }}>
                This can include applications, APIs, databases, external
                services, authentication systems, cloud infrastructure,
                deployment environments, and communication flows.
              </p>

              <p style={{ marginTop: '18px' }}>
                Architecture documentation becomes particularly important in
                capstone projects and research prototypes where evaluators need
                to understand how multiple technical components work together.
              </p>
            </div>

            <div>
              <p className="eyebrow">COMMON ARTEFACTS</p>

              <ul>
                <li>System architecture diagrams</li>
                <li>Component diagrams</li>
                <li>Deployment diagrams</li>
                <li>Data-flow diagrams</li>
                <li>Sequence diagrams</li>
                <li>ER diagrams</li>
                <li>Infrastructure diagrams</li>
                <li>API integration diagrams</li>
                <li>Trust and security boundaries</li>
                <li>Technology decision explanations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Documentation */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">IMPLEMENTATION DOCUMENTATION</p>

              <h2>
                Implementation documentation explains how the design became a
                working system.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Implementation documentation should connect the architectural
                design with the actual software or infrastructure that was
                built. The objective is not to reproduce the entire source
                codebase in prose but to explain the important technical
                decisions and implementation mechanisms.
              </p>

              <h3 style={{ marginTop: '30px' }}>
                Common implementation content
              </h3>

              <ul style={{ marginTop: '18px' }}>
                <li>Technology and framework selection</li>
                <li>Application structure</li>
                <li>Module responsibilities</li>
                <li>Database integration</li>
                <li>API integration</li>
                <li>Authentication and authorization</li>
                <li>Configuration and environment variables</li>
                <li>Third-party dependencies</li>
                <li>Build and deployment requirements</li>
                <li>Important implementation decisions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* API / Database / Testing documentation */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '850px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">CONNECTED TECHNICAL DOCUMENTATION</p>

              <h2>
                APIs, databases, and testing need documentation of their own.
              </h2>

              <p>
                Larger projects often fail to communicate their technical
                depth because important subsystems are described only briefly.
                Dedicated documentation for APIs, databases, and testing can
                make the overall project substantially easier to understand.
              </p>
            </div>

            <div
              style={{
                maxWidth: '920px',
                margin: '0 auto',
              }}
            >
              <h3>API Documentation</h3>

              <p style={{ marginTop: '10px' }}>
                Document endpoints, methods, authentication requirements,
                request parameters, response structures, status codes, error
                conditions, examples, versioning, and integration behaviour.
              </p>

              <p style={{ marginTop: '26px' }}>
                See our{' '}
                <Link
                  href="/services/it-software-engineering/api-application-integration"
                  style={{
                    color: '#1769d2',
                    fontWeight: 700,
                  }}
                >
                  API & Application Integration
                </Link>{' '}
                guidance for more detail on API architecture and integration.
              </p>

              <h3 style={{ marginTop: '38px' }}>Database Documentation</h3>

              <p style={{ marginTop: '10px' }}>
                Explain schemas, tables, relationships, keys, constraints,
                normalization, data dictionaries, SQL structures, and the
                relationship between the database and application.
              </p>

              <p style={{ marginTop: '26px' }}>
                See our{' '}
                <Link
                  href="/services/it-software-engineering/database-design-sql"
                  style={{
                    color: '#1769d2',
                    fontWeight: 700,
                  }}
                >
                  Database Design & SQL
                </Link>{' '}
                guidance for deeper database coverage.
              </p>

              <h3 style={{ marginTop: '38px' }}>Testing Documentation</h3>

              <p style={{ marginTop: '10px' }}>
                Record the testing strategy, test cases, execution results,
                defects, validation evidence, regression testing, and
                relationship between tests and system requirements.
              </p>

              <p style={{ marginTop: '26px' }}>
                See our{' '}
                <Link
                  href="/services/it-software-engineering/testing-quality-assurance"
                  style={{
                    color: '#1769d2',
                    fontWeight: 700,
                  }}
                >
                  Testing & Quality Assurance
                </Link>{' '}
                guidance for more information.
              </p>
            </div>
          </div>
        </section>

        {/* Documentation Quality */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '820px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">DOCUMENTATION QUALITY</p>

              <h2>
                Strong documentation is accurate, readable, consistent, and
                traceable.
              </h2>

              <p>
                Technical documentation should serve its intended reader.
                Excessive jargon, unexplained acronyms, inconsistent
                terminology, poorly labelled diagrams, and disconnected
                sections can make technically correct documentation difficult
                to use.
              </p>

              <p style={{ marginTop: '18px' }}>
                We therefore look at both technical accuracy and communication
                quality.
              </p>
            </div>

            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {documentationPrinciples.map((principle) => (
                <article
                  key={principle.number}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr',
                    gap: '20px',
                    padding: '24px 0',
                    borderBottom: '1px solid #dfe5ec',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 800,
                      color: '#1769d2',
                    }}
                  >
                    {principle.number}
                  </span>

                  <div>
                    <h3>{principle.title}</h3>

                    <p style={{ marginTop: '8px' }}>
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Service Pitch */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">HOW PROJECTASSIGNMENTS CAN HELP</p>

              <h2>
                Have the technical work, but struggling to turn it into a
                professional document?
              </h2>

              <p style={{ marginTop: '18px' }}>
                This is where our technical documentation consultancy can add
                significant value. You may already have the software, database,
                architecture, test results, screenshots, source code, or
                research material. The challenge may simply be turning all of
                that material into a coherent technical document.
              </p>

              <p style={{ marginTop: '18px' }}>
                We can work with your existing technical material to help
                structure, explain, review, and refine the documentation around
                it.
              </p>

              <h3 style={{ marginTop: '30px' }}>
                Our documentation support can include:
              </h3>

              <ul style={{ marginTop: '18px' }}>
                <li>
                  Structuring a technical report around your project
                  requirements.
                </li>
                <li>
                  Developing or reviewing an SRS document.
                </li>
                <li>
                  Turning architecture decisions into clear technical
                  explanations.
                </li>
                <li>
                  Organising diagrams, tables, screenshots, and implementation
                  evidence.
                </li>
                <li>
                  Explaining databases, APIs, deployment, and testing in a
                  coherent narrative.
                </li>
                <li>
                  Reviewing technical consistency between requirements,
                  implementation, and evaluation.
                </li>
                <li>
                  Improving readability without stripping away the necessary
                  technical depth.
                </li>
                <li>
                  Preparing documentation for academic projects, capstones,
                  research prototypes, and professional technical work.
                </li>
              </ul>

              <p style={{ marginTop: '22px' }}>
                The goal is not to fill pages with generic technical
                information. The strongest documentation is specific to the
                actual system, the actual requirements, and the actual work
                performed.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '820px',
                marginBottom: '38px',
              }}
            >
              <p className="eyebrow">DOCUMENTATION DELIVERABLES</p>

              <h2>
                Documentation support can focus on one document or the complete
                project record.
              </h2>
            </div>

            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <ul>
                {documentationDeliverables.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '11px',
                      padding: '11px 0',
                      borderBottom: '1px solid #dfe5ec',
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        marginTop: '2px',
                        color: '#1769d2',
                      }}
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '820px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">DOCUMENTATION WORKFLOW</p>

              <h2>
                A structured process from project material to finished
                documentation.
              </h2>

              <p>
                The exact workflow depends on the document and the project, but
                a systematic process helps ensure that important technical
                information is not lost between implementation and
                documentation.
              </p>
            </div>

            <div
              style={{
                maxWidth: '920px',
                margin: '0 auto',
              }}
            >
              {documentationWorkflow.map((step) => (
                <article
                  key={step.number}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '24px',
                    padding: '30px 0',
                    borderBottom: '1px solid #dfe5ec',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#1769d2',
                    }}
                  >
                    {step.number}
                  </span>

                  <div>
                    <h3>{step.title}</h3>

                    <p style={{ marginTop: '8px' }}>
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Academic & Professional Support */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '850px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">WHO WE SUPPORT</p>

              <h2>
                Documentation support across academic, research, and
                professional technical work.
              </h2>

              <p>
                Documentation requirements vary by audience. A university
                capstone report, enterprise architecture document, API
                reference, and research prototype report may all describe
                technical systems differently.
              </p>
            </div>

            <div
              style={{
                maxWidth: '920px',
                margin: '0 auto',
              }}
            >
              {audiences.map((audience, index) => (
                <article
                  key={audience.title}
                  style={{
                    padding: '25px 0',
                    borderBottom: '1px solid #dfe5ec',
                  }}
                >
                  <h3>
                    {index + 1}. {audience.title}
                  </h3>

                  <p style={{ marginTop: '8px' }}>
                    {audience.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Related Areas */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '850px',
                marginBottom: '38px',
              }}
            >
              <p className="eyebrow">RELATED IT & SOFTWARE ENGINEERING AREAS</p>

              <h2>
                Documentation becomes stronger when it reflects the actual
                engineering behind the project.
              </h2>

              <p>
                Technical documentation naturally connects with every other
                part of a software or IT project. These related areas can
                provide the technical material that the documentation needs to
                explain.
              </p>
            </div>

            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p>
                Explore{' '}
                <Link
                  href="/services/it-software-engineering/software-engineering"
                  style={{
                    color: '#1769d2',
                    fontWeight: 700,
                  }}
                >
                  Software Engineering
                </Link>{' '}
                for application development, programming, testing, and software
                architecture.
              </p>

              <p style={{ marginTop: '14px' }}>
                Explore{' '}
                <Link
                  href="/services/it-software-engineering/system-architecture-design"
                  style={{
                    color: '#1769d2',
                    fontWeight: 700,
                  }}
                >
                  System Architecture & Design
                </Link>{' '}
                for architecture, components, data flows, and design decisions.
              </p>

              <p style={{ marginTop: '14px' }}>
                Explore{' '}
                <Link
                  href="/services/it-software-engineering/database-design-sql"
                  style={{
                    color: '#1769d2',
                    fontWeight: 700,
                  }}
                >
                  Database Design & SQL
                </Link>{' '}
                for schemas, database relationships, SQL, and data modelling.
              </p>

              <p style={{ marginTop: '14px' }}>
                Explore{' '}
                <Link
                  href="/services/it-software-engineering/api-application-integration"
                  style={{
                    color: '#1769d2',
                    fontWeight: 700,
                  }}
                >
                  API & Application Integration
                </Link>{' '}
                for service interfaces and application communication.
              </p>

              <p style={{ marginTop: '14px' }}>
                Explore{' '}
                <Link
                  href="/services/it-software-engineering/testing-quality-assurance"
                  style={{
                    color: '#1769d2',
                    fontWeight: 700,
                  }}
                >
                  Testing & Quality Assurance
                </Link>{' '}
                for test planning, validation, defect analysis, and QA
                documentation.
              </p>

              <p style={{ marginTop: '14px' }}>
                Explore{' '}
                <Link
                  href="/services/it-software-engineering/devops-containerization"
                  style={{
                    color: '#1769d2',
                    fontWeight: 700,
                  }}
                >
                  DevOps & Containerization
                </Link>{' '}
                for deployment, infrastructure, CI/CD, and automation
                documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Responsible Guidance */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">RESPONSIBLE TECHNICAL GUIDANCE</p>

              <h2>
                Technical documentation should explain real work, not create
                generic pages.
              </h2>

              <p style={{ marginTop: '18px' }}>
                We focus on documentation that reflects the actual system,
                implementation, research, testing, or technical work involved
                in the project.
              </p>

              <p style={{ marginTop: '18px' }}>
                That means working from the available requirements, technical
                artefacts, implementation evidence, project objectives, and
                documentation standards rather than filling sections with
                unrelated material.
              </p>

              <p style={{ marginTop: '18px' }}>
                Academic work should remain your own. Our role is to make
                difficult technical documentation requirements easier to
                understand and help you communicate your technical work more
                effectively.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="faq-layout">
              <div>
                <p className="eyebrow">TECHNICAL DOCUMENTATION FAQ</p>

                <h2>
                  Questions about technical documentation and project reports.
                </h2>

                <p>
                  Common questions about SRS documents, software reports,
                  architecture documentation, APIs, testing, and technical
                  project deliverables.
                </p>
              </div>

              <div className="faq-list">
                {faqs.map((faq) => (
                  <details className="faq-item" key={faq.question}>
                    <summary
                      style={{
                        cursor: 'pointer',
                        padding: '22px 0',
                        fontWeight: 700,
                        color: 'var(--foreground)',
                      }}
                    >
                      {faq.question}
                    </summary>

                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Service CTA */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '920px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow">NEED HELP WITH TECHNICAL DOCUMENTATION?</p>

              <h2>
                You have built the system. Now let's make the technical work
                understandable.
              </h2>

              <p
                style={{
                  maxWidth: '720px',
                  margin: '18px auto 28px',
                }}
              >
                Share your project brief, SRS requirements, architecture
                diagrams, source code, database schema, API details, testing
                evidence, research material, or existing report. We can help
                you structure and strengthen the technical documentation around
                the work.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '12px',
                }}
              >
                <a
                  href="https://wa.me/918595089080?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20technical%20documentation%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  Discuss Your Documentation Project
                  <ArrowRight size={16} aria-hidden="true" />
                </a>

                <Link
                  href="/services"
                  className="button button-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  Explore Our Services
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(documentationSchema),
        }}
      />
    </>
  )
}