import Link from 'next/link'

export function KnowledgeBoostFooter() {
  return (
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

          <Link
            href="/knowledgeboost"
            className="kb-footer-link"
          >
            KnowledgeBoost
          </Link>
        </div>
      </div>
    </footer>
  )
}