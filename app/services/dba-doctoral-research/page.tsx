import {
    BarChart3,
    BookOpen,
    CheckCircle2,
    FileText,
    GraduationCap,
    LineChart,
    Search,
    ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'

import {
    CTA,
    Footer,
    PageHero,
    SectionHeading,
} from '@/components/site'

export const metadata: Metadata = {
  title: 'DBA Doctoral Research & Dissertation Support | ProjectAssignments',
  description:
    'Specialized DBA research and dissertation support covering research methodology, literature reviews, conceptual frameworks, data analysis, research design, and doctoral-level academic guidance.',
  keywords: [
    'DBA dissertation support',
    'DBA research support',
    'DBA dissertation help',
    'doctoral research support',
    'DBA methodology support',
    'DBA literature review',
    'DBA data analysis',
    'doctoral dissertation guidance',
    'DBA research methodology',
    'doctoral research consultancy',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/dba-doctoral-research',
  },
  openGraph: {
    title: 'DBA Doctoral Research & Dissertation Support',
    description:
      'Specialized research and dissertation guidance for Doctor of Business Administration candidates, from research design and methodology to data analysis and dissertation development.',
    url: 'https://projectassignments.com/services/dba-doctoral-research',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const supportAreas = [
  {
    icon: <Search size={24} aria-hidden="true" />,
    title: 'Research Problem & Questions',
    description:
      'Clarify the problem of practice, research purpose, research objectives, research questions, and the relationship between them.',
  },
  {
    icon: <BookOpen size={24} aria-hidden="true" />,
    title: 'Literature Review',
    description:
      'Develop structured literature reviews that identify relevant scholarship, major themes, research gaps, theoretical perspectives, and areas requiring further investigation.',
  },
  {
    icon: <FileText size={24} aria-hidden="true" />,
    title: 'Research Frameworks',
    description:
      'Develop and refine conceptual or theoretical frameworks that connect the research problem, relevant constructs, literature, and proposed investigation.',
  },
  {
    icon: <GraduationCap size={24} aria-hidden="true" />,
    title: 'Research Methodology',
    description:
      'Evaluate research approaches, research designs, sampling strategies, instruments, data collection methods, and methodological justification.',
  },
  {
    icon: <BarChart3 size={24} aria-hidden="true" />,
    title: 'Data Analysis',
    description:
      'Support quantitative and qualitative analysis, interpretation of results, statistical reasoning, and the presentation of research findings.',
  },
  {
    icon: <LineChart size={24} aria-hidden="true" />,
    title: 'Results & Discussion',
    description:
      'Help connect research findings with the research questions, existing literature, theoretical framework, practical implications, and limitations.',
  },
]

const researchStages = [
  {
    number: '01',
    title: 'Research Direction',
    text:
      'Clarify the problem of practice, research purpose, objectives, questions, and the contribution the study is intended to make.',
  },
  {
    number: '02',
    title: 'Literature & Framework',
    text:
      'Build a coherent scholarly foundation by synthesizing relevant literature and establishing an appropriate conceptual or theoretical framework.',
  },
  {
    number: '03',
    title: 'Methodology',
    text:
      'Develop a defensible research design covering methodology, population, sampling, instruments, data collection, ethics, and analysis.',
  },
  {
    number: '04',
    title: 'Analysis & Findings',
    text:
      'Work through the collected evidence using appropriate analytical methods and present findings in a clear, structured manner.',
  },
  {
    number: '05',
    title: 'Discussion & Implications',
    text:
      'Connect findings to the research questions, literature, theory, practice, limitations, and recommendations for future research.',
  },
  {
    number: '06',
    title: 'Dissertation Refinement',
    text:
      'Review structure, argument, methodology, evidence, technical presentation, consistency, and alignment across the dissertation.',
  },
]

const tools = [
  'SPSS',
  'R',
  'SmartPLS',
  'AMOS',
  'NVivo',
  'Excel',
  'Survey Analysis',
  'Quantitative Methods',
  'Qualitative Methods',
]

const audiences = [
  'DBA candidates developing a research proposal',
  'Doctoral candidates working through dissertation methodology',
  'Researchers conducting quantitative or qualitative studies',
  'Executive professionals completing applied doctoral research',
  'Candidates preparing research findings and discussion chapters',
  'Researchers preparing for proposal or dissertation defense',
]

const faqs = [
  {
    question: 'What does DBA dissertation support include?',
    answer:
      'DBA dissertation support can cover research problem formulation, research questions, literature review, conceptual or theoretical frameworks, research methodology, research instruments, data analysis, interpretation of findings, dissertation structure, and preparation for proposal or dissertation review.',
  },
  {
    question: 'Can you help with DBA research methodology?',
    answer:
      'Yes. We can provide guidance on research approaches, research design, sampling, instrumentation, data collection, validity and reliability considerations, qualitative or quantitative methods, and the methodological justification required for a doctoral study.',
  },
  {
    question: 'Do you support quantitative and qualitative DBA research?',
    answer:
      'Yes. Support can cover both quantitative and qualitative research approaches, depending on the research question, study design, data, and requirements of the doctoral programme.',
  },
  {
    question: 'Can you help with SPSS, SmartPLS, R, or NVivo?',
    answer:
      'Yes. We provide technical guidance around commonly used research and analytical tools including SPSS, SmartPLS, R, AMOS, NVivo, and Excel, with the emphasis on understanding the analysis and interpreting the resulting evidence appropriately.',
  },
  {
    question: 'Can you help with only one chapter of a DBA dissertation?',
    answer:
      'Yes. Support can be modular. For example, a researcher may request guidance on a literature review, methodology chapter, conceptual framework, data analysis, results interpretation, or discussion chapter without requiring support across the entire dissertation.',
  },
  {
    question: 'Can you guarantee a distinction or doctoral result?',
    answer:
      'No. We can provide expert guidance, technical analysis, research support, and careful review, but no consultancy can guarantee a particular grade, distinction, doctoral award, publication outcome, or other result determined by an institution, supervisor, committee, or examiner.',
  },
]

const dbaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/services/dba-doctoral-research#webpage',
      url: 'https://projectassignments.com/services/dba-doctoral-research',
      name: 'DBA Doctoral Research & Dissertation Support',
      description:
        'Specialized DBA research and dissertation support covering research methodology, literature reviews, conceptual frameworks, data analysis, research design, and doctoral-level academic guidance.',
      breadcrumb: {
        '@id':
          'https://projectassignments.com/services/dba-doctoral-research#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/services/dba-doctoral-research#breadcrumb',
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
          name: 'DBA Doctoral Research',
          item:
            'https://projectassignments.com/services/dba-doctoral-research',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'DBA Doctoral Research & Dissertation Support',
      description:
        'Specialized research and dissertation guidance for Doctor of Business Administration candidates.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments.com',
        url: 'https://projectassignments.com',
      },
      serviceType: 'Doctoral Research Consultancy',
      areaServed: 'Worldwide',
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

export default function DBADoctoralResearchPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="DBA DOCTORAL RESEARCH"
          title="Research Support for the Demands of Doctoral-Level Business Research."
          body="Specialized guidance for Doctor of Business Administration candidates working through research design, literature reviews, conceptual frameworks, methodology, data analysis, findings, and dissertation development."
        />

        {/* Introduction */}
        <section className="section">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="DOCTORAL RESEARCH SUPPORT"
                title="A DBA dissertation is more than a long business report."
                body="Doctoral research requires a coherent connection between the problem of practice, research questions, existing scholarship, methodology, evidence, analysis, and practical contribution."
              />
            </div>

            <div>
              <p>
                ProjectAssignments provides structured research guidance for
                DBA candidates who need to work through complex research
                decisions with greater clarity and confidence.
              </p>

              <p style={{ marginTop: '18px' }}>
                Support can begin at the proposal stage and continue through
                literature development, methodology, data analysis, results,
                discussion, dissertation refinement, and preparation for
                academic review.
              </p>

              <p style={{ marginTop: '18px' }}>
                Our focus is not simply on producing text. It is on helping
                researchers understand the reasoning behind their research
                choices and communicate those choices clearly.
              </p>
            </div>
          </div>
        </section>

        {/* Core support */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CORE RESEARCH AREAS"
              title="Support across the major stages of DBA research."
              body="Different doctoral projects require different combinations of methodological, analytical, and research support. Our approach is modular so candidates can focus on the areas where they need the most guidance."
            />

            <div className="expertise-grid">
              {supportAreas.map((area) => (
                <article
                  className="expertise-card"
                  key={area.title}
                >
                  <div
                    className="icon-box"
                    aria-hidden="true"
                    style={{ marginBottom: '22px' }}
                  >
                    {area.icon}
                  </div>

                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Research journey */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="THE DBA RESEARCH JOURNEY"
              title="From research problem to defensible conclusions."
              body="A strong dissertation benefits from alignment across its stages. Changes to the research question can affect the methodology; methodological choices influence data collection and analysis; findings then need to connect back to the original research problem."
            />

            <div className="approach-grid">
              {researchStages.map((stage) => (
                <article
                  className="approach-card"
                  key={stage.number}
                >
                  <span aria-hidden="true">{stage.number}</span>

                  <h3>{stage.title}</h3>

                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="METHODOLOGY & ANALYSIS"
                title="Technical support for evidence-based doctoral research."
                body="Methodology should follow the research problem and questions—not the other way around."
              />
            </div>

            <div>
              <p>
                We can provide guidance across quantitative, qualitative, and
                mixed-method research approaches, depending on the requirements
                of the study.
              </p>

              <p style={{ marginTop: '18px' }}>
                This can include research design, sampling strategies,
                questionnaire or interview instruments, data preparation,
                statistical analysis, qualitative coding, interpretation of
                results, and presentation of evidence.
              </p>

              <p style={{ marginTop: '18px' }}>
                The emphasis remains on methodological reasoning: why a method
                is appropriate, what its assumptions are, how the evidence
                should be interpreted, and how the analysis connects to the
                research questions.
              </p>

              <div
                className="consultancy-card"
                style={{ marginTop: '28px', padding: '24px' }}
              >
                <strong>Research tools and environments</strong>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginTop: '16px',
                  }}
                >
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        padding: '7px 10px',
                        borderRadius: '7px',
                        background: '#f3f6fa',
                        border: '1px solid #e4e9f0',
                        fontSize: '12px',
                        color: '#516176',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Framework */}
        <section className="section">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="RESEARCH FRAMEWORKS"
                title="Connecting theory, concepts, evidence, and practice."
                body="For many DBA studies, the conceptual or theoretical framework provides an important bridge between existing knowledge and the proposed investigation."
              />
            </div>

            <div>
              <p>
                We support researchers in understanding how relevant theories,
                concepts, constructs, variables, and relationships fit within
                the research problem.
              </p>

              <p style={{ marginTop: '18px' }}>
                A useful framework should do more than look visually
                impressive. It should communicate the logic of the study and
                help explain how the proposed research relates to the existing
                body of knowledge.
              </p>

              <p style={{ marginTop: '18px' }}>
                This is particularly important when developing research
                proposals, literature reviews, hypotheses, research questions,
                and methodology.
              </p>
            </div>
          </div>
        </section>

        {/* Who we support */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="WHO WE SUPPORT"
              title="Built for researchers working through demanding doctoral programmes."
              body="DBA candidates often balance doctoral research with substantial professional responsibilities. Our support is designed to make complex research tasks more structured and manageable."
            />

            <div className="audience-grid">
              {audiences.map((audience) => (
                <article
                  className="audience-card"
                  key={audience}
                >
                  <CheckCircle2
                    size={20}
                    color="var(--accent)"
                    aria-hidden="true"
                  />

                  <p
                    style={{
                      marginTop: '12px',
                      fontWeight: 600,
                    }}
                  >
                    {audience}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ethical approach */}
        <section className="section">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="RESPONSIBLE ACADEMIC SUPPORT"
                title="Your research remains your research."
                body="Our role is to provide expert guidance, technical understanding, research support, and constructive feedback while respecting academic integrity."
              />
            </div>

            <div>
              <div className="consultancy-card" style={{ padding: '28px' }}>
                <ShieldCheck
                  size={30}
                  color="var(--accent)"
                  aria-hidden="true"
                />

                <h3 style={{ marginTop: '18px' }}>
                  Guidance rather than academic misrepresentation
                </h3>

                <p style={{ marginTop: '12px' }}>
                  We help researchers understand difficult concepts, evaluate
                  methodological choices, interpret analytical results, and
                  strengthen the clarity and structure of their work.
                </p>

                <p style={{ marginTop: '16px' }}>
                  Clients remain responsible for following their institution's
                  academic integrity requirements and for submitting work in
                  accordance with those requirements.
                </p>

                <a
                  href="/policies#academic-integrity"
                  className="text-link"
                  style={{ display: 'inline-block', marginTop: '18px' }}
                >
                  Read our Academic Integrity Policy →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tint">
          <div className="container">
            <div className="faq-layout">
              <div>
                <SectionHeading
                  eyebrow="FREQUENTLY ASKED QUESTIONS"
                  title="Questions about DBA research support."
                  body="Common questions from researchers considering doctoral research and dissertation support."
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
          __html: JSON.stringify(dbaSchema),
        }}
      />
    </>
  )
}