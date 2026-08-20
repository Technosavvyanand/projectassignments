'use client'

import {
  CTA,
  Footer,
  ServicesGrid,
  TechnologyGrid,
} from '@/components/site'

import { motion } from 'framer-motion'

import {
  ArrowRight,
  Blocks,
  BotMessageSquare,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  IndianRupee,
  ShieldCheck,
  TerminalSquare,
  UserRoundCheck,
} from 'lucide-react'

import Link from 'next/link'


/* =========================================================
   AMBIENT HERO BUBBLES
   ========================================================= */

function AmbientBubbles() {
  const bubbles = [
    {
      className: 'ambient-bubble bubble-1',
      size: 190,
      duration: 15,
      delay: 0,
    },
    {
      className: 'ambient-bubble bubble-2',
      size: 120,
      duration: 12,
      delay: 1.5,
    },
    {
      className: 'ambient-bubble bubble-3',
      size: 250,
      duration: 19,
      delay: 2,
    },
    {
      className: 'ambient-bubble bubble-4',
      size: 90,
      duration: 11,
      delay: 0.8,
    },
    {
      className: 'ambient-bubble bubble-5',
      size: 145,
      duration: 17,
      delay: 3,
    },
    {
      className: 'ambient-bubble bubble-6',
      size: 70,
      duration: 10,
      delay: 2.5,
    },
  ]

  const particles = [
    'particle-1',
    'particle-2',
    'particle-3',
    'particle-4',
    'particle-5',
    'particle-6',
    'particle-7',
    'particle-8',
    'particle-9',
    'particle-10',
    'particle-11',
    'particle-12',
  ]

  return (
    <div
      className="ambient-bubbles"
      aria-hidden="true"
    >
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.className}
          className={bubble.className}
          style={{
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            x: [0, 18, -12, 0],
            y: [0, -22, 12, 0],
            scale: [1, 1.04, 0.98, 1],
            opacity: [0.55, 0.75, 0.5, 0.55],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {particles.map((particle, index) => (
        <motion.span
          key={particle}
          className={`ambient-particle ${particle}`}
          animate={{
            y: [0, -12, 4, 0],
            x: [0, 5, -4, 0],
            opacity: [0.2, 0.7, 0.3, 0.2],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{
            duration: 5 + (index % 4) * 1.5,
            delay: index * 0.35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}


/* =========================================================
   ANIMATED HERO VISUAL
   ========================================================= */

function ProfessionalResearchScene() {

  const entranceVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },

    show: {
      opacity: 1,
      scale: 1,

      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
      },
    },
  }


  const floatTransition = {
    duration: 5,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const,
  }


  return (

    <motion.div
      className="research-visual-container"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        staggerChildren: 0.15,
      }}
    >

      {/* Neural / orbital ring */}

      <motion.div
        className="visual-neural-ring"
        variants={entranceVariants}
      />


      {/* =====================================================
          CENTRAL CORE
         ===================================================== */}

      <motion.div
        className="research-node node-core"
        variants={entranceVariants}

        animate={{
          boxShadow: [
            '0 0 15px 1px rgba(8, 127, 122, 0.18)',
            '0 0 30px 4px rgba(8, 127, 122, 0.35)',
            '0 0 15px 1px rgba(8, 127, 122, 0.18)',
          ],
        }}

        transition={{
          boxShadow: {
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          },
        }}
      >

        <BrainCircuit
          size={28}
          className="node-icon"
        />

        <span className="node-title">
          Research
        </span>

        <span className="node-subtitle">
          Rigorous Analysis
        </span>

      </motion.div>


      {/* =====================================================
          SATELLITE NODES
         ===================================================== */}

      <motion.div
        variants={entranceVariants}
        animate={{
          y: [0, -12, 0],
        }}
        transition={floatTransition}
        className="research-node node-cyber"
      >

        <BotMessageSquare
          size={20}
          className="node-icon"
        />

        <span>
          Cybersecurity
        </span>

      </motion.div>


      <motion.div
        variants={entranceVariants}
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          ...floatTransition,
          delay: 0.5,
        }}
        className="research-node node-prog"
      >

        <TerminalSquare
          size={20}
          className="node-icon"
        />

        <span>
          Programming
        </span>

      </motion.div>


      <motion.div
        variants={entranceVariants}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          ...floatTransition,
          duration: 6,
        }}
        className="research-node node-artefacts"
      >

        <Blocks
          size={20}
          className="node-icon"
        />

        <span>
          Artefacts
        </span>

      </motion.div>


      <motion.div
        variants={entranceVariants}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          ...floatTransition,
          delay: 1,
        }}
        className="research-node node-thesis"
      >

        <FileText
          size={20}
          className="node-icon"
        />

        <span>
          Thesis Support
        </span>

      </motion.div>


      {/* Supporting label */}

      <motion.span
        variants={entranceVariants}
        className="visual-support-label"
      >
        ASSIGNMENTS • PROJECTS • RESEARCH • TECHNICAL SUPPORT
      </motion.span>

    </motion.div>
  )
}


/* =========================================================
   WHAT SETS US APART
   ========================================================= */

const uspCards = [
  {
    icon: <Clock3 />,
    title: '24×7 Round-the-Clock Support',
    text: 'Academic support when you need it, including evenings, weekends and urgent deadlines.',
  },

  {
    icon: <FileCheck2 />,
    title: 'Free Revisions & Rework*',
    text: 'Need clarification or changes? Eligible work can be revised and refined without additional revision charges.',
  },

  {
    icon: <UserRoundCheck />,
    title: 'Qualified Subject Experts',
    text: 'Get guidance from experienced professionals with subject-specific technical and academic expertise.',
  },

  {
    icon: <IndianRupee />,
    title: 'Premium Yet Affordable',
    text: 'High-quality academic and technical support designed to remain accessible to students and researchers.',
  },

  {
    icon: <ShieldCheck />,
    title: 'Plagiarism & AI-Free Work',
    text: 'Original, responsibly prepared work with a strong focus on academic integrity and authentic understanding.',
  },
]


function WhatSetsUsApart() {

  return (

    <section className="section usp-section">

      <div className="container">

        <div className="usp-heading">

          <p className="eyebrow">
            Why ProjectAssignments
          </p>

          <h2>
            What sets us apart?
          </h2>

          <p>
            Thoughtful academic support built around
            quality, expertise, accessibility and integrity.
          </p>

        </div>


        <div className="usp-grid">

          {uspCards.map((usp, index) => (

            <motion.article
              key={usp.title}
              className="usp-card"
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -4,
              }}
            >

              <div className="usp-icon">
                {usp.icon}
              </div>

              <h3>
                {usp.title}
              </h3>

              <p>
                {usp.text}
              </p>

            </motion.article>

          ))}

        </div>


        <p className="usp-note">
          * Revision/rework terms may vary depending on the
          nature and scope of the service.
        </p>

      </div>

    </section>
  )
}


/* =========================================================
   SIMPLE ACADEMIC SUPPORT INTRO
   ========================================================= */

function AcademicSupportIntro() {

  return (

    <section className="section section-tint">

      <div className="container homepage-intro">

        <div>

          <p className="eyebrow">
            Academic Support
          </p>

          <h2>
            Guidance for assignments,
            projects & research.
          </h2>

        </div>


        <div>

          <p>
            From technical assignments and academic projects
            to research and dissertations, get focused guidance
            from people who understand the subject.
          </p>

          <Link
            href="/assignment-project-help"
            className="text-link"
          >
            Explore Assignment & Project Help
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>

    </section>
  )
}


/* =========================================================
   MAIN HOME PAGE
   ========================================================= */

export default function Page() {

  const containerVariants = {

    hidden: {
      opacity: 0,
    },

    show: {

      opacity: 1,

      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },

    },

  }


  const itemVariants = {

    hidden: {
      opacity: 0,
      y: 15,
    },

    show: {

      opacity: 1,
      y: 0,

      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },

    },

  }


  return (
    <>

      <main>


        {/* =====================================================
            HERO
           ===================================================== */}

        <motion.section
          className="hero-section"
          initial="hidden"
          animate="show"
          variants={containerVariants}
          viewport={{
            once: true,
          }}
        >

          {/* Ambient floating light bubbles */}

          <AmbientBubbles />


          <div className="container hero-grid">


            {/* HERO COPY */}

            <motion.div
              className="hero-copy"
              layout
            >

              <motion.p
                variants={itemVariants}
                className="eyebrow"
              >
                Academic Guidance • Better Results
              </motion.p>


              <motion.h1
                variants={itemVariants}
              >
                Expert support for
                <em>
                  {' '}assignments, projects & research.
                </em>
              </motion.h1>


              <motion.p
                variants={itemVariants}
                className="hero-subtitle"
              >
                Clear, expert guidance for complex
                academic and technical work.
              </motion.p>


              {/* HERO ACTIONS */}

              <motion.div
                variants={itemVariants}
                className="hero-actions"
              >

                <Link
                  href="/contact"
                  className="button button-primary"
                >
                  Get Guidance
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


              {/* HERO TRUST POINTS */}

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
                  Subject expertise
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Technical depth
                </span>

              </motion.div>

            </motion.div>


            {/* HERO ANIMATION */}

            <motion.div
              variants={itemVariants}
              className="hero-visual"
            >

              <ProfessionalResearchScene />

            </motion.div>

          </div>

        </motion.section>


        {/* =====================================================
            QUICK INTRO
           ===================================================== */}

        <AcademicSupportIntro />


        {/* =====================================================
            WHAT SETS US APART
           ===================================================== */}

        <WhatSetsUsApart />


        {/* =====================================================
            SERVICES
           ===================================================== */}

        <section
          id="services"
          className="section homepage-services"
        >

          <div className="container">

            <div className="homepage-section-heading">

              <div>

                <p className="eyebrow">
                  What we help with
                </p>

                <h2>
                  Academic support,
                  without the noise.
                </h2>

              </div>


              <Link
                href="/services"
                className="text-link"
              >
                View all services
                <ArrowRight size={15} />
              </Link>

            </div>


            <ServicesGrid />

          </div>

        </section>


        {/* =====================================================
            TECHNOLOGIES
           ===================================================== */}

        <section
          className="section section-tint homepage-technologies"
        >

          <div className="container">


            <div className="homepage-section-heading">

              <div>

                <p className="eyebrow">
                  Technical expertise
                </p>

                <h2>
                  Built for technical
                  academic work.
                </h2>

              </div>


              <Link
                href="/technologies"
                className="text-link"
              >
                Explore technologies
                <ArrowRight size={15} />
              </Link>

            </div>


            <TechnologyGrid />

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
           ===================================================== */}

        <CTA />

      </main>


      <Footer />

    </>
  )
}