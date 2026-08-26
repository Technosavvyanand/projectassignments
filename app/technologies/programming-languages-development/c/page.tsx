import {
    ArrowRight,
    Bug,
    CheckCircle2,
    Code2,
    Cpu,
    FileCode2,
    GitBranch,
    HardDrive,
    Layers3,
    SearchCheck,
    ShieldCheck,
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
    'C Programming Guide & Project Support | ProjectAssignments',

  description:
    'Explore C programming fundamentals, pointers, memory management, arrays, structures, functions, file handling, data structures, compilation, debugging, systems programming, and secure C development.',

  keywords: [
    'C programming',
    'C programming guide',
    'C programming project support',
    'C programming assignment help',
    'C programming academic support',
    'C programming project guidance',
    'C programming pointers',
    'C memory management',
    'C arrays and structures',
    'C data structures',
    'C debugging',
    'C programming file handling',
    'C programming algorithms',
    'C systems programming',
    'C programming compiler',
    'C programming cybersecurity',
    'secure C programming',
    'C software development',
    'C programming coursework',
  ],

  alternates: {
    canonical:
      'https://projectassignments.com/technologies/programming-languages-development/c',
  },

  openGraph: {
    title:
      'C Programming Guide & Project Support | ProjectAssignments',

    description:
      'A practical C programming guide covering fundamentals, pointers, memory management, data structures, file handling, debugging, systems programming, and secure development.',

    url:
      'https://projectassignments.com/technologies/programming-languages-development/c',

    siteName: 'ProjectAssignments',

    type: 'article',
  },
}

/* =========================================================
   PAGE URL
   ========================================================= */

const pageUrl =
  'https://projectassignments.com/technologies/programming-languages-development/c'

/* =========================================================
   CORE C TOPICS
   ========================================================= */

const coreTopics = [
  {
    icon: Code2,
    title: 'C Programming Fundamentals',
    text:
      'Understand variables, data types, operators, expressions, conditional statements, loops, functions, arrays, and the language structures used to build C programs.',
  },
  {
    icon: Cpu,
    title: 'Pointers & Memory',
    text:
      'Work with addresses, pointers, pointer arithmetic, dynamic memory, stack and heap concepts, and the relationship between memory and program behaviour.',
  },
  {
    icon: Layers3,
    title: 'Structures & Data Modelling',
    text:
      'Use structures, enumerations, unions, typedefs, arrays, and related constructs to represent more complex information within C applications.',
  },
  {
    icon: TerminalSquare,
    title: 'Systems Programming',
    text:
      'Explore C in operating-system concepts, command-line utilities, low-level programming, resource management, and environments where direct system interaction matters.',
  },
  {
    icon: Bug,
    title: 'Debugging & Program Analysis',
    text:
      'Develop systematic approaches to compiler errors, runtime faults, segmentation faults, logic errors, memory problems, and unexpected application behaviour.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure C Development',
    text:
      'Understand common sources of memory-safety problems, input-handling risks, unsafe library usage, defensive programming, and secure implementation practices.',
  },
]

/* =========================================================
   C DEVELOPMENT CONCEPTS
   ========================================================= */

const concepts = [
  {
    number: '01',
    title: 'Variables, Types & Expressions',
    body:
      'C provides explicit control over data representation through integer, floating-point, character, pointer, enumeration, structure, and related data types. Understanding types is essential for reasoning about memory, conversions, and program behaviour.',
  },
  {
    number: '02',
    title: 'Functions & Modular Design',
    body:
      'Functions help separate responsibilities and make larger programs easier to understand, test, and maintain. Good function design also clarifies parameters, return values, scope, and dependencies.',
  },
  {
    number: '03',
    title: 'Pointers & Addresses',
    body:
      'Pointers are one of the defining features of C. They allow programs to work directly with memory addresses, support dynamic data structures, and enable techniques such as passing data by reference.',
  },
  {
    number: '04',
    title: 'Arrays & Strings',
    body:
      'Arrays provide contiguous collections of elements while C strings are commonly represented using character arrays terminated by a null character. Both require careful reasoning about boundaries and memory.',
  },
  {
    number: '05',
    title: 'Structures & User-Defined Types',
    body:
      'Structures allow related values of different types to be grouped together, making them useful for records, configuration objects, linked structures, and larger data models.',
  },
  {
    number: '06',
    title: 'Dynamic Memory Management',
    body:
      'Functions such as malloc, calloc, realloc, and free provide dynamic memory management. Correct ownership, allocation, resizing, and deallocation are central to reliable C programming.',
  },
]

/* =========================================================
   MEMORY & POINTER AREAS
   ========================================================= */

const memoryAreas = [
  'Address and pointer concepts',
  'Pointer dereferencing',
  'Pointer arithmetic',
  'Arrays and pointer relationships',
  'Stack and heap concepts',
  'Dynamic allocation with malloc and calloc',
  'Memory resizing with realloc',
  'Memory release with free',
  'Null pointers and defensive checks',
  'Dangling pointers and lifetime management',
]

/* =========================================================
   DATA STRUCTURES
   ========================================================= */

const dataStructures = [
  {
    title: 'Arrays',
    text:
      'Fixed-size contiguous collections used for sequential storage and algorithmic operations.',
  },
  {
    title: 'Linked Lists',
    text:
      'Node-based structures that use pointers to connect dynamically allocated elements.',
  },
  {
    title: 'Stacks',
    text:
      'Last-in, first-out structures commonly used for expression processing, recursion, and controlled state management.',
  },
  {
    title: 'Queues',
    text:
      'First-in, first-out structures useful for scheduling, buffering, and breadth-oriented processing.',
  },
  {
    title: 'Trees',
    text:
      'Hierarchical structures that support recursive organisation, searching, traversal, and specialized algorithms.',
  },
  {
    title: 'Hash Tables',
    text:
      'Structures that can provide efficient key-based access when an appropriate hashing strategy is used.',
  },
]

/* =========================================================
   TOOLS & ENVIRONMENT
   ========================================================= */

const toolchain = [
  {
    title: 'Compilers',
    items: [
      'GCC',
      'Clang',
      'Compiler warnings',
      'Optimization options',
    ],
  },
  {
    title: 'Build Tools',
    items: [
      'Make',
      'CMake',
      'Build configuration',
      'Dependency management',
    ],
  },
  {
    title: 'Debugging',
    items: [
      'GDB',
      'Breakpoint analysis',
      'Stack inspection',
      'Runtime diagnosis',
    ],
  },
  {
    title: 'Memory Analysis',
    items: [
      'Valgrind',
      'AddressSanitizer',
      'UndefinedBehaviorSanitizer',
      'Leak analysis',
    ],
  },
  {
    title: 'Development Environments',
    items: [
      'Linux',
      'Windows',
      'VS Code',
      'Command-line environments',
    ],
  },
]

/* =========================================================
   C PROJECT TYPES
   ========================================================= */

const projectTypes = [
  {
    title: 'C Programming Assignments',
    body:
      'Work through syntax, functions, loops, arrays, pointers, structures, file handling, and algorithmic problems required by introductory and intermediate programming coursework.',
  },
  {
    title: 'Data Structures & Algorithms',
    body:
      'Implement and reason about arrays, linked lists, stacks, queues, trees, searching, sorting, recursion, and algorithmic complexity using C.',
  },
  {
    title: 'Systems Programming',
    body:
      'Explore operating-system concepts, command-line programs, process-oriented development, resource management, files, and lower-level interactions with the computing environment.',
  },
  {
    title: 'Embedded & Low-Level Projects',
    body:
      'Understand why C remains important in environments where memory usage, performance, deterministic behaviour, and direct hardware interaction matter.',
  },
  {
    title: 'Cybersecurity & Secure Coding',
    body:
      'Study memory safety, unsafe input handling, defensive programming, vulnerability causes, and secure coding techniques in controlled academic and laboratory settings.',
  },
  {
    title: 'Research & Technical Prototypes',
    body:
      'Use C to build performance-sensitive prototypes, algorithmic experiments, simulations, and technical systems where lower-level control is part of the research question.',
  },
]

/* =========================================================
   DEVELOPMENT PRACTICES
   ========================================================= */

const practices = [
  'Compile with useful warning levels enabled',
  'Use clear function and variable boundaries',
  'Validate input before processing',
  'Check pointers before dereferencing',
  'Track memory ownership carefully',
  'Release dynamically allocated memory appropriately',
  'Use debugging tools to investigate runtime behaviour',
  'Test boundary and failure conditions',
  'Document assumptions and implementation decisions',
  'Use version control and reproducible build practices',
]

/* =========================================================
   FAQ
   ========================================================= */

const faqs = [
  {
    question:
      'Can you provide C programming assignment guidance?',
    answer:
      'Yes. We provide technical and educational guidance across C fundamentals, functions, arrays, pointers, structures, file handling, data structures, debugging, memory management, and systems-oriented programming.',
  },
  {
    question:
      'Can you help explain pointers and memory management in C?',
    answer:
      'Yes. Pointer and memory concepts are often among the most difficult parts of learning C. We can help explain addresses, dereferencing, pointer arithmetic, stack and heap concepts, dynamic allocation, memory ownership, and common memory-management errors.',
  },
  {
    question:
      'Can you help debug a C program with a segmentation fault?',
    answer:
      'Yes. We can help trace likely causes such as invalid memory access, incorrect pointer use, out-of-bounds access, lifetime issues, or other runtime problems and explain a systematic debugging process.',
  },
  {
    question:
      'Do you support C data structures and algorithms?',
    answer:
      'Yes. Support can cover arrays, linked lists, stacks, queues, trees, hash tables, recursion, searching, sorting, traversal, complexity analysis, and implementation decisions.',
  },
  {
    question:
      'Can C be used for cybersecurity projects?',
    answer:
      'Yes. C is highly relevant to cybersecurity because many operating-system components and security-sensitive applications involve low-level programming concepts. Academic work can include secure coding, memory-safety analysis, controlled vulnerability studies, and systems-level security research.',
  },
  {
    question:
      'Can you help with GCC, GDB, Valgrind, or CMake?',
    answer:
      'Yes. Guidance can cover compiling C projects, interpreting compiler warnings, debugging with GDB, investigating memory problems with tools such as Valgrind and sanitizers, and managing builds using Make or CMake.',
  },
]

/* =========================================================
   STRUCTURED DATA
   ========================================================= */

const cProgrammingSchema = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'TechArticle',

      '@id': `${pageUrl}#article`,

      headline:
        'C Programming Guide & Project Support',

      description:
        'A practical C programming guide covering fundamentals, pointers, memory management, arrays, structures, data structures, debugging, compilation, systems programming, and secure development.',

      mainEntityOfPage: {
        '@id': `${pageUrl}#webpage`,
      },

      about: {
        '@type': 'ComputerLanguage',
        name: 'C',
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
        'C Programming Guide & Project Support | ProjectAssignments',

      description:
        'Explore C programming fundamentals, pointers, memory management, data structures, debugging, systems programming, and secure development.',

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
          name: 'C Programming',
          item: pageUrl,
        },
      ],
    },

    {
      '@type': 'ItemList',

      '@id': `${pageUrl}#core-topics`,

      name: 'C Programming Topics',

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

export default function CProgrammingPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="PROGRAMMING LANGUAGES • C"
          title="C Programming: Fundamentals, Memory, Data Structures & Systems"
          body="Explore C programming from fundamental syntax and functions to pointers, dynamic memory, data structures, debugging, compilation, systems programming, and secure development."
        />

        {/* =====================================================
            INTRODUCTION
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="C PROGRAMMING"
                  title="A foundational language for understanding how software works closer to the machine."
                  body="C is particularly valuable for learning what happens underneath higher-level application code. Its explicit treatment of memory, pointers, data representation, compilation, and system interaction makes it an important language for computer science and systems-oriented study."
                />
              </div>

              <div>
                <p>
                  C programming can initially feel less
                  forgiving than languages that manage
                  memory automatically. Small mistakes in
                  pointer usage, array boundaries,
                  initialization, or memory lifetime can
                  produce difficult runtime behaviour.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  That difficulty is also what makes C
                  valuable academically. Learning C can
                  develop a stronger understanding of
                  memory, execution, data structures,
                  compilation, debugging, and the
                  relationship between software and the
                  underlying computing environment.
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
              eyebrow="CORE C TOPICS"
              title="The areas that form the foundation of practical C programming."
              body="A strong understanding of C develops progressively. Fundamentals lead into functions and data structures, which then connect naturally to pointers, memory management, debugging, and systems programming."
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
            LANGUAGE FUNDAMENTALS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="C DEVELOPMENT CONCEPTS"
              title="Understand the language one concept at a time."
              body="C becomes easier to reason about when its major concepts are connected rather than learned as isolated syntax rules."
            />

            <div className="approach-grid">
              {concepts.map((concept) => (
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
            POINTERS & MEMORY
           ===================================================== */}

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="POINTERS & MEMORY MANAGEMENT"
              title="One of the most important—and most misunderstood—parts of C."
              body="Pointers give C programmers direct access to memory addresses. Understanding them properly is essential for dynamic data structures, systems programming, efficient data handling, and debugging memory-related problems."
            />

            <div className="two-column">
              <div>
                <p>
                  A pointer stores an address rather than
                  simply storing an ordinary value. Dereferencing
                  a pointer allows a program to access the
                  object at that address, which creates powerful
                  possibilities but also introduces additional
                  responsibility.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Dynamic memory adds another layer. Programs
                  can allocate memory during execution, use it
                  for dynamically sized structures, and then
                  release it when it is no longer required.
                  Incorrect lifetime management can lead to
                  leaks, invalid accesses, or other difficult
                  runtime behaviour.
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
            ARRAYS / STRINGS
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="ARRAYS, STRINGS & STRUCTURES"
                  title="C makes data representation part of the programming problem."
                  body="Working effectively in C requires an understanding of how information is laid out and accessed in memory."
                />
              </div>

              <div>
                <p>
                  Arrays provide contiguous storage for
                  elements of the same type. Strings are
                  commonly represented through character
                  arrays terminated by a null character.
                  Structures provide a way to group values
                  of different types into a single logical
                  record.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  These constructs are especially important
                  because C generally provides less automatic
                  protection from incorrect indexing or
                  invalid memory access than higher-level
                  languages. Boundary awareness and careful
                  data handling are therefore fundamental.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DATA STRUCTURES
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="DATA STRUCTURES & ALGORITHMS"
              title="Using C to understand how data structures actually work."
              body="Implementing data structures manually can provide a deeper understanding of nodes, memory relationships, traversal, insertion, deletion, and algorithmic complexity."
            />

            <div className="feature-list">
              {dataStructures.map(
                (structure, index) => (
                  <article
                    className="feature-item"
                    key={structure.title}
                  >
                    <div className="feature-icon">
                      {index % 2 === 0 ? (
                        <Layers3
                          size={24}
                          aria-hidden="true"
                        />
                      ) : (
                        <GitBranch
                          size={24}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div>
                      <h3>
                        {structure.title}
                      </h3>

                      <p>
                        {structure.text}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>

            <div
              style={{
                marginTop: '30px',
              }}
            >
              <p>
                Algorithmic projects may then build on
                these structures through searching,
                sorting, traversal, recursion, graph
                algorithms, and complexity analysis. The
                objective is not merely to make the code
                run, but to understand why the chosen
                structure and algorithm are appropriate.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMPILATION & DEBUGGING
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="COMPILATION & DEBUGGING"
              title="C development rewards a systematic approach to errors."
              body="Compiler messages and runtime failures are part of normal C development. Learning to interpret them is an important part of becoming comfortable with the language."
            />

            <div className="two-column">
              <div>
                <p>
                  Compilation problems may involve syntax,
                  types, declarations, missing headers,
                  incompatible interfaces, or build
                  configuration. Runtime problems can be
                  more subtle and may appear only for
                  particular inputs or execution paths.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Tools such as GDB and memory-analysis
                  tools can help developers move from
                  guessing about a failure to observing
                  what the program is actually doing.
                </p>
              </div>

              <div className="framework-list">
                <div>
                  <Bug
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    Segmentation-fault investigation
                  </span>
                </div>

                <div>
                  <TerminalSquare
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    Compiler warning analysis
                  </span>
                </div>

                <div>
                  <HardDrive
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    Memory-leak investigation
                  </span>
                </div>

                <div>
                  <SearchCheck
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    Logic and boundary-condition testing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TOOLS
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="C TOOLCHAIN"
              title="Compiler, debugger, build, and analysis tools."
              body="Understanding the surrounding development environment is just as important as understanding the language itself."
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
            SECURE C
           ===================================================== */}

        <section className="page-content section-dark">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="SECURE C DEVELOPMENT"
                  title="C teaches why memory safety and defensive programming matter."
                  body="Because C provides direct memory access and relatively little automatic runtime protection, secure development requires careful attention to boundaries, initialization, allocation, input handling, and object lifetime."
                />
              </div>

              <div>
                <p>
                  Academic secure-C projects can explore
                  the root causes of common memory-safety
                  problems and the programming practices
                  used to prevent them.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  Useful areas of study include safer input
                  handling, boundary validation, correct
                  allocation and deallocation, compiler
                  diagnostics, sanitizers, static analysis,
                  and defensive design.
                </p>

                <div
                  className="framework-list"
                  style={{
                    marginTop: '24px',
                  }}
                >
                  {[
                    'Buffer-boundary awareness',
                    'Initialization and lifetime management',
                    'Pointer validation',
                    'Defensive input handling',
                    'Compiler warnings and sanitizers',
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
            PROJECT TYPES
           ===================================================== */}

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="C PROGRAMMING PROJECTS"
              title="Where C programming meets practical academic and technical work."
              body="C can appear in many different project types. The appropriate depth depends on the course, project objectives, technical environment, and expected learning outcomes."
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
            C DEVELOPMENT WORKFLOW
           ===================================================== */}

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="C PROJECT WORKFLOW"
              title="A disciplined workflow makes low-level programming easier to reason about."
              body="C projects benefit from separating design, implementation, compilation, testing, debugging, and review rather than trying to solve everything at once."
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
                  Identify inputs, outputs, constraints,
                  assumptions, and required behaviour before
                  implementation.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  02
                </span>

                <h3>
                  Design the data
                </h3>

                <p>
                  Determine the appropriate variables,
                  structures, arrays, functions, and data
                  relationships.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  03
                </span>

                <h3>
                  Implement carefully
                </h3>

                <p>
                  Write modular code while paying particular
                  attention to types, pointers, boundaries,
                  ownership, and resource handling.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  04
                </span>

                <h3>
                  Compile & test
                </h3>

                <p>
                  Use compiler diagnostics, test cases, and
                  boundary conditions to identify problems
                  before relying on the program.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  05
                </span>

                <h3>
                  Debug systematically
                </h3>

                <p>
                  Use reproducible cases and debugging tools
                  to trace crashes, incorrect state, memory
                  problems, and unexpected behaviour.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">
                  06
                </span>

                <h3>
                  Review & document
                </h3>

                <p>
                  Evaluate correctness, memory behaviour,
                  maintainability, security, and the reasoning
                  behind the implementation.
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
                      explore Python, C++, Java,
                      JavaScript, and other languages.
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
                      Explore Python programming for
                      software development, automation,
                      data, cybersecurity, and research.
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
                      registers, memory addressing,
                      system calls, and low-level
                      programming.
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
              title="C programming and project guidance."
              body="Common questions about C fundamentals, pointers, memory management, data structures, debugging, systems programming, and secure development."
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
            cProgrammingSchema,
          ),
        }}
      />
    </>
  )
}