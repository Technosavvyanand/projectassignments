import { CTA, Footer, PageHero, SectionHeading } from '@/components/site'
import {
    ArrowRight,
    CheckCircle2,
    Cloud,
    Code2,
    Container,
    Database,
    FileCode2,
    Globe2,
    KeyRound,
    LockKeyhole,
    Network,
    Server,
    ShieldCheck,
    TerminalSquare,
    Workflow
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Cloud Security Assignment Help & Project Guidance | AWS, Azure & GCP | ProjectAssignments',
  description:
    'Cloud security assignment help and technical project guidance covering AWS, Azure, GCP, IAM, cloud architecture, Kubernetes security, DevSecOps, IaC security, encryption, compliance, and cloud incident response.',
  keywords: [
    'cloud security assignment help',
    'cloud security assignment help online',
    'cloud security project help',
    'cloud security project guidance',
    'AWS security assignment help',
    'Azure security assignment help',
    'GCP security assignment help',
    'AWS IAM policy assignment',
    'cloud security lab help',
    'Kubernetes security assignment',
    'Kubernetes security project',
    'Terraform security assignment',
    'IaC security project',
    'cloud security architecture project',
    'multi-cloud security assignment',
    'cloud security research project',
    'DevSecOps security assignment',
    'cloud security coursework help',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/cybersecurity/cloud-security',
  },
  openGraph: {
    title:
      'Cloud Security Assignment Help & Project Guidance | ProjectAssignments',
    description:
      'Technical guidance for cloud security assignments, AWS/Azure/GCP projects, IAM, Kubernetes, DevSecOps, IaC security, cloud architecture and incident response.',
    type: 'website',
    url: 'https://projectassignments.com/services/cybersecurity/cloud-security',
    images: [
      {
        url: 'https://projectassignments.com/images/cloud-security.png',
        width: 1536,
        height: 1024,
        alt:
          'Cloud security workflow and architecture diagram illustrating identity, network protection, data security, monitoring, compliance, threat detection and incident response',
      },
    ],
  },
}

const pageUrl =
  'https://projectassignments.com/services/cybersecurity/cloud-security'

const faqs = [
  {
    question: 'What types of cloud security assignments can you help with?',
    answer:
      'We provide technical and academic guidance for AWS, Microsoft Azure, and Google Cloud Platform security assignments, including IAM policy analysis, cloud architecture, network security, encryption, Kubernetes security, Terraform and Infrastructure as Code security, DevSecOps, compliance, monitoring, and cloud incident-response projects.',
  },
  {
    question: 'Can you help me fix an AWS IAM or Azure access-control policy?',
    answer:
      'Yes. Guidance can cover least-privilege IAM policies, role and permission analysis, resource-based policies, access-control troubleshooting, identity federation, MFA, privilege-escalation risks, and policy hardening in controlled academic or laboratory environments.',
  },
  {
    question: 'Can you help with Kubernetes and container security assignments?',
    answer:
      'Yes. Support can cover Kubernetes RBAC, NetworkPolicies, Pod Security Standards, admission controls, container image scanning, Dockerfile hardening, runtime monitoring, and cloud-native security concepts using tools such as Trivy, Falco, Kyverno, and Open Policy Agent.',
  },
  {
    question: 'Can you help with Terraform and Infrastructure as Code security?',
    answer:
      'Yes. We can assist with Terraform, CloudFormation, Bicep, and related Infrastructure as Code security tasks, including configuration review, security scanning, remediation of misconfigurations, policy interpretation, and integration of tools such as Checkov and KICS into controlled CI/CD workflows.',
  },
  {
    question: 'Do you support multi-cloud security architecture projects?',
    answer:
      'Yes. Multi-cloud assignments can involve AWS, Azure, and GCP identity models, network architecture, centralized logging, encryption, governance, security monitoring, and mapping equivalent security controls across different cloud platforms.',
  },
  {
    question: 'Can you provide urgent cloud security assignment support?',
    answer:
      'Yes. Expedited support options are available for urgent academic and technical requirements, including troubleshooting, lab guidance, technical documentation, configuration assistance, and report preparation subject to project scope and availability.',
  },
]

const scopeRows = [
  {
    area: 'Cloud Identity & Access Management',
    modules:
      'AWS IAM, Microsoft Entra ID, GCP Cloud IAM, RBAC, ABAC, least privilege, MFA, federation, SSO, policy analysis, and privilege-escalation review.',
    outcomes:
      'IAM policy reviews, role-permission maps, access-control recommendations, identity architecture diagrams, and documented security findings.',
  },
  {
    area: 'Cloud Infrastructure & Network Security',
    modules:
      'VPC/VNet architecture, subnetting, security groups, NACLs, firewalls, WAF, VPNs, private connectivity, segmentation, and hybrid-cloud security.',
    outcomes:
      'Secure network diagrams, segmentation models, firewall-rule analysis, connectivity reviews, and cloud network security recommendations.',
  },
  {
    area: 'Data Protection & Key Management',
    modules:
      'Encryption at rest and in transit, AWS KMS, Azure Key Vault, Google Cloud KMS, TLS, certificate management, storage security, and data-loss prevention.',
    outcomes:
      'Encryption architectures, key-management plans, storage-security findings, data-protection matrices, and technical recommendations.',
  },
  {
    area: 'DevSecOps & IaC Security',
    modules:
      'Terraform, CloudFormation, Bicep, Checkov, KICS, CI/CD security, secret detection, SAST concepts, and shift-left security controls.',
    outcomes:
      'IaC security audits, remediation guidance, secure configuration templates, pipeline security recommendations, and vulnerability summaries.',
  },
  {
    area: 'Container & Kubernetes Security',
    modules:
      'Docker security, image scanning, Kubernetes RBAC, NetworkPolicies, Pod Security Standards, admission control, Falco, Trivy, Kyverno, and OPA.',
    outcomes:
      'Container-hardening recommendations, Kubernetes manifests, security-policy reviews, vulnerability reports, and architecture documentation.',
  },
  {
    area: 'Cloud Governance & Incident Response',
    modules:
      'CIS benchmarks, NIST controls, ISO 27017/27018, PCI DSS, cloud logging, CSPM, CloudTrail, Defender for Cloud, Security Command Center, and incident response.',
    outcomes:
      'Compliance mappings, security posture assessments, incident-response workflows, log-analysis reports, and remediation plans.',
  },
]

const competencies = [
  {
    icon: KeyRound,
    title: 'IAM, Zero Trust & Least Privilege',
    body:
      'Analyse cloud identity architectures, IAM roles, access policies, RBAC and ABAC models, federation, MFA, SSO, and privilege boundaries while applying least-privilege principles to cloud workloads.',
  },
  {
    icon: Network,
    title: 'Cloud Network Security',
    body:
      'Study VPC and VNet architecture, subnetting, security groups, NACLs, firewalls, WAFs, private connectivity, VPNs, hybrid networking, and microsegmentation in cloud environments.',
  },
  {
    icon: LockKeyhole,
    title: 'Encryption & Key Management',
    body:
      'Explore data-at-rest and data-in-transit protection using cloud-native key-management services, TLS, certificate management, storage encryption, and secure secrets handling.',
  },
  {
    icon: Code2,
    title: 'Infrastructure as Code Security',
    body:
      'Review Terraform, CloudFormation, Bicep, and other IaC configurations for security weaknesses and understand how automated security scanners can identify and prioritise misconfigurations.',
  },
  {
    icon: Container,
    title: 'Container & Kubernetes Security',
    body:
      'Cover container image security, Dockerfile hardening, Kubernetes RBAC, NetworkPolicies, admission controls, Pod Security Standards, runtime monitoring, and cloud-native security architecture.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance, Compliance & CSPM',
    body:
      'Map cloud environments to recognised security frameworks and study cloud security posture management, configuration assessment, compliance controls, security monitoring, and remediation workflows.',
  },
]

const toolchains = [
  {
    icon: Cloud,
    title: 'Amazon Web Services',
    items: [
      'AWS IAM',
      'AWS KMS',
      'CloudTrail',
      'GuardDuty',
      'Security Hub',
      'AWS WAF',
      'Amazon Inspector',
      'Amazon Macie',
    ],
  },
  {
    icon: Server,
    title: 'Microsoft Azure',
    items: [
      'Microsoft Entra ID',
      'Azure RBAC',
      'Azure Key Vault',
      'Microsoft Defender for Cloud',
      'Azure Sentinel',
      'Network Security Groups',
      'Azure WAF',
      'Azure Monitor',
    ],
  },
  {
    icon: Globe2,
    title: 'Google Cloud Platform',
    items: [
      'Cloud IAM',
      'Cloud KMS',
      'Security Command Center',
      'Secret Manager',
      'VPC Service Controls',
      'Cloud Logging',
      'Cloud Audit Logs',
      'BigQuery security analysis',
    ],
  },
  {
    icon: Container,
    title: 'Container & Kubernetes Security',
    items: [
      'Kubernetes RBAC',
      'NetworkPolicies',
      'Trivy',
      'Falco',
      'Kyverno',
      'OPA Gatekeeper',
      'Pod Security Standards',
      'Docker security',
    ],
  },
  {
    icon: TerminalSquare,
    title: 'IaC & DevSecOps',
    items: [
      'Terraform',
      'AWS CloudFormation',
      'Azure Bicep',
      'Checkov',
      'KICS',
      'GitHub Actions',
      'GitLab CI',
      'Secret scanning',
    ],
  },
]

const phases = [
  {
    number: '01',
    title: 'Requirements, Scope & Cloud Environment',
    body:
      'Define the academic or technical objectives, identify the target cloud provider, establish account and resource constraints, understand the lab environment, and determine the security questions the project needs to answer.',
  },
  {
    number: '02',
    title: 'Architecture & Asset Analysis',
    body:
      'Examine cloud resources, identities, networks, workloads, storage services, databases, containers, APIs, and trust boundaries to understand how the environment is structured and where security controls are applied.',
  },
  {
    number: '03',
    title: 'Identity & Configuration Assessment',
    body:
      'Review IAM policies, roles, permissions, security groups, network rules, storage configurations, encryption settings, exposed services, and other cloud configuration parameters to identify security weaknesses.',
  },
  {
    number: '04',
    title: 'Security Testing & Validation',
    body:
      'Use appropriate tools and controlled laboratory techniques to validate identified issues, analyse IaC configurations, inspect container images, review security logs, or test security controls without exceeding the authorised project scope.',
  },
  {
    number: '05',
    title: 'Monitoring, Detection & Incident Analysis',
    body:
      'Examine cloud audit logs, security findings, alerts, threat-detection events, network activity, and workload telemetry to understand how suspicious activity can be detected, correlated, investigated, and escalated.',
  },
  {
    number: '06',
    title: 'Remediation & Security Hardening',
    body:
      'Translate technical findings into practical remediation steps covering least privilege, network segmentation, encryption, secure configurations, container hardening, IaC improvements, logging, monitoring, and governance.',
  },
  {
    number: '07',
    title: 'Technical Reporting & Documentation',
    body:
      'Prepare structured project documentation containing methodology, architecture diagrams, configuration evidence, screenshots, findings, severity or risk context, remediation recommendations, limitations, and conclusions.',
  },
]

const frameworkItems = [
  'AWS Well-Architected security principles',
  'Microsoft Azure security architecture principles',
  'Google Cloud security architecture concepts',
  'NIST Cybersecurity Framework and security controls',
  'NIST SP 800-207 Zero Trust Architecture',
  'CIS cloud security benchmarks',
  'ISO 27001 information security principles',
  'ISO 27017 and ISO 27018 cloud security considerations',
  'PCI DSS security requirements',
]

const scenarios = [
  {
    title: 'Scenario A: AWS IAM Least-Privilege Analysis',
    objective:
      'Analyse an AWS IAM policy containing overly broad permissions and redesign it according to the principle of least privilege.',
    guidance:
      'We help break down the policy statement-by-statement, identify unnecessary permissions, examine resource scopes and conditions, and construct a more restrictive policy while explaining why each change improves the security posture.',
  },
  {
    title: 'Scenario B: Kubernetes Network Segmentation',
    objective:
      'Design Kubernetes NetworkPolicies so that frontend workloads can communicate with approved backend services while preventing direct access to restricted namespaces.',
    guidance:
      'We explain namespace selectors, pod selectors, ingress and egress controls, default-deny strategies, service dependencies, and how the resulting policy affects the intended communication paths.',
  },
  {
    title: 'Scenario C: Terraform Security Assessment',
    objective:
      'Audit an Infrastructure as Code configuration for cloud security weaknesses and produce a remediated version.',
    guidance:
      'We can guide the use of security scanners such as Checkov, explain the flagged controls, distinguish genuine risks from context-dependent findings, and implement appropriate remediation in the Terraform configuration.',
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
          name: 'Cloud Security',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Cloud Security Assignment Help & Project Guidance',
      url: pageUrl,
      description:
        'Technical and academic guidance covering AWS, Azure, GCP, cloud identity, network security, encryption, Kubernetes, DevSecOps, Infrastructure as Code, compliance, monitoring, and cloud incident response.',
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
      serviceType: 'Cloud security technical consultancy',
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

export default function CloudSecurityPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Cybersecurity • Cloud Security • AWS • Azure • GCP"
          title="Hands-On Cloud Security Assignment Help & Technical Project Guidance"
          body="Technical guidance for cloud security assignments, AWS, Azure and GCP laboratories, IAM policy analysis, cloud architecture, Kubernetes security, Infrastructure as Code, DevSecOps, compliance, monitoring, and cloud incident-response projects. Get practical assistance with complex cloud environments while building a clear understanding of the underlying security concepts."
        />

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Cloud security scope"
                  title="Structured guidance across modern cloud security environments."
                  body="Cloud security combines identity, network architecture, data protection, workload security, automation, monitoring, governance, and incident response. Our technical guidance connects these areas into practical academic projects, laboratory exercises, research work, and technical documentation."
                />
              </div>

              <div className="card-grid">
                <div className="info-card">
                  <KeyRound size={28} aria-hidden="true" />
                  <h3>Identity & IAM</h3>
                  <p>
                    Study least privilege, RBAC, ABAC, MFA, federation,
                    permissions, roles, and cloud identity architectures.
                  </p>
                </div>

                <div className="info-card">
                  <Network size={28} aria-hidden="true" />
                  <h3>Cloud Network Security</h3>
                  <p>
                    Explore VPCs, VNets, subnetting, security groups, NACLs,
                    firewalls, WAFs, VPNs, and network segmentation.
                  </p>
                </div>

                <div className="info-card">
                  <LockKeyhole size={28} aria-hidden="true" />
                  <h3>Data Protection</h3>
                  <p>
                    Analyse encryption, key management, TLS, secure storage,
                    certificates, secrets, and data-protection controls.
                  </p>
                </div>

                <div className="info-card">
                  <Container size={28} aria-hidden="true" />
                  <h3>Cloud-Native Security</h3>
                  <p>
                    Work with container security, Kubernetes hardening,
                    serverless security, runtime monitoring, and workload
                    protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Cloud security methodology</p>
              <h2>Cloud Security Assessment & Project Workflow</h2>
              <p>
                A structured cloud security workflow connects requirements,
                architecture analysis, identity and configuration assessment,
                security validation, monitoring, remediation, and technical
                reporting.
              </p>
            </div>

            <figure className="content-image">
              <Image
                src="/images/cloud-security.png"
                alt="Cloud security workflow diagram showing cloud identity and access control, network protection, data security, workload protection, monitoring and threat detection, governance and compliance, and incident response"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 768px) 100vw, 1536px"
              />
              <figcaption>
                Cloud security workflow connecting identity and access
                management, network protection, data security, workload
                protection, monitoring, governance, threat detection, and
                incident response.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Technical scope"
              title="Comprehensive cloud security topics for assignments and projects."
              body="Cloud security coursework can span individual configuration tasks or complete cloud-security architecture projects. Guidance can be tailored to AWS, Azure, GCP, Kubernetes, Infrastructure as Code, or multi-cloud environments."
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
              title="From IAM policies to cloud-native security findings."
              body="Effective cloud security requires more than knowing individual services. Projects often require understanding how identity, architecture, configuration, automation, monitoring, and governance interact across the cloud environment."
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
              eyebrow="Platforms & toolchains"
              title="Major cloud platforms and security technologies."
              body="Technical guidance can cover configuration, troubleshooting, security analysis, interpretation, documentation, and controlled laboratory use of common cloud-security platforms and tools."
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
              title="A repeatable framework for cloud security project execution."
              body="Cloud security projects benefit from a disciplined methodology that connects architecture, configuration, testing, monitoring, remediation, and reporting."
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
                  title="Cloud security work grounded in recognised security frameworks."
                  body="Academic cloud-security projects often need more than screenshots and configuration files. They require a defensible methodology, appropriate security terminology, traceable controls, and clear connections to recognised frameworks and standards."
                />
              </div>

              <div className="framework-list">
                {frameworkItems.map((item) => (
                  <div key={item}>
                    <ShieldCheck size={22} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Practical project scenarios"
              title="Cloud security assignments can be highly hands-on."
              body="From IAM policy debugging to Kubernetes network isolation and Infrastructure as Code security audits, practical scenarios can combine configuration, testing, evidence, analysis, and documentation."
            />

            <div className="card-grid">
              {scenarios.map((scenario) => (
                <article className="info-card" key={scenario.title}>
                  <FileCode2 size={28} aria-hidden="true" />

                  <h3>{scenario.title}</h3>

                  <p>
                    <strong>Student objective:</strong>{' '}
                    {scenario.objective}
                  </p>

                  <p>
                    <strong>How we guide you:</strong>{' '}
                    {scenario.guidance}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Long-tail project topics"
              title="Focused help for specific cloud security coursework."
              body="Cloud security assignments frequently centre on a particular technology, security control, or practical lab objective. Focused guidance can help connect the technical implementation with the required academic explanation."
            />

            <div className="card-grid">
              <div className="info-card">
                <KeyRound size={28} aria-hidden="true" />
                <h3>AWS IAM Policy Debugging</h3>
                <p>
                  Step-by-step analysis of IAM policies, role permissions,
                  resource scopes, conditions, least privilege, and access
                  control.
                </p>
              </div>

              <div className="info-card">
                <Container size={28} aria-hidden="true" />
                <h3>Kubernetes Security Assignments</h3>
                <p>
                  Guidance for RBAC, NetworkPolicies, Pod Security Standards,
                  container hardening, admission control, and runtime security.
                </p>
              </div>

              <div className="info-card">
                <Workflow size={28} aria-hidden="true" />
                <h3>DevSecOps & IaC Security</h3>
                <p>
                  Study secure CI/CD workflows, Terraform security, Checkov
                  findings, secret detection, and automated cloud-security
                  controls.
                </p>
              </div>

              <div className="info-card">
                <Database size={28} aria-hidden="true" />
                <h3>Cloud Data Protection</h3>
                <p>
                  Explore cloud storage security, encryption, KMS architectures,
                  key rotation, data classification, and secure data handling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="How our guidance works"
              title="From project brief to verified technical submission."
              body="We provide practical assistance throughout the project lifecycle, from understanding the assignment requirements through implementation, troubleshooting, technical explanation, and final documentation."
            />

            <div className="phase-grid">
              <article className="phase-card">
                <span className="phase-number">01</span>
                <h3>Submit Your Requirements</h3>
                <p>
                  Share your assignment prompt, rubric, lab instructions,
                  architecture diagrams, code, configuration files, datasets,
                  or other project requirements.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">02</span>
                <h3>Technical Review & Scoping</h3>
                <p>
                  We analyse the requirements, identify the cloud platform and
                  technologies involved, determine the project scope, and
                  establish the appropriate technical approach.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">03</span>
                <h3>Implementation & Explanation</h3>
                <p>
                  Receive hands-on technical assistance, configuration
                  guidance, code or policy examples, troubleshooting support,
                  diagrams, and step-by-step explanations.
                </p>
              </article>

              <article className="phase-card">
                <span className="phase-number">04</span>
                <h3>Quality & Documentation Review</h3>
                <p>
                  Technical work can be reviewed for accuracy, consistency,
                  formatting, originality, and alignment with the assignment
                  requirements before final submission.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container narrow-content">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Cloud security assignment help and guidance."
              body="Common questions about AWS, Azure, GCP, Kubernetes, Infrastructure as Code, cloud architecture, troubleshooting, and technical documentation."
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
                      monitoring, and defensive security controls.
                    </small>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/cybersecurity/security-operations-siem"
                  className="internal-link"
                >
                  <span>
                    <strong>Security Operations & SIEM</strong>
                    <small>
                      Explore security monitoring, log analysis, detection
                      engineering, and SOC workflows.
                    </small>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/cybersecurity/penetration-testing"
                  className="internal-link"
                >
                  <span>
                    <strong>Penetration Testing & VAPT</strong>
                    <small>
                      Explore vulnerability assessment, controlled testing,
                      exploitation, and security reporting.
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