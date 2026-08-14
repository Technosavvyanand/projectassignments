import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

// 1. ADDED: Twitter metadata for complete social sharing coverage
export const metadata = {
  title: 'Cybersecurity Project & Research Support',
  description:
    'Technical guidance for cybersecurity projects, penetration testing labs, vulnerability assessments, capstones, security research and technical reports.',
  alternates: {
    canonical: 'https://projectassignments.com/services/cybersecurity',
  },
  openGraph: {
    title: 'Cybersecurity Project & Research Support | ProjectAssignments',
    description:
      'Technical guidance for cybersecurity projects, penetration testing labs, vulnerability assessments, capstones, security research and technical reports.',
    url: 'https://projectassignments.com/services/cybersecurity',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cybersecurity Project & Research Support | ProjectAssignments',
    description: 'Technical guidance for cybersecurity projects, penetration testing labs, vulnerability assessments, capstones, security research and technical reports.',
  },
}

// 2. MOVED: faqs array moved UP so the schema can read from it dynamically
const faqs = [
  {
    question: 'Can you help with a cybersecurity penetration testing project?',
    answer:
      'Yes. We provide structured guidance for authorised academic and laboratory penetration-testing projects, including methodology, scope, evidence interpretation, findings and technical reporting.',
  },
  {
    question: 'Can you help with a cybersecurity lab or practical assessment?',
    answer:
      'Yes. We can help you understand the technical concepts involved, interpret lab evidence, troubleshoot methodology and structure the accompanying technical documentation.',
  },
  {
    question: 'Do you support cybersecurity capstone projects?',
    answer:
      'Yes. Support can cover security architecture, testing methodology, implementation documentation, technical artefacts, evaluation and final project reporting.',
  },
  {
    question: 'Can you help with NIST-based cybersecurity projects?',
    answer:
      'Yes. We can provide guidance on understanding and applying relevant NIST cybersecurity concepts and documenting the resulting analysis within the requirements of your project.',
  },
  {
    question: 'Do you support postgraduate cybersecurity research?',
    answer:
      'Yes. We support research planning, literature synthesis, methodology, technical analysis and research documentation for postgraduate cybersecurity projects.',
  },
  {
    question: 'Do you work with students and researchers internationally?',
    answer:
      'Yes. ProjectAssignments works with students, researchers and professionals across different institutions, disciplines and academic environments.',
  },
]

const cybersecuritySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://projectassignments.com/services/cybersecurity#service',
      name: 'Cybersecurity Project & Research Support',
      description:
        'Technical guidance for cybersecurity projects, penetration testing labs, vulnerability assessments, capstone projects, security research and technical documentation.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
      areaServed: 'Worldwide',
      serviceType: 'Cybersecurity academic and technical consultancy',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://projectassignments.com/services/cybersecurity#breadcrumb',
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
    // 3. ADDED: FAQPage schema dynamically generated from your array
    {
      '@type': 'FAQPage',
      '@id': 'https://projectassignments.com/services/cybersecurity#faq',
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

// ... [Keep your expertiseAreas, frameworks, technologies, and audiences arrays exactly as they were] ...
const expertiseAreas = [ /* ... */ ]
const frameworks = [ /* ... */ ]
const technologies = [ /* ... */ ]
const audiences = [ /* ... */ ]

export default function CybersecurityPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cybersecuritySchema),
        }}
      />

      {/* Breadcrumb - Unchanged */}
      {/* ... */}

      {/* Hero */}
      <section className="section section-tint">
        <div className="container">
          <div className="two-column" style={{ alignItems: 'center' }}>
            <div>
              {/* ... unchanged text ... */}

              <div className="hero-actions">
                <a
                  href="https://wa.me/918595089080?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20cybersecurity%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  Discuss Your Project
                  {/* 4. ADDED: aria-hidden to decorative icons */}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>

                <a href="#expertise" className="button button-secondary">
                  Explore Expertise
                </a>
              </div>
              
              {/* ... unchanged text ... */}
            </div>

            <div className="consultancy-card" style={{ padding: '36px' }}>
              <div
                style={{
                  width: 58,
                  height: 58,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: 14,
                  background: '#eef5ff',
                  color: '#1769d2',
                  marginBottom: 22,
                }}
              >
                {/* 4. ADDED: aria-hidden */}
                <ShieldCheck size={30} aria-hidden="true" />
              </div>

              {/* ... unchanged text ... */}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="section">
        <div className="container">
          {/* ... unchanged text ... */}

          <div className="services-grid">
            {expertiseAreas.map((area) => (
              <article
                key={area.title}
                className="consultancy-card"
                style={{ padding: 28 }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: 10,
                    background: '#f0f6ff',
                    color: '#1769d2',
                    marginBottom: 18,
                  }}
                >
                  {/* 4. ADDED: aria-hidden */}
                  <CheckCircle2 size={20} aria-hidden="true" />
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Project Support */}
      <section className="section section-tint">
        <div className="container">
          <div className="two-column">
            {/* ... unchanged text ... */}

            <div className="consultancy-card" style={{ padding: 30 }}>
              {[ /* ... */ ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    padding: '13px 0',
                    borderBottom: '1px solid #edf1f6',
                  }}
                >
                  {/* 4. ADDED: aria-hidden */}
                  <CheckCircle2
                    size={18}
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      marginTop: 2,
                      color: '#1769d2',
                    }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks, Tools, Audience, Academic Integrity - Unchanged */}
      {/* ... */}
      
      {/* FAQ - Unchanged in JSX, heavily improved via the JSON-LD schema added at the top */}
      {/* ... */}

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
            {/* ... unchanged text ... */}

            <div
              className="hero-actions"
              style={{ justifyContent: 'center' }}
            >
              <Link href="/services" className="button button-secondary">
                All Services
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <Link href="/about" className="button button-secondary">
                About ProjectAssignments
                <ArrowRight size={16} aria-hidden="true" />
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
            {/* ... unchanged text ... */}

            <a
              href="https://wa.me/918595089080?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20cybersecurity%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Discuss Your Cybersecurity Project
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}