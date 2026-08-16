import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  FileCheck2,
  Globe2,
  LockKeyhole,
  Network,
  ScanSearch,
  ShieldCheck,
  TerminalSquare,
  Wifi,
} from 'lucide-react'
import { CTA, Footer, PageHero, SectionHeading } from '@/components/site'

export const metadata: Metadata = {
  title: 'Penetration Testing & VAPT Project Guidance | ProjectAssignments',
  description:
    'Technical guidance for penetration testing, VAPT, ethical hacking labs, vulnerability assessment, and cybersecurity project documentation aligned with recognized security frameworks and academic requirements.',
  alternates: {
    canonical:
      'https://projectassignments.com/services/cybersecurity/penetration-testing',
  },
  openGraph: {
    title: 'Penetration Testing & VAPT Project Guidance | ProjectAssignments',
    description:
      'Technical guidance for penetration testing, VAPT, ethical hacking labs, vulnerability assessment, and cybersecurity project documentation.',
    type: 'website',
    url: 'https://projectassignments.com/services/cybersecurity/penetration-testing',
    images: [
      {
        url: 'https://projectassignments.com/images/penetration-testing-execution-model.png',
        width: 1024,
        height: 576,
        alt: 'Seven-phase penetration testing execution model covering pre-engagement, intelligence gathering, threat modeling, vulnerability analysis, exploitation, post-exploitation, and reporting',
      },
    ],
  },
}

const pageUrl =
  'https://projectassignments.com/services/cybersecurity/penetration-testing'

const faqs = [
  {
    question: 'How is client confidentiality maintained during technical reviews?',
    answer:
      'Project briefs, code bases, network diagrams, and communication records are handled confidentially. Secure transmission channels are used for shared technical materials, and project information is not distributed to unrelated third parties.',
  },
  {
    question: 'Can I get guidance on setting up an isolated virtual attack lab?',
    answer:
      'Yes. Technical mentorship can cover isolated hypervisor environments using platforms such as VirtualBox or VMware, vulnerable target machines such as Metasploitable and WebGoat, containerized targets, and host-only networking for controlled security testing.',
  },
  {
    question:
      'What is the distinction between Vulnerability Assessment and Penetration Testing?',
    answer:
      'A Vulnerability Assessment focuses on identifying, categorizing, and prioritizing potential security weaknesses. Penetration Testing goes further by attempting controlled exploitation of identified weaknesses to validate whether unauthorized access or other security impacts can actually be achieved.',
  },
  {
    question: 'Do you assist with formatting technical vulnerability reports?',
    answer:
      'Yes. Guidance can cover the structure of formal VAPT reports, including executive summaries, technical findings, severity and CVSS scoring, proof-of-concept documentation, evidence presentation, and remediation recommendations.',
  },
]

const scopeRows = [
  {
    area: 'Network Penetration Testing',
    modules:
      'Port scanning, service enumeration, exploitation, privilege escalation, and controlled post-exploitation analysis.',
    outcomes:
      'Network topology maps, evidence logs, root-cause analysis, and remediation matrices.',
  },
  {
    area: 'Web Application Security',
    modules:
      'OWASP Top 10 verification, SQL injection, XSS, authentication weaknesses, CSRF, and API endpoint auditing.',
    outcomes:
      'Vulnerability proof-of-concept documentation, security recommendations, and API security briefs.',
  },
  {
    area: 'Wireless Security Auditing',
    modules:
      'WPA2/WPA3 security assessment concepts, wireless configuration analysis, rogue access-point detection, and controlled wireless testing.',
    outcomes:
      'Wireless security assessment notes, coverage observations, and security policy recommendations.',
  },
  {
    area: 'Cloud Infrastructure Testing',
    modules:
      'AWS/Azure IAM configuration reviews, storage-policy analysis, container security, and cloud security posture assessment.',
    outcomes:
      'Cloud security findings, IAM least-privilege maps, configuration recommendations, and security rules.',
  },
  {
    area: 'Threat Modeling & Compliance',
    modules:
      'STRIDE threat modeling, NIST control mapping, ISO 27001 risk analysis, and security-control evaluation.',
    outcomes:
      'Risk matrices, threat models, compliance-readiness documentation, and control-mapping summaries.',
  },
]

const competencies = [
  {
    icon: ScanSearch,
    title: 'Vulnerability Assessment & Penetration Testing Review',
    body:
      'Structured review of automated scan results from tools such as Nessus and OpenVAS, including validation of findings, false-positive analysis, and development of controlled manual testing paths.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Framework & Compliance Mapping',
    body:
      'Technical findings can be mapped to recognized frameworks and standards including NIST SP 800-53, ISO 27001, OWASP Top 10, and PCI DSS.',
  },
  {
    icon: Network,
    title: 'SIEM & Packet-Level Diagnostics',
    body:
      'Analysis of packet captures in Wireshark and review of security-event collection in platforms such as Splunk or Elastic Security to understand monitoring and detection workflows.',
  },
  {
    icon: Code2,
    title: 'Automated & Custom Scripting',
    body:
      'Python and Bash scripting guidance for security automation, reconnaissance workflows, banner analysis, evidence collection, and controlled laboratory exercises.',
  },
  {
    icon: Globe2,
    title: 'Threat Modeling with STRIDE',
    body:
      'Systematic modeling of application and infrastructure threats to identify structural weaknesses before deployment or during security-focused project analysis.',
  },
]

const toolchains = [
  {
    icon: TerminalSquare,
    title: 'Operating Systems & Lab Environments',
    items: [
      'Kali Linux',
      'Parrot Security OS',
      'Windows Server and Active Directory labs',
      'Docker-based security targets',
    ],
  },
  {
    icon: ScanSearch,
    title: 'Reconnaissance & Enumeration',
    items: [
      'Nmap',
      'Masscan',
      'Amass',
      'Recon-ng',
      'Maltego',
      'Wireshark',
    ],
  },
  {
    icon: Globe2,
    title: 'Web Application Testing',
    items: [
      'Burp Suite Professional',
      'OWASP ZAP',
      'SQLmap',
      'Gobuster',
      'Nikto',
    ],
  },
  {
    icon: LockKeyhole,
    title: 'Exploitation & Post-Exploitation',
    items: [
      'Metasploit Framework',
      'Cobalt Strike concepts in controlled labs',
      'Mimikatz',
      'Empire',
      'Custom Python security tooling',
    ],
  },
  {
    icon: Network,
    title: 'Defensive & Monitoring Integration',
    items: [
      'Splunk',
      'Snort',
      'Suricata',
      'Elastic Stack',
      'Security-event analysis',
    ],
  },
]

const phases = [
  {
    number: '01',
    title: 'Pre-Engagement, Planning & Scope',
    body:
      'Establishing clear Rules of Engagement, defining target IP ranges or domain scopes, establishing authorization parameters, identifying testing boundaries, and scheduling appropriate test windows to prevent operational disruption.',
  },
  {
    number: '02',
    title: 'Intelligence Gathering & Reconnaissance',
    body:
      'Executing passive and active reconnaissance to understand the target environment. This can include OSINT analysis, subdomain discovery, DNS information, public repositories, technology identification, and attack-surface mapping within an authorized scope.',
  },
  {
    number: '03',
    title: 'Threat Modeling & Attack-Surface Analysis',
    body:
      'Using structured threat-modeling approaches such as STRIDE to identify likely attack paths, trust boundaries, assets, threats, and potential security weaknesses before exploitation activities begin.',
  },
  {
    number: '04',
    title: 'Vulnerability Analysis',
    body:
      'Combining automated scanning with manual analysis to identify unpatched software, insecure configurations, weak authentication mechanisms, exposed services, and architectural vulnerabilities while validating findings and reducing false positives.',
  },
  {
    number: '05',
    title: 'Controlled Exploitation & Validation',
    body:
      'Performing controlled proof-of-concept exploitation against identified vulnerabilities to establish exploitability and security impact without causing unnecessary service disruption, data corruption, or uncontrolled access.',
  },
  {
    number: '06',
    title: 'Post-Exploitation & Impact Assessment',
    body:
      'Assessing the potential consequences of a validated compromise by examining privilege escalation, internal pivoting, sensitive-data exposure, lateral movement, and other relevant impact scenarios within the authorized laboratory or assessment boundary.',
  },
  {
    number: '07',
    title: 'Technical Reporting & Remediation',
    body:
      'Transforming technical observations into structured reports containing executive summaries, detailed findings, evidence, severity ratings, CVSS context where appropriate, reproduction guidance, root-cause analysis, and practical remediation recommendations.',
  },
]

const cybersecuritySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
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
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Penetration Testing',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Penetration Testing & VAPT Project Guidance',
      url: pageUrl,
      description:
        'Technical advisory and mentorship covering penetration testing, vulnerability assessment, cybersecurity laboratories, security tooling, and technical documentation.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com/',
      },
      areaServed: [
        {
          '@type': 'Place',
          name: 'Worldwide',
        },
      ],
      serviceType: 'Cybersecurity technical consultancy',
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

export default function PenetrationTestingPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Cybersecurity • Penetration Testing • VAPT"
          title="Hands-On Penetration Testing & Cybersecurity Technical Consultancy"
          body="Technical guidance for structured penetration testing, vulnerability assessment, ethical security laboratories, and cybersecurity project documentation. Build a stronger understanding of offensive security methodologies while keeping testing controlled, authorized, and academically responsible."
        />

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Technical scope"
                  title="Structured guidance across modern offensive security environments."
                  body="Modern security assessment requires precision across network, application, wireless, cloud, and infrastructure environments. Our technical advisory approach connects methodology, tooling, evidence, analysis, and documentation."
                />
              </div>

              <div className="card-grid">
                <div className="info-card">
                  <Network size={28} aria-hidden="true" />
                  <h3>Network Security</h3>
                  <p>
                    Understand network enumeration, service analysis,
                    vulnerability validation, and controlled exploitation.
                  </p>
                </div>

                <div className="info-card">
                  <Globe2 size={28} aria-hidden="true" />
                  <h3>Application Security</h3>
                  <p>
                    Study web application vulnerabilities, APIs, security
                    controls, and OWASP-aligned assessment techniques.
                  </p>
                </div>

                <div className="info-card">
                  <Cloud size={28} aria-hidden="true" />
                  <h3>Cloud Security</h3>
                  <p>
                    Review cloud identity, storage, configuration, and
                    container-security concepts in controlled environments.
                  </p>
                </div>

                <div className="info-card">
                  <Wifi size={28} aria-hidden="true" />
                  <h3>Wireless Security</h3>
                  <p>
                    Explore wireless assessment methodology, configuration
                    weaknesses, and defensive security considerations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Penetration testing methodology</p>
              <h2>Structured Penetration Testing Execution Model</h2>
              <p>
                A comprehensive seven-phase methodology connecting planning,
                intelligence gathering, threat modeling, vulnerability
                analysis, controlled exploitation, post-exploitation
                assessment, and technical reporting.
              </p>
            </div>

            <figure className="content-image">
              <Image
                src="/images/penetration-testing-execution-model.png"
                alt="Seven-phase penetration testing execution model covering pre-engagement, intelligence gathering, threat modeling, vulnerability analysis, exploitation, post-exploitation, and reporting"
                width={1024}
                height={576}
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
              />
              <figcaption>
                Seven-phase penetration testing execution model covering
                pre-engagement, intelligence gathering, threat modeling,
                vulnerability analysis, exploitation, post-exploitation, and
                reporting.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Consultancy pillars"
              title="Technical scope and expected outcomes."
              body="Advisory can be structured around a defined technical project, assessment methodology, research requirement, or controlled cybersecurity laboratory."
            />

            <div className="table-wrapper">
              <table className="technical-table">
                <thead>
                  <tr>
                    <th>Consultancy Focus</th>
                    <th>Key Technical Modules</th>
                    <th>Target Deliverables & Outcomes</th>
                  </tr>
                </thead>
                <tbody>
                  {scopeRows.map((row) => (
                    <tr key={row.area}>
                      <td>
                        <strong>{row.area}</strong>
                      </td>
                      <td>{row.modules}</td>
                      <td>{row.outcomes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Core competencies"
              title="From automated scans to defensible technical findings."
              body="Effective penetration testing requires more than running automated tools. Technical understanding, manual validation, evidence analysis, and clear documentation are central to producing meaningful security findings."
            />

            <div className="feature-list">
              {competencies.map((item) => {
                const Icon = item.icon

                return (
                  <article className="feature-item" key={item.title}>
                    <div className="feature-icon">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Toolchains & environments"
              title="Industry-recognized security tools in controlled environments."
              body="Technical guidance can cover the configuration, responsible use, interpretation, and documentation of common cybersecurity tools across isolated laboratories and authorized assessment environments."
            />

            <div className="card-grid tool-grid">
              {toolchains.map((tool) => {
                const Icon = tool.icon

                return (
                  <article className="info-card" key={tool.title}>
                    <Icon size={28} aria-hidden="true" />
                    <h3>{tool.title}</h3>
                    <ul>
                      {tool.items.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={16} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="Seven-phase methodology"
              title="A repeatable framework for penetration testing execution."
              body="Penetration testing requires disciplined planning and controlled execution. The following seven phases provide a structured framework for technical analysis and reporting."
            />

            <div className="phase-grid">
              {phases.map((phase) => (
                <article className="phase-card" key={phase.number}>
                  <span className="phase-number">{phase.number}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Framework alignment"
                  title="Academic and technical work grounded in recognized security frameworks."
                  body="Cybersecurity projects often require more than technical execution. They also need a clear methodology, defensible evidence, appropriate terminology, and traceability to recognized frameworks and standards."
                />
              </div>

              <div className="framework-list">
                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>NIST security and control frameworks</span>
                </div>
                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>ISO 27001 information security principles</span>
                </div>
                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>OWASP application security guidance</span>
                </div>
                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>PCI DSS security considerations</span>
                </div>
                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>PTES and OSSTMM methodology concepts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container narrow-content">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Penetration testing and VAPT guidance."
              body="Common questions about technical reviews, controlled laboratories, vulnerability assessment, and cybersecurity documentation."
            />

            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="internal-links">
              <div>
                <p className="eyebrow">Explore cybersecurity</p>
                <h2>Continue exploring our technical areas.</h2>
              </div>

              <div className="internal-link-grid">
                <Link href="/services/cybersecurity" className="internal-link">
                  <span>
                    <strong>Cybersecurity Services</strong>
                    <small>
                      Explore our broader cybersecurity technical consultancy.
                    </small>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link href="/technologies" className="internal-link">
                  <span>
                    <strong>Technologies</strong>
                    <small>
                      Explore the technologies and technical frameworks we work
                      with.
                    </small>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link href="/resources" className="internal-link">
                  <span>
                    <strong>Resources</strong>
                    <small>
                      Explore technical and academic resources from
                      ProjectAssignments.
                    </small>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
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
          __html: JSON.stringify(cybersecuritySchema),
        }}
      />
    </>
  )
}