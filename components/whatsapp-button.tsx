'use client'

import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/config'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={25} strokeWidth={2.2} aria-hidden="true" />
      <span className="whatsapp-tooltip" role="tooltip">Chat with us on WhatsApp</span>
    </a>
  )
}
