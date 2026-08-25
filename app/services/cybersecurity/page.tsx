import {
  ArrowRight,
  CheckCircle2,
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
  title: 'Cybersecurity Project & Research Support',
  description:
    'Technical guidance for cybersecurity projects, penetration testing labs, vulnerability assessments, capstones, security research and technical reports.',
  alternates: {
    canonical:
      'https://projectassignments.com/services/cybersecurity',
  },
  openGraph: {
    title:
      'Cybersecurity Project & Research Support | ProjectAssignments',
    description:
      'Technical guidance for cybersecurity projects, penetration testing labs, vulnerability assessments, capstones, security research and technical reports.',
    url:
      'https://projectassignments.com/services/cybersecurity',
    type: 'website',
  },
}

const cybersecuritySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://projectassignments.com/services/cybersecurity#service',
      name: 'Cybersecurity Project & Research Support',
      description:
        'Technical guidance for cybersecurity projects, penetration testing labs, vulnerability assessments, capstone projects, security research and technical documentation.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
      areaServed: 'Worldwide',
      serviceType:
        'Cybersecurity academic and technical consultancy',
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/services/cybersecurity#breadcrumb',
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
          name: 'Cybersecurity',
          item: 'https://projectassignments.com/services/cybersecurity',
        },
      ],
    },
  ],
}

const expertiseAreas = [
  {
    title: 'Penetration Testing & Security Reports',
    description:
      'Guidance with authorised security testing, assessment methodology, evidence interpretation, findings and professional reporting.',
    href: '/services/cybersecurity/penetration-testing',
    buttonLabel: 'Explore Penetration Testing',
  },
  {
    title: 'Vulnerability Assessment & Risk Analysis',
    description:
      'Support with vulnerability identification, risk classification, evidence organisation and remediation recommendations.',
    href: '/services/cybersecurity/vulnerability-assessment',
    buttonLabel: 'Explore Vulnerability Assessment',
  },
  {
    title: 'Network Security',
    description:
      'Network analysis, traffic interpretation, architecture review, packet analysis and security documentation.',
    href: '/services/cybersecurity/network-security',
    buttonLabel: 'Explore Network Security',
  },
  {
    title: 'Digital Forensics',
    description:
      'Structured guidance for forensic methodology, evidence interpretation, investigation workflows and technical reporting.',
    href: '/services/cybersecurity/digital-forensics',
    buttonLabel: 'Explore Digital Forensics',
  },
  {
    title: 'Security Operations & SIEM',
    description:
      'Support with log analysis, incident investigation, security monitoring concepts and SIEM-based technical projects.',
    href: '/services/cybersecurity/security-operations-siem',
    buttonLabel: 'Explore Security Operations & SIEM',
  },
  {
    title: 'Cloud Security',
    description:
      'Security considerations for AWS, Azure and cloud-based architectures, including identity, access, configuration and risk.',
    href: '/services/cybersecurity/cloud-security',
    buttonLabel: 'Explore Cloud Security',
  },
  {
    title: 'Secure Software Development',
    description:
      'Security-focused programming, secure design principles, vulnerability analysis and application security documentation.',
    href: '/services/cybersecurity/secure-software-development',
    buttonLabel: 'Explore Secure Software Development',
  },
  {
    title: 'Cybersecurity Risk & Compliance',
    description:
      'Guidance with cybersecurity risk assessment, security controls, governance, compliance frameworks and structured analysis.',
    href: '/services/cybersecurity/risk-compliance',
    buttonLabel: 'Explore Risk & Compliance',
  },
]

const frameworks = [
  'NIST Cybersecurity Framework 2.0',
  'NIST SP 800-115',
  'OWASP',
  'MITRE ATT&CK',
  'CVSS',
  'ISO/IEC 27001',
]

const technologies = [
  'Kali Linux',
  'Nmap',
  'Wireshark',
  'Burp Suite',
  'Metasploit',
  'Splunk',
  'Python',
  'Linux',
  'AWS',
  'Azure',
]

const audiences = [
  {
    title: 'Undergraduate Students',
    description:
      'Cybersecurity coursework, practical labs, technical reports and introductory security projects.',
  },
  {
    title: 'Postgraduate Students',
    description:
      'Advanced cybersecurity projects, research, security analysis and technical documentation.',
  },
  {
    title: 'Capstone Students',
    description:
      'Security architecture, testing methodology, implementation evidence and capstone documentation.',
  },
  {
    title: 'Researchers',
    description:
      'Cybersecurity research methodology, literature analysis, technical evidence and research documentation.',
  },
  {
    title: 'IT & Security Professionals',
    description:
      'Structured technical guidance for professional learning, research and security-focused projects.',
  },
]

const faqs = [
  {
    question:
      'Can you help with a cybersecurity penetration testing project?',
    answer:
      'Yes. We provide structured guidance for authorised academic and laboratory penetration-testing projects, including methodology, scope, evidence interpretation, findings and technical reporting.',
  },
  {
    question:
      'Can you help with a cybersecurity lab or practical assessment?',
    answer:
      'Yes. We can help you understand the technical concepts involved, interpret lab evidence, troubleshoot methodology and structure the accompanying technical documentation.',
  },
  {
    question:
      'Do you support cybersecurity capstone projects?',
    answer:
      'Yes. Support can cover security architecture, testing methodology, implementation documentation, technical artefacts, evaluation and final project reporting.',
  },
  {
    question:
      'Can you help with NIST-based cybersecurity projects?',
    answer:
      'Yes. We can provide guidance on understanding and applying relevant NIST cybersecurity concepts and documenting the resulting analysis within the requirements of your project.',
  },
  {
    question:
      'Do you support postgraduate cybersecurity research?',
    answer:
      'Yes. We support research planning, literature synthesis, methodology, technical analysis and research documentation for postgraduate cybersecurity projects.',
  },
  {
    question:
      'Do you work with students and researchers internationally?',
    answer:
      'Yes. ProjectAssignments works with students, researchers and professionals across different institutions, disciplines and academic environments.',
  },
]

export default function CybersecurityPage() {
  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cybersecuritySchema),
          }}
        />

        {/* Breadcrumb */}
        <div className="container">
          <nav
            aria-label="Breadcrumb"
            style={{
              paddingTop: '24px',
              paddingBottom: '8px',
            }}
          >
            <ol
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: '13px',
                color: '#64748b',
              }}
            >
              <li>
                <Link href="/">Home</Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li aria-hidden="true">/</li>

              <li aria-current="page">Cybersecurity</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <PageHero
          eyebrow="OUR CYBERSECURITY EXPERTISE"
          title="Cybersecurity Projects, Labs & Research Support"
          body="Technical guidance for cybersecurity coursework, practical labs, capstone projects and postgraduate research — from methodology and evidence interpretation to security analysis and professional documentation."
        />

        {/* Hero Supporting Content */}
        <section className="section section-tint">
          <div className="container">
            <div
              className="two-column"
              style={{ alignItems: 'center' }}
            >
              <div>
                <p className="eyebrow">
                  TECHNICAL SECURITY WORK
                </p>

                <h2>
                  From security concepts to defensible technical
                  outcomes.
                </h2>

                <p>
                  Cybersecurity projects often require more than a
                  written explanation. They may involve technical
                  environments, evidence, testing methodology,
                  security frameworks and structured reporting.
                </p>

                <div
                  className="hero-actions"
                  style={{ marginTop: '24px' }}
                >
                  <a
                    href="https://wa.me/918595089080?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20cybersecurity%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary"
                  >
                    Discuss Your Project
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href="#expertise"
                    className="button button-secondary"
                  >
                    Explore Expertise
                  </a>
                </div>

                <div className="hero-proof">
                  <span>Technical depth</span>
                  <span>Research clarity</span>
                  <span>Responsible guidance</span>
                </div>
              </div>

              <div
                className="consultancy-card"
                style={{ padding: '36px' }}
              >
                <div
                  className="icon-box"
                  style={{
                    width: 58,
                    height: 58,
                    marginBottom: 22,
                  }}
                  aria-hidden="true"
                >
                  <ShieldCheck
                    size={30}
                    aria-hidden="true"
                  />
                </div>

                <p className="eyebrow">
                  CYBERSECURITY SPECIALIST SUPPORT
                </p>

                <h3>
                  Technical depth for complex security work.
                </h3>

                <p>
                  Our cybersecurity support covers practical
                  security environments, research methodology,
                  technical evidence, recognised frameworks and
                  structured reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="AREAS OF EXPERTISE"
              title="Focused support across practical and research-oriented cybersecurity work."
              body="We focus on technically demanding cybersecurity work where methodology, evidence, analysis and documentation all matter."
            />

            <div className="services-grid">
              {expertiseAreas.map((area) => (
                <article
                  key={area.title}
                  className="consultancy-card"
                  style={{ padding: 28 }}
                >
                  <div
                    className="icon-box"
                    style={{
                      width: 38,
                      height: 38,
                      marginBottom: 18,
                    }}
                    aria-hidden="true"
                  >
                    <CheckCircle2
                      size={20}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <Link
                    href={area.href}
                    className="button button-secondary"
                    style={{
                      marginTop: 18,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                    }}
                  >
                    {area.buttonLabel}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Project Support */}
        <section className="section section-tint">
          <div className="container">
            <div className="two-column">
              <div>
                <p className="eyebrow">
                  CYBERSECURITY PROJECT &amp; LAB SUPPORT
                </p>

                <h2>
                  Cybersecurity work needs evidence,
                  methodology and clear technical reasoning.
                </h2>

                <p>
                  A strong cybersecurity project is rarely just a
                  collection of screenshots or tool output. The
                  technical work needs to be connected to a clear
                  objective, appropriate methodology, meaningful
                  analysis and defensible conclusions.
                </p>

                <p>
                  We help students and researchers work through
                  those connections while keeping their own
                  understanding and authorship at the centre.
                </p>
              </div>

              <div
                className="consultancy-card"
                style={{ padding: 30 }}
              >
                {[
                  'Practical cybersecurity laboratories',
                  'Penetration testing and security assessment reports',
                  'Vulnerability assessment documentation',
                  'Network and packet analysis',
                  'Security architecture and threat modelling',
                  'Cybersecurity capstone projects',
                  'Technical research documentation',
                  'Evaluation and final project review',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      padding: '13px 0',
                      borderBottom:
                        '1px solid #edf1f6',
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Frameworks */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="FRAMEWORKS & METHODOLOGIES"
              title="Familiarity with recognised cybersecurity frameworks and assessment approaches."
              body="Frameworks provide structure. The right framework depends on the research question, technical environment and requirements of the project."
            />

            <div className="technology-grid">
              {frameworks.map((framework) => (
                <div
                  key={framework}
                  className="consultancy-card"
                  style={{ padding: 22 }}
                >
                  <strong>{framework}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="TOOLS & ENVIRONMENTS"
              title="Technical environments relevant to cybersecurity projects."
            />

            <div className="technology-grid">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="consultancy-card"
                  style={{
                    padding: 22,
                    fontFamily:
                      'var(--font-mono-family)',
                    fontSize: 14,
                  }}
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="WHO WE SUPPORT"
              title="Cybersecurity guidance for different stages of academic and professional work."
            />

            <div className="services-grid">
              {audiences.map((audience) => (
                <article
                  key={audience.title}
                  className="consultancy-card"
                  style={{ padding: 28 }}
                >
                  <h3>{audience.title}</h3>

                  <p>{audience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Integrity */}
        <section className="section section-tint">
          <div className="container">
            <div
              className="consultancy-card"
              style={{
                padding: '42px 36px',
                maxWidth: 900,
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow">
                RESPONSIBLE TECHNICAL GUIDANCE
              </p>

              <h2>
                Technical support that keeps understanding at
                the centre.
              </h2>

              <p
                style={{
                  maxWidth: 720,
                  margin: '0 auto',
                }}
              >
                Our role is to help you understand technical
                concepts, interpret evidence, structure research
                and strengthen your work. We work from the
                requirements of your project while keeping
                academic integrity and responsible use of
                technical knowledge central to the engagement.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="faq-layout">
              <div>
                <SectionHeading
                  eyebrow="CYBERSECURITY FAQ"
                  title="Questions about cybersecurity project support."
                  body="A few useful answers before you decide whether our cybersecurity consultancy is right for your project."
                />
              </div>

              <div>
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="consultancy-card"
                    style={{
                      marginBottom: 12,
                      padding: 20,
                    }}
                  >
                    <summary
                      style={{
                        cursor: 'pointer',
                        fontWeight: 700,
                        color: 'var(--foreground)',
                      }}
                    >
                      {faq.question}
                    </summary>

                    <p
                      style={{
                        marginTop: 14,
                        marginBottom: 0,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="container">
            <div
              className="consultancy-card"
              style={{
                padding: '36px',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow">EXPLORE MORE</p>

              <h2>More from ProjectAssignments</h2>

              <p>
                Explore our broader technical services or learn
                more about how ProjectAssignments approaches
                complex academic and research work.
              </p>

              <div
                className="hero-actions"
                style={{
                  justifyContent: 'center',
                }}
              >
                <Link
                  href="/services"
                  className="button button-secondary"
                >
                  All Services
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/about"
                  className="button button-secondary"
                >
                  About ProjectAssignments
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section-tint">
          <div className="container">
            <div
              className="consultancy-card"
              style={{
                padding: '48px 32px',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow">
                HAVE A CYBERSECURITY PROJECT?
              </p>

              <h2>
                Let's understand what you're working on.
              </h2>

              <p
                style={{
                  maxWidth: 650,
                  margin: '0 auto 24px',
                }}
              >
                Share your project brief, research question or
                technical challenge and we'll help you understand
                the most appropriate way forward.
              </p>

              <a
                href="https://wa.me/918595089080?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20cybersecurity%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Discuss Your Cybersecurity Project
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Shared site CTA */}
        <CTA />
      </main>

      {/* Shared site footer */}
      <Footer />
    </>
  )
}