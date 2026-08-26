import {
    ArrowRight,
    CheckCircle2,
    Code2,
    Cpu,
    FileCode2,
    GitBranch,
    Layers3,
    Network,
    SearchCheck,
    TerminalSquare
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
    'C++ Programming Guide & Project Support | ProjectAssignments',

  description:
    'Explore C++ programming fundamentals, OOP, STL, templates, pointers, memory management, algorithms, debugging, multithreading, file handling, and software engineering projects.',

  keywords: [
    'C++ programming',
    'C++ programming guide',
    'C++ programming project support',
    'C++ programming assignment help',
    'C++ academic support',
    'C++ project guidance',
    'C++ OOP',
    'C++ object oriented programming',
    'C++ STL',
    'C++ templates',
    'C++ data structures',
    'C++ algorithms',
    'C++ pointers',
    'C++ memory management',
    'C++ debugging',
    'C++ multithreading',
    'C++ file handling',
    'C++ systems programming',
    'C++ software development',
    'C++ programming coursework',
  ],

  alternates: {
    canonical:
      'https://projectassignments.com/technologies/programming-languages-development/cpp',
  },

  openGraph: {
    title:
      'C++ Programming Guide & Project Support | ProjectAssignments',

    description:
      'A practical C++ programming guide covering fundamentals, OOP, STL, templates, pointers, memory, algorithms, debugging, multithreading, and software development.',

    url:
      'https://projectassignments.com/technologies/programming-languages-development/cpp',

    siteName: 'ProjectAssignments',

    type: 'article',
  },
}

/* =========================================================
   PAGE URL
   ========================================================= */

const pageUrl =
  'https://projectassignments.com/technologies/programming-languages-development/cpp'

/* =========================================================
   CORE C++ TOPICS
   ========================================================= */

const coreTopics = [
  {
    icon: Code2,
    title: 'C++ Fundamentals',
    text:
      'Understand variables, types, expressions, control flow, functions, namespaces, references, classes, and the language constructs used to build C++ software.',
  },
  {
    icon: Layers3,
    title: 'Object-Oriented Programming',
    text:
      'Explore classes, objects, inheritance, encapsulation, polymorphism, abstract interfaces, constructors, destructors, and composition.',
  },
  {
    icon: GitBranch,
    title: 'STL & Generic Programming',
    text:
      'Work with the Standard Template Library, including containers, iterators, algorithms, function objects, and generic programming concepts.',
  },
  {
    icon: Cpu,
    title: 'Memory & Resource Management',
    text:
      'Understand pointers, references, dynamic allocation, object lifetime, ownership, RAII, smart pointers, and resource-safe programming.',
  },
  {
    icon: SearchCheck,
    title: 'Algorithms & Data Structures',
    text:
      'Implement and analyse searching, sorting, trees, graphs, stacks, queues, hashing, recursion, and complexity-sensitive solutions.',
  },
  {
    icon: TerminalSquare,
    title: 'Systems & Performance',
    text:
      'Explore low-level programming, compilation, process interaction, concurrency, performance considerations, and software close to the operating system.',
  },
]

/* =========================================================
   C++ CONCEPTS
   ========================================================= */

const cppConcepts = [
  {
    number: '01',
    title: 'Types, Variables & References',
    body:
      'C++ provides a rich type system and supports values, pointers, references, user-defined types, enumerations, and other mechanisms for expressing how data is represented and manipulated.',
  },
  {
    number: '02',
    title: 'Functions & Overloading',
    body:
      'Functions provide reusable units of behaviour while overloading allows multiple functions or operators to support related operations with different types or parameters.',
  },
  {
    number: '03',
    title: 'Classes & Objects',
    body:
      'Classes allow state and behaviour to be grouped into reusable abstractions. Constructors, destructors, methods, access control, and object lifetime are central to C++ design.',
  },
  {
    number: '04',
    title: 'Inheritance & Polymorphism',
    body:
      'Inheritance and polymorphism support extensible class hierarchies, interfaces, and substitution-based designs, although composition is often an important alternative.',
  },
  {
    number: '05',
    title: 'Templates & Generic Programming',
    body:
      'Templates allow algorithms and data structures to operate over types without duplicating implementation logic, forming one of the major strengths of C++.',
  },
  {
    number: '06',
    title: 'Resource Acquisition & Lifetime',
    body:
      'Understanding object lifetime and resource ownership is fundamental to writing reliable C++ code. RAII, deterministic destruction, and ownership models help control resources safely.',
  },
]

/* =========================================================
   STL
   ========================================================= */

const stlAreas = [
  'std::vector',
  'std::array',
  'std::list',
  'std::deque',
  'std::stack',
  'std::queue',
  'std::set and std::map',
  'std::unordered_map and hashing',
  'Iterators',
  'Standard algorithms',
  'Lambda expressions',
  'Function objects',
]

/* =========================================================
   MEMORY & RESOURCE MANAGEMENT
   ========================================================= */

const memoryAreas = [
  'Pointers and pointer arithmetic',
  'References',
  'Dynamic allocation',
  'Object lifetime',
  'Stack and heap concepts',
  'RAII and deterministic cleanup',
  'std::unique_ptr',
  'std::shared_ptr',
  'std::weak_ptr',
  'Move semantics',
  'Copy semantics',
  'Resource ownership',
]

/* =========================================================
   DEVELOPMENT TOOLCHAIN
   ========================================================= */

const toolchain = [
  {
    title: 'Compilers',
    items: [
      'GCC',
      'Clang',
      'Compiler warnings',
      'Optimization levels',
    ],
  },
  {
    title: 'Build Systems',
    items: [
      'CMake',
      'Make',
      'Build configuration',
      'Project organization',
    ],
  },
  {
    title: 'Debugging',
    items: [
      'GDB',
      'LLDB',
      'Breakpoints',
      'Stack and variable inspection',
    ],
  },
  {
    title: 'Memory & Runtime Analysis',
    items: [
      'AddressSanitizer',
      'UndefinedBehaviorSanitizer',
      'Valgrind',
      'Leak investigation',
    ],
  },
  {
    title: 'Development Environments',
    items: [
      'Linux',
      'Windows',
      'VS Code',
      'Command-line toolchains',
    ],
  },
]

/* =========================================================
   C++ APPLICATION AREAS
   ========================================================= */

const applicationAreas = [
  {
    title: 'Systems Software',
    text:
      'C++ is used where performance, control over resources, and close interaction with the operating system or hardware are important.',
  },
  {
    title: 'Game Development',
    text:
      'C++ is widely associated with game engines and performance-sensitive graphics and gameplay systems where real-time execution matters.',
  },
  {
    title: 'High-Performance Applications',
    text:
      'Applications involving computationally intensive workloads can benefit from C++ and its ability to provide detailed control over memory and execution.',
  },
  {
    title: 'Embedded & Edge Systems',
    text:
      'C++ can be used in resource-constrained and embedded environments where deterministic behaviour and efficient execution are important.',
  },
  {
    title: 'Desktop & Enterprise Software',
    text:
      'C++ remains relevant for native desktop applications, engineering software, infrastructure components, and specialized enterprise systems.',
  },
  {
    title: 'Scientific & Research Computing',
    text:
      'Scientific and technical projects can use C++ for simulations, numerical workloads, performance-sensitive prototypes, and computational research.',
  },
]

/* =========================================================
   C++ PROJECT TYPES
   ========================================================= */

const projectTypes = [
  {
    title: 'C++ Programming Assignments',
    body:
      'Work through syntax, functions, classes, references, arrays, pointers, file handling, object-oriented programming, and algorithmic problems commonly found in coursework.',
  },
  {
    title: 'Object-Oriented Programming Projects',
    body:
      'Design class hierarchies, model entities, apply encapsulation, understand polymorphism, and compare inheritance with composition.',
  },
  {
    title: 'Data Structures & Algorithms',
    body:
      'Implement vectors, linked lists, stacks, queues, trees, graphs, hashing, searching, sorting, recursion, and complexity-aware algorithms.',
  },
  {
    title: 'Systems Programming',
    body:
      'Explore lower-level software concepts, process interaction, memory, resources, concurrency, command-line applications, and operating-system-oriented development.',
  },
  {
    title: 'Game & Graphics Programming',
    body:
      'Study performance-sensitive application logic, object systems, rendering concepts, event handling, and architecture relevant to game and graphical software.',
  },
  {
    title: 'Research & High-Performance Computing',
    body:
      'Use C++ for simulation, numerical computation, technical prototypes, optimisation experiments, and research projects where performance is significant.',
  },
  {
    title: 'Embedded & Hardware-Oriented Projects',
    body:
      'Explore C++ in resource-constrained environments and systems where efficient execution, deterministic behaviour, and hardware interaction matter.',
  },
  {
    title: 'Secure Software Development',
    body:
      'Study resource safety, input validation, memory-safety concerns, defensive programming, secure coding practices, and vulnerability analysis in controlled environments.',
  },
]

/* =========================================================
   MODERN C++ PRACTICES
   ========================================================= */

const practices = [
  'Prefer clear ownership and lifetime semantics',
  'Use RAII for resource management',
  'Use smart pointers where ownership requires them',
  'Prefer standard library containers over unnecessary manual structures',
  'Use const-correctness where appropriate',
  'Handle errors explicitly and consistently',
  'Use compiler warnings during development',
  'Test edge cases and failure paths',
  'Use sanitizers and debugging tools for difficult runtime issues',
  'Document architectural and ownership decisions',
  'Use version control and reproducible build configurations',
]

/* =========================================================
   FAQ
   ========================================================= */

const faqs = [
  {
    question:
      'Can you provide C++ programming assignment guidance?',
    answer:
      'Yes. We provide technical and educational guidance across C++ fundamentals, object-oriented programming, STL, templates, pointers, memory management, data structures, algorithms, debugging, file handling, and systems-oriented development.',
  },
  {
    question:
      'Can you help with C++ object-oriented programming?',
    answer:
      'Yes. Guidance can cover classes, constructors, destructors, encapsulation, inheritance, polymorphism, abstract interfaces, composition, virtual functions, and practical object-oriented design.',
  },
  {
    question:
      'Can you explain the C++ Standard Template Library?',
    answer:
      'Yes. We can help explain STL containers, iterators, algorithms, maps, sets, vectors, queues, stacks, lambdas, and the principles behind using generic library components effectively.',
  },
  {
    question:
      'Can you help with pointers, references, and C++ memory management?',
    answer:
      'Yes. Support can cover pointer and reference semantics, dynamic allocation, object lifetime, RAII, smart pointers, ownership, copy and move behaviour, and common memory-related problems.',
  },
  {
    question:
      'Can you help debug segmentation faults and runtime errors in C++?',
    answer:
      'Yes. We can help analyse compiler diagnostics, runtime failures, invalid memory access, incorrect object lifetime, undefined behaviour, logic errors, and difficult execution paths using systematic debugging techniques.',
  },
  {
    question:
      'Is C++ suitable for data structures and algorithm projects?',
    answer:
      'Yes. C++ is commonly used for algorithm and data-structure work because it provides both low-level control and a rich standard library for representing and manipulating data efficiently.',
  },
  {
    question:
      'Can C++ be used for cybersecurity or secure-development projects?',
    answer:
      'Yes. C++ can be relevant to secure software development, systems security, performance-sensitive security tooling, memory-safety analysis, and controlled cybersecurity research environments.',
  },
]

/* =========================================================
   STRUCTURED DATA
   ========================================================= */

const cppSchema = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'TechArticle',

      '@id': `${pageUrl}#article`,

      headline:
        'C++ Programming Guide & Project Support',

      description:
        'A practical C++ programming guide covering fundamentals, object-oriented programming, STL, templates, pointers, memory management, algorithms, debugging, systems programming, and software projects.',

      mainEntityOfPage: {
        '@id': `${pageUrl}#webpage`,
      },

      about: {
        '@type': 'ComputerLanguage',
        name: 'C++',
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
        'C++ Programming Guide & Project Support | ProjectAssignments',

      description:
        'Explore C++ programming concepts, object-oriented development, STL, templates, memory management, algorithms, debugging, systems programming, and technical projects.',

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
          name: 'C++ Programming',
          item: pageUrl,
        },
      ],
    },

    {
      '@type': 'ItemList',

      '@id': `${pageUrl}#core-topics`,

      name: 'C++ Programming Topics',

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

export default function CPPProgrammingPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="PROGRAMMING LANGUAGES • C++"
          title="C++ Programming: OOP, STL, Algorithms, Memory & Systems Development"
          body="Explore C++ programming from language fundamentals and object-oriented design to STL, templates, memory management, algorithms, debugging, concurrency, systems programming, and performance-sensitive software."
        />

        {/* =====================================================
            INTRODUCTION
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="C++ PROGRAMMING"
                  title="A language that combines abstraction with low-level control."
                  body="C++ occupies an unusual position in software engineering. It supports high-level abstractions such as classes, templates, containers, and generic algorithms while still giving developers detailed control over memory, object lifetime, resources, and execution."
                />
              </div>

              <div>
                <p>
                  That combination makes C++ useful across a
                  remarkably broad range of projects. It appears
                  in systems software, game engines, scientific
                  computing, graphics applications, embedded
                  environments, infrastructure components, and
                  performance-sensitive applications.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  It also makes C++ a demanding language to
                  learn. A programmer must understand not only
                  syntax and object-oriented programming, but
                  also lifetime, ownership, references,
                  templates, compilation, and the consequences
                  of different implementation choices.
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
              eyebrow="CORE C++ TOPICS"
              title="The concepts that make C++ such a powerful language."
              body="Strong C++ development depends on understanding how the language's abstraction mechanisms interact with memory, resources, algorithms, and the underlying execution environment."
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
            FUNDAMENTAL CONCEPTS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="C++ LANGUAGE CONCEPTS"
              title="From functions and classes to templates and object lifetime."
              body="C++ contains several layers of abstraction. Understanding how those layers fit together is more valuable than memorising individual syntax rules."
            />

            <div className="approach-grid">
              {cppConcepts.map((concept) => (
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
            OBJECT ORIENTED PROGRAMMING
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="OBJECT-ORIENTED PROGRAMMING"
                  title="C++ gives developers several ways to model complex systems."
                  body="Object-oriented programming is one of the best-known parts of C++, but effective C++ design goes beyond simply creating classes."
                />
              </div>

              <div>
                <p>
                  A useful C++ object model considers
                  responsibilities, ownership, relationships,
                  interfaces, construction, destruction, and
                  extensibility. Classes can encapsulate state
                  and behaviour, while inheritance and
                  polymorphism can support interchangeable
                  implementations.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Composition is equally important. Instead
                  of building every system as a deep inheritance
                  hierarchy, components can often be assembled
                  through well-defined interfaces and
                  ownership relationships.
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
                    Constructors and destructors
                  </li>
                  <li>
                    Encapsulation
                  </li>
                  <li>
                    Inheritance
                  </li>
                  <li>
                    Virtual functions and polymorphism
                  </li>
                  <li>
                    Interfaces and abstraction
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
            STL
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="STANDARD TEMPLATE LIBRARY"
              title="C++ becomes significantly more productive when you understand the STL."
              body="The Standard Template Library provides reusable containers and algorithms that allow programmers to solve common problems without repeatedly implementing basic structures from scratch."
            />

            <div className="two-column">
              <div>
                <p>
                  STL knowledge is particularly important in
                  academic programming because it connects
                  data structures with generic algorithms.
                  Instead of thinking about every problem as a
                  custom implementation, developers can select
                  an appropriate standard container and pair it
                  with suitable algorithms.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Understanding why a particular container is
                  appropriate is just as important as knowing
                  its syntax. Memory characteristics,
                  insertion and lookup behaviour, ordering,
                  ownership, and algorithmic complexity all
                  influence the choice.
                </p>
              </div>

              <div className="framework-list">
                {stlAreas.map((item) => (
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
            MEMORY MANAGEMENT
           ===================================================== */}

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="MEMORY & RESOURCE MANAGEMENT"
              title="Understanding ownership and lifetime is central to good C++."
              body="C++ provides powerful control over resources, but that control creates responsibilities. Correct lifetime and ownership decisions are essential for reliable software."
            />

            <div className="two-column">
              <div>
                <p>
                  Pointers and references allow code to work
                  with existing objects without necessarily
                  copying them. Dynamic allocation allows
                  objects and buffers to exist beyond a local
                  scope. These mechanisms are useful, but they
                  also require clear rules about who owns a
                  resource and when it should be released.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Modern C++ development often emphasizes
                  deterministic cleanup and explicit ownership.
                  RAII, smart pointers, move semantics, and
                  standard-library containers can reduce the
                  amount of manual resource management required
                  while making ownership easier to reason about.
                </p>
              </div>

              <div className="framework-list">
                {memoryAreas.map((item) => (
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
            ALGORITHMS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="ALGORITHMS & DATA STRUCTURES"
                  title="C++ is particularly well suited to algorithmic problem solving."
                  body="The language combines detailed control with powerful standard-library abstractions, making it a common choice for data-structure and algorithm-heavy work."
                />
              </div>

              <div>
                <p>
                  Academic projects can use C++ to explore
                  both the implementation and performance of
                  algorithms. A useful analysis considers
                  correctness, memory requirements, runtime
                  complexity, input characteristics, and the
                  trade-offs created by different data
                  structures.
                </p>

                <ul
                  style={{
                    marginTop: '18px',
                  }}
                >
                  <li>
                    Searching and sorting
                  </li>
                  <li>
                    Recursion and divide-and-conquer
                  </li>
                  <li>
                    Linked structures
                  </li>
                  <li>
                    Trees and tree traversal
                  </li>
                  <li>
                    Graph representations and algorithms
                  </li>
                  <li>
                    Hash-based structures
                  </li>
                  <li>
                    Dynamic programming
                  </li>
                  <li>
                    Complexity and performance analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TOOLCHAIN
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="C++ TOOLCHAIN"
              title="Compiler, build, debugging, and runtime-analysis tools."
              body="C++ development involves a complete toolchain. Understanding how the compiler and debugging environment work is essential when projects become more complex."
            />

            <div className="card-grid tool-grid">
              {toolchain.map((tool) => (
                <article
                  className="info-card"
                  key={tool.title}
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
                    {tool.title}
                  </h3>

                  <ul>
                    {tool.items.map((item) => (
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
            APPLICATION AREAS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="WHERE C++ IS USED"
              title="The language supports very different kinds of software."
              body="C++ is not tied to one application domain. Its combination of abstraction, performance, and resource control makes it suitable for several technically demanding environments."
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
                        <Cpu
                          size={24}
                          aria-hidden="true"
                        />
                      ) : (
                        <Network
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
            MODERN PRACTICES
           ===================================================== */}

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="C++ DEVELOPMENT PRACTICES"
              title="Modern C++ is about managing complexity as much as writing fast code."
              body="Performance matters, but maintainability, safety, ownership, testability, and understandable design are equally important in serious C++ projects."
            />

            <div className="two-column">
              <div>
                <p>
                  Older C++ code can contain large amounts of
                  manual resource management, unclear ownership,
                  unnecessary copies, and tightly coupled
                  components. Modern development techniques
                  aim to make these relationships clearer.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  The result should be code that is not only
                  efficient, but also easier to test, debug,
                  maintain, explain, and safely extend.
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
            PROJECT TYPES
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="C++ PROJECTS"
              title="From programming coursework to systems and research projects."
              body="C++ can support projects ranging from introductory programming exercises to advanced technical systems. The appropriate level of complexity depends on the project requirements and learning objectives."
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
            WORKFLOW
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="C++ PROJECT WORKFLOW"
              title="A disciplined process from design to tested implementation."
              body="Complex C++ projects become more manageable when requirements, data, ownership, implementation, compilation, testing, and debugging are treated as connected stages."
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
                  Identify inputs, outputs, constraints,
                  interfaces, assumptions, performance goals,
                  and expected system behaviour.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  02
                </span>

                <h3>
                  Design the data and objects
                </h3>

                <p>
                  Determine appropriate data structures,
                  classes, relationships, interfaces,
                  ownership models, and responsibilities.
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
                  Build the components using suitable
                  language features, STL facilities,
                  algorithms, and resource-management
                  techniques.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  04
                </span>

                <h3>
                  Compile and validate
                </h3>

                <p>
                  Use compiler diagnostics, warnings,
                  test cases, and boundary conditions to
                  identify defects early.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  05
                </span>

                <h3>
                  Debug runtime behaviour
                </h3>

                <p>
                  Investigate crashes, incorrect state,
                  invalid memory access, unexpected output,
                  and performance issues using systematic
                  debugging.
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
                  Evaluate ownership, readability,
                  maintainability, performance, testing
                  coverage, security, and documentation.
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
                      explore Python, C, Java, JavaScript,
                      and other languages.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/technologies/programming-languages-development/c"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      C Programming
                    </strong>

                    <small>
                      Explore pointers, memory management,
                      data structures, debugging, and
                      systems programming.
                    </small>
                  </span>

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/technologies/programming-languages-development/python"
                  className="internal-link"
                >
                  <span>
                    <strong>
                      Python
                    </strong>

                    <small>
                      Explore Python for software,
                      automation, cybersecurity, data,
                      APIs, and research.
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
                      Explore x86-64 assembly, registers,
                      memory addressing, system calls,
                      and low-level programming.
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
              title="C++ programming and project guidance."
              body="Common questions about C++ programming, object-oriented design, STL, memory management, algorithms, debugging, systems programming, and secure development."
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
            cppSchema,
          ),
        }}
      />
    </>
  )
}