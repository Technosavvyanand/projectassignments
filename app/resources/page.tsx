import { CTA, Footer, PageHero, SectionHeading } from '@/components/site'
import {
    ArrowRight,
    BookOpen,
    BrainCircuit,
    Code2,
    FileCheck2,
    FileText,
    FlaskConical,
    GraduationCap,
    Lightbulb,
    MessageCircle,
    Search,
    ShieldCheck
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title:
    'Academic & Technical Resources | Referencing, Plagiarism, AI & Research',
  description:
    'Explore practical academic and technical resources covering referencing styles, plagiarism and similarity checks, Turnitin, generative AI, research methodology, technical assignments, academic writing and postgraduate projects.',
  keywords: [
    'academic resources',
    'assignment resources',
    'technical assignment resources',
    'referencing styles',
    'Harvard referencing',
    'APA 7 referencing',
    'IEEE referencing',
    'plagiarism check',
    'similarity check',
    'Turnitin check',
    'Turnitin similarity',
    'generative AI assignments',
    'ChatGPT assignments',
    'AI academic integrity',
    'research methodology',
    'academic writing',
    'dissertation resources',
    'research project resources',
    'programming assignment help',
    'academic integrity',
  ],
}

const featuredResources = [
  {
    icon: <FileText size={25} />,
    eyebrow: 'Academic Writing',
    title: 'Referencing Styles',
    text: 'A detailed guide to Harvard, APA 7, IEEE, MLA, Chicago, Vancouver, OSCOLA, AMA and other major referencing systems used across technical, business, medical, legal and academic disciplines.',
    href: '/resources/referencing-styles',
    linkText: 'Explore referencing styles',
  },
  {
    icon: <FileCheck2 size={25} />,
    eyebrow: 'Academic Integrity',
    title: 'Plagiarism & Similarity Check',
    text: 'Understand plagiarism, similarity reports, Turnitin checks, legitimate matching text, citation problems and responsible ways to improve originality without trying to manipulate a checker.',
    href: '/resources/plagiarism-check',
    linkText: 'Explore plagiarism guide',
  },
  {
    icon: <BrainCircuit size={25} />,
    eyebrow: 'Generative AI',
    title: 'Generative AI in Assignments',
    text: 'Learn how ChatGPT and other generative AI tools can support brainstorming, research, coding and study while understanding academic-integrity rules, AI detection, accuracy and responsible use.',
    href: '/resources/generative-ai',
    linkText: 'Explore AI guide',
  },
]

const resourceAreas = [
  {
    icon: <Search size={22} />,
    title: 'Research & Methodology',
    text: 'Understand research questions, methodologies, literature reviews, data collection, analysis and the structure of academic research projects.',
    href: '/services/research-methodology',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Technical Assignments',
    text: 'Resources for programming, databases, systems analysis, cybersecurity, software development and other technology-focused academic work.',
    href: '/assignment-project-help/programming-assignment-help',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Academic Writing',
    text: 'Build clearer arguments, organise evidence, improve academic structure and understand the difference between explanation, analysis and critical discussion.',
    href: '/assignment-project-help',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Research Projects',
    text: 'Practical guidance for research projects, technical reports, capstones, dissertations and other substantial academic submissions.',
    href: '/assignment-project-help/research-project-help',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Academic Integrity',
    text: 'Learn about originality, citation, attribution, responsible AI use, similarity reports and ethical approaches to academic work.',
    href: '/resources/plagiarism-check',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Study & Project Planning',
    text: 'Turn a broad assignment brief into a manageable plan with clear deliverables, research tasks, milestones and review points.',
    href: '/assignment-project-help',
  },
]

const integrityPoints = [
  {
    icon: <FileCheck2 size={20} />,
    title: 'Similarity is not automatically plagiarism',
    text: 'A similarity report identifies matching text. Students still need to interpret why the match occurred and whether the material has been appropriately quoted, paraphrased and cited.',
  },
  {
    icon: <BrainCircuit size={20} />,
    title: 'AI use and plagiarism are different questions',
    text: 'Generative AI can create original-looking text without directly matching a source database. At the same time, AI use may still be restricted by an assessment policy.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Referencing is part of the research process',
    text: 'Good referencing is not simply formatting a bibliography at the end. It connects claims, evidence and sources throughout an academic argument.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Understand the rules before submitting',
    text: 'Institutional and course policies can differ. Students should check their own assessment instructions before using AI, external assistance or other digital tools.',
  },
]

const faq = [
  {
    question: 'What can I find on the ProjectAssignments Resources page?',
    answer:
      'The Resources hub brings together practical guides for academic and technical work. Current resources cover referencing styles, plagiarism and similarity checking, Turnitin, generative AI and responsible AI use. The hub also connects students with resources on research methodology, technical assignments, academic writing and research projects.',
  },
  {
    question: 'Where can I learn about Harvard, APA 7 or IEEE referencing?',
    answer:
      'The Referencing Styles guide covers major referencing systems used across different disciplines. It explains how styles differ, where they are commonly used and how students can approach books, journal articles, websites, reports and other source types.',
  },
  {
    question: 'Where can I learn about Turnitin and similarity reports?',
    answer:
      'The Plagiarism & Similarity Check resource explains the difference between similarity and plagiarism, how Turnitin reports should be interpreted, why legitimate quotations can create matches and how students can address inappropriate similarity through better writing and citation.',
  },
  {
    question: 'Does the Resources page explain how to use ChatGPT for assignments?',
    answer:
      'Yes. The Generative AI resource discusses appropriate and inappropriate uses of ChatGPT and similar tools, including brainstorming, concept explanation, research planning, coding support, verification, AI disclosure and academic-integrity precautions.',
  },
  {
    question: 'Can these resources replace my university guidelines?',
    answer:
      'No. These resources are designed as general academic guidance. Your university, college, lecturer or assessment brief may have specific requirements that take priority, particularly for AI use, referencing, collaboration and academic integrity.',
  },
  {
    question: 'Are the resources useful for technical assignments?',
    answer:
      'Yes. The resource hub is designed to support both general academic work and technical subjects. It connects to resources covering programming, research methodology, technical projects, databases, cybersecurity and other areas of academic and postgraduate technical work.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Resources"
          title="Practical academic and technical resources for better project work."
          body="Explore detailed guides covering referencing styles, plagiarism and similarity checks, Turnitin, generative AI, research methodology, academic writing, technical assignments and postgraduate projects."
        />

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Start here"
              title="Resources built around the questions students actually face."
            />

            <div className="service-detail-grid">
              {featuredResources.map((resource) => (
                <article
                  className="service-detail"
                  key={resource.title}
                >
                  <div className="icon-box">{resource.icon}</div>

                  <span
                    style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '12px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--primary, #0c6b66)',
                    }}
                  >
                    {resource.eyebrow}
                  </span>

                  <h3>{resource.title}</h3>

                  <p>{resource.text}</p>

                  <Link
                    href={resource.href}
                    className="text-link"
                  >
                    {resource.linkText}
                    <ArrowRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="page-content"
          style={{
            background: 'var(--surface, #f6f8f7)',
          }}
        >
          <div className="container">
            <SectionHeading
              eyebrow="Explore by topic"
              title="A wider knowledge base for assignments, research and projects."
              body="Not every academic problem is a writing problem. Strong submissions often require research planning, technical reasoning, source evaluation, data analysis, documentation and a clear understanding of the assessment requirements."
            />

            <div className="service-detail-grid">
              {resourceAreas.map((resource) => (
                <article
                  className="service-detail"
                  key={resource.title}
                >
                  <div className="icon-box">{resource.icon}</div>

                  <h3>{resource.title}</h3>

                  <p>{resource.text}</p>

                  <Link
                    href={resource.href}
                    className="text-link"
                  >
                    Explore this area
                    <ArrowRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Why these topics matter"
              title="Good academic work is more than producing a document."
              body="An assignment can be technically correct and still have weaknesses in research quality, source use, methodology, originality or argument. These resources are designed to help students understand those underlying issues."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '18px',
              }}
            >
              {[
                {
                  icon: <FlaskConical size={22} />,
                  title: 'Research before writing',
                  text: 'A strong submission begins with a clear question, appropriate sources and a suitable method rather than immediately writing paragraphs.',
                },
                {
                  icon: <FileText size={22} />,
                  title: 'Evidence before claims',
                  text: 'Academic writing becomes stronger when important statements are connected to appropriate evidence and correctly referenced sources.',
                },
                {
                  icon: <Code2 size={22} />,
                  title: 'Understand technical work',
                  text: 'For programming and technical assignments, students should understand the code, methodology, architecture and results they submit.',
                },
                {
                  icon: <MessageCircle size={22} />,
                  title: 'Ask better questions',
                  text: 'Whether working with a lecturer, supervisor, database, search engine or AI tool, better questions usually lead to more useful answers.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  style={{
                    padding: '24px',
                    border: '1px solid rgba(23, 33, 43, .1)',
                    borderRadius: '18px',
                    background: '#fff',
                  }}
                >
                  <div
                    className="icon-box"
                    style={{ marginBottom: '15px' }}
                  >
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="page-content"
          style={{
            background: '#fff8ee',
          }}
        >
          <div className="container">
            <SectionHeading
              eyebrow="Academic integrity"
              title="Three topics students should understand before submission."
              body="Referencing, similarity checking and generative AI are increasingly connected in academic work, but they are not interchangeable concepts."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '18px',
              }}
            >
              {integrityPoints.map((item) => (
                <article
                  key={item.title}
                  style={{
                    padding: '24px',
                    background: '#fff',
                    border: '1px solid rgba(23, 33, 43, .1)',
                    borderRadius: '18px',
                  }}
                >
                  <div
                    className="icon-box"
                    style={{ marginBottom: '15px' }}
                  >
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div
              style={{
                marginTop: '28px',
                padding: '22px 24px',
                borderLeft: '4px solid #d9822b',
                borderRadius: '12px',
                background: '#fff',
                borderTop: '1px solid rgba(23, 33, 43, .1)',
                borderRight: '1px solid rgba(23, 33, 43, .1)',
                borderBottom: '1px solid rgba(23, 33, 43, .1)',
              }}
            >
              <strong
                style={{
                  display: 'block',
                  marginBottom: '7px',
                  color: '#17212b',
                }}
              >
                A useful principle
              </strong>

              <p
                style={{
                  margin: 0,
                  color: '#4b5563',
                  lineHeight: 1.7,
                }}
              >
                The goal should not be to achieve an artificial “0%
                similarity” score or to find ways around academic checks.
                The stronger objective is authentic work supported by
                appropriate evidence, accurate attribution, responsible use of
                technology and an understanding of the material being
                submitted.
              </p>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="A practical workflow"
              title="How to use the ProjectAssignments resource hub."
              body="You do not need to read every guide. Start with the resource that addresses the immediate problem in your assignment, then follow related resources when they become relevant."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '18px',
              }}
            >
              {[
                {
                  number: '01',
                  title: 'Understand the task',
                  text: 'Start with the assignment question, learning outcomes, marking criteria and submission requirements.',
                },
                {
                  number: '02',
                  title: 'Find the right resource',
                  text: 'Use the hub to explore referencing, similarity, generative AI, research methodology or technical guidance relevant to the task.',
                },
                {
                  number: '03',
                  title: 'Apply the guidance',
                  text: 'Use the information to improve your research, planning, writing, coding, source use or project structure.',
                },
                {
                  number: '04',
                  title: 'Check before submission',
                  text: 'Review citations, evidence, formatting, similarity, AI-use requirements and the final assessment criteria.',
                },
              ].map((step) => (
                <article
                  key={step.number}
                  style={{
                    padding: '24px',
                    border: '1px solid rgba(23, 33, 43, .1)',
                    borderRadius: '18px',
                    background: '#fff',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'var(--primary, #0c6b66)',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '13px',
                      marginBottom: '16px',
                    }}
                  >
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="page-content"
          style={{
            background: 'var(--surface, #f6f8f7)',
          }}
        >
          <div className="container">
            <SectionHeading
              eyebrow="Featured guides"
              title="Three resources to bookmark."
              body="These are the core academic-integrity and study resources currently available in the ProjectAssignments Resource Hub."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              <Link
                href="/resources/referencing-styles"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <article
                  style={{
                    height: '100%',
                    padding: '28px',
                    background: '#fff',
                    border: '1px solid rgba(23, 33, 43, .1)',
                    borderRadius: '20px',
                  }}
                >
                  <div
                    className="icon-box"
                    style={{ marginBottom: '18px' }}
                  >
                    <FileText size={24} />
                  </div>

                  <h3>Referencing Styles</h3>

                  <p>
                    Compare major referencing systems and learn how to work
                    with academic books, journal articles, websites, reports,
                    legislation and other sources.
                  </p>

                  <span className="text-link">
                    Read the guide
                    <ArrowRight size={15} />
                  </span>
                </article>
              </Link>

              <Link
                href="/resources/plagiarism-check"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <article
                  style={{
                    height: '100%',
                    padding: '28px',
                    background: '#fff',
                    border: '1px solid rgba(23, 33, 43, .1)',
                    borderRadius: '20px',
                  }}
                >
                  <div
                    className="icon-box"
                    style={{ marginBottom: '18px' }}
                  >
                    <FileCheck2 size={24} />
                  </div>

                  <h3>Plagiarism & Similarity Check</h3>

                  <p>
                    Understand Turnitin, similarity reports, plagiarism,
                    quotations, citations and responsible ways to address
                    inappropriate matching text.
                  </p>

                  <span className="text-link">
                    Read the guide
                    <ArrowRight size={15} />
                  </span>
                </article>
              </Link>

              <Link
                href="/resources/generative-ai"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <article
                  style={{
                    height: '100%',
                    padding: '28px',
                    background: '#fff',
                    border: '1px solid rgba(23, 33, 43, .1)',
                    borderRadius: '20px',
                  }}
                >
                  <div
                    className="icon-box"
                    style={{ marginBottom: '18px' }}
                  >
                    <BrainCircuit size={24} />
                  </div>

                  <h3>Generative AI in Assignments</h3>

                  <p>
                    Learn how ChatGPT and other generative AI tools can support
                    research, writing, coding and study while respecting
                    academic-integrity requirements.
                  </p>

                  <span className="text-link">
                    Read the guide
                    <ArrowRight size={15} />
                  </span>
                </article>
              </Link>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Questions students often have about academic resources."
            />

            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {faq.map((item) => (
                <details
                  key={item.question}
                  style={{
                    borderBottom: '1px solid rgba(23, 33, 43, .12)',
                    padding: '20px 0',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      color: '#17212b',
                      fontWeight: 750,
                      fontSize: '17px',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.question}
                  </summary>

                  <p
                    style={{
                      margin: '12px 0 0',
                      color: '#4b5563',
                      lineHeight: 1.75,
                    }}
                  >
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="page-content"
          style={{
            background:
              'linear-gradient(135deg, #eef7f5 0%, #fff8ee 100%)',
          }}
        >
          <div className="container">
            <SectionHeading
              eyebrow="Beyond the resources"
              title="Sometimes the challenge is understanding what the assignment is actually asking."
              body="A resource can explain a concept, but complex assignments may also require research planning, technical implementation, data analysis, methodology or structured project guidance. If you have already read the relevant guides and still need help understanding your project, you can discuss the requirements with us."
            />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <Link
                href="/assignment-project-help"
                className="text-link"
              >
                Explore Assignment Help
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/assignment-project-help/research-project-help"
                className="text-link"
              >
                Research Project Help
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/services/research-methodology"
                className="text-link"
              >
                Research Methodology
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="text-link"
              >
                Talk about your project
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  )
}