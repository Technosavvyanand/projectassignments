import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import {
    getAllKnowledgeBoostArticles,
    type KnowledgeBoostArticle,
} from '@/lib/knowledgeboost'

const categories = [
  'AI & Machine Learning',
  'Cybersecurity',
  'Programming',
  'Software Engineering',
  'DevOps & Cloud',
  'Databases & DBMS',
  'Data Science',
  'Data Mining',
  'Data Visualization',
  'Networking',
  'Quantum Computing',
  'Emerging Technology',
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function categoryFromSlug(slug: string) {
  return categories.find(
    (category) => slugify(category) === slug,
  )
}

function articleHref(slug: string) {
  return `/knowledgeboost/articles/${slug}`
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

const articles = getAllKnowledgeBoostArticles()

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: slugify(category),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = categoryFromSlug(slug)

  if (!category) {
    return {
      title: 'Category Not Found | KnowledgeBoost',
    }
  }

  return {
    title: `${category} | KnowledgeBoost`,
    description: `Explore KnowledgeBoost articles about ${category}.`,
    alternates: {
      canonical: `https://projectassignments.com/knowledgeboost/category/${slug}`,
    },
    openGraph: {
      title: `${category} | KnowledgeBoost`,
      description: `Explore KnowledgeBoost articles about ${category}.`,
      url: `https://projectassignments.com/knowledgeboost/category/${slug}`,
      siteName: 'KnowledgeBoost',
      type: 'website',
    },
  }
}

export default async function KnowledgeBoostCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const category = categoryFromSlug(slug)

  if (!category) {
    notFound()
  }

  const categoryArticles = articles
    .filter((article) =>
      article.categories?.includes(category),
    )
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime(),
    )

  return (
    <div className="kb-category-page">
      <style>{`
        .kb-category-page {
          min-height: 100vh;
          background: #070b10;
          color: #f4f7fb;
          font-family: var(--font-body), Arial, sans-serif;
        }

        .kb-category-page *,
        .kb-category-page *::before,
        .kb-category-page *::after {
          box-sizing: border-box;
        }

        .kb-category-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .kb-category-header {
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 54px 0 34px;
        }

        .kb-category-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 28px;
          color: #7f8b9a;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
        }

        .kb-category-back:hover {
          color: #ffffff;
        }

        .kb-category-kicker {
          margin: 0 0 9px;
          color: #f59e0b;
          font-size: 10px;
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .kb-category-title {
          margin: 0;
          color: #ffffff;
          font-family: var(--font-display), Arial, sans-serif;
          font-size: clamp(2.3rem, 5vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.045em;
          font-weight: 800;
        }

        .kb-category-description {
          max-width: 720px;
          margin: 16px 0 0;
          color: #8290a2;
          font-size: 14px;
          line-height: 1.75;
        }

        .kb-category-count {
          margin-top: 18px;
          color: #596678;
          font-size: 11px;
          font-weight: 700;
        }

        .kb-category-content {
          padding: 44px 0 90px;
        }

        .kb-category-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .kb-article-card {
          display: block;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 13px;
          background: #0b1118;
          text-decoration: none;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .kb-article-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.14);
          background: #0e151e;
        }

        .kb-article-image-wrap {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #111923;
        }

        .kb-article-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 400ms ease;
        }

        .kb-article-card:hover .kb-article-image {
          transform: scale(1.035);
        }

        .kb-article-body {
          padding: 18px;
        }

        .kb-article-category {
          color: #f59e0b;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .kb-article-title {
          margin: 9px 0 8px;
          color: #e7edf5;
          font-family: var(--font-display), Arial, sans-serif;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 780;
          letter-spacing: -0.02em;
        }

        .kb-article-excerpt {
          margin: 0;
          color: #778496;
          font-size: 12px;
          line-height: 1.7;
        }

        .kb-article-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 15px;
          color: #596678;
          font-size: 10px;
        }

        .kb-empty {
          padding: 48px 0;
          color: #778496;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .kb-category-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .kb-category-container {
            width: calc(100% - 30px);
          }

          .kb-category-grid {
            grid-template-columns: 1fr;
          }

          .kb-category-header {
            padding-top: 38px;
          }
        }
      `}</style>

      <header className="kb-category-header">
        <div className="kb-category-container">
          <Link
            href="/knowledgeboost"
            className="kb-category-back"
          >
            <ArrowLeft size={13} aria-hidden="true" />
            Back to KnowledgeBoost
          </Link>

          <p className="kb-category-kicker">
            KnowledgeBoost
          </p>

          <h1 className="kb-category-title">
            {category}
          </h1>

          <p className="kb-category-description">
            Explore KnowledgeBoost articles, explanations,
            ideas, and practical knowledge across {category}.
          </p>

          <div className="kb-category-count">
            {categoryArticles.length}{' '}
            {categoryArticles.length === 1
              ? 'article'
              : 'articles'}
          </div>
        </div>
      </header>

      <main className="kb-category-content">
        <div className="kb-category-container">
          {categoryArticles.length === 0 ? (
            <p className="kb-empty">
              No articles are currently available in this
              category.
            </p>
          ) : (
            <div className="kb-category-grid">
              {categoryArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function ArticleCard({
  article,
}: {
  article: KnowledgeBoostArticle
}) {
  return (
    <Link
      href={articleHref(article.slug)}
      className="kb-article-card"
    >
      <div className="kb-article-image-wrap">
        <img
          src={article.cover}
          alt=""
          className="kb-article-image"
        />
      </div>

      <div className="kb-article-body">
        <div className="kb-article-category">
          {article.category}
        </div>

        <h2 className="kb-article-title">
          {article.title}
        </h2>

        <p className="kb-article-excerpt">
          {article.excerpt}
        </p>

        <div className="kb-article-meta">
          <span>{formatDate(article.date)}</span>
          <span aria-hidden="true">•</span>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </Link>
  )
}