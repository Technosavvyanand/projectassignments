import { CTA, PageHero, SectionHeading } from '@/components/site'
import {
    Activity,
    ArrowRight,
    CheckCircle2,
    FileSearch,
    LockKeyhole,
    Network,
    Search,
    Server,
    ShieldCheck,
    TerminalSquare
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Network Security Analysis & Project Guidance | ProjectAssignments',
  description:
    'Technical guidance for network security projects, network architecture analysis, packet and traffic analysis, firewall assessment, access control, monitoring, threat detection and security documentation.',
  keywords: [
    'network security',
    'network security analysis',
    'network security project',
    'network security project guidance',
    'network traffic analysis',
    'packet analysis',
    'Wireshark network analysis',
    'firewall analysis',
    'network security assessment',
    'network security academic project',
    'network security research',
    'cybersecurity project guidance',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/cybersecurity/network-security',
  },
  openGraph: {
    title: 'Network Security Analysis & Project Guidance | ProjectAssignments',
    description:
      'Technical guidance for network security analysis, packet inspection, firewall controls, access management, monitoring, threat detection and cybersecurity project documentation.',
    type: 'article',
    url: 'https://projectassignments.com/services/cybersecurity/network-security',
    images: [
      {
        url: 'https://projectassignments.com/images/network-security.png',
        width: 1536,
        height: 1024,
        alt:
          'Network security workflow showing authentication, authorization, access control, traffic inspection, monitoring, threat detection, incident response, blocking and logging',
      },
    ],
  },
}

const pageUrl =
  'https://projectassignments.com/services/cybersecurity/network-security'

const faqs = [
  {
    question: 'What does network security analysis involve?',
    answer:
      'Network security analysis can involve examining network architecture, communication paths, protocols, traffic patterns, packet captures, firewall policies, access controls, monitoring systems and security events to understand how effectively a network environment is protected.',
  },
  {
    question: 'Can you help with a network security academic project?',
    answer:
      'Yes. Technical guidance can cover project scope, network diagrams, packet and traffic analysis, security controls, laboratory methodology, evidence interpretation, findings and technical documentation while keeping the student responsible for their own academic work.',
  },
  {
    question: 'Can you help with Wireshark or packet analysis?',
    answer:
      'Yes. Guidance can cover understanding packet captures, protocols, headers, addresses, ports, communication sequences and traffic patterns, as well as organising observations into meaningful technical findings.',
  },
  {
    question: 'Can network security projects include firewall analysis?',
    answer:
      'Yes. Firewall-related projects can examine filtering policies, rule ordering, permitted and blocked traffic, access-control decisions, logging and the relationship between firewall configuration and network security requirements.',
  },
  {
    question: 'Do you support network monitoring and intrusion detection projects?',
    answer:
      'Yes. Projects involving security monitoring, logs, alerts, anomaly detection, intrusion detection concepts and security-event analysis can be approached through structured technical methodology and evidence-based documentation.',
  },
  {
    question: 'Can network security be combined with penetration testing?',
    answer:
      'Yes. Network security analysis and penetration testing are complementary areas. Network analysis can help establish architecture, services and defensive controls, while authorised penetration testing can be used to validate selected security weaknesses in a controlled environment.',
  },
]

const scopeRows = [
  {
    area: 'Network Architecture & Segmentation',
    modules:
      'Topology analysis, network zones, trust boundaries, communication paths, device roles and segmentation concepts.',
    outcomes:
      'Network diagrams, architecture observations, trust-boundary analysis and security recommendations.',
  },
  {
    area: 'Traffic & Packet Analysis',
    modules:
      'Protocol identification, packet headers, ports, addresses, communication sequences and traffic-pattern analysis.',
    outcomes:
      'Packet-analysis notes, protocol observations, traffic findings and evidence-based technical explanations.',
  },
  {
    area: 'Firewall & Access Control',
    modules:
      'Firewall rules, filtering policies, authentication, authorization, access restrictions and security logging.',
    outcomes:
      'Rule-analysis documentation, access-control observations, security gaps and improvement recommendations.',
  },
  {
    area: 'Network Monitoring & Detection',
    modules:
      'Security logs, event collection, anomaly detection, IDS/IPS concepts and monitoring workflows.',
    outcomes:
      'Monitoring models, event-analysis notes, detection observations and structured security findings.',
  },
  {
    area: 'Secure Communication',
    modules:
      'Encryption concepts, VPNs, TLS, secure protocols, authentication and protection of data in transit.',
    outcomes:
      'Secure-communication analysis, protocol comparisons and recommendations for protecting network traffic.',
  },
]

const competencies = [
  {
    icon: Network,
    title: 'Network Architecture Analysis',
    body:
      'Understand network topology, device relationships, communication paths, trust boundaries and segmentation to establish how a network is structured and where security controls operate.',
  },
  {
    icon: Search,
    title: 'Traffic & Packet Investigation',
    body:
      'Interpret packet captures and network traffic to identify protocols, addresses, ports, communication sequences and patterns that may be relevant to a security investigation.',
  },
  {
    icon: ShieldCheck,
    title: 'Firewall & Access-Control Review',
    body:
      'Examine how filtering rules, authentication mechanisms and access policies control communication between systems, network segments and users.',
  },
  {
    icon: Activity,
    title: 'Monitoring & Threat Detection',
    body:
      'Study security-event collection, network monitoring, anomaly identification and intrusion-detection concepts to understand how suspicious activity can be detected.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure Network Communication',
    body:
      'Explore encryption, VPNs, secure protocols and authentication mechanisms used to protect information while it travels between networked systems.',
  },
  {
    icon: FileSearch,
    title: 'Evidence & Technical Reporting',
    body:
      'Translate network observations, packet evidence, configuration analysis and security findings into structured technical documentation suitable for academic and research projects.',
  },
]

const toolchains = [
  {
    icon: TerminalSquare,
    title: 'Operating Systems & Network Labs',
    items: [
      'Linux networking environments',
      'Windows networking environments',
      'Kali Linux',
      'VirtualBox and VMware laboratories',
      'Docker-based network services',
    ],
  },
  {
    icon: Search,
    title: 'Network Discovery & Analysis',
    items: [
      'Nmap',
      'Netcat',
      'Traceroute',
      'Ping and diagnostic utilities',
      'Network interface analysis',
      'Service enumeration concepts',
    ],
  },
  {
    icon: Network,
    title: 'Packet & Protocol Analysis',
    items: [
      'Wireshark',
      'TCP/IP analysis',
      'DNS traffic',
      'HTTP and HTTPS traffic',
      'ARP analysis',
      'TCP and UDP behaviour',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Security Monitoring',
    items: [
      'Intrusion detection concepts',
      'Security event analysis',
      'Network monitoring workflows',
      'IDS/IPS concepts',
      'Log collection',
      'Alert analysis',
    ],
  },
  {
    icon: LockKeyhole,
    title: 'Secure Communication',
    items: [
      'TLS and HTTPS',
      'VPN concepts',
      'IPsec concepts',
      'SSH',
      'Secure authentication',
      'Encryption in transit',
    ],
  },
]

const methodology = [
  {
    number: '01',
    title: 'Define the Network Environment',
    body:
      'Establish the project scope, network topology, systems involved, communication objectives and specific security questions that the analysis is intended to answer.',
  },
  {
    number: '02',
    title: 'Map Architecture & Communication',
    body:
      'Document devices, network segments, services, communication paths and trust boundaries to create a clear model of how systems interact.',
  },
  {
    number: '03',
    title: 'Observe Traffic & Events',
    body:
      'Collect appropriate network observations, packet captures, logs or security events using a controlled laboratory or authorised environment.',
  },
  {
    number: '04',
    title: 'Analyse Protocols & Controls',
    body:
      'Interpret network protocols, traffic patterns, firewall rules, access controls and monitoring mechanisms to determine how the environment behaves.',
  },
  {
    number: '05',
    title: 'Identify Security Findings',
    body:
      'Compare observed behaviour and controls against the project objectives to identify weaknesses, anomalies, misconfigurations or areas requiring further investigation.',
  },
  {
    number: '06',
    title: 'Validate & Interpret Evidence',
    body:
      'Review relevant packet captures, logs, configuration information and observations to distinguish meaningful security findings from normal network behaviour.',
  },
  {
    number: '07',
    title: 'Document Recommendations',
    body:
      'Present methodology, evidence, findings, limitations and appropriate recommendations in a structured technical report or research document.',
  },
]

const projectAreas = [
  'Network architecture and topology analysis',
  'TCP/IP protocol analysis',
  'Packet capture and Wireshark investigations',
  'Firewall configuration and rule analysis',
  'Network segmentation and access control',
  'Intrusion detection and prevention concepts',
  'Network monitoring and anomaly detection',
  'VPN and secure communication analysis',
  'Wireless network security studies',
  'Network vulnerability identification',
  'Security log and event analysis',
  'Network security policy evaluation',
]

const frameworks = [
  {
    title: 'NIST Cybersecurity Framework',
    body:
      'Useful for structuring discussions around identifying, protecting, detecting, responding to and recovering from cybersecurity risks.',
  },
  {
    title: 'NIST SP 800-41',
    body:
      'Provides relevant guidance for understanding firewall policy and firewall security considerations.',
  },
  {
    title: 'NIST SP 800-115',
    body:
      'Security testing concepts can provide useful context where network security analysis overlaps with authorised technical assessment.',
  },
  {
    title: 'ISO/IEC 27001',
    body:
      'Provides an information-security management perspective for considering controls, risk and security governance.',
  },
  {
    title: 'MITRE ATT&CK',
    body:
      'Can help contextualise network-related adversary behaviour and detection concepts within broader security analysis.',
  },
]

const relatedServices = [
  {
    title: 'Penetration Testing',
    href: '/services/cybersecurity/penetration-testing',
    description:
      'Explore controlled security testing, reconnaissance, vulnerability discovery, exploitation validation and technical reporting.',
  },
  {
    title: 'Vulnerability Assessment',
    href: '/services/cybersecurity/vulnerability-assessment',
    description:
      'Study vulnerability identification, classification, evidence organisation, risk analysis and remediation planning.',
  },
  {
    title: 'Digital Forensics',
    href: '/services/cybersecurity/digital-forensics',
    description:
      'Explore forensic methodology, evidence interpretation, investigation workflows and technical reporting.',
  },
  {
    title: 'Security Operations & SIEM',
    href: '/services/cybersecurity/security-operations-siem',
    description:
      'Study security monitoring, incident investigation, log analysis, alert handling and SIEM-based workflows.',
  },
]

const networkSecuritySchema = {
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
          name: 'Network Security',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Network Security Analysis & Project Guidance',
      url: pageUrl,
      description:
        'Technical guidance covering network architecture analysis, traffic and packet analysis, firewall controls, access management, monitoring, threat detection and network security documentation.',
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
      serviceType: 'Network security technical consultancy',
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

export default function NetworkSecurityPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Cybersecurity • Network Security • Network Analysis"
          title="Network Security Analysis & Technical Project Guidance"
          body="Structured technical guidance for network architecture analysis, packet and traffic inspection, firewall controls, access management, monitoring, threat detection, secure communication and network security documentation."
        />

        {/* Technical scope */}
        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Technical scope"
                  title="Understanding how networks communicate, protect resources and detect threats."
                  body="Network security requires more than configuring a firewall. A meaningful technical analysis connects network architecture, communication protocols, access controls, traffic behaviour, monitoring and security evidence into a coherent picture of the environment."
                />
              </div>

              <div className="card-grid">
                <div className="info-card">
                  <Network size={28} aria-hidden="true" />
                  <h3>Network Architecture</h3>
                  <p>
                    Analyse topology, segmentation, communication paths,
                    devices, services and trust boundaries.
                  </p>
                </div>

                <div className="info-card">
                  <Search size={28} aria-hidden="true" />
                  <h3>Traffic Analysis</h3>
                  <p>
                    Examine network traffic, protocols, packets, ports,
                    addresses and communication patterns.
                  </p>
                </div>

                <div className="info-card">
                  <ShieldCheck size={28} aria-hidden="true" />
                  <h3>Security Controls</h3>
                  <p>
                    Study firewalls, access controls, authentication,
                    filtering policies and network segmentation.
                  </p>
                </div>

                <div className="info-card">
                  <Activity size={28} aria-hidden="true" />
                  <h3>Monitoring & Detection</h3>
                  <p>
                    Explore security events, anomaly detection, IDS/IPS
                    concepts and network monitoring workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network security fundamentals */}
        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Network security fundamentals"
                  title="Protecting communication, systems and network resources."
                  body="Network security is concerned with protecting network infrastructure, connected systems, communication channels and the information moving between them. Effective protection combines preventive controls with continuous observation and appropriate responses to suspicious activity."
                />

                <p>
                  A network security project may therefore involve examining
                  much more than whether a particular security device is
                  enabled. The analysis can extend across network topology,
                  authentication, authorization, traffic flows, protocols,
                  packet behaviour, segmentation, monitoring and security
                  events.
                </p>

                <p>
                  For academic and technical work, these concepts can be
                  translated into network diagrams, controlled experiments,
                  packet captures, configuration observations, security
                  findings and structured technical documentation.
                </p>
              </div>

              <div className="info-card">
                <ShieldCheck size={30} aria-hidden="true" />
                <h3>A layered network security model</h3>

                <ul>
                  {[
                    'Authentication and identity verification',
                    'Authorization and access control',
                    'Traffic inspection and filtering',
                    'Network segmentation',
                    'Continuous monitoring',
                    'Threat detection and response',
                    'Secure communication',
                    'Security logging and evidence collection',
                  ].map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core focus areas */}
        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Core focus areas"
              title="Network security analysis across key technical domains."
              body="Projects can focus on an individual network security concept or combine several areas into a broader assessment. The exact scope can be adapted to the technical environment, academic requirements and research objectives."
            />

            <div className="card-grid">
              {[
                {
                  icon: Network,
                  title: 'Network Architecture Analysis',
                  body:
                    'Examine topology, communication paths, network zones, trust boundaries, segmentation and the security role of network devices.',
                },
                {
                  icon: Search,
                  title: 'Traffic & Packet Analysis',
                  body:
                    'Study protocols, packet headers, ports, addresses, communication sequences and network traffic patterns.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Firewall & Access Control',
                  body:
                    'Analyse firewall policies, filtering rules, authentication mechanisms and access-control decisions.',
                },
                {
                  icon: Activity,
                  title: 'Monitoring & Threat Detection',
                  body:
                    'Explore network monitoring, security events, anomaly identification and intrusion detection concepts.',
                },
                {
                  icon: LockKeyhole,
                  title: 'Secure Network Communication',
                  body:
                    'Study TLS, VPN concepts, encryption, authentication and secure protocols used to protect data in transit.',
                },
                {
                  icon: FileSearch,
                  title: 'Security Documentation',
                  body:
                    'Convert technical observations and evidence into structured findings, diagrams, reports and recommendations.',
                },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <article className="info-card" key={item.title}>
                    <Icon size={28} aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Workflow image */}
        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Network security workflow"
              title="From authentication and access control to continuous protection."
              body="A network security environment uses multiple interconnected controls to validate access, regulate communication, inspect traffic, identify threats and respond to suspicious activity."
            />

            <figure className="content-image">
              <Image
                src="/images/network-security.png"
                alt="Network security workflow showing authentication, authorization and access control, traffic inspection, continuous monitoring, threat detection, incident response, blocking and logging, and safe network access"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
              />

              <figcaption>
                Network security workflow illustrating authentication,
                authorization and access control, traffic inspection,
                monitoring, threat detection, incident response, blocking and
                logging, and safe network access.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Scope table */}
        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Consultancy scope"
              title="From network observations to structured technical outcomes."
              body="Network security projects often require both technical investigation and clear documentation. The following areas illustrate how different technical activities can connect to meaningful project outcomes."
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

        {/* Technical analysis */}
        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="Technical analysis"
              title="Network traffic, packets and security controls."
              body="Network security analysis becomes more meaningful when technical observations are connected to the underlying behaviour of the network and its security controls."
            />

            <div className="two-column">
              <div>
                <p>
                  Network traffic analysis examines communication between
                  systems to understand what is being transmitted, which
                  protocols are being used and whether observed behaviour
                  matches expected patterns.
                </p>

                <p>
                  Packet analysis provides a more detailed view by examining
                  individual packets, headers, protocols, addresses, ports and
                  communication sequences. Packet-analysis tools can therefore
                  be valuable in practical laboratories and technical
                  investigations.
                </p>

                <p>
                  Firewall and access-control analysis adds another layer by
                  examining which traffic is permitted, restricted or logged.
                  Together, these areas provide a foundation for understanding
                  defensive network architecture.
                </p>
              </div>

              <div className="card-grid">
                <div className="info-card">
                  <Server size={26} aria-hidden="true" />
                  <h3>Architecture</h3>
                  <p>
                    Topology, devices, communication paths and segmentation.
                  </p>
                </div>

                <div className="info-card">
                  <Search size={26} aria-hidden="true" />
                  <h3>Packet Analysis</h3>
                  <p>
                    Protocols, headers, addresses, ports and traffic patterns.
                  </p>
                </div>

                <div className="info-card">
                  <ShieldCheck size={26} aria-hidden="true" />
                  <h3>Security Controls</h3>
                  <p>
                    Firewalls, filtering, authentication and access policies.
                  </p>
                </div>

                <div className="info-card">
                  <Activity size={26} aria-hidden="true" />
                  <h3>Monitoring</h3>
                  <p>
                    Logs, events, anomalies and suspicious network behaviour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competencies */}
        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Core competencies"
              title="From packet captures to defensible network security findings."
              body="Effective network security work requires more than collecting screenshots or packet captures. Technical interpretation, evidence validation, security reasoning and clear documentation are central to producing meaningful findings."
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

        {/* Toolchains */}
        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Tools & environments"
              title="Technical environments relevant to network security projects."
              body="Technical guidance can cover the configuration, responsible use, interpretation and documentation of common networking and cybersecurity tools within isolated laboratories and authorised environments."
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

        {/* Academic project areas */}
        <section className="page-content section-muted">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Academic & technical projects"
                  title="Network security topics that can be explored through practical analysis."
                  body="Network security projects can combine theoretical concepts with practical observation and technical evidence. The exact scope can be adapted to the academic requirements, available laboratory environment and research objectives."
                />
              </div>

              <div className="framework-list">
                {projectAreas.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={20} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="Structured methodology"
              title="A repeatable framework for network security analysis."
              body="A disciplined methodology helps ensure that network observations are connected to clear objectives, appropriate evidence and defensible conclusions."
            />

            <div className="phase-grid">
              {methodology.map((step) => (
                <article className="phase-card" key={step.number}>
                  <span className="phase-number">{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Framework alignment */}
        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Framework alignment"
                  title="Network security work grounded in recognised security principles."
                  body="Academic and technical projects benefit from clear terminology, structured methodology and traceability to recognised security frameworks and standards."
                />
              </div>

              <div className="framework-list">
                {frameworks.map((framework) => (
                  <div key={framework.title}>
                    <ShieldCheck size={22} aria-hidden="true" />

                    <span>
                      <strong>{framework.title}</strong>
                      <small>{framework.body}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Responsible guidance */}
        <section className="page-content section-muted">
          <div className="container narrow-content">
            <div className="info-card">
              <div className="feature-icon">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>

              <SectionHeading
                eyebrow="Responsible technical guidance"
                title="Network analysis should remain controlled, authorised and evidence-based."
                body="Network traffic, security configurations and connected systems can contain sensitive information. Practical network-security work should therefore be performed within an isolated laboratory, an explicitly authorised environment or another setting where the necessary permissions are in place."
              />

              <p>
                Our role is to help students and researchers understand
                network security concepts, interpret technical evidence,
                structure analysis and document their findings. The objective
                is to strengthen technical understanding rather than replace
                the learner's own work.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="page-content">
          <div className="container narrow-content">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Network security project guidance."
              body="Common questions about network analysis, packet inspection, security controls, monitoring and technical documentation."
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

        {/* Internal links */}
        <section className="page-content">
          <div className="container">
            <div className="internal-links">
              <div>
                <p className="eyebrow">Explore cybersecurity</p>

                <h2>Continue exploring our technical areas.</h2>
              </div>

              <div className="internal-link-grid">
                {relatedServices.map((service) => (
                  <Link
                    href={service.href}
                    className="internal-link"
                    key={service.href}
                  >
                    <span>
                      <strong>{service.title}</strong>

                      <small>{service.description}</small>
                    </span>

                    <ArrowRight size={20} aria-hidden="true" />
                  </Link>
                ))}

                <Link
                  href="/services/cybersecurity"
                  className="internal-link"
                >
                  <span>
                    <strong>Cybersecurity Services</strong>

                    <small>
                      Explore the broader cybersecurity technical consultancy
                      offered by ProjectAssignments.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(networkSecuritySchema),
        }}
      />
    </>
  )
}