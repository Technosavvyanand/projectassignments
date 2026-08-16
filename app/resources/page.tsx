import { CTA, Footer, PageHero, SectionHeading } from '@/components/site'
import { ArrowRight, BarChart3, FileText, Globe2, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Resources | Technical Research & Academic Guidance',
  description:
    'Explore practical resources on data mining, cybersecurity, programming, research methods, technical writing, and postgraduate study.',
}

const resources = [
  {
    icon: <BarChart3 />,
    title: 'Understanding the Data Mining Process: CRISP-DM Explained',
    text: 'A practical guide to the CRISP-DM framework, covering business understanding, data understanding, data preparation, modeling, evaluation, and deployment.',
    href: '/resources/data-mining-tools',
    linkText: 'Read the article',
  },
  {
    icon: <FileText />,
    title: 'The One-Page Project Brief',
    text: 'A simple structure for getting a team aligned before technical or research work begins.',
    href: '/contact',
    linkText: 'Talk it through',
  },
  {
    icon: <Globe2 />,
    title: 'Choosing Tools with Intention',
    text: 'A practical lens for making technology decisions that are appropriate, explainable, and useful for the project at hand.',
    href: '/contact',
    linkText: 'Talk it through',
  },
  {
    icon: <MessageCircle />,
    title: 'Better Questions, Better Work',
    text: 'How clearer requirements and sharper technical conversations can save weeks of unfocused effort.',
    href: '/contact',
    linkText: 'Talk it through',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Resources"
          title="Useful thinking for technical research."
          body="Practical notes for navigating data mining, cybersecurity, programming, research methods, technical writing, and postgraduate study with confidence."
        />

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="From the research desk"
              title="Ideas worth taking into your next project."
            />

            <div className="service-detail-grid">
              {resources.map((resource) => (
                <article className="service-detail" key={resource.title}>
                  <div className="icon-box">{resource.icon}</div>

                  <h3>{resource.title}</h3>

                  <p>{resource.text}</p>

                  <Link href={resource.href} className="text-link">
                    {resource.linkText}
                    <ArrowRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  )
}