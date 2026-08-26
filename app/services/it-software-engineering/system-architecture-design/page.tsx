import {
    ArrowRight,
    CheckCircle2,
    Database,
    GitBranch,
    Layers3,
    Server,
    ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Footer, PageHero } from '@/components/site'

export const metadata: Metadata = {
  title:
    'System Architecture & Design Project Guidance | ProjectAssignments.com',
  description:
    'Expert guidance for system architecture and design projects covering requirements analysis, UML, component architecture, data flows, APIs, databases, scalability, cloud deployment, security, and technical documentation.',
  keywords: [
    'system architecture assignment help',
    'system design project guidance',
    'software architecture assignment help',
    'system architecture consultancy',
    'software architecture project support',
    'UML diagram assignment help',
    'system design project help',
    'software architecture guidance',
    'component diagram help',
    'data flow diagram help',
    'system architecture documentation',
    'IT architecture project support',
    'software engineering project guidance',
    'technical architecture assignment help',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/it-software-engineering/system-architecture-design',
  },
  openGraph: {
    title:
      'System Architecture & Design Project Guidance | ProjectAssignments.com',
    description:
      'Technical guidance for system architecture, software design, UML, data flows, APIs, databases, scalability, security, cloud deployment, and technical documentation.',
    url:
      'https://projectassignments.com/services/it-software-engineering/system-architecture-design',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const architectureAreas = [
  {
    title: 'Requirements Analysis',
    content:
      'Every architecture begins with a clear understanding of what the system is expected to accomplish. We help translate functional requirements, non-functional requirements, business rules, user expectations, and technical constraints into architectural decisions that can be explained and evaluated.',
    points: [
      'Functional and non-functional requirements',
      'Business rules and system constraints',
      'Functional decomposition',
      'Quality attributes and acceptance criteria',
      'Stakeholder and system boundaries',
      'Traceability between requirements and design decisions',
    ],
  },
  {
    title: 'Architectural Styles & Patterns',
    content:
      'Different systems require different architectural approaches. A small academic application may benefit from a straightforward layered architecture, while a distributed platform may require event-driven, service-oriented, or microservice-based design. We provide guidance on selecting and explaining an architecture appropriate to the project rather than applying a pattern simply because it is popular.',
    points: [
      'Layered and n-tier architecture',
      'Client-server architecture',
      'Monolithic and modular application design',
      'Service-oriented architecture',
      'Microservices architecture',
      'Event-driven architecture',
      'Serverless and cloud-native patterns',
      'MVC and related application patterns',
    ],
  },
  {
    title: 'Component & Module Design',
    content:
      'A good architecture makes the responsibilities of different parts of a system clear. Component and module design focuses on identifying the major building blocks, defining their responsibilities, and establishing appropriate relationships between them.',
    points: [
      'Component identification and responsibilities',
      'Module decomposition',
      'Interfaces and dependencies',
      'Separation of concerns',
      'Loose coupling and cohesion',
      'Service boundaries',
      'Dependency management',
    ],
  },
  {
    title: 'Data Architecture',
    content:
      'System architecture and data architecture are closely connected. Applications need clearly defined approaches for storing, accessing, transforming, and exchanging information. We help students reason about data flows, persistence, database selection, data ownership, and integrity as part of the overall system design.',
    points: [
      'Data modelling',
      'Relational and NoSQL database considerations',
      'Entity relationships',
      'Data ownership and boundaries',
      'Persistence architecture',
      'Data flows between components',
      'Transactions and consistency',
      'Caching and data access patterns',
    ],
  },
]

const designDeliverables = [
  'System context diagrams',
  'Use case diagrams',
  'Class diagrams',
  'Sequence diagrams',
  'Activity diagrams',
  'Component diagrams',
  'Deployment diagrams',
  'Data flow diagrams',
  'Entity-relationship diagrams',
  'Architecture decision records',
  'System architecture documents',
  'Technical design specifications',
]

const qualityAttributes = [
  {
    title: 'Scalability',
    description:
      'How well can the system accommodate increasing users, transactions, workloads, or data volumes without requiring fundamental architectural changes?',
  },
  {
    title: 'Availability',
    description:
      'How should the system behave when individual components, services, infrastructure resources, or network connections become unavailable?',
  },
  {
    title: 'Performance',
    description:
      'Which architectural decisions influence response time, throughput, resource utilization, concurrency, and overall system responsiveness?',
  },
  {
    title: 'Security',
    description:
      'How should authentication, authorization, data protection, trust boundaries, secrets, and security controls be incorporated into the architecture?',
  },
  {
    title: 'Maintainability',
    description:
      'Can developers understand, modify, test, and extend the system without introducing unnecessary complexity or widespread changes?',
  },
  {
    title: 'Reliability',
    description:
      'How does the architecture handle failures, unexpected inputs, dependency outages, data errors, and recovery scenarios?',
  },
]

const workflow = [
  {
    number: '01',
    title: 'Understand the problem',
    description:
      'Review the project brief, stakeholders, functional requirements, constraints, expected users, business objectives, and evaluation criteria.',
  },
  {
    number: '02',
    title: 'Define the system boundary',
    description:
      'Identify what belongs inside the system, what remains external, which actors interact with it, and where important trust and integration boundaries exist.',
  },
  {
    number: '03',
    title: 'Decompose the system',
    description:
      'Break the system into appropriate layers, components, modules, services, data stores, and external dependencies.',
  },
  {
    number: '04',
    title: 'Select the architecture',
    description:
      'Evaluate architectural styles and technology choices against the functional requirements and quality attributes of the project.',
  },
  {
    number: '05',
    title: 'Model interactions and data',
    description:
      'Document component relationships, request flows, data movement, interfaces, dependencies, and important system behaviours.',
  },
  {
    number: '06',
    title: 'Evaluate and refine',
    description:
      'Review the architecture for scalability, security, performance, maintainability, reliability, technical feasibility, and consistency with the requirements.',
  },
]

const audiences = [
  'Software engineering students',
  'Computer science students',
  'Information technology students',
  'Systems analysis students',
  'Final-year and capstone project teams',
  'Postgraduate software engineering students',
  'Researchers developing technical prototypes',
  'Students preparing software design documentation',
]

const faqs = [
  {
    question: 'What is system architecture and design?',
    answer:
      'System architecture and design describes how a software or IT system is structured and how its major components interact. It connects requirements to components, services, databases, interfaces, deployment environments, security considerations, and other technical decisions.',
  },
  {
    question: 'Can you help with a software architecture assignment?',
    answer:
      'Yes. We provide guidance across requirements analysis, architectural styles, component design, UML diagrams, data architecture, APIs, deployment architecture, quality attributes, architectural trade-offs, and technical documentation.',
  },
  {
    question: 'Can you help me choose between monolithic and microservice architecture?',
    answer:
      'Yes. The choice should be based on project requirements rather than popularity. We can help compare factors such as system size, team structure, deployment complexity, scalability, operational overhead, data consistency, and maintainability.',
  },
  {
    question: 'Do you help with UML diagrams?',
    answer:
      'Yes. Guidance can cover use case, class, sequence, activity, component, deployment, and other UML diagrams where they are appropriate to the project. We also help explain how each diagram relates to the architecture and requirements.',
  },
  {
    question: 'Can you help with system design for a capstone project?',
    answer:
      'Yes. We can help structure the architecture of a capstone project from requirements and system boundaries through component design, databases, APIs, deployment considerations, testing, and technical documentation.',
  },
  {
    question: 'Can you review an architecture I have already designed?',
    answer:
      'Yes. An architecture review can examine requirements alignment, component responsibilities, dependencies, data flows, scalability, security, performance, maintainability, deployment assumptions, and potential architectural weaknesses.',
  },
  {
    question: 'Will you choose the technology stack for my project?',
    answer:
      'We can provide technical guidance on technology selection and explain the trade-offs involved. The final choice should reflect the project requirements, learning objectives, constraints, and evaluation criteria.',
  },
  {
    question: 'Do you guarantee a particular academic grade?',
    answer:
      'No. We provide technical guidance and educational support, but final grades and academic outcomes are determined by the relevant institution and assessment criteria.',
  },
]

const systemArchitectureSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://projectassignments.com/services/it-software-engineering/system-architecture-design#service',
      name: 'System Architecture & Design Project Guidance',
      description:
        'Technical guidance for system architecture, software design, UML, component architecture, data flows, APIs, databases, scalability, security, cloud deployment, and technical documentation.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
      areaServed: 'Worldwide',
      serviceType: 'System architecture and software design technical consultancy',
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/services/it-software-engineering/system-architecture-design#breadcrumb',
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
          name: 'System Architecture & Design',
          item:
            'https://projectassignments.com/services/it-software-engineering/system-architecture-design',
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

export default function SystemArchitectureDesignPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="IT SYSTEMS • SOFTWARE ENGINEERING • ARCHITECTURE"
          title="System Architecture & Design Project Guidance"
          body="Understand how complex software systems are structured, how their components interact, and how architectural decisions connect requirements, data, applications, infrastructure, security, and deployment."
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
              <p className="eyebrow">SYSTEM ARCHITECTURE & DESIGN</p>

              <h2>
                Turn project requirements into a system that makes technical
                sense.
              </h2>

              <p style={{ marginTop: '20px' }}>
                A software project can contain perfectly written code and
                still suffer from poor architecture. When responsibilities are
                unclear, components are tightly coupled, data flows are
                difficult to understand, or technology decisions are made
                without considering the wider system, even relatively simple
                applications can become difficult to develop and maintain.
              </p>

              <p style={{ marginTop: '18px' }}>
                System architecture provides the higher-level structure that
                connects requirements with implementation. It describes the
                major components of a system, their responsibilities, their
                interactions, the data they use, the external systems they
                depend on, and the environment in which the solution will
                operate.
              </p>

              <p style={{ marginTop: '18px' }}>
                Our System Architecture & Design Project Guidance helps
                students and researchers understand these relationships and
                make defensible technical decisions throughout their projects.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture image */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '1050px',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  marginBottom: '34px',
                  maxWidth: '780px',
                }}
              >
                <p className="eyebrow">FROM REQUIREMENTS TO ARCHITECTURE</p>

                <h2>
                  Architecture provides the bridge between what a system must
                  do and how it will actually work.
                </h2>

                <p style={{ marginTop: '18px' }}>
                  A well-designed architecture does not begin with a technology
                  list. It begins with the problem being solved. Requirements,
                  users, constraints, data, integrations, quality attributes,
                  and operational expectations should influence the structure
                  of the final system.
                </p>
              </div>

              <figure style={{ margin: 0 }}>
                <Image
                  src="/images/system-architecture-design.png"
                  alt="System architecture and design diagram showing the relationship between requirements, system components, data, interfaces, infrastructure, and deployment"
                  width={1600}
                  height={900}
                  sizes="(max-width: 1100px) 100vw, 1050px"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '12px',
                  }}
                />

                <figcaption
                  style={{
                    marginTop: '12px',
                    fontSize: '14px',
                    color: 'var(--muted-foreground)',
                    textAlign: 'center',
                  }}
                >
                  A system architecture model connects requirements, application
                  components, data, integrations, infrastructure, and
                  deployment decisions.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Why architecture is difficult */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">WHY SYSTEM DESIGN IS CHALLENGING</p>

              <h2>
                Architecture is about making decisions under constraints.
              </h2>

              <p style={{ marginTop: '20px' }}>
                System design assignments can appear straightforward because
                the final deliverable may only consist of diagrams and a
                written architecture document. In reality, producing a
                defensible design requires several technical decisions to work
                together.
              </p>

              <p style={{ marginTop: '18px' }}>
                Students often have to decide how the system should be divided,
                where data should live, how components communicate, which
                responsibilities belong together, which technologies are
                appropriate, and how the system should respond when individual
                components fail.
              </p>

              <p style={{ marginTop: '18px' }}>
                The difficulty increases when the project introduces cloud
                infrastructure, distributed services, external APIs,
                authentication, large data volumes, concurrent users, or
                strict performance and availability requirements.
              </p>

              <ul style={{ marginTop: '24px' }}>
                <li>Turning vague requirements into explicit system boundaries</li>
                <li>Choosing an architecture appropriate to the project's scale</li>
                <li>Separating responsibilities between components and services</li>
                <li>Designing reliable data and communication flows</li>
                <li>Balancing scalability, performance, security, and simplicity</li>
                <li>Explaining architectural trade-offs in technical documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core architecture areas */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '820px',
                marginBottom: '46px',
              }}
            >
              <p className="eyebrow">CORE ARCHITECTURE AREAS</p>

              <h2>
                From requirements and architecture patterns to data and
                component boundaries.
              </h2>

              <p style={{ marginTop: '18px' }}>
                System architecture is not a single diagram. It is a collection
                of related technical decisions that describe how the complete
                system is expected to behave.
              </p>
            </div>

            <div style={{ maxWidth: '920px' }}>
              {architectureAreas.map((area, index) => (
                <article
                  key={area.title}
                  style={{
                    padding: '34px 0',
                    borderTop:
                      index === 0 ? 'none' : '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '18px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      className="icon-box"
                      style={{
                        flexShrink: 0,
                      }}
                    >
                      {index === 0 && (
                        <Layers3 size={23} aria-hidden="true" />
                      )}
                      {index === 1 && (
                        <GitBranch size={23} aria-hidden="true" />
                      )}
                      {index === 2 && (
                        <Server size={23} aria-hidden="true" />
                      )}
                      {index === 3 && (
                        <Database size={23} aria-hidden="true" />
                      )}
                    </div>

                    <div>
                      <h3>{area.title}</h3>

                      <p style={{ marginTop: '12px' }}>{area.content}</p>

                      <ul style={{ marginTop: '18px' }}>
                        {area.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* UML and documentation */}
        <section className="section">
          <div className="container">
            <div className="two-column">
              <div>
                <p className="eyebrow">ARCHITECTURE DOCUMENTATION</p>

                <h2>
                  Diagrams should explain the architecture, not simply decorate
                  the report.
                </h2>

                <p style={{ marginTop: '20px' }}>
                  Architecture assignments frequently require UML diagrams,
                  system context diagrams, data flow diagrams, deployment
                  models, or other forms of technical documentation.
                </p>

                <p style={{ marginTop: '18px' }}>
                  The important question is not how many diagrams a project
                  contains. Each diagram should communicate a specific aspect
                  of the system and remain consistent with the written
                  architecture.
                </p>

                <p style={{ marginTop: '18px' }}>
                  We provide guidance on selecting the appropriate diagram,
                  deciding what information it should contain, and connecting
                  it to the requirements and architectural decisions described
                  elsewhere in the project.
                </p>
              </div>

              <div>
                <p className="eyebrow">COMMON DELIVERABLES</p>

                <ul style={{ marginTop: '8px' }}>
                  {designDeliverables.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start',
                        marginBottom: '13px',
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
                          marginTop: '3px',
                          color: '#1769d2',
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quality attributes */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '820px',
                marginBottom: '44px',
              }}
            >
              <p className="eyebrow">QUALITY ATTRIBUTES</p>

              <h2>
                A technically correct architecture also has to satisfy
                non-functional requirements.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Two architectures may both satisfy the functional requirements
                of an application while behaving very differently under real
                operating conditions. Quality attributes help evaluate those
                differences.
              </p>
            </div>

            <div
              style={{
                maxWidth: '920px',
              }}
            >
              {qualityAttributes.map((attribute, index) => (
                <article
                  key={attribute.title}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '220px 1fr',
                    gap: '30px',
                    padding: '24px 0',
                    borderTop:
                      index === 0 ? 'none' : '1px solid var(--border)',
                  }}
                >
                  <h3>{attribute.title}</h3>

                  <p>{attribute.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture trade-offs */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">ARCHITECTURAL TRADE-OFFS</p>

              <h2>
                There is rarely one universally correct architecture.
              </h2>

              <p style={{ marginTop: '20px' }}>
                One of the most important concepts in system design is that
                architectural decisions involve trade-offs. Increasing
                scalability may introduce additional infrastructure and
                operational complexity. Strong consistency can influence
                performance and availability. Microservices can provide
                independent deployment but may introduce distributed-system
                challenges that would not exist in a modular monolith.
              </p>

              <p style={{ marginTop: '18px' }}>
                Good architecture documentation therefore explains not only
                <em> what </em> was selected, but <em> why </em> it was
                selected and which alternatives were considered.
              </p>

              <p style={{ marginTop: '18px' }}>
                For academic projects, this reasoning is particularly
                important because architecture marks often depend on the
                student's ability to justify technical decisions rather than
                simply reproducing a popular architecture pattern.
              </p>

              <div
                style={{
                  marginTop: '30px',
                  paddingLeft: '22px',
                  borderLeft: '3px solid #1769d2',
                }}
              >
                <p>
                  <strong>
                    Architecture quality is not measured by complexity.
                  </strong>{' '}
                  A simpler design that satisfies the requirements and can be
                  clearly justified is often stronger than an unnecessarily
                  complex architecture filled with technologies the project
                  does not actually need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">SECURE SYSTEM DESIGN</p>

              <div
                style={{
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  className="icon-box"
                  style={{
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={24} aria-hidden="true" />
                </div>

                <div>
                  <h2>Security should be considered part of the architecture.</h2>

                  <p style={{ marginTop: '18px' }}>
                    Security is not something that should be added only after
                    the architecture has been completed. Trust boundaries,
                    authentication, authorization, data protection, secrets,
                    network segmentation, logging, and failure behaviour can
                    all influence architectural decisions.
                  </p>

                  <p style={{ marginTop: '18px' }}>
                    Depending on the project, architecture guidance may include
                    secure API boundaries, identity and access management,
                    protection of sensitive data, least-privilege principles,
                    secure communication, and appropriate separation between
                    internal and external components.
                  </p>

                  <p style={{ marginTop: '18px' }}>
                    For cybersecurity-focused architecture work, this can also
                    connect directly with threat modelling and secure software
                    development practices.
                  </p>

                  <Link
                    href="/services/cybersecurity"
                    className="button button-secondary"
                    style={{
                      marginTop: '24px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    Explore Cybersecurity Services
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud and deployment */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">DEPLOYMENT ARCHITECTURE</p>

              <h2>
                The architecture should describe where the system actually
                runs.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Application architecture and deployment architecture are
                related but not identical. A system may contain well-defined
                application components while requiring a separate model showing
                servers, containers, cloud services, networks, databases,
                gateways, and other infrastructure.
              </p>

              <p style={{ marginTop: '18px' }}>
                We provide guidance on connecting the logical architecture to
                its physical or cloud deployment environment. This can include
                virtual machines, containers, managed databases, load
                balancers, API gateways, cloud services, networking components,
                and deployment pipelines.
              </p>

              <ul style={{ marginTop: '22px' }}>
                <li>Cloud and on-premises deployment models</li>
                <li>Containerized application deployment</li>
                <li>Network and service boundaries</li>
                <li>Load balancing and availability considerations</li>
                <li>Database and storage placement</li>
                <li>Environment separation and configuration</li>
                <li>CI/CD and deployment workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '820px',
                marginBottom: '44px',
              }}
            >
              <p className="eyebrow">SYSTEM DESIGN WORKFLOW</p>

              <h2>
                A structured approach from requirements to architectural
                review.
              </h2>

              <p style={{ marginTop: '18px' }}>
                The exact process depends on the project, but a disciplined
                architecture workflow helps prevent disconnected diagrams and
                unsupported technology decisions.
              </p>
            </div>

            <div
              style={{
                maxWidth: '920px',
              }}
            >
              {workflow.map((step) => (
                <article
                  key={step.number}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 230px 1fr',
                    gap: '26px',
                    alignItems: 'start',
                    padding: '24px 0',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: '14px',
                      fontWeight: 800,
                      color: '#1769d2',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Who we support */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">ACADEMIC & RESEARCH SUPPORT</p>

              <h2>
                System architecture guidance across coursework, capstones, and
                research projects.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Architecture appears across many different academic
                disciplines. A software engineering student may need to design
                a web application, an IT student may be analysing an
                enterprise system, while a postgraduate researcher may be
                developing a technical prototype around a particular research
                problem.
              </p>

              <p style={{ marginTop: '18px' }}>
                The underlying architectural questions remain similar:
                What does the system need to accomplish? What are its major
                components? How do those components communicate? Where does
                data reside? What constraints influence the design? And how can
                the resulting architecture be justified?
              </p>

              <ul
                style={{
                  marginTop: '24px',
                  columns: 2,
                  columnGap: '50px',
                }}
              >
                {audiences.map((audience) => (
                  <li key={audience}>{audience}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Responsible guidance */}
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
                The goal is to understand why the architecture works.
              </h2>

              <p style={{ marginTop: '20px' }}>
                System architecture is fundamentally a reasoning exercise.
                Simply receiving a diagram does not explain why components
                were separated, why a particular architecture pattern was
                selected, or what trade-offs were considered.
              </p>

              <p style={{ marginTop: '18px' }}>
                Our guidance focuses on making those technical decisions
                understandable. We can review architecture diagrams, explain
                design patterns, identify inconsistencies, discuss alternatives,
                and help connect architectural decisions to the requirements
                and evaluation criteria of a project.
              </p>

              <p style={{ marginTop: '18px' }}>
                Academic work should remain your own. Our role is to make
                difficult architectural concepts clearer and help you develop
                stronger technical reasoning.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="faq-layout">
              <div>
                <p className="eyebrow">SYSTEM ARCHITECTURE FAQ</p>

                <h2>
                  Questions about system architecture and design project
                  guidance.
                </h2>

                <p style={{ marginTop: '18px' }}>
                  Common questions about architecture assignments, UML,
                  software design, and technical project support.
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
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow">HAVE A SYSTEM DESIGN PROJECT?</p>

              <h2>
                Let's understand the architecture before choosing the
                technology.
              </h2>

              <p
                style={{
                  maxWidth: '700px',
                  margin: '20px auto 28px',
                }}
              >
                Share your project brief, requirements, existing architecture,
                UML diagrams, system design question, or capstone objective
                and discuss the most appropriate technical approach.
              </p>

              <a
                href="https://wa.me/918595089080?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20System%20Architecture%20or%20Design%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Discuss Your System Design Project
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
          __html: JSON.stringify(systemArchitectureSchema),
        }}
      />
    </>
  )
}