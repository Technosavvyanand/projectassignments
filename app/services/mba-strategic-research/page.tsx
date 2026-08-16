import {
    BarChart3,
    BriefcaseBusiness,
    Building2,
    CheckCircle2,
    FileSearch,
    LineChart,
    Search,
    ShieldCheck,
    Target,
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
  title: 'MBA Strategic Research & Business Analysis | ProjectAssignments',
  description:
    'Specialized MBA research support covering strategic management, business analysis, market research, case studies, research methodology, data analysis, and evidence-based recommendations.',
  keywords: [
    'MBA research support',
    'MBA strategic research',
    'MBA dissertation support',
    'MBA business research',
    'strategic management research',
    'MBA case study support',
    'MBA research methodology',
    'business strategy analysis',
    'MBA data analysis',
    'MBA project guidance',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/mba-strategic-research',
  },
  openGraph: {
    title: 'MBA Strategic Research & Business Analysis',
    description:
      'Applied research and strategic analysis support for MBA projects, dissertations, case studies, and evidence-based business decision-making.',
    url: 'https://projectassignments.com/services/mba-strategic-research',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const supportAreas = [
  {
    icon: <Target size={24} aria-hidden="true" />,
    title: 'Strategic Management',
    description:
      'Analyse strategic choices, competitive positioning, organisational capabilities, growth options, and the factors influencing long-term business performance.',
  },
  {
    icon: <Search size={24} aria-hidden="true" />,
    title: 'Business Research',
    description:
      'Develop focused research questions, objectives, evidence strategies, and analytical approaches for applied MBA research projects and dissertations.',
  },
  {
    icon: <Building2 size={24} aria-hidden="true" />,
    title: 'Industry & Market Analysis',
    description:
      'Evaluate industries, markets, competitors, customers, external environments, and emerging trends using appropriate strategic frameworks and evidence.',
  },
  {
    icon: <FileSearch size={24} aria-hidden="true" />,
    title: 'Case Study Analysis',
    description:
      'Structure complex business cases around the central problem, relevant evidence, analytical frameworks, alternative courses of action, and defensible recommendations.',
  },
  {
    icon: <BarChart3 size={24} aria-hidden="true" />,
    title: 'Data & Performance Analysis',
    description:
      'Interpret quantitative and qualitative business evidence, survey results, performance indicators, financial information, and other decision-relevant data.',
  },
  {
    icon: <BriefcaseBusiness size={24} aria-hidden="true" />,
    title: 'Strategic Recommendations',
    description:
      'Translate research and analysis into practical, evidence-based recommendations while considering feasibility, risk, implementation, and organisational context.',
  },
]

const strategicProcess = [
  {
    number: '01',
    title: 'Define the Business Problem',
    text:
      'Clarify the strategic issue, research problem, decision context, objectives, stakeholders, and the questions the analysis needs to answer.',
  },
  {
    number: '02',
    title: 'Build the Evidence Base',
    text:
      'Identify relevant academic literature, industry evidence, organisational information, market data, and other credible sources required for the investigation.',
  },
  {
    number: '03',
    title: 'Select the Analytical Approach',
    text:
      'Choose frameworks, research methods, and analytical tools that fit the business problem rather than applying models mechanically.',
  },
  {
    number: '04',
    title: 'Analyse the Evidence',
    text:
      'Examine strategic, operational, financial, market, organisational, or research evidence to identify meaningful patterns and implications.',
  },
  {
    number: '05',
    title: 'Evaluate Strategic Options',
    text:
      'Compare realistic alternatives using evidence, organisational capabilities, constraints, risks, stakeholder considerations, and strategic objectives.',
  },
  {
    number: '06',
    title: 'Develop Recommendations',
    text:
      'Turn the analysis into defensible recommendations supported by evidence, implementation considerations, limitations, and appropriate measures of success.',
  },
]

const frameworks = [
  'SWOT Analysis',
  'PESTLE Analysis',
  'Porter’s Five Forces',
  'Value Chain Analysis',
  'VRIO Framework',
  'Ansoff Matrix',
  'BCG Matrix',
  'Stakeholder Analysis',
  'Balanced Scorecard',
  'Business Model Analysis',
]

const researchAreas = [
  {
    icon: <LineChart size={22} aria-hidden="true" />,
    title: 'Strategy & Competitive Advantage',
    text:
      'Competitive positioning, strategic capabilities, growth, diversification, innovation, and sustainable advantage.',
  },
  {
    icon: <Users size={22} aria-hidden="true" />,
    title: 'Leadership & Organisations',
    text:
      'Leadership, organisational behaviour, culture, change management, employee engagement, and organisational performance.',
  },
  {
    icon: <Target size={22} aria-hidden="true" />,
    title: 'Marketing & Market Strategy',
    text:
      'Customer behaviour, segmentation, positioning, market entry, branding, digital strategy, and competitive market analysis.',
  },
  {
    icon: <Building2 size={22} aria-hidden="true" />,
    title: 'Operations & Business Performance',
    text:
      'Operational strategy, supply chains, process improvement, performance management, quality, and organisational efficiency.',
  },
  {
    icon: <BarChart3 size={22} aria-hidden="true" />,
    title: 'Finance & Decision Analysis',
    text:
      'Business performance, investment reasoning, financial evidence, risk, strategic decision-making, and commercially relevant analysis.',
  },
  {
    icon: <BriefcaseBusiness size={22} aria-hidden="true" />,
    title: 'Entrepreneurship & Innovation',
    text:
      'Business models, entrepreneurship, innovation strategy, new ventures, digital transformation, and growth opportunities.',
  },
]

const audiences = [
  'MBA students completing strategic management projects',
  'Candidates developing MBA dissertations or capstone research',
  'Students working on complex business case studies',
  'Professionals conducting applied organisational research',
  'MBA candidates analysing markets, industries, or competitors',
  'Students developing evidence-based strategic recommendations',
]

const faqs = [
  {
    question: 'What does MBA strategic research support include?',
    answer:
      'Support can include research question development, literature review, research methodology, strategic analysis, market and industry research, case study analysis, quantitative or qualitative data analysis, evaluation of strategic alternatives, and development of evidence-based recommendations.',
  },
  {
    question: 'Can you help with an MBA dissertation or capstone project?',
    answer:
      'Yes. Support can cover individual stages of an MBA dissertation or capstone project, including topic refinement, research objectives, literature review, methodology, data analysis, findings, discussion, strategic implications, and overall project structure.',
  },
  {
    question: 'Can you help with strategic management frameworks?',
    answer:
      'Yes. We can provide guidance on frameworks such as SWOT, PESTLE, Porter’s Five Forces, VRIO, Value Chain Analysis, Ansoff Matrix, BCG Matrix, stakeholder analysis, and other strategic tools. The emphasis is on selecting and applying frameworks appropriately rather than inserting them mechanically.',
  },
  {
    question: 'Do you support MBA case study analysis?',
    answer:
      'Yes. We can help structure case study analysis around the central business problem, relevant evidence, appropriate frameworks, strategic alternatives, risks, stakeholder considerations, and defensible recommendations.',
  },
  {
    question: 'Can you help with quantitative and qualitative MBA research?',
    answer:
      'Yes. Support can cover quantitative, qualitative, or mixed-method approaches depending on the research question and programme requirements. This may include surveys, interviews, secondary data, statistical analysis, thematic analysis, and interpretation of findings.',
  },
  {
    question: 'Do you guarantee a particular MBA grade or distinction?',
    answer:
      'No. We provide research guidance, analytical support, technical understanding, and constructive feedback, but academic outcomes are determined by the relevant institution, instructor, examiner, or assessment process and cannot be guaranteed.',
  },
]

const mbaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/services/mba-strategic-research#webpage',
      url: 'https://projectassignments.com/services/mba-strategic-research',
      name: 'MBA Strategic Research & Business Analysis',
      description:
        'Specialized MBA research support covering strategic management, business analysis, market research, case studies, research methodology, data analysis, and evidence-based recommendations.',
      breadcrumb: {
        '@id':
          'https://projectassignments.com/services/mba-strategic-research#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/services/mba-strategic-research#breadcrumb',
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
          name: 'MBA Strategic Research',
          item:
            'https://projectassignments.com/services/mba-strategic-research',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'MBA Strategic Research & Business Analysis',
      description:
        'Applied research and strategic analysis guidance for MBA projects, dissertations, capstones, and business case studies.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments.com',
        url: 'https://projectassignments.com',
      },
      serviceType: 'MBA Research and Strategic Analysis Consultancy',
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

export default function MBAStrategicResearchPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="MBA STRATEGIC RESEARCH"
          title="Applied Business Research for Better Strategic Decisions."
          body="Specialized guidance for MBA candidates working on strategic management, business research, market and industry analysis, case studies, data analysis, and evidence-based recommendations."
        />

        {/* Introduction */}
        <section className="section">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="APPLIED BUSINESS RESEARCH"
                title="Strong MBA research connects academic thinking with real business problems."
                body="MBA projects require more than describing frameworks. The strongest work uses evidence, theory, data, and strategic reasoning to understand a business problem and develop defensible recommendations."
              />
            </div>

            <div>
              <p>
                ProjectAssignments provides structured research and analytical
                guidance for MBA candidates working through complex business
                problems, strategic decisions, dissertations, capstone
                projects, and case studies.
              </p>

              <p style={{ marginTop: '18px' }}>
                Support can range from defining a focused research problem to
                evaluating industries, analysing organisational evidence,
                selecting appropriate strategic frameworks, interpreting data,
                and developing recommendations.
              </p>

              <p style={{ marginTop: '18px' }}>
                Our emphasis is on the reasoning behind the analysis. A
                framework or model is useful only when it helps answer the
                actual business question.
              </p>
            </div>
          </div>
        </section>

        {/* Core support areas */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CORE SUPPORT AREAS"
              title="Research and analysis across the MBA decision landscape."
              body="MBA projects vary considerably in scope. Our support is modular, allowing candidates to focus on the research, analytical, or strategic areas most relevant to their project."
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

        {/* Strategic process */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="FROM PROBLEM TO RECOMMENDATION"
              title="A structured approach to strategic business research."
              body="Good strategic analysis begins with the problem rather than the framework. Evidence and analytical tools should progressively lead toward conclusions that can withstand critical evaluation."
            />

            <div className="approach-grid">
              {strategicProcess.map((stage) => (
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

        {/* Strategic frameworks */}
        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="STRATEGIC FRAMEWORKS"
                title="Use frameworks as analytical tools—not decorative diagrams."
                body="Strategic models can help organise complex evidence, but the framework must fit the problem being investigated."
              />
            </div>

            <div>
              <p>
                We support the appropriate selection, application, and
                interpretation of established strategic management frameworks.
              </p>

              <p style={{ marginTop: '18px' }}>
                Rather than mechanically applying several models to the same
                organisation, the goal is to understand what each framework
                contributes to the analysis, what evidence it requires, and
                where its limitations lie.
              </p>

              <div
                className="consultancy-card"
                style={{ marginTop: '28px', padding: '24px' }}
              >
                <strong>Common strategic frameworks</strong>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginTop: '16px',
                  }}
                >
                  {frameworks.map((framework) => (
                    <span
                      key={framework}
                      style={{
                        padding: '7px 10px',
                        borderRadius: '7px',
                        background: '#f3f6fa',
                        border: '1px solid #e4e9f0',
                        fontSize: '12px',
                        color: '#516176',
                      }}
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research areas */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="MBA RESEARCH AREAS"
              title="Support across major areas of business and management."
              body="Strategic research frequently crosses traditional business disciplines. We help candidates connect the relevant concepts and evidence to the problem they are investigating."
            />

            <div className="expertise-grid">
              {researchAreas.map((area) => (
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
                  <p>{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Research methodology */}
        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="RESEARCH METHODOLOGY"
                title="Business recommendations are only as credible as the evidence behind them."
                body="For MBA dissertations and applied research projects, methodological choices need to match the research question, available evidence, and intended conclusions."
              />
            </div>

            <div>
              <p>
                We provide guidance across quantitative, qualitative, and
                mixed-method business research where appropriate to the
                project.
              </p>

              <p style={{ marginTop: '18px' }}>
                This can include research design, primary and secondary data,
                sampling, surveys, interviews, questionnaire development,
                descriptive and inferential analysis, thematic analysis, and
                interpretation of findings.
              </p>

              <p style={{ marginTop: '18px' }}>
                We also help researchers distinguish between what their
                evidence actually demonstrates and what would be an
                unsupported assumption—a particularly important distinction
                when turning analysis into strategic recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="section">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="CASE STUDY ANALYSIS"
                title="Move beyond describing the company."
                body="A strong MBA case study identifies the decision problem, analyses the evidence, evaluates alternatives, and develops a justified course of action."
              />
            </div>

            <div>
              <p>
                Business case studies often contain large amounts of
                information, but not every fact is equally relevant. We help
                candidates identify the central strategic issue and organise
                the available evidence around it.
              </p>

              <p style={{ marginTop: '18px' }}>
                Analysis can consider the external environment, competitive
                position, internal capabilities, financial or operational
                evidence, stakeholders, risks, and implementation constraints
                before comparing realistic alternatives.
              </p>

              <p style={{ marginTop: '18px' }}>
                The resulting recommendation should follow logically from the
                analysis rather than appearing as an unsupported conclusion at
                the end of the report.
              </p>
            </div>
          </div>
        </section>

        {/* Who we support */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="WHO WE SUPPORT"
              title="Designed for demanding postgraduate business projects."
              body="MBA candidates may need support at very different stages—from understanding a case to completing an extended research project."
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
                title="Guidance that strengthens your understanding."
                body="Our role is to help candidates understand business problems, research methods, analytical frameworks, evidence, and strategic reasoning while respecting academic integrity."
              />
            </div>

            <div>
              <div
                className="consultancy-card"
                style={{ padding: '28px' }}
              >
                <ShieldCheck
                  size={30}
                  color="var(--accent)"
                  aria-hidden="true"
                />

                <h3 style={{ marginTop: '18px' }}>
                  Research support without academic misrepresentation
                </h3>

                <p style={{ marginTop: '12px' }}>
                  We provide structured guidance, research support, analytical
                  explanation, and constructive feedback intended to help
                  candidates develop stronger understanding and more rigorous
                  work.
                </p>

                <p style={{ marginTop: '16px' }}>
                  Clients remain responsible for following their
                  institution&apos;s academic integrity requirements and for
                  ensuring that submitted work complies with those
                  requirements.
                </p>

                <a
                  href="/policies#academic-integrity"
                  className="text-link"
                  style={{
                    display: 'inline-block',
                    marginTop: '18px',
                  }}
                >
                  Read our Academic Integrity Policy →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DBA cross-link */}
        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="DOCTORAL RESEARCH"
                title="Working beyond the MBA level?"
                body="Doctoral business research involves deeper methodological, theoretical, and original research requirements."
              />
            </div>

            <div>
              <p>
                For Doctor of Business Administration candidates, we provide
                dedicated support covering doctoral research design,
                literature development, conceptual and theoretical
                frameworks, advanced methodology, data analysis, and
                dissertation development.
              </p>

              <a
                href="/services/dba-doctoral-research"
                className="text-link"
                style={{
                  display: 'inline-block',
                  marginTop: '18px',
                }}
              >
                Explore DBA Doctoral Research Support →
              </a>
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
                  title="Questions about MBA research support."
                  body="Common questions about strategic research, dissertations, case studies, methodology, and business analysis."
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
          __html: JSON.stringify(mbaSchema),
        }}
      />
    </>
  )
}