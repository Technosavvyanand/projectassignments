import type { ReactNode } from 'react'

import { KnowledgeBoostFooter } from '@/components/knowledgeboost/footer'
import { KnowledgeBoostHeader } from '@/components/knowledgeboost/header'

import './knowledgeboost.css'

export default function KnowledgeBoostLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="kb-page">
      <KnowledgeBoostHeader />

      {children}

      <KnowledgeBoostFooter />
    </div>
  )
}