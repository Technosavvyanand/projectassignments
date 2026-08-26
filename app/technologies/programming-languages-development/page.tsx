import {
    ArrowRight,
    CheckCircle2,
    Code2,
    FileCode2,
    TerminalSquare,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import {
    CTA,
    Footer,
    PageHero,
    SectionHeading,
} from '@/components/site'

/* =========================================================
   METADATA
   ========================================================= */

export const metadata: Metadata = {
  title:
    'Programming Languages & Software Development | ProjectAssignments',

  description:
    'Explore programming languages, software development concepts, programming paradigms, debugging, testing, APIs, version control, and technical project support across Python, C, C++, Java, JavaScript, C#, Go, and other languages.',

  keywords: [
    'programming languages',
    'programming languages academic support',
    'programming project support',
    'software development support',
    'Python programming support',
    'C programming support',
    'C++ programming support',
    'Java programming support',
    'JavaScript programming support',
    'C# programming support',
    'Go programming support',
    'software engineering academic support',
    'programming assignment guidance',
    'coding project guidance',
    'software development academic consultancy',
    'programming language project support',
    'software development project guidance',
  ],

  alternates: {
    canonical:
      'https://projectassignments.com/technologies/programming-languages-development',
  },

  openGraph: {
    title:
      'Programming Languages & Software Development | ProjectAssignments',

    description:
      'Explore programming languages, development concepts, programming paradigms, debugging, testing, APIs, version control, and technical project support.',

    url:
      'https://projectassignments.com/technologies/programming-languages-development',

    siteName: 'ProjectAssignments',

    type: 'website',
  },
}

/* =========================================================
   PAGE URL
   ========================================================= */

const pageUrl =
  'https://projectassignments.com/technologies/programming-languages-development'

/* =========================================================
   PROGRAMMING LANGUAGES
   ========================================================= */

const languages = [
  {
    title: 'Python',

    href:
      '/technologies/programming-languages-development/python',

    description:
      'A versatile language used across software development, automation, scripting, data analysis, machine learning, cybersecurity, APIs, and research-oriented projects.',

    areas:
      'Python fundamentals, OOP, data structures, APIs, automation, testing, scripting, data analysis',
  },

  {
    title: 'C',

    href:
      '/technologies/programming-languages-development/c',

    description:
      'A foundational systems programming language useful for understanding memory, pointers, compilation, operating-system concepts, low-level programming, and performance-oriented software.',

    areas:
      'Pointers, memory management, arrays, structures, functions, compilation, systems programming, debugging',
  },

  {
    title: 'C++',

    href:
      '/technologies/programming-languages-development/cpp',

    description:
      'A powerful general-purpose language combining procedural, object-oriented, and generic programming with extensive applications in systems, applications, and performance-sensitive software.',

    areas:
      'Classes, inheritance, templates, STL, memory management, algorithms, object-oriented programming',
  },

  {
    title: 'Java',

    href:
      '/technologies/programming-languages-development/java',

    description:
      'A widely used object-oriented language and platform for enterprise applications, backend development, distributed systems, and software engineering coursework.',

    areas:
      'OOP, collections, exceptions, multithreading, JVM, Spring concepts, APIs, application development',
  },

  {
    title: 'JavaScript',

    href:
      '/technologies/programming-languages-development/javascript',

    description:
      'A core web and application-development language used for browser applications, server-side development, APIs, asynchronous programming, and full-stack systems.',

    areas:
      'ES6+, DOM, asynchronous programming, promises, APIs, Node.js, modules, web development',
  },

  {
    title: 'C#',

    href:
      '/technologies/programming-languages-development/csharp',

    description:
      'A modern language within the .NET ecosystem used for application development, backend systems, enterprise software, desktop applications, and web APIs.',

    areas:
      '.NET, ASP.NET Core, OOP, LINQ, Entity Framework, APIs, application architecture',
  },

  {
    title: 'Go',

    href:
      '/technologies/programming-languages-development/go',

    description:
      'A compiled language designed for simplicity, concurrency, network services, cloud infrastructure, and modern backend and systems-oriented development.',

    areas:
      'Goroutines, channels, interfaces, packages, networking, APIs, concurrency, cloud services',
  },

  {
    title: 'Other Programming Languages',

    href:
      '/technologies/programming-languages-development/other-languages',

    description:
      'Explore additional programming languages used across web development, mobile applications, systems programming, data analysis, scientific computing, and specialist software projects.',

    areas:
      'PHP, TypeScript, Rust, Kotlin, Swift, Ruby, R, MATLAB, Scala, Dart, and specialist languages',
  },
]

/* =========================================================
   PROGRAMMING CONCEPTS
   ========================================================= */

const programmingConcepts = [
  {
    number: '01',
    title: 'Programming Fundamentals',
    body:
      'Variables, data types, operators, control flow, functions, collections, input/output, error handling, and the core concepts that form the foundation of software development.',
  },

  {
    number: '02',
    title: 'Object-Oriented Programming',
    body:
      'Classes, objects, encapsulation, inheritance, abstraction, polymorphism, interfaces, composition, and design decisions involved in object-oriented systems.',
  },

  {
    number: '03',
    title: 'Data Structures & Algorithms',
    body:
      'Arrays, linked structures, stacks, queues, trees, graphs, hashing, sorting, searching, complexity analysis, and algorithmic reasoning.',
  },

  {
    number: '04',
    title: 'Software Architecture',
    body:
      'Application structure, modules, components, services, design patterns, interfaces, dependencies, scalability, maintainability, and architectural trade-offs.',
  },

  {
    number: '05',
    title: 'APIs & Integration',
    body:
      'REST APIs, JSON, HTTP, authentication, authorization, service integration, backend communication, API testing, and distributed application concepts.',
  },

  {
    number: '06',
    title: 'Testing & Debugging',
    body:
      'Unit testing, integration testing, test cases, assertions, debugging workflows, defect isolation, logging, validation, and quality-focused development practices.',
  },
]

/* =========================================================
   DEVELOPMENT PRACTICES
   ========================================================= */

const developmentPractices = [
  'Version control with Git and GitHub',
  'Code organization and modular design',
  'Object-oriented and functional programming concepts',
  'Exception handling and defensive programming',
  'Unit and integration testing',
  'Debugging and root-cause analysis',
  'API development and integration',
  'Database connectivity and persistence',
  'Documentation and code readability',
  'Build, deployment, and environment management',
]

/* =========================================================
   ACADEMIC PROJECT TYPES
   ========================================================= */

const projectTypes = [
  {
    title: 'Programming Assignments',
    text:
      'Understand language syntax, programming concepts, algorithms, data structures, debugging, and implementation decisions required by coursework.',
  },

  {
    title: 'Software Engineering Projects',
    text:
      'Connect requirements, architecture, application logic, databases, APIs, testing, version control, deployment, and technical documentation.',
  },

  {
    title: 'Capstone Applications',
    text:
      'Work through the technical choices behind larger systems, including language selection, architecture, implementation, integration, testing, and evaluation.',
  },

  {
    title: 'Research Prototypes',
    text:
      'Use programming languages to build proofs of concept, experimental systems, analytical tools, simulations, data pipelines, or research artefacts.',
  },

  {
    title: 'Cybersecurity Programming',
    text:
      'Apply programming to automation, security tooling, parsing, network analysis, evidence processing, secure development, and controlled laboratory environments.',
  },

  {
    title: 'Data & Analytical Applications',
    text:
      'Use programming for data preparation, analysis, visualization, modelling, experimentation, and reproducible research workflows.',
  },
]

/* =========================================================
   FAQ
   ========================================================= */

const faqs = [
  {
    question:
      'Which programming languages does ProjectAssignments support?',

    answer:
      'Our programming support covers languages including Python, C, C++, Java, JavaScript, C#, Go, TypeScript, R, PHP, Ruby, Rust, Kotlin, Swift, and other languages where they are relevant to a technical or research project.',
  },

  {
    question:
      'Can you help me choose a programming language for my project?',

    answer:
      'Yes. Language selection can be evaluated against the project objectives, technical requirements, performance considerations, available libraries, learning outcomes, deployment environment, and any institutional requirements.',
  },

  {
    question:
      'Can you help with debugging programming projects?',

    answer:
      'Yes. We can help analyse compiler errors, runtime errors, logical bugs, API issues, database integration problems, unexpected behaviour, and broader implementation problems while explaining the underlying cause.',
  },

  {
    question:
      'Do you support object-oriented programming assignments?',

    answer:
      'Yes. Guidance can cover classes, objects, encapsulation, inheritance, polymorphism, abstraction, interfaces, composition, design patterns, and the relationship between object-oriented design and implementation.',
  },

  {
    question:
      'Can you help with algorithms and data structures?',

    answer:
      'Yes. Support can cover data-structure selection, algorithm design, complexity analysis, searching, sorting, graphs, trees, hashing, recursion, and explaining why a particular approach is appropriate for a problem.',
  },

  {
    question:
      'Can programming be used in cybersecurity and research projects?',

    answer:
      'Absolutely. Programming is widely used for automation, data processing, network analysis, security tooling, experiment design, simulations, research prototypes, and reproducible analytical workflows.',
  },
]

/* =========================================================
   STRUCTURED DATA
   ========================================================= */

const programmingSchema = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'WebPage',

      '@id': `${pageUrl}#webpage`,

      url: pageUrl,

      name:
        'Programming Languages & Software Development | ProjectAssignments',

      description:
        'A technology hub covering programming languages, software development concepts, debugging, testing, APIs, version control, and technical project guidance.',

      isPartOf: {
        '@id':
          'https://projectassignments.com/#website',
      },

      breadcrumb: {
        '@id': `${pageUrl}#breadcrumb`,
      },
    },

    {
      '@type': 'BreadcrumbList',

      '@id': `${pageUrl}#breadcrumb`,

      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item:
            'https://projectassignments.com/',
        },

        {
          '@type': 'ListItem',
          position: 2,
          name: 'Technologies',
          item:
            'https://projectassignments.com/technologies',
        },

        {
          '@type': 'ListItem',
          position: 3,
          name:
            'Programming Languages & Development',
          item: pageUrl,
        },
      ],
    },

    {
      '@type': 'ItemList',

      '@id':
        `${pageUrl}#programming-languages`,

      name: 'Programming Languages',

      itemListElement: languages.map(
        (language, index) => ({
          '@type': 'ListItem',

          position: index + 1,

          name: language.title,

          url:
            `https://projectassignments.com${language.href}`,
        }),
      ),
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

/* =========================================================
   PAGE
   ========================================================= */

export default function ProgrammingLanguagesDevelopmentPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="TECHNOLOGIES • PROGRAMMING • SOFTWARE DEVELOPMENT"
          title="Programming Languages & Software Development"
          body="Explore the languages, programming concepts, development practices, and software engineering techniques that underpin modern applications, systems, APIs, research prototypes, and technical projects."
        />

        {/* =====================================================
            INTRODUCTION
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="PROGRAMMING TECHNOLOGY"
                  title="Programming is more than learning syntax."
                  body="A programming language is a technical tool. Strong software work depends on understanding the problem, selecting an appropriate approach, structuring the solution, testing the implementation, and being able to explain the decisions behind it."
                />
              </div>

              <div>
                <p>
                  Different projects create different
                  programming requirements. A cybersecurity
                  exercise may require Python scripting or
                  low-level C concepts. A web application may
                  involve JavaScript, TypeScript, a backend
                  language, a database, and several APIs.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Likewise, academic software projects
                  often evaluate more than whether the
                  program runs. Architecture, algorithms,
                  code quality, testing, documentation,
                  technical reasoning, and evaluation can
                  all form part of the final outcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROGRAMMING LANGUAGES
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="PROGRAMMING LANGUAGES"
              title="Explore the languages behind different types of software."
              body="Each language has its own syntax, ecosystem, strengths, runtime model, development tools, and common application areas. Explore the individual language guides as they are developed."
            />

            <div
              className="card-grid"
              style={{
                marginTop: '42px',
              }}
            >
              {languages.map((language) => (
                <article
                  className="info-card"
                  key={language.title}
                >
                  <div
                    className="icon-box"
                    style={{
                      marginBottom: '20px',
                    }}
                  >
                    <Code2
                      size={24}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>
                    {language.title}
                  </h3>

                  <p>
                    {language.description}
                  </p>

                  <p
                    style={{
                      marginTop: '16px',
                      fontSize: '14px',
                      color: '#1167d8',
                    }}
                  >
                    <strong>
                      Common areas:
                    </strong>{' '}
                    {language.areas}
                  </p>

                  <Link
                    href={language.href}
                    className="text-link"
                    style={{
                      marginTop: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                    }}
                  >
                    Explore {language.title}

                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROGRAMMING CONCEPTS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="CORE PROGRAMMING CONCEPTS"
              title="The concepts that sit underneath the language."
              body="Knowing a language involves more than memorizing syntax. Good programming work requires transferable concepts that apply across different languages and environments."
            />

            <div className="approach-grid">
              {programmingConcepts.map(
                (concept) => (
                  <article
                    className="approach-card"
                    key={concept.number}
                  >
                    <span aria-hidden="true">
                      {concept.number}
                    </span>

                    <h3>
                      {concept.title}
                    </h3>

                    <p>
                      {concept.body}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            DEVELOPMENT PRACTICES
           ===================================================== */}

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="SOFTWARE DEVELOPMENT PRACTICES"
              title="Good programming connects implementation with engineering discipline."
              body="Software development involves much more than writing source code. Version control, testing, debugging, documentation, integration, and maintainability all influence the quality of the resulting system."
            />

            <div className="two-column">
              <div>
                <p>
                  The same programming language can be used
                  to produce very different outcomes depending
                  on how the project is structured. A small
                  script, a web application, an API, a research
                  prototype, and a distributed service may all
                  use the same language while requiring very
                  different engineering decisions.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  We therefore look at programming in context:
                  how code is organized, how dependencies are
                  managed, how components communicate, how
                  errors are handled, how software is tested,
                  and how technical decisions are documented.
                </p>
              </div>

              <div className="framework-list">
                {developmentPractices.map(
                  (practice) => (
                    <div key={practice}>
                      <CheckCircle2
                        size={20}
                        aria-hidden="true"
                      />

                      <span>
                        {practice}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROGRAMMING WORKFLOW
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="PROGRAMMING WORKFLOW"
              title="From problem definition to tested software."
              body="A disciplined programming workflow helps separate the problem, the design, the implementation, and the evaluation of a technical solution."
            />

            <div className="phase-grid">
              <article className="phase-card">
                <span className="phase-number">
                  01
                </span>

                <h3>
                  Define the problem
                </h3>

                <p>
                  Clarify the required behaviour,
                  inputs, outputs, constraints,
                  assumptions, and expected outcomes
                  before implementation begins.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  02
                </span>

                <h3>
                  Design the solution
                </h3>

                <p>
                  Select suitable algorithms, data
                  structures, components, interfaces,
                  programming constructs, and
                  architectural approaches.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  03
                </span>

                <h3>
                  Implement and integrate
                </h3>

                <p>
                  Translate the design into working
                  code while connecting databases,
                  APIs, libraries, services, and other
                  required components.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  04
                </span>

                <h3>
                  Test and debug
                </h3>

                <p>
                  Verify expected behaviour, identify
                  defects, investigate unexpected
                  results, and refine the implementation.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  05
                </span>

                <h3>
                  Document and explain
                </h3>

                <p>
                  Connect the implementation to
                  requirements, architecture,
                  testing evidence, technical
                  decisions, and documentation.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  06
                </span>

                <h3>
                  Review and refine
                </h3>

                <p>
                  Examine maintainability, clarity,
                  performance, security, consistency,
                  and opportunities for improvement.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT TYPES
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="PROGRAMMING PROJECTS"
              title="Where programming languages meet real technical work."
              body="Programming appears across a wide range of academic, technical, research, and professional projects. The language is only one part of the overall technical solution."
            />

            <div className="feature-list">
              {projectTypes.map(
                (project, index) => (
                  <article
                    className="feature-item"
                    key={project.title}
                  >
                    <div className="feature-icon">
                      {index < 3 ? (
                        <TerminalSquare
                          size={24}
                          aria-hidden="true"
                        />
                      ) : (
                        <FileCode2
                          size={24}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div>
                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.text}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            LANGUAGE SELECTION
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="CHOOSING A LANGUAGE"
                  title="The best language depends on the problem."
                  body="There is rarely a universally correct programming language. A sound technical choice depends on the problem being solved and the environment in which the software will operate."
                />
              </div>

              <div>
                <p>
                  Relevant considerations may include:
                </p>

                <ul
                  style={{
                    marginTop: '18px',
                  }}
                >
                  <li>
                    Project requirements and learning
                    objectives
                  </li>

                  <li>
                    Available libraries and frameworks
                  </li>

                  <li>
                    Runtime and deployment environment
                  </li>

                  <li>
                    Performance and scalability
                  </li>

                  <li>
                    Maintainability and team familiarity
                  </li>

                  <li>
                    Security and reliability
                  </li>

                  <li>
                    Integration with existing systems
                  </li>

                  <li>
                    Institutional or project constraints
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED TECHNOLOGY HUBS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="internal-links">
              <div>
                <p className="eyebrow">
                  EXPLORE TECHNOLOGIES
                </p>

                <h2>
                  Continue exploring related technical
                  areas.
                </h2>
              </div>

              <div className="internal-link-grid">
                <Link
                  href="/technologies"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      Technologies
                    </strong>

                    <small>
                      Return to the broader
                      ProjectAssignments technology
                      hub.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/technologies/programming-languages-development/other-languages"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      Other Programming Languages
                    </strong>

                    <small>
                      Explore additional languages
                      including TypeScript, Rust, Kotlin,
                      Swift, PHP, Ruby, R, and MATLAB.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/technologies/nasm"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      NASM Assembly
                    </strong>

                    <small>
                      Explore x86-64 assembly,
                      registers, memory, system calls,
                      and low-level programming.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/technologies/weka"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      WEKA
                    </strong>

                    <small>
                      Explore data mining and machine
                      learning using WEKA.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/services/it-software-engineering"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      IT &amp; Software Engineering
                    </strong>

                    <small>
                      Explore our broader technical
                      consultancy for software and IT
                      projects.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
           ===================================================== */}

        <section className="page-content">
          <div className="container narrow-content">
            <SectionHeading
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="Programming languages and software development guidance."
              body="Common questions about programming technologies, development concepts, debugging, algorithms, and technical projects."
            />

            <div className="faq-list">
              {faqs.map((faq) => (
                <details
                  className="faq-item"
                  key={faq.question}
                >
                  <summary>
                    {faq.question}
                  </summary>

                  <p>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            programmingSchema,
          ),
        }}
      />
    </>
  )
}