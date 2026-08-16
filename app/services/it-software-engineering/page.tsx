import {
    ArrowRight,
    CheckCircle2,
    Cloud,
    Code2,
    Database,
    GitBranch,
    Layers3,
    Server,
    ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer, PageHero } from '@/components/site'

export const metadata: Metadata = {
  title:
    'IT & Software Engineering Project Consultancy | ProjectAssignments.com',
  description:
    'Technical guidance for software engineering, system architecture, cloud infrastructure, databases, APIs, DevOps, IT capstone projects, and technical documentation.',
  keywords: [
    'software engineering project consultancy',
    'IT project consultancy',
    'software architecture guidance',
    'IT capstone project support',
    'cloud architecture support',
    'database design consultancy',
    'SQL project support',
    'API integration support',
    'DevOps project guidance',
    'Docker project support',
    'software engineering academic support',
    'IT systems project support',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/it-software-engineering',
  },
  openGraph: {
    title:
      'IT & Software Engineering Project Consultancy | ProjectAssignments.com',
    description:
      'Technical guidance for software engineering, system architecture, cloud infrastructure, databases, APIs, DevOps, IT capstone projects, and technical documentation.',
    url:
      'https://projectassignments.com/services/it-software-engineering',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const serviceAreas = [
  {
    icon: <Code2 size={24} aria-hidden="true" />,
    title: 'Software Engineering',
    description:
      'Guidance across software development concepts, application architecture, programming practices, debugging, testing, version control, and maintainable system design.',
    topics:
      'Software architecture, programming, debugging, testing, Git, design patterns, application development',
  },
  {
    icon: <Layers3 size={24} aria-hidden="true" />,
    title: 'System Architecture & Design',
    description:
      'Translate functional requirements into structured system architectures, component relationships, data flows, interfaces, and technical design decisions.',
    topics:
      'System architecture, UML, component design, data flow, requirements, SRS, technical specifications',
  },
  {
    icon: <Cloud size={24} aria-hidden="true" />,
    title: 'Cloud Architecture',
    description:
      'Technical guidance for designing and understanding cloud-based systems, infrastructure components, deployment models, identity, scalability, and availability.',
    topics:
      'AWS, Azure, GCP, cloud architecture, IAM, scalability, availability, deployment',
  },
  {
    icon: <GitBranch size={24} aria-hidden="true" />,
    title: 'DevOps & Containerization',
    description:
      'Understand how development and operations practices connect through containerization, deployment workflows, automation, and infrastructure management.',
    topics:
      'Docker, containers, CI/CD concepts, deployment workflows, infrastructure automation, Terraform',
  },
  {
    icon: <Database size={24} aria-hidden="true" />,
    title: 'Database Design & SQL',
    description:
      'Guidance on relational database architecture, data modelling, normalization, SQL development, transactions, indexing, and database integration.',
    topics:
      'PostgreSQL, MySQL, SQL, ER modelling, normalization, transactions, indexing, DBMS',
  },
  {
    icon: <Server size={24} aria-hidden="true" />,
    title: 'API & Application Integration',
    description:
      'Understand how applications communicate through APIs and how different software components can be integrated into a coherent technical architecture.',
    topics:
      'REST APIs, JSON, authentication, API design, integration, backend services, microservices',
  },
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    title: 'Testing & Quality Assurance',
    description:
      'Structured guidance for software testing, validation, test planning, defect analysis, quality assurance, and technical evidence.',
    topics:
      'Unit testing, integration testing, system testing, test cases, QA, debugging, validation',
  },
  {
    icon: <CheckCircle2 size={24} aria-hidden="true" />,
    title: 'Technical Documentation',
    description:
      'Develop clearer technical documentation around requirements, architecture, implementation, testing, deployment, and project evaluation.',
    topics:
      'SRS, UML, architecture diagrams, technical reports, implementation documentation, testing reports',
  },
]

const technologyStack = [
  'Python',
  'Java',
  'C++',
  'JavaScript',
  'React',
  'Node.js',
  'SQL',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Azure',
  'GCP',
  'Git',
  'Terraform',
]

const workflow = [
  {
    number: '01',
    title: 'Understand the requirements',
    description:
      'Identify the project objective, functional requirements, technical constraints, expected outputs, and evaluation criteria.',
  },
  {
    number: '02',
    title: 'Design the solution',
    description:
      'Translate requirements into an appropriate architecture, technology stack, data model, interfaces, and implementation strategy.',
  },
  {
    number: '03',
    title: 'Build and integrate',
    description:
      'Work through the relevant implementation concepts, application components, database structures, APIs, and supporting infrastructure.',
  },
  {
    number: '04',
    title: 'Test and validate',
    description:
      'Evaluate whether the system behaves as expected through appropriate testing, debugging, validation, and technical evidence.',
  },
  {
    number: '05',
    title: 'Document the implementation',
    description:
      'Connect the technical implementation to diagrams, requirements, testing results, design decisions, and project documentation.',
  },
  {
    number: '06',
    title: 'Review and refine',
    description:
      'Identify weaknesses, inconsistencies, technical gaps, and areas where the architecture or documentation can be strengthened.',
  },
]

const audiences = [
  {
    title: 'Software Engineering Students',
    description:
      'Support with software architecture, programming concepts, application design, testing, debugging, and technical documentation.',
  },
  {
    title: 'IT & Computing Students',
    description:
      'Guidance across systems analysis, databases, networking, cloud computing, APIs, infrastructure, and technical projects.',
  },
  {
    title: 'Capstone Project Teams',
    description:
      'Technical support for architecture decisions, implementation planning, system documentation, testing, and project evaluation.',
  },
  {
    title: 'Postgraduate Researchers',
    description:
      'Technical methodology, system design, research prototypes, data systems, implementation documentation, and evaluation.',
  },
  {
    title: 'Researchers & Professionals',
    description:
      'Structured technical guidance for applied research, proof-of-concept systems, architecture reviews, and technology-focused projects.',
  },
  {
    title: 'Students Working with Cloud & DevOps',
    description:
      'Guidance on cloud architecture, containers, deployment concepts, infrastructure, automation, and technical documentation.',
  },
]

const faqs = [
  {
    question: 'What IT and software engineering areas do you support?',
    answer:
      'We support software engineering, system architecture, programming, databases and SQL, APIs, cloud architecture, DevOps, containerization, testing, technical documentation, and related IT project areas.',
  },
  {
    question: 'Can you help with an IT capstone project?',
    answer:
      'Yes. We can provide technical guidance around requirements, system architecture, technology selection, implementation concepts, testing, documentation, and evaluation. The objective is to help you understand and develop your own project.',
  },
  {
    question: 'Do you support cloud architecture projects?',
    answer:
      'Yes. Guidance can cover cloud architecture concepts, infrastructure components, deployment models, identity and access management, scalability, availability, and services across platforms such as AWS, Azure, and Google Cloud.',
  },
  {
    question: 'Can you help with database design and SQL?',
    answer:
      'Yes. Support includes relational modelling, ER diagrams, normalization, SQL queries, database architecture, transactions, indexing, PostgreSQL and other relational database concepts.',
  },
  {
    question: 'Can you help with Docker and DevOps projects?',
    answer:
      'Yes. We can help you understand containerization, Docker workflows, deployment concepts, CI/CD principles, infrastructure automation, and related DevOps architecture.',
  },
  {
    question: 'Can you review my software architecture?',
    answer:
      'Yes. Architecture reviews can examine requirements alignment, component relationships, data flows, technology choices, scalability considerations, integration points, security considerations, and documentation quality.',
  },
  {
    question: 'Do you guarantee a particular academic grade?',
    answer:
      'No. We provide technical guidance and educational support, but final grades and academic outcomes are determined by the relevant institution and assessment criteria.',
  },
]

const softwareEngineeringSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://projectassignments.com/services/it-software-engineering#service',
      name: 'IT & Software Engineering Project Consultancy',
      description:
        'Technical guidance for software engineering, system architecture, cloud infrastructure, databases, APIs, DevOps, IT capstone projects, and technical documentation.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
      areaServed: 'Worldwide',
      serviceType: 'IT and software engineering technical consultancy',
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/services/it-software-engineering#breadcrumb',
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

export default function ITSoftwareEngineeringPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="IT SYSTEMS • SOFTWARE ENGINEERING • CLOUD"
          title="IT & Software Engineering Projects, Architecture & Technical Guidance"
          body="Technical guidance for software engineering, system architecture, cloud infrastructure, databases, APIs, DevOps, testing, and IT capstone projects."
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
              <p className="eyebrow">IT & SOFTWARE ENGINEERING</p>

              <h2>
                Build a stronger understanding of the systems behind the
                software.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Modern IT projects rarely involve a single programming language
                or isolated technical component. A complete solution may
                combine application code, databases, APIs, cloud
                infrastructure, containers, security controls, testing
                processes, and technical documentation.
              </p>

              <p style={{ marginTop: '18px' }}>
                Our technical consultancy helps students, researchers, and
                professionals understand how these components fit together and
                how to make defensible engineering decisions throughout a
                project.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '760px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">TECHNICAL AREAS</p>

              <h2>
                Practical guidance across the software engineering lifecycle.
              </h2>

              <p>
                From requirements and architecture through implementation,
                testing, deployment, and documentation, we focus on the
                technical decisions that make a project coherent and
                explainable.
              </p>
            </div>

            <div className="expertise-grid">
              {serviceAreas.map((service) => (
                <article className="expertise-card" key={service.title}>
                  <div
                    className="icon-box"
                    style={{ marginBottom: '20px' }}
                  >
                    {service.icon}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <p
                    style={{
                      marginTop: '18px',
                      fontSize: '14px',
                      color: '#1167d8',
                    }}
                  >
                    <strong>Common areas:</strong> {service.topics}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="section">
          <div className="container two-column">
            <div>
              <p className="eyebrow">SYSTEM ARCHITECTURE</p>

              <h2>
                Good software starts with understanding the system, not just
                writing code.
              </h2>

              <p>
                Software engineering projects often become difficult when
                requirements, components, data, interfaces, and deployment
                environments are considered independently.
              </p>

              <p style={{ marginTop: '18px' }}>
                We help connect those elements into a coherent technical
                model. This can include requirements analysis, architecture
                diagrams, component relationships, database design, API
                boundaries, deployment considerations, and testing strategy.
              </p>

              <Link
                href="/technologies"
                className="button button-secondary"
                style={{
                  marginTop: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Explore Technologies
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="consultancy-card" style={{ padding: '30px' }}>
              <p className="eyebrow">ARCHITECTURE CHECKLIST</p>

              {[
                'Requirements and system objectives',
                'Application and component architecture',
                'Data models and database relationships',
                'API and integration boundaries',
                'Cloud and deployment architecture',
                'Security and access considerations',
                'Testing and validation strategy',
                'Technical documentation',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    padding: '13px 0',
                    borderBottom: '1px solid #edf1f6',
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud & DevOps */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '780px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">CLOUD & DEVOPS</p>

              <h2>
                Understand how applications move from development to
                deployment.
              </h2>

              <p>
                Cloud and DevOps projects require an understanding of more than
                individual services. Architecture, networking, identity,
                containers, deployment workflows, monitoring, automation, and
                cost considerations can all affect the final system.
              </p>
            </div>

            <div className="three-column">
              <article className="info-card">
                <h3>Cloud Architecture</h3>
                <p>
                  Understand cloud components, architecture patterns,
                  deployment models, availability, scalability, and identity
                  considerations across major cloud platforms.
                </p>
              </article>

              <article className="info-card">
                <h3>Containerization</h3>
                <p>
                  Work through container concepts, Docker images, containers,
                  networking, volumes, configuration, and deployment
                  considerations.
                </p>
              </article>

              <article className="info-card">
                <h3>Infrastructure & Automation</h3>
                <p>
                  Understand infrastructure-as-code concepts, repeatable
                  deployment, configuration management, CI/CD principles, and
                  infrastructure automation.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Database & APIs */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '780px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">DATA & INTEGRATION</p>

              <h2>
                Databases and APIs are the connective tissue of modern
                applications.
              </h2>

              <p>
                A strong software project needs a clear understanding of how
                data is stored, accessed, validated, transformed, and exchanged
                between system components.
              </p>
            </div>

            <div className="two-column">
              <article className="consultancy-card" style={{ padding: '30px' }}>
                <div
                  className="icon-box"
                  style={{ marginBottom: '20px' }}
                >
                  <Database size={24} aria-hidden="true" />
                </div>

                <h3>Database Engineering</h3>

                <p>
                  Guidance across relational modelling, ER diagrams,
                  normalization, SQL, database constraints, transactions,
                  indexing, queries, and application-database integration.
                </p>

                <ul style={{ marginTop: '20px' }}>
                  <li>Relational data modelling</li>
                  <li>SQL query design</li>
                  <li>Normalization and constraints</li>
                  <li>PostgreSQL and relational DBMS concepts</li>
                  <li>Transactions and data integrity</li>
                </ul>
              </article>

              <article className="consultancy-card" style={{ padding: '30px' }}>
                <div
                  className="icon-box"
                  style={{ marginBottom: '20px' }}
                >
                  <Server size={24} aria-hidden="true" />
                </div>

                <h3>API & Integration Engineering</h3>

                <p>
                  Understand how independent application components exchange
                  data and functionality through well-designed interfaces and
                  APIs.
                </p>

                <ul style={{ marginTop: '20px' }}>
                  <li>REST API concepts</li>
                  <li>JSON and data exchange</li>
                  <li>Authentication and authorization</li>
                  <li>Backend service integration</li>
                  <li>API documentation and testing</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '760px',
                marginBottom: '38px',
              }}
            >
              <p className="eyebrow">TECHNOLOGY STACK</p>

              <h2>
                Technologies commonly encountered across IT and software
                engineering projects.
              </h2>

              <p>
                The appropriate technology depends on the project requirements,
                learning objectives, architecture, and deployment environment.
                We focus on understanding those decisions rather than treating
                a particular stack as universally appropriate.
              </p>
            </div>

            <div className="technology-grid">
              {technologyStack.map((technology) => (
                <div
                  className="consultancy-card"
                  key={technology}
                  style={{
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  <strong>{technology}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '780px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">PROJECT WORKFLOW</p>

              <h2>
                A structured engineering process from requirements to review.
              </h2>

              <p>
                The exact workflow varies by project, but a disciplined
                sequence helps connect technical decisions with measurable
                project outcomes.
              </p>
            </div>

            <div className="approach-grid">
              {workflow.map((step) => (
                <article className="approach-card" key={step.number}>
                  <span aria-hidden="true">{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Support */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '780px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">ACADEMIC & RESEARCH SUPPORT</p>

              <h2>
                Technical guidance for coursework, capstones, and research.
              </h2>

              <p>
                IT and software engineering projects often require students to
                explain not only what they built, but why particular technical
                decisions were made and how the resulting system was evaluated.
              </p>
            </div>

            <div className="audience-grid">
              {audiences.map((audience) => (
                <article className="audience-card" key={audience.title}>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Responsible Guidance */}
        <section className="section">
          <div className="container">
            <div
              className="consultancy-card"
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '42px 36px',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow">RESPONSIBLE TECHNICAL GUIDANCE</p>

              <h2>
                The objective is understanding, not simply producing code.
              </h2>

              <p style={{ maxWidth: '720px', margin: '0 auto' }}>
                We provide technical explanations, architecture guidance,
                reviews, troubleshooting support, and research-oriented
                assistance designed to help you understand the systems you are
                working with and develop your own technical deliverables.
              </p>

              <p
                style={{
                  maxWidth: '720px',
                  margin: '18px auto 0',
                }}
              >
                Academic work should remain your own. Our role is to make
                difficult technical concepts clearer and help you make better
                engineering decisions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tint">
          <div className="container">
            <div className="faq-layout">
              <div>
                <p className="eyebrow">IT & SOFTWARE ENGINEERING FAQ</p>

                <h2>
                  Questions about software engineering and IT project support.
                </h2>

                <p>
                  A few common questions about the technical guidance we
                  provide.
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

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div
              className="consultancy-card"
              style={{
                padding: '48px 32px',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow">HAVE AN IT PROJECT?</p>

              <h2>
                Let's understand the technical challenge before choosing the
                solution.
              </h2>

              <p
                style={{
                  maxWidth: '680px',
                  margin: '0 auto 26px',
                }}
              >
                Share your project brief, system requirements, architecture
                question, software engineering challenge, or research
                objective and discuss the most appropriate technical approach.
              </p>

              <a
                href="https://wa.me/918595089080?text=Hi%2C%20I%20would%20like%20to%20discuss%20an%20IT%20or%20software%20engineering%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Discuss Your IT Project
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareEngineeringSchema),
        }}
      />
    </>
  )
}