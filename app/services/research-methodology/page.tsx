import {
    ArrowRight,
    BarChart3,
    BookOpenCheck,
    CheckCircle2,
    ClipboardList,
    FlaskConical,
    GitBranch,
    Lightbulb,
    MessageSquareText,
    SearchCheck,
    ShieldCheck,
    Users,
} from 'lucide-react'
import type { Metadata } from 'next'

import {
    CTA,
    Footer,
    PageHero,
    SectionHeading,
} from '@/components/site'

export const metadata: Metadata = {
  title: 'Research Methodology & Dissertation Support',
  description:
    'Research methodology and dissertation support covering research design, qualitative and quantitative methods, sampling, data collection, analysis, and postgraduate research projects.',
  keywords: [
    'research methodology support',
    'dissertation methodology support',
    'research design',
    'quantitative research',
    'qualitative research',
    'mixed methods research',
    'research philosophy',
    'positivism',
    'interpretivism',
    'pragmatism',
    'critical realism',
    'data collection',
    'research analysis',
    'thesis methodology',
  ],
  alternates: {
    canonical: 'https://projectassignments.com/services/research-methodology',
  },
  openGraph: {
    title: 'Research Methodology & Dissertation Support | ProjectAssignments',
    description:
      'Expert guidance on research methodology, research design, qualitative and quantitative methods, data collection, analysis, and postgraduate research.',
    url: 'https://projectassignments.com/services/research-methodology',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const methodologyAreas = [
  {
    icon: <BarChart3 size={24} aria-hidden="true" />,
    title: 'Quantitative Research',
    body:
      'Support with structured, numerical research approaches including variables, hypotheses, surveys, experiments, statistical analysis, and interpretation of quantitative findings.',
  },
  {
    icon: <MessageSquareText size={24} aria-hidden="true" />,
    title: 'Qualitative Research',
    body:
      'Guidance on interviews, observations, textual data, thematic analysis, coding, interpretation, and other approaches used to understand experiences, meanings, and complex phenomena.',
  },
  {
    icon: <GitBranch size={24} aria-hidden="true" />,
    title: 'Mixed-Methods Research',
    body:
      'Help connecting quantitative and qualitative approaches into a coherent research design when a research question benefits from both forms of evidence.',
  },
  {
    icon: <FlaskConical size={24} aria-hidden="true" />,
    title: 'Experimental Research',
    body:
      'Methodological guidance around experimental design, variables, controls, measurement, data collection, and interpretation of experimental findings.',
  },
  {
    icon: <ClipboardList size={24} aria-hidden="true" />,
    title: 'Survey & Questionnaire Research',
    body:
      'Support with questionnaire structure, measurement design, sampling considerations, response data, and alignment between research objectives and collected evidence.',
  },
  {
    icon: <SearchCheck size={24} aria-hidden="true" />,
    title: 'Case Study & Applied Research',
    body:
      'Guidance for case study designs, applied research questions, organisational research, technical investigations, and context-specific research problems.',
  },
]

const philosophies = [
  {
    title: 'Positivism',
    body:
      'Often associated with objective measurement, observable evidence, hypothesis testing, and quantitative research approaches.',
  },
  {
    title: 'Interpretivism',
    body:
      'Focuses on understanding meaning, experience, context, and how people interpret the social or organisational world around them.',
  },
  {
    title: 'Pragmatism',
    body:
      'Emphasises the research question and practical usefulness of the investigation, and can support the combination of different methodological approaches.',
  },
  {
    title: 'Critical Realism',
    body:
      'Recognises an underlying reality while considering how observations, social structures, context, and human interpretation affect what can be known about it.',
  },
]

const researchProcess = [
  {
    number: '01',
    title: 'Define the Research Problem',
    body:
      'Clarify the research problem, establish the context, and identify what the investigation is intended to understand or evaluate.',
  },
  {
    number: '02',
    title: 'Develop Questions & Objectives',
    body:
      'Translate the research problem into focused research questions, objectives, and where appropriate, testable hypotheses.',
  },
  {
    number: '03',
    title: 'Choose the Research Approach',
    body:
      'Select an appropriate philosophy, approach, design, methodology, and data strategy based on the research question rather than choosing a method simply because it is familiar.',
  },
  {
    number: '04',
    title: 'Plan Data Collection',
    body:
      'Determine what evidence is required, where it will come from, how participants or datasets will be selected, and how the information will be collected.',
  },
  {
    number: '05',
    title: 'Analyse the Evidence',
    body:
      'Apply appropriate analytical techniques to the collected data and connect the analysis back to the research questions and objectives.',
  },
  {
    number: '06',
    title: 'Interpret & Communicate Findings',
    body:
      'Interpret the results within their research context, acknowledge limitations, and communicate findings clearly and logically.',
  },
]

const supportAreas = [
  'Research methodology selection and justification',
  'Research philosophy and methodological alignment',
  'Research questions, objectives, and hypotheses',
  'Quantitative and qualitative research design',
  'Sampling strategies and participant selection',
  'Questionnaire and interview design',
  'Primary and secondary data planning',
  'Statistical and qualitative analysis guidance',
  'Methodology chapter structure and documentation',
  'Research limitations and methodological justification',
]

const faqs = [
  {
    question: 'Which research methodology should I choose?',
    answer:
      'The appropriate methodology depends on the research question, objectives, type of evidence required, research context, and the assumptions behind the study. We can help you compare suitable approaches and understand why one may be more appropriate than another.',
  },
  {
    question: 'What is the difference between qualitative and quantitative research?',
    answer:
      'Quantitative research generally works with numerical data, measurement, variables, and statistical analysis, while qualitative research generally explores meaning, experience, context, and patterns in non-numerical data. The choice should follow the research question rather than a preference for one approach.',
  },
  {
    question: 'Can you help with mixed-methods research?',
    answer:
      'Yes. We can provide guidance on how quantitative and qualitative components can be designed, connected, and interpreted as part of a coherent mixed-methods research strategy.',
  },
  {
    question: 'Can you help with a dissertation methodology chapter?',
    answer:
      'Yes. We can provide structured guidance on methodology chapter organisation, research philosophy, research design, sampling, data collection, analysis methods, methodological justification, and limitations.',
  },
  {
    question: 'Can you help me understand research philosophy?',
    answer:
      'Yes. We can explain approaches such as positivism, interpretivism, pragmatism, and critical realism and help you understand how philosophical assumptions can influence research design and methodological choices.',
  },
  {
    question: 'Can you help with research data analysis?',
    answer:
      'We can provide technical and methodological guidance on appropriate analytical approaches, interpretation, and presentation of research findings, depending on the research design and type of data involved.',
  },
]

const researchMethodologySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://projectassignments.com/services/research-methodology#service',
      name: 'Research Methodology & Dissertation Support',
      serviceType: 'Research methodology and dissertation support',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
      areaServed: 'Worldwide',
      url: 'https://projectassignments.com/services/research-methodology',
      description:
        'Research methodology and dissertation support covering research design, qualitative and quantitative methods, research philosophy, data collection, sampling, analysis, and postgraduate research projects.',
    },
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/services/research-methodology#webpage',
      url: 'https://projectassignments.com/services/research-methodology',
      name: 'Research Methodology & Dissertation Support',
      description:
        'Research methodology and dissertation support covering research design, qualitative and quantitative methods, research philosophy, data collection, sampling, analysis, and postgraduate research projects.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/services/research-methodology#breadcrumb',
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
          name: 'Research Methodology & Dissertation Support',
          item: 'https://projectassignments.com/services/research-methodology',
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

export default function ResearchMethodologyPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="RESEARCH METHODOLOGY"
          title="Build research that is methodologically clear and defensible."
          body="Structured guidance for research design, methodology selection, data collection, analysis, and postgraduate dissertations across technical, business, and applied research."
        />

        {/* Overview */}
        <section className="section">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="RESEARCH SUPPORT"
                title="The methodology should follow the research question."
                body="A strong research project is not simply a collection of methods. The research problem, questions, objectives, evidence, analysis, and conclusions need to form a coherent chain."
              />
            </div>

            <div>
              <p>
                ProjectAssignments provides structured research methodology
                guidance for students, researchers, and professionals working
                on dissertations, theses, research projects, technical
                investigations, and applied studies.
              </p>

              <p style={{ marginTop: '18px' }}>
                We help you understand why a particular methodology may be
                appropriate, how different methodological decisions connect,
                and how to document those decisions clearly.
              </p>

              <div style={{ marginTop: '28px' }}>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: 'var(--foreground)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="var(--accent)"
                    aria-hidden="true"
                  />
                  Research-question-led methodology selection
                </p>

                <p
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    marginTop: '12px',
                    color: 'var(--foreground)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="var(--accent)"
                    aria-hidden="true"
                  />
                  Clear methodological justification
                </p>

                <p
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    marginTop: '12px',
                    color: 'var(--foreground)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="var(--accent)"
                    aria-hidden="true"
                  />
                  Technical and academic research expertise
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodologies */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="METHODOLOGICAL APPROACHES"
              title="Support across major research methodologies."
              body="Different research questions require different approaches. We provide guidance across a broad range of commonly used research designs and methodologies."
            />

            <div className="expertise-grid">
              {methodologyAreas.map((item) => (
                <article key={item.title} className="expertise-card">
                  <div
                    className="icon-box"
                    aria-hidden="true"
                    style={{ marginBottom: '22px' }}
                  >
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Research philosophy */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH PHILOSOPHY"
              title="Understand the assumptions behind your methodology."
              body="Research philosophy influences how researchers think about knowledge, evidence, reality, and the appropriate ways of investigating a problem."
            />

            <div className="two-column" style={{ marginTop: '42px' }}>
              <div>
                {philosophies.map((item) => (
                  <div
                    key={item.title}
                    className="consultancy-card"
                    style={{ marginBottom: '16px', padding: '22px' }}
                  >
                    <h3>{item.title}</h3>
                    <p style={{ marginTop: '8px' }}>{item.body}</p>
                  </div>
                ))}
              </div>

              <div>
                <div
                  className="consultancy-card"
                  style={{ padding: '28px' }}
                >
                  <div
                    className="icon-box"
                    aria-hidden="true"
                    style={{ marginBottom: '20px' }}
                  >
                    <Lightbulb size={24} aria-hidden="true" />
                  </div>

                  <h3>Why philosophical alignment matters</h3>

                  <p style={{ marginTop: '12px' }}>
                    A methodology should not be selected simply because it is
                    popular or familiar. Your research philosophy, questions,
                    objectives, data, analytical approach, and conclusions
                    should be sufficiently aligned to make the overall
                    research design coherent.
                  </p>

                  <p style={{ marginTop: '16px' }}>
                    We help explain those connections so that methodological
                    choices can be understood and justified rather than simply
                    listed in a dissertation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research process */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH DESIGN"
              title="From research problem to defensible findings."
              body="A structured research process helps keep the methodology connected to the purpose of the study."
            />

            <div className="two-column" style={{ marginTop: '42px' }}>
              <div>
                {researchProcess.slice(0, 3).map((item) => (
                  <div
                    key={item.number}
                    style={{
                      display: 'flex',
                      gap: '18px',
                      marginBottom: '30px',
                    }}
                  >
                    <span
                      style={{
                        flex: '0 0 auto',
                        fontFamily: 'var(--font-mono-family)',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        paddingTop: '4px',
                      }}
                    >
                      {item.number}
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p style={{ marginTop: '8px' }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                {researchProcess.slice(3).map((item) => (
                  <div
                    key={item.number}
                    style={{
                      display: 'flex',
                      gap: '18px',
                      marginBottom: '30px',
                    }}
                  >
                    <span
                      style={{
                        flex: '0 0 auto',
                        fontFamily: 'var(--font-mono-family)',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        paddingTop: '4px',
                      }}
                    >
                      {item.number}
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p style={{ marginTop: '8px' }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support areas */}
        <section className="section">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="WHAT WE CAN HELP WITH"
                title="Practical support across the research lifecycle."
                body="Our consultancy can focus on a specific methodological challenge or help you understand how the different parts of your research fit together."
              />
            </div>

            <div>
              <div
                className="consultancy-card"
                style={{ padding: '28px' }}
              >
                {supportAreas.map((item) => (
                  <p
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '14px',
                      color: 'var(--foreground)',
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle2
                      size={19}
                      color="var(--accent)"
                      aria-hidden="true"
                    />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dissertation */}
        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="DISSERTATION & THESIS SUPPORT"
                title="Turn methodological decisions into a coherent research narrative."
                body="Methodology is more than a chapter. It connects the research problem and literature to the evidence you collect, the analysis you perform, and the conclusions you draw."
              />
            </div>

            <div>
              <p>
                We can provide guidance across methodology chapters and
                research documentation, including methodological justification,
                research design, sampling, data collection, analysis methods,
                limitations, and alignment with research objectives.
              </p>

              <p style={{ marginTop: '18px' }}>
                This is particularly valuable for technical dissertations,
                MBA and DBA research, applied business studies, information
                technology projects, and interdisciplinary research where
                methodological and technical decisions need to work together.
              </p>

              <div
                className="consultancy-card"
                style={{ marginTop: '28px', padding: '24px' }}
              >
                <ShieldCheck
                  size={22}
                  aria-hidden="true"
                  style={{ marginBottom: '12px' }}
                />

                <strong>Responsible academic support</strong>

                <p style={{ marginTop: '8px' }}>
                  Our role is to provide explanation, guidance, technical
                  insight, and research support. Clients remain responsible for
                  their own academic submissions and for following the
                  integrity requirements of their institution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="WHY PROJECTASSIGNMENTS"
              title="Research expertise with technical depth."
              body="Research methodology becomes particularly challenging when the study involves technical systems, programming, cybersecurity, data analysis, or complex applied problems."
            />

            <div className="expertise-grid" style={{ marginTop: '42px' }}>
              <article className="expertise-card">
                <div
                  className="icon-box"
                  aria-hidden="true"
                  style={{ marginBottom: '22px' }}
                >
                  <BookOpenCheck size={24} aria-hidden="true" />
                </div>

                <h3>Academic Understanding</h3>
                <p>
                  Methodological guidance grounded in the expectations of
                  postgraduate research, dissertations, theses, and applied
                  academic projects.
                </p>
              </article>

              <article className="expertise-card">
                <div
                  className="icon-box"
                  aria-hidden="true"
                  style={{ marginBottom: '22px' }}
                >
                  <Users size={24} aria-hidden="true" />
                </div>

                <h3>Research Context</h3>
                <p>
                  We consider the research question, objectives, discipline,
                  evidence requirements, and practical constraints before
                  recommending an approach.
                </p>
              </article>

              <article className="expertise-card">
                <div
                  className="icon-box"
                  aria-hidden="true"
                  style={{ marginBottom: '22px' }}
                >
                  <GitBranch size={24} aria-hidden="true" />
                </div>

                <h3>Technical Integration</h3>
                <p>
                  Technical research involving databases, programming,
                  cybersecurity, IT systems, or data analysis can require
                  methodological and technical decisions to be considered
                  together.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="COMMON QUESTIONS"
              title="Research methodology questions, answered."
              body="A few common questions about methodology, dissertation research, and methodological support."
            />

            <div style={{ marginTop: '40px' }}>
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="consultancy-card"
                  style={{
                    marginBottom: '14px',
                    padding: '22px 24px',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      color: 'var(--foreground)',
                      fontWeight: 700,
                    }}
                  >
                    {faq.question}
                  </summary>

                  <p style={{ marginTop: '14px' }}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="START WITH THE RESEARCH QUESTION"
              title="Need help choosing or explaining your methodology?"
              body="Tell us about your research question, programme, technical area, or dissertation requirements. We can help you understand the methodological options and determine a practical way forward."
            />

            <div style={{ marginTop: '28px' }}>
              <a href="/contact" className="button button-primary">
                Discuss your research
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(researchMethodologySchema),
        }}
      />
    </>
  )
}