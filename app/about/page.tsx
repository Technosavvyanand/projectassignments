import { CTA, Footer, Navbar, PageHero, SectionHeading, ValuesGrid } from '@/components/site'

export const metadata = { title: 'About', description: 'Learn how ProjectAssignments approaches complex work.' }

export default function AboutPage() { return <><Navbar /><main><PageHero eyebrow="About us" title="Technical clarity for serious academic work." body="ProjectAssignments is a premium academic and research consultancy for cybersecurity, IT, programming, and postgraduate study." /><section className="page-content"><div className="container"><div className="two-column"><SectionHeading eyebrow="Our point of view" title="Rigour gets stronger when the path is visible." body="We help learners and researchers understand difficult material, develop stronger arguments, and create credible technical work. Our guidance is ethical, collaborative, and designed to keep your authorship at the centre." /><ValuesGrid /></div></div></section><CTA /></main><Footer /></> }
