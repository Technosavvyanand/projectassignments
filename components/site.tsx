'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  FileCode2,
  FileText,
  Menu,
  Network,
  Quote,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  X
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const logoUrl = '/projectassignments-logo.png'
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" aria-label="ProjectAssignments home" className={`brand-logo ${compact ? 'brand-logo-compact' : ''}`}>
      <img src={logoUrl} alt="ProjectAssignments" />
    </Link>
  )
}

const navItems = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Technologies', '/technologies'],
  ['Resources', '/resources'],
  ['Policies', '/policies'],
]
export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/contact" className="button button-primary nav-cta">Start a conversation <ArrowRight size={16} /></Link>
        <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link href="/contact" className="button button-primary" onClick={() => setOpen(false)}>Start a conversation <ArrowRight size={16} /></Link>
        </motion.nav>}
      </AnimatePresence>
    </header>
  )
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><Logo compact /><p className="footer-copy">Technical academic guidance for complex research, assignments, and postgraduate work.</p></div>
      <div><p className="footer-label">Explore</p>{navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div><p className="footer-label">Get in touch</p><a href="mailto:hello@projectassignments.com">hello@projectassignments.com</a><a href="/contact">Tell us about your project <ArrowRight size={14} /></a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} ProjectAssignments. All rights reserved.</span><span>Built for thoughtful work.</span></div>
  </footer>
}

export function SectionHeading({ eyebrow, title, body, align = 'left' }: { eyebrow: string; title: string; body?: string; align?: 'left' | 'center' }) {
  return <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{body && <p className="section-lead">{body}</p>}</div>
}

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-subtitle">{body}</p></div></section>
}

const services = [
  { icon: <ShieldCheck />, title: 'Cybersecurity assignments', text: 'Build confident understanding of threats, controls, governance, and secure system design with ethical academic guidance.' },
  { icon: <TerminalSquare />, title: 'IT & programming assignments', text: 'Work through code, systems, databases, networking, and technical concepts with structured, practical support.' },
  { icon: <FileCode2 />, title: 'Technical artefacts', text: 'Shape diagrams, prototypes, system documentation, research instruments, and other artefacts that make your work credible.' },
  { icon: <FileText />, title: 'MBA & DBA research support', text: 'Strengthen dissertation arguments, methodology, literature reviews, and thesis direction without compromising academic integrity.' },
]

export function ServicesGrid() {
  return <div className="card-grid four-up">{services.map((service, i) => <motion.article whileHover={{ y: -5 }} transition={{ duration: .2 }} className="service-card" key={service.title}><div className="icon-box">{service.icon}</div><span className="card-index">0{i + 1}</span><h3>{service.title}</h3><p>{service.text}</p><Link href="/services" className="text-link">Explore service <ArrowRight size={15} /></Link></motion.article>)}</div>
}

const technologies = ['Cybersecurity & risk', 'Python & programming', 'Databases & SQL', 'Networking & infrastructure', 'Systems analysis', 'Research methodology', 'Data analysis', 'Technical writing']
export function TechnologyGrid() {
  return <div className="tech-grid">{technologies.map((item, i) => <div key={item} className="tech-item"><span className="tech-number">{String(i + 1).padStart(2, '0')}</span><span>{item}</span><ArrowRight size={15} /></div>)}</div>
}

export function ResearchVisual() {
  const nodes = [
    { className: 'research-node research-node-core', icon: <Network size={24} />, label: 'Research' },
    { className: 'research-node research-node-cyber', icon: <ShieldCheck size={19} />, label: 'Cybersecurity' },
    { className: 'research-node research-node-code', icon: <Code2 size={19} />, label: 'Programming' },
    { className: 'research-node research-node-thesis', icon: <FileText size={19} />, label: 'Thesis' },
    { className: 'research-node research-node-artefact', icon: <FileCode2 size={19} />, label: 'Artefacts' },
  ]
  return <div className="research-visual" aria-label="Interconnected research workflow showing cybersecurity, programming, thesis, and technical artefacts"><div className="research-grid-lines" />{nodes.map((node) => <motion.div key={node.label} className={node.className} animate={{ y: [0, -7, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: node.label.length * .12, ease: 'easeInOut' }}>{node.icon}<span>{node.label}</span></motion.div>)}<div className="research-line research-line-one" /><div className="research-line research-line-two" /><div className="research-line research-line-three" /><div className="research-line research-line-four" /><span className="research-caption">TECHNICAL ACADEMIC SUPPORT // 01</span></div>
}

export function CTA({ compact = false }: { compact?: boolean }) {
  return <section className={`cta-section ${compact ? 'cta-compact' : ''}`}><div className="container cta-inner"><div><p className="eyebrow">Let&apos;s make your work clearer</p><h2>Bring us the difficult part.</h2><p>Tell us what you&apos;re researching, building, or trying to understand. We&apos;ll help you find the clearest ethical next move.</p></div><Link href="/contact" className="button button-light">Start a conversation <ArrowRight size={17} /></Link></div></section>
}

const faqs = [
  ['What kind of academic work do you support?', 'We support cybersecurity, IT, programming, technical artefact, MBA dissertation, and DBA thesis work with a focus on understanding, structure, and academic integrity.'],
  ['Do you complete assignments or theses for students?', 'No. We provide ethical guidance, tutoring, research support, technical feedback, and review. Your ideas, analysis, and final submission remain your own.'],
  ['Can we start with a focused session?', 'Absolutely. A technical walkthrough, research planning session, methodology review, or artefact critique is often the best place to begin.'],
  ['How do we get started?', 'Send a few details through the contact form. We will come back with a clear response and the most useful next step.'],
]

export function FAQ() {
  const [active, setActive] = useState<number | null>(0)
  return <div className="faq-list">{faqs.map(([question, answer], i) => <div className="faq-item" key={question}><button onClick={() => setActive(active === i ? null : i)} aria-expanded={active === i}><span>{question}</span><ChevronDown size={19} className={active === i ? 'rotate-180' : ''} /></button><AnimatePresence initial={false}>{active === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{answer}</p></motion.div>}</AnimatePresence></div>)}</div>
}

export function Testimonials() {
  return <div className="testimonial-grid"><blockquote><Quote size={24} /><p>“ProjectAssignments helped me understand the security concepts behind my assignment and explain them with confidence.”</p><footer><strong>Postgraduate learner</strong><span>Cybersecurity programme</span></footer></blockquote><blockquote><Quote size={24} /><p>“The research guidance gave my DBA thesis a clearer argument, stronger structure, and a much more credible direction.”</p><footer><strong>Doctoral researcher</strong><span>Business administration</span></footer></blockquote></div>
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  if (submitted) return <div className="success-panel"><div className="icon-box"><Check /></div><h2>Thanks — we&apos;ve got it.</h2><p>Your note is ready for review. We&apos;ll be in touch with a thoughtful next step.</p><button className="button button-secondary" onClick={() => setSubmitted(false)}>Send another message</button></div>
  return <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label></div><label>What are you working on?<select name="project"><option>Cybersecurity assignment</option><option>IT or programming assignment</option><option>Technical artefact</option><option>MBA dissertation support</option><option>DBA thesis guidance</option><option>Something else</option></select></label><label>Tell us a little more<textarea required name="message" rows={6} placeholder="A few lines about the brief, research question, technical challenge, or desired outcome." /></label><button type="submit" className="button button-primary">Send your note <ArrowRight size={16} /></button></form>
}

const valueCards = [
  { icon: <ShieldCheck />, title: 'Academic integrity', text: 'We support your learning and authorship with ethical guidance, transparent boundaries, and no shortcuts that compromise your work.' },
  { icon: <Network />, title: 'Technical depth', text: 'We connect concepts, systems, methods, and evidence so difficult technical work becomes understandable and defensible.' },
  { icon: <Sparkles />, title: 'Research clarity', text: 'Every session should leave you with a stronger question, clearer structure, or more confident next step.' },
]

export function ValuesGrid() {
  return <div className="value-grid">{valueCards.map((value) => <article className="value-card" key={value.title}><div className="value-icon">{value.icon}</div><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
}
