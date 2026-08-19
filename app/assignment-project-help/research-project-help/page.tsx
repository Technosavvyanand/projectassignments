'use client'

import { motion } from 'framer-motion'
import {
    ArrowRight,
    BarChart3,
    BookOpen,
    BrainCircuit,
    CheckCircle2,
    FileSearch,
    FileText,
    FlaskConical,
    Lightbulb,
    Search,
} from 'lucide-react'
import Link from 'next/link'

export default function ResearchProjectHelpPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const floatTransition = {
    duration: 5,
    ease: 'easeInOut' as const,
    repeat: Infinity,
    repeatType: 'mirror' as const,
  }

  return (
    <>
      <main>
        {/* Hero */}
        <motion.section
          className="hero-section"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <div className="container hero-grid">
            <motion.div className="hero-copy" variants={itemVariants}>
              <p className="eyebrow">
                RESEARCH PROJECTS • LITERATURE REVIEW • METHODOLOGY • ACADEMIC GUIDANCE
              </p>

              <h1>
                Research Project Help That Starts With{' '}
                <em>the Right Question</em>
              </h1>

              <p className="hero-subtitle">
                A strong research project is more than a collection of
                sources and pages of writing. It needs a clear research
                question, a purposeful literature review, an appropriate
                methodology, meaningful analysis and a conclusion that
                actually answers the question.
              </p>

              <p className="hero-subtitle">
                ProjectAssignments provides structured academic guidance for
                research projects, dissertations, capstones and postgraduate
                research — helping you understand the research process,
                strengthen your reasoning and develop your own work
                responsibly.
              </p>

              <div className="hero-actions">
                <Link
                  href="/contact"
                  className="button button-primary"
                >
                  Discuss Your Research <ArrowRight size={17} />
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
                  <CheckCircle2 size={16} /> Research clarity
                </span>
                <span>
                  <CheckCircle2 size={16} /> Methodological guidance
                </span>
                <span>
                  <CheckCircle2 size={16} /> Academic integrity
                </span>
              </div>
            </motion.div>

            {/* Research-specific animated visual */}
            <motion.div
              className="hero-visual"
              variants={itemVariants}
            >
              <div className="research-visual-container">
                <motion.div
                  className="visual-neural-ring"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0.5, 0.9, 0.5],
                    scale: [0.96, 1.02, 0.96],
                  }}
                  transition={{
                    duration: 5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                />

                {/* Central Research Question */}
                <motion.div
                  className="research-node node-core"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      '0 0 15px 1px rgba(0, 110, 255, 0.18)',
                      '0 0 30px 4px rgba(0, 110, 255, 0.35)',
                      '0 0 15px 1px rgba(0, 110, 255, 0.18)',
                    ],
                  }}
                  transition={{
                    opacity: { duration: 0.8 },
                    scale: {
                      duration: 4,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    },
                    boxShadow: {
                      duration: 3,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    },
                  }}
                >
                  <BrainCircuit size={28} className="node-icon" />
                  <span className="node-title">Research Question</span>
                  <span className="node-subtitle">
                    The starting point
                  </span>
                </motion.div>

                {/* Literature Review */}
                <motion.div
                  className="research-node node-cyber"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.3 },
                    y: {
                      ...floatTransition,
                      delay: 0.4,
                    },
                  }}
                >
                  <BookOpen size={20} className="node-icon" />
                  <span>Literature Review</span>
                </motion.div>

                {/* Methodology */}
                <motion.div
                  className="research-node node-prog"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: [0, 8, 0] }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.5 },
                    y: {
                      ...floatTransition,
                      delay: 0.8,
                    },
                  }}
                >
                  <FlaskConical size={20} className="node-icon" />
                  <span>Methodology</span>
                </motion.div>

                {/* Data & Evidence */}
                <motion.div
                  className="research-node node-artefacts"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: [0, -7, 0] }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.7 },
                    y: {
                      ...floatTransition,
                      duration: 5.5,
                      delay: 0.3,
                    },
                  }}
                >
                  <BarChart3 size={20} className="node-icon" />
                  <span>Data & Evidence</span>
                </motion.div>

                {/* Analysis */}
                <motion.div
                  className="research-node node-thesis"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: [0, -9, 0] }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.9 },
                    y: {
                      ...floatTransition,
                      duration: 6,
                      delay: 1,
                    },
                  }}
                >
                  <Search size={20} className="node-icon" />
                  <span>Analysis</span>
                </motion.div>

                <motion.span
                  className="visual-support-label"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                >
                  QUESTION • EVIDENCE • METHOD • ANALYSIS
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="hero-supporting-text"
            >
              Supporting undergraduate, postgraduate and professional research
              across technical, business, social science and interdisciplinary
              subjects.
            </motion.p>
          </div>
        </motion.section>

        {/* Intro */}
        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <p className="eyebrow">MORE THAN A LITERATURE REVIEW</p>

              <h2>
                What a research project actually requires
              </h2>
            </div>

            <div>
              <p>
                Research projects require a logical connection between the
                problem being investigated, the existing body of knowledge,
                the research question and the methods used to investigate it.
              </p>

              <p>
                A literature review should do more than list papers. It should
                help establish what is already known, where the gaps or
                debates lie, and how the proposed research fits into that
                wider context
              </p>

              <p>
                Methodology then explains how the research question will be
                investigated and why the selected approach is appropriate.
                Results and discussion should ultimately connect back to the
                research question.
              </p>
            </div>
          </div>
        </section>

        {/* Research Support Areas */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">RESEARCH SUPPORT</p>

              <h2>
                From research questions to defensible conclusions.
              </h2>

              <p>
                Structured guidance across the major stages of an academic
                research project.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <FileSearch size={28} />

                <h3>Research Question & Objectives</h3>

                <p>
                  Clarify the research problem, refine the research question
                  and establish objectives that can realistically be addressed
                  within the project's scope.
                </p>
              </article>

              <article className="service-card">
                <BookOpen size={28} />

                <h3>Literature Review</h3>

                <p>
                  Develop a more structured approach to finding, evaluating,
                  organising and synthesising relevant academic literature.
                </p>
              </article>

              <article className="service-card">
                <FlaskConical size={28} />

                <h3>Research Methodology</h3>

                <p>
                  Understand qualitative, quantitative or mixed-method
                  approaches and the reasoning behind appropriate research
                  design and data collection choices.
                </p>
              </article>

              <article className="service-card">
                <BarChart3 size={28} />

                <h3>Data & Analysis</h3>

                <p>
                  Work through data organisation, analytical techniques,
                  interpretation and the relationship between evidence and
                  the research question.
                </p>
              </article>

              <article className="service-card">
                <Lightbulb size={28} />

                <h3>Critical Discussion</h3>

                <p>
                  Understand how findings can be interpreted in relation to
                  previous research, theoretical perspectives and the
                  limitations of the study.
                </p>
              </article>

              <article className="service-card">
                <FileText size={28} />

                <h3>Research Documentation</h3>

                <p>
                  Strengthen the structure and clarity of proposals, research
                  reports, dissertations, technical reports and supporting
                  documentation.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Research Process */}
        <section className="section section-tint">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">A CONNECTED PROCESS</p>

              <h2>
                Every stage should lead naturally to the next.
              </h2>

              <p>
                A research project becomes easier to manage when its major
                decisions are connected rather than treated as isolated
                chapters.
              </p>
            </div>

            <div className="process-grid">
              <article>
                <span>01</span>

                <h3>Frame the problem</h3>

                <p>
                  Define the problem, establish the context and identify what
                  the research is actually trying to investigate.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Review existing research</h3>

                <p>
                  Examine relevant literature to understand existing
                  knowledge, arguments, methods and potential research gaps.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Design the methodology</h3>

                <p>
                  Select and justify appropriate methods for collecting and
                  analysing the evidence needed to answer the research
                  question.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Analyse the evidence</h3>

                <p>
                  Work through the collected evidence and identify findings
                  that are relevant to the research objectives.
                </p>
              </article>

              <article>
                <span>05</span>

                <h3>Discuss the findings</h3>

                <p>
                  Interpret what the findings mean and consider how they relate
                  to existing research, theory and the limitations of the
                  study.
                </p>
              </article>

              <article>
                <span>06</span>

                <h3>Draw the conclusion</h3>

                <p>
                  Bring the argument together and clearly explain how the
                  research has addressed the original question and objectives.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Types of Research */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">DIFFERENT RESEARCH CONTEXTS</p>

              <h2>
                Research support across different academic projects.
              </h2>
            </div>

            <div className="two-column">
              <div>
                <h3>Research projects</h3>

                <ul>
                  <li>Undergraduate research projects</li>
                  <li>Postgraduate research projects</li>
                  <li>Capstone projects</li>
                  <li>Final-year projects</li>
                  <li>Technical research projects</li>
                  <li>Business and management research</li>
                </ul>
              </div>

              <div>
                <h3>Research documents</h3>

                <ul>
                  <li>Research proposals</li>
                  <li>Dissertations and theses</li>
                  <li>Research reports</li>
                  <li>Literature reviews</li>
                  <li>Methodology chapters</li>
                  <li>Research presentations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <p className="eyebrow">METHODOLOGY MATTERS</p>

              <h2>
                Choosing a method is only part of the job.
              </h2>
            </div>

            <div>
              <p>
                A methodology section should explain both what was done and
                why those choices were appropriate for the research question.
                It should connect logically with the literature review and
                with the results and discussion that follow.
              </p>

              <p>
                We can help you understand the reasoning behind methodological
                choices, identify what needs to be explained and work through
                the relationship between your research design, data collection
                and analysis.
              </p>

              <Link
                href="/assignment-project-help/data-science-assignment-help"
                className="text-link"
              >
                Need help with research data analysis?{' '}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Academic Integrity */}
        <section className="section">
          <div className="container two-column">
            <div>
              <p className="eyebrow">ACADEMICALLY RESPONSIBLE SUPPORT</p>

              <h2>
                Your research should remain your research.
              </h2>
            </div>

            <div>
              <p>
                Research projects often involve decisions that you may later
                need to explain to a supervisor, examiner or academic panel.
                Understanding those decisions is therefore as important as
                producing the final document.
              </p>

              <p>
                ProjectAssignments focuses on academic guidance, explanation,
                research mentoring, technical assistance, review and
                troubleshooting. The objective is to help you develop a
                stronger understanding of your own project rather than replace
                your authorship.
              </p>

              <Link
                href="/policies"
                className="text-link"
              >
                Read our academic integrity approach{' '}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="section section-tint">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">EXPLORE RELATED SUPPORT</p>

              <h2>
                Continue exploring assignment and project help.
              </h2>
            </div>

            <div className="services-grid">
              <Link
                href="/assignment-project-help/programming-assignment-help"
                className="service-card"
              >
                <BrainCircuit size={28} />

                <h3>Programming Assignment Help</h3>

                <p>
                  Guidance with programming, algorithms, software development
                  and technical coding assignments.
                </p>

                <span className="text-link">
                  Explore programming help <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                href="/assignment-project-help/data-science-assignment-help"
                className="service-card"
              >
                <BarChart3 size={28} />

                <h3>Data Science Assignment Help</h3>

                <p>
                  Guidance across Python, statistics, data analysis,
                  visualisation and machine learning.
                </p>

                <span className="text-link">
                  Explore data science help <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                href="/assignment-project-help/cybersecurity-assignment-help"
                className="service-card"
              >
                <Search size={28} />

                <h3>Cybersecurity Projects</h3>

                <p>
                  Structured guidance for cybersecurity assignments, security
                  analysis and technical research.
                </p>

                <span className="text-link">
                  Explore cybersecurity help <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container faq-layout">
            <div>
              <p className="eyebrow">QUESTIONS, ANSWERED</p>

              <h2>
                Research project help: common questions.
              </h2>

              <p>
                A few useful answers before you decide how you want to
                approach your research project.
              </p>
            </div>

            <div>
              <details>
                <summary>
                  What types of research projects can you get help with?
                </summary>

                <p>
                  Guidance can cover undergraduate and postgraduate research
                  projects, capstones, dissertations, theses, research
                  proposals, literature reviews, technical research and
                  business or management research.
                </p>
              </details>

              <details>
                <summary>
                  Can you help me formulate my research question?
                </summary>

                <p>
                  Yes. We can help you examine the scope of your proposed
                  topic, clarify what you are trying to investigate and
                  develop more focused research questions and objectives.
                </p>
              </details>

              <details>
                <summary>
                  Can you help with literature reviews?
                </summary>

                <p>
                  Yes. Support can include understanding search strategies,
                  organising sources, identifying themes, comparing studies
                  and developing a more critical rather than purely
                  descriptive review.
                </p>
              </details>

              <details>
                <summary>
                  Can you help me choose a research methodology?
                </summary>

                <p>
                  We can help you understand different methodological
                  approaches and the reasoning behind selecting methods that
                  are appropriate for your research question and project
                  scope.
                </p>
              </details>

              <details>
                <summary>
                  Can you analyse my research data?
                </summary>

                <p>
                  We can provide guidance on analytical approaches,
                  interpretation, troubleshooting and understanding results.
                  The goal is to help you understand the analysis and its
                  relationship to your research question.
                </p>
              </details>

              <details>
                <summary>
                  Will you write my complete research project for me?
                </summary>

                <p>
                  No. ProjectAssignments is designed around ethical academic
                  assistance. We provide guidance, explanation, mentoring,
                  review and technical support while keeping your authorship
                  and academic responsibility at the centre.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-tint">
          <div className="container">
            <div className="cta">
              <p className="eyebrow">READY TO START?</p>

              <h2>
                Bring your research question, proposal or project brief.
              </h2>

              <p>
                Tell us what you are researching, what stage you are at and
                where you are getting stuck. We can help you identify the
                next step and work through it systematically.
              </p>

              <Link
                href="/contact"
                className="button button-primary"
              >
                Discuss Your Research <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}