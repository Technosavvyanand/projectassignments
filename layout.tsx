import { Navbar } from '@/components/site'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, IBM_Plex_Mono, Manrope } from 'next/font/google'
import './globals.css'

const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const displayFont = Manrope({ subsets: ['latin'], variable: '--font-display' })
const monoFont = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-mono-family' })

export const metadata: Metadata = {
  title: { default: 'ProjectAssignments | Technical academic & research consultancy', template: '%s | ProjectAssignments' },
  description: 'Cybersecurity, IT and programming assignments, technical artefacts, MBA dissertation support, and DBA thesis guidance.',
  generator: 'ProjectAssignments',
  openGraph: { title: 'ProjectAssignments | Technical academic & research consultancy', description: 'Ethical, expert guidance for technical assignments and postgraduate research.', type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f9fc', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} antialiased`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}