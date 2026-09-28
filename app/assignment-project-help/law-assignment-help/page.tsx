import {
    ArrowRight,
    BookOpen,
    FileSearch,
    FileText,
    Gavel,
    Landmark,
    Scale,
    ShieldCheck
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import {
    CTA,
    Footer,
    PageHero,
    SectionHeading,
} from '@/components/site'

export const metadata: Metadata = {
  title:
    'Law Assignment Help | Legal Research, Case Analysis & Coursework Guidance',
  description:
    'Get structured law assignment guidance covering legal research, case analysis, legislation, legal essays, problem questions, jurisprudence, contracts, torts, criminal law and research projects.',
  keywords: [
    'law assignment help',
    'law assignment guidance',
    'law coursework help',
    'law homework help',
    'law academic support',
    'law student support',
    'legal assignment help',
    'legal research assignment',
    'legal research help',
    'law case study help',
    'legal case analysis',
    'case law analysis assignment',
    'law essay help',
    'legal essay guidance',
    'law problem question help',
    'legal problem question',
    'law research project help',
    'law dissertation support',
    'law thesis support',
    'legal writing help',
    'legal academic writing',
    'legislation analysis assignment',
    'statute analysis assignment',
    'contract law assignment help',
    'tort law assignment help',
    'criminal law assignment help',
    'constitutional law assignment help',
    'public law assignment help',
    'administrative law assignment help',
    'company law assignment help',
    'commercial law assignment help',
    'employment law assignment help',
    'international law assignment help',
    'human rights law assignment help',
    'jurisprudence assignment help',
    'legal theory assignment',
    'law critical analysis',
    'law research methodology',
    'legal literature review',
    'law university assignment help',
    'law undergraduate assignment help',
    'law postgraduate assignment help',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/assignment-project-help/law-assignment-help',
  },
  openGraph: {
    title:
      'Law Assignment Help | Legal Research, Case Analysis & Coursework Guidance',
    description:
      'Structured academic guidance for law assignments, legal research, case analysis, legislation, problem questions, legal essays and research projects.',
    url:
      'https://projectassignments.com/assignment-project-help/law-assignment-help',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What types of law assignments can I get guidance with?',
    answer:
      'Law students may need support with legal essays, case analysis, problem questions, statute analysis, legal research, comparative law assignments, jurisprudence, research projects, presentations, literature reviews and dissertation-related work.',
  },
  {
    question: 'Can you help me understand a legal problem question?',
    answer:
      'Yes. Guidance can cover identifying the legal issues, locating the relevant legal rules and authorities, applying those rules to the facts, considering competing arguments and developing a logical conclusion.',
  },
  {
    question: 'Can you help with case law analysis?',
    answer:
      'Yes. Case analysis can involve understanding the material facts, identifying the legal issue, examining the court’s reasoning, distinguishing relevant principles from background facts and explaining the significance of the decision within the assignment.',
  },
  {
    question: 'Can you help with legislation or statute analysis?',
    answer:
      'Yes. Guidance can cover identifying relevant statutory provisions, understanding the legal issue, examining how provisions operate and connecting legislation with relevant judicial decisions and academic commentary where appropriate.',
  },
  {
    question: 'Can you help with legal research?',
    answer:
      'Yes. Legal research guidance can cover developing research questions, identifying search terms, locating relevant cases and legislation, evaluating secondary sources, organising authorities and developing a structured research argument.',
  },
  {
    question: 'Can you help with a law dissertation or research project?',
    answer:
      'Yes. Support can cover research questions, literature reviews, research methodology, source organisation, comparative analysis, argument development and academic structure. Students remain responsible for their own final academic submissions.',
  },
  {
    question: 'Do you provide legal advice for real cases?',
    answer:
      'ProjectAssignments provides academic guidance rather than professional legal advice. Academic discussion of legal principles should not be treated as advice about a real dispute, legal proceeding or individual legal situation.',
  },
]

const lawAreas = [
  {
    icon: <Scale size={24} aria-hidden="true" />,
    title: 'Case Law Analysis',
    text:
      'Understand how to identify material facts, legal issues, judicial reasoning, legal principles and the significance of a decision within an academic argument.',
  },
  {
    icon: <Gavel size={24} aria-hidden="true" />,
    title: 'Legal Problem Questions',
    text:
      'Break complex fact patterns into legal issues, identify applicable rules and authorities, apply them to the facts and develop reasoned conclusions.',
  },
  {
    icon: <Landmark size={24} aria-hidden="true" />,
    title: 'Legislation & Statutory Analysis',
    text:
      'Examine statutory provisions, their relationship with legal principles and relevant judicial interpretation as required by the assignment.',
  },
  {
    icon: <FileSearch size={24} aria-hidden="true" />,
    title: 'Legal Research',
    text:
      'Develop research questions, search concepts and source strategies for finding relevant cases, legislation, journal literature and other academic material.',
  },
  {
    icon: <BookOpen size={24} aria-hidden="true" />,
    title: 'Legal Essays & Critical Analysis',
    text:
      'Develop structured academic arguments that compare authorities, examine competing viewpoints and critically evaluate legal principles.',
  },
  {
    icon: <FileText size={24} aria-hidden="true" />,
    title: 'Law Research Projects',
    text:
      'Work through research questions, literature reviews, methodology, comparative analysis and academic presentation for larger law projects.',
  },
]

const assignmentTypes = [
  'Law essay assignments',
  'Legal case analysis',
  'Case law research',
  'Legal problem questions',
  'Statute analysis assignments',
  'Legislation research',
  'Legal research assignments',
  'Contract law assignments',
  'Tort law assignments',
  'Criminal law assignments',
  'Constitutional law assignments',
  'Public law assignments',
  'Administrative law assignments',
  'Company law assignments',
  'Commercial law assignments',
  'Employment law assignments',
  'International law assignments',
  'Human rights law assignments',
  'Jurisprudence assignments',
  'Legal theory assignments',
  'Comparative law assignments',
  'Law research proposals',
  'Legal literature reviews',
  'Law dissertations and theses',
  'Postgraduate law research',
]

const lawSubjects = [
  {
    title: 'Contract Law',
    text:
      'Assignments may involve formation, terms, breach, remedies, interpretation and application of contractual principles to particular factual scenarios.',
  },
  {
    title: 'Tort Law',
    text:
      'Academic work may examine negligence, duty of care, causation, liability, defences and remedies through cases and legal principles.',
  },
  {
    title: 'Criminal Law',
    text:
      'Criminal law assignments can require analysis of offences, elements of liability, defences, precedent and the application of legal rules to facts.',
  },
  {
    title: 'Constitutional & Public Law',
    text:
      'Topics may include constitutional principles, separation of powers, judicial review, governmental authority, rights and public-law remedies.',
  },
  {
    title: 'Company & Commercial Law',
    text:
      'Coursework can involve corporate structures, directors, shareholder relationships, commercial transactions, duties and regulatory frameworks.',
  },
  {
    title: 'Human Rights & International Law',
    text:
      'Assignments may require comparison of legal instruments, international principles, judicial decisions, state obligations and competing interpretations.',
  },
]

export default function LawAssignmentHelpPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://projectassignments.com/assignment-project-help/law-assignment-help#webpage',
        url:
          'https://projectassignments.com/assignment-project-help/law-assignment-help',
        name:
          'Law Assignment Help | Legal Research, Case Analysis & Coursework Guidance',
        description:
          'Structured academic guidance for law assignments, legal research, case analysis, legislation, problem questions, legal essays and research projects.',
        isPartOf: {
          '@id': 'https://projectassignments.com/#website',
        },
        breadcrumb: {
          '@id':
            'https://projectassignments.com/assignment-project-help/law-assignment-help#breadcrumb',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://projectassignments.com/assignment-project-help/law-assignment-help#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://projectassignments.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Assignment & Academic Project Help',
            item:
              'https://projectassignments.com/assignment-project-help',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Law Assignment Help',
            item:
              'https://projectassignments.com/assignment-project-help/law-assignment-help',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <main>
        <PageHero
          eyebrow="LAW ASSIGNMENT & ACADEMIC GUIDANCE"
          title="Law Assignment Help for Legal Research, Case Analysis & Coursework."
          body="Structured academic guidance for law students working on legal essays, case analysis, problem questions, legislation, legal research, jurisprudence, research projects and postgraduate law coursework."
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="LAW ACADEMIC SUPPORT"
              title="Law assignments require more than finding a legal rule."
              body="A strong law assignment usually requires students to identify the relevant legal issues, locate appropriate authorities, understand the applicable principles, apply them to the question and develop a clear, supported argument."
            />

            <div
              className="two-column"
              style={{ marginTop: '42px' }}
            >
              <div>
                <p>
                  Depending on the assessment, this may involve analysing
                  judicial decisions, interpreting legislation, comparing
                  competing legal principles, evaluating academic commentary or
                  applying legal rules to a hypothetical fact pattern.
                </p>

                <p style={{ marginTop: '18px' }}>
                  The challenge is therefore not simply writing paragraphs. A
                  student may need to research primary authorities, understand
                  the hierarchy and relevance of sources, distinguish facts
                  from legal principles and construct an argument that directly
                  responds to the question.
                </p>

                <p style={{ marginTop: '18px' }}>
                  ProjectAssignments provides structured academic guidance
                  around these processes so students can better understand
                  difficult legal coursework and develop their own submissions.
                </p>
              </div>

              <div>
                <p>
                  Law coursework can also differ significantly between
                  <strong> doctrinal research, problem questions, case
                  analysis, critical essays, comparative law and research
                  projects</strong>.
                </p>

                <p style={{ marginTop: '18px' }}>
                  Each format requires a slightly different research and
                  analytical approach. Understanding the assessment type before
                  beginning the research can prevent students from collecting
                  large amounts of material that does not actually answer the
                  question.
                </p>

                <div style={{ marginTop: '24px' }}>
                  <Link
                    href="/assignment-project-help"
                    className="text-link"
                  >
                    Explore all assignment & project help
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="LEGAL ASSIGNMENT TYPES"
              title="What can a law assignment involve?"
              body="Different legal assessments test different skills. Identifying the type of assignment helps determine how the research and analysis should be organised."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '22px',
                marginTop: '42px',
              }}
            >
              {lawAreas.map((area) => (
                <article
                  key={area.title}
                  style={{
                    padding: '28px',
                    border: '1px solid var(--border)',
                    borderRadius: '18px',
                    background: 'var(--background)',
                  }}
                >
                  <div className="icon-box">
                    {area.icon}
                  </div>

                  <h3 style={{ marginTop: '18px' }}>
                    {area.title}
                  </h3>

                  <p style={{ marginTop: '12px' }}>
                    {area.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="LAW COURSEWORK"
              title="Law assignment topics and formats students commonly encounter."
              body="Course terminology varies between universities and jurisdictions, but many law programmes use recurring assessment formats and subject areas."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '12px 36px',
                marginTop: '34px',
              }}
            >
              {assignmentTypes.map((type) => (
                <div
                  key={type}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '10px 0',
                  }}
                >
                  <ShieldCheck
                    size={18}
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      marginTop: '3px',
                      color: 'var(--primary)',
                    }}
                  />

                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="LEGAL PROBLEM QUESTIONS"
              title="How to approach a law problem question."
              body="Problem questions generally require students to apply legal principles to a set of facts rather than simply describe the law."
            />

            <div
              style={{
                maxWidth: '900px',
                margin: '40px auto 0',
              }}
            >
              <div>
                <h3>1. Identify the legal issues</h3>

                <p style={{ marginTop: '10px' }}>
                  Start by separating the factual scenario into distinct legal
                  issues. Not every fact will have the same legal significance,
                  so the assignment question should guide which issues require
                  detailed attention.
                </p>
              </div>

              <div style={{ marginTop: '28px' }}>
                <h3>2. Identify the relevant legal rules</h3>

                <p style={{ marginTop: '10px' }}>
                  Once the issues are clear, identify the relevant legal
                  principles and authorities. Depending on the question, this
                  may include legislation, judicial decisions and other
                  recognised legal sources.
                </p>
              </div>

              <div style={{ marginTop: '28px' }}>
                <h3>3. Apply the law to the facts</h3>

                <p style={{ marginTop: '10px' }}>
                  Application is usually the central analytical stage. Explain
                  how the relevant legal principles interact with the facts
                  rather than simply stating the rule and moving on.
                </p>
              </div>

              <div style={{ marginTop: '28px' }}>
                <h3>4. Consider competing arguments</h3>

                <p style={{ marginTop: '10px' }}>
                  Where the facts or law permit more than one interpretation,
                  acknowledge the competing argument and explain why one
                  interpretation may be stronger based on the available
                  authority and facts.
                </p>
              </div>

              <div style={{ marginTop: '28px' }}>
                <h3>5. Reach a reasoned conclusion</h3>

                <p style={{ marginTop: '10px' }}>
                  The conclusion should follow from the preceding analysis. It
                  should answer the legal issue rather than introducing new
                  arguments that were not discussed earlier.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="CASE LAW ANALYSIS"
              title="How to analyse a legal case for an academic assignment."
              body="Case analysis requires more than summarising what happened in court. The important task is understanding the legal reasoning and its relevance to the assignment."
            />

            <div
              className="two-column"
              style={{ marginTop: '42px' }}
            >
              <div>
                <h3>Start with the legal question</h3>

                <p style={{ marginTop: '12px' }}>
                  Identify the legal issue the court was required to address.
                  This helps distinguish the central legal reasoning from
                  background information that may not be important to the
                  assignment.
                </p>

                <p style={{ marginTop: '18px' }}>
                  The material facts should then be considered in the context
                  of that legal issue.
                </p>
              </div>

              <div>
                <h3>Examine the reasoning</h3>

                <p style={{ marginTop: '12px' }}>
                  Look beyond the outcome. Consider how the court reached its
                  conclusion, which legal principles were applied and how the
                  reasoning relates to other relevant authorities.
                </p>

                <p style={{ marginTop: '18px' }}>
                  This distinction between outcome and reasoning is particularly
                  useful when developing a critical legal analysis.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <Link
                href="/services/research-methodology"
                className="text-link"
              >
                Explore research methodology support
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="LEGAL RESEARCH"
              title="Finding and organising legal authorities."
              body="Effective legal research begins with a focused question and a deliberate search strategy."
            />

            <div
              style={{
                maxWidth: '900px',
                margin: '40px auto 0',
              }}
            >
              <p>
                A broad legal topic can produce a large number of cases,
                statutes, journal articles and commentary. The challenge is
                therefore not simply finding information but identifying the
                authorities that are relevant to the precise legal issue.
              </p>

              <p style={{ marginTop: '18px' }}>
                A useful research process can begin by breaking the assignment
                question into smaller legal concepts. Those concepts can then
                be used to develop search terms and identify relevant primary
                and secondary sources.
              </p>

              <p style={{ marginTop: '18px' }}>
                Once sources have been identified, organise them according to
                the issues they support. This makes it easier to distinguish
                authorities that establish a legal principle from commentary
                that evaluates or criticises that principle.
              </p>

              <div style={{ marginTop: '26px' }}>
                <Link
                  href="/assignment-project-help/research-project-help"
                  className="text-link"
                >
                  Explore research project help
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="LEGAL ESSAYS & CRITICAL ANALYSIS"
              title="A legal essay should develop an argument, not simply describe the law."
              body="Strong academic legal writing generally connects legal authorities with a clear argument and explains why the evidence supports that argument."
            />

            <div
              style={{
                maxWidth: '900px',
                margin: '40px auto 0',
              }}
            >
              <p>
                Describing a legal principle can demonstrate basic
                understanding, but many higher-level assignments require
                critical analysis. That may involve comparing judicial
                reasoning, examining conflicting interpretations, evaluating
                academic commentary or considering whether an established
                principle adequately addresses the issue under discussion.
              </p>

              <p style={{ marginTop: '18px' }}>
                A useful structure is to introduce the issue, establish the
                relevant legal framework, analyse the authorities and then
                develop the critical discussion. The conclusion should bring
                those strands together rather than simply repeat the
                introduction.
              </p>

              <p style={{ marginTop: '18px' }}>
                Where an assignment asks whether a legal rule is effective,
                appropriate, fair or in need of reform, the discussion should
                clearly distinguish established legal principles from academic
                or policy arguments about those principles.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="LAW SUBJECT AREAS"
              title="Academic guidance across major areas of legal study."
              body="The exact content of a law course varies by jurisdiction and institution, but these subject areas commonly involve substantial legal research and analytical coursework."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '22px',
                marginTop: '42px',
              }}
            >
              {lawSubjects.map((subject) => (
                <article
                  key={subject.title}
                  style={{
                    padding: '26px',
                    border: '1px solid var(--border)',
                    borderRadius: '18px',
                    background: 'var(--background)',
                  }}
                >
                  <h3>{subject.title}</h3>

                  <p style={{ marginTop: '12px' }}>
                    {subject.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="LAW RESEARCH PROJECTS"
              title="Support for legal research projects, literature reviews and dissertations."
              body="Larger law projects require a coherent relationship between the research question, legal sources, methodology, analysis and final conclusions."
            />

            <div
              style={{
                maxWidth: '900px',
                margin: '40px auto 0',
              }}
            >
              <p>
                A law research project may begin with a broad legal or policy
                issue and develop into a focused research question. Students
                may then need to establish the relevant legal framework,
                review academic literature, identify important authorities and
                determine an appropriate research approach.
              </p>

              <p style={{ marginTop: '18px' }}>
                Doctrinal legal research may focus primarily on legislation,
                case law and established legal principles. Other projects may
                incorporate comparative, socio-legal, empirical or
                interdisciplinary approaches depending on the research
                question and course requirements.
              </p>

              <p style={{ marginTop: '18px' }}>
                For dissertations and postgraduate projects, keeping the scope
                manageable is particularly important. A focused research
                question usually provides a stronger foundation for selecting
                sources and developing a coherent argument.
              </p>

              <div style={{ marginTop: '26px' }}>
                <Link
                  href="/assignment-project-help/dissertation-project-help"
                  className="text-link"
                >
                  Explore dissertation project help
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="LEGAL ACADEMIC WRITING"
              title="Build law assignments around authority, analysis and clear reasoning."
              body="Academic legal writing becomes easier to follow when the relationship between the legal question, authority and argument is explicit."
            />

            <div
              className="two-column"
              style={{ marginTop: '42px' }}
            >
              <div>
                <h3>Start with the question</h3>

                <p style={{ marginTop: '12px' }}>
                  Identify exactly what the assignment asks you to analyse,
                  evaluate, compare or apply. Avoid allowing interesting
                  background material to take over the discussion.
                </p>
              </div>

              <div>
                <h3>Use relevant authorities</h3>

                <p style={{ marginTop: '12px' }}>
                  Select sources because they help establish or analyse the
                  legal proposition being discussed, rather than simply because
                  they contain keywords related to the topic.
                </p>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h3>Distinguish law from commentary</h3>

                <p style={{ marginTop: '12px' }}>
                  Make clear when you are describing an established legal rule
                  and when you are discussing academic criticism, policy
                  arguments or competing interpretations.
                </p>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h3>Check citations and references</h3>

                <p style={{ marginTop: '12px' }}>
                  Follow the citation and referencing requirements specified by
                  your institution or course and ensure important legal
                  propositions can be traced to appropriate sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="RELATED ACADEMIC SUPPORT"
              title="Explore related ProjectAssignments resources."
              body="Law assignments can overlap with research methodology, academic projects, dissertations and broader research support."
            />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginTop: '34px',
              }}
            >
              <Link
                href="/assignment-project-help/research-project-help"
                className="text-link"
              >
                Research Project Help
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/assignment-project-help/dissertation-project-help"
                className="text-link"
              >
                Dissertation Project Help
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
                href="/services"
                className="text-link"
              >
                Academic & Research Services
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="ACADEMIC INTEGRITY & LEGAL RESPONSIBILITY"
              title="Academic legal research should strengthen your own understanding."
              body="Law students need to understand the reasoning behind legal principles, not simply reproduce a conclusion."
            />

            <div
              style={{
                maxWidth: '900px',
                margin: '36px auto 0',
              }}
            >
              <p>
                Legal education develops skills such as research, interpretation,
                argument, critical analysis and structured reasoning. Academic
                support should therefore help students understand those skills
                and apply them to their own coursework.
              </p>

              <p style={{ marginTop: '18px' }}>
                ProjectAssignments focuses on research guidance, explanation,
                analytical support and feedback. Students remain responsible
                for their own academic submissions and should follow the
                academic-integrity requirements of their institution.
              </p>

              <p style={{ marginTop: '18px' }}>
                This page is intended for academic support. It does not provide
                professional legal advice, representation or advice concerning
                a specific legal dispute or individual legal matter.
              </p>

              <div style={{ marginTop: '26px' }}>
                <Link
                  href="/policies"
                  className="text-link"
                >
                  Read our academic-integrity policies
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="LAW ASSIGNMENT HELP FAQ"
              title="Frequently asked questions."
              body="Common questions about law assignments, legal research, case analysis and academic guidance."
            />

            <div
              style={{
                maxWidth: '900px',
                margin: '38px auto 0',
              }}
            >
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  style={{
                    padding: '24px 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <h3>{faq.question}</h3>

                  <p style={{ marginTop: '10px' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Footer />
    </>
  )
}