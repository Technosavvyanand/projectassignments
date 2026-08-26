import { getAllKnowledgeBoostArticles, getKnowledgeBoostArticle } from '@/lib/knowledgeboost'
import {
    ArrowLeft,
    Clock3,
    ExternalLink,
    Sparkles,
} from 'lucide-react'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

/**
 * ------------------------------------------------------------
 * STATIC ARTICLE GENERATION
 * ------------------------------------------------------------
 *
 * Every .mdx article gets its own static page.
 *
 * Example:
 *
 * /knowledgeboost/articles/
 * responsible-and-ethical-use-of-generative-ai-in-academics
 *
 * This also means adding a new MDX file automatically creates
 * its corresponding article route during the build.
 */

export function generateStaticParams() {
  return getAllKnowledgeBoostArticles().map((article) => ({
    slug: article.slug,
  }))
}

/**
 * ------------------------------------------------------------
 * SEO METADATA
 * ------------------------------------------------------------
 */

export async function generateMetadata(
  { params }: PageProps,
): Promise<Metadata> {
  const { slug } = await params

  const article = getKnowledgeBoostArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found | KnowledgeBoost',
    }
  }

  const title =
    article.seoTitle ||
    `${article.title} | KnowledgeBoost`

  const description =
    article.seoDescription ||
    article.excerpt

  const articleUrl =
    `https://projectassignments.com/knowledgeboost/articles/${article.slug}`

  return {
    title,
    description,

    keywords:
      article.keywords?.length
        ? article.keywords
        : article.categories,

    authors: [
      {
        name: article.author,
      },
    ],

    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      title,
      description,
      url: articleUrl,
      siteName: 'KnowledgeBoost',
      type: 'article',

      publishedTime: article.date,

      authors: [
        article.author,
      ],

      section:
        article.categories[0],

      images: article.cover
        ? [
            {
              url: article.cover,
              alt: article.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,

      images: article.cover
        ? [article.cover]
        : undefined,
    },
  }
}

/**
 * ------------------------------------------------------------
 * PAGE
 * ------------------------------------------------------------
 */

export default async function KnowledgeBoostArticlePage({
  params,
}: PageProps) {
  const { slug } = await params

  const article =
    getKnowledgeBoostArticle(slug)

  if (!article) {
    notFound()
  }

  const formattedDate =
    formatDate(article.date)

  const relatedArticles =
    getAllKnowledgeBoostArticles()
      .filter(
        (candidate) =>
          candidate.slug !== article.slug &&
          candidate.categories.some(
            (category) =>
              article.categories.includes(
                category,
              ),
          ),
      )
      .slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',

    '@type': 'Article',

    headline: article.title,

    description: article.excerpt,

    datePublished: article.date,

    dateModified: article.date,

    author: {
      '@type': 'Person',
      name: article.author,
    },

    publisher: {
      '@type': 'Organization',
      name: 'KnowledgeBoost',
      url:
        'https://projectassignments.com/knowledgeboost',
      logo: {
        '@type': 'ImageObject',
        url:
          'https://projectassignments.com/images/kb-logo.png',
      },
    },

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        `https://projectassignments.com/knowledgeboost/articles/${article.slug}`,
    },

    image: article.cover
      ? `https://projectassignments.com${article.cover}`
      : undefined,

    articleSection:
      article.categories,

    keywords:
      article.keywords?.join(', '),

    isPartOf: {
      '@type': 'WebSite',
      name: 'KnowledgeBoost',
      url:
        'https://projectassignments.com/knowledgeboost',
    },
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#070b10',
        color: '#ffffff',
      }}
    >
      {/* =====================================================
          ARTICLE HEADER
      ===================================================== */}

      <article>
        <header
          style={{
            padding:
              '58px 24px 38px',
            borderBottom:
              '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {/* Back link */}

            <Link
              href="/knowledgeboost"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                color: '#758295',
                fontSize: '12px',
                fontWeight: 700,
                textDecoration: 'none',
                marginBottom: '34px',
              }}
            >
              <ArrowLeft
                size={14}
                aria-hidden="true"
              />

              KnowledgeBoost
            </Link>

            {/* Categories */}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '18px',
              }}
            >
              <Sparkles
                size={13}
                color="#f59e0b"
                aria-hidden="true"
              />

              {article.categories.map(
                (category, index) => (
                  <span
                    key={category}
                    style={{
                      color: '#f59e0b',
                      fontSize: '10px',
                      fontWeight: 850,
                      letterSpacing:
                        '0.11em',
                      textTransform:
                        'uppercase',
                    }}
                  >
                    {category}

                    {index <
                      article.categories
                        .length -
                        1 && (
                      <span
                        style={{
                          color:
                            '#3b4654',
                          margin:
                            '0 7px',
                        }}
                      >
                        /
                      </span>
                    )}
                  </span>
                ),
              )}
            </div>

            {/* Title */}

            <h1
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize:
                  'clamp(2.35rem, 6vw, 4.7rem)',
                lineHeight: 1.04,
                letterSpacing:
                  '-0.055em',
                fontWeight: 850,
              }}
            >
              {article.title}
            </h1>

            {/* Excerpt */}

            <p
              style={{
                maxWidth: '780px',
                margin:
                  '22px 0 0',
                color: '#9ba8b8',
                fontSize:
                  'clamp(1rem, 2vw, 1.18rem)',
                lineHeight: 1.75,
              }}
            >
              {article.excerpt}
            </p>

            {/* Metadata */}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '24px',
                color: '#667384',
                fontSize: '11px',
              }}
            >
              <span
                style={{
                  color: '#aeb9c8',
                  fontWeight: 700,
                }}
              >
                By {article.author}
              </span>

              <span>•</span>

              <span>
                {formattedDate}
              </span>

              <span>•</span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Clock3
                  size={12}
                  aria-hidden="true"
                />

                {article.readingTime}
              </span>

              <span>•</span>

              <span>
                {article.type}
              </span>
            </div>
          </div>
        </header>

        {/* ===================================================
            HERO IMAGE
        =================================================== */}

        {article.cover && (
          <div
            style={{
              padding:
                '38px 24px 0',
            }}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '1100px',
                margin: '0 auto',
                aspectRatio: '16 / 8',
                overflow: 'hidden',
                borderRadius: '16px',
                border:
                  '1px solid rgba(255,255,255,0.08)',
                background: '#0c121a',
              }}
            >
              <Image
                src={article.cover}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 1100px"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        )}

        {/* ===================================================
            ARTICLE CONTENT
        =================================================== */}

        <div
          style={{
            padding:
              '52px 24px 80px',
          }}
        >
          <div
            className="kb-article-layout"
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns:
                'minmax(0, 760px) 250px',
              gap: '70px',
              alignItems: 'start',
            }}
          >
            {/* Article body */}

            <div
              className="kb-article-content"
            >
              <MDXRemote
                source={article.content}
                components={{
                  a: ({
                    href,
                    children,
                    ...props
                  }) => (
                    <a
                      href={href}
                      {...props}
                      style={{
                        color: '#f59e0b',
                        textDecoration:
                          'underline',
                        textDecorationColor:
                          'rgba(245,158,11,0.4)',
                        textUnderlineOffset:
                          '3px',
                      }}
                    >
                      {children}
                    </a>
                  ),

                  img: ({
                    src,
                    alt,
                    ...props
                  }) => (
                    <img
                      src={src}
                      alt={alt || ''}
                      {...props}
                      style={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        borderRadius:
                          '12px',
                        margin:
                          '30px 0',
                      }}
                    />
                  ),
                }}
              />
            </div>

            {/* =================================================
                ARTICLE SIDEBAR
            ================================================= */}

            <aside
              style={{
                position: 'sticky',
                top: '105px',
              }}
            >
              <div
                style={{
                  padding:
                    '18px',
                  border:
                    '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  background:
                    'rgba(255,255,255,0.018)',
                }}
              >
                <p
                  style={{
                    margin:
                      '0 0 12px',
                    color: '#657284',
                    fontSize: '9px',
                    fontWeight: 850,
                    letterSpacing:
                      '0.14em',
                    textTransform:
                      'uppercase',
                  }}
                >
                  About this article
                </p>

                <div
                  style={{
                    display: 'grid',
                    gap: '10px',
                  }}
                >
                  <SidebarItem
                    label="Type"
                    value={article.type}
                  />

                  <SidebarItem
                    label="Reading time"
                    value={
                      article.readingTime
                    }
                  />

                  <SidebarItem
                    label="Published"
                    value={
                      formattedDate
                    }
                  />

                  <SidebarItem
                    label="Author"
                    value={
                      article.author
                    }
                  />
                </div>
              </div>

              {/* Categories */}

              <div
                style={{
                  marginTop: '18px',
                  padding:
                    '18px',
                  borderTop:
                    '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <p
                  style={{
                    margin:
                      '0 0 11px',
                    color: '#657284',
                    fontSize: '9px',
                    fontWeight: 850,
                    letterSpacing:
                      '0.14em',
                    textTransform:
                      'uppercase',
                  }}
                >
                  Topics
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                  }}
                >
                  {article.categories.map(
                    (category) => (
                      <Link
                        key={category}
                        href={`/knowledgeboost/category/${slugify(
                          category,
                        )}`}
                        style={{
                          padding:
                            '6px 8px',
                          borderRadius:
                            '6px',
                          border:
                            '1px solid rgba(255,255,255,0.07)',
                          color:
                            '#8996a7',
                          fontSize:
                            '9px',
                          fontWeight:
                            700,
                          textDecoration:
                            'none',
                        }}
                      >
                        {category}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* =====================================================
          RELATED ARTICLES
      ===================================================== */}

      {relatedArticles.length > 0 && (
        <section
          style={{
            padding:
              '0 24px 90px',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                borderTop:
                  '1px solid rgba(255,255,255,0.08)',
                paddingTop: '26px',
              }}
            >
              <p
                style={{
                  margin:
                    '0 0 7px',
                  color: '#f59e0b',
                  fontSize: '10px',
                  fontWeight: 850,
                  letterSpacing:
                    '0.14em',
                  textTransform:
                    'uppercase',
                }}
              >
                Keep exploring
              </p>

              <h2
                style={{
                  margin: 0,
                  color: '#ffffff',
                  fontSize: '25px',
                  fontWeight: 800,
                  letterSpacing:
                    '-0.035em',
                }}
              >
                Related Knowledge
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(3, minmax(0, 1fr))',
                gap: '20px',
                marginTop: '24px',
              }}
            >
              {relatedArticles.map(
                (related) => (
                  <Link
                    key={related.slug}
                    href={`/knowledgeboost/articles/${related.slug}`}
                    style={{
                      display: 'block',
                      overflow: 'hidden',
                      border:
                        '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      background:
                        '#0b1118',
                      textDecoration:
                        'none',
                    }}
                  >
                    {related.cover && (
                      <div
                        style={{
                          position:
                            'relative',
                          aspectRatio:
                            '16 / 9',
                          background:
                            '#111923',
                        }}
                      >
                        <Image
                          src={
                            related.cover
                          }
                          alt=""
                          fill
                          sizes="(max-width: 700px) 100vw, 33vw"
                          style={{
                            objectFit:
                              'cover',
                          }}
                        />
                      </div>
                    )}

                    <div
                      style={{
                        padding:
                          '16px',
                      }}
                    >
                      <div
                        style={{
                          color:
                            '#f59e0b',
                          fontSize:
                            '9px',
                          fontWeight:
                            800,
                          letterSpacing:
                            '0.08em',
                          textTransform:
                            'uppercase',
                        }}
                      >
                        {
                          related
                            .categories[0]
                        }
                      </div>

                      <h3
                        style={{
                          margin:
                            '7px 0 0',
                          color:
                            '#e7edf5',
                          fontSize:
                            '15px',
                          lineHeight:
                            1.35,
                          fontWeight:
                            750,
                        }}
                      >
                        {
                          related.title
                        }
                      </h3>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          SUBTLE PROJECTASSIGNMENTS CONNECTION
      ===================================================== */}

      {article.projectAssignmentsRelevance ===
        'high' && (
        <section
          style={{
            padding:
              '0 24px 80px',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding:
                '24px 26px',
              borderTop:
                '1px solid rgba(255,255,255,0.07)',
              borderBottom:
                '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p
              style={{
                margin:
                  '0 0 8px',
                color: '#657284',
                fontSize: '9px',
                fontWeight: 850,
                letterSpacing:
                  '0.14em',
                textTransform:
                  'uppercase',
              }}
            >
              Related resource
            </p>

            <p
              style={{
                margin: 0,
                color: '#8996a7',
                fontSize: '12px',
                lineHeight: 1.7,
              }}
            >
              Looking for practical
              guidance with a technical
              academic or research
              project? Explore{' '}
              <Link
                href="/"
                style={{
                  color: '#b7c1ce',
                  fontWeight: 700,
                  textDecoration:
                    'none',
                }}
              >
                ProjectAssignments
              </Link>{' '}
              for ethical technical and
              research consultancy.
            </p>
          </div>
        </section>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        style={{
          borderTop:
            '1px solid rgba(255,255,255,0.08)',
          background: '#05080c',
          padding:
            '38px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent:
              'space-between',
            flexWrap: 'wrap',
            gap: '18px',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: '#dce3ec',
                fontSize: '13px',
                fontWeight: 800,
              }}
            >
              KnowledgeBoost
            </p>

            <p
              style={{
                margin:
                  '5px 0 0',
                color: '#566273',
                fontSize: '11px',
              }}
            >
              Technology worth knowing.
            </p>
          </div>

          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#697687',
              fontSize: '11px',
              fontWeight: 700,
              textDecoration:
                'none',
            }}
          >
            ProjectAssignments

            <ExternalLink
              size={11}
              aria-hidden="true"
            />
          </Link>
        </div>
      </footer>

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              articleSchema,
            ),
        }}
      />
    </main>
  )
}

/**
 * ------------------------------------------------------------
 * SIDEBAR ITEM
 * ------------------------------------------------------------
 */

function SidebarItem({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div>
      <div
        style={{
          color: '#596678',
          fontSize: '9px',
          marginBottom: '3px',
        }}
      >
        {label}
      </div>

      <div
        style={{
          color: '#aeb9c8',
          fontSize: '11px',
          fontWeight: 650,
          lineHeight: 1.4,
        }}
      >
        {value}
      </div>
    </div>
  )
}

/**
 * ------------------------------------------------------------
 * DATE FORMATTER
 * ------------------------------------------------------------
 */

function formatDate(date: string) {
  return new Intl.DateTimeFormat(
    'en-US',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    },
  ).format(new Date(date))
}

/**
 * ------------------------------------------------------------
 * SLUGIFY
 * ------------------------------------------------------------
 */

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}