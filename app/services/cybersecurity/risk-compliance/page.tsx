import { CTA, Footer, PageHero, SectionHeading } from '@/components/site'
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    ClipboardCheck,
    FileCheck2,
    FileText,
    Gavel,
    Globe2,
    Landmark,
    LockKeyhole,
    Network,
    Scale,
    ShieldCheck,
    Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Cybersecurity Risk & Compliance Assignment Guidance | ProjectAssignments',
  description:
    'Technical guidance for cybersecurity risk assessments, GRC projects, NIST and ISO control mapping, compliance frameworks, IT auditing, security policies, third-party risk, and cybersecurity governance documentation.',
  alternates: {
    canonical:
      'https://projectassignments.com/services/cybersecurity/risk-compliance',
  },
  openGraph: {
    title:
      'Cybersecurity Risk & Compliance Assignment Guidance | ProjectAssignments',
    description:
      'Technical guidance for cybersecurity risk assessments, GRC projects, NIST and ISO control mapping, compliance frameworks, IT auditing, security policies, and cybersecurity governance documentation.',
    type: 'website',
    url: 'https://projectassignments.com/services/cybersecurity/risk-compliance',
    images: [
      {
        url: 'https://projectassignments.com/images/risk.png',
        width: 1024,
        height: 576,
        alt:
          'Cybersecurity risk and compliance workflow illustrating governance, risk assessment, control mapping, compliance analysis, audit evidence, and remediation',
      },
    ],
  },
}

const pageUrl =
  'https://projectassignments.com/services/cybersecurity/risk-compliance'

const faqs = [
  {
    question: 'What types of cybersecurity risk and compliance assignments do you support?',
    answer:
      'We provide structured guidance across quantitative and qualitative risk assessments, regulatory gap analysis, NIST and ISO control mapping, enterprise security policies, SOC 2 readiness analysis, third-party risk management, business continuity, disaster recovery, and cybersecurity governance projects.',
  },
  {
    question: 'Can you help me develop an information security policy for a case study?',
    answer:
      'Yes. Guidance can cover Acceptable Use Policies, Access Control Policies, Data Classification Standards, Vendor Risk Management policies, Incident Response Plans, Business Continuity Plans, and other governance documents tailored to the scenario and assignment requirements.',
  },
  {
    question: 'Do you provide step-by-step calculations for quantitative risk assessments?',
    answer:
      'Yes. We can explain calculations involving Asset Value, Exposure Factor, Single Loss Expectancy, Annual Rate of Occurrence, Annualized Loss Expectancy, mitigation value, and cost-benefit analysis, together with the assumptions behind the calculations.',
  },
  {
    question: 'Can you help map ISO 27001 controls to the NIST Cybersecurity Framework?',
    answer:
      'Yes. We can provide guidance on constructing crosswalks between ISO/IEC 27001:2022 controls and NIST CSF 2.0 functions and categories, including explanations for areas of overlap and differences in scope.',
  },
  {
    question: 'Can you help with GDPR, HIPAA, PCI DSS, or other regulatory compliance projects?',
    answer:
      'Yes. We can help interpret the requirements relevant to an academic case study and structure compliance matrices, gap assessments, control mappings, risk analyses, and supporting documentation. The exact regulatory requirements should always be validated against the applicable jurisdiction and current official guidance.',
  },
  {
    question: 'How do you ensure the guidance matches my university rubric?',
    answer:
      'The assignment prompt, case study and grading rubric can be used as the basis for structuring the guidance. We can help identify required sections, map them to the relevant framework or methodology, and check whether the proposed analysis addresses the stated assessment criteria.',
  },
]

const scopeRows = [
  {
    area: 'Cybersecurity Risk Assessment',
    modules:
      'Asset identification, threat analysis, vulnerability assessment, likelihood and impact scoring, risk matrices, risk registers, and risk treatment planning.',
    outcomes:
      'Structured risk registers, qualitative risk matrices, quantitative calculations, treatment plans, and documented risk assumptions.',
  },
  {
    area: 'Security Framework Mapping',
    modules:
      'NIST CSF 2.0, NIST SP 800-53, NIST SP 800-171, ISO/IEC 27001, ISO/IEC 27002, and CIS Controls.',
    outcomes:
      'Control crosswalks, maturity assessments, gap analysis, control rationales, and implementation recommendations.',
  },
  {
    area: 'Regulatory Compliance',
    modules:
      'GDPR, HIPAA, PCI DSS, CCPA/CPRA, GLBA, FISMA, FedRAMP, and CMMC concepts.',
    outcomes:
      'Compliance matrices, regulatory gap assessments, scope definitions, evidence requirements, and remediation priorities.',
  },
  {
    area: 'IT Auditing & Assurance',
    modules:
      'Audit planning, control testing, evidence gathering, deficiency identification, SOC reporting concepts, and audit workpapers.',
    outcomes:
      'Audit programs, evidence matrices, control-testing documentation, findings, recommendations, and readiness assessments.',
  },
  {
    area: 'Third-Party Risk Management',
    modules:
      'Vendor assessments, supply-chain risk, security questionnaires, SOC 2 review, contractual security requirements, and risk scoring.',
    outcomes:
      'Vendor risk registers, assessment questionnaires, control mappings, security requirements, and risk treatment recommendations.',
  },
  {
    area: 'Security Governance & Policies',
    modules:
      'Information security policies, access control, acceptable use, incident response, business continuity, disaster recovery, and governance structures.',
    outcomes:
      'Policy frameworks, governance documentation, control ownership models, RTO/RPO analysis, and security KPI/KRI structures.',
  },
]

const competencies = [
  {
    icon: ShieldCheck,
    title: 'NIST & ISO Control Mapping',
    body:
      'Structured guidance for mapping security requirements across NIST CSF 2.0, NIST SP 800-53, NIST SP 800-171, ISO/IEC 27001, ISO/IEC 27002, and related control frameworks.',
  },
  {
    icon: BarChart3,
    title: 'Quantitative & Qualitative Risk Analysis',
    body:
      'Work through risk matrices, risk registers, likelihood-impact scoring, SLE, ARO, ALE, mitigation value, and other quantitative or qualitative risk-analysis approaches.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Gap Assessment',
    body:
      'Identify gaps between an organization or case-study environment and the requirements of a selected regulatory or governance framework, then structure practical remediation priorities.',
  },
  {
    icon: FileCheck2,
    title: 'IT Audit & Assurance',
    body:
      'Understand audit planning, evidence collection, control testing, deficiency classification, audit findings, and readiness assessments for academic and professional case studies.',
  },
  {
    icon: Users,
    title: 'Third-Party & Supply-Chain Risk',
    body:
      'Analyse vendor security questionnaires, SOC reports, contractual requirements, cloud-provider risks, supply-chain dependencies, and third-party control effectiveness.',
  },
  {
    icon: FileText,
    title: 'Security Governance & Policy',
    body:
      'Develop structured approaches to information security policies, incident response, business continuity, disaster recovery, access governance, and security accountability.',
  },
]

const frameworks = [
  {
    icon: ShieldCheck,
    title: 'NIST CSF 2.0 & NIST SP 800 Series',
    items: [
      'NIST Cybersecurity Framework 2.0',
      'NIST SP 800-53 Rev. 5',
      'NIST SP 800-30',
      'NIST SP 800-61 concepts',
      'NIST SP 800-171',
    ],
  },
  {
    icon: LockKeyhole,
    title: 'ISO & CIS Security Standards',
    items: [
      'ISO/IEC 27001:2022',
      'ISO/IEC 27002',
      'ISO 27001 Statement of Applicability',
      'CIS Controls v8',
      'Security maturity and gap assessments',
    ],
  },
  {
    icon: Globe2,
    title: 'Privacy & Regulatory Frameworks',
    items: [
      'GDPR',
      'HIPAA',
      'PCI DSS',
      'CCPA / CPRA',
      'GLBA',
      'FISMA and FedRAMP concepts',
    ],
  },
  {
    icon: Landmark,
    title: 'Audit & Assurance',
    items: [
      'SOC 1',
      'SOC 2 Type I and Type II',
      'SOC 3',
      'AICPA Trust Services Criteria',
      'Control testing and evidence analysis',
    ],
  },
]

const phases = [
  {
    number: '01',
    title: 'Requirements, Scope & Context',
    body:
      'Establishing the business, technical, regulatory, and academic context of the project. This includes identifying the systems, assets, stakeholders, jurisdictions, frameworks, and assessment boundaries that matter.',
  },
  {
    number: '02',
    title: 'Asset, Threat & Risk Identification',
    body:
      'Identifying relevant assets, threats, vulnerabilities, business impacts, and risk scenarios. Qualitative and quantitative techniques can then be selected according to the requirements of the project.',
  },
  {
    number: '03',
    title: 'Framework & Control Mapping',
    body:
      'Mapping identified security requirements to appropriate frameworks such as NIST CSF 2.0, NIST SP 800-53, ISO/IEC 27001, CIS Controls, or a relevant regulatory standard.',
  },
  {
    number: '04',
    title: 'Gap & Maturity Analysis',
    body:
      'Comparing the current-state security posture against the desired controls or compliance requirements to identify gaps, weaknesses, maturity limitations, and evidence deficiencies.',
  },
  {
    number: '05',
    title: 'Risk Treatment & Remediation',
    body:
      'Evaluating risk acceptance, avoidance, mitigation, and transfer options while prioritising remediation according to likelihood, impact, business objectives, regulatory requirements, and available resources.',
  },
  {
    number: '06',
    title: 'Evidence, Audit & Assurance',
    body:
      'Structuring evidence requirements, control-testing procedures, audit observations, deficiency statements, and supporting documentation so that conclusions are traceable to the assessment criteria.',
  },
  {
    number: '07',
    title: 'Reporting & Governance',
    body:
      'Transforming the analysis into clear risk registers, compliance matrices, audit findings, policy documents, executive summaries, remediation roadmaps, and governance recommendations.',
  },
]

const governanceAreas = [
  {
    icon: Gavel,
    title: 'Policy Development',
    body:
      'Information security policies, acceptable use, access control, data classification, password management, vendor security, and incident response documentation.',
  },
  {
    icon: Network,
    title: 'Business Continuity & Disaster Recovery',
    body:
      'Business Impact Analysis, recovery priorities, RTO, RPO, MTO, continuity strategies, disaster recovery procedures, and resilience planning.',
  },
  {
    icon: Scale,
    title: 'Risk Treatment',
    body:
      'Risk acceptance, avoidance, mitigation, and transfer decisions supported by documented business rationale and residual-risk analysis.',
  },
  {
    icon: FileText,
    title: 'Governance Reporting',
    body:
      'Board-level reporting concepts, CISO metrics, key performance indicators, key risk indicators, steering-committee oversight, and security accountability.',
  },
]

const riskScenario = [
  {
    label: 'Asset Value',
    value: '$2,000,000',
    explanation: 'Sensitive customer database',
  },
  {
    label: 'Initial Exposure Factor',
    value: '0.40',
    explanation: 'Estimated 40% loss exposure',
  },
  {
    label: 'Initial ARO',
    value: '0.50',
    explanation: 'Estimated occurrence once every two years',
  },
  {
    label: 'Annual Control Cost',
    value: '$15,000',
    explanation: 'Illustrative security-control cost',
  },
  {
    label: 'Mitigated Exposure Factor',
    value: '0.05',
    explanation: 'Estimated residual exposure',
  },
  {
    label: 'Mitigated ARO',
    value: '0.10',
    explanation: 'Reduced annual occurrence estimate',
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
          name: 'Risk & Compliance',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Cybersecurity Risk & Compliance Assignment Guidance',
      url: pageUrl,
      description:
        'Technical and academic guidance covering cybersecurity risk assessment, GRC, compliance frameworks, IT auditing, control mapping, security governance, third-party risk, and cybersecurity policy documentation.',
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
      serviceType: 'Cybersecurity risk, governance and compliance consultancy',
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

export default function RiskCompliancePage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Cybersecurity • Risk • Governance • Compliance"
          title="Cybersecurity Risk & Compliance Technical Consultancy"
          body="Structured guidance for cybersecurity risk assessments, GRC projects, compliance mapping, IT auditing, security governance, third-party risk, and technical policy documentation. Build a defensible understanding of how business risk, regulatory requirements, and security controls connect."
        />

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Cybersecurity GRC"
                  title="Connecting business risk, regulatory requirements, and technical security controls."
                  body="Cybersecurity governance, risk and compliance work sits at the intersection of business objectives, legal obligations, information security, auditing, and technical controls. Effective analysis requires more than listing frameworks: it requires understanding how requirements translate into measurable controls and defensible risk decisions."
                />
              </div>

              <div className="card-grid">
                <div className="info-card">
                  <ShieldCheck size={28} aria-hidden="true" />
                  <h3>Security Governance</h3>
                  <p>
                    Explore security policies, governance structures, control
                    ownership, security metrics, and organisational
                    accountability.
                  </p>
                </div>

                <div className="info-card">
                  <BarChart3 size={28} aria-hidden="true" />
                  <h3>Risk Assessment</h3>
                  <p>
                    Work through qualitative and quantitative risk analysis,
                    risk registers, likelihood-impact scoring, and treatment
                    strategies.
                  </p>
                </div>

                <div className="info-card">
                  <ClipboardCheck size={28} aria-hidden="true" />
                  <h3>Compliance & Audit</h3>
                  <p>
                    Understand control mapping, compliance gap analysis,
                    evidence requirements, audit testing, and assurance
                    documentation.
                  </p>
                </div>

                <div className="info-card">
                  <Users size={28} aria-hidden="true" />
                  <h3>Third-Party Risk</h3>
                  <p>
                    Analyse vendor security, supply-chain exposure, SOC
                    reports, security questionnaires, and contractual
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Cybersecurity GRC workflow</p>
              <h2>Structured Risk & Compliance Assessment Model</h2>
              <p>
                A seven-phase approach connecting project requirements, risk
                identification, control mapping, gap analysis, remediation,
                evidence, and governance reporting.
              </p>
            </div>

            <figure className="content-image">
              <Image
                src="/images/risk.png"
                alt="Cybersecurity risk and compliance workflow showing the relationship between governance, risk identification, framework and control mapping, gap analysis, remediation, audit evidence, and governance reporting"
                width={1024}
                height={576}
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
              />
              <figcaption>
                Cybersecurity risk and compliance workflow connecting
                requirements and scope with risk assessment, control mapping,
                gap analysis, remediation, evidence, and governance reporting.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Consultancy scope"
              title="Technical scope and expected outcomes."
              body="Guidance can be structured around a defined cybersecurity risk project, compliance case study, audit requirement, governance problem, regulatory framework, or security policy assignment."
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
              title="From abstract compliance requirements to defensible security decisions."
              body="Effective GRC analysis requires translating broad governance and regulatory requirements into practical risk statements, controls, evidence, ownership, and measurable remediation activities."
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
              eyebrow="Frameworks & standards"
              title="Recognized frameworks across cybersecurity governance and compliance."
              body="The appropriate framework depends on the project scope, industry, jurisdiction, organizational context, and academic requirements. Guidance can help you understand how different standards overlap and where their purposes differ."
            />

            <div className="card-grid tool-grid">
              {frameworks.map((framework) => {
                const Icon = framework.icon

                return (
                  <article className="info-card" key={framework.title}>
                    <Icon size={28} aria-hidden="true" />
                    <h3>{framework.title}</h3>

                    <ul>
                      {framework.items.map((item) => (
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
              title="A repeatable framework for risk and compliance analysis."
              body="Cybersecurity GRC projects become easier to defend when each conclusion can be traced back to project scope, risk assumptions, control requirements, evidence, and documented treatment decisions."
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
                  eyebrow="Risk analysis"
                  title="Quantitative and qualitative risk modelling."
                  body="Risk assignments frequently require students to move between qualitative risk matrices and quantitative financial models. We provide structured guidance on the assumptions, formulas, calculations, and interpretation behind both approaches."
                />
              </div>

              <div className="card-grid">
                {riskScenario.map((item) => (
                  <div className="info-card" key={item.label}>
                    <p
                      className="eyebrow"
                      style={{ marginBottom: 8 }}
                    >
                      {item.label}
                    </p>

                    <h3 style={{ marginBottom: 8 }}>{item.value}</h3>

                    <p>{item.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Illustrative quantitative risk model"
              title="Working through ALE before and after security controls."
              body="The following example illustrates how a risk assessment can compare estimated annualized loss before and after controls. Values are illustrative and should be replaced with the assumptions specified by the relevant assignment or case study."
            />

            <div className="two-column">
              <div className="info-card">
                <h3>1. Initial risk</h3>

                <p>
                  Single Loss Expectancy is calculated as Asset Value
                  multiplied by Exposure Factor.
                </p>

                <div className="technical-code">
                  SLE = AV × EF
                  <br />
                  SLE = $2,000,000 × 0.40
                  <br />
                  SLE = $800,000
                </div>

                <p>
                  Annualized Loss Expectancy is then calculated using the
                  Annual Rate of Occurrence.
                </p>

                <div className="technical-code">
                  ALE = SLE × ARO
                  <br />
                  ALE = $800,000 × 0.50
                  <br />
                  ALE = $400,000
                </div>
              </div>

              <div className="info-card">
                <h3>2. Residual risk after controls</h3>

                <p>
                  After applying the illustrative security controls, the
                  estimated exposure factor falls to 0.05 and ARO falls to
                  0.10.
                </p>

                <div className="technical-code">
                  SLE = $2,000,000 × 0.05
                  <br />
                  SLE = $100,000
                  <br />
                  <br />
                  ALE = $100,000 × 0.10
                  <br />
                  ALE = $10,000
                </div>

                <p>
                  The estimated gross mitigation value is therefore $390,000
                  before considering the annual control cost.
                </p>
              </div>
            </div>

            <div
              className="info-card"
              style={{ marginTop: 24 }}
            >
              <h3>3. Illustrative cost-benefit analysis</h3>

              <div className="technical-code">
                Gross Mitigation Value = $400,000 − $10,000
                <br />
                Gross Mitigation Value = $390,000
                <br />
                <br />
                Net Annual Benefit = $390,000 − $15,000
                <br />
                Net Annual Benefit = $375,000
              </div>

              <p>
                This type of calculation can help explain why a proposed
                security control may be economically justified. In a real
                assessment, the assumptions, uncertainty, control costs, and
                limitations should also be documented.
              </p>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Governance & policy"
              title="Turning risk analysis into practical governance."
              body="Cybersecurity compliance is not limited to technical controls. Strong governance connects policies, accountability, resilience, risk decisions, and executive oversight."
            />

            <div className="card-grid">
              {governanceAreas.map((item) => {
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

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Example GRC scenarios"
                  title="Practical cybersecurity risk and compliance case studies."
                  body="GRC coursework often becomes clearer when abstract requirements are applied to a realistic business scenario. The following examples illustrate the types of problems we can help you analyse."
                />
              </div>

              <div className="feature-list">
                <article className="feature-item">
                  <div className="feature-icon">
                    <BarChart3 size={24} aria-hidden="true" />
                  </div>

                  <div>
                    <h3>
                      Scenario A: Cloud Storage Risk Assessment
                    </h3>

                    <p>
                      Analyse the annualized loss expectancy associated with
                      a sensitive cloud database before and after security
                      controls, then compare the estimated mitigation benefit
                      against control cost.
                    </p>
                  </div>
                </article>

                <article className="feature-item">
                  <div className="feature-icon">
                    <Scale size={24} aria-hidden="true" />
                  </div>

                  <div>
                    <h3>
                      Scenario B: ISO 27001 to NIST CSF Crosswalk
                    </h3>

                    <p>
                      Construct a control-mapping approach that relates
                      ISO/IEC 27001:2022 security controls to appropriate NIST
                      CSF 2.0 functions and categories while explaining areas
                      of overlap and difference.
                    </p>
                  </div>
                </article>

                <article className="feature-item">
                  <div className="feature-icon">
                    <FileText size={24} aria-hidden="true" />
                  </div>

                  <div>
                    <h3>
                      Scenario C: Enterprise Incident Response Policy
                    </h3>

                    <p>
                      Structure an incident response policy around preparation,
                      detection and analysis, containment, eradication,
                      recovery, and post-incident activities, with severity
                      classifications and escalation procedures.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="What makes GRC work difficult?"
              title="Why cybersecurity risk and compliance coursework can be challenging."
              body="GRC projects require students to move between strategic business considerations and detailed technical requirements. Several recurring challenges make these assignments particularly demanding."
            />

            <div className="card-grid">
              <div className="info-card">
                <Globe2 size={28} aria-hidden="true" />
                <h3>Overlapping Regulatory Frameworks</h3>
                <p>
                  GDPR, HIPAA, PCI DSS, CCPA/CPRA, FISMA, and other frameworks
                  have different scopes, terminology, obligations, and
                  applicability requirements.
                </p>
              </div>

              <div className="info-card">
                <ShieldCheck size={28} aria-hidden="true" />
                <h3>Abstract Control Mapping</h3>
                <p>
                  Translating high-level requirements into concrete security
                  controls, evidence, ownership, and measurable implementation
                  activities requires careful analysis.
                </p>
              </div>

              <div className="info-card">
                <BarChart3 size={28} aria-hidden="true" />
                <h3>Quantitative vs Qualitative Risk</h3>
                <p>
                  Risk matrices, ALE calculations, FAIR concepts, and
                  likelihood-impact models require different assumptions and
                  analytical approaches.
                </p>
              </div>

              <div className="info-card">
                <FileText size={28} aria-hidden="true" />
                <h3>Policy & Documentation Standards</h3>
                <p>
                  Security policies, system security plans, audit reports, risk
                  registers, and incident response documents need consistent
                  structure and traceability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Academic & professional guidance"
                  title="Risk and compliance analysis grounded in recognized practices."
                  body="Cybersecurity GRC assignments often require more than naming a standard. Strong work explains why a framework applies, how requirements map to controls, what evidence demonstrates implementation, and how identified gaps should be treated."
                />
              </div>

              <div className="framework-list">
                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>NIST CSF 2.0 governance and risk principles</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>ISO/IEC 27001 information security management</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>NIST SP 800 security control concepts</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>CIS Controls and security hygiene</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>SOC 2 Trust Services Criteria</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>Risk assessment and audit methodologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container narrow-content">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Cybersecurity risk and compliance guidance."
              body="Common questions about risk assessments, compliance frameworks, control mapping, auditing, governance, and cybersecurity policy projects."
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
                  href="/services/cybersecurity/penetration-testing"
                  className="internal-link"
                >
                  <span>
                    <strong>Penetration Testing & VAPT</strong>
                    <small>
                      Explore penetration testing, vulnerability assessment,
                      and ethical security laboratory guidance.
                    </small>
                  </span>

                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/cybersecurity/secure-software-development"
                  className="internal-link"
                >
                  <span>
                    <strong>Secure Software Development</strong>
                    <small>
                      Explore secure coding, application security, threat
                      modelling, and DevSecOps guidance.
                    </small>
                  </span>

                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link href="/technologies" className="internal-link">
                  <span>
                    <strong>Technologies</strong>
                    <small>
                      Explore the technologies and technical frameworks we
                      work with.
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