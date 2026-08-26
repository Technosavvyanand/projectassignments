import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Code2,
    Database,
    FileCode2,
    GitBranch,
    Layers3,
    Network,
    SearchCheck,
    ShieldCheck,
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
    'Python Programming Guide & Project Support | ProjectAssignments',

  description:
    'Explore Python programming fundamentals, OOP, data structures, debugging, APIs, automation, data analysis, cybersecurity scripting, testing, and Python project guidance.',

  keywords: [
    'Python programming',
    'Python programming guide',
    'Python project support',
    'Python programming assignment help',
    'Python project guidance',
    'Python academic support',
    'Python debugging help',
    'Python OOP support',
    'Python data structures',
    'Python API development',
    'Python automation',
    'Python cybersecurity scripting',
    'Python data analysis',
    'Python research projects',
    'Python software development',
    'Python programming concepts',
  ],

  alternates: {
    canonical:
      'https://projectassignments.com/technologies/programming-languages-development/python',
  },

  openGraph: {
    title:
      'Python Programming Guide & Project Support | ProjectAssignments',

    description:
      'A practical Python technology guide covering programming fundamentals, OOP, data structures, APIs, debugging, automation, cybersecurity, data analysis, testing, and research projects.',

    url:
      'https://projectassignments.com/technologies/programming-languages-development/python',

    siteName: 'ProjectAssignments',

    type: 'article',
  },
}

/* =========================================================
   PAGE URL
   ========================================================= */

const pageUrl =
  'https://projectassignments.com/technologies/programming-languages-development/python'

/* =========================================================
   PYTHON TOPICS
   ========================================================= */

const coreTopics = [
  {
    icon: Code2,
    title: 'Python Fundamentals',
    text:
      'Variables, data types, operators, conditional logic, loops, functions, modules, exceptions, and the core syntax required to build reliable Python programs.',
  },
  {
    icon: Layers3,
    title: 'Object-Oriented Python',
    text:
      'Classes, objects, inheritance, encapsulation, polymorphism, composition, abstract interfaces, and practical object-oriented design.',
  },
  {
    icon: SearchCheck,
    title: 'Data Structures & Algorithms',
    text:
      'Lists, tuples, dictionaries, sets, stacks, queues, recursion, searching, sorting, algorithmic reasoning, and complexity analysis.',
  },
  {
    icon: Network,
    title: 'APIs & Application Integration',
    text:
      'HTTP requests, JSON, REST APIs, authentication, backend integration, data exchange, API clients, and service-oriented Python applications.',
  },
  {
    icon: TerminalSquare,
    title: 'Automation & Scripting',
    text:
      'File processing, command-line automation, web requests, system tasks, data pipelines, scheduled jobs, and repetitive workflow automation.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity with Python',
    text:
      'Security scripting, log processing, network analysis, evidence handling, automation, protocol experimentation, and controlled cybersecurity laboratory work.',
  },
]

/* =========================================================
   PYTHON ECOSYSTEM
   ========================================================= */

const ecosystem = [
  {
    category: 'Web & APIs',
    items: [
      'Django',
      'Flask',
      'FastAPI',
      'Requests',
      'Pydantic',
    ],
  },
  {
    category: 'Data & Scientific Computing',
    items: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'SciPy',
      'Jupyter',
    ],
  },
  {
    category: 'Machine Learning',
    items: [
      'scikit-learn',
      'PyTorch',
      'TensorFlow',
      'Jupyter',
      'Model evaluation',
    ],
  },
  {
    category: 'Automation & Scripting',
    items: [
      'os',
      'pathlib',
      'subprocess',
      'requests',
      'Beautiful Soup',
    ],
  },
  {
    category: 'Testing & Quality',
    items: [
      'pytest',
      'unittest',
      'mocking',
      'coverage',
      'linting',
    ],
  },
  {
    category: 'Development Tooling',
    items: [
      'pip',
      'venv',
      'Poetry',
      'Git',
      'VS Code',
    ],
  },
]

/* =========================================================
   PYTHON PROJECT TYPES
   ========================================================= */

const projectTypes = [
  {
    title: 'Python Programming Assignments',
    body:
      'Work through syntax, functions, data structures, object-oriented programming, file handling, algorithms, exception handling, and implementation logic required by coursework.',
  },
  {
    title: 'Python Software Projects',
    body:
      'Develop a clearer understanding of how Python applications are structured across modules, services, databases, APIs, testing environments, and deployment workflows.',
  },
  {
    title: 'Python Data Analysis Projects',
    body:
      'Use Python to clean datasets, transform variables, calculate statistics, visualize results, evaluate models, and document analytical workflows.',
  },
  {
    title: 'Python Research Prototypes',
    body:
      'Build experimental programs, simulations, data-processing pipelines, proof-of-concept systems, and reproducible research tools.',
  },
  {
    title: 'Python Cybersecurity Projects',
    body:
      'Use Python for security automation, log processing, network analysis, data extraction, protocol experiments, and controlled cybersecurity laboratory work.',
  },
  {
    title: 'Python API & Backend Projects',
    body:
      'Explore backend services, REST APIs, JSON processing, authentication, database integration, request handling, and application architecture.',
  },
]

/* =========================================================
   DEVELOPMENT PRACTICES
   ========================================================= */

const practices = [
  'Readable and maintainable code structure',
  'Functions and modules with clear responsibilities',
  'Virtual environments and dependency management',
  'Exception handling and defensive programming',
  'Unit and integration testing',
  'Logging and error diagnosis',
  'Git-based version control',
  'API and database integration',
  'Input validation and secure handling of data',
  'Documentation and reproducible workflows',
]

/* =========================================================
   WHY PYTHON IS USED
   ========================================================= */

const pythonStrengths = [
  {
    title: 'Readable syntax',
    text:
      'Python uses a relatively concise and expressive syntax, which makes it accessible for learning while remaining powerful for larger technical projects.',
  },
  {
    title: 'Large ecosystem',
    text:
      'A broad ecosystem of libraries and frameworks supports web development, automation, scientific computing, cybersecurity, machine learning, and data analysis.',
  },
  {
    title: 'Rapid prototyping',
    text:
      'Python can be used to move quickly from an idea to a working prototype, making it particularly useful for research and proof-of-concept development.',
  },
  {
    title: 'Cross-domain usage',
    text:
      'The same language can appear in software engineering, cybersecurity, data analysis, research, automation, testing, and infrastructure projects.',
  },
]

/* =========================================================
   FAQ
   ========================================================= */

const faqs = [
  {
    question:
      'Can you provide Python programming assignment guidance?',
    answer:
      'Yes. We provide technical and educational guidance across Python fundamentals, object-oriented programming, algorithms, data structures, debugging, APIs, automation, testing, and project documentation. The objective is to help you understand the implementation rather than simply provide unexplained answers.',
  },
  {
    question:
      'Can you help debug a Python project or explain Python errors?',
    answer:
      'Yes. We can help analyse syntax errors, exceptions, logical bugs, dependency problems, API issues, database integration errors, unexpected program behaviour, and other implementation problems while explaining the underlying cause.',
  },
  {
    question:
      'Do you support Python object-oriented programming projects?',
    answer:
      'Yes. Guidance can cover classes, objects, constructors, inheritance, encapsulation, polymorphism, composition, abstract interfaces, and practical object-oriented design decisions.',
  },
  {
    question:
      'Can Python be used for cybersecurity projects?',
    answer:
      'Absolutely. Python is frequently used for security automation, log processing, data extraction, network analysis, scripting, evidence processing, API interaction, and controlled cybersecurity laboratory exercises.',
  },
  {
    question:
      'Can you help with Python data analysis and research projects?',
    answer:
      'Yes. We can provide guidance around data cleaning, transformation, statistical analysis, visualization, reproducible workflows, research prototypes, and Python libraries used for analytical work.',
  },
  {
    question:
      'Can you help choose a Python framework for a project?',
    answer:
      'Yes. Framework selection can be evaluated against the project requirements. For example, Django may suit a larger web application, Flask may fit a lightweight service, and FastAPI may be appropriate for API-focused backend work.',
  },
]

/* =========================================================
   STRUCTURED DATA
   ========================================================= */

const pythonSchema = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'TechArticle',

      '@id': `${pageUrl}#article`,

      headline:
        'Python Programming Guide & Project Support',

      description:
        'A practical guide to Python programming fundamentals, object-oriented programming, data structures, APIs, automation, testing, cybersecurity scripting, data analysis, and research projects.',

      mainEntityOfPage: {
        '@id': `${pageUrl}#webpage`,
      },

      about: {
        '@type': 'ComputerLanguage',

        name: 'Python',

        url: 'https://www.python.org/',
      },

      author: {
        '@type': 'Organization',

        name: 'ProjectAssignments',

        url: 'https://projectassignments.com/',
      },

      publisher: {
        '@type': 'Organization',

        name: 'ProjectAssignments',

        url: 'https://projectassignments.com/',
      },
    },

    {
      '@type': 'WebPage',

      '@id': `${pageUrl}#webpage`,

      url: pageUrl,

      name:
        'Python Programming Guide & Project Support | ProjectAssignments',

      description:
        'Explore Python programming concepts, development practices, libraries, APIs, automation, cybersecurity, data analysis, and research applications.',

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

          item:
            'https://projectassignments.com/technologies/programming-languages-development',
        },

        {
          '@type': 'ListItem',

          position: 4,

          name: 'Python',

          item: pageUrl,
        },
      ],
    },

    {
      '@type': 'ItemList',

      '@id': `${pageUrl}#python-topics`,

      name: 'Python Programming Topics',

      itemListElement: coreTopics.map(
        (topic, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: topic.title,
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

export default function PythonPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="PROGRAMMING LANGUAGES • PYTHON"
          title="Python Programming for Software, Data, Automation & Research"
          body="Explore Python programming fundamentals, object-oriented design, data structures, APIs, automation, testing, cybersecurity scripting, data analysis, and research-oriented development."
        />

        {/* =====================================================
            INTRODUCTION
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="PYTHON PROGRAMMING"
                  title="A general-purpose language with applications across technical disciplines."
                  body="Python is widely used because one language can support very different kinds of technical work, from small automation scripts and academic exercises to APIs, data analysis, cybersecurity tooling, research prototypes, and larger software systems."
                />
              </div>

              <div>
                <p>
                  Learning Python effectively means
                  understanding more than syntax. A strong
                  Python project requires decisions about
                  data structures, program organization,
                  functions, dependencies, error handling,
                  testing, and the relationship between
                  individual components.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  That becomes particularly important in
                  academic and research projects, where the
                  implementation may need to be explained,
                  tested, evaluated, documented, and connected
                  to a broader research or project objective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CORE TOPICS
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="CORE PYTHON TOPICS"
              title="The Python concepts that matter across real projects."
              body="Python becomes much easier to work with when the language is understood as a collection of connected programming concepts rather than isolated syntax rules."
            />

            <div
              className="card-grid"
              style={{
                marginTop: '42px',
              }}
            >
              {coreTopics.map((topic) => {
                const Icon = topic.icon

                return (
                  <article
                    className="info-card"
                    key={topic.title}
                  >
                    <div
                      className="icon-box"
                      style={{
                        marginBottom: '20px',
                      }}
                    >
                      <Icon
                        size={24}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>
                      {topic.title}
                    </h3>

                    <p>
                      {topic.text}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            PYTHON FUNDAMENTALS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="PYTHON FUNDAMENTALS"
                  title="Understand the building blocks before scaling the application."
                  body="The foundation of Python development lies in understanding how values, functions, collections, modules, exceptions, and program flow work together."
                />
              </div>

              <div>
                <p>
                  Core areas commonly include:
                </p>

                <ul
                  style={{
                    marginTop: '18px',
                  }}
                >
                  <li>
                    Variables and built-in data types
                  </li>

                  <li>
                    Conditional statements and loops
                  </li>

                  <li>
                    Functions, parameters, and return values
                  </li>

                  <li>
                    Lists, tuples, dictionaries, and sets
                  </li>

                  <li>
                    Modules, imports, and package structure
                  </li>

                  <li>
                    Exception handling
                  </li>

                  <li>
                    File input/output
                  </li>

                  <li>
                    Iteration, comprehensions, and generators
                  </li>

                  <li>
                    Context managers and resource handling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OBJECT ORIENTED PROGRAMMING
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="OBJECT-ORIENTED PYTHON"
              title="From individual functions to structured software components."
              body="Object-oriented programming becomes valuable as Python projects grow. Classes and objects can help model entities, separate responsibilities, and organize larger applications."
            />

            <div className="feature-list">
              <article className="feature-item">
                <div className="feature-icon">
                  <Layers3
                    size={24}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>
                    Classes and objects
                  </h3>

                  <p>
                    Understand how classes define behaviour
                    and state, while objects provide concrete
                    instances used throughout an application.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <div className="feature-icon">
                  <Network
                    size={24}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>
                    Inheritance and composition
                  </h3>

                  <p>
                    Examine when reusable behaviour should be
                    inherited and when composition produces a
                    cleaner and more maintainable design.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <div className="feature-icon">
                  <Code2
                    size={24}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>
                    Encapsulation and interfaces
                  </h3>

                  <p>
                    Keep implementation details organized
                    while exposing clear interfaces between
                    components.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <div className="feature-icon">
                  <GitBranch
                    size={24}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>
                    Design and maintainability
                  </h3>

                  <p>
                    Connect object-oriented concepts with
                    modular architecture, testing, version
                    control, and long-term maintainability.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            DATA STRUCTURES & ALGORITHMS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="DATA STRUCTURES & ALGORITHMS"
              title="Python is often the language used to make algorithmic thinking visible."
              body="Programming projects frequently evaluate not only whether a solution works, but why a particular data structure or algorithm is appropriate and how its performance can be understood."
            />

            <div className="two-column">
              <div>
                <p>
                  Python provides built-in structures such as
                  lists, tuples, dictionaries, and sets, while
                  also allowing developers to construct
                  specialized structures for more complex
                  problems.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Algorithmic work may involve searching,
                  sorting, recursion, graph traversal, path
                  finding, dynamic programming, or complexity
                  analysis. The important point is to connect
                  implementation with the reasoning behind the
                  chosen approach.
                </p>
              </div>

              <div className="framework-list">
                {[
                  'Lists and tuples',
                  'Dictionaries and hashing',
                  'Sets and membership operations',
                  'Stacks and queues',
                  'Trees and graphs',
                  'Searching and sorting',
                  'Recursion',
                  'Big-O complexity analysis',
                ].map((item) => (
                  <div key={item}>
                    <CheckCircle2
                      size={20}
                      aria-hidden="true"
                    />

                    <span>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ECOSYSTEM
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="PYTHON ECOSYSTEM"
              title="Python's real strength comes from its surrounding ecosystem."
              body="Python itself is only the foundation. Libraries, frameworks, development tools, testing systems, and scientific packages extend the language into many different technical domains."
            />

            <div className="card-grid tool-grid">
              {ecosystem.map((group) => (
                <article
                  className="info-card"
                  key={group.category}
                >
                  <h3>
                    {group.category}
                  </h3>

                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <CheckCircle2
                          size={16}
                          aria-hidden="true"
                        />

                        <span>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DATA / AUTOMATION / CYBERSECURITY
           ===================================================== */}

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="PYTHON ACROSS TECHNICAL DOMAINS"
              title="One language, many different project applications."
              body="Python appears across software engineering, analytics, cybersecurity, automation, research, and backend development because its ecosystem supports a wide range of technical workflows."
            />

            <div className="two-column">
              <div>
                <p>
                  In data-oriented work, Python can support
                  the preparation, transformation, visualization,
                  and modelling of datasets. In cybersecurity,
                  it can be used for controlled automation,
                  log processing, network analysis, and
                  laboratory exercises.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  In software engineering, Python can sit
                  behind APIs, web applications, background
                  services, automation systems, and data
                  pipelines. The appropriate use depends on
                  the requirements of the specific project.
                </p>
              </div>

              <div className="framework-list">
                <div>
                  <BarChart3
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    Data analysis and visualization
                  </span>
                </div>

                <div>
                  <ShieldCheck
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    Cybersecurity scripting and analysis
                  </span>
                </div>

                <div>
                  <TerminalSquare
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    Automation and command-line tooling
                  </span>
                </div>

                <div>
                  <Network
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    APIs and backend development
                  </span>
                </div>

                <div>
                  <Database
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    Database-driven applications
                  </span>
                </div>

                <div>
                  <FileCode2
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    Research prototypes and technical artefacts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DEVELOPMENT PRACTICES
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="PYTHON DEVELOPMENT PRACTICES"
              title="Writing Python is only one part of building reliable software."
              body="Projects become easier to understand, test, maintain, and explain when programming is combined with disciplined development practices."
            />

            <div className="two-column">
              <div>
                <p>
                  A technically working script can still be
                  difficult to maintain if dependencies are
                  unmanaged, exceptions are ignored, functions
                  have unclear responsibilities, or important
                  decisions are not documented.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Academic and research projects benefit from
                  the same discipline as professional software:
                  reproducible environments, clear source
                  organization, testing, version control, and
                  documentation make the final technical work
                  easier to evaluate and explain.
                </p>
              </div>

              <div className="framework-list">
                {practices.map((practice) => (
                  <div key={practice}>
                    <CheckCircle2
                      size={20}
                      aria-hidden="true"
                    />

                    <span>
                      {practice}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PYTHON STRENGTHS
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="WHY PYTHON"
              title="Why Python continues to appear across academic and technical projects."
              body="Python is not the correct choice for every problem, but several characteristics make it especially useful for learning, experimentation, automation, research, and rapid application development."
            />

            <div className="approach-grid">
              {pythonStrengths.map(
                (strength, index) => (
                  <article
                    className="approach-card"
                    key={strength.title}
                  >
                    <span aria-hidden="true">
                      {String(index + 1).padStart(
                        2,
                        '0',
                      )}
                    </span>

                    <h3>
                      {strength.title}
                    </h3>

                    <p>
                      {strength.text}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT TYPES
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="PYTHON PROJECTS"
              title="Where Python programming meets practical technical work."
              body="Python can support many different types of academic, research, and technical projects. The implementation approach should always follow the actual project requirements."
            />

            <div className="feature-list">
              {projectTypes.map(
                (project, index) => (
                  <article
                    className="feature-item"
                    key={project.title}
                  >
                    <div className="feature-icon">
                      {index % 2 === 0 ? (
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
                        {project.body}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            LEARNING / PROJECT WORKFLOW
           ===================================================== */}

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="PYTHON PROJECT WORKFLOW"
              title="A structured approach from requirements to tested implementation."
              body="Whether the project is a programming assignment, API, analytical model, automation script, or research prototype, a disciplined workflow helps connect the implementation with the intended outcome."
            />

            <div className="phase-grid">
              <article className="phase-card">
                <span className="phase-number">
                  01
                </span>

                <h3>
                  Define the requirement
                </h3>

                <p>
                  Identify the problem, inputs, outputs,
                  constraints, assumptions, and expected
                  behaviour before writing the main
                  implementation.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  02
                </span>

                <h3>
                  Select the approach
                </h3>

                <p>
                  Choose suitable functions, data
                  structures, algorithms, libraries, and
                  architectural patterns for the problem.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  03
                </span>

                <h3>
                  Implement the solution
                </h3>

                <p>
                  Build modular Python code and connect
                  databases, APIs, files, services, or
                  external libraries where required.
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
                  Exercise expected and unexpected cases,
                  identify defects, inspect errors, and
                  validate the behaviour of the implementation.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  05
                </span>

                <h3>
                  Document the work
                </h3>

                <p>
                  Explain technical decisions, dependencies,
                  architecture, testing results, limitations,
                  and relevant implementation details.
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
                  Improve readability, maintainability,
                  security, performance, consistency, and
                  reproducibility where appropriate.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED LINKS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="internal-links">
              <div>
                <p className="eyebrow">
                  EXPLORE MORE
                </p>

                <h2>
                  Continue exploring programming and
                  technical project support.
                </h2>
              </div>

              <div className="internal-link-grid">
                <Link
                  href="/technologies/programming-languages-development"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      Programming Languages &amp;
                      Development
                    </strong>

                    <small>
                      Return to the broader programming
                      technology hub and explore other
                      languages.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/technologies"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      Technologies
                    </strong>

                    <small>
                      Explore the wider ProjectAssignments
                      technology library.
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
                      Explore low-level programming,
                      x86-64 assembly, registers, memory,
                      and system calls.
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
                      consultancy for software engineering
                      and IT projects.
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
              title="Python programming and project guidance."
              body="Common questions about Python programming, debugging, object-oriented development, cybersecurity, data analysis, and technical projects."
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

        {/* =====================================================
            CTA
           ===================================================== */}

        <CTA />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pythonSchema,
          ),
        }}
      />
    </>
  )
}