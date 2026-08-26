import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Code2,
  Database,
  FileCode2,
  Network,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import {
  CTA,
  Footer,
  PageHero,
  SectionHeading,
} from '@/components/site'

export const metadata: Metadata = {
  title: 'Technologies | Cybersecurity, Programming & Research Support',
  description:
    'Explore the technologies, technical methods, research tools, and analytical frameworks used across programming, databases, networking, cybersecurity, systems analysis, research, data analysis, and technical documentation.',

  keywords: [
    'cybersecurity academic support',
    'programming assignment support',
    'programming languages academic support',
    'Python academic support',
    'C programming academic support',
    'Java academic support',
    'SQL and database support',
    'DBMS academic support',
    'PostgreSQL academic support',
    'Oracle database academic support',
    'networking academic support',
    'Linux academic support',
    'Docker project support',
    'cybersecurity technology support',
    'systems analysis support',
    'research methodology support',
    'data analysis academic support',
    'technical documentation support',
    'IT academic consultancy',
    'technical research support',
  ],

  alternates: {
    canonical:
      'https://projectassignments.com/technologies',
  },

  openGraph: {
    title: 'Technologies | ProjectAssignments',
    description:
      'Explore the technologies, technical methods, and analytical frameworks behind our cybersecurity, programming, databases, infrastructure, research, data analysis, and technical documentation support.',
    url:
      'https://projectassignments.com/technologies',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

/* =========================================================
   TECHNOLOGY HUBS
   ========================================================= */

const technologyHubs = [
  {
    icon: <Code2 size={25} aria-hidden="true" />,
    title: 'Programming Languages & Development',
    description:
      'Explore programming languages, software development concepts, development environments, algorithms, debugging, application development, and the technical practices used to build software systems.',
    topics:
      'Python, Java, C, C++, C#, JavaScript, programming fundamentals, algorithms, debugging, APIs, software development',
    href: '/technologies/programming-languages-development',
    linkLabel: 'Explore Programming Hub',
  },
  {
    icon: <Database size={25} aria-hidden="true" />,
    title: 'DBMS & Database Technologies',
    description:
      'Explore relational and database management technologies used to design, store, query, secure, and manage structured data within modern applications and information systems.',
    topics:
      'PostgreSQL, MySQL, Oracle, SQL Server, SQL, ER modelling, normalization, transactions, indexing, database architecture',
    href: '/technologies/dbms-database-technologies',
    linkLabel: 'Explore DBMS Hub',
  },
  {
    icon: <Network size={25} aria-hidden="true" />,
    title: 'Networking & Infrastructure',
    description:
      'Explore networking technologies, operating systems, infrastructure platforms, communication protocols, containers, cloud environments, and the foundations that connect modern computing systems.',
    topics:
      'TCP/IP, Linux, Docker, networking, infrastructure, cloud platforms, virtualization, system administration',
    href: '/technologies/networking-infrastructure',
    linkLabel: 'Explore Networking Hub',
  },
  {
    icon: <ShieldCheck size={25} aria-hidden="true" />,
    title: 'Cybersecurity & Security Technologies',
    description:
      'Explore technologies and technical approaches used for security testing, network defense, threat analysis, monitoring, vulnerability management, and information security.',
    topics:
      'Kali Linux, Wireshark, Nmap, Burp Suite, Metasploit, Splunk, vulnerability assessment, security frameworks',
    href: '/technologies/cybersecurity-security-technologies',
    linkLabel: 'Explore Cybersecurity Hub',
  },
  {
    icon: <SearchCheck size={25} aria-hidden="true" />,
    title: 'Systems Analysis & Design',
    description:
      'Explore technologies, methods, and modelling techniques used to analyse requirements, design information systems, model processes, and communicate system architecture.',
    topics:
      'Requirements engineering, UML, system design, process modelling, architecture, use cases, documentation',
    href: '/technologies/systems-analysis-design',
    linkLabel: 'Explore Systems Analysis Hub',
  },
  {
    icon: <BookOpen size={25} aria-hidden="true" />,
    title: 'Research & Analytical Technologies',
    description:
      'Explore the technical methods and tools used to support research design, literature analysis, quantitative and qualitative research, methodological development, and academic investigation.',
    topics:
      'Research design, quantitative research, qualitative research, literature review, methodology, research tools',
    href: '/technologies/research-analytical-technologies',
    linkLabel: 'Explore Research Hub',
  },
  {
    icon: <BarChart3 size={25} aria-hidden="true" />,
    title: 'Data Analysis & Data Mining',
    description:
      'Explore technologies and analytical methods used to prepare, analyse, visualize, model, and interpret datasets across academic, technical, and research projects.',
    topics:
      'WEKA, statistical analysis, data mining, machine learning, SPSS, Excel, data visualization, model evaluation',
    href: '/technologies/data-analysis-mining',
    linkLabel: 'Explore Data Analysis Hub',
  },
  {
    icon: <FileCode2 size={25} aria-hidden="true" />,
    title: 'Technical Documentation & Development Tools',
    description:
      'Explore tools and methods used to document software, systems, APIs, databases, architectures, implementations, testing, deployment, and technical project work.',
    topics:
      'Git, GitHub, API documentation, technical reports, SRS, UML diagrams, implementation documentation, testing documentation',
    href: '/technologies/technical-documentation-development-tools',
    linkLabel: 'Explore Documentation Hub',
  },
]

/* =========================================================
   APPROACH
   ========================================================= */

const approaches = [
  {
    number: '01',
    title: 'Understand the technology',
    text:
      'We begin by identifying the technical concepts, systems, tools, or methods that your project actually requires.',
  },
  {
    number: '02',
    title: 'Connect technology to the brief',
    text:
      'Technical choices should support the research question, assignment requirements, project objectives, or intended learning outcomes.',
  },
  {
    number: '03',
    title: 'Work through the difficult parts',
    text:
      'Complex concepts can be broken into manageable components through technical walkthroughs, examples, reviews, and structured discussion.',
  },
  {
    number: '04',
    title: 'Strengthen the final work',
    text:
      'The objective is clearer reasoning, stronger technical understanding, better documentation, and work that you can confidently explain.',
  },
]

/* =========================================================
   AUDIENCES
   ========================================================= */

const audiences = [
  {
    title: 'Undergraduate Students',
    text:
      'Programming, databases, networking, systems analysis, cybersecurity, technical reports, and practical computing projects.',
  },
  {
    title: 'Postgraduate Students',
    text:
      'Technical coursework, research projects, dissertations, methodology, data analysis, and technology-focused academic work.',
  },
  {
    title: 'MBA & DBA Researchers',
    text:
      'Research methodology, data analysis, technology-related business research, dissertations, and applied research projects.',
  },
  {
    title: 'Cybersecurity Researchers',
    text:
      'Security research, risk assessment, governance, security frameworks, technical analysis, and research documentation.',
  },
  {
    title: 'IT & Computing Professionals',
    text:
      'Technical learning, professional development, documentation, research projects, and structured understanding of complex systems.',
  },
  {
    title: 'Researchers & Project Teams',
    text:
      'Technical methodology, analytical frameworks, system documentation, research instruments, and technology-focused project work.',
  },
]

/* =========================================================
   FAQ
   ========================================================= */

const faqs = [
  {
    question: 'What technologies does ProjectAssignments support?',
    answer:
      'Our technical support covers programming languages and software development, DBMS and database technologies, networking and infrastructure, cybersecurity, systems analysis and design, research and analytical technologies, data analysis and data mining, and technical documentation and development tools.',
  },
  {
    question: 'Can you help with programming projects?',
    answer:
      'Yes. We provide ethical technical guidance around programming concepts, debugging, software architecture, databases, APIs, algorithms, documentation, and understanding implementation decisions. The aim is to help you understand and develop your own work.',
  },
  {
    question: 'Do you provide cybersecurity academic support?',
    answer:
      'Yes. Support can cover cybersecurity concepts, risk assessment, threat analysis, governance, security frameworks, secure system design, technical documentation, security tools, and cybersecurity research.',
  },
  {
    question: 'Can you help with SQL and database projects?',
    answer:
      'Yes. We can provide guidance on relational database concepts, ER modelling, normalization, SQL queries, transactions, database design, PostgreSQL, and broader DBMS concepts.',
  },
  {
    question: 'Do you support research methodology and data analysis?',
    answer:
      'Yes. We support research design, quantitative and qualitative approaches, literature reviews, methodology development, data interpretation, statistical analysis, survey analysis, and research findings.',
  },
  {
    question: 'Do you complete assignments or projects for students?',
    answer:
      'No. Our approach is based on ethical academic guidance. We help students and researchers understand difficult technical concepts, review their work, strengthen methodology, and make informed technical decisions while keeping the final academic work their own.',
  },
]

/* =========================================================
   STRUCTURED DATA
   ========================================================= */

const technologySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/technologies#webpage',
      url: 'https://projectassignments.com/technologies',
      name:
        'Technologies | Cybersecurity, Programming & Research Support',
      description:
        'Technologies, technical methods, and analytical frameworks used across programming, databases, networking, cybersecurity, systems analysis, research, data analysis, and technical documentation.',
      isPartOf: {
        '@id':
          'https://projectassignments.com/#website',
      },
      breadcrumb: {
        '@id':
          'https://projectassignments.com/technologies#breadcrumb',
      },
    },

    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/technologies#breadcrumb',
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
          name: 'Technologies',
          item:
            'https://projectassignments.com/technologies',
        },
      ],
    },

    {
      '@type': 'ItemList',
      '@id':
        'https://projectassignments.com/technologies#technology-hubs',
      name: 'Technology Hubs',
      itemListElement: technologyHubs.map(
        (technology, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: technology.title,
          url: `https://projectassignments.com${technology.href}`,
        }),
      ),
    },

    {
      '@type': 'ItemList',
      '@id':
        'https://projectassignments.com/technologies#featured-technologies',
      name: 'Featured Technologies',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name:
            'WEKA Data Mining & Machine Learning',
          url:
            'https://projectassignments.com/technologies/weka',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name:
            'NASM Assembly Language & x86-64 Programming',
          url:
            'https://projectassignments.com/technologies/nasm',
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

export default function TechnologiesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="TECHNICAL AREAS"
          title="Technologies That Turn Complex Work Into Something You Can Explain."
          body="Explore the technologies, technical methods, and analytical frameworks we work with across programming, IT systems, databases, networking, cybersecurity, research, data analysis, and technical documentation."
        />

        {/* =====================================================
            TECHNOLOGY HUBS
           ===================================================== */}

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="OUR TECHNOLOGY HUBS"
              title="Explore the technical domains behind modern computing and research."
              body="The technologies we work with span several connected domains. Each hub brings related technologies together so you can explore the broader technical context before going deeper into an individual technology."
            />

            <div className="expertise-grid">
              {technologyHubs.map((hub) => (
                <article
                  className="expertise-card"
                  key={hub.title}
                >
                  <div
                    className="icon-box"
                    aria-hidden="true"
                    style={{
                      marginBottom: '22px',
                    }}
                  >
                    {hub.icon}
                  </div>

                  <h3>
                    {hub.title}
                  </h3>

                  <p>
                    {hub.description}
                  </p>

                  <p
                    style={{
                      marginTop: '18px',
                      fontSize: '14px',
                      color: '#1167d8',
                    }}
                  >
                    <strong>
                      Technologies &amp; topics:
                    </strong>{' '}
                    {hub.topics}
                  </p>

                  <Link
                    href={hub.href}
                    className="button button-secondary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '20px',
                    }}
                  >
                    {hub.linkLabel}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>

            {/* =================================================
                FEATURED WEKA
               ================================================= */}

            <div
              className="consultancy-card"
              style={{
                marginTop: '52px',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  maxWidth: '760px',
                }}
              >
                <p className="eyebrow">
                  FEATURED TECHNOLOGY
                </p>

                <h3
                  style={{
                    marginBottom: '10px',
                  }}
                >
                  WEKA Data Mining &amp; Machine
                  Learning
                </h3>

                <p
                  style={{
                    marginBottom: 0,
                  }}
                >
                  Explore practical guidance on WEKA
                  for data mining and machine-learning
                  projects, including ARFF datasets,
                  preprocessing, classification,
                  clustering, model evaluation, and
                  academic research.
                </p>
              </div>

              <Link
                href="/technologies/weka"
                className="button button-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexShrink: 0,
                }}
              >
                Explore WEKA
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* =================================================
                FEATURED NASM
               ================================================= */}

            <div
              className="consultancy-card"
              style={{
                marginTop: '20px',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  maxWidth: '760px',
                }}
              >
                <p className="eyebrow">
                  FEATURED TECHNOLOGY
                </p>

                <h3
                  style={{
                    marginBottom: '10px',
                  }}
                >
                  NASM Assembly Language &amp; x86-64
                  Programming
                </h3>

                <p
                  style={{
                    marginBottom: 0,
                  }}
                >
                  Explore our comprehensive NASM guide
                  covering x86-64 assembly fundamentals,
                  registers, instructions, memory
                  addressing, stacks, procedures, Linux
                  system calls, debugging, and practical
                  low-level programming concepts.
                </p>
              </div>

              <Link
                href="/technologies/nasm"
                className="button button-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexShrink: 0,
                }}
              >
                Explore NASM
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNICAL UNDERSTANDING
           ===================================================== */}

        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="TECHNICAL UNDERSTANDING"
                title="Technology is only useful when you understand why it is there."
                body="A technically correct implementation is not always a strong academic or research outcome. The technology needs to connect logically to the problem being investigated, the requirements being addressed, and the conclusions being drawn."
              />

              <div
                style={{
                  marginTop: '28px',
                }}
              >
                <p>
                  We therefore focus on more than
                  individual tools or programming
                  languages. We look at the relationship
                  between the technology, the methodology,
                  the evidence, and the objectives of the
                  project.
                </p>

                <p
                  style={{
                    marginTop: '18px',
                  }}
                >
                  This approach is particularly important
                  for technical assignments, capstone
                  projects, cybersecurity assessments,
                  research projects, dissertations, and
                  other postgraduate work where technical
                  decisions need to be explained and
                  justified.
                </p>
              </div>
            </div>

            <div>
              <div className="why-grid">
                <article className="why-card">
                  <h3>
                    Technical Clarity
                  </h3>

                  <p>
                    Break difficult systems and concepts
                    into understandable technical
                    components.
                  </p>
                </article>

                <article className="why-card">
                  <h3>
                    Research Alignment
                  </h3>

                  <p>
                    Connect technology choices with
                    research questions, methodology,
                    requirements, and learning
                    outcomes.
                  </p>
                </article>

                <article className="why-card">
                  <h3>
                    Explainable Decisions
                  </h3>

                  <p>
                    Understand not only what technology
                    was used, but why it was appropriate
                    for the problem.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            APPROACH
           ===================================================== */}

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="OUR APPROACH"
              title="A structured way to work through technical complexity."
              body="Whether the challenge is a programming problem, a cybersecurity assessment, a database design, or a research methodology question, the process remains focused on understanding."
            />

            <div className="approach-grid">
              {approaches.map((approach) => (
                <article
                  className="approach-card"
                  key={approach.number}
                >
                  <span aria-hidden="true">
                    {approach.number}
                  </span>

                  <h3>
                    {approach.title}
                  </h3>

                  <p>
                    {approach.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO WE SUPPORT
           ===================================================== */}

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="WHO WE SUPPORT"
              title="Technical support across different stages of study and research."
              body="Technology can appear in almost every stage of modern academic work, from undergraduate programming projects to postgraduate research and professional technical studies."
            />

            <div className="audience-grid">
              {audiences.map((audience) => (
                <article
                  className="audience-card"
                  key={audience.title}
                >
                  <h3>
                    {audience.title}
                  </h3>

                  <p>
                    {audience.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
           ===================================================== */}

        <section className="section">
          <div className="container">
            <div className="faq-layout">
              <div>
                <SectionHeading
                  eyebrow="FREQUENTLY ASKED QUESTIONS"
                  title="Questions about our technical areas."
                  body="A few common questions about the technologies and technical subjects we support."
                />
              </div>

              <div className="faq-list">
                {faqs.map((faq) => (
                  <details
                    className="faq-item"
                    key={faq.question}
                  >
                    <summary
                      style={{
                        cursor: 'pointer',
                        padding: '22px 0',
                        fontWeight: 700,
                        color:
                          'var(--foreground)',
                      }}
                    >
                      {faq.question}
                    </summary>

                    <p>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
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
            technologySchema,
          ),
        }}
      />
    </>
  )
}