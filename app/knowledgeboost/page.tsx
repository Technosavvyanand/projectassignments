import {
    ArrowRight,
    Clock3,
    ExternalLink,
    Sparkles,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { KnowledgeBoostHeroVisual } from '@/components/knowledgeboost/hero-visual'

export const metadata: Metadata = {
  title: 'KnowledgeBoost — Technology Worth Knowing',
  description:
    'KnowledgeBoost is a technology publication covering AI, cybersecurity, software engineering, DevOps, databases, data science, quantum computing, and emerging technologies.',
  keywords: [
    'KnowledgeBoost',
    'technology publication',
    'technology knowledge',
    'AI',
    'artificial intelligence',
    'cybersecurity',
    'software engineering',
    'DevOps',
    'cloud computing',
    'databases',
    'data science',
    'quantum computing',
    'emerging technology',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/knowledgeboost',
  },
  openGraph: {
    title: 'KnowledgeBoost — Technology Worth Knowing',
    description:
      'Technology worth knowing. Explore ideas, advancements, research, and practical knowledge across the technology landscape.',
    url:
      'https://projectassignments.com/knowledgeboost',
    siteName: 'KnowledgeBoost',
    type: 'website',
    images: [
      {
        url:
          'https://projectassignments.com/images/kb-logo.png',
        alt: 'KnowledgeBoost — Technology Worth Knowing',
      },
    ],
  },
}

type ArticleType =
  | 'News'
  | 'Explainer'
  | 'Deep Dive'
  | 'Tutorial'
  | 'Research'
  | 'Opinion'
  | 'Discussion'

type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  categories?: string[]
  type: ArticleType
  date: string
  readingTime: string
  cover: string
  featured?: boolean
  author: string
  projectAssignmentsRelevance?:
    | 'low'
    | 'medium'
    | 'high'
}

/* --------------------------------------------------------------------------
   ARTICLES

   For now these are maintained directly in VS Code.

   Later this can be replaced with:

       getArticlesFromCMS()

   without changing the homepage structure.
-------------------------------------------------------------------------- */

const articles: Article[] = [
  {
    slug: 'sample-article',
    title:
      'Your First KnowledgeBoost Article Goes Here',
    excerpt:
      'Replace this article with the first real piece of technology knowledge you want to publish on KnowledgeBoost.',
    category: 'Emerging Technology',
    categories: ['Emerging Technology'],
    type: 'Explainer',
    date: '2026-08-26',
    readingTime: '5 min read',
    cover:
      '/images/knowledgeboost/sample-article.jpg',
    featured: true,
    author: 'KnowledgeBoost Editorial',
    projectAssignmentsRelevance: 'medium',
  },
]

/* --------------------------------------------------------------------------
   CATEGORIES
-------------------------------------------------------------------------- */

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

/* --------------------------------------------------------------------------
   HELPERS
-------------------------------------------------------------------------- */

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function categoryHref(category: string) {
  return `/knowledgeboost/category/${slugify(category)}`
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

function getArticlesByCategory(category: string) {
  return articles
    .filter((article) =>
      article.categories?.includes(category),
    )
    .slice(0, 3)
}

const featuredArticle =
  articles.find((article) => article.featured) ??
  articles[0]

const latestArticles = [...articles]
  .sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime(),
  )
  .slice(0, 6)

/* --------------------------------------------------------------------------
   STRUCTURED DATA
-------------------------------------------------------------------------- */

const knowledgeBoostSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/knowledgeboost#webpage',
      url:
        'https://projectassignments.com/knowledgeboost',
      name:
        'KnowledgeBoost — Technology Worth Knowing',
      description:
        'KnowledgeBoost is a technology publication covering AI, cybersecurity, software engineering, DevOps, databases, data science, quantum computing, and emerging technologies.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
    },
    {
      '@type': 'Organization',
      name: 'KnowledgeBoost',
      url:
        'https://projectassignments.com/knowledgeboost',
      logo:
        'https://projectassignments.com/images/kb-logo.png',
      description:
        'A technology publication and knowledge community focused on learning, exploration, discussion, and knowledge sharing.',
    },
  ],
}

/* ==========================================================================
   PAGE
========================================================================== */

export default function KnowledgeBoostPage() {
  return (
    <>
      {/* ------------------------------------------------------------------
          PAGE-SPECIFIC LAYOUT CSS

          The animated visual itself is styled by:
          app/knowledgeboost/knowledgeboost.css

          These rules handle the homepage around it.
      ------------------------------------------------------------------ */}

      <style>{`
        .kb-page {
          --kb-bg: #070b10;
          --kb-bg-deep: #05080c;
          --kb-surface: #0b1118;
          --kb-surface-2: #0e151e;
          --kb-border: rgba(255,255,255,0.08);
          --kb-border-soft: rgba(255,255,255,0.055);
          --kb-text: #f4f7fb;
          --kb-text-soft: #c0cad7;
          --kb-muted: #8290a2;
          --kb-muted-dark: #5e6b7b;
          --kb-blue: #3b82f6;
          --kb-gold: #f59e0b;

          min-height: 100vh;
          background: var(--kb-bg);
          color: var(--kb-text);
          font-family: var(--font-body), Arial, sans-serif;
          overflow-x: hidden;
        }

        .kb-page *,
        .kb-page *::before,
        .kb-page *::after {
          box-sizing: border-box;
        }

        .kb-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* --------------------------------------------------------------
           HEADER
        -------------------------------------------------------------- */

        .kb-header {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid var(--kb-border);
          background: rgba(7, 11, 16, 0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .kb-header-inner {
          width: min(1440px, calc(100% - 48px));
          min-height: 76px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .kb-logo-link {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          text-decoration: none;
        }

        .kb-logo {
          width: 170px;
          height: auto;
          display: block;
        }

        .kb-category-nav {
          flex: 1 1 auto;
          min-width: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .kb-category-nav::-webkit-scrollbar {
          display: none;
        }

        .kb-category-list {
          display: flex;
          align-items: center;
          gap: 3px;
          width: max-content;
        }

        .kb-category-link {
          display: inline-flex;
          align-items: center;
          padding: 8px 9px;
          border-radius: 7px;
          color: #aeb9c8;
          font-size: 12px;
          line-height: 1;
          font-weight: 650;
          white-space: nowrap;
          text-decoration: none;
          transition:
            color 160ms ease,
            background 160ms ease;
        }

        .kb-category-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.05);
        }

        .kb-project-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          flex: 0 0 auto;
          padding: 9px 11px;
          border: 1px solid var(--kb-border);
          border-radius: 8px;
          background: rgba(255,255,255,0.025);
          color: #8f9bab;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition:
            color 160ms ease,
            border-color 160ms ease,
            background 160ms ease;
        }

        .kb-project-link:hover {
          color: #ffffff;
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
        }

        /* --------------------------------------------------------------
           HERO
        -------------------------------------------------------------- */

        .kb-hero {
          position: relative;
          overflow: hidden;
          min-height: 620px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          background:
            radial-gradient(
              circle at 72% 42%,
              rgba(37,99,235,0.075),
              transparent 30%
            ),
            radial-gradient(
              circle at 20% 15%,
              rgba(245,158,11,0.045),
              transparent 28%
            ),
            #070b10;
        }

        .kb-hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns:
            minmax(0, 0.94fr)
            minmax(460px, 1.06fr);
          align-items: center;
          gap: 30px;
          min-height: 620px;
          padding: 56px 0;
        }

        .kb-hero-copy {
          position: relative;
          z-index: 5;
          padding: 30px 0;
        }

        .kb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 18px;
          color: var(--kb-gold);
          font-size: 11px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .kb-hero-title {
          max-width: 680px;
          margin: 0;
          color: #ffffff;
          font-family: var(--font-display), Arial, sans-serif;
          font-size: clamp(3rem, 5vw, 5.25rem);
          line-height: 0.99;
          letter-spacing: -0.055em;
          font-weight: 850;
        }

        .kb-hero-title-muted {
          color: #9aa7b8;
        }

        .kb-hero-title-accent {
          color: var(--kb-gold);
        }

        .kb-hero-description {
          max-width: 650px;
          margin: 25px 0 0;
          color: #aeb9c8;
          font-size: clamp(1rem, 1.5vw, 1.13rem);
          line-height: 1.8;
        }

        .kb-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 27px;
        }

        .kb-primary-button,
        .kb-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 15px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 750;
          text-decoration: none;
          transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease;
        }

        .kb-primary-button {
          background: var(--kb-gold);
          color: #17110a;
        }

        .kb-primary-button:hover {
          transform: translateY(-1px);
          background: #ffb52e;
        }

        .kb-secondary-button {
          border: 1px solid var(--kb-border);
          background: rgba(255,255,255,0.025);
          color: #aeb9c8;
        }

        .kb-secondary-button:hover {
          transform: translateY(-1px);
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.055);
          color: #ffffff;
        }

        .kb-hero-visual-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .kb-hero-visual-wrapper .kb-hero-visual {
          margin-left: auto;
          margin-right: auto;
        }

        .kb-hero-grid::before {
          content: '';
          position: absolute;
          width: 720px;
          height: 720px;
          right: -160px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          pointer-events: none;
          background:
            radial-gradient(
              circle,
              rgba(37,99,235,0.09),
              rgba(37,99,235,0.035) 38%,
              transparent 70%
            );
          filter: blur(18px);
          z-index: -1;
        }

        /* --------------------------------------------------------------
           FEATURED / LATEST
        -------------------------------------------------------------- */

        .kb-featured-section {
          padding: 22px 0 82px;
          background: var(--kb-bg);
        }

        .kb-featured-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1.7fr)
            minmax(280px, 0.8fr);
          gap: 22px;
        }

        .kb-featured-card {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          border: 1px solid var(--kb-border);
          border-radius: 16px;
          background: var(--kb-surface);
          text-decoration: none;
        }

        .kb-featured-image {
          object-fit: cover;
          opacity: 0.62;
          transition: transform 500ms ease;
        }

        .kb-featured-card:hover .kb-featured-image {
          transform: scale(1.035);
        }

        .kb-featured-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(5,8,12,0.98) 5%,
              rgba(5,8,12,0.62) 48%,
              rgba(5,8,12,0.08) 100%
            );
        }

        .kb-featured-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 34px;
        }

        .kb-featured-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
        }

        .kb-featured-label {
          padding: 6px 9px;
          border-radius: 6px;
          background: var(--kb-gold);
          color: #111827;
          font-size: 10px;
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .kb-featured-category {
          color: #aeb9c8;
          font-size: 11px;
          font-weight: 700;
        }

        .kb-featured-title {
          margin: 0;
          color: #ffffff;
          font-family: var(--font-display), Arial, sans-serif;
          font-size: clamp(1.8rem, 3.4vw, 3.25rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          font-weight: 800;
        }

        .kb-featured-excerpt {
          max-width: 700px;
          margin: 16px 0 0;
          color: #b7c1ce;
          font-size: 14px;
          line-height: 1.75;
        }

        .kb-featured-byline {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 20px;
          color: #7f8da1;
          font-size: 11px;
        }

        /* --------------------------------------------------------------
           LATEST SIDEBAR
        -------------------------------------------------------------- */

        .kb-latest-panel {
          min-width: 0;
        }

        .kb-panel-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
        }

        .kb-panel-title {
          margin: 0;
          color: #ffffff;
          font-size: 18px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .kb-panel-label {
          color: #566274;
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .kb-latest-list {
          border-top: 1px solid var(--kb-border);
        }

        .kb-latest-item {
          display: block;
          padding: 17px 0;
          border-bottom: 1px solid var(--kb-border-soft);
          text-decoration: none;
        }

        .kb-latest-item-category {
          color: var(--kb-gold);
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .kb-latest-item-title {
          margin: 7px 0 8px;
          color: #e7edf5;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 750;
        }

        .kb-latest-item-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #657284;
          font-size: 10px;
        }

        /* --------------------------------------------------------------
           SECTION HEADINGS
        -------------------------------------------------------------- */

        .kb-content-section {
          padding: 0 0 90px;
        }

        .kb-section-heading {
          border-bottom: 1px solid var(--kb-border);
          padding-bottom: 15px;
        }

        .kb-section-kicker {
          margin: 0 0 7px;
          color: var(--kb-gold);
          font-size: 10px;
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .kb-section-title {
          margin: 0;
          color: #ffffff;
          font-family: var(--font-display), Arial, sans-serif;
          font-size: 28px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.035em;
        }

        .kb-section-description {
          max-width: 680px;
          margin: 8px 0 0;
          color: #758295;
          font-size: 13px;
          line-height: 1.7;
        }

        .kb-article-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 28px;
        }

        /* --------------------------------------------------------------
           ARTICLE CARD
        -------------------------------------------------------------- */

        .kb-article-card {
          display: block;
          overflow: hidden;
          border: 1px solid var(--kb-border);
          border-radius: 13px;
          background: var(--kb-surface);
          text-decoration: none;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .kb-article-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.14);
          background: var(--kb-surface-2);
        }

        .kb-article-image-wrap {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #111923;
        }

        .kb-article-image {
          object-fit: cover;
          transition: transform 400ms ease;
        }

        .kb-article-card:hover .kb-article-image {
          transform: scale(1.035);
        }

        .kb-article-body {
          padding: 18px;
        }

        .kb-article-meta-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .kb-article-category {
          color: var(--kb-gold);
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .kb-article-type {
          color: #596678;
          font-size: 10px;
        }

        .kb-article-title {
          margin: 9px 0 8px;
          color: #e7edf5;
          font-family: var(--font-display), Arial, sans-serif;
          font-size: 17px;
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

        .kb-article-bottom {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 15px;
          color: #596678;
          font-size: 10px;
        }

        /* --------------------------------------------------------------
           CATEGORY SECTIONS
        -------------------------------------------------------------- */

        .kb-category-section {
          padding: 0 0 82px;
        }

        .kb-category-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid var(--kb-border);
          padding-bottom: 14px;
        }

        .kb-category-kicker {
          margin: 0 0 7px;
          color: #657284;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .kb-category-title {
          margin: 0;
          color: #ffffff;
          font-family: var(--font-display), Arial, sans-serif;
          font-size: 24px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .kb-view-all {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #8f9bab;
          font-size: 11px;
          line-height: 1;
          font-weight: 750;
          text-decoration: none;
          white-space: nowrap;
        }

        .kb-view-all:hover {
          color: #ffffff;
        }

        /* --------------------------------------------------------------
           COMMUNITY
        -------------------------------------------------------------- */

        .kb-community-section {
          padding: 10px 0 90px;
        }

        .kb-community-card {
          padding: 42px;
          border: 1px solid var(--kb-border);
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              rgba(37,99,235,0.08),
              rgba(255,255,255,0.025)
            );
        }

        .kb-community-content {
          max-width: 720px;
        }

        .kb-community-kicker {
          margin: 0 0 10px;
          color: var(--kb-gold);
          font-size: 10px;
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .kb-community-title {
          margin: 0;
          color: #ffffff;
          font-family: var(--font-display), Arial, sans-serif;
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          line-height: 1.1;
          letter-spacing: -0.035em;
          font-weight: 800;
        }

        .kb-community-description {
          margin: 14px 0 0;
          color: #8996a7;
          font-size: 14px;
          line-height: 1.75;
        }

        /* --------------------------------------------------------------
           FOOTER
        -------------------------------------------------------------- */

        .kb-footer {
          border-top: 1px solid var(--kb-border);
          background: var(--kb-bg-deep);
          padding: 44px 0;
        }

        .kb-footer-inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .kb-footer-name {
          margin: 0;
          color: #dce3ec;
          font-size: 14px;
          line-height: 1.2;
          font-weight: 800;
        }

        .kb-footer-tagline {
          margin: 6px 0 0;
          color: #667384;
          font-size: 12px;
        }

        .kb-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
        }

        .kb-footer-link {
          color: #7f8b9a;
          font-size: 12px;
          text-decoration: none;
        }

        .kb-footer-link:hover {
          color: #ffffff;
        }

        .kb-footer-separator {
          color: #303844;
        }

        .kb-footer-current {
          color: #566273;
          font-size: 12px;
        }

        /* --------------------------------------------------------------
           RESPONSIVE
        -------------------------------------------------------------- */

        @media (max-width: 1100px) {
          .kb-header-inner {
            gap: 16px;
          }

          .kb-logo {
            width: 145px;
          }

          .kb-hero-grid {
            grid-template-columns:
              minmax(0, 0.9fr)
              minmax(400px, 1.1fr);
            gap: 10px;
          }

          .kb-hero-title {
            font-size: clamp(2.8rem, 5vw, 4.5rem);
          }
        }

        @media (max-width: 900px) {
          .kb-container {
            width: min(100% - 36px, 720px);
          }

          .kb-header-inner {
            width: calc(100% - 36px);
            min-height: 68px;
          }

          .kb-project-link {
            display: none;
          }

          .kb-hero {
            min-height: auto;
          }

          .kb-hero-grid {
            grid-template-columns: 1fr;
            min-height: auto;
            padding: 60px 0 25px;
          }

          .kb-hero-copy {
            text-align: center;
            padding: 10px 0 0;
          }

          .kb-eyebrow {
            justify-content: center;
          }

          .kb-hero-title {
            max-width: 760px;
            margin: 0 auto;
            font-size: clamp(2.8rem, 8vw, 4.5rem);
          }

          .kb-hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .kb-hero-actions {
            justify-content: center;
          }

          .kb-hero-visual-wrapper {
            margin-top: -15px;
          }

          .kb-hero-grid::before {
            right: 50%;
            transform:
              translate(50%, -50%);
          }

          .kb-featured-grid {
            grid-template-columns: 1fr;
          }

          .kb-article-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .kb-container {
            width: calc(100% - 30px);
          }

          .kb-header-inner {
            width: calc(100% - 30px);
          }

          .kb-logo {
            width: 135px;
          }

          .kb-category-link {
            padding-left: 7px;
            padding-right: 7px;
            font-size: 11px;
          }

          .kb-hero-grid {
            padding-top: 48px;
          }

          .kb-hero-title {
            font-size: clamp(2.55rem, 13vw, 3.8rem);
          }

          .kb-hero-description {
            font-size: 14px;
            line-height: 1.7;
          }

          .kb-featured-section {
            padding-top: 15px;
          }

          .kb-featured-card {
            min-height: 410px;
          }

          .kb-featured-content {
            padding: 24px;
          }

          .kb-featured-title {
            font-size: 2rem;
          }

          .kb-featured-excerpt {
            font-size: 13px;
          }

          .kb-article-grid {
            grid-template-columns: 1fr;
          }

          .kb-category-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .kb-community-card {
            padding: 28px 24px;
          }

          .kb-footer-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-page *,
          .kb-page *::before,
          .kb-page *::after {
            scroll-behavior: auto !important;
          }

          .kb-page .kb-featured-image,
          .kb-page .kb-article-image,
          .kb-page .kb-article-card,
          .kb-page .kb-primary-button,
          .kb-page .kb-secondary-button {
            transition: none !important;
          }
        }
      `}</style>

      {/* ==================================================================
          HEADER
      ================================================================== */}

      <header className="kb-header">
        <div className="kb-header-inner">
          <Link
            href="/knowledgeboost"
            className="kb-logo-link"
            aria-label="KnowledgeBoost home"
          >
            <Image
              src="/images/kb-logo.png"
              alt="KnowledgeBoost"
              width={220}
              height={103}
              priority
              className="kb-logo"
            />
          </Link>

          <nav
            className="kb-category-nav"
            aria-label="KnowledgeBoost categories"
          >
            <div className="kb-category-list">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={categoryHref(category)}
                  className="kb-category-link"
                >
                  {category}
                </Link>
              ))}
            </div>
          </nav>

          <Link
            href="/"
            className="kb-project-link"
          >
            ProjectAssignments
            <ExternalLink
              size={13}
              aria-hidden="true"
            />
          </Link>
        </div>
      </header>

      {/* ==================================================================
          MAIN
      ================================================================== */}

      <main>
        {/* ================================================================
            HERO
        ================================================================ */}

        <section className="kb-hero">
          <div className="kb-container kb-hero-grid">
            <div className="kb-hero-copy">
              <p className="kb-eyebrow">
                <Sparkles
                  size={14}
                  aria-hidden="true"
                />
                Technology • Ideas • Discovery
              </p>

              <h1 className="kb-hero-title">
                Technology moves fast.
                <br />
                <span className="kb-hero-title-muted">
                  Knowledge should
                </span>{' '}
                <span className="kb-hero-title-accent">
                  keep up.
                </span>
              </h1>

              <p className="kb-hero-description">
                Explore technology, understand
                the ideas behind it, follow new
                advancements, and discover
                knowledge worth sharing.
              </p>

              <div className="kb-hero-actions">
                <Link
                  href="#latest-knowledge"
                  className="kb-primary-button"
                >
                  Explore knowledge
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="#topics"
                  className="kb-secondary-button"
                >
                  Browse topics
                </Link>
              </div>
            </div>

            <div className="kb-hero-visual-wrapper">
              <KnowledgeBoostHeroVisual />
            </div>
          </div>
        </section>

        {/* ================================================================
            FEATURED + LATEST
        ================================================================ */}

        <section className="kb-featured-section">
          <div className="kb-container">
            <div className="kb-featured-grid">
              {featuredArticle && (
                <Link
                  href={articleHref(
                    featuredArticle.slug,
                  )}
                  className="kb-featured-card"
                >
                  <Image
                    src={featuredArticle.cover}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 70vw"
                    className="kb-featured-image"
                  />

                  <div
                    className="kb-featured-overlay"
                    aria-hidden="true"
                  />

                  <div className="kb-featured-content">
                    <div className="kb-featured-meta">
                      <span className="kb-featured-label">
                        Featured
                      </span>

                      <span className="kb-featured-category">
                        {featuredArticle.category}
                      </span>
                    </div>

                    <h2 className="kb-featured-title">
                      {featuredArticle.title}
                    </h2>

                    <p className="kb-featured-excerpt">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="kb-featured-byline">
                      <span>
                        {featuredArticle.author}
                      </span>

                      <span aria-hidden="true">
                        •
                      </span>

                      <span>
                        {formatDate(
                          featuredArticle.date,
                        )}
                      </span>

                      <span aria-hidden="true">
                        •
                      </span>

                      <span>
                        {featuredArticle.readingTime}
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              <div className="kb-latest-panel">
                <div className="kb-panel-heading">
                  <h2 className="kb-panel-title">
                    Latest
                  </h2>

                  <span className="kb-panel-label">
                    Knowledge
                  </span>
                </div>

                <div className="kb-latest-list">
                  {latestArticles
                    .slice(0, 5)
                    .map((article) => (
                      <Link
                        key={article.slug}
                        href={articleHref(
                          article.slug,
                        )}
                        className="kb-latest-item"
                      >
                        <div className="kb-latest-item-category">
                          {article.category}
                        </div>

                        <h3 className="kb-latest-item-title">
                          {article.title}
                        </h3>

                        <div className="kb-latest-item-meta">
                          <Clock3
                            size={11}
                            aria-hidden="true"
                          />
                          {article.readingTime}
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            LATEST KNOWLEDGE
        ================================================================ */}

        <section
          id="latest-knowledge"
          className="kb-content-section"
        >
          <div className="kb-container">
            <SectionHeading
              title="Latest Knowledge"
              description="Fresh ideas, explanations, discoveries, and developments from across technology."
            />

            <div className="kb-article-grid">
              {latestArticles
                .slice(0, 6)
                .map((article) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                  />
                ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            TOPICS / CATEGORY SECTIONS
        ================================================================ */}

        <div id="topics">
          {categories.map((category) => {
            const categoryArticles =
              getArticlesByCategory(category)

            if (categoryArticles.length === 0) {
              return null
            }

            return (
              <section
                key={category}
                className="kb-category-section"
              >
                <div className="kb-container">
                  <div className="kb-category-heading">
                    <div>
                      <p className="kb-category-kicker">
                        Explore
                      </p>

                      <h2 className="kb-category-title">
                        {category}
                      </h2>
                    </div>

                    <Link
                      href={categoryHref(category)}
                      className="kb-view-all"
                    >
                      View all
                      <ArrowRight
                        size={13}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  <div className="kb-article-grid">
                    {categoryArticles.map(
                      (article) => (
                        <ArticleCard
                          key={article.slug}
                          article={article}
                        />
                      ),
                    )}
                  </div>
                </div>
              </section>
            )
          })}
        </div>

        {/* ================================================================
            COMMUNITY
        ================================================================ */}

        <section className="kb-community-section">
          <div className="kb-container">
            <div className="kb-community-card">
              <div className="kb-community-content">
                <p className="kb-community-kicker">
                  Coming later
                </p>

                <h2 className="kb-community-title">
                  Knowledge shouldn't
                  be one-way.
                </h2>

                <p className="kb-community-description">
                  KnowledgeBoost will eventually
                  allow readers to contribute
                  articles, start discussions,
                  share ideas, and participate
                  in a moderated technology
                  community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================================
          FOOTER
      ================================================================== */}

      <footer className="kb-footer">
        <div className="kb-container kb-footer-inner">
          <div>
            <p className="kb-footer-name">
              KnowledgeBoost
            </p>

            <p className="kb-footer-tagline">
              Technology worth knowing.
            </p>
          </div>

          <div className="kb-footer-links">
            <Link
              href="/"
              className="kb-footer-link"
            >
              ProjectAssignments
            </Link>

            <span
              className="kb-footer-separator"
              aria-hidden="true"
            >
              •
            </span>

            <span className="kb-footer-current">
              KnowledgeBoost
            </span>
          </div>
        </div>
      </footer>

      {/* ==================================================================
          STRUCTURED DATA
      ================================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            knowledgeBoostSchema,
          ),
        }}
      />
    </>
  )
}

/* ==========================================================================
   SECTION HEADING
========================================================================== */

function SectionHeading({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="kb-section-heading">
      <p className="kb-section-kicker">
        KnowledgeBoost
      </p>

      <h2 className="kb-section-title">
        {title}
      </h2>

      <p className="kb-section-description">
        {description}
      </p>
    </div>
  )
}

/* ==========================================================================
   ARTICLE CARD
========================================================================== */

function ArticleCard({
  article,
}: {
  article: Article
}) {
  return (
    <Link
      href={articleHref(article.slug)}
      className="kb-article-card"
    >
      <div className="kb-article-image-wrap">
        <Image
          src={article.cover}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
          className="kb-article-image"
        />
      </div>

      <div className="kb-article-body">
        <div className="kb-article-meta-top">
          <span className="kb-article-category">
            {article.category}
          </span>

          <span className="kb-article-type">
            {article.type}
          </span>
        </div>

        <h3 className="kb-article-title">
          {article.title}
        </h3>

        <p className="kb-article-excerpt">
          {article.excerpt}
        </p>

        <div className="kb-article-bottom">
          <span>
            {formatDate(article.date)}
          </span>

          <span aria-hidden="true">
            •
          </span>

          <span>
            {article.readingTime}
          </span>
        </div>
      </div>
    </Link>
  )
}