import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function KnowledgeBoostFooter() {
  return (
    <footer className="kb-footer">
      <div className="kb-footer-container">

        {/* =====================================================
            MAIN FOOTER
           ===================================================== */}

        <div className="kb-footer-main">

          {/* BRAND */}
          <div className="kb-footer-brand">
            <Link
              href="/knowledgeboost"
              className="kb-footer-logo-link"
              aria-label="KnowledgeBoost home"
            >
              <Image
                src="/images/kb-logo.png"
                alt="KnowledgeBoost"
                width={220}
                height={103}
                className="kb-footer-logo"
              />
            </Link>

            <p className="kb-footer-tagline">
              Technology worth knowing.
            </p>

            <p className="kb-footer-description">
              Exploring technology, ideas, and discoveries
              that are worth knowing.
            </p>
          </div>

          {/* EXPLORE */}
          <div className="kb-footer-column">
            <p className="kb-footer-heading">
              Explore
            </p>

            <Link
              href="/knowledgeboost"
              className="kb-footer-link"
            >
              KnowledgeBoost
              <ArrowUpRight
                size={14}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* PROJECTASSIGNMENTS */}
          <div className="kb-footer-column">
            <p className="kb-footer-heading">
              Our Network
            </p>

            <Link
              href="/"
              className="kb-footer-link"
            >
              ProjectAssignments
              <ExternalLink
                size={13}
                aria-hidden="true"
              />
            </Link>

            <p className="kb-footer-column-note">
              Academic projects &amp; assignments
            </p>
          </div>

        </div>

        {/* =====================================================
            FOOTER BOTTOM
           ===================================================== */}

        <div className="kb-footer-bottom">

          <p className="kb-footer-copyright">
            © {new Date().getFullYear()} KnowledgeBoost.
            All rights reserved.
          </p>

          <p className="kb-footer-bottom-brand">
            TECHNOLOGY&nbsp; • &nbsp;IDEAS&nbsp; • &nbsp;DISCOVERY
          </p>

        </div>

      </div>
    </footer>
  )
}