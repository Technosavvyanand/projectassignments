import { Footer } from '@/components/site'
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Code2,
  FileCheck2,
  GraduationCap,
  Info,
  Lightbulb,
  MessageSquareText,
  Quote,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Generative AI in Assignments | ChatGPT, Academic Integrity & AI Use Guide',
  description:
    'A detailed guide to generative AI in assignments, including ChatGPT, AI-assisted research, writing, coding, citations, plagiarism, similarity, Turnitin checks, responsible AI use, academic integrity and precautions for students.',
  keywords: [
    'generative AI assignments',
    'generative AI in education',
    'AI for assignments',
    'ChatGPT assignments',
    'ChatGPT for students',
    'AI assignment help',
    'AI academic writing',
    'AI writing assignment',
    'AI generated assignments',
    'generative AI academic integrity',
    'AI and plagiarism',
    'AI plagiarism check',
    'Turnitin check',
    'Turnitin AI detection',
    'plagiarism free assignment help',
    'remove similarity',
    'remove plagiarism',
    'reduce similarity',
    'assignment similarity check',
    'AI tools for students',
    'responsible AI use in assignments',
    'ethical AI assignment help',
    'AI citation help',
    'AI research assistant',
    'ChatGPT academic integrity',
    'AI use in university assignments',
  ],
  alternates: {
    canonical: 'https://projectassignments.com/resources/generative-ai',
  },
  openGraph: {
    title: 'Generative AI in Assignments | Academic Integrity & Responsible AI Use',
    description:
      'Understand how students can use generative AI responsibly for assignments, research, coding and study without replacing their own learning or violating academic rules.',
    url: 'https://projectassignments.com/resources/generative-ai',
    type: 'article',
  },
}

const aiUses = [
  {
    icon: Lightbulb,
    title: 'Brainstorming and topic exploration',
    text: 'Use generative AI to explore possible research questions, identify subtopics, compare approaches and turn a broad assignment brief into a workable plan. The student should still decide which direction is appropriate and verify it against the assessment requirements.',
  },
  {
    icon: BookOpen,
    title: 'Understanding difficult concepts',
    text: 'AI can explain technical, scientific, business or theoretical concepts at different levels of difficulty. Asking for examples, analogies, worked explanations and prerequisite concepts can make it useful as a study companion.',
  },
  {
    icon: ClipboardCheck,
    title: 'Planning an assignment',
    text: 'A student can ask AI to suggest a possible outline, checklist or sequence of research tasks. The final structure should be adapted to the actual question, marking rubric, required sources and discipline conventions.',
  },
  {
    icon: MessageSquareText,
    title: 'Language and clarity support',
    text: 'Where course rules permit it, AI can help identify unclear sentences, grammar problems, repetitive wording or awkward transitions. Editing should improve the student’s own work rather than replace the intellectual substance of the submission.',
  },
  {
    icon: Code2,
    title: 'Programming and technical support',
    text: 'Generative AI can explain code, suggest debugging strategies, create small examples and help a student understand an error message. Students should run, test, understand and document code rather than submitting unverified generated code.',
  },
  {
    icon: Search,
    title: 'Research assistance',
    text: 'AI can help generate search terms, identify concepts to investigate and suggest questions for further research. It should not be treated as a substitute for reading the original academic sources.',
  },
]

const risks = [
  [
    'Fabricated references',
    'AI systems can produce plausible-looking but nonexistent papers, authors, URLs, journal details or quotations. Every important reference should be checked against the original source.',
  ],
  [
    'Incorrect information',
    'A fluent answer can still contain factual, mathematical, technical or legal errors. Accuracy must be established independently, especially in high-stakes subjects.',
  ],
  [
    'Over-reliance',
    'If AI writes the reasoning instead of helping the student develop it, the assignment may no longer demonstrate the learning outcomes the assessment is intended to measure.',
  ],
  [
    'Unacknowledged AI use',
    'Using AI where the institution or assignment prohibits it can create an academic-integrity issue even if the resulting text contains no conventional copied passage.',
  ],
  [
    'Loss of personal voice',
    'Generic AI prose can make an assignment sound detached from the student’s actual experience, course material, argument and level of understanding.',
  ],
  [
    'Privacy and confidentiality',
    'Sensitive personal information, unpublished research, patient information, client data, proprietary code or assessment materials should not be pasted into an AI service unless permitted and appropriately protected.',
  ],
  [
    'Copyright and source problems',
    'AI output may reproduce or closely resemble material from elsewhere, and generated references may obscure where an idea actually came from. Source-level verification remains essential.',
  ],
  [
    'Prompt and output leakage',
    'Students should understand what information an AI service receives and avoid uploading confidential material simply to obtain a more convenient answer.',
  ],
]

const disciplineRows = [
  {
    icon: Code2,
    title: 'IT, Computer Science & technical assignments',
    use: 'Explain algorithms, debug code, generate test cases, compare architectures, clarify database concepts and help build a study plan.',
    caution:
      'Run and understand every generated program. Check APIs and versions. Do not submit generated code or technical explanations that you cannot defend yourself.',
  },
  {
    icon: Stethoscope,
    title: 'Nursing, medicine & health assignments',
    use: 'Clarify terminology, organise a literature-search strategy, compare concepts and help identify questions for further reading.',
    caution:
      'Verify clinical claims against authoritative sources and current course material. Never treat a general-purpose AI answer as a substitute for professional guidance or validated clinical evidence.',
  },
  {
    icon: Scale,
    title: 'Law & legal assignments',
    use: 'Generate research questions, explain legal terminology, compare conceptual frameworks and help organise an argument.',
    caution:
      'Verify every statute, case, section, quotation and legal proposition against the authoritative source. Legal information can change and AI can invent authorities.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Management, MBA & business assignments',
    use: 'Brainstorm case-study angles, build frameworks, generate interview questions, compare strategy concepts and improve structure.',
    caution:
      'Validate company data, market statistics, financial figures and citations. Replace generic analysis with evidence from the case, dataset and academic literature.',
  },
]

const checklist = [
  'Read the assignment instructions before opening an AI tool.',
  'Identify whether AI is prohibited, permitted, restricted or explicitly required.',
  'Keep the assignment question and marking rubric in front of you while using AI.',
  'Use AI to support thinking and learning rather than automatically outsourcing the entire task.',
  'Verify important claims, calculations, quotations, references and statistics.',
  'Open the original source before citing it in an academic submission.',
  'Do not invent references when an AI system cannot provide a verifiable source.',
  'Keep evidence of your research and drafting process where appropriate.',
  'Follow your institution’s rules for AI acknowledgement or disclosure.',
  'Run an appropriate plagiarism or similarity check when your workflow or institution requires one.',
  'Do not attempt to manipulate AI detectors or hide prohibited AI use.',
  'Before submission, make sure you can explain and defend the argument, method, code or analysis in your own words.',
]

const faq = [
  {
    q: 'Can I use ChatGPT for my assignment?',
    a: 'It depends on the rules for your course and assessment. Some assignments may permit limited AI assistance, some may prohibit it, and some may explicitly require students to use and evaluate AI. The assignment brief, institutional policy and instructions from the teaching team should take priority over generic advice found online.',
  },
  {
    q: 'Is using ChatGPT the same as plagiarism?',
    a: 'Not automatically. Plagiarism generally concerns presenting another person’s words, ideas or work as your own without appropriate acknowledgement. However, submitting AI-generated work without disclosure where disclosure is required can violate an academic-integrity rule even if a conventional similarity checker does not find a matching published source. The exact rule depends on the institution and assessment.',
  },
  {
    q: 'Will Turnitin detect ChatGPT?',
    a: 'Turnitin provides separate similarity and AI-writing assessment capabilities. A similarity report identifies text matching material in its databases; it does not by itself determine plagiarism. Turnitin also states that AI-writing assessment can make errors and should not be the sole basis for adverse action. Students should therefore focus on following the actual assessment rules rather than trying to predict or bypass a detector.',
  },
  {
    q: 'Can AI-generated text have a low similarity score?',
    a: 'Yes. Similarity checking and AI-writing assessment answer different questions. A text can have little or no direct matching text in the sources searched by a similarity system while still having been generated with AI. Conversely, normal quotations, common phrases and correctly cited material can create similarity matches without constituting plagiarism.',
  },
  {
    q: 'How can I reduce or remove similarity from an assignment?',
    a: 'The responsible approach is not to manipulate a checker. Review each match, determine why it occurred, quote and cite source material correctly, rewrite your own analysis where appropriate, remove unnecessary copied wording and make sure references accurately support the claims. The goal is appropriate authorship and citation, not an artificial 0% similarity score.',
  },
  {
    q: 'Is there such a thing as a 100% plagiarism-free assignment?',
    a: 'No useful academic service should promise a universal 0% similarity result or guarantee that a document will never trigger a similarity match. Properly cited quotations, technical terminology, titles and common phrases can legitimately match other sources. A stronger standard is original analysis supported by accurate citation and transparent academic practice.',
  },
  {
    q: 'Can I ask AI to rewrite my assignment so Turnitin will not detect it?',
    a: 'Using AI specifically to disguise prohibited AI use or evade an academic-integrity process is not a responsible approach. If your concern is an inappropriate similarity match, address the underlying writing and citation issue instead. If AI use itself is restricted, follow the course rules rather than attempting to conceal it.',
  },
  {
    q: 'Can AI write my references and bibliography?',
    a: 'AI can help explain citation formats or create a draft citation from information you provide, but the final reference should be checked against the original source and the required style guide. Fabricated or inaccurate references can undermine an otherwise strong assignment.',
  },
]

function SectionTitle({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  )
}

export default function GenerativeAIPage() {
  return (
    <main className="ai-page">
      <style>{`
        .ai-page {
          --ai-ink: #17212b;
          --ai-muted: #4b5563;
          --ai-line: rgba(23,33,43,.11);
          --ai-soft: #f4f8f7;
          --ai-soft-warm: #fff8ee;
          --ai-teal: #0c6b66;
          --ai-orange: #d9822b;

          color: var(--ai-ink);
          background: var(--background, #fff);
        }

        .ai-page .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .ai-hero {
          padding: 76px 0 54px;
          background: linear-gradient(135deg, #f1f8f7 0%, #fffaf2 100%);
          border-bottom: 1px solid var(--ai-line);
        }

        .ai-hero-grid {
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 42px;
          align-items: center;
        }

        .ai-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--ai-teal);
          margin-bottom: 18px;
        }

        .ai-hero h1 {
          color: var(--ai-ink);
          font-size: clamp(38px, 5vw, 66px);
          line-height: 1.02;
          letter-spacing: -.045em;
          margin: 0 0 20px;
          max-width: 900px;
        }

        .ai-hero .lead {
          font-size: 18px;
          line-height: 1.75;
          color: var(--ai-muted);
          max-width: 800px;
          margin: 0 0 26px;
        }

        .ai-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .ai-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 750;
          border: 1px solid var(--ai-line);
        }

        .ai-button.primary {
          background: var(--ai-teal);
          color: white;
          border-color: var(--ai-teal);
        }

        .ai-button.secondary {
          background: white;
          color: var(--ai-ink);
        }

        .ai-hero-card {
          background: rgba(255,255,255,.82);
          border: 1px solid var(--ai-line);
          border-radius: 24px;
          padding: 26px;
          box-shadow: 0 18px 55px rgba(23,33,43,.08);
        }

        .ai-hero-card .icon-box {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: var(--ai-soft-warm);
          color: var(--ai-orange);
          margin-bottom: 18px;
        }

        .ai-hero-card h3 {
          color: var(--ai-ink);
          margin: 0 0 9px;
          font-size: 20px;
        }

        .ai-hero-card p {
          margin: 0;
          color: var(--ai-muted);
          line-height: 1.65;
        }

        .ai-stats {
          padding: 20px 0;
          border-bottom: 1px solid var(--ai-line);
          background: #fff;
        }

        .ai-stat-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
        }

        .ai-stat {
          padding: 12px 18px;
          border-right: 1px solid var(--ai-line);
        }

        .ai-stat:last-child {
          border-right: 0;
        }

        .ai-stat strong {
          color: var(--ai-ink);
          display: block;
          font-size: 15px;
          margin-bottom: 5px;
        }

        .ai-stat span {
          color: var(--ai-muted);
          font-size: 13px;
          line-height: 1.45;
        }

        .ai-section {
          padding: 76px 0;
        }

        .ai-section.alt {
          background: var(--ai-soft);
        }

        .ai-section.warm {
          background: var(--ai-soft-warm);
        }

        .section-heading {
          max-width: 850px;
          margin-bottom: 34px;
        }

        .eyebrow {
          display: block;
          font-size: 12px;
          letter-spacing: .09em;
          text-transform: uppercase;
          color: var(--ai-teal);
          font-weight: 850;
          margin-bottom: 9px;
        }

        .section-heading h2 {
          color: var(--ai-ink);
          font-size: clamp(29px,3.5vw,44px);
          line-height: 1.08;
          letter-spacing: -.03em;
          margin: 0 0 13px;
        }

        .section-heading p {
          margin: 0;
          color: var(--ai-muted);
          font-size: 17px;
          line-height: 1.75;
        }

        .ai-prose {
          max-width: 920px;
          color: var(--ai-muted);
          line-height: 1.82;
          font-size: 16px;
        }

        .ai-prose p {
          margin: 0 0 18px;
          color: var(--ai-muted);
        }

        .ai-grid-3 {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .ai-grid-2 {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 20px;
        }

        .ai-card {
          background: #fff;
          border: 1px solid var(--ai-line);
          border-radius: 18px;
          padding: 22px;
        }

        .ai-card.soft {
          background: rgba(255,255,255,.64);
        }

        .ai-card .card-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: var(--ai-soft);
          color: var(--ai-teal);
          margin-bottom: 15px;
        }

        .ai-card h3 {
          color: var(--ai-ink);
          margin: 0 0 8px;
          font-size: 18px;
          line-height: 1.3;
        }

        .ai-card p {
          margin: 0;
          color: var(--ai-muted);
          line-height: 1.7;
        }

        .ai-card ul {
          margin: 12px 0 0;
          padding-left: 18px;
          color: var(--ai-muted);
          line-height: 1.7;
        }

        .ai-callout {
          margin-top: 28px;
          padding: 22px 24px;
          border-left: 4px solid var(--ai-orange);
          border-radius: 12px;
          background: #fff;
          border-top: 1px solid var(--ai-line);
          border-right: 1px solid var(--ai-line);
          border-bottom: 1px solid var(--ai-line);
        }

        .ai-callout strong {
          color: var(--ai-ink);
          display: block;
          margin-bottom: 6px;
        }

        .ai-callout p {
          margin: 0;
          color: var(--ai-muted);
          line-height: 1.7;
        }

        .ai-warning {
          display: flex;
          gap: 14px;
          padding: 20px;
          background: #fff8ee;
          border: 1px solid rgba(217,130,43,.25);
          border-radius: 16px;
        }

        .ai-warning svg {
          flex: 0 0 auto;
          color: var(--ai-orange);
        }

        .ai-warning p {
          margin: 0;
          color: var(--ai-muted);
          line-height: 1.7;
        }

        .ai-table-wrap {
          overflow-x: auto;
          border: 1px solid var(--ai-line);
          border-radius: 18px;
          background: #fff;
        }

        .ai-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 780px;
        }

        .ai-table th,
        .ai-table td {
          text-align: left;
          vertical-align: top;
          padding: 17px;
          border-bottom: 1px solid var(--ai-line);
          line-height: 1.65;
        }

        .ai-table th {
          background: var(--ai-soft);
          color: var(--ai-ink);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .05em;
        }

        .ai-table tr:last-child td {
          border-bottom: 0;
        }

        .ai-table td {
          color: var(--ai-muted);
        }

        .ai-table td:first-child {
          color: var(--ai-ink);
          font-weight: 750;
          width: 23%;
        }

        .ai-steps {
          display: grid;
          gap: 13px;
          counter-reset: step;
        }

        .ai-step {
          display: grid;
          grid-template-columns: 46px 1fr;
          gap: 15px;
          align-items: start;
        }

        .ai-step-number {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--ai-teal);
          color: #fff;
          font-weight: 800;
        }

        .ai-step h3 {
          color: var(--ai-ink);
          margin: 0 0 5px;
          font-size: 17px;
        }

        .ai-step p {
          margin: 0;
          color: var(--ai-muted);
          line-height: 1.65;
        }

        .ai-checklist {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 11px;
        }

        .ai-check {
          display: flex;
          gap: 10px;
          padding: 14px;
          background: #fff;
          border: 1px solid var(--ai-line);
          border-radius: 13px;
          color: var(--ai-muted);
          line-height: 1.6;
        }

        .ai-check svg {
          flex: 0 0 auto;
          color: var(--ai-teal);
          margin-top: 3px;
        }

        .ai-faq {
          border-top: 1px solid var(--ai-line);
        }

        .ai-faq details {
          border-bottom: 1px solid var(--ai-line);
          padding: 19px 0;
        }

        .ai-faq summary {
          cursor: pointer;
          color: var(--ai-ink);
          font-weight: 750;
          font-size: 17px;
          list-style: none;
        }

        .ai-faq summary::-webkit-details-marker {
          display: none;
        }

        .ai-faq p {
          color: var(--ai-muted);
          line-height: 1.75;
          max-width: 900px;
          margin: 12px 0 0;
        }

        .ai-links {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 15px;
        }

        .ai-link-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 18px;
          border: 1px solid var(--ai-line);
          border-radius: 15px;
          background: #fff;
          text-decoration: none;
          color: var(--ai-ink);
          font-weight: 750;
        }

        .ai-link-card span {
          color: var(--ai-muted);
          font-weight: 500;
          font-size: 13px;
          display: block;
          margin-top: 4px;
        }

        .ai-cta {
          padding: 68px 0;
          background: linear-gradient(135deg,#0c6b66,#0b5b57);
          color: #fff;
        }

        .ai-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .ai-cta h2 {
          margin: 0 0 9px;
          font-size: clamp(28px,3.5vw,43px);
          letter-spacing: -.03em;
          color: #fff;
        }

        .ai-cta p {
          margin: 0;
          max-width: 730px;
          line-height: 1.7;
          opacity: .88;
          color: #fff;
        }

        .ai-cta .ai-button {
          background: #fff;
          color: var(--ai-teal);
          border-color: #fff;
          white-space: nowrap;
        }

        .ai-source-note {
          margin-top: 26px;
          padding: 18px;
          border-radius: 13px;
          background: #f8faf9;
          border: 1px solid var(--ai-line);
          color: var(--ai-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        .ai-source-note strong {
          color: var(--ai-ink);
        }

        .ai-page a {
          color: var(--ai-teal);
        }

        .ai-button.primary,
        .ai-button.secondary,
        .ai-cta .ai-button,
        .ai-link-card {
          text-decoration: none;
        }

        .ai-button.primary {
          color: #fff;
        }

        .ai-button.secondary {
          color: var(--ai-ink);
        }

        @media (max-width: 900px) {
          .ai-hero-grid,
          .ai-grid-2 {
            grid-template-columns: 1fr;
          }

          .ai-grid-3 {
            grid-template-columns: repeat(2,1fr);
          }

          .ai-stat-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .ai-stat:nth-child(2) {
            border-right: 0;
          }

          .ai-stat:nth-child(-n+2) {
            border-bottom: 1px solid var(--ai-line);
          }

          .ai-checklist,
          .ai-links {
            grid-template-columns: 1fr;
          }

          .ai-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 620px) {
          .ai-hero {
            padding-top: 54px;
          }

          .ai-section {
            padding: 56px 0;
          }

          .ai-grid-3 {
            grid-template-columns: 1fr;
          }

          .ai-stat-grid {
            grid-template-columns: 1fr;
          }

          .ai-stat {
            border-right: 0;
            border-bottom: 1px solid var(--ai-line);
          }

          .ai-stat:last-child {
            border-bottom: 0;
          }

          .ai-page .container {
            padding: 0 18px;
          }
        }
      `}</style>

      <section className="ai-hero">
        <div className="container ai-hero-grid">
          <div>
            <div className="ai-kicker">
              <Sparkles size={16} />
              Generative AI & Academic Work
            </div>

            <h1>
              Generative AI in Assignments: Uses, Risks, ChatGPT & Academic
              Integrity
            </h1>

            <p className="lead">
              Generative AI is changing how students research, plan, write,
              code and study. Used carefully, tools such as ChatGPT can support
              learning; used without understanding the assessment rules, they
              can create problems involving authorship, accuracy, privacy,
              plagiarism, similarity and academic integrity.
            </p>

            <div className="ai-hero-actions">
              <Link
                className="ai-button primary"
                href="#responsible-use"
              >
                How to use AI responsibly
                <ArrowRight size={16} />
              </Link>

              <Link
                className="ai-button secondary"
                href="/resources/plagiarism-check"
              >
                Plagiarism & similarity guide
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <aside className="ai-hero-card">
            <div className="icon-box">
              <BrainCircuit size={27} />
            </div>

            <h3>AI should support learning, not replace it</h3>

            <p>
              The safest academic approach is to use generative AI as a tool
              for explanation, brainstorming, feedback or technical support
              when permitted, while keeping the student responsible for the
              reasoning, evidence, sources and final submission.
            </p>
          </aside>
        </div>
      </section>

      <section className="ai-stats">
        <div className="container ai-stat-grid">
          <div className="ai-stat">
            <strong>AI assistance ≠ automatic plagiarism</strong>
            <span>
              AI use and source similarity are related but distinct
              academic-integrity questions.
            </span>
          </div>

          <div className="ai-stat">
            <strong>Rules come first</strong>
            <span>
              Course and institutional policies can differ significantly.
            </span>
          </div>

          <div className="ai-stat">
            <strong>Verify the output</strong>
            <span>
              Fluent AI text can still contain errors or fabricated
              references.
            </span>
          </div>

          <div className="ai-stat">
            <strong>Keep ownership</strong>
            <span>
              You should understand and be able to explain the work you
              submit.
            </span>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="container">
          <SectionTitle
            eyebrow="Understanding the technology"
            title="What is generative AI?"
            intro="Generative artificial intelligence refers to systems that can produce new content in response to instructions, including text, code, images, summaries, explanations and other forms of output. In education, the important question is not simply whether AI exists, but how a particular assessment permits or restricts its use."
          />

          <div className="ai-prose">
            <p>
              Generative AI tools can produce convincing paragraphs, outline an
              essay, explain a database query, suggest Python or Java code,
              generate practice questions, summarise a passage supplied by the
              user and help transform a vague idea into a more structured
              research plan. This makes them potentially useful learning tools
              across disciplines.
            </p>

            <p>
              At the same time, the apparent fluency of an AI response can
              hide weaknesses. A response may sound authoritative while
              containing a factual error, an invented citation, an outdated
              claim, an inappropriate assumption or code that fails in the
              student’s actual environment. The student therefore remains
              responsible for checking the output.
            </p>

            <p>
              Current higher-education guidance increasingly focuses on
              transparent, responsible use and on assessment practices that
              measure the intended learning outcomes. TEQSA’s resources, for
              example, discuss assessment redesign, AI literacy, transparency
              and evidence-based approaches to academic integrity rather than
              treating an AI detector score as a complete answer.
            </p>
          </div>
        </div>
      </section>

      <section
        className="ai-section alt"
        id="responsible-use"
      >
        <div className="container">
          <SectionTitle
            eyebrow="Practical uses"
            title="How students can use generative AI in assignments"
            intro="The following uses can be helpful when they are allowed by the assignment and used as learning support rather than as a substitute for the student’s assessed work."
          />

          <div className="ai-grid-3">
            {aiUses.map((item) => {
              const Icon = item.icon

              return (
                <article
                  className="ai-card"
                  key={item.title}
                >
                  <div className="card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>

          <div className="ai-callout">
            <strong>
              A useful distinction: assistance versus substitution
            </strong>

            <p>
              Asking an AI tool to explain why a SQL query fails is different
              from asking it to complete an entire database assignment and
              submitting the answer without understanding it. Likewise, asking
              for possible research keywords is different from allowing AI to
              invent a literature review that the student has not actually
              researched. The more the tool performs the core intellectual work
              being assessed, the more carefully the student must consider the
              assessment rules.
            </p>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="container">
          <SectionTitle
            eyebrow="Academic integrity"
            title="Generative AI and plagiarism are not the same question"
            intro="A plagiarism or similarity checker and an AI-writing assessment can provide different kinds of information. Students should understand the distinction before interpreting any report."
          />

          <div className="ai-grid-2">
            <div className="ai-card soft">
              <div className="card-icon">
                <FileCheck2 size={21} />
              </div>

              <h3>
                Similarity checking asks: what text matches known sources?
              </h3>

              <p>
                A similarity system compares submitted text with material in
                its available databases and highlights matching passages. A
                match can come from a quotation, bibliography entry, common
                wording or copied material. A similarity percentage is
                therefore not, by itself, a finding of plagiarism.
              </p>

              <p style={{ marginTop: 12 }}>
                Read the full{' '}
                <Link href="/resources/plagiarism-check">
                  plagiarism and similarity guide
                </Link>{' '}
                for a detailed explanation of Turnitin, similarity reports,
                exclusions and responsible ways to address matches.
              </p>
            </div>

            <div className="ai-card soft">
              <div className="card-icon">
                <BrainCircuit size={21} />
              </div>

              <h3>
                AI-writing assessment asks a different question
              </h3>

              <p>
                AI-writing detection attempts to identify patterns associated
                with text that may have been generated by an AI system. It is
                not equivalent to finding a matching published source. Current
                guidance also recognises that AI detection can produce errors
                and should not be treated as conclusive evidence on its own.
              </p>
            </div>
          </div>

          <div
            className="ai-warning"
            style={{ marginTop: 22 }}
          >
            <AlertTriangle size={22} />

            <p>
              <strong>Do not write for the detector.</strong> Trying to
              “humanise” text, manipulate a Turnitin check, remove AI signals
              or otherwise evade an institutional process is fundamentally
              different from improving the quality and originality of your
              work. If AI use is restricted, follow the rule; if it is
              permitted, use and acknowledge it as required.
            </p>
          </div>
        </div>
      </section>

      <section className="ai-section warm">
        <div className="container">
          <SectionTitle
            eyebrow="Precautions"
            title="Major risks of using AI for university assignments"
            intro="Generative AI can save time, but convenience should not become a reason to stop checking evidence, sources, calculations or authorship."
          />

          <div className="ai-grid-2">
            {risks.map(([title, text]) => (
              <article
                className="ai-card"
                key={title}
              >
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="container">
          <SectionTitle
            eyebrow="A practical workflow"
            title="How to use ChatGPT or another AI tool without losing control of your assignment"
            intro="A disciplined workflow makes AI much more useful than simply copying the first answer it produces."
          />

          <div className="ai-steps">
            {[
              [
                'Read the rules',
                'Check the assignment brief, subject guide and institutional policy. Look specifically for instructions about generative AI, ChatGPT, acknowledgement, prohibited uses and permitted assistance.',
              ],
              [
                'Define your own objective',
                'Write down what you need to learn or produce before asking AI. A clear objective makes it easier to identify when the output is useful and when it has gone beyond the task.',
              ],
              [
                'Use AI for a bounded task',
                'Ask for an explanation, brainstorming support, a debugging hint, a checklist or alternative perspectives rather than automatically outsourcing the whole assignment.',
              ],
              [
                'Verify the answer',
                'Check facts, equations, source details, quotations, statistics, legislation, clinical claims, technical commands and code against reliable sources or your own testing.',
              ],
              [
                'Do the intellectual work yourself',
                'Develop the argument, choose evidence, interpret the data and make the final decisions required by the assessment. Do not let polished wording conceal weak reasoning.',
              ],
              [
                'Acknowledge AI when required',
                'If your institution requires an AI-use statement, follow its wording and citation requirements. Keep the disclosure accurate and proportionate to the actual use.',
              ],
              [
                'Run final integrity checks',
                'Check references, quotations, similarity, formatting and assessment requirements. Make sure the final document represents work you understand and can explain.',
              ],
            ].map(([title, text], index) => (
              <div
                className="ai-step"
                key={title}
              >
                <div className="ai-step-number">
                  {index + 1}
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section alt">
        <div className="container">
          <SectionTitle
            eyebrow="Turnitin, similarity & AI detection"
            title="What students should know before a Turnitin check"
            intro="Turnitin's similarity reporting and AI-writing assessment should not be treated as a single universal plagiarism score. Understanding the distinction helps students respond to reports more responsibly."
          />

          <div className="ai-table-wrap">
            <table className="ai-table">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>What it means</th>
                  <th>What the student should do</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>What is similarity?</td>
                  <td>
                    The percentage of qualifying text that matches material in
                    the comparison database. Matches may include legitimate
                    quotations, references and common wording.
                  </td>
                  <td>
                    Open the report and inspect the actual highlighted passages
                    rather than judging the document from one percentage.
                  </td>
                </tr>

                <tr>
                  <td>Does similarity prove plagiarism?</td>
                  <td>
                    No. Similarity identifies matching text; academic judgment
                    requires context, authorship, citation and the applicable
                    institutional rules.
                  </td>
                  <td>
                    Review each match and correct inappropriate copying or
                    citation problems.
                  </td>
                </tr>

                <tr>
                  <td>Can AI-generated text have low similarity?</td>
                  <td>
                    Yes. AI-generated text may not directly match a source
                    database in the same way copied published material does.
                  </td>
                  <td>
                    Follow the AI-use policy separately from the similarity
                    workflow.
                  </td>
                </tr>

                <tr>
                  <td>Does an AI score prove misconduct?</td>
                  <td>
                    No. Turnitin's own guidance says AI-writing assessment may
                    make mistakes and should not be the sole basis for adverse
                    action.
                  </td>
                  <td>
                    Keep evidence of your research and drafting process and be
                    prepared to explain your work honestly if questions arise.
                  </td>
                </tr>

                <tr>
                  <td>Can filters change a similarity report?</td>
                  <td>
                    Filters and exclusions can remove categories such as
                    bibliography, quotations or small matches from a
                    particular view. The effect depends on the report and
                    institutional workflow.
                  </td>
                  <td>
                    Understand what has been excluded and do not treat a
                    filtered student view as a guarantee of an official final
                    score.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ai-callout">
            <strong>
              Turnitin is not a “make my assignment plagiarism free” button.
            </strong>

            <p>
              A proper Turnitin check is a review process. The responsible
              objective is to identify where source material appears, decide
              whether it is appropriately quoted or paraphrased, confirm that
              citations support the claims and strengthen the student’s own
              analysis. Turnitin itself explains that similarity should be
              interpreted in context rather than treated as a direct
              plagiarism verdict.
            </p>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="container">
          <SectionTitle
            eyebrow="Discipline-specific use"
            title="Generative AI in technical, medical, law and management assignments"
            intro="The acceptable use of AI can differ by discipline because the evidence, professional standards and learning outcomes differ."
          />

          <div className="ai-grid-2">
            {disciplineRows.map((item) => {
              const Icon = item.icon

              return (
                <article
                  className="ai-card"
                  key={item.title}
                >
                  <div className="card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>
                    <strong>Potential use:</strong> {item.use}
                  </p>

                  <p style={{ marginTop: 11 }}>
                    <strong>Precaution:</strong> {item.caution}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ai-section warm">
        <div className="container">
          <SectionTitle
            eyebrow="Assignment submission checklist"
            title="Before you submit an AI-assisted assignment"
            intro="Use this as a practical final review. It is not a replacement for your university's own policy or assessment instructions."
          />

          <div className="ai-checklist">
            {checklist.map((item) => (
              <div
                className="ai-check"
                key={item}
              >
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="container">
          <SectionTitle
            eyebrow="Plagiarism-free assignment help"
            title="What responsible AI-assisted assignment help should mean"
            intro="Students often search for phrases such as “plagiarism free assignment help”, “AI assignment help”, “remove similarity” or “Turnitin check”. Those searches usually reflect a legitimate concern about academic quality, but the wording can hide an important distinction."
          />

          <div className="ai-grid-3">
            <article className="ai-card">
              <div className="card-icon">
                <GraduationCap size={21} />
              </div>

              <h3>Original thinking</h3>

              <p>
                The assignment should contain the student's own
                interpretation, analysis and decisions appropriate to the
                learning outcomes.
              </p>
            </article>

            <article className="ai-card">
              <div className="card-icon">
                <Quote size={21} />
              </div>

              <h3>Accurate attribution</h3>

              <p>
                Ideas, quotations, data and evidence from external sources
                should be cited according to the required referencing style.
              </p>
            </article>

            <article className="ai-card">
              <div className="card-icon">
                <ShieldCheck size={21} />
              </div>

              <h3>Transparent AI use</h3>

              <p>
                Where AI is permitted, use it within the stated boundaries and
                disclose or acknowledge it when the assessment requires that.
              </p>
            </article>
          </div>

          <div
            className="ai-warning"
            style={{ marginTop: 22 }}
          >
            <Info size={22} />

            <p>
              <strong>Avoid “0% similarity” promises.</strong> A legitimate
              academic document can contain matching terminology, quotations,
              references and standard phrases. The objective should be
              appropriate citation and authentic authorship, not gaming a
              similarity system.
            </p>
          </div>
        </div>
      </section>

      <section className="ai-section alt">
        <div className="container">
          <SectionTitle
            eyebrow="Related resources"
            title="Continue learning about academic integrity and assignment quality"
            intro="These resources cover adjacent topics that students commonly need when preparing research papers, technical assignments and postgraduate work."
          />

          <div className="ai-links">
            <Link
              className="ai-link-card"
              href="/resources/plagiarism-check"
            >
              <div>
                Plagiarism & Similarity Check
                <span>
                  Turnitin, similarity reports and responsible correction
                </span>
              </div>
              <ArrowRight size={18} />
            </Link>

            <Link
              className="ai-link-card"
              href="/resources/referencing-styles"
            >
              <div>
                Referencing Styles
                <span>
                  Harvard, APA 7, IEEE, MLA, Chicago, Vancouver and more
                </span>
              </div>
              <ArrowRight size={18} />
            </Link>

            <Link
              className="ai-link-card"
              href="/services/research-methodology"
            >
              <div>
                Research Methodology
                <span>
                  Research design, evidence and academic methods
                </span>
              </div>
              <ArrowRight size={18} />
            </Link>

            <Link
              className="ai-link-card"
              href="/assignment-project-help/programming-assignment-help"
            >
              <div>
                Programming Assignment Help
                <span>
                  Technical reasoning, code and testing support
                </span>
              </div>
              <ArrowRight size={18} />
            </Link>

            <Link
              className="ai-link-card"
              href="/assignment-project-help/research-project-help"
            >
              <div>
                Research Project Help
                <span>
                  Planning, analysis and academic project guidance
                </span>
              </div>
              <ArrowRight size={18} />
            </Link>

            <Link
              className="ai-link-card"
              href="/contact"
            >
              <div>
                Discuss Your Project
                <span>Tell us what you are working on</span>
              </div>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="container">
          <SectionTitle
            eyebrow="Frequently asked questions"
            title="Generative AI, ChatGPT and assignment FAQs"
          />

          <div className="ai-faq">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <div className="ai-source-note">
            <strong>Source note:</strong> This guide is intended as general
            academic-practice information. Policies differ by institution,
            course and assessment. For current guidance, students should
            consult their own assessment brief and academic-integrity policy.
            Relevant resources include higher-education guidance on Gen AI and
            academic integrity and Turnitin's guidance on AI use, similarity
            and AI-writing assessment.
          </div>
        </div>
      </section>

      <section className="ai-cta">
        <div className="container ai-cta-inner">
          <div>
            <h2>
              Need help with a research, technical or postgraduate assignment?
            </h2>

            <p>
              Get structured academic guidance focused on research quality,
              methodology, technical reasoning, citation and responsible use
              of digital tools. We can help you understand the task and
              develop your own submission rather than encouraging shortcuts
              around academic-integrity requirements.
            </p>
          </div>

          <Link
            className="ai-button"
            href="/contact"
          >
            Discuss your project
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}