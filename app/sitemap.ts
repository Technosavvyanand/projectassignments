import fs from 'fs'
import type { MetadataRoute } from 'next'
import path from 'path'

const BASE_URL = 'https://projectassignments.com'
const APP_DIR = path.join(process.cwd(), 'app')

function getPageFiles(directory: string): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true })

  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...getPageFiles(fullPath))
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      files.push(fullPath)
    }
  }

  return files
}

function filePathToUrl(filePath: string): string | null {
  const relativePath = path.relative(APP_DIR, path.dirname(filePath))

  // app/page.tsx = homepage
  if (relativePath === '') {
    return BASE_URL
  }

  const segments = relativePath
    .split(path.sep)
    .filter(Boolean)

  // Ignore dynamic routes such as [slug] or [...slug]
  if (segments.some((segment) => segment.startsWith('['))) {
    return null
  }

  // Ignore route groups such as (marketing)
  const urlSegments = segments.filter(
    (segment) => !(segment.startsWith('(') && segment.endsWith(')'))
  )

  if (urlSegments.length === 0) {
    return BASE_URL
  }

  return `${BASE_URL}/${urlSegments.join('/')}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pageFiles = getPageFiles(APP_DIR)

  return pageFiles
    .map((filePath) => {
      const url = filePathToUrl(filePath)

      if (!url) {
        return null
      }

      const stats = fs.statSync(filePath)

      return {
        url,
        lastModified: stats.mtime,
      }
    })
    .filter(
      (entry): entry is {
        url: string
        lastModified: Date
      } => entry !== null
    )
    .sort((a, b) => a.url.localeCompare(b.url))
}