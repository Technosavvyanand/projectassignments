import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CTA, FAQ, Footer, Navbar, ResearchVisual, SectionHeading, ServicesGrid, TechnologyGrid, Testimonials, ValuesGrid } from '@/components/site'

export default function Page() {
  return <>
    <Navbar />
    <main>
      <section className="hero-section"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow">Technical academic & research consultancy</p><h1>Make complex work <em>credible.</em></h1><p className="hero-subtitle">ProjectAssignments helps students, researchers, and professionals move from difficult technical questions to clear, rigorous, and submission-ready work.</p><div className="hero-actions"><Link href="/contact" className="button button-primary">Start a conversation <ArrowRight size={17} /></Link><Link href="#services" className="button button-ghost">Explore our expertise <ArrowRight size={17} /></Link></div><div className="hero-proof"><span><CheckCircle2 size={16} /> Ethical guidance</span><span><CheckCircle2 size={16} /> Technical depth</span><span><CheckCircle2 size={16} /> Research clarity</span></div></div><div className="hero-visual"><ResearchVisual /></div></div></section>
      <section className="trust-strip"><div className="container trust-inner"><p>For technical work that deserves clarity, rigour, and academic integrity.</p><div><span>Cybersecurity</span><span>Programming</span><span>Research</span><span>Postgraduate study</span></div></div></section>
      <section id="services" className="section"><div className="container"><SectionHeading eyebrow="What we specialise in" title="Technical expertise for work that has to stand up." body="Bring us the brief, the research question, or the technical roadblock. We create structure, understanding, and useful artefacts while keeping your authorship at the centre." /><ServicesGrid /></div></section>
      <section className="section section-tint"><div className="container two-column"><div><SectionHeading eyebrow="The technical toolkit" title="Technology should make understanding easier." body="We use the right methods and technical lenses for the real brief — not the trend of the moment." /><Link href="/technologies" className="text-link">Explore our technology approach <ArrowRight size={15} /></Link></div><TechnologyGrid /></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Why ProjectAssignments" title="Technically fluent. Academically responsible. Clear about what comes next." /><ValuesGrid /></div></section>
      <section className="process-section"><div className="container"><SectionHeading eyebrow="A simple process" title="Rigour, without the overwhelm." align="center" /><div className="process-grid"><article><span>01</span><h3>Frame the brief</h3><p>We clarify the assignment, research question, technical scope, and the standard your work needs to meet.</p></article><article><span>02</span><h3>Work through it</h3><p>We unpack the concepts, methods, evidence, and structure through focused, collaborative guidance.</p></article><article><span>03</span><h3>Strengthen the outcome</h3><p>You leave with clearer thinking, stronger artefacts, and confidence in your own final work.</p></article></div></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="From people we support" title="Technical work feels lighter when it is understood." /><Testimonials /></div></section>
      <section className="section section-tint"><div className="container faq-layout"><SectionHeading eyebrow="Questions, answered" title="A little more clarity." body="Still deciding if we are the right fit? Here are a few useful starting points." /><FAQ /></div></section>
      <CTA />
    </main>
    <Footer />
  </>
}
