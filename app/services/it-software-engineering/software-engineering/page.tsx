import {
    ArrowRight
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Footer, PageHero } from '@/components/site'

export const metadata: Metadata = {
  title:
    'Software Engineering Project Help & Technical Guidance | ProjectAssignments.com',
  description:
    'Expert software engineering project guidance covering software development, requirements analysis, architecture, design patterns, programming, testing, Git, debugging, documentation, and capstone projects.',
  keywords: [
    'software engineering project help',
    'software engineering assignment help',
    'software development project guidance',
    'software engineering consultancy',
    'software architecture guidance',
    'software design project help',
    'software engineering capstone project',
    'programming project guidance',
    'software testing project help',
    'UML software engineering',
    'software requirements engineering',
    'Git project guidance',
  ],
  alternates: {
    canonical: 'https://projectassignments.com/services/software-engineering',
  },
  openGraph: {
    title:
      'Software Engineering Project Help & Technical Guidance | ProjectAssignments.com',
    description:
      'Technical guidance for software engineering projects, programming, requirements analysis, architecture, design, testing, Git, debugging, and technical documentation.',
    url: 'https://projectassignments.com/services/software-engineering',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const softwareEngineeringSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://projectassignments.com/services/software-engineering#service',
      name: 'Software Engineering Project Help & Technical Guidance',
      description:
        'Technical guidance for software engineering projects, programming, requirements analysis, architecture, software design, testing, debugging, version control, and technical documentation.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
      areaServed: 'Worldwide',
      serviceType: 'Software engineering technical consultancy',
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/services/software-engineering#breadcrumb',
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
          name: 'Software Engineering',
          item:
            'https://projectassignments.com/services/software-engineering',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What software engineering projects can you help with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'We provide technical guidance across software requirements, system design, programming, object-oriented development, databases, APIs, testing, debugging, version control, architecture, documentation, and software engineering capstone projects.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you help with software engineering capstone projects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. We can provide structured technical guidance for capstone projects, including requirements analysis, architecture, technology selection, implementation planning, testing strategy, documentation, and project evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which programming languages do you support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Support can cover common software engineering languages and ecosystems including Python, Java, C++, C#, JavaScript, TypeScript, SQL, and related frameworks and development tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you help debug software engineering projects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Debugging guidance can cover identifying the source of errors, understanding program behaviour, tracing execution, analysing exceptions, testing assumptions, and improving the underlying implementation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide help with UML and software design?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Guidance can include use-case diagrams, class diagrams, sequence diagrams, activity diagrams, component diagrams, architecture models, design patterns, and other software design documentation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you help with software testing and quality assurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Support can cover unit testing, integration testing, system testing, test-case design, defect analysis, test planning, debugging, regression testing, and interpreting test results.',
          },
        },
      ],
    },
  ],
}

export default function SoftwareEngineeringPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="IT SYSTEMS • SOFTWARE ENGINEERING • DEVELOPMENT"
          title="Software Engineering Projects, Development & Technical Guidance"
          body="Understand the principles behind well-designed software — from requirements and architecture to programming, testing, debugging, version control, and technical documentation."
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
              <p className="eyebrow">SOFTWARE ENGINEERING</p>

              <h2>
                Software engineering is about building systems that can be
                understood, tested, maintained, and evolved.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Writing code is only one part of software engineering. A
                successful software project begins with understanding what the
                system is supposed to accomplish, continues through
                requirements analysis and architectural decisions, and extends
                into implementation, testing, deployment, maintenance, and
                documentation.
              </p>

              <p style={{ marginTop: '18px' }}>
                This becomes particularly important in academic software
                engineering projects. Students may be asked to design a
                complete application, produce UML diagrams, implement a
                particular architecture, demonstrate object-oriented
                principles, develop a database-backed system, write automated
                tests, or explain why particular engineering decisions were
                made.
              </p>

              <p style={{ marginTop: '18px' }}>
                Our software engineering consultancy provides structured
                technical guidance across these stages. The objective is not
                simply to produce code, but to help you understand the
                engineering decisions behind the software and communicate those
                decisions clearly.
              </p>
            </div>
          </div>
        </section>

        {/* Main Image */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '1050px',
                margin: '0 auto',
              }}
            >
              <Image
                src="/images/software-engineering.png"
                alt="Software engineering lifecycle showing requirements analysis, system design, software development, testing, deployment, and maintenance"
                width={1600}
                height={900}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px',
                }}
              />
            </div>
          </div>
        </section>

        {/* Why Difficult */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">WHY SOFTWARE ENGINEERING IS CHALLENGING</p>

              <h2>
                A software project can fail even when the code appears to work.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Software engineering requires several different forms of
                technical reasoning at the same time. A program may produce the
                expected output while still having poor architecture,
                duplicated logic, weak error handling, difficult-to-maintain
                components, inadequate testing, or requirements that were
                misunderstood at the beginning of the project.
              </p>

              <p style={{ marginTop: '18px' }}>
                Students often encounter difficulties because individual
                concepts are taught separately while real projects require
                those concepts to work together.
              </p>

              <p style={{ marginTop: '18px' }}>
                Common challenges include:
              </p>

              <ul style={{ marginTop: '18px' }}>
                <li>
                  Translating an informal project description into clear,
                  testable software requirements.
                </li>
                <li>
                  Choosing an appropriate architecture instead of immediately
                  starting implementation.
                </li>
                <li>
                  Understanding how classes, modules, services, databases, and
                  external interfaces should interact.
                </li>
                <li>
                  Applying object-oriented principles and design patterns
                  without unnecessarily complicating the system.
                </li>
                <li>
                  Debugging problems that originate from interactions between
                  multiple components rather than from a single line of code.
                </li>
                <li>
                  Designing meaningful test cases rather than testing only the
                  obvious successful path.
                </li>
                <li>
                  Maintaining a clear connection between requirements, code,
                  tests, diagrams, and final documentation.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Requirements Engineering */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">01 • REQUIREMENTS ENGINEERING</p>

              <h2>
                Strong software begins with understanding the problem before
                choosing the implementation.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Requirements engineering establishes what a software system is
                expected to do and the constraints under which it must operate.
                This includes understanding users, business or academic
                objectives, functional requirements, non-functional
                requirements, assumptions, dependencies, and acceptance
                criteria.
              </p>

              <p style={{ marginTop: '18px' }}>
                A technically impressive application can still be considered a
                poor engineering solution if it does not satisfy the original
                requirements. For this reason, requirements analysis should
                influence architecture, implementation, and testing from the
                beginning.
              </p>

              <h3 style={{ marginTop: '32px' }}>
                Areas where we provide guidance include:
              </h3>

              <ul style={{ marginTop: '16px' }}>
                <li>Functional and non-functional requirements</li>
                <li>Use cases and user stories</li>
                <li>Actors, system boundaries, and interactions</li>
                <li>Requirements prioritisation</li>
                <li>Acceptance criteria</li>
                <li>Requirements traceability</li>
                <li>Software Requirements Specification (SRS)</li>
                <li>Identifying ambiguous or conflicting requirements</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                We can also help connect requirements to subsequent design and
                testing activities so that the final system can be evaluated
                against clearly defined objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">02 • SOFTWARE ARCHITECTURE & DESIGN</p>

              <h2>
                Architecture provides the structure that allows individual
                components to become a coherent software system.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Once requirements are understood, the next challenge is deciding
                how the software should be structured. Architecture describes
                the major components of a system and the relationships between
                them, while detailed design explains how those components
                should behave.
              </p>

              <p style={{ marginTop: '18px' }}>
                Depending on the project, this may involve a layered
                architecture, client-server architecture, modular design,
                service-oriented components, microservices, MVC, or another
                appropriate architectural approach.
              </p>

              <p style={{ marginTop: '18px' }}>
                Software architecture guidance can cover:
              </p>

              <ul style={{ marginTop: '16px' }}>
                <li>Architectural styles and patterns</li>
                <li>Separation of concerns</li>
                <li>Modularity and component boundaries</li>
                <li>Coupling and cohesion</li>
                <li>Interfaces and dependencies</li>
                <li>Layered application design</li>
                <li>Client-server systems</li>
                <li>Service-oriented and microservice concepts</li>
                <li>Scalability and maintainability considerations</li>
                <li>Architecture documentation</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                The goal is to make the architecture defensible: every major
                design decision should have a relationship to the requirements,
                constraints, and expected behaviour of the system.
              </p>
            </div>
          </div>
        </section>

        {/* Programming */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">03 • PROGRAMMING & IMPLEMENTATION</p>

              <h2>
                Turning a design into maintainable, testable software.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Implementation is where architectural and design decisions
                become executable software. However, good software engineering
                involves considerably more than making a program produce the
                expected output.
              </p>

              <p style={{ marginTop: '18px' }}>
                Code should be understandable, appropriately structured, and
                consistent with the architecture. Error handling, validation,
                interfaces, dependencies, data structures, and testing
                considerations should all be part of the implementation
                process.
              </p>

              <h3 style={{ marginTop: '32px' }}>
                Programming areas we commonly support include:
              </h3>

              <ul style={{ marginTop: '16px' }}>
                <li>
                  Python application development and object-oriented
                  programming
                </li>
                <li>Java and enterprise-oriented software development</li>
                <li>C and C++ programming concepts</li>
                <li>C# and .NET application development</li>
                <li>JavaScript and TypeScript development</li>
                <li>Backend and server-side programming</li>
                <li>Object-oriented design and implementation</li>
                <li>Data structures and algorithms</li>
                <li>Error handling and input validation</li>
                <li>Modular programming and reusable components</li>
                <li>Database integration</li>
                <li>API integration</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                Where a project uses a particular framework, we focus on
                understanding how the framework supports the underlying
                software engineering principles rather than treating framework
                syntax as a substitute for design.
              </p>
            </div>
          </div>
        </section>

        {/* OOP */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">04 • OBJECT-ORIENTED SOFTWARE ENGINEERING</p>

              <h2>
                Understanding objects, responsibilities, relationships, and
                reusable design.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Object-oriented programming is a major component of many
                software engineering curricula. Students are often expected to
                demonstrate concepts such as encapsulation, inheritance,
                polymorphism, abstraction, composition, and interface-based
                design within a working application.
              </p>

              <p style={{ marginTop: '18px' }}>
                The difficult part is usually not memorising definitions. The
                challenge is deciding where these concepts actually make sense
                in a particular system.
              </p>

              <p style={{ marginTop: '18px' }}>
                We provide guidance with:
              </p>

              <ul style={{ marginTop: '16px' }}>
                <li>Class and object modelling</li>
                <li>Encapsulation and information hiding</li>
                <li>Inheritance and polymorphism</li>
                <li>Abstract classes and interfaces</li>
                <li>Composition and aggregation</li>
                <li>Dependency relationships</li>
                <li>SOLID design principles</li>
                <li>Common software design patterns</li>
                <li>Refactoring tightly coupled code</li>
                <li>Designing reusable and maintainable components</li>
              </ul>
            </div>
          </div>
        </section>

        {/* UML */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">05 • UML & SOFTWARE MODELLING</p>

              <h2>
                Diagrams should explain the system, not simply satisfy a
                documentation requirement.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Unified Modeling Language (UML) provides a common way to
                represent different aspects of a software system. In academic
                projects, UML diagrams are often used to demonstrate that the
                student understands the relationship between requirements,
                design, and implementation.
              </p>

              <p style={{ marginTop: '18px' }}>
                Depending on the project requirements, we can provide guidance
                with:
              </p>

              <ul style={{ marginTop: '16px' }}>
                <li>Use-case diagrams</li>
                <li>Class diagrams</li>
                <li>Sequence diagrams</li>
                <li>Activity diagrams</li>
                <li>State diagrams</li>
                <li>Component diagrams</li>
                <li>Deployment diagrams</li>
                <li>Entity-relationship diagrams</li>
                <li>System architecture diagrams</li>
                <li>Data-flow representations</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                More importantly, we help ensure that diagrams remain consistent
                with the actual software design. A class diagram that does not
                correspond to the implementation, or a sequence diagram that
                describes behaviour the system does not perform, weakens the
                overall technical argument of the project.
              </p>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">06 • SOFTWARE TESTING & QUALITY</p>

              <h2>
                Testing is an engineering activity, not simply the final step
                before submission.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Testing provides evidence that software behaves according to
                its requirements under defined conditions. Effective testing
                begins with understanding what should be verified and why a
                particular test is valuable.
              </p>

              <p style={{ marginTop: '18px' }}>
                Depending on the project, we can provide guidance across
                multiple testing levels:
              </p>

              <ul style={{ marginTop: '16px' }}>
                <li>
                  <strong>Unit testing:</strong> validating individual
                  functions, methods, or components.
                </li>
                <li>
                  <strong>Integration testing:</strong> verifying interactions
                  between components and services.
                </li>
                <li>
                  <strong>System testing:</strong> evaluating the complete
                  application against its requirements.
                </li>
                <li>
                  <strong>Regression testing:</strong> checking that changes
                  have not introduced new defects.
                </li>
                <li>
                  <strong>Acceptance testing:</strong> evaluating whether the
                  system satisfies defined acceptance criteria.
                </li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                Test-case design can also incorporate boundary conditions,
                invalid inputs, expected failures, exceptional behaviour, and
                other cases that are easy to overlook when testing only the
                normal workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Debugging */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">07 • DEBUGGING & REFACTORING</p>

              <h2>
                Find the underlying cause instead of repeatedly treating the
                symptom.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Debugging is a systematic process of determining why software
                behaves differently from what was expected. A useful debugging
                process begins with reproducing the problem, narrowing the
                failure, forming a hypothesis, testing that hypothesis, and
                verifying the correction.
              </p>

              <p style={{ marginTop: '18px' }}>
                We can provide guidance with problems such as:
              </p>

              <ul style={{ marginTop: '16px' }}>
                <li>Runtime exceptions and application crashes</li>
                <li>Incorrect program logic</li>
                <li>Unexpected application state</li>
                <li>Database and query-related errors</li>
                <li>API integration problems</li>
                <li>Dependency and configuration issues</li>
                <li>Concurrency-related behaviour</li>
                <li>Input and validation problems</li>
                <li>Regression defects</li>
                <li>Code smells and maintainability problems</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                Refactoring can then be used to improve the internal structure
                of working software without changing its intended external
                behaviour. This may involve simplifying complex methods,
                separating responsibilities, reducing duplication, or
                improving component boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Version Control */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">08 • VERSION CONTROL & COLLABORATION</p>

              <h2>
                Modern software engineering also requires understanding how
                changes are managed.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Version control systems provide a structured history of changes
                to a software project. Git is now fundamental to many software
                development workflows and is frequently included in academic
                projects involving collaborative development.
              </p>

              <p style={{ marginTop: '18px' }}>
                Guidance can cover:
              </p>

              <ul style={{ marginTop: '16px' }}>
                <li>Git repositories and project structure</li>
                <li>Commits and meaningful commit history</li>
                <li>Branches and feature development</li>
                <li>Merging and resolving conflicts</li>
                <li>Pull-request workflows</li>
                <li>Repository organisation</li>
                <li>Release and version management</li>
                <li>Collaborative development practices</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                Understanding version control also makes it easier to reason
                about how a project evolved, identify when a regression was
                introduced, and collaborate safely when multiple developers are
                working on the same codebase.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">TECHNOLOGIES & ECOSYSTEMS</p>

              <h2>
                Guidance across widely used software engineering technologies.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Software engineering projects can involve very different
                languages and technology stacks. The right choice depends on
                requirements, project scope, development constraints, learning
                objectives, and deployment environment.
              </p>

              <p style={{ marginTop: '18px' }}>
                Areas we commonly encounter include:
              </p>

              <ul style={{ marginTop: '16px' }}>
                <li>
                  <strong>Python:</strong> application development, object
                  orientation, APIs, automation, data-driven applications, and
                  testing.
                </li>
                <li>
                  <strong>Java:</strong> object-oriented programming, Spring
                  applications, enterprise systems, and backend development.
                </li>
                <li>
                  <strong>C/C++:</strong> systems programming, algorithms,
                  memory management, performance-oriented applications, and
                  software design.
                </li>
                <li>
                  <strong>C# / .NET:</strong> application development,
                  ASP.NET Core, APIs, object-oriented design, and enterprise
                  software.
                </li>
                <li>
                  <strong>JavaScript / TypeScript:</strong> web applications,
                  frontend development, Node.js services, APIs, and full-stack
                  systems.
                </li>
                <li>
                  <strong>SQL:</strong> relational databases, queries, data
                  modelling, transactions, and application integration.
                </li>
                <li>
                  <strong>Git:</strong> source control, collaborative
                  development, branching, and project management workflows.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Capstone */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">SOFTWARE ENGINEERING CAPSTONE PROJECTS</p>

              <h2>
                Bringing requirements, architecture, implementation, testing,
                and documentation together.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Capstone projects are often where students encounter the full
                complexity of software engineering for the first time. Instead
                of solving a narrowly defined programming exercise, a capstone
                may require designing an entire system and defending the
                technical decisions behind it.
              </p>

              <p style={{ marginTop: '18px' }}>
                A typical project may require:
              </p>

              <ul style={{ marginTop: '16px' }}>
                <li>Problem definition and requirements analysis</li>
                <li>System architecture and technology selection</li>
                <li>Database and data-model design</li>
                <li>UML and architecture diagrams</li>
                <li>Application implementation</li>
                <li>API and third-party integration</li>
                <li>Authentication and access control</li>
                <li>Testing and quality assurance</li>
                <li>Version control and development workflow</li>
                <li>Technical documentation</li>
                <li>Performance and scalability considerations</li>
                <li>Project evaluation and limitations</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                We can help break a large capstone into manageable engineering
                stages, identify dependencies between those stages, review
                architectural decisions, troubleshoot implementation problems,
                and improve the technical explanation accompanying the project.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Workflow */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">SOFTWARE ENGINEERING WORKFLOW</p>

              <h2>
                A disciplined development process keeps technical decisions
                connected.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Although different development methodologies use different
                terminology, a strong software project generally needs to move
                through a connected sequence of activities.
              </p>

              <div style={{ marginTop: '32px' }}>
                {[
                  {
                    number: '01',
                    title: 'Requirements',
                    text:
                      'Understand the problem, users, constraints, functional requirements, non-functional requirements, and expected outcomes.',
                  },
                  {
                    number: '02',
                    title: 'Analysis & Design',
                    text:
                      'Model the system and determine the architecture, components, interfaces, data structures, and major technical decisions.',
                  },
                  {
                    number: '03',
                    title: 'Implementation',
                    text:
                      'Develop the software using appropriate programming practices, frameworks, libraries, databases, and development tools.',
                  },
                  {
                    number: '04',
                    title: 'Testing',
                    text:
                      'Verify individual components and the complete system against requirements and expected behaviour.',
                  },
                  {
                    number: '05',
                    title: 'Deployment',
                    text:
                      'Prepare the application and supporting infrastructure for its intended execution environment.',
                  },
                  {
                    number: '06',
                    title: 'Maintenance & Improvement',
                    text:
                      'Review defects, requirements changes, technical debt, performance issues, and opportunities for future improvement.',
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '70px 1fr',
                      gap: '20px',
                      padding: '22px 0',
                      borderBottom: '1px solid #e5eaf0',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: '14px',
                        fontWeight: 800,
                        color: '#1769d2',
                        paddingTop: '3px',
                      }}
                    >
                      {step.number}
                    </span>

                    <div>
                      <h3 style={{ marginBottom: '8px' }}>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation */}
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
                A technically strong project should also be easy to explain.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Software engineering assessments frequently evaluate both the
                implementation and the student's ability to communicate the
                engineering process. Documentation therefore needs to explain
                the relationship between the problem, requirements, design,
                implementation, testing, and final results.
              </p>

              <p style={{ marginTop: '18px' }}>
                Technical documentation may include:
              </p>

              <ul style={{ marginTop: '16px' }}>
                <li>Software Requirements Specifications</li>
                <li>System architecture documentation</li>
                <li>UML diagrams</li>
                <li>Database and data-model documentation</li>
                <li>API documentation</li>
                <li>Implementation explanations</li>
                <li>Testing strategies and test results</li>
                <li>Deployment documentation</li>
                <li>Technical limitations</li>
                <li>Future enhancement recommendations</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                Our guidance focuses on making the documentation consistent with
                the actual system so that diagrams, explanations, implementation
                details, and testing evidence tell the same technical story.
              </p>
            </div>
          </div>
        </section>

        {/* Related IT Services */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">RELATED IT PROJECT AREAS</p>

              <h2>
                Software engineering rarely exists in isolation.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Many software projects overlap with databases, cloud
                infrastructure, APIs, DevOps, system architecture, and testing.
                Explore the related areas of our IT consultancy as your project
                requirements evolve.
              </p>

              <div style={{ marginTop: '28px' }}>
                <p>
                  <Link href="/services/database-management">
                    Database Management & SQL
                  </Link>
                </p>

                <p style={{ marginTop: '12px' }}>
                  <Link href="/services/system-analysis-design">
                    System Analysis & Design
                  </Link>
                </p>

                <p style={{ marginTop: '12px' }}>
                  <Link href="/services/cloud-computing">
                    Cloud Computing & Architecture
                  </Link>
                </p>

                <p style={{ marginTop: '12px' }}>
                  <Link href="/services/devops">
                    DevOps & CI/CD
                  </Link>
                </p>

                <p style={{ marginTop: '12px' }}>
                  <Link href="/services/web-application-development">
                    Web & Application Development
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Guidance */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">RESPONSIBLE TECHNICAL GUIDANCE</p>

              <h2>
                The goal is to understand the engineering behind the software.
              </h2>

              <p style={{ marginTop: '20px' }}>
                Software engineering becomes much easier when individual
                programming tasks are connected to the larger system. We
                therefore focus on explaining why a particular approach is
                appropriate, how different components interact, how problems can
                be diagnosed, and how technical decisions can be evaluated.
              </p>

              <p style={{ marginTop: '18px' }}>
                Whether you are working through a programming project, UML
                exercise, software architecture assignment, debugging problem,
                testing project, or final-year capstone, our technical
                consultancy is designed to provide structured guidance around
                the engineering process.
              </p>

              <p style={{ marginTop: '18px' }}>
                Academic work should remain your own. Our role is to make
                difficult software engineering concepts clearer and help you
                develop stronger technical reasoning and project outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tint">
          <div className="container">
            <div className="faq-layout">
              <div>
                <p className="eyebrow">SOFTWARE ENGINEERING FAQ</p>

                <h2>
                  Questions about software engineering project guidance.
                </h2>

                <p style={{ marginTop: '18px' }}>
                  Here are answers to some of the questions students commonly
                  have when working on software engineering projects.
                </p>
              </div>

              <div className="faq-list">
                {[
                  {
                    question:
                      'What software engineering projects can you help with?',
                    answer:
                      'We provide technical guidance across software requirements, system design, programming, object-oriented development, databases, APIs, testing, debugging, version control, architecture, documentation, and software engineering capstone projects.',
                  },
                  {
                    question:
                      'Can you help with software engineering capstone projects?',
                    answer:
                      'Yes. We can provide structured technical guidance for capstone projects, including requirements analysis, architecture, technology selection, implementation planning, testing strategy, documentation, and project evaluation.',
                  },
                  {
                    question:
                      'Which programming languages do you support?',
                    answer:
                      'Support can cover common software engineering languages and ecosystems including Python, Java, C++, C#, JavaScript, TypeScript, SQL, and related frameworks and development tools.',
                  },
                  {
                    question:
                      'Can you help debug software engineering projects?',
                    answer:
                      'Yes. Debugging guidance can cover identifying the source of errors, understanding program behaviour, tracing execution, analysing exceptions, testing assumptions, and improving the underlying implementation.',
                  },
                  {
                    question:
                      'Do you provide help with UML and software design?',
                    answer:
                      'Yes. Guidance can include use-case diagrams, class diagrams, sequence diagrams, activity diagrams, component diagrams, architecture models, design patterns, and other software design documentation.',
                  },
                  {
                    question:
                      'Can you help with software testing and quality assurance?',
                    answer:
                      'Yes. Support can cover unit testing, integration testing, system testing, test-case design, defect analysis, test planning, debugging, regression testing, and interpreting test results.',
                  },
                  {
                    question:
                      'Do you guarantee a particular academic grade?',
                    answer:
                      'No. We provide technical guidance and educational support, but final grades and academic outcomes are determined by the relevant institution and assessment criteria.',
                  },
                ].map((faq) => (
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
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow">HAVE A SOFTWARE ENGINEERING PROJECT?</p>

              <h2>
                Start with the engineering problem, not just the code.
              </h2>

              <p
                style={{
                  maxWidth: '700px',
                  margin: '20px auto 28px',
                }}
              >
                Share your software engineering project brief, requirements,
                architecture question, programming challenge, testing problem,
                or capstone objective and discuss the most appropriate
                technical approach.
              </p>

              <a
                href="https://wa.me/918595089080?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20software%20engineering%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Discuss Your Software Engineering Project
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