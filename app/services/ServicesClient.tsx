'use client'

import React, { useState } from 'react'

import {
  CTA,
  Footer,
  PageHero,
  SectionHeading,
} from '@/components/site'

// ==========================================
// CONTACT CONFIGURATION
// Change this single value when transitioning
// from temporary to business WhatsApp number.
//
// Format:
// Country code + number without '+' or dashes
// Example: '15551234567'
// ==========================================
const CONTACT_CONFIG = {
  whatsappNumber: '15551234567',
  email: 'support@projectassignments.com',
}

const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`
}

interface ServicePillar {
  id: string
  badge: string
  title: string
  subtitle: string
  description: string
  consultingAreas: string[]
  toolsTech: string[]
  hubUrl: string
  icon: React.ReactNode
}

interface FAQItem {
  question: string
  answer: string
}

export default function ServicesClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  // ==========================================
  // Structured JSON-LD Schema
  // ==========================================
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Academic & Technical Project Consultancy',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'ProjectAssignments.com',
      url: 'https://projectassignments.com',
    },
    areaServed: [
      'United States',
      'United Arab Emirates',
      'Saudi Arabia',
      'Qatar',
      'Kuwait',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Specialized Academic Consultancy',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cybersecurity & Information Security Consultancy',
            url: 'https://projectassignments.com/services#cybersecurity',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Systems & Software Engineering Advisory',
            url: 'https://projectassignments.com/services#it-software-engineering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DBA Research & Doctoral Methodology Consulting',
            url: 'https://projectassignments.com/services#dba-doctoral-research',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MBA Strategic Research & Business Analysis Guidance',
            url: 'https://projectassignments.com/services#mba-strategic-research',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Research Methodology Consulting',
            url: 'https://projectassignments.com/services/research-methodology',
          },
        },
      ],
    },
  }

  // ==========================================
  // Service Pillars
  // ==========================================
  const servicePillars: ServicePillar[] = [
    {
      id: 'cybersecurity',
      badge: 'Technical Security',
      title: 'Cybersecurity & Information Assurance',
      subtitle:
        'Hands-on lab setup guidance, vulnerability assessment review, and security framework compliance.',
      description:
        'Structured technical advisory for security students and working professionals. We provide step-by-step guidance on penetration testing methodologies, network packet diagnostic interpretation, and alignment with industry frameworks.',
      consultingAreas: [
        'Vulnerability Assessment & Penetration Testing Review',
        'NIST SP 800-53 / ISO 27001 Mapping Guidance',
        'SIEM Diagnostics & Wireshark Analysis Walkthroughs',
        'Cryptographic Logic & Security Scripting Mentorship',
        'Threat Modeling (STRIDE) & Architectural Risk Reviews',
      ],
      toolsTech: [
        'Kali Linux',
        'Wireshark',
        'Metasploit',
        'Nmap',
        'Burp Suite',
        'Python',
        'Splunk',
      ],
      hubUrl: '/services/cybersecurity',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: 'it-software-engineering',
      badge: 'Systems & Architecture',
      title: 'IT Systems & Software Engineering',
      subtitle:
        'Architecture design reviews, full-stack code reviews, and cloud deployment advisory.',
      description:
        'Technical mentorship for IT Capstone and software development projects. We assist in structuring maintainable system architectures, debugging deployment scripts, and documenting SDLC workflows.',
      consultingAreas: [
        'Cloud Architecture Review (AWS, Azure, GCP)',
        'Containerization & DevOps Pipeline Troubleshooting',
        'Database Design & SQL Optimization Mentorship',
        'API Integration & Full-Stack Code Architecture Reviews',
        'System SRS, SDLC Specifications & Diagramming Guidance',
      ],
      toolsTech: [
        'Docker',
        'AWS',
        'React',
        'Node.js',
        'Python',
        'PostgreSQL',
        'Terraform',
      ],
      hubUrl: '/services/it-software-engineering',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: 'dba-doctoral-research',
      badge: 'Doctoral Methodology',
      title: 'DBA & Doctoral Research Consulting',
      subtitle:
        'Methodological precision, statistical modeling, and dissertation structure guidance.',
      description:
        'High-level research consulting for executive doctoral candidates. We assist in refining theoretical frameworks, designing robust quantitative or qualitative methodologies, and preparing for committee defense.',
      consultingAreas: [
        'Problem Statement & Conceptual Framework Refinement',
        'Quantitative Data Modeling (SPSS, SmartPLS, R) Guidance',
        'Qualitative Thematic Analysis (NVivo) Review',
        'Literature Review Structure & Synthesis Support',
        'Committee Review Response & Defense Preparation',
      ],
      toolsTech: ['SPSS', 'SmartPLS 4', 'R', 'NVivo', 'AMOS', 'LaTeX'],
      hubUrl: '/services/dba-doctoral-research',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
    {
      id: 'mba-strategic-research',
      badge: 'Executive Business',
      title: 'MBA & Strategic Research Guidance',
      subtitle:
        'Business analysis framework support, financial modeling review, and case study research.',
      description:
        'Consultancy tailored to business professionals balancing executive responsibilities with academic research. We advise on strategic management frameworks, valuation modeling, and market analysis.',
      consultingAreas: [
        'Strategic Management & Case Analysis Frameworks',
        'Financial Modeling & DCF Valuation Logic Review',
        'Market Dynamics & Consumer Behavior Research Strategy',
        'Supply Chain Optimization & Operations Analysis',
        'Executive Presentation & Data Visualization Review',
      ],
      toolsTech: ['Excel Modeling', 'Tableau', 'PowerBI', 'Statistica'],
      hubUrl: '/services/mba-strategic-research',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ]

  // ==========================================
  // FAQs
  // ==========================================
  const faqs: FAQItem[] = [
    {
      question: 'What is the nature of your project and research support?',
      answer:
        'We provide technical consulting, code and architecture review, research methodology guidance, and editorial feedback. Our goal is to help you understand complex technical concepts, resolve implementation roadblocks, and structure your research according to institutional rubrics.',
    },
    {
      question: 'How do you align with US and Gulf (GCC) university expectations?',
      answer:
        'Our consultants are familiar with standard academic formats used in both regions—including APA 7th edition, IEEE documentation, and standard doctoral methodology structures commonly required by institutions across North America and the GCC.',
    },
    {
      question: 'Can I request guidance for a specific part of a project or dissertation?',
      answer:
        'Yes. Our engagement model is modular. You can seek targeted assistance for specific challenges, such as building a quantitative statistical model in SPSS, reviewing a cloud network configuration, or structuring a literature review.',
    },
    {
      question: 'How do you protect client confidentiality?',
      answer:
        'All project briefs, data, and communications are strictly confidential. We maintain secure channels and respect privacy requirements, which is particularly critical for executive candidates and industry professionals.',
    },
  ]

  return (
    <>
      <main>
        {/* ==========================================
            Page Hero
            ========================================== */}
        <PageHero
          eyebrow="ACADEMIC & TECHNICAL CONSULTANCY"
          title="Specialized Guidance for High-Stakes Technical & Doctoral Projects."
          body="Structured technical advisory, code review, and research methodology consulting designed for Cybersecurity, IT Systems, DBA, and Executive MBA candidates in US and Gulf markets."
        />

        {/* ==========================================
            Breadcrumb
            ========================================== */}
        <section
          style={{
            paddingTop: '20px',
            paddingBottom: '0',
          }}
        >
          <div className="container">
            <nav
              aria-label="Breadcrumb"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: 'var(--muted-foreground)',
              }}
            >
              <a href="/" style={{ color: 'inherit' }}>
                Home
              </a>

              <span aria-hidden="true">/</span>

              <span
                style={{
                  fontWeight: 700,
                  color: 'var(--foreground)',
                }}
              >
                Services
              </span>
            </nav>
          </div>
        </section>

        {/* ==========================================
            Quality & Focus Pillars
            ========================================== */}
        <section className="section">
          <div className="container">
            <div
              className="why-grid"
              style={{
                gridTemplateColumns:
                  'repeat(4, minmax(0, 1fr))',
              }}
            >
              <article className="why-card">
                <h3>Originality Focused</h3>
                <p>Rigorous quality reviews</p>
              </article>

              <article className="why-card">
                <h3>Domain Experts</h3>
                <p>Experienced technical advisors</p>
              </article>

              <article className="why-card">
                <h3>US & GCC Focus</h3>
                <p>Regional rubric alignment</p>
              </article>

              <article className="why-card">
                <h3>Responsive Support</h3>
                <p>Direct WhatsApp consultations</p>
              </article>
            </div>
          </div>
        </section>

        {/* ==========================================
            Core Consultancy Domains
            ========================================== */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CORE CONSULTANCY DOMAINS"
              title="Technical and research guidance where it matters."
              body="Select a core domain to explore dedicated specialized topics."
            />

            <div
              className="expertise-grid"
              style={{
                marginTop: '40px',
                gridTemplateColumns:
                  'repeat(2, minmax(0, 1fr))',
              }}
            >
              {servicePillars.map((pillar) => (
                <article
                  key={pillar.id}
                  id={pillar.id}
                  className="consultancy-card"
                  style={{
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    scrollMarginTop: '100px',
                  }}
                >
                  <div>
                    {/* Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        marginBottom: '22px',
                      }}
                    >
                      <div
                        className="icon-box"
                        aria-hidden="true"
                        style={{
                          marginBottom: 0,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {pillar.icon}
                      </div>

                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '6px 10px',
                          borderRadius: '8px',
                          background: 'var(--surface-muted)',
                          border:
                            '1px solid var(--border)',
                          color: 'var(--muted-foreground)',
                          fontSize: '12px',
                          fontWeight: 700,
                          lineHeight: 1.2,
                        }}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    <h3
                      style={{
                        marginBottom: '8px',
                      }}
                    >
                      {pillar.title}
                    </h3>

                    <p
                      style={{
                        marginBottom: '14px',
                        color: '#1167d8',
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      {pillar.subtitle}
                    </p>

                    <p>{pillar.description}</p>

                    {/* Consulting Areas */}
                    <div style={{ marginTop: '24px' }}>
                      <h4
                        style={{
                          marginBottom: '12px',
                          fontSize: '12px',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--foreground)',
                        }}
                      >
                        Key Advisory Areas
                      </h4>

                      <ul
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          margin: 0,
                          padding: 0,
                          listStyle: 'none',
                        }}
                      >
                        {pillar.consultingAreas.map(
                          (item) => (
                            <li
                              key={item}
                              style={{
                                display: 'flex',
                                alignItems:
                                  'flex-start',
                                gap: '10px',
                                fontSize: '14px',
                                lineHeight: 1.55,
                              }}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                style={{
                                  flexShrink: 0,
                                  marginTop: '3px',
                                  color: '#1167d8',
                                }}
                              >
                                <path d="M5 13l4 4L19 7" />
                              </svg>

                              <span>{item}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Tools / Frameworks */}
                    <div style={{ marginTop: '24px' }}>
                      <h4
                        style={{
                          marginBottom: '10px',
                          fontSize: '12px',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--foreground)',
                        }}
                      >
                        Relevant Frameworks & Tools
                      </h4>

                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                        }}
                      >
                        {pillar.toolsTech.map(
                          (tool) => (
                            <span
                              key={tool}
                              style={{
                                display:
                                  'inline-flex',
                                alignItems:
                                  'center',
                                padding:
                                  '5px 8px',
                                borderRadius: '6px',
                                background:
                                  'var(--surface-muted)',
                                border:
                                  '1px solid var(--border)',
                                color:
                                  'var(--muted-foreground)',
                                fontSize: '12px',
                                fontFamily:
                                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                              }}
                            >
                              {tool}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      marginTop: '28px',
                      paddingTop: '20px',
                      borderTop:
                        '1px solid var(--border)',
                    }}
                  >
                    <a
                      href={pillar.hubUrl}
                      className="button button-secondary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent:
                          'center',
                        gap: '8px',
                        width: '100%',
                      }}
                    >
                      Explore{' '}
                      {pillar.title.split(' ')[0]}{' '}
                      Hub

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    <a
                      href={getWhatsAppUrl(
                        `Hi, I would like to inquire about consulting support for ${pillar.title}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent:
                          'center',
                        width: '100%',
                      }}
                    >
                      Discuss Project
                      Requirements
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            Research Methodology Specialist Service
            ========================================== */}
        <section className="section">
          <div className="container">
            <div
              className="consultancy-card"
              style={{
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
                  RESEARCH & METHODOLOGY
                </p>

                <h2
                  style={{
                    marginBottom: '12px',
                  }}
                >
                  Research Methodology Consulting
                </h2>

                <p
                  style={{
                    marginBottom: 0,
                  }}
                >
                  Structured guidance for selecting and
                  applying appropriate research
                  methodologies across technical,
                  business, and postgraduate research
                  projects. Explore research design,
                  qualitative and quantitative
                  approaches, literature review strategy,
                  conceptual frameworks, and
                  methodological planning.
                </p>
              </div>

              <a
                href="/services/research-methodology"
                className="button button-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent:
                    'center',
                  gap: '8px',
                  flexShrink: 0,
                }}
              >
                Explore Research Methodology

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================
            Regional Standards
            ========================================== */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="REGIONAL ACADEMIC FRAMEWORKS"
              title="Alignment with US and Gulf academic expectations."
              body="We tailor our consulting approach to meet the distinct structural expectations of institutions in North America and the Gulf region."
            />

            <div
              className="two-column"
              style={{
                marginTop: '40px',
              }}
            >
              <article className="why-card">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      padding: '5px 9px',
                      borderRadius: '6px',
                      background:
                        'rgba(17, 103, 216, 0.10)',
                      color: '#1167d8',
                      fontSize: '12px',
                      fontWeight: 800,
                    }}
                  >
                    US Focus
                  </span>

                  <h3
                    style={{
                      margin: 0,
                    }}
                  >
                    North American University
                    Standards
                  </h3>
                </div>

                <p>
                  Advisory focused on meeting standard
                  university rubrics, IEEE documentation
                  guidelines, APA 7th Edition citation
                  precision, and rigorous technical
                  methodology design.
                </p>
              </article>

              <article className="why-card">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      padding: '5px 9px',
                      borderRadius: '6px',
                      background:
                        'rgba(16, 185, 129, 0.10)',
                      color: '#047857',
                      fontSize: '12px',
                      fontWeight: 800,
                    }}
                  >
                    GCC Focus
                  </span>

                  <h3
                    style={{
                      margin: 0,
                    }}
                  >
                    Gulf Region Executive Programs
                  </h3>
                </div>

                <p>
                  Tailored support for working
                  professionals in UAE, KSA, Qatar, and
                  Kuwait balancing full-time employment
                  with Executive MBA or DBA research
                  demands.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ==========================================
            Engagement Workflow
            ========================================== */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="CONSULTANCY PROCESS"
              title="A transparent, step-by-step workflow."
              body="A transparent, step-by-step workflow for technical advisory."
            />

            <div
              className="approach-grid"
              style={{
                marginTop: '40px',
              }}
            >
              {[
                {
                  step: '01',
                  title: 'Brief Submission',
                  desc: 'Share your assignment guidelines, project rubrics, or research objectives.',
                },
                {
                  step: '02',
                  title: 'Expert Review',
                  desc: 'A qualified domain specialist evaluates the technical scope and requirements.',
                },
                {
                  step: '03',
                  title: 'Guided Execution',
                  desc: 'Receive structured feedback, code reviews, or methodological guidance.',
                },
                {
                  step: '04',
                  title: 'Review & Refinement',
                  desc: 'Fine-tune technical outputs based on your feedback and institutional standards.',
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="approach-card"
                >
                  <span
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            FAQ
            ========================================== */}
        <section className="section section-tint">
          <div className="container">
            <div className="faq-layout">
              <div>
                <SectionHeading
                  eyebrow="FREQUENTLY ASKED QUESTIONS"
                  title="Questions about our consulting model."
                  body="Information on our technical consulting model and privacy protocols."
                />
              </div>

              <div className="faq-list">
                {faqs.map((faq, idx) => (
                  <div
                    className="faq-item"
                    key={faq.question}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        toggleFaq(idx)
                      }
                      aria-expanded={
                        activeFaq === idx
                      }
                      className="w-full"
                      style={{
                        display: 'flex',
                        alignItems:
                          'center',
                        justifyContent:
                          'space-between',
                        gap: '20px',
                        padding:
                          '22px 0',
                        background:
                          'transparent',
                        border: 0,
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontWeight: 700,
                        color:
                          'var(--foreground)',
                      }}
                    >
                      <span>
                        {faq.question}
                      </span>

                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
                          transition:
                            'transform 0.2s ease',
                          transform:
                            activeFaq ===
                            idx
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                          color:
                            activeFaq ===
                            idx
                              ? '#1167d8'
                              : 'var(--muted-foreground)',
                        }}
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      style={{
                        display:
                          activeFaq === idx
                            ? 'block'
                            : 'none',
                        paddingBottom:
                          '22px',
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          paddingTop:
                            '18px',
                          borderTop:
                            '1px solid var(--border)',
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            Existing Project CTA
            ========================================== */}
        <section className="section">
          <div className="container">
            <div
              className="consultancy-card"
              style={{
                padding: '40px 30px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  maxWidth: '680px',
                  margin: '0 auto',
                }}
              >
                <h2
                  style={{
                    marginBottom: '12px',
                  }}
                >
                  Ready to Discuss Your Project
                  Scope?
                </h2>

                <p
                  style={{
                    marginBottom: '24px',
                  }}
                >
                  Connect directly with a technical
                  specialist via WhatsApp or email for a
                  confidential review of your
                  requirements.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection:
                      'row',
                    alignItems:
                      'center',
                    justifyContent:
                      'center',
                    gap: '12px',
                    flexWrap:
                      'wrap',
                  }}
                >
                  <a
                    href={getWhatsAppUrl(
                      'Hi, I would like to discuss my project requirements.',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary"
                    style={{
                      display:
                        'inline-flex',
                      alignItems:
                        'center',
                      justifyContent:
                        'center',
                      gap: '8px',
                    }}
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>

                    Consult via WhatsApp
                  </a>

                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="button button-secondary"
                    style={{
                      display:
                        'inline-flex',
                      alignItems:
                        'center',
                      justifyContent:
                        'center',
                    }}
                  >
                    Email Project Brief
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            Shared Site CTA
            ========================================== */}
        <CTA />
      </main>

      {/* ==========================================
          Shared Site Footer
          ========================================== */}
      <Footer />

      {/* ==========================================
          Structured Data
          ========================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdSchema,
          ),
        }}
      />
    </>
  )
}