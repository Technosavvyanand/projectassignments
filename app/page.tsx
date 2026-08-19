'use client'

import {
  CTA,
  FAQ,
  Footer,
  SectionHeading,
  ServicesGrid,
  TechnologyGrid,
  Testimonials,
  ValuesGrid
} from '@/components/site'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Blocks,
  BotMessageSquare,
  BrainCircuit,
  CheckCircle2,
  FileText,
  TerminalSquare
} from 'lucide-react'
import Link from 'next/link'

// --- Animated Professional Research Network Visual Component ---
function ProfessionalResearchScene() {
  const entranceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20
      }
    }
  }

  const floatTransition = {
    duration: 5,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const
  }

  return (
    <motion.div
      className="research-visual-container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.div
        className="visual-neural-ring"
        variants={entranceVariants}
      />

      {/* Central Core Node */}
      <motion.div
        className="research-node node-core"
        variants={entranceVariants}
        animate={{
          boxShadow: [
            '0 0 15px 1px rgba(0, 110, 255, 0.2)',
            '0 0 30px 4px rgba(0, 110, 255, 0.4)',
            '0 0 15px 1px rgba(0, 110, 255, 0.2)'
          ]
        }}
        transition={{
          boxShadow: {
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror'
          }
        }}
      >
        <BrainCircuit size={28} className="node-icon" />
        <span className="node-title">Research</span>
        <span className="node-subtitle">Rigorous Analysis</span>
      </motion.div>

      {/* Satellite Nodes */}
      <motion.div
        variants={entranceVariants}
        animate={{ y: [0, -12, 0] }}
        transition={floatTransition}
        className="research-node node-cyber"
      >
        <BotMessageSquare size={20} className="node-icon" />
        <span>Cybersecurity</span>
      </motion.div>

      <motion.div
        variants={entranceVariants}
        animate={{ y: [0, 8, 0] }}
        transition={{ ...floatTransition, delay: 0.5 }}
        className="research-node node-prog"
      >
        <TerminalSquare size={20} className="node-icon" />
        <span>Programming</span>
      </motion.div>

      <motion.div
        variants={entranceVariants}
        animate={{ y: [0, -6, 0] }}
        transition={{ ...floatTransition, duration: 6 }}
        className="research-node node-artefacts"
      >
        <Blocks size={20} className="node-icon" />
        <span>Artefacts</span>
      </motion.div>

      <motion.div
        variants={entranceVariants}
        animate={{ y: [0, -10, 0] }}
        transition={{ ...floatTransition, delay: 1 }}
        className="research-node node-thesis"
      >
        <FileText size={20} className="node-icon" />
        <span>Thesis Support</span>
      </motion.div>

      <motion.span
        variants={entranceVariants}
        className="visual-support-label"
      >
        ASSIGNMENTS • PROJECTS • RESEARCH • TECHNICAL SUPPORT
      </motion.span>
    </motion.div>
  )
}

// --- Full Home Page Component ---
export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  }

  return (
    <>
      <main>

        {/* =========================================================
            HERO
        ========================================================= */}
        <motion.section
          className="hero-section"
          initial="hidden"
          animate="show"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="container hero-grid">

            <motion.div className="hero-copy" layout>

              <motion.p
                variants={itemVariants}
                className="eyebrow"
              >
                Assignment Help • Project Support • Academic Assistance
              </motion.p>

              <motion.h1 variants={itemVariants}>
                Expert Academic Support for
                <em> Assignments, Projects & Research.</em>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="hero-subtitle"
              >
                ProjectAssignments provides structured academic assistance
                for university assignments, technical projects, research,
                dissertations and complex coursework. Get guidance across
                Programming, Cybersecurity, Data Science, Databases,
                Research Methods and other technical disciplines while
                keeping your own learning and academic authorship at the
                centre.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="hero-actions"
              >
                <Link
                  href="/contact"
                  className="button button-primary"
                >
                  Discuss Your Assignment
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/assignment-help"
                  className="button button-ghost"
                >
                  Explore Assignment Help
                  <ArrowRight size={17} />
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="hero-proof"
              >
                <span>
                  <CheckCircle2 size={16} />
                  Academic integrity
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Technical depth
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Research clarity
                </span>
              </motion.div>

            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hero-visual"
            >
              <ProfessionalResearchScene />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="hero-supporting-text"
            >
              Supporting students and researchers with assignments,
              academic projects, technical coursework, capstones,
              dissertations and research across a range of disciplines.
            </motion.p>

          </div>
        </motion.section>


        {/* =========================================================
            MAIN ASSIGNMENT & PROJECT HELP PILLAR
        ========================================================= */}
        <section className="section section-tint">
          <div className="container two-column">

            <div>
              <SectionHeading
                eyebrow="Assignment & Project Help"
                title="Academic assistance that goes beyond simply answering a question."
                body="University assignments and projects often involve much more than writing. They can require research, planning, programming, data analysis, technical implementation, documentation and critical evaluation. Our academic assistance is designed to help students understand those requirements and work through them systematically."
              />

              <p className="section-copy">
                Whether you are working on a programming assignment, a
                cybersecurity project, a data-mining task, a database
                implementation, a technical report or a postgraduate
                research project, the right guidance can make a complex
                brief much easier to approach.
              </p>

              <div className="hero-actions">
                <Link
                  href="/assignment-project-help"
                  className="button button-primary"
                >
                  Explore Assignment & Project Help
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="content-image-wrapper">
              <img
                src="/images/assignment-help-workflow.png"
                alt="Academic assignment help workflow showing requirements, research, planning, technical work, documentation, review and final submission"
                className="content-image"
                loading="lazy"
              />

              <p className="image-caption">
                A structured approach to understanding, researching,
                developing, documenting and reviewing academic work.
              </p>
            </div>

          </div>
        </section>


        {/* =========================================================
            TRUST STRIP
        ========================================================= */}
        <section className="trust-strip">
          <div className="container trust-inner">

            <p>
              From understanding the brief to strengthening the final
              academic outcome.
            </p>

            <div>
              <span>Assignments</span>
              <span>Academic Projects</span>
              <span>Programming</span>
              <span>Research</span>
              <span>Dissertations</span>
            </div>

          </div>
        </section>


        {/* =========================================================
            SERVICES
        ========================================================= */}
        <section id="services" className="section">
          <div className="container">

            <SectionHeading
              eyebrow="Academic assistance"
              title="Support for assignments, projects and research across technical disciplines."
              body="Bring us the assignment brief, project requirements, research question or technical roadblock. We help you understand the requirements, choose appropriate methods, work through technical challenges and strengthen your academic outcome."
            />

            <ServicesGrid />

          </div>
        </section>


        {/* =========================================================
            TECHNOLOGIES
        ========================================================= */}
        <section className="section section-tint">
          <div className="container two-column">

            <div>

              <SectionHeading
                eyebrow="Technical expertise"
                title="The technologies behind complex academic work."
                body="Many assignments and academic projects require practical work with programming languages, databases, machine-learning tools, cybersecurity technologies and specialised development environments. Our technology-focused resources help students understand these areas in depth."
              />

              <Link
                href="/technologies"
                className="text-link"
              >
                Explore our technology guides
                <ArrowRight size={15} />
              </Link>

            </div>

            <TechnologyGrid />

          </div>
        </section>


        {/* =========================================================
            WHY PROJECTASSIGNMENTS
        ========================================================= */}
        <section className="section">
          <div className="container">

            <SectionHeading
              eyebrow="Why ProjectAssignments"
              title="Technically fluent. Academically responsible. Focused on understanding."
              body="Good academic support should not leave students dependent on someone else to do their work. Our approach is centred around clarity, guidance, technical understanding and stronger independent work."
            />

            <ValuesGrid />

          </div>
        </section>


        {/* =========================================================
            PROCESS
        ========================================================= */}
        <section className="process-section">
          <div className="container">

            <SectionHeading
              eyebrow="A simple process"
              title="From assignment brief to confident final work."
              align="center"
            />

            <div className="process-grid">

              <article>
                <span>01</span>
                <h3>Understand the brief</h3>
                <p>
                  We clarify the assignment requirements, assessment
                  criteria, research question, technical scope and
                  expected academic outcome.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Research & work through it</h3>
                <p>
                  We unpack the concepts, methods, evidence, technical
                  requirements and structure through focused academic
                  guidance.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Review & strengthen</h3>
                <p>
                  We help identify gaps, improve clarity, review technical
                  work and strengthen the overall quality of your own
                  academic submission.
                </p>
              </article>

            </div>

          </div>
        </section>


        {/* =========================================================
            TESTIMONIALS
        ========================================================= */}
        <section className="section">
          <div className="container">

            <SectionHeading
              eyebrow="From people we support"
              title="Complex academic work feels lighter when it is understood."
            />

            <Testimonials />

          </div>
        </section>


        {/* =========================================================
            FAQ
        ========================================================= */}
        <section className="section section-tint">
          <div className="container faq-layout">

            <SectionHeading
              eyebrow="Questions, answered"
              title="A little more clarity."
              body="Still deciding if we are the right fit? Here are a few useful starting points."
            />

            <FAQ />

          </div>
        </section>


        {/* =========================================================
            CTA
        ========================================================= */}
        <CTA />

      </main>

      <Footer />
    </>
  )
}