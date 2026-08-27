'use client'

import {
    ChevronDown,
    ExternalLink,
    Grid2X2,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

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

function categoryHref(category: string) {
  return `/knowledgeboost/category/${slugify(category)}`
}

export function KnowledgeBoostHeader() {
  const [categoriesOpen, setCategoriesOpen] =
    useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  /*
   * Close the category menu when the user clicks
   * anywhere outside it.
   */
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target as Node
        )
      ) {
        setCategoriesOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleOutsideClick
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      )
    }
  }, [])

  /*
   * Close the menu with Escape.
   */
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setCategoriesOpen(false)
      }
    }

    document.addEventListener(
      'keydown',
      handleEscape
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handleEscape
      )
    }
  }, [])

  return (
    <header className="kb-header">
      <div className="kb-header-inner">
        {/* =====================================================
            LOGO — LEFT SIDE
           ===================================================== */}

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

        {/* =====================================================
            RIGHT-SIDE HEADER ACTIONS
           ===================================================== */}

        <div className="kb-header-actions">
          {/* =================================================
              CATEGORIES
             ================================================= */}

          <div
            className="kb-categories-wrapper"
            ref={menuRef}
          >
            <button
              type="button"
              className={`kb-categories-button ${
                categoriesOpen
                  ? 'kb-categories-button-open'
                  : ''
              }`}
              aria-expanded={categoriesOpen}
              aria-haspopup="true"
              onClick={() =>
                setCategoriesOpen(
                  !categoriesOpen
                )
              }
            >
              <Grid2X2
                size={17}
                aria-hidden="true"
              />

              <span>Categories</span>

              <ChevronDown
                size={16}
                aria-hidden="true"
                className={
                  categoriesOpen
                    ? 'kb-chevron-open'
                    : ''
                }
              />
            </button>

            {/* =================================================
                CATEGORY DROPDOWN
               ================================================= */}

            {categoriesOpen && (
              <div
                className="kb-category-dropdown"
                role="menu"
              >
                <div className="kb-category-dropdown-grid">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={categoryHref(category)}
                      className="kb-category-dropdown-link"
                      role="menuitem"
                      onClick={() =>
                        setCategoriesOpen(false)
                      }
                    >
                      <span>
                        {category}
                      </span>

                      <span
                        className="kb-category-arrow"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              PROJECTASSIGNMENTS
             ================================================= */}

          <Link
            href="/"
            className="kb-project-link"
          >
            <span>
              ProjectAssignments
            </span>

            <ExternalLink
              size={13}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}