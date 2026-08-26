'use client'

import { useEffect, useState } from 'react'

export function HeroVisual() {
  const [reducedMotion, setReducedMotion] =
    useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    const update = () =>
      setReducedMotion(mediaQuery.matches)

    update()

    mediaQuery.addEventListener(
      'change',
      update,
    )

    return () =>
      mediaQuery.removeEventListener(
        'change',
        update,
      )
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`kb-hero-visual ${
        reducedMotion
          ? 'kb-reduced-motion'
          : ''
      }`}
    >
      <div className="kb-hero-glow" />

      {/* Orbital rings */}

      <div className="kb-orbit kb-orbit-1">
        <span className="kb-orbit-dot kb-dot-1" />
      </div>

      <div className="kb-orbit kb-orbit-2">
        <span className="kb-orbit-dot kb-dot-2" />
      </div>

      <div className="kb-orbit kb-orbit-3">
        <span className="kb-orbit-dot kb-dot-3" />
      </div>

      <div className="kb-orbit kb-orbit-4">
        <span className="kb-orbit-dot kb-dot-4" />
      </div>

      {/* Rockets */}

      <div className="kb-rocket-orbit kb-rocket-orbit-1">
        <Rocket />
      </div>

      <div className="kb-rocket-orbit kb-rocket-orbit-2">
        <Rocket />
      </div>

      <div className="kb-rocket-orbit kb-rocket-orbit-3">
        <Rocket />
      </div>

      {/* Floating particles */}

      <span className="kb-particle kb-particle-1" />
      <span className="kb-particle kb-particle-2" />
      <span className="kb-particle kb-particle-3" />
      <span className="kb-particle kb-particle-4" />
      <span className="kb-particle kb-particle-5" />

      {/* Laptop */}

      <div className="kb-laptop">
        <div className="kb-laptop-screen">
          <div className="kb-screen-glow" />

          <div className="kb-screen-content">
            <div className="kb-screen-line kb-line-1" />
            <div className="kb-screen-line kb-line-2" />
            <div className="kb-screen-line kb-line-3" />

            <div className="kb-screen-symbol">
              KB
            </div>
          </div>
        </div>

        <div className="kb-laptop-base">
          <div className="kb-keyboard">
            {Array.from({ length: 36 }).map(
              (_, index) => (
                <span key={index} />
              ),
            )}
          </div>

          <div className="kb-trackpad" />
        </div>
      </div>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Backward-compatible export
|--------------------------------------------------------------------------
|
| If any other KnowledgeBoost component is already
| importing KnowledgeBoostHeroVisual, it will continue
| to work without changes.
|
*/

export const KnowledgeBoostHeroVisual =
  HeroVisual

function Rocket() {
  return (
    <svg
      className="kb-rocket"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.8 8.8C36.1 9.5 27.9 14.3 22.3 21.1L18 26.4L27.6 36L32.9 31.7C39.7 26.1 44.5 17.9 45.2 9.2C45.2 8.8 45.1 8.7 44.8 8.8Z"
        stroke="#dcecff"
        strokeWidth="2"
      />

      <circle
        cx="35.7"
        cy="18.3"
        r="3.2"
        stroke="#f59e0b"
        strokeWidth="2"
      />

      <path
        d="M22.3 21.1L14.5 21.9L9.2 27.2L18 26.4"
        stroke="#77b9ff"
        strokeWidth="2"
      />

      <path
        d="M42.9 30.2L42.1 38L36.8 43.3L37.6 34.5"
        stroke="#77b9ff"
        strokeWidth="2"
      />

      <path
        d="M19.4 33.8C15.2 36.1 12.1 39.2 10.4 43.8C15 42.1 18.1 39 20.4 34.8"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M27.7 38.2C25.4 42.4 24.6 46.7 25.7 51.4C29.4 47.9 31.2 44.1 31.4 39.4"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}