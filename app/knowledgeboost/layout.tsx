import type { ReactNode } from 'react'
import './knowledgeboost.css'

export default function KnowledgeBoostLayout({
  children,
}: {
  children: ReactNode
}) {
  return <div className="kb-page">{children}</div>
}