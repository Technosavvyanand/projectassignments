import { CTA, Footer, PageHero, SectionHeading } from '@/components/site'
import {
    Activity,
    AlertTriangle,
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Cloud,
    Code2,
    FileCheck2,
    FileSearch,
    LockKeyhole,
    Network,
    Search,
    Server,
    ShieldAlert,
    ShieldCheck,
    TerminalSquare,
    Workflow
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Security Operations & SIEM Assignment Help | SOC, Log Analysis & Cybersecurity Projects | ProjectAssignments',
  description:
    'Expert Security Operations and SIEM assignment guidance covering SOC workflows, SIEM architecture, log analysis, detection engineering, correlation rules, incident response, threat hunting, dashboards, security monitoring and technical documentation.',
  keywords: [
    'security operations assignment help',
    'SIEM assignment help',
    'SOC assignment help',
    'SIEM project help',
    'security operations project',
    'SIEM lab assignment',
    'SIEM log analysis assignment',
    'Splunk assignment help',
    'Microsoft Sentinel assignment help',
    'IBM QRadar assignment help',
    'Elastic Security assignment help',
    'SOC lab project',
    'security monitoring project',
    'incident response assignment',
    'SIEM architecture project',
    'log analysis assignment',
    'cybersecurity assignment help',
    'security operations coursework',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/cybersecurity/security-operations-siem',
  },
  openGraph: {
    title:
      'Security Operations & SIEM Assignment Help | ProjectAssignments',
    description:
      'Structured expert guidance for SOC and SIEM assignments, including log analysis, SIEM architecture, detection engineering, incident response, threat hunting and technical reporting.',
    type: 'website',
    url:
      'https://projectassignments.com/services/cybersecurity/security-operations-siem',
    images: [
      {
        url: 'https://projectassignments.com/images/siem.png',
        width: 1536,
        height: 1024,
        alt:
          'Security Operations and SIEM workflow showing centralized log collection, normalization, detection, correlation, investigation, incident response, monitoring and security reporting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Security Operations & SIEM Assignment Help | ProjectAssignments',
    description:
      'Expert guidance for SIEM, SOC, log analysis, detection engineering, incident response and cybersecurity projects.',
    images: ['https://projectassignments.com/images/siem.png'],
  },
}

const pageUrl =
  'https://projectassignments.com/services/cybersecurity/security-operations-siem'

const faqs = [
  {
    question: 'What type of Security Operations and SIEM assignments can you help with?',
    answer:
      'ProjectAssignments provides guidance for SIEM lab assignments, SOC projects, log-analysis exercises, SIEM architecture designs, detection and correlation rules, dashboards, incident-response workflows, threat-hunting exercises, research projects, technical reports and cybersecurity coursework across undergraduate and postgraduate levels.',
  },
  {
    question: 'Can you provide help with Splunk, Microsoft Sentinel, QRadar and Elastic Security?',
    answer:
      'Yes. Guidance can cover major SIEM platforms including Splunk, Microsoft Sentinel, IBM QRadar and Elastic Security. Support can include data ingestion, log analysis, query development, dashboards, detection rules, alert investigation, architecture and technical documentation.',
  },
  {
    question: 'Can you help me analyse my own SIEM logs or datasets?',
    answer:
      'Yes. Where the assignment permits the use of supplied datasets, guidance can cover the interpretation of Windows Event Logs, Syslog, firewall logs, authentication events, application logs, cloud security events, JSON records and other security telemetry. The analysis can then be translated into findings, evidence and a structured technical report.',
  },
  {
    question: 'Can you help with SPL, KQL, AQL and Elastic queries?',
    answer:
      'Yes. Technical guidance can cover SIEM query languages such as Splunk SPL, Microsoft KQL, IBM QRadar AQL and Elastic query languages. This may include filtering, aggregation, statistical analysis, correlation logic, time-window analysis, alert conditions and investigation workflows.',
  },
  {
    question: 'Can you help me build a SOC or SIEM laboratory?',
    answer:
      'Yes. Guidance can cover controlled laboratory environments using virtual machines, log sources, Syslog collectors, Windows Event Logs, Linux systems, network telemetry and SIEM platforms. The objective is to create an isolated environment suitable for learning, experimentation and academic project work.',
  },
  {
    question: 'Do you provide urgent Security Operations and SIEM assignment support?',
    answer:
      'Yes. ProjectAssignments offers round-the-clock academic and technical support, including assistance for urgent deadlines where available. Contact the team with the assignment requirements, deadline and technical scope so that the appropriate support can be assessed.',
  },
  {
    question: 'Are revisions available if clarification or changes are required?',
    answer:
      'Yes. Eligible work can be revised and refined when clarification or changes are required, subject to the applicable project scope and revision terms.',
  },
]

const focusAreas = [
  {
    icon: Server,
    title: 'SIEM Architecture & Deployment',
    body:
      'Understand centralized security-event collection, log ingestion pipelines, storage architecture, normalization, retention and scalable SIEM deployment models.',
  },
  {
    icon: FileSearch,
    title: 'Log Collection & Analysis',
    body:
      'Analyse authentication events, Windows Event Logs, Syslog, firewall records, application logs, cloud telemetry and other security data sources.',
  },
  {
    icon: Search,
    title: 'Threat Detection & Hunting',
    body:
      'Develop structured approaches for identifying suspicious behaviour, indicators of compromise, anomalous activity and adversary techniques.',
  },
  {
    icon: Code2,
    title: 'Detection & Correlation Rules',
    body:
      'Work with SPL, KQL, AQL, Elastic queries and related detection logic to correlate events and identify meaningful security patterns.',
  },
  {
    icon: ShieldAlert,
    title: 'Incident Response & Investigation',
    body:
      'Study alert triage, incident investigation, containment decisions, root-cause analysis, evidence collection and post-incident reporting.',
  },
  {
    icon: Activity,
    title: 'SOC Monitoring & Dashboards',
    body:
      'Explore security dashboards, alert queues, operational metrics, event visualisation and continuous monitoring workflows used within SOC environments.',
  },
]

const technicalAreas = [
  {
    area: 'SIEM Architecture',
    modules:
      'Log collectors, agents, Syslog, ingestion pipelines, normalization, indexing, storage, retention and high-availability concepts.',
    outcomes:
      'Architecture diagrams, data-flow models, deployment documentation and technical design explanations.',
  },
  {
    area: 'Log Analysis & Normalization',
    modules:
      'Windows Event Logs, Linux Syslog, firewall events, authentication records, application logs, JSON and cloud telemetry.',
    outcomes:
      'Parsed event examples, field mappings, normalized records, investigation notes and evidence tables.',
  },
  {
    area: 'Detection Engineering',
    modules:
      'Correlation logic, threshold-based detection, behavioural detection, IOC matching, time-window analysis and alert tuning.',
    outcomes:
      'Detection rules, query explanations, alert logic, false-positive analysis and MITRE ATT&CK mappings.',
  },
  {
    area: 'Threat Hunting',
    modules:
      'Hypothesis-driven searches, suspicious authentication, privilege escalation, lateral movement, command execution and network anomalies.',
    outcomes:
      'Hunting queries, investigation workflows, evidence summaries and threat-hunting reports.',
  },
  {
    area: 'Incident Response',
    modules:
      'Alert triage, investigation, containment, eradication, recovery, root-cause analysis and post-incident review.',
    outcomes:
      'Incident timelines, response playbooks, investigation reports and remediation recommendations.',
  },
  {
    area: 'SOC Reporting & Dashboards',
    modules:
      'Security dashboards, alert metrics, incident summaries, operational reporting and management-oriented security communication.',
    outcomes:
      'Dashboard designs, SOC reports, visual summaries and structured technical documentation.',
  },
]

const platforms = [
  {
    icon: TerminalSquare,
    title: 'Splunk',
    items: [
      'Search Processing Language (SPL)',
      'Data onboarding and source analysis',
      'Correlation searches and alerts',
      'Dashboards and visualisation',
      'Threat hunting workflows',
    ],
  },
  {
    icon: Cloud,
    title: 'Microsoft Sentinel',
    items: [
      'Kusto Query Language (KQL)',
      'Analytics rules',
      'Azure security telemetry',
      'Workbooks and dashboards',
      'Incident and investigation workflows',
    ],
  },
  {
    icon: Network,
    title: 'IBM QRadar',
    items: [
      'Ariel Query Language (AQL)',
      'Log source analysis',
      'Device Support Module concepts',
      'Custom rules and building blocks',
      'Offense investigation',
    ],
  },
  {
    icon: BarChart3,
    title: 'Elastic Security',
    items: [
      'Elastic Security and SIEM',
      'KQL and EQL concepts',
      'Elastic Agent and Beats',
      'Detection rules',
      'Event and process analysis',
    ],
  },
  {
    icon: Activity,
    title: 'Monitoring & Network Tools',
    items: [
      'Wireshark',
      'Zeek',
      'Suricata',
      'Syslog and log collectors',
      'Network-security telemetry',
    ],
  },
]

const detectionExamples = [
  {
    title: 'Brute-Force Authentication Detection',
    body:
      'Identify repeated failed authentication attempts followed by a successful login from the same source, user or endpoint. The exercise can cover event correlation, time windows, thresholds and false-positive analysis.',
    tags: ['Authentication Logs', 'Correlation', 'SPL / KQL'],
  },
  {
    title: 'Suspicious PowerShell Activity',
    body:
      'Investigate PowerShell process events and command-line telemetry to identify unusual execution patterns and correlate host activity with authentication or network events.',
    tags: ['Windows Events', 'Process Telemetry', 'MITRE ATT&CK'],
  },
  {
    title: 'Unusual Network Communication',
    body:
      'Correlate firewall, DNS, proxy or network-monitoring events to identify unexpected destinations, abnormal ports, repeated connections or potentially suspicious communication patterns.',
    tags: ['Network Logs', 'DNS', 'Traffic Analysis'],
  },
  {
    title: 'Privilege Escalation Investigation',
    body:
      'Analyse authentication, account-management and process events to understand how elevated privileges may have been obtained and what subsequent activity occurred.',
    tags: ['Windows Events', 'Identity', 'Investigation'],
  },
]

const methodology = [
  {
    number: '01',
    title: 'Define the Security Objective',
    body:
      'Establish the assignment requirements, environment, datasets, research question, scope and expected security outcomes before beginning technical analysis.',
  },
  {
    number: '02',
    title: 'Collect & Understand Telemetry',
    body:
      'Identify the available log sources, event formats, timestamps, fields and relevant network or host telemetry required for the investigation.',
  },
  {
    number: '03',
    title: 'Normalize & Investigate',
    body:
      'Interpret events, normalize relevant fields and construct searches that allow related activity to be examined across users, hosts, IP addresses and time periods.',
  },
  {
    number: '04',
    title: 'Detect & Correlate',
    body:
      'Develop detection logic and correlation rules to connect individual events into meaningful security patterns while considering thresholds and false positives.',
  },
  {
    number: '05',
    title: 'Investigate & Respond',
    body:
      'Examine alerts, reconstruct timelines, assess potential impact and document appropriate containment, remediation or incident-response actions.',
  },
  {
    number: '06',
    title: 'Report & Present',
    body:
      'Transform technical observations into structured reports containing methodology, evidence, findings, limitations, conclusions and recommendations.',
  },
]

const projectTopics = [
  'SIEM architecture and deployment planning',
  'SOC monitoring and alert-management workflows',
  'Windows Event Log analysis',
  'Linux Syslog and authentication analysis',
  'Firewall and network-device log analysis',
  'Brute-force and credential-attack detection',
  'Malware and suspicious-process investigation',
  'Threat hunting using SIEM query languages',
  'MITRE ATT&CK detection mapping',
  'Security dashboard and visualisation projects',
  'Incident-response playbook development',
  'Security alert triage and prioritisation',
  'False-positive reduction and alert tuning',
  'Cloud security-event monitoring',
  'Security operations research papers',
  'SOC and SIEM lab reports',
]

const benefits = [
  {
    icon: Activity,
    title: '24×7 Round-the-Clock Support',
    body:
      'Academic support when you need it, including evenings, weekends and urgent deadlines.',
  },
  {
    icon: FileCheck2,
    title: 'Free Revisions & Rework',
    body:
      'Need clarification or changes? Eligible work can be revised and refined without additional revision charges.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualified Subject Experts',
    body:
      'Get guidance from experienced professionals with subject-specific technical and academic expertise.',
  },
  {
    icon: LockKeyhole,
    title: 'Premium Yet Affordable',
    body:
      'High-quality academic and technical support designed to remain accessible to students and researchers.',
  },
  {
    icon: CheckCircle2,
    title: 'Plagiarism & AI-Free Work',
    body:
      'Original, responsibly prepared work with a strong focus on academic integrity and authentic understanding.',
  },
]

const siemSchema = {
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
          name: 'Security Operations & SIEM',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Security Operations & SIEM Assignment Help',
      url: pageUrl,
      description:
        'Expert academic and technical guidance covering Security Operations Centers, SIEM architecture, log analysis, detection engineering, threat hunting, incident response and cybersecurity project documentation.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com/',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
      },
      serviceType: 'Cybersecurity academic and technical consultancy',
    },
    {
      '@type': 'ImageObject',
      name: 'Security Operations and SIEM Workflow',
      contentUrl: 'https://projectassignments.com/images/siem.png',
      url: 'https://projectassignments.com/images/siem.png',
      caption:
        'Security Operations and SIEM workflow covering log collection, normalization, detection, correlation, investigation, incident response and reporting.',
      description:
        'A Security Operations and SIEM workflow diagram illustrating how security telemetry moves through collection, analysis, detection, investigation and response processes.',
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

export default function SecurityOperationsSiemPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Cybersecurity • Security Operations • SIEM"
          title="Security Operations & SIEM Assignment Help and Technical Guidance"
          body="Expert guidance for Security Operations Center workflows, SIEM architecture, log analysis, detection engineering, threat hunting, incident response, security monitoring and technical cybersecurity projects. Get structured support for demanding SOC and SIEM coursework, laboratory assignments, research projects and technical reports."
        />

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="SOC & SIEM expertise"
                  title="Turn complex security telemetry into meaningful findings."
                  body="Modern Security Operations Centers process enormous volumes of security events from endpoints, networks, applications, identity systems and cloud platforms. SIEM technologies help security teams collect, normalize, correlate and investigate this information. Our guidance connects those technical concepts with practical academic assignments, laboratory work and cybersecurity research."
                />

                <div className="mt-6 space-y-4">
                  <p>
                    Security Operations and SIEM assignments can be challenging
                    because they combine networking, operating systems,
                    authentication, log formats, threat detection, query
                    languages and incident-response methodology.
                  </p>

                  <p>
                    Whether the task involves building a SIEM architecture,
                    analysing a collection of security logs, writing
                    correlation rules, developing a SOC dashboard or preparing
                    an incident-response report, the technical work needs to be
                    connected to clear evidence and defensible conclusions.
                  </p>
                </div>
              </div>

              <div className="card-grid">
                <div className="info-card">
                  <Server size={28} aria-hidden="true" />
                  <h3>SIEM Architecture</h3>
                  <p>
                    Understand log sources, collection pipelines,
                    normalization, indexing, storage and security-event
                    processing.
                  </p>
                </div>

                <div className="info-card">
                  <Search size={28} aria-hidden="true" />
                  <h3>Log Investigation</h3>
                  <p>
                    Analyse authentication, endpoint, network, firewall,
                    application and cloud security events.
                  </p>
                </div>

                <div className="info-card">
                  <ShieldAlert size={28} aria-hidden="true" />
                  <h3>Threat Detection</h3>
                  <p>
                    Develop detection logic, correlation rules, hunting
                    queries and alert-investigation workflows.
                  </p>
                </div>

                <div className="info-card">
                  <Workflow size={28} aria-hidden="true" />
                  <h3>Incident Response</h3>
                  <p>
                    Study alert triage, investigation, containment,
                    remediation and post-incident reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Why SOC & SIEM assignments are challenging"
              title="Multiple technical layers must work together."
              body="A good SIEM project is rarely just a matter of entering a query into a platform. Students often need to understand where the data comes from, how it is normalized, what constitutes suspicious behaviour, how events should be correlated and how findings should ultimately be documented."
            />

            <div className="feature-list">
              <article className="feature-item">
                <div className="feature-icon">
                  <BarChart3 size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3>Large volumes of security telemetry</h3>
                  <p>
                    SIEM environments can generate enormous numbers of events.
                    Projects therefore require an understanding of filtering,
                    prioritisation, aggregation and false-positive reduction.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <div className="feature-icon">
                  <Network size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3>Multiple security data sources</h3>
                  <p>
                    Authentication systems, endpoints, firewalls, servers,
                    applications, cloud platforms and network sensors can all
                    contribute different event formats and fields.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <div className="feature-icon">
                  <Code2 size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3>Complex detection and correlation logic</h3>
                  <p>
                    Effective investigations may require SPL, KQL, AQL, EQL,
                    regular expressions, time-window analysis, aggregation and
                    multiple-event correlation.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <div className="feature-icon">
                  <AlertTriangle size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3>Distinguishing incidents from noise</h3>
                  <p>
                    A meaningful SOC investigation needs to separate routine
                    activity from genuine indicators of compromise and explain
                    why an alert should or should not be escalated.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Security Operations workflow</p>
              <h2>
                From security-event collection to investigation and response.
              </h2>
              <p>
                A SIEM supports a continuous security workflow in which
                telemetry is collected, processed, correlated and investigated
                before appropriate response and reporting activities take
                place.
              </p>
            </div>

            <figure className="content-image">
              <Image
                src="/images/siem.png"
                alt="Security Operations and SIEM workflow showing security log collection, event normalization, monitoring, detection and correlation, alert investigation, incident response, security reporting and continuous security operations"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
              />
              <figcaption>
                Security Operations and SIEM workflow illustrating the
                progression from security-event collection and analysis to
                detection, investigation, incident response and reporting.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Technical consultancy pillars"
              title="Comprehensive Security Operations and SIEM project coverage."
              body="Support can be structured around a specific assignment question, SIEM laboratory, research topic, technical implementation, security dataset or complete SOC-oriented project."
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
                  {technicalAreas.map((row) => (
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

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="Technical analysis"
              title="Log analysis, detection engineering and threat hunting."
              body="SIEM projects become much more meaningful when individual security events are connected into a broader investigative story. Technical guidance can cover the complete path from raw telemetry to defensible findings."
            />

            <div className="card-grid">
              <article className="info-card">
                <Search size={28} aria-hidden="true" />
                <h3>Log Collection & Normalization</h3>
                <p>
                  Understand how Windows Event Logs, Syslog, firewall records,
                  authentication events, application logs and cloud telemetry
                  enter a SIEM and are transformed into searchable security
                  data.
                </p>
              </article>

              <article className="info-card">
                <Code2 size={28} aria-hidden="true" />
                <h3>Detection Engineering</h3>
                <p>
                  Develop structured searches and detection rules using
                  appropriate query languages, thresholds, time windows,
                  aggregation and correlation techniques.
                </p>
              </article>

              <article className="info-card">
                <ShieldAlert size={28} aria-hidden="true" />
                <h3>Alert Investigation</h3>
                <p>
                  Trace related events, examine users, hosts, IP addresses and
                  processes, reconstruct timelines and determine whether an
                  alert represents meaningful security activity.
                </p>
              </article>

              <article className="info-card">
                <Activity size={28} aria-hidden="true" />
                <h3>Threat Hunting</h3>
                <p>
                  Use hypothesis-driven searches to investigate suspicious
                  authentication, process execution, network communication,
                  privilege escalation and other attacker behaviours.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Supported platforms & toolchains"
              title="Guidance across widely used SIEM and security-monitoring environments."
              body="Assignments can be developed around the platform specified by your university, laboratory or research requirements."
            />

            <div className="card-grid tool-grid">
              {platforms.map((platform) => {
                const Icon = platform.icon

                return (
                  <article className="info-card" key={platform.title}>
                    <Icon size={28} aria-hidden="true" />

                    <h3>{platform.title}</h3>

                    <ul>
                      {platform.items.map((item) => (
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

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Detection engineering examples"
              title="Practical SOC and SIEM scenarios."
              body="The following examples illustrate the type of technical problems that can be explored through SIEM assignments, laboratory exercises and cybersecurity projects."
            />

            <div className="feature-list">
              {detectionExamples.map((example) => (
                <article className="feature-item" key={example.title}>
                  <div className="feature-icon">
                    <ShieldCheck size={24} aria-hidden="true" />
                  </div>

                  <div>
                    <h3>{example.title}</h3>

                    <p>{example.body}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {example.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Academic & technical projects"
              title="Topics that can be explored through SOC and SIEM coursework."
              body="Security Operations projects can range from introductory log-analysis exercises to advanced SIEM architecture, threat-hunting and incident-response research. The exact scope can be adapted to the assignment brief, academic level and available laboratory environment."
            />

            <div className="card-grid">
              {projectTopics.map((topic) => (
                <div className="info-card" key={topic}>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <h3>{topic}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-content section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="Structured project methodology"
              title="A repeatable approach to Security Operations and SIEM assignments."
              body="A well-structured SIEM project should connect its objective, telemetry, analysis methodology, detection logic, evidence and final conclusions."
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

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Framework alignment"
                  title="Connect SOC analysis with recognized cybersecurity frameworks."
                  body="Academic SIEM projects become stronger when technical observations are connected to established security methodologies and frameworks. Depending on the assignment, analysis can be mapped to recognized security standards and threat frameworks."
                />
              </div>

              <div className="framework-list">
                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>NIST Cybersecurity Framework principles</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>NIST SP 800-61 incident-response concepts</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>MITRE ATT&CK tactics, techniques and procedures</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>Security monitoring and detection engineering practices</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>ISO 27001 information-security principles</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>PCI DSS security-monitoring considerations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="What you receive"
              title="Professional academic and technical support."
              body="ProjectAssignments provides structured assistance designed around the requirements of your specific assignment, laboratory, research project or technical documentation."
            />

            <div className="feature-list">
              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <article className="feature-item" key={benefit.title}>
                    <div className="feature-icon">
                      <Icon size={24} aria-hidden="true" />
                    </div>

                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.body}</p>
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
              eyebrow="Frequently asked questions"
              title="Security Operations and SIEM assignment guidance."
              body="Common questions about SIEM platforms, SOC laboratories, log analysis, detection engineering and technical project support."
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
                <Link
                  href="/services/cybersecurity"
                  className="internal-link"
                >
                  <span>
                    <strong>Cybersecurity Services</strong>
                    <small>
                      Explore our broader cybersecurity technical consultancy.
                    </small>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/cybersecurity/network-security"
                  className="internal-link"
                >
                  <span>
                    <strong>Network Security</strong>
                    <small>
                      Explore network architecture, traffic analysis,
                      monitoring and security controls.
                    </small>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/cybersecurity/penetration-testing"
                  className="internal-link"
                >
                  <span>
                    <strong>Penetration Testing</strong>
                    <small>
                      Explore VAPT, reconnaissance, vulnerability analysis and
                      controlled security testing.
                    </small>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/cybersecurity/digital-forensics"
                  className="internal-link"
                >
                  <span>
                    <strong>Digital Forensics</strong>
                    <small>
                      Explore evidence acquisition, forensic analysis,
                      investigation and technical reporting.
                    </small>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link href="/technologies" className="internal-link">
                  <span>
                    <strong>Technologies</strong>
                    <small>
                      Explore the technologies and technical frameworks used
                      across our project areas.
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
          __html: JSON.stringify(siemSchema),
        }}
      />
    </>
  )
}