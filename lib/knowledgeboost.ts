import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

/**
 * Location of KnowledgeBoost MDX articles.
 *
 * content/
 * └── knowledgeboost/
 *     ├── article-one.mdx
 *     ├── article-two.mdx
 *     └── ...
 */
const knowledgeBoostDirectory = path.join(
  process.cwd(),
  'content',
  'knowledgeboost',
)

/**
 * Metadata structure shared by every KnowledgeBoost article.
 *
 * This structure is intentionally designed so that the future
 * KnowledgeBoost CRM/database can provide the same data without
 * requiring the frontend to be redesigned.
 */
export interface KnowledgeBoostArticle {
  title: string
  slug: string
  excerpt: string
  date: string
  author: string
  categories: string[]
  type: string
  featured: boolean
  cover: string
  readingTime: string

  /**
   * Internal business/editorial metadata.
   * These fields do not have to be displayed publicly.
   */
  projectAssignmentsRelevance?: string
  commercialIntent?: string

  /**
   * Optional SEO metadata.
   */
  seoTitle?: string
  seoDescription?: string
  keywords?: string[]

  /**
   * Raw MDX content.
   *
   * This is kept separate from the metadata so the same article
   * object can later be supplied by a CMS/API.
   */
  content: string
}

/**
 * Return all .mdx files inside content/knowledgeboost.
 */
function getArticleFiles(): string[] {
  if (!fs.existsSync(knowledgeBoostDirectory)) {
    return []
  }

  return fs
    .readdirSync(knowledgeBoostDirectory)
    .filter((file) => file.toLowerCase().endsWith('.mdx'))
}

/**
 * Read and parse one MDX article.
 */
function readArticle(fileName: string): KnowledgeBoostArticle {
  const filePath = path.join(
    knowledgeBoostDirectory,
    fileName,
  )

  const fileContents = fs.readFileSync(
    filePath,
    'utf8',
  )

  const { data, content } = matter(fileContents)

  return {
    title: String(data.title ?? ''),
    slug: String(
      data.slug ??
        fileName.replace(/\.mdx$/i, ''),
    ),
    excerpt: String(data.excerpt ?? ''),
    date: String(data.date ?? ''),
    author: String(
      data.author ?? 'KnowledgeBoost Editorial',
    ),

    categories: Array.isArray(data.categories)
      ? data.categories.map(String)
      : [],

    type: String(data.type ?? 'Article'),

    featured: Boolean(data.featured ?? false),

    cover: String(data.cover ?? ''),

    readingTime: String(
      data.readingTime ?? '',
    ),

    projectAssignmentsRelevance:
      data.projectAssignmentsRelevance
        ? String(data.projectAssignmentsRelevance)
        : undefined,

    commercialIntent:
      data.commercialIntent
        ? String(data.commercialIntent)
        : undefined,

    seoTitle: data.seoTitle
      ? String(data.seoTitle)
      : undefined,

    seoDescription: data.seoDescription
      ? String(data.seoDescription)
      : undefined,

    keywords: Array.isArray(data.keywords)
      ? data.keywords.map(String)
      : undefined,

    content,
  }
}

/**
 * Get every KnowledgeBoost article.
 *
 * Articles are automatically sorted from newest to oldest.
 *
 * This means the homepage does NOT need to know which articles
 * exist. Adding a new .mdx file is enough for it to appear.
 */
export function getAllKnowledgeBoostArticles(): KnowledgeBoostArticle[] {
  const articles = getArticleFiles().map(
    readArticle,
  )

  return articles.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()

    return dateB - dateA
  })
}

/**
 * Get one KnowledgeBoost article by its slug.
 *
 * Example:
 *
 * getKnowledgeBoostArticle(
 *   'responsible-and-ethical-use-of-generative-ai-in-academics'
 * )
 */
export function getKnowledgeBoostArticle(
  slug: string,
): KnowledgeBoostArticle | undefined {
  const articles =
    getAllKnowledgeBoostArticles()

  return articles.find(
    (article) => article.slug === slug,
  )
}

/**
 * Get only featured KnowledgeBoost articles.
 *
 * Featured articles are controlled through:
 *
 * featured: true
 *
 * in the MDX frontmatter.
 */
export function getFeaturedKnowledgeBoostArticles(): KnowledgeBoostArticle[] {
  return getAllKnowledgeBoostArticles().filter(
    (article) => article.featured,
  )
}

/**
 * Get articles belonging to a particular category.
 *
 * An article can belong to multiple categories.
 *
 * Example:
 *
 * getKnowledgeBoostArticlesByCategory(
 *   'AI & Machine Learning'
 * )
 */
export function getKnowledgeBoostArticlesByCategory(
  category: string,
): KnowledgeBoostArticle[] {
  const normalizedCategory =
    category.trim().toLowerCase()

  return getAllKnowledgeBoostArticles().filter(
    (article) =>
      article.categories.some(
        (articleCategory) =>
          articleCategory.trim().toLowerCase() ===
          normalizedCategory,
      ),
  )
}

/**
 * Get all categories currently used by KnowledgeBoost articles.
 *
 * This allows the site to generate category sections
 * automatically as the publication grows.
 */
export function getKnowledgeBoostCategories(): string[] {
  const categories = new Set<string>()

  for (const article of getAllKnowledgeBoostArticles()) {
    for (const category of article.categories) {
      categories.add(category)
    }
  }

  return Array.from(categories).sort(
    (a, b) => a.localeCompare(b),
  )
}