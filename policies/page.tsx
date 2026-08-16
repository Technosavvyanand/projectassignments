import {
    BookOpenCheck,
    CheckCircle2,
    FileCheck2,
    LockKeyhole,
    ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'

import {
    CTA,
    Footer,
    PageHero,
    SectionHeading,
} from '@/components/site'

export const metadata: Metadata = {
  title: 'Policies | Academic Integrity, Privacy & Service Policies',
  description:
    'Review ProjectAssignments policies covering academic integrity, acceptable use, privacy and data security, revisions, client satisfaction, and service credits.',
  keywords: [
    'ProjectAssignments policies',
    'academic integrity policy',
    'acceptable use policy',
    'academic consultancy privacy policy',
    'revision policy',
    'service credit policy',
    'technical academic support policies',
  ],
  alternates: {
    canonical: 'https://projectassignments.com/policies',
  },
  openGraph: {
    title: 'Policies | ProjectAssignments',
    description:
      'Clear policies covering academic integrity, privacy, revisions, client satisfaction, and responsible use of ProjectAssignments services.',
    url: 'https://projectassignments.com/policies',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const policyCards = [
  {
    icon: <BookOpenCheck size={24} aria-hidden="true" />,
    number: '01',
    title: 'Acceptable Use & Academic Integrity',
    description:
      'Our standards for responsible use of technical guidance, research support, reference materials, and academic consultancy.',
    href: '#academic-integrity',
  },
  {
    icon: <LockKeyhole size={24} aria-hidden="true" />,
    number: '02',
    title: 'Privacy & Data Security',
    description:
      'How we approach confidentiality, personal information, project materials, institutional information, and client communications.',
    href: '#privacy-security',
  },
  {
    icon: <FileCheck2 size={24} aria-hidden="true" />,
    number: '03',
    title: 'Review & Revision Policy',
    description:
      'How complimentary revisions and technical refinements work when requirements remain within the original agreed scope.',
    href: '#revisions',
  },
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    number: '04',
    title: 'Client Satisfaction & Service Credits',
    description:
      'Our process for addressing concerns, reviewing service issues, and providing approved service-credit compensation.',
    href: '#satisfaction',
  },
]

const policiesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://projectassignments.com/policies#webpage',
      url: 'https://projectassignments.com/policies',
      name: 'Policies | Academic Integrity, Privacy & Service Policies',
      description:
        'ProjectAssignments policies covering academic integrity, privacy and data security, revisions, client satisfaction, and service credits.',
      breadcrumb: {
        '@id': 'https://projectassignments.com/policies#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://projectassignments.com/policies#breadcrumb',
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
          name: 'Policies',
          item: 'https://projectassignments.com/policies',
        },
      ],
    },
  ],
}

export default function PoliciesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="OUR POLICIES"
          title="Clear standards for responsible technical and academic consultancy."
          body="Our policies explain how ProjectAssignments approaches academic integrity, confidentiality, revisions, client concerns, and the responsible use of our technical guidance."
        />

        {/* Policy Overview */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="POLICY OVERVIEW"
              title="Professional standards, clearly explained."
              body="We believe clients should understand how an engagement works before they begin. These policies provide a straightforward overview of our responsibilities and your responsibilities as a client."
            />

            <div className="expertise-grid">
              {policyCards.map((policy) => (
                <a
                  key={policy.number}
                  href={policy.href}
                  className="expertise-card"
                  style={{ display: 'block' }}
                >
                  <div
                    className="icon-box"
                    aria-hidden="true"
                    style={{ marginBottom: '22px' }}
                  >
                    {policy.icon}
                  </div>

                  <span
                    style={{
                      display: 'block',
                      marginBottom: '12px',
                      color: '#8a9ab0',
                      fontFamily: 'var(--font-mono-family)',
                      fontSize: '11px',
                      fontWeight: 600,
                    }}
                  >
                    POLICY {policy.number}
                  </span>

                  <h3>{policy.title}</h3>

                  <p>{policy.description}</p>

                  <span className="text-link">
                    Read policy →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="section section-tint">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="OUR COMMITMENT"
                title="Responsible support starts with clear expectations."
                body="ProjectAssignments is built around technical expertise, responsible academic support, confidentiality, and transparent professional practice."
              />
            </div>

            <div>
              <p>
                Our services are designed to help students, researchers, and
                professionals understand difficult technical concepts,
                strengthen their research, improve documentation, and make
                informed decisions about their work.
              </p>

              <p style={{ marginTop: '18px' }}>
                We expect clients to use our guidance responsibly and in
                accordance with the academic, professional, and institutional
                requirements that apply to their work.
              </p>

              <div style={{ marginTop: '28px' }}>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: 'var(--foreground)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="var(--accent)"
                    aria-hidden="true"
                  />
                  Clear scope and expectations
                </p>

                <p
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    marginTop: '12px',
                    color: 'var(--foreground)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="var(--accent)"
                    aria-hidden="true"
                  />
                  Responsible academic guidance
                </p>

                <p
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    marginTop: '12px',
                    color: 'var(--foreground)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="var(--accent)"
                    aria-hidden="true"
                  />
                  Confidential handling of client information
                </p>

                <p
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    marginTop: '12px',
                    color: 'var(--foreground)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="var(--accent)"
                    aria-hidden="true"
                  />
                  Transparent review and resolution process
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy 1 */}
        <section className="section" id="academic-integrity">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="POLICY 01"
                  title="Acceptable Use & Academic Integrity"
                  body="Our services are designed to support learning, research, technical understanding, and responsible academic development."
                />
              </div>

              <div>
                <p>
                  ProjectAssignments is committed to fostering genuine
                  learning and preventing academic misconduct. The technical
                  guidance, security research, reference code, documentation,
                  and other materials we provide are intended strictly for
                  educational, research, learning, and reference purposes.
                </p>

                <p style={{ marginTop: '20px' }}>
                  Materials may include penetration-testing methodologies,
                  architecture models, programming examples, technical
                  explanations, research guidance, or sample documentation.
                  These materials are intended to help clients understand
                  complex concepts and develop their own work responsibly.
                </p>

                <p style={{ marginTop: '20px' }}>
                  Clients are responsible for complying with the academic
                  integrity policies, assessment rules, submission
                  requirements, and institutional standards applicable to their
                  programme.
                </p>

                <div
                  className="consultancy-card"
                  style={{ marginTop: '28px', padding: '24px' }}
                >
                  <strong>Responsible use:</strong>
                  <p style={{ marginTop: '8px' }}>
                    Materials and guidance supplied by ProjectAssignments must
                    not be represented or submitted to an educational
                    institution as the client&apos;s own original work where
                    doing so would breach applicable academic or institutional
                    rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy 2 */}
        <section className="section section-tint" id="privacy-security">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="POLICY 02"
                  title="Privacy & Data Security"
                  body="The technical nature of our work makes confidentiality and responsible information handling essential."
                />
              </div>

              <div>
                <p>
                  We understand that clients may share personal details,
                  project briefs, research information, technical documents,
                  institutional requirements, and other materials during an
                  engagement.
                </p>

                <p style={{ marginTop: '20px' }}>
                  ProjectAssignments treats client information and project
                  materials as confidential and handles them with appropriate
                  care. We do not sell or deliberately distribute client
                  information to third parties for unrelated commercial
                  purposes.
                </p>

                <p style={{ marginTop: '20px' }}>
                  Access to project information is limited to people who need
                  relevant information to provide the agreed service. We aim
                  to keep personal information and project materials separated
                  from unnecessary technical or operational access wherever
                  practical.
                </p>

                <p style={{ marginTop: '20px' }}>
                  Clients should avoid sharing passwords, authentication
                  credentials, payment-card information, or other information
                  that is not necessary for the requested service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy 3 */}
        <section className="section" id="revisions">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="POLICY 03"
                  title="Iterative Review & Revision Policy"
                  body="Technical work often requires precise adjustments. Our review process is designed to address reasonable refinements to the original scope."
                />
              </div>

              <div>
                <p>
                  We provide complimentary revisions and technical refinements
                  where the delivered work requires adjustments to meet the
                  requirements originally agreed for the project.
                </p>

                <p style={{ marginTop: '20px' }}>
                  If a research document, technical artefact, report, or other
                  agreed deliverable requires refinement, clients should submit
                  a revision request within the designated review period
                  following delivery.
                </p>

                <p style={{ marginTop: '20px' }}>
                  As long as the requested changes remain consistent with the
                  original project scope, brief, and instructions, our experts
                  will review and refine the relevant work without additional
                  service charges.
                </p>

                <div
                  className="consultancy-card"
                  style={{ marginTop: '28px', padding: '24px' }}
                >
                  <strong>Scope matters.</strong>
                  <p style={{ marginTop: '8px' }}>
                    Requests involving a materially different project,
                    additional requirements introduced after the original
                    agreement, or substantial new work may be treated as a new
                    scope and may require a separate quotation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy 4 */}
        <section className="section section-tint" id="satisfaction">
          <div className="container">
            <div className="two-column">
              <div>
                <SectionHeading
                  eyebrow="POLICY 04"
                  title="Client Satisfaction & Service Credits"
                  body="We aim to resolve concerns fairly, transparently, and through a practical review process."
                />
              </div>

              <div>
                <p>
                  We stand behind the quality of our technical support and
                  academic guidance. If a delivered service does not meet the
                  agreed technical requirements, and the issue cannot be
                  reasonably resolved through the standard revision process,
                  we will review the matter promptly.
                </p>

                <h3 style={{ marginTop: '30px' }}>
                  Submission Timeline
                </h3>

                <p style={{ marginTop: '12px' }}>
                  If you believe a project has not met the requirements agreed
                  at the beginning of the engagement, a formal claim or review
                  request should be submitted within <strong>15 days</strong>{' '}
                  of receiving the final delivery. Requests submitted after
                  this period may not be eligible for review.
                </p>

                <h3 style={{ marginTop: '30px' }}>
                  Service Credit Compensation
                </h3>

                <p style={{ marginTop: '12px' }}>
                  ProjectAssignments generally provides approved compensation
                  in the form of service credits rather than cash refunds to
                  the original payment method. Where a claim is approved
                  following our review process, the applicable service credit
                  will be applied to the client&apos;s account and may be used
                  toward future eligible services.
                </p>

                <h3 style={{ marginTop: '30px' }}>
                  Grade Expectations & Educational Scope
                </h3>

                <p style={{ marginTop: '12px' }}>
                  Our services function similarly to advanced, specialised
                  tutoring and consultancy. We provide structured guidance,
                  technical analysis, research support, and expert feedback
                  intended to help clients understand complex concepts and
                  improve the quality of their own work.
                </p>

                <p style={{ marginTop: '20px' }}>
                  While our experts work carefully toward high-quality
                  outcomes, we cannot guarantee a specific grade, distinction,
                  academic result, admission decision, publication outcome, or
                  other result determined by a third party. Final evaluation
                  remains the responsibility of the relevant institution,
                  instructor, committee, or other decision-maker.
                </p>

                <div
                  className="consultancy-card"
                  style={{ marginTop: '28px', padding: '24px' }}
                >
                  <strong>Important:</strong>
                  <p style={{ marginTop: '8px' }}>
                    Nothing in this policy is intended to exclude or limit any
                    consumer rights or other legal rights that cannot lawfully
                    be excluded or limited under applicable law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="QUESTIONS ABOUT OUR POLICIES?"
              title="We're happy to clarify before you begin."
              body="If you are unsure whether a project falls within our scope, how a revision works, or how your information is handled, contact us before starting an engagement."
            />
          </div>
        </section>

        <CTA />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(policiesSchema),
        }}
      />
    </>
  )
}