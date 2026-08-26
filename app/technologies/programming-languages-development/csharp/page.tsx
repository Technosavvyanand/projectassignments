import {
    ArrowRight,
    Bug,
    CheckCircle2,
    Code2,
    Database,
    FileCode2,
    GitBranch,
    Globe2,
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
    'C# Programming Guide & Project Support | ProjectAssignments',

  description:
    'Explore C# programming fundamentals, OOP, .NET, LINQ, async programming, collections, exceptions, ASP.NET Core, Entity Framework, APIs, testing, and software development.',

  keywords: [
    'C# programming',
    'C# programming guide',
    'C# programming project support',
    'C# programming assignment help',
    'C# academic support',
    'C# project guidance',
    'C# OOP',
    'C# object oriented programming',
    'C# .NET',
    'C# .NET programming',
    'C# LINQ',
    'C# async await',
    'C# collections',
    'C# delegates events',
    'C# exception handling',
    'C# debugging',
    'C# ASP.NET Core',
    'C# Web API',
    'C# Entity Framework Core',
    'C# database application',
    'C# software development',
    'C# programming coursework',
  ],

  alternates: {
    canonical:
      'https://projectassignments.com/technologies/programming-languages-development/csharp',
  },

  openGraph: {
    title:
      'C# Programming Guide & Project Support | ProjectAssignments',

    description:
      'A practical C# guide covering OOP, .NET, LINQ, async programming, collections, ASP.NET Core, APIs, Entity Framework Core, testing, debugging, and software development.',

    url:
      'https://projectassignments.com/technologies/programming-languages-development/csharp',

    siteName: 'ProjectAssignments',

    type: 'article',
  },
}

/* =========================================================
   PAGE URL
   ========================================================= */

const pageUrl =
  'https://projectassignments.com/technologies/programming-languages-development/csharp'

/* =========================================================
   CORE C# TOPICS
   ========================================================= */

const coreTopics = [
  {
    icon: Code2,
    title: 'C# Fundamentals',
    text:
      'Understand variables, types, operators, control flow, methods, arrays, strings, namespaces, properties, and the language features used to build C# applications.',
  },
  {
    icon: Layers3,
    title: 'Object-Oriented C#',
    text:
      'Explore classes, objects, inheritance, interfaces, abstraction, encapsulation, polymorphism, constructors, composition, and object-oriented design.',
  },
  {
    icon: Database,
    title: 'Collections & LINQ',
    text:
      'Work with generic collections and LINQ queries for filtering, projection, grouping, ordering, aggregation, and transformation of application data.',
  },
  {
    icon: Network,
    title: 'ASP.NET Core & APIs',
    text:
      'Understand controllers, minimal APIs, routing, middleware, dependency injection, model binding, validation, authentication concepts, and REST API development.',
  },
  {
    icon: TerminalSquare,
    title: '.NET Application Development',
    text:
      'Explore the .NET runtime and ecosystem across console applications, web applications, services, desktop software, libraries, and cross-platform development.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure C# Development',
    text:
      'Study validation, authentication, authorization, secure API design, dependency management, secrets handling, error management, and defensive software practices.',
  },
]

/* =========================================================
   C# LANGUAGE CONCEPTS
   ========================================================= */

const csharpConcepts = [
  {
    number: '01',
    title: 'Types, Variables & Properties',
    body:
      'C# provides a rich type system covering value types, reference types, nullable types, records, enums, structs, classes, and properties. Understanding these differences helps explain program behaviour and data ownership.',
  },
  {
    number: '02',
    title: 'Classes, Interfaces & Inheritance',
    body:
      'C# supports object-oriented design through classes, interfaces, inheritance, virtual members, overriding, and abstraction. Composition and interface-based design are also important for loosely coupled software.',
  },
  {
    number: '03',
    title: 'Generics & Type Safety',
    body:
      'Generics allow reusable classes and methods to operate across types while preserving compile-time type checking. They underpin many of the collections and APIs used in modern .NET applications.',
  },
  {
    number: '04',
    title: 'Delegates, Events & Lambdas',
    body:
      'Delegates represent callable behaviour, while events support notification patterns. Lambda expressions provide concise ways to express functions and are heavily used with LINQ and asynchronous programming.',
  },
  {
    number: '05',
    title: 'Exception Handling',
    body:
      'Structured exception handling allows applications to detect, propagate, and respond to failures. Good design also considers where errors should be handled and how useful diagnostic information should be preserved.',
  },
  {
    number: '06',
    title: 'Async & Await',
    body:
      'C# provides asynchronous programming constructs that simplify network, file, database, and other I/O-bound operations. Understanding tasks, await, cancellation, and error propagation is essential for modern applications.',
  },
]

/* =========================================================
   COLLECTIONS & LINQ
   ========================================================= */

const collectionAreas = [
  'List<T>',
  'Dictionary<TKey,TValue>',
  'HashSet<T>',
  'Queue<T>',
  'Stack<T>',
  'LinkedList<T>',
  'IEnumerable<T>',
  'IQueryable<T>',
  'LINQ filtering',
  'LINQ projection',
  'LINQ grouping',
  'LINQ aggregation',
]

/* =========================================================
   ASYNC PROGRAMMING
   ========================================================= */

const asyncAreas = [
  'Task and Task<T>',
  'async and await',
  'CancellationToken',
  'Parallel asynchronous operations',
  'Exception propagation',
  'I/O-bound workloads',
  'HTTP requests',
  'Asynchronous database operations',
  'Concurrency concepts',
  'Avoiding blocking operations',
]

/* =========================================================
   ASP.NET / .NET ECOSYSTEM
   ========================================================= */

const ecosystem = [
  {
    title: 'Web & API Development',
    items: [
      'ASP.NET Core',
      'Web API',
      'Minimal APIs',
      'MVC',
      'Middleware',
    ],
  },
  {
    title: 'Data & Persistence',
    items: [
      'Entity Framework Core',
      'LINQ',
      'ADO.NET',
      'SQL Server',
      'Database migrations',
    ],
  },
  {
    title: 'Testing',
    items: [
      'xUnit',
      'NUnit',
      'MSTest',
      'Integration testing',
      'Mocking concepts',
    ],
  },
  {
    title: 'Development Tooling',
    items: [
      'Visual Studio',
      'VS Code',
      '.NET CLI',
      'NuGet',
      'Git',
    ],
  },
  {
    title: 'Desktop & Application Development',
    items: [
      'WPF',
      'Windows Forms',
      'Console applications',
      '.NET class libraries',
      'Cross-platform .NET',
    ],
  },
  {
    title: 'Application Architecture',
    items: [
      'Dependency injection',
      'Configuration',
      'Logging',
      'Service layers',
      'Repository concepts',
    ],
  },
]

/* =========================================================
   APPLICATION AREAS
   ========================================================= */

const applicationAreas = [
  {
    title: 'Enterprise Applications',
    text:
      'C# and .NET are well suited to structured business applications where maintainability, integration, security, data access, and long-term support are important.',
  },
  {
    title: 'Web Applications',
    text:
      'ASP.NET Core provides a mature environment for server-side applications, APIs, middleware, validation, authentication, and application services.',
  },
  {
    title: 'Desktop Software',
    text:
      'C# supports Windows desktop development through technologies such as WPF and Windows Forms, making it useful for internal tools and desktop applications.',
  },
  {
    title: 'Cloud & Backend Services',
    text:
      'Modern .NET applications can be deployed as APIs, services, background processes, containers, and cloud-hosted workloads.',
  },
  {
    title: 'Database-Driven Systems',
    text:
      'C# integrates closely with relational databases through Entity Framework Core, ADO.NET, LINQ, SQL, and application-level persistence patterns.',
  },
  {
    title: 'Research & Academic Projects',
    text:
      'C# can support simulations, information systems, prototypes, data-processing applications, web systems, and software engineering research projects.',
  },
]

/* =========================================================
   C# PROJECT TYPES
   ========================================================= */

const projectTypes = [
  {
    title: 'C# Programming Assignments',
    body:
      'Work through variables, methods, classes, properties, arrays, collections, exception handling, file handling, and object-oriented programming exercises commonly used in coursework.',
  },
  {
    title: 'Object-Oriented Programming Projects',
    body:
      'Design classes, interfaces, inheritance structures, composition relationships, abstractions, and reusable components using C# object-oriented features.',
  },
  {
    title: 'LINQ & Data Processing Projects',
    body:
      'Use LINQ to filter, transform, group, sort, aggregate, and query collections and structured data while understanding deferred execution and query behaviour.',
  },
  {
    title: 'ASP.NET Core & Web API Projects',
    body:
      'Explore controllers, endpoints, routing, dependency injection, validation, middleware, authentication concepts, database integration, and REST API architecture.',
  },
  {
    title: 'Entity Framework & Database Projects',
    body:
      'Connect C# applications to relational databases using Entity Framework Core, LINQ, SQL, relationships, migrations, transactions, and persistence models.',
  },
  {
    title: 'Async & Multithreaded Applications',
    body:
      'Study asynchronous workflows, task-based programming, cancellation, concurrency, background work, and the challenges of coordinating operations correctly.',
  },
  {
    title: 'Desktop Application Development',
    body:
      'Build and reason about desktop interfaces, event-driven programming, application state, data access, validation, and architecture using .NET desktop technologies.',
  },
  {
    title: 'Secure Software Development',
    body:
      'Explore secure API design, authentication, authorization, input validation, dependency risks, secrets management, error handling, and defensive application development.',
  },
]

/* =========================================================
   DEVELOPMENT PRACTICES
   ========================================================= */

const practices = [
  'Use clear class and namespace boundaries',
  'Prefer meaningful names and focused responsibilities',
  'Use interfaces where abstraction improves maintainability',
  'Apply dependency injection appropriately',
  'Use generics for reusable type-safe components',
  'Handle exceptions at meaningful architectural boundaries',
  'Avoid unnecessary blocking in asynchronous applications',
  'Validate external and user-controlled input',
  'Use unit and integration testing',
  'Manage NuGet dependencies carefully',
  'Use configuration and secrets management appropriately',
  'Document important design and architectural decisions',
]

/* =========================================================
   DEBUGGING
   ========================================================= */

const debuggingAreas = [
  {
    title: 'Compiler & build errors',
    text:
      'Investigate syntax errors, type mismatches, missing references, package problems, build configuration issues, and project-file problems.',
  },
  {
    title: 'Runtime exceptions',
    text:
      'Trace null-related failures, invalid operations, database exceptions, API failures, configuration problems, and other runtime behaviour.',
  },
  {
    title: 'Async debugging',
    text:
      'Analyse task failures, cancellation, unexpected timing, deadlocks, blocking calls, and incorrect asynchronous control flow.',
  },
  {
    title: 'Application diagnostics',
    text:
      'Use debugger watches, breakpoints, logs, stack traces, structured diagnostics, and reproducible test cases to identify the underlying cause of a problem.',
  },
]

/* =========================================================
   FAQ
   ========================================================= */

const faqs = [
  {
    question:
      'Can you provide C# programming assignment guidance?',
    answer:
      'Yes. We provide technical and educational guidance across C# fundamentals, object-oriented programming, collections, LINQ, exception handling, async programming, APIs, databases, debugging, testing, and software engineering projects.',
  },
  {
    question:
      'Can you help with C# object-oriented programming?',
    answer:
      'Yes. Guidance can cover classes, objects, constructors, properties, inheritance, interfaces, abstraction, polymorphism, composition, virtual members, and practical object-oriented design.',
  },
  {
    question:
      'Can you explain C# collections and LINQ?',
    answer:
      'Yes. We can help explain List, Dictionary, HashSet, queues, stacks, IEnumerable, IQueryable, and LINQ operations such as filtering, projection, grouping, sorting, and aggregation.',
  },
  {
    question:
      'Can you help with C# async and await?',
    answer:
      'Yes. Support can cover Task, Task<T>, async/await, cancellation, asynchronous HTTP and database operations, error propagation, and common mistakes caused by blocking asynchronous code.',
  },
  {
    question:
      'Can you help with ASP.NET Core and Web API projects?',
    answer:
      'Yes. Guidance can cover routing, controllers, minimal APIs, middleware, dependency injection, validation, application services, authentication concepts, database integration, testing, and API architecture.',
  },
  {
    question:
      'Can you help with Entity Framework Core and SQL databases?',
    answer:
      'Yes. Support can cover entities, relationships, DbContext, LINQ queries, migrations, SQL integration, persistence patterns, transactions, and debugging database-related issues.',
  },
  {
    question:
      'Can C# be used for academic and research projects?',
    answer:
      'Absolutely. C# and .NET can support simulations, information systems, desktop software, web applications, APIs, data-processing tools, research prototypes, and larger software engineering projects.',
  },
]

/* =========================================================
   STRUCTURED DATA
   ========================================================= */

const csharpSchema = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'TechArticle',

      '@id': `${pageUrl}#article`,

      headline:
        'C# Programming Guide & Project Support',

      description:
        'A practical C# programming guide covering fundamentals, object-oriented programming, .NET, collections, LINQ, async programming, ASP.NET Core, APIs, Entity Framework Core, testing, debugging, and software development.',

      mainEntityOfPage: {
        '@id': `${pageUrl}#webpage`,
      },

      about: {
        '@type': 'ComputerLanguage',
        name: 'C#',
      },

      author: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url:
          'https://projectassignments.com/',
      },

      publisher: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url:
          'https://projectassignments.com/',
      },
    },

    {
      '@type': 'WebPage',

      '@id': `${pageUrl}#webpage`,

      url: pageUrl,

      name:
        'C# Programming Guide & Project Support | ProjectAssignments',

      description:
        'Explore C# programming concepts, .NET development, LINQ, asynchronous programming, APIs, ASP.NET Core, databases, testing, debugging, and technical projects.',

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
          name: 'C# Programming',
          item: pageUrl,
        },
      ],
    },

    {
      '@type': 'ItemList',

      '@id':
        `${pageUrl}#core-topics`,

      name:
        'C# Programming Topics',

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

export default function CSharpProgrammingPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="PROGRAMMING LANGUAGES • C# • .NET"
          title="C# Programming: .NET, OOP, LINQ, APIs & Application Development"
          body="Explore C# from programming fundamentals and object-oriented design to collections, LINQ, async programming, ASP.NET Core, APIs, Entity Framework Core, testing, debugging, and modern .NET development."
        />

        {/* =====================================================
            INTRODUCTION
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="C# PROGRAMMING"
                  title="A modern programming language closely connected to the .NET development platform."
                  body="C# combines object-oriented programming, a strong type system, extensive libraries, asynchronous programming support, and a mature application ecosystem."
                />
              </div>

              <div>
                <p>
                  C# is often encountered as part of a broader
                  .NET development environment rather than as
                  an isolated language. A project may combine
                  C# with ASP.NET Core, Entity Framework Core,
                  SQL databases, testing frameworks, dependency
                  injection, configuration systems, and other
                  .NET tooling.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  That makes C# useful for both programming
                  coursework and larger software engineering
                  projects. Understanding the language means
                  learning not only syntax, but also how
                  application components communicate and how
                  the .NET ecosystem supports them.
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
              eyebrow="CORE C# TOPICS"
              title="The concepts that underpin practical C# development."
              body="C# projects become easier to understand when language features, libraries, application architecture, and the .NET runtime are treated as connected parts of the same development environment."
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
            LANGUAGE CONCEPTS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="C# LANGUAGE CONCEPTS"
              title="From basic types to asynchronous application logic."
              body="Modern C# contains a wide range of language features. Learning them as connected ideas makes it easier to understand larger applications."
            />

            <div className="approach-grid">
              {csharpConcepts.map((concept) => (
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
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            OBJECT-ORIENTED C#
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="OBJECT-ORIENTED C#"
                  title="Classes are only the beginning of good C# design."
                  body="C# provides a rich object-oriented model, but effective design also depends on responsibilities, interfaces, composition, dependencies, and application boundaries."
                />
              </div>

              <div>
                <p>
                  A well-structured C# application considers
                  what each class is responsible for, which
                  dependencies it needs, what interfaces it
                  exposes, and how components interact.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Interface-based design and dependency
                  injection are especially important in larger
                  .NET applications because they can make
                  components easier to replace and test.
                </p>

                <ul
                  style={{
                    marginTop: '18px',
                  }}
                >
                  <li>
                    Classes and objects
                  </li>

                  <li>
                    Properties and methods
                  </li>

                  <li>
                    Encapsulation
                  </li>

                  <li>
                    Inheritance
                  </li>

                  <li>
                    Interfaces
                  </li>

                  <li>
                    Abstract classes
                  </li>

                  <li>
                    Polymorphism
                  </li>

                  <li>
                    Composition
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COLLECTIONS & LINQ
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="COLLECTIONS & LINQ"
              title="LINQ turns collection processing into a core part of modern C# development."
              body="C# provides a strong collection ecosystem, while LINQ provides a consistent way to query and transform data across many sources."
            />

            <div className="two-column">
              <div>
                <p>
                  Collections such as List, Dictionary, and
                  HashSet provide standard ways to represent
                  groups of data. LINQ can then be used to filter,
                  transform, group, order, and aggregate those
                  values.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Understanding the difference between
                  IEnumerable and IQueryable can also become
                  important when working with databases and
                  larger data sources because the query may be
                  evaluated in different environments.
                </p>
              </div>

              <div className="framework-list">
                {collectionAreas.map((item) => (
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
            ASYNC
           ===================================================== */}

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="ASYNC PROGRAMMING"
              title="Modern applications need to handle slow external operations without unnecessarily blocking execution."
              body="C# provides task-based asynchronous programming through Task, async, await, cancellation, and related concurrency mechanisms."
            />

            <div className="two-column">
              <div>
                <p>
                  Network calls, database operations, file
                  operations, and other I/O-bound tasks can take
                  significantly longer than ordinary in-memory
                  operations. Asynchronous programming allows an
                  application to structure these waits without
                  treating them as ordinary blocking work.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  The difficult part is often not writing
                  <code>await</code>, but understanding task
                  lifecycles, exceptions, cancellation,
                  concurrency, and the difference between
                  asynchronous execution and parallel execution.
                </p>
              </div>

              <div className="framework-list">
                {asyncAreas.map((item) => (
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
            ASP.NET CORE
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="ASP.NET CORE & WEB APIs"
              title="C# becomes a complete application platform when combined with ASP.NET Core."
              body="ASP.NET Core provides the infrastructure for modern web applications, APIs, middleware, dependency injection, validation, configuration, and service-oriented application architecture."
            />

            <div className="feature-list">
              <article className="feature-item">
                <div className="feature-icon">
                  <Network
                    size={24}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>
                    REST API development
                  </h3>

                  <p>
                    Explore routing, HTTP methods, controllers,
                    minimal APIs, request and response models,
                    status codes, validation, and API
                    integration.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <div className="feature-icon">
                  <Layers3
                    size={24}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>
                    Middleware and application pipelines
                  </h3>

                  <p>
                    Understand how middleware processes HTTP
                    requests and responses and how cross-cutting
                    concerns can be introduced into an
                    application pipeline.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <div className="feature-icon">
                  <ShieldCheck
                    size={24}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>
                    Validation and security
                  </h3>

                  <p>
                    Work through input validation, authentication
                    concepts, authorization, error handling,
                    configuration, and secure API design.
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
                    Dependency injection
                  </h3>

                  <p>
                    Understand how services and their
                    dependencies can be registered and resolved
                    to reduce coupling and improve testability.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            ENTITY FRAMEWORK
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="DATABASES & ENTITY FRAMEWORK CORE"
                  title="C# applications frequently depend on structured persistence and data access."
                  body="Entity Framework Core provides an object-relational mapping layer that allows .NET applications to work with relational data using familiar C# models and LINQ."
                />
              </div>

              <div>
                <p>
                  Database projects may involve defining
                  entities, relationships, keys, constraints,
                  queries, migrations, transactions, and
                  application-level persistence logic.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Understanding what the ORM is doing behind
                  the scenes is important. The ability to write
                  a LINQ expression does not remove the need to
                  understand SQL, indexing, relationships,
                  query efficiency, or data integrity.
                </p>

                <ul
                  style={{
                    marginTop: '18px',
                  }}
                >
                  <li>
                    Entities and relationships
                  </li>

                  <li>
                    DbContext
                  </li>

                  <li>
                    LINQ queries
                  </li>

                  <li>
                    Migrations
                  </li>

                  <li>
                    Transactions
                  </li>

                  <li>
                    SQL integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ECOSYSTEM
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow=".NET ECOSYSTEM"
              title="The C# language sits inside a much larger development ecosystem."
              body="Modern C# projects frequently combine the language with runtime services, web frameworks, persistence libraries, testing tools, package management, and development environments."
            />

            <div className="card-grid tool-grid">
              {ecosystem.map((group) => (
                <article
                  className="info-card"
                  key={group.title}
                >
                  <div
                    className="icon-box"
                    style={{
                      marginBottom: '18px',
                    }}
                  >
                    <TerminalSquare
                      size={24}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>
                    {group.title}
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
            DEBUGGING
           ===================================================== */}

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="C# DEBUGGING & DIAGNOSTICS"
              title="A good debugger turns an unexplained failure into observable evidence."
              body="C# applications can fail during compilation, startup, runtime execution, database interaction, network communication, or asynchronous workflows."
            />

            <div className="feature-list">
              {debuggingAreas.map(
                (area, index) => (
                  <article
                    className="feature-item"
                    key={area.title}
                  >
                    <div className="feature-icon">
                      {index % 2 === 0 ? (
                        <Bug
                          size={24}
                          aria-hidden="true"
                        />
                      ) : (
                        <SearchCheck
                          size={24}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div>
                      <h3>
                        {area.title}
                      </h3>

                      <p>
                        {area.text}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            SECURE DEVELOPMENT
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="SECURE C# DEVELOPMENT"
                  title="Application security needs to be considered throughout the .NET stack."
                  body="Security concerns can appear in input handling, authentication, authorization, APIs, configuration, dependencies, database access, logging, and error handling."
                />
              </div>

              <div>
                <p>
                  A secure application begins with clearly
                  defined trust boundaries and careful treatment
                  of external input. Web APIs should validate
                  requests, enforce authorization appropriately,
                  protect sensitive configuration, and avoid
                  exposing unnecessary implementation details.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Security also extends to the development
                  process. Dependencies should be maintained
                  carefully, secrets should not be embedded
                  directly in source code, and security-related
                  behaviour should be tested rather than assumed.
                </p>

                <div
                  className="framework-list"
                  style={{
                    marginTop: '24px',
                  }}
                >
                  {[
                    'Input validation',
                    'Authentication and authorization',
                    'API security',
                    'Secrets and configuration management',
                    'Dependency risk management',
                    'Secure error handling',
                  ].map((item) => (
                    <div key={item}>
                      <ShieldCheck
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
          </div>
        </section>

        {/* =====================================================
            DEVELOPMENT PRACTICES
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="C# DEVELOPMENT PRACTICES"
              title="Maintainable .NET applications depend on engineering discipline."
              body="The language provides many powerful features. Good software engineering is about selecting the right features and organizing them around clear responsibilities."
            />

            <div className="two-column">
              <div>
                <p>
                  Large C# applications can become difficult
                  to maintain when dependencies are tightly
                  coupled, classes take on too many
                  responsibilities, errors are handled
                  inconsistently, or data-access logic becomes
                  mixed with unrelated application behaviour.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Clear architecture, testing, dependency
                  management, configuration, logging, and
                  documentation help keep the system easier
                  to understand and evolve.
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
            APPLICATION AREAS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="WHERE C# & .NET ARE USED"
              title="C# supports everything from desktop applications to cloud-based services."
              body="Its ecosystem allows C# to be used across several software environments, particularly where structured application architecture and long-term maintainability matter."
            />

            <div className="feature-list">
              {applicationAreas.map(
                (application, index) => (
                  <article
                    className="feature-item"
                    key={application.title}
                  >
                    <div className="feature-icon">
                      {index % 2 === 0 ? (
                        <Globe2
                          size={24}
                          aria-hidden="true"
                        />
                      ) : (
                        <Layers3
                          size={24}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div>
                      <h3>
                        {application.title}
                      </h3>

                      <p>
                        {application.text}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT TYPES
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="C# PROJECTS"
              title="From introductory programming to complete .NET applications."
              body="C# appears in many different academic and technical contexts, from object-oriented programming exercises to APIs, database systems, desktop applications, and software engineering projects."
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
                        <Code2
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
            PROJECT WORKFLOW
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="C# PROJECT WORKFLOW"
              title="A structured process from requirements to tested .NET software."
              body="A disciplined workflow helps separate requirements, architecture, implementation, integration, testing, and review."
            />

            <div className="phase-grid">
              <article className="phase-card">
                <span className="phase-number">
                  01
                </span>

                <h3>
                  Define the requirements
                </h3>

                <p>
                  Clarify the expected functionality,
                  users, inputs, outputs, constraints,
                  integrations, and project objectives.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  02
                </span>

                <h3>
                  Design the application
                </h3>

                <p>
                  Determine classes, interfaces, application
                  layers, data models, APIs, dependencies,
                  and architectural responsibilities.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  03
                </span>

                <h3>
                  Implement the components
                </h3>

                <p>
                  Build the required functionality using
                  suitable C# language features and .NET
                  libraries or frameworks.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  04
                </span>

                <h3>
                  Integrate data & services
                </h3>

                <p>
                  Connect APIs, databases, configuration,
                  persistence layers, external services,
                  and supporting infrastructure.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  05
                </span>

                <h3>
                  Test and debug
                </h3>

                <p>
                  Use tests, logging, breakpoints, exceptions,
                  diagnostics, and reproducible cases to
                  identify and correct problems.
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
                  Evaluate maintainability, security,
                  performance, architecture, reliability,
                  testing, and documentation.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED TECHNOLOGIES
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
                  related technologies.
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
                      Return to the programming hub and
                      explore Python, C, C++, Java,
                      JavaScript, and other languages.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/technologies/programming-languages-development/java"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      Java
                    </strong>

                    <small>
                      Explore Java, OOP, collections,
                      JVM concepts, concurrency, APIs,
                      Spring, and backend development.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/technologies/programming-languages-development/javascript"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      JavaScript
                    </strong>

                    <small>
                      Explore frontend development,
                      async JavaScript, APIs, Node.js,
                      React, testing, and web security.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/technologies/programming-languages-development/cpp"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      C++
                    </strong>

                    <small>
                      Explore object-oriented programming,
                      STL, templates, memory, algorithms,
                      and systems development.
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
              title="C# programming and .NET project guidance."
              body="Common questions about C#, object-oriented programming, LINQ, async programming, ASP.NET Core, databases, debugging, testing, and application development."
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
            csharpSchema,
          ),
        }}
      />
    </>
  )
}