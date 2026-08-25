import { CTA, Footer, PageHero, SectionHeading } from '@/components/site'
import {
    ArrowRight,
    CheckCircle2,
    Code2,
    Database,
    FileCode2,
    GitBranch,
    Globe2,
    KeyRound,
    LockKeyhole,
    Network,
    ScanSearch,
    ServerCog,
    ShieldCheck,
    TerminalSquare,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Secure Software Development Assignment Help & Guidance | ProjectAssignments',
  description:
    'Technical guidance for secure software development projects, secure coding, threat modeling, OWASP vulnerability remediation, AppSec testing, DevSecOps, cryptography, and software security documentation.',
  alternates: {
    canonical:
      'https://projectassignments.com/services/cybersecurity/secure-software-development',
  },
  openGraph: {
    title:
      'Secure Software Development Assignment Help & Guidance | ProjectAssignments',
    description:
      'Technical guidance for secure coding, threat modeling, OWASP vulnerability remediation, AppSec testing, DevSecOps, cryptography, and secure software architecture projects.',
    type: 'website',
    url: 'https://projectassignments.com/services/cybersecurity/secure-software-development',
    images: [
      {
        url: 'https://projectassignments.com/images/secure-software-development.png',
        width: 1024,
        height: 576,
        alt:
          'Secure Software Development workflow showing secure development activities across the software development lifecycle',
      },
    ],
  },
}

const pageUrl =
  'https://projectassignments.com/services/cybersecurity/secure-software-development'

const faqs = [
  {
    question:
      'What types of secure software development assignments do you cover?',
    answer:
      'We provide guidance across secure code refactoring, threat modeling, OWASP vulnerability remediation, SAST and DAST analysis, DevSecOps pipeline security, secure API development, applied cryptography, memory safety, and software security capstone projects.',
  },
  {
    question:
      'Can you help me fix vulnerabilities identified by tools such as SonarQube or Snyk?',
    answer:
      'Yes. We can help interpret SAST and SCA findings, identify the underlying cause, develop appropriate remediation strategies, and explain how the changes affect the application. Guidance can also cover security quality gates and verification of the resulting fixes.',
  },
  {
    question:
      'Can you help with secure coding assignments in C, C++, Java, Python, JavaScript, or C#?',
    answer:
      'Yes. Technical guidance can cover secure development concepts across common programming ecosystems, including memory safety in C and C++, secure application development in Java and C#, and web and API security in Python, JavaScript, and related frameworks.',
  },
  {
    question: 'Do you provide support for threat modeling assignments?',
    answer:
      'Yes. We can help structure Data Flow Diagrams, identify trust boundaries and threat agents, apply methodologies such as STRIDE or PASTA, and document appropriate security controls and mitigation strategies.',
  },
  {
    question:
      'Can you help integrate security testing into a CI/CD pipeline?',
    answer:
      'Yes. Guidance can cover the role of SAST, SCA, DAST, dependency scanning, security quality gates, and policy checks within CI/CD environments such as GitHub Actions, GitLab CI, Jenkins, and Azure Pipelines.',
  },
  {
    question:
      'Can secure software development guidance support postgraduate research?',
    answer:
      'Yes. Support can include research methodology, secure architecture analysis, vulnerability research, literature synthesis, threat modeling, experimental design, technical evaluation, and research documentation.',
  },
]

const scopeRows = [
  {
    area: 'Threat Modeling & Secure Architecture',
    modules:
      'STRIDE, PASTA, DREAD, VAST, Data Flow Diagrams, trust boundaries, attack surfaces, abuse cases, misuse cases, and defense-in-depth.',
    outcomes:
      'Threat models, DFDs, security requirements, mitigation matrices, and architecture analysis.',
  },
  {
    area: 'Application Vulnerability Remediation',
    modules:
      'OWASP Top 10, CWE Top 25, injection flaws, XSS, CSRF, SSRF, insecure deserialization, authentication weaknesses, and broken access control.',
    outcomes:
      'Root-cause analysis, remediation guidance, secure code patterns, vulnerability evidence, and technical documentation.',
  },
  {
    area: 'Memory Safety & Low-Level Security',
    modules:
      'Buffer overflows, use-after-free, double-free, format-string vulnerabilities, integer overflows, pointer safety, and defensive compiler features.',
    outcomes:
      'Secure C/C++ implementations, debugging guidance, memory-analysis findings, and hardening recommendations.',
  },
  {
    area: 'Applied Cryptography',
    modules:
      'AES-GCM, AES-CBC, RSA, ECC, SHA-256, SHA-3, HMAC, digital signatures, PKI, TLS validation, and secret management.',
    outcomes:
      'Cryptographic implementation guidance, security design analysis, key-management recommendations, and documentation.',
  },
  {
    area: 'DevSecOps & Security Testing',
    modules:
      'SAST, SCA, DAST, dependency analysis, security gates, CI/CD integration, automated scanning, and vulnerability triage.',
    outcomes:
      'Security pipeline designs, scan interpretation, remediation workflows, and security-quality documentation.',
  },
  {
    area: 'Secure APIs & Web Services',
    modules:
      'REST, GraphQL, gRPC, authentication, authorization, rate limiting, CORS, API gateways, WAF integration, and secure service design.',
    outcomes:
      'API security reviews, authorization models, secure configuration guidance, and technical security reports.',
  },
]

const competencies = [
  {
    icon: ShieldCheck,
    title: 'Threat Modeling & Secure Architecture',
    body:
      'Guidance with STRIDE, PASTA, DREAD, and VAST methodologies, Data Flow Diagrams, trust boundaries, attack surfaces, abuse cases, misuse cases, and defense-in-depth architecture.',
  },
  {
    icon: ScanSearch,
    title: 'OWASP & CWE Vulnerability Remediation',
    body:
      'Structured analysis of common application vulnerabilities including injection, XSS, CSRF, SSRF, insecure deserialization, authentication weaknesses, and broken access control.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure Authentication & Authorization',
    body:
      'Support with secure session management, OAuth 2.0, OpenID Connect, JWT validation, password hashing, object-level authorization, and function-level access controls.',
  },
  {
    icon: FileCode2,
    title: 'Memory Safety & Low-Level Hardening',
    body:
      'Technical guidance for buffer overflows, use-after-free, double-free, integer overflow, format-string vulnerabilities, pointer safety, and defensive compiler protections.',
  },
  {
    icon: KeyRound,
    title: 'Applied Cryptography',
    body:
      'Guidance with encryption, hashing, MACs, digital signatures, PKI, TLS certificate validation, and secure management of cryptographic keys and application secrets.',
  },
  {
    icon: GitBranch,
    title: 'DevSecOps & Automated Security Testing',
    body:
      'Support for integrating SAST, SCA, DAST, dependency scanning, security gates, and policy checks into modern CI/CD workflows.',
  },
]

const toolchains = [
  {
    icon: Code2,
    title: 'Java & JVM Development',
    items: [
      'Spring Boot',
      'Spring Security',
      'Jakarta EE',
      'Hibernate',
      'Maven',
      'Gradle',
    ],
  },
  {
    icon: TerminalSquare,
    title: 'Python Security Development',
    items: [
      'Django',
      'Flask',
      'FastAPI',
      'SQLAlchemy',
      'Jinja2',
      'Bandit',
    ],
  },
  {
    icon: ServerCog,
    title: 'C / C++ & Systems Security',
    items: [
      'GCC',
      'Clang',
      'Valgrind',
      'GDB',
      'CMake',
      'Cppcheck',
    ],
  },
  {
    icon: Globe2,
    title: 'JavaScript & Web Applications',
    items: [
      'React',
      'Express.js',
      'Next.js',
      'Node.js',
      'NPM',
      'DOMPurify',
    ],
  },
  {
    icon: Network,
    title: 'Application Security Testing',
    items: [
      'SonarQube',
      'Semgrep',
      'OWASP ZAP',
      'Burp Suite',
      'Snyk',
      'OWASP Dependency-Check',
    ],
  },
  {
    icon: Database,
    title: 'Security & Cloud Integration',
    items: [
      'GitHub Actions',
      'GitLab CI',
      'Jenkins',
      'Azure Pipelines',
      'AWS Secrets Manager',
      'HashiCorp Vault',
    ],
  },
]

const languages = [
  {
    title: 'Java & JVM Stack',
    body:
      'Spring Boot, Jakarta EE, Hibernate, Maven, and Gradle for secure enterprise application development.',
    uses:
      'SQL injection and XSS remediation, Spring Security, secure dependency management, and authentication.',
  },
  {
    title: 'Python Ecosystem',
    body:
      'Django, Flask, FastAPI, SQLAlchemy, and Jinja2 for secure web and API development.',
    uses:
      'SSTI and deserialization analysis, ORM security, input validation, and Python security scanning.',
  },
  {
    title: 'C / C++ & Systems',
    body:
      'GCC, Clang, Valgrind, GDB, CMake, and related low-level development environments.',
    uses:
      'Memory-safety analysis, buffer-overflow mitigation, pointer safety, and static analysis.',
  },
  {
    title: 'JavaScript / Node.js',
    body:
      'React, Express.js, Next.js, Node.js, and NPM-based application environments.',
    uses:
      'Input sanitization, dependency auditing, JWT security, secure CORS, and web application hardening.',
  },
  {
    title: 'C# & .NET',
    body:
      'ASP.NET Core, Entity Framework, NuGet, and the broader .NET security ecosystem.',
    uses:
      'Input validation, anti-forgery protection, ASP.NET Identity, authorization, and static analysis.',
  },
  {
    title: 'Application Security Tooling',
    body:
      'SonarQube, Semgrep, OWASP ZAP, Burp Suite, Snyk, and dependency-analysis tools.',
    uses:
      'SAST, DAST, SCA, custom security rules, vulnerability triage, and security-quality reporting.',
  },
]

const phases = [
  {
    number: '01',
    title: 'Understand Requirements & Attack Surface',
    body:
      'Establish the application objectives, functional requirements, technology stack, trust boundaries, user roles, external dependencies, and potential attack surface before making security changes.',
  },
  {
    number: '02',
    title: 'Threat Modeling & Security Design',
    body:
      'Identify relevant threats and security requirements using structured approaches such as STRIDE or PASTA, supported by Data Flow Diagrams, abuse cases, and security architecture analysis.',
  },
  {
    number: '03',
    title: 'Secure Coding & Defensive Implementation',
    body:
      'Apply secure coding principles such as strict input validation, output encoding, parameterized queries, secure authentication, authorization, safe error handling, and appropriate cryptographic practices.',
  },
  {
    number: '04',
    title: 'Automated Security Analysis',
    body:
      'Use appropriate SAST, SCA, dependency scanning, and other automated analysis techniques to identify potentially vulnerable code, insecure dependencies, and configuration weaknesses.',
  },
  {
    number: '05',
    title: 'Dynamic Testing & Validation',
    body:
      'Validate application behaviour using controlled DAST and security testing techniques, interpreting findings and distinguishing meaningful vulnerabilities from false positives.',
  },
  {
    number: '06',
    title: 'Remediation & Verification',
    body:
      'Address identified weaknesses while preserving application functionality, then verify the changes through appropriate testing, regression checks, and security analysis.',
  },
  {
    number: '07',
    title: 'Documentation & Security Review',
    body:
      'Document the vulnerability, root cause, remediation, evidence, residual risk, testing results, and relevant security considerations in a clear technical format.',
  },
]

const scenarios = [
  {
    title: 'Scenario A: SQL Injection Remediation',
    body:
      'A Flask application constructs a SQL query by directly concatenating user input. We can help identify the vulnerability, explain why the input crosses the code/data boundary, and refactor the database interaction using parameterized queries while preserving the application’s intended behaviour.',
  },
  {
    title: 'Scenario B: C Buffer Overflow Analysis',
    body:
      'A C application copies user-controlled data into a fixed-size buffer without adequate bounds checking. Guidance can cover how the memory corruption occurs, how safer input-handling approaches work, and how compiler and operating-system protections contribute to defence in depth.',
  },
  {
    title: 'Scenario C: STRIDE Threat Model',
    body:
      'An e-commerce payment system needs a security threat model. We can help identify trust boundaries, assets, threat agents, and the six STRIDE categories, then connect the identified threats to appropriate mitigations in a structured threat matrix.',
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
          name: 'Secure Software Development',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Secure Software Development Assignment Help & Guidance',
      url: pageUrl,
      description:
        'Technical guidance covering secure coding, threat modeling, application security, vulnerability remediation, DevSecOps, cryptography, secure APIs, and software security documentation.',
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
      serviceType: 'Secure software development technical consultancy',
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

export default function SecureSoftwareDevelopmentPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Cybersecurity • Secure Software Development • AppSec"
          title="Secure Software Development Assignment Help & Technical Guidance"
          body="Technical guidance for secure coding, application security, threat modeling, vulnerability remediation, DevSecOps, cryptography, and secure software architecture. Build a stronger understanding of security-by-design principles while applying them to real development environments and academic projects."
        />

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Secure development scope"
                  title="Security needs to be built into software—not added after the application is finished."
                  body="Secure software development connects software engineering with application security throughout the Software Development Life Cycle. Our technical guidance brings together secure architecture, defensive coding, vulnerability analysis, automated security testing, remediation, and clear documentation."
                />
              </div>

              <div className="card-grid">
                <div className="info-card">
                  <ShieldCheck size={28} aria-hidden="true" />
                  <h3>Secure Architecture</h3>
                  <p>
                    Understand threat modeling, trust boundaries, attack
                    surfaces, security requirements, and defense-in-depth.
                  </p>
                </div>

                <div className="info-card">
                  <Code2 size={28} aria-hidden="true" />
                  <h3>Secure Coding</h3>
                  <p>
                    Apply defensive programming principles across modern
                    languages, frameworks, APIs, and application architectures.
                  </p>
                </div>

                <div className="info-card">
                  <ScanSearch size={28} aria-hidden="true" />
                  <h3>AppSec Testing</h3>
                  <p>
                    Interpret SAST, SCA, and DAST findings and understand how
                    automated security testing fits into development workflows.
                  </p>
                </div>

                <div className="info-card">
                  <GitBranch size={28} aria-hidden="true" />
                  <h3>DevSecOps</h3>
                  <p>
                    Explore security gates, dependency analysis, automated
                    scanning, and security controls within CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Secure software development workflow</p>

              <h2>Security Throughout the Software Development Lifecycle</h2>

              <p>
                Secure development works best when security considerations are
                connected across requirements, architecture, implementation,
                testing, remediation, and verification rather than treated as
                a final-stage activity.
              </p>
            </div>

            <figure className="content-image">
              <Image
                src="/images/secure-software-development.png"
                alt="Secure software development workflow showing security activities across the software development lifecycle"
                width={1024}
                height={576}
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
              />

              <figcaption>
                Secure software development workflow connecting security
                requirements, threat modeling, secure implementation,
                automated analysis, testing, remediation, and verification.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Consultancy pillars"
              title="Comprehensive support across secure software development."
              body="Secure development assignments can involve application architecture, vulnerable code, security testing, threat models, cryptographic design, DevSecOps pipelines, or technical research. Guidance can be structured around the specific requirements of the project."
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
              title="From vulnerability discovery to secure implementation."
              body="Secure software development requires more than identifying vulnerabilities. The important step is understanding why a weakness exists, selecting an appropriate remediation, verifying the resulting behaviour, and documenting the security reasoning."
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
              eyebrow="Languages, frameworks & tooling"
              title="Technical guidance across common development ecosystems."
              body="Secure software development projects can span low-level systems programming, enterprise applications, Python services, JavaScript applications, APIs, and modern security-testing pipelines."
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
              eyebrow="Secure development methodology"
              title="A repeatable workflow for secure software projects."
              body="The following seven phases provide a structured way to connect security requirements, design decisions, implementation, testing, remediation, and technical documentation."
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
            <SectionHeading
              eyebrow="Development ecosystems"
              title="Secure coding guidance across modern programming stacks."
              body="Different programming ecosystems introduce different security concerns. Understanding the language, framework, runtime, dependency model, and deployment environment is essential to choosing appropriate security controls."
            />

            <div className="table-wrapper">
              <table className="technical-table">
                <thead>
                  <tr>
                    <th>Language / Ecosystem</th>
                    <th>Frameworks & Technology Stack</th>
                    <th>Common Project Applications</th>
                  </tr>
                </thead>

                <tbody>
                  {languages.map((language) => (
                    <tr key={language.title}>
                      <td>
                        <strong>{language.title}</strong>
                      </td>

                      <td>{language.body}</td>

                      <td>{language.uses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="Application security"
                  title="Understanding the root cause is as important as fixing the vulnerability."
                  body="Secure coding assignments frequently involve vulnerabilities that look simple at the surface but have deeper architectural or implementation causes. We focus on helping you understand those causes and connect them to appropriate security controls."
                />
              </div>

              <div className="framework-list">
                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>OWASP Top 10 vulnerability analysis</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>CWE Top 25 weakness analysis</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>Secure authentication and authorization</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>Input validation and output encoding</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>Secure dependency and secret management</span>
                </div>

                <div>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <span>Secure API and service architecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Sample secure coding scenarios"
              title="Examples of the technical problems we can help you understand."
              body="These scenarios illustrate the type of reasoning involved in secure software development coursework and practical laboratories."
            />

            <div className="feature-list">
              {scenarios.map((scenario) => (
                <article className="feature-item" key={scenario.title}>
                  <div className="feature-icon">
                    <Code2 size={24} aria-hidden="true" />
                  </div>

                  <div>
                    <h3>{scenario.title}</h3>
                    <p>{scenario.body}</p>
                  </div>
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
                  eyebrow="Academic & technical guidance"
                  title="Build secure software while understanding why the security controls work."
                  body="Our role is to help you understand vulnerability root causes, secure coding patterns, testing approaches, and architectural decisions so that you can explain and defend the technical work within your own project."
                />
              </div>

              <div className="framework-list">
                <div>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <span>Before-and-after vulnerability analysis</span>
                </div>

                <div>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <span>Secure refactoring guidance</span>
                </div>

                <div>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <span>Technical evidence interpretation</span>
                </div>

                <div>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <span>Security testing and verification</span>
                </div>

                <div>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <span>Threat model and architecture review</span>
                </div>

                <div>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <span>Technical documentation support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container narrow-content">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Secure software development guidance."
              body="Common questions about secure coding, application security testing, threat modeling, DevSecOps, and software security projects."
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
                      Explore penetration testing, VAPT, ethical security
                      laboratories, and technical assessment guidance.
                    </small>
                  </span>

                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/cybersecurity/vulnerability-assessment"
                  className="internal-link"
                >
                  <span>
                    <strong>Vulnerability Assessment</strong>

                    <small>
                      Explore vulnerability identification, analysis,
                      prioritization, and remediation guidance.
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
                      Explore network analysis, packet inspection, architecture
                      review, and security projects.
                    </small>
                  </span>

                  <ArrowRight size={20} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/cybersecurity/cloud-security"
                  className="internal-link"
                >
                  <span>
                    <strong>Cloud Security</strong>

                    <small>
                      Explore AWS, Azure, identity, configuration, and cloud
                      security guidance.
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