'use client'

import { CTA, FAQ, Footer, Navbar, SectionHeading, ServicesGrid, TechnologyGrid, Testimonials, ValuesGrid } from '@/components/site'
import { motion } from 'framer-motion'
import { ArrowRight, Blocks, BotMessageSquare, BrainCircuit, CheckCircle2, FileText, TerminalSquare } from 'lucide-react'
import Link from 'next/link'

// --- Animated Professional Research Network Visual Component ---
function ProfessionalResearchScene() {
  // We removed the 'y' axis from the entrance variant to prevent it from fighting the infinite float animation
  const entranceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 20 } }
  }

  const floatTransition = {
    duration: 5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror" as const,
  }

  return (
    <motion.div 
      className="research-visual-container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.div className="visual-neural-ring" variants={entranceVariants} />

      {/* Central Core Node (Pulsing) */}
      <motion.div 
        className="research-node node-core"
        variants={entranceVariants}
        animate={{
          boxShadow: [
            "0 0 15px 1px rgba(0, 110, 255, 0.2)",
            "0 0 30px 4px rgba(0, 110, 255, 0.4)",
            "0 0 15px 1px rgba(0, 110, 255, 0.2)"
          ]
        }}
        transition={{ 
          boxShadow: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" } 
        }}
      >
        <BrainCircuit size={28} className="node-icon" />
        <span className="node-title">Research</span>
        <span className="node-subtitle">Rigorous Analysis</span>
      </motion.div>

      {/* Satellite Nodes (Floating) */}
      <motion.div 
        variants={entranceVariants} 
        animate={{ y: [0, -12, 0] }} 
        transition={floatTransition}
        className="research-node node-cyber"
      >
        <BotMessageSquare size={20} className="node-icon"/>
        <span>Cybersecurity</span>
      </motion.div>

      <motion.div 
        variants={entranceVariants} 
        animate={{ y: [0, 8, 0] }} 
        transition={{ ...floatTransition, delay: 0.5 }}
        className="research-node node-prog"
      >
        <TerminalSquare size={20} className="node-icon"/>
        <span>Programming</span>
      </motion.div>

      <motion.div 
        variants={entranceVariants} 
        animate={{ y: [0, -6, 0] }} 
        transition={{ ...floatTransition, duration: 6 }}
        className="research-node node-artefacts"
      >
        <Blocks size={20} className="node-icon"/>
        <span>Artefacts</span>
      </motion.div>
      
      <motion.div 
        variants={entranceVariants} 
        animate={{ y: [0, -10, 0] }} 
        transition={{ ...floatTransition, delay: 1 }}
        className="research-node node-thesis"
      >
        <FileText size={20} className="node-icon"/>
        <span>Thesis Support</span>
      </motion.div>

      <motion.span variants={entranceVariants} className="visual-support-label">TECHNICAL ACADEMIC SUPPORT // 01</motion.span>
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
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Animated Hero Section */}
        <motion.section 
          className="hero-section"
          initial="hidden"
          animate="show"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="container hero-grid">
            <motion.div className="hero-copy" layout>
              <motion.p variants={itemVariants} className="eyebrow">
                Technical academic & research consultancy
              </motion.p>
              <motion.h1 variants={itemVariants}>
                Make complex work <em>credible.</em>
              </motion.h1>
              <motion.p variants={itemVariants} className="hero-subtitle">
                ProjectAssignments helps students, researchers, and professionals move from difficult technical questions to clear, rigorous, and submission-ready work.
              </motion.p>
              <motion.div variants={itemVariants} className="hero-actions">
                <Link href="/contact" className="button button-primary">Start a conversation <ArrowRight size={17} /></Link>
                <Link href="#services" className="button button-ghost">Explore our expertise <ArrowRight size={17} /></Link>
              </motion.div>
              <motion.div variants={itemVariants} className="hero-proof">
                <span><CheckCircle2 size={16} /> Ethical guidance</span>
                <span><CheckCircle2 size={16} /> Technical depth</span>
                <span><CheckCircle2 size={16} /> Research clarity</span>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-visual">
              <ProfessionalResearchScene />
            </motion.div>
          </div>
        </motion.section>

        {/* Existing Lower Sections */}
        <section className="trust-strip">
          <div className="container trust-inner">
            <p>For technical work that deserves clarity, rigour, and academic integrity.</p>
            <div>
              <span>Cybersecurity</span>
              <span>Programming</span>
              <span>Research</span>
              <span>Postgraduate study</span>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <SectionHeading eyebrow="What we specialise in" title="Technical expertise for work that has to stand up." body="Bring us the brief, the research question, or the technical roadblock. We create structure, understanding, and useful artefacts while keeping your authorship at the centre." />
            <ServicesGrid />
          </div>
        </section>

        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <SectionHeading eyebrow="The technical toolkit" title="Technology should make understanding easier." body="We use the right methods and technical lenses for the real brief — not the trend of the moment." />
              <Link href="/technologies" className="text-link">Explore our technology approach <ArrowRight size={15} /></Link>
            </div>
            <TechnologyGrid />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Why ProjectAssignments" title="Technically fluent. Academically responsible. Clear about what comes next." />
            <ValuesGrid />
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <SectionHeading eyebrow="A simple process" title="Rigour, without the overwhelm." align="center" />
            <div className="process-grid">
              <article><span>01</span><h3>Frame the brief</h3><p>We clarify the assignment, research question, technical scope, and the standard your work needs to meet.</p></article>
              <article><span>02</span><h3>Work through it</h3><p>We unpack the concepts, methods, evidence, and structure through focused, collaborative guidance.</p></article>
              <article><span>03</span><h3>Strengthen the outcome</h3><p>You leave with clearer thinking, stronger artefacts, and confidence in your own final work.</p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="From people we support" title="Technical work feels lighter when it is understood." />
            <Testimonials />
          </div>
        </section>

        <section className="section section-tint">
          <div className="container faq-layout">
            <SectionHeading eyebrow="Questions, answered" title="A little more clarity." body="Still deciding if we are the right fit? Here are a few useful starting points." />
            <FAQ />
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}