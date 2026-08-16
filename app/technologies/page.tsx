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
    'Explore the technologies, technical methods, research tools, and analytical frameworks used across cybersecurity, programming, IT systems, data analysis, and postgraduate research support.',

  keywords: [
    'cybersecurity academic support',
    'programming assignment support',
    'Python academic support',
    'SQL and database support',
    'networking academic support',
    'systems analysis support',
    'research methodology support',
    'data analysis academic support',
    'technical project support',
    'IT academic consultancy',
    'technical research support',
  ],

  alternates: {
    canonical: 'https://projectassignments.com/technologies',
  },

  openGraph: {
    title: 'Technologies | ProjectAssignments',
    description:
      'Explore the technologies, technical methods, and analytical frameworks behind our cybersecurity, programming, IT, and postgraduate research support.',
    url: 'https://projectassignments.com/technologies',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const technologies = [
  {
    icon: <ShieldCheck size={25} aria-hidden="true" />,
    title: 'Cybersecurity & Risk',
    description:
      'Security concepts, risk assessment, threat analysis, governance, security controls, compliance frameworks, secure system design, and cybersecurity research.',
    topics:
      'Risk assessment, threat modelling, information security, governance, ISO 27001, NIST frameworks, security architecture',
  },
  {
    icon: <Code2 size={25} aria-hidden="true" />,
    title: 'Programming & Software Development',
    description:
      'Programming concepts and software engineering practices used to understand, design, implement, test, and document technical solutions.',
    topics:
      'Python, Java, C++, C#, JavaScript, algorithms, debugging, APIs, software architecture',
  },
  {
    icon: <Database size={25} aria-hidden="true" />,
    title: 'Databases & SQL',
    description:
      'Database concepts ranging from data modelling and relational design to SQL queries, normalization, transactions, and database systems.',
    topics:
      'SQL, relational databases, ER modelling, normalization, transactions, DBMS concepts, database design',
  },
  {
    icon: <Network size={25} aria-hidden="true" />,
    title: 'Networking & Infrastructure',
    description:
      'Technical understanding of networks, infrastructure, communication systems, cloud environments, and the technologies that connect modern systems.',
    topics:
      'TCP/IP, networking concepts, infrastructure, cloud environments, network security, system architecture',
  },
  {
    icon: <SearchCheck size={25} aria-hidden="true" />,
    title: 'Systems Analysis',
    description:
      'Structured analysis of information systems, requirements, processes, architectures, workflows, and technical decision-making.',
    topics:
      'Requirements analysis, UML, system design, process modelling, architecture, documentation',
  },
  {
    icon: <BookOpen size={25} aria-hidden="true" />,
    title: 'Research Methodology',
    description:
      'Technical and academic research methods used to develop research questions, methodologies, literature reviews, and defensible research designs.',
    topics:
      'Quantitative research, qualitative research, literature reviews, research design, methodology chapters',
  },
  {
    icon: <BarChart3 size={25} aria-hidden="true" />,
    title: 'Data Analysis',
    description:
      'Analytical approaches for interpreting research data, evaluating findings, testing hypotheses, and presenting results clearly.',
    topics:
      'Statistical analysis, survey data, hypothesis testing, SPSS, Excel, data interpretation, research findings',
  },
  {
    icon: <FileCode2 size={25} aria-hidden="true" />,
    title: 'Technical Documentation',
    description:
      'Clear technical communication for projects that require diagrams, reports, implementation documentation, testing evidence, and structured explanations.',
    topics:
      'Technical reports, implementation documentation, UML diagrams, testing documentation, project artefacts',
  },
]

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

const faqs = [
  {
    question: 'What technologies does ProjectAssignments support?',
    answer:
      'Our technical support covers areas including cybersecurity, programming, databases and SQL, networking and infrastructure, systems analysis, research methodology, data analysis, and technical documentation.',
  },
  {
    question: 'Can you help with programming projects?',
    answer:
      'Yes. We provide ethical technical guidance around programming concepts, debugging, software architecture, databases, APIs, algorithms, documentation, and understanding implementation decisions. The aim is to help you understand and develop your own work.',
  },
  {
    question: 'Do you provide cybersecurity academic support?',
    answer:
      'Yes. Support can cover cybersecurity concepts, risk assessment, threat analysis, governance, security frameworks, secure system design, technical documentation, and cybersecurity research.',
  },
  {
    question: 'Can you help with SQL and database projects?',
    answer:
      'Yes. We can provide guidance on relational database concepts, ER modelling, normalization, SQL queries, transactions, database design, and broader DBMS concepts.',
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

const technologySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://projectassignments.com/technologies#webpage',
      url: 'https://projectassignments.com/technologies',
      name: 'Technologies | Cybersecurity, Programming & Research Support',
      description:
        'Technologies, technical methods, and analytical frameworks used across cybersecurity, programming, IT systems, data analysis, and postgraduate research support.',
      isPartOf: {
        '@id': 'https://projectassignments.com/#website',
      },
      breadcrumb: {
        '@id': 'https://projectassignments.com/technologies#breadcrumb',
      },
    },

    {
      '@type': 'BreadcrumbList',
      '@id': 'https://projectassignments.com/technologies#breadcrumb',
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
          item: 'https://projectassignments.com/technologies',
        },
      ],
    },

    {
      '@type': 'ItemList',
      name: 'Technical Areas',
      itemListElement: technologies.map((technology, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: technology.title,
      })),
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
          body="Explore the technologies, technical methods, and analytical frameworks we work with across cybersecurity, programming, IT systems, data analysis, and postgraduate research."
        />

        {/* Technology Areas */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="OUR TECHNOLOGY TOOLKIT"
              title="Technical depth where it matters."
              body="Different projects require different technologies. Our role is to make the technical layer easier to understand, connect it to the wider project, and help you make sound decisions."
            />

            <div className="expertise-grid">
              {technologies.map((technology) => (
                <article
                  className="expertise-card"
                  key={technology.title}
                >
                  <div
                    className="icon-box"
                    aria-hidden="true"
                    style={{ marginBottom: '22px' }}
                  >
                    {technology.icon}
                  </div>

                  <h3>{technology.title}</h3>

                  <p>{technology.description}</p>

                  <p
                    style={{
                      marginTop: '18px',
                      fontSize: '14px',
                      color: '#1167d8',
                    }}
                  >
                    <strong>Common areas:</strong> {technology.topics}
                  </p>
                </article>
              ))}
            </div>

            {/* Featured WEKA Technology */}
            <div
              className="consultancy-card"
              style={{
                marginTop: '36px',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ maxWidth: '760px' }}>
                <p className="eyebrow">FEATURED TECHNOLOGY</p>

                <h3 style={{ marginBottom: '10px' }}>
                  WEKA Data Mining &amp; Machine Learning
                </h3>

                <p style={{ marginBottom: 0 }}>
                  Explore practical guidance on WEKA for data mining and
                  machine-learning projects, including ARFF datasets,
                  preprocessing, classification, clustering, model
                  evaluation, and academic research.
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
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Existing technology overview */}
        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="TECHNICAL UNDERSTANDING"
                title="Technology is only useful when you understand why it is there."
                body="A technically correct implementation is not always a strong academic or research outcome. The technology needs to connect logically to the problem being investigated, the requirements being addressed, and the conclusions being drawn."
              />

              <div style={{ marginTop: '28px' }}>
                <p>
                  We therefore focus on more than individual tools or
                  programming languages. We look at the relationship between
                  the technology, the methodology, the evidence, and the
                  objectives of the project.
                </p>

                <p style={{ marginTop: '18px' }}>
                  This approach is particularly important for technical
                  assignments, capstone projects, cybersecurity assessments,
                  research projects, dissertations, and other postgraduate
                  work where technical decisions need to be explained and
                  justified.
                </p>
              </div>
            </div>

            <div>
              <div className="why-grid">
                <article className="why-card">
                  <h3>Technical Clarity</h3>
                  <p>
                    Break difficult systems and concepts into understandable
                    technical components.
                  </p>
                </article>

                <article className="why-card">
                  <h3>Research Alignment</h3>
                  <p>
                    Connect technology choices with research questions,
                    methodology, requirements, and learning outcomes.
                  </p>
                </article>

                <article className="why-card">
                  <h3>Explainable Decisions</h3>
                  <p>
                    Understand not only what technology was used, but why it
                    was appropriate for the problem.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
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
                  <span aria-hidden="true">{approach.number}</span>

                  <h3>{approach.title}</h3>

                  <p>{approach.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Support */}
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
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        <CTA />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(technologySchema),
        }}
      />
    </>
  )
}