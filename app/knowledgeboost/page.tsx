import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '@/components/site'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KnowledgeBoost — The Tech Knowledge Community | Coming Soon',
  description:
    'KnowledgeBoost is a technology-focused knowledge community covering cybersecurity, software engineering, data, databases, DevOps, research, and emerging technologies. Coming soon.',
  keywords: [
    'KnowledgeBoost',
    'tech knowledge community',
    'technology community',
    'cybersecurity community',
    'software engineering community',
    'technology knowledge platform',
    'IT knowledge community',
  ],
  alternates: {
    canonical: 'https://projectassignments.com/knowledgeboost',
  },
  openGraph: {
    title: 'KnowledgeBoost — The Tech Knowledge Community',
    description:
      'A technology-focused knowledge community for people who want to learn, explore, share, and understand technology better. Coming soon.',
    url: 'https://projectassignments.com/knowledgeboost',
    siteName: 'ProjectAssignments',
    type: 'website',
    images: [
      {
        url: 'https://projectassignments.com/images/kb-logo.png',
        alt: 'KnowledgeBoost — The Tech Knowledge Community logo',
      },
    ],
  },
}

const communityAreas = [
  'Cybersecurity',
  'Software Engineering',
  'DevOps & Cloud',
  'Databases & Data',
  'Data Mining & Analytics',
  'Systems & Infrastructure',
  'Research & Technology',
  'Emerging Technologies',
]

const knowledgeBoostSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/knowledgeboost#webpage',
      url: 'https://projectassignments.com/knowledgeboost',
      name: 'KnowledgeBoost — The Tech Knowledge Community',
      description:
        'KnowledgeBoost is a technology-focused knowledge community covering cybersecurity, software engineering, data, databases, DevOps, research, and emerging technologies.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
    },
    {
      '@type': 'Organization',
      name: 'KnowledgeBoost',
      url: 'https://projectassignments.com/knowledgeboost',
      logo: 'https://projectassignments.com/images/kb-logo.png',
      description:
        'The Tech Knowledge Community focused on technology learning, exploration, discussion, and knowledge sharing.',
    },
  ],
}

export default function KnowledgeBoostComingSoonPage() {
  return (
    <>
      <main className="knowledgeboost-page">
        <section
          style={{
            minHeight: 'calc(100vh - 300px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            background:
              'radial-gradient(circle at 50% 18%, rgba(37, 99, 235, 0.14), transparent 32%), radial-gradient(circle at 80% 80%, rgba(234, 88, 12, 0.12), transparent 30%), #070b10',
            color: '#ffffff',
            padding: '90px 24px 110px',
          }}
        >
          {/* Subtle ambient background */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 90%)',
            }}
          />

          {/* Decorative glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              top: '-180px',
              left: '50%',
              transform: 'translateX(-50%)',
              background:
                'radial-gradient(circle, rgba(37,99,235,0.16), transparent 68%)',
              filter: 'blur(10px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '980px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            {/* Brand */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '34px',
              }}
            >
              <Image
                src="/images/kb-logo.png"
                alt="KnowledgeBoost — The Tech Knowledge Community"
                width={900}
                height={420}
                priority
                style={{
                  width: 'min(620px, 88vw)',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            {/* Status */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '8px 14px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.14)',
                background: 'rgba(255,255,255,0.045)',
                color: '#f5a623',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              <Sparkles size={14} aria-hidden="true" />
              Coming Soon
            </div>

            {/* Heading */}
            <h1
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize:
                  'clamp(2.5rem, 7vw, 5.2rem)',
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                fontWeight: 800,
              }}
            >
              A place to learn.
              <br />
              A place to explore.
              <br />
              A place to{' '}
              <span style={{ color: '#f59e0b' }}>
                boost knowledge.
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                maxWidth: '760px',
                margin: '28px auto 0',
                color: '#aeb9c8',
                fontSize:
                  'clamp(1rem, 2vw, 1.18rem)',
                lineHeight: 1.8,
              }}
            >
              KnowledgeBoost is our upcoming technology-focused
              knowledge community — built for people who want to
              understand technology deeply, discover useful ideas,
              share knowledge, and keep learning.
            </p>

            {/* Areas */}
            <div
              style={{
                maxWidth: '820px',
                margin: '42px auto 0',
              }}
            >
              <p
                style={{
                  margin: '0 0 18px',
                  color: '#7f8da1',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                What we're building around
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                {communityAreas.map((area) => (
                  <span
                    key={area}
                    style={{
                      padding: '9px 13px',
                      borderRadius: '8px',
                      border:
                        '1px solid rgba(255,255,255,0.10)',
                      background:
                        'rgba(255,255,255,0.035)',
                      color: '#c9d2de',
                      fontSize: '13px',
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              aria-hidden="true"
              style={{
                width: '72px',
                height: '1px',
                margin: '44px auto 30px',
                background:
                  'linear-gradient(to right, transparent, #f59e0b, transparent)',
              }}
            />

            {/* Closing */}
            <p
              style={{
                maxWidth: '700px',
                margin: '0 auto',
                color: '#8996a7',
                fontSize: '0.95rem',
                lineHeight: 1.8,
              }}
            >
              We're building it carefully rather than rushing it.
              The community will evolve around practical technical
              knowledge, thoughtful discussion, useful resources, and
              ideas worth sharing.
            </p>

            {/* Navigation */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '34px',
              }}
            >
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  border:
                    '1px solid rgba(255,255,255,0.13)',
                  color: '#d7dee8',
                  background:
                    'rgba(255,255,255,0.045)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 700,
                }}
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to ProjectAssignments
              </Link>

              <Link
                href="/technologies"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  background: '#f59e0b',
                  color: '#111827',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 800,
                }}
              >
                Explore Technologies
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            knowledgeBoostSchema
          ),
        }}
      />
    </>
  )
}