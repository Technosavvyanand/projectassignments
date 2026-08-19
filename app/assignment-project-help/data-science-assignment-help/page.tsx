import { ArrowRight, BarChart3, BrainCircuit, CheckCircle2, Code2, Database, LineChart } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Data Science Assignment Help | Python, Statistics & Machine Learning',
  description:
    'Get structured data science assignment help with Python, R, statistics, data analysis, visualisation, machine learning and research projects. Understand the methodology, analyse your data and strengthen your academic work.',
  keywords: [
    'data science assignment help',
    'data science project help',
    'Python assignment help',
    'R programming assignment help',
    'statistics assignment help',
    'machine learning assignment help',
    'data analysis assignment help',
    'data visualisation assignment help',
    'data science project guidance',
  ],
  alternates: {
    canonical: '/assignment-project-help/data-science-assignment-help',
  },
  openGraph: {
    title: 'Data Science Assignment Help | ProjectAssignments',
    description:
      'Structured academic guidance for data science assignments and projects covering Python, statistics, data analysis, visualisation and machine learning.',
    url: '/assignment-project-help/data-science-assignment-help',
    type: 'article',
  },
}

const supportAreas = [
  {
    icon: Code2,
    title: 'Python & R Programming',
    body:
      'Understand the programming logic behind data preparation, analysis, modelling and visualisation using Python, R and relevant libraries.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis & Statistics',
    body:
      'Work through descriptive statistics, exploratory analysis, hypothesis testing, correlations, regression and other analytical techniques.',
  },
  {
    icon: LineChart,
    title: 'Data Visualisation',
    body:
      'Choose appropriate charts, interpret patterns and communicate analytical findings clearly rather than simply producing attractive graphs.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    body:
      'Understand supervised and unsupervised learning concepts, model selection, evaluation, feature preparation and interpretation.',
  },
  {
    icon: Database,
    title: 'Data Preparation',
    body:
      'Get guidance on cleaning, transforming, structuring and preparing datasets before applying statistical or machine-learning techniques.',
  },
  {
    icon: CheckCircle2,
    title: 'Results & Interpretation',
    body:
      'Learn how to explain model outputs, statistical findings, visualisations and limitations in an academically appropriate way.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Understand the brief',
    body:
      'We first clarify the assignment question, dataset, learning outcomes, required tools and assessment criteria.',
  },
  {
    number: '02',
    title: 'Plan the analysis',
    body:
      'The analytical approach is broken into manageable stages, from data preparation and exploration to modelling and evaluation.',
  },
  {
    number: '03',
    title: 'Work through the data',
    body:
      'You receive structured guidance on the methods, code, statistical techniques and analytical decisions relevant to the task.',
  },
  {
    number: '04',
    title: 'Interpret the findings',
    body:
      'Results are examined in context so that you understand what the numbers, graphs and model outputs actually mean.',
  },
  {
    number: '05',
    title: 'Document the work',
    body:
      'We help you organise methodology, results, discussion, references and technical explanations into a coherent academic structure.',
  },
  {
    number: '06',
    title: 'Review & refine',
    body:
      'The completed work can be reviewed for clarity, logic, technical consistency and alignment with the assignment requirements.',
  },
]

const faqs = [
  {
    question: 'What types of data science assignments can you help with?',
    answer:
      'We can provide academic guidance across data analysis, statistics, Python and R programming, data visualisation, machine learning, exploratory data analysis, predictive modelling and data-driven research projects.',
  },
  {
    question: 'Can you help me understand Python or R code?',
    answer:
      'Yes. The focus is on helping you understand what the code does, why a particular approach is being used, how errors can be investigated and how the methodology relates to your assignment requirements.',
  },
  {
    question: 'Can you help with statistical analysis?',
    answer:
      'Yes. Guidance can cover topics such as descriptive statistics, probability, hypothesis testing, correlation, regression and interpretation of statistical results, depending on the requirements of your course.',
  },
  {
    question: 'Can you help with machine learning projects?',
    answer:
      'Yes. We can help you understand machine-learning workflows, including data preparation, feature selection, model selection, training, evaluation and interpretation.',
  },
  {
    question: 'Will you complete and submit my assignment for me?',
    answer:
      'No. ProjectAssignments is designed around academic assistance and guidance. The objective is to help you understand the concepts, methods and technical work so that you can develop and submit your own work responsibly.',
  },
  {
    question: 'Can you review my existing data science work?',
    answer:
      'Yes. Existing code, analysis, visualisations and written explanations can be reviewed to identify technical issues, unclear reasoning, inconsistencies or areas that need strengthening.',
  },
]

export default function DataScienceAssignmentHelpPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              DATA SCIENCE • PYTHON • STATISTICS • MACHINE LEARNING
            </p>

            <h1>
              Data Science Assignment Help That Starts With{' '}
              <em>Understanding the Data</em>
            </h1>

            <p className="hero-subtitle">
              Data science assignments are rarely just about writing code.
              They require you to understand a dataset, select appropriate
              analytical methods, interpret results and explain why your
              approach makes sense.
            </p>

            <p className="hero-subtitle">
              ProjectAssignments provides structured academic guidance across
              Python, R, statistics, data analysis, visualisation and machine
              learning so you can work through complex data science tasks with
              greater clarity and confidence.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Discuss Your Requirements <ArrowRight size={17} />
              </Link>

              <Link
                href="/assignment-project-help"
                className="button button-ghost"
              >
                Explore Assignment Help <ArrowRight size={17} />
              </Link>
            </div>

            <div className="hero-proof">
              <span>
                <CheckCircle2 size={16} /> Structured guidance
              </span>
              <span>
                <CheckCircle2 size={16} /> Technical depth
              </span>
              <span>
                <CheckCircle2 size={16} /> Academic integrity
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="research-visual-container">
              <div className="visual-neural-ring" />

              <div className="research-node node-core">
                <BarChart3 size={28} className="node-icon" />
                <span className="node-title">Data Science</span>
                <span className="node-subtitle">Analysis & Insight</span>
              </div>

              <div className="research-node node-cyber">
                <Code2 size={20} className="node-icon" />
                <span>Python / R</span>
              </div>

              <div className="research-node node-prog">
                <BarChart3 size={20} className="node-icon" />
                <span>Statistics</span>
              </div>

              <div className="research-node node-artefacts">
                <Database size={20} className="node-icon" />
                <span>Data</span>
              </div>

              <div className="research-node node-thesis">
                <BrainCircuit size={20} className="node-icon" />
                <span>Machine Learning</span>
              </div>

              <span className="visual-support-label">
                DATA • ANALYSIS • MODELLING • INTERPRETATION
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section section-tint">
        <div className="container two-column">
          <div>
            <p className="eyebrow">MORE THAN WRITING CODE</p>

            <h2>
              What a data science assignment actually requires
            </h2>
          </div>

          <div>
            <p>
              A strong data science assignment connects the question being
              asked with the data, the analytical method and the resulting
              interpretation. Simply running a Python notebook or generating a
              machine-learning model is not enough.
            </p>

            <p>
              You need to understand why the dataset is being prepared in a
              particular way, why a statistical or machine-learning method is
              appropriate, what the results indicate and what limitations
              should be acknowledged.
            </p>

            <p>
              Our role is to help you work through those decisions
              systematically and develop a clearer understanding of the
              technical and academic reasoning behind your work.
            </p>
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">DATA SCIENCE SUPPORT</p>
            <h2>From raw datasets to meaningful findings.</h2>
            <p>
              Get focused guidance across the technical and analytical stages
              of your assignment or project.
            </p>
          </div>

          <div className="services-grid">
            {supportAreas.map((area) => {
              const Icon = area.icon

              return (
                <article className="service-card" key={area.title}>
                  <Icon size={28} />

                  <h3>{area.title}</h3>

                  <p>{area.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">A STRUCTURED APPROACH</p>
            <h2>
              How we approach data science assignment guidance
            </h2>
            <p>
              A clear workflow helps prevent the common problem of having
              technically correct code without a clear analytical story.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical areas */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">COMMON TECHNICAL AREAS</p>
            <h2>What your data science project may involve.</h2>
          </div>

          <div className="two-column">
            <div>
              <h3>Programming & analysis</h3>

              <ul>
                <li>Python programming for data analysis</li>
                <li>R programming and statistical analysis</li>
                <li>NumPy and pandas workflows</li>
                <li>Data cleaning and transformation</li>
                <li>Exploratory data analysis</li>
                <li>Statistical analysis and interpretation</li>
              </ul>
            </div>

            <div>
              <h3>Modelling & visualisation</h3>

              <ul>
                <li>Data visualisation and chart selection</li>
                <li>Regression and predictive modelling</li>
                <li>Classification and clustering</li>
                <li>Machine-learning workflows</li>
                <li>Model evaluation and comparison</li>
                <li>Results interpretation and discussion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic integrity */}
      <section className="section section-tint">
        <div className="container two-column">
          <div>
            <p className="eyebrow">ACADEMICALLY RESPONSIBLE SUPPORT</p>

            <h2>
              The goal is understanding, not replacing your work.
            </h2>
          </div>

          <div>
            <p>
              Data science assignments can become particularly difficult when
              the technical implementation is only one part of the assessment.
              You may also need to explain your methodology, justify your
              decisions and interpret the results independently.
            </p>

            <p>
              That is why our approach focuses on explanation, mentoring,
              troubleshooting, review and structured guidance. You remain
              responsible for your academic submission and develop a clearer
              understanding of the work behind it.
            </p>

            <Link
              href="/policies"
              className="text-link"
            >
              Read our academic integrity approach <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">EXPLORE RELATED SUPPORT</p>
            <h2>More assignment and project guidance.</h2>
          </div>

          <div className="services-grid">
            <Link
              href="/assignment-project-help/programming-assignment-help"
              className="service-card"
            >
              <Code2 size={28} />
              <h3>Programming Assignment Help</h3>
              <p>
                Explore guidance for programming, algorithms, software
                development and technical coding assignments.
              </p>
              <span className="text-link">
                Explore programming help <ArrowRight size={15} />
              </span>
            </Link>

            <Link
              href="/assignment-project-help/database-assignment-help"
              className="service-card"
            >
              <Database size={28} />
              <h3>Database & SQL Projects</h3>
              <p>
                Get guidance with database design, SQL, queries, data
                modelling and database-related academic projects.
              </p>
              <span className="text-link">
                Explore database help <ArrowRight size={15} />
              </span>
            </Link>

            <Link
              href="/assignment-project-help/cybersecurity-assignment-help"
              className="service-card"
            >
              <BrainCircuit size={28} />
              <h3>Cybersecurity Projects</h3>
              <p>
                Explore structured guidance for cybersecurity assignments,
                security analysis and technical research.
              </p>
              <span className="text-link">
                Explore cybersecurity help <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-tint">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">QUESTIONS, ANSWERED</p>
            <h2>Data science assignment help: common questions.</h2>
          </div>

          <div>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <p className="eyebrow">READY TO GET STARTED?</p>

            <h2>
              Bring your dataset, brief or analytical problem.
            </h2>

            <p>
              Tell us what you are working on and where you are stuck. We can
              help you understand the requirements, plan the analysis and work
              through the technical challenges.
            </p>

            <Link href="/contact" className="button button-primary">
              Discuss Your Requirements <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}