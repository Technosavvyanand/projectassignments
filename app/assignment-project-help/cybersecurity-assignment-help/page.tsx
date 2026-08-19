import { CTA, FAQ, Footer, SectionHeading } from '@/components/site'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Cybersecurity Assignment Help | Academic Project Guidance',
  description:
    'Get structured academic guidance for cybersecurity assignments and projects, including security assessment, risk analysis, vulnerability research, technical documentation and security frameworks.',
  alternates: {
    canonical: '/assignment-project-help/cybersecurity-assignment-help',
  },
}

const projectAreas = [
  {
    title: 'Cybersecurity Risk & Threat Analysis',
    body: 'Understand how to identify assets, threats, vulnerabilities and risks, and develop a structured approach to analysing security problems.',
  },
  {
    title: 'Security Assessment Projects',
    body: 'Guidance with security assessment methodologies, evidence gathering, findings analysis and communicating technical results clearly.',
  },
  {
    title: 'Vulnerability Analysis',
    body: 'Work through vulnerability identification, classification, severity assessment and responsible interpretation of technical findings.',
  },
  {
    title: 'Network & System Security',
    body: 'Build a stronger understanding of network security concepts, system controls, security architecture and common defensive approaches.',
  },
  {
    title: 'Security Frameworks & Governance',
    body: 'Explore how cybersecurity frameworks, policies, controls and governance principles can be applied to academic case studies and projects.',
  },
  {
    title: 'Incident Response & Security Operations',
    body: 'Understand incident response processes, investigation concepts, evidence, containment, recovery and lessons learned.',
  },
  {
    title: 'Cybersecurity Research Projects',
    body: 'Develop a clear research question, methodology, evidence base and analytical structure for cybersecurity research and postgraduate projects.',
  },
  {
    title: 'Technical Security Reports',
    body: 'Strengthen the structure and clarity of technical reports, including methodology, evidence, findings, recommendations and limitations.',
  },
]

const supportPoints = [
  'Understanding the assignment brief and assessment requirements',
  'Breaking complex cybersecurity problems into manageable stages',
  'Selecting appropriate research and assessment approaches',
  'Interpreting technical findings and security evidence',
  'Understanding cybersecurity frameworks and controls',
  'Structuring technical reports and academic discussions',
  'Reviewing methodology, reasoning and presentation',
  'Developing confidence to complete and explain your own work',
]

const faqs = [
  {
    question: 'What cybersecurity assignments can you get help with?',
    answer:
      'We provide academic guidance across areas such as cybersecurity risk and threat analysis, vulnerability assessment, network and system security, security frameworks, incident response, research projects and technical security reports.',
  },
  {
    question: 'Can you help with a cybersecurity project from the beginning?',
    answer:
      'Yes. Support can begin with understanding the brief and defining the project scope, followed by research planning, technical analysis, documentation and review.',
  },
  {
    question: 'Can you help me understand cybersecurity tools and technical findings?',
    answer:
      'Yes. Guidance can help you understand the purpose of relevant tools, interpret results and connect technical findings with the requirements of your academic project.',
  },
  {
    question: 'Do you provide completed cybersecurity assignments for submission?',
    answer:
      'Our approach is centred on academic guidance, explanation, research support and review rather than completing assessed work for submission on a student’s behalf. The aim is to keep the student involved in understanding and producing their own work.',
  },
  {
    question: 'Can you help with cybersecurity dissertations and research projects?',
    answer:
      'Yes. We can provide structured guidance around research questions, methodology, literature review, technical analysis, findings, discussion and academic presentation.',
  },
]

export default function CybersecurityAssignmentHelpPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                CYBERSECURITY • SECURITY PROJECTS • ACADEMIC GUIDANCE
              </p>

              <h1>
                Cybersecurity Assignment Help That Starts With
                <em> Understanding the Security Problem</em>
              </h1>

              <p className="hero-subtitle">
                Cybersecurity assignments often combine technical analysis,
                research, evidence and academic reasoning. We provide structured
                guidance to help students understand the security problem,
                analyse it systematically and develop their own work with
                greater confidence.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="button button-primary">
                  Discuss Your Requirements <ArrowRight size={17} />
                </Link>

                <Link
                  href="/assignment-project-help"
                  className="button button-ghost"
                >
                  Explore Assignment Help <ArrowRight size={17} />
                </Link>
              </div>

              <div className="hero-proof">
                <span>
                  <CheckCircle2 size={16} /> Structured guidance
                </span>
                <span>
                  <CheckCircle2 size={16} /> Technical understanding
                </span>
                <span>
                  <CheckCircle2 size={16} /> Academic responsibility
                </span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                <Image
                  src="/images/cybersecurity-project-workflow.png"
                  alt="Cybersecurity project workflow from understanding the brief and identifying risks through security assessment, analysis, controls, documentation and review"
                  width={1800}
                  height={1200}
                  priority
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>

            <p className="hero-supporting-text">
              Supporting students with cybersecurity assignments, security
              assessments, technical reports, research projects and
              postgraduate cybersecurity work.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="More than technical terminology"
              title="Cybersecurity assignments require both technical thinking and academic reasoning."
              body="A strong cybersecurity project is rarely just about identifying a vulnerability or describing a security control. Students often need to understand the problem, justify their approach, interpret evidence, connect findings to established frameworks and communicate the outcome clearly."
            />

            <div className="two-column">
              <div>
                <p>
                  That combination can make cybersecurity assignments
                  particularly challenging. A technically correct observation
                  still needs to be explained in the context of the assignment
                  question, supported by appropriate evidence and presented in
                  a way that demonstrates understanding.
                </p>

                <p>
                  Our role is to provide structured academic and technical
                  guidance throughout that process — helping you understand
                  what the brief is asking, how the different pieces fit
                  together and how to approach the work responsibly.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck size={28} />
                  <h3>What good cybersecurity work demonstrates</h3>
                </div>

                <ul className="space-y-3">
                  {[
                    'Clear understanding of the security problem',
                    'Logical and defensible methodology',
                    'Appropriate use of evidence',
                    'Meaningful analysis rather than description',
                    'Practical and justified recommendations',
                    'Clear technical documentation',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project areas */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Cybersecurity project areas"
              title="Support across the technical and analytical side of cybersecurity."
              body="Different modules and universities use different terminology, but the underlying skills often overlap. These are some of the areas where structured guidance can be useful."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {projectAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-3 text-lg font-semibold">
                    {area.title}
                  </h3>
                  <p>{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="A structured approach"
              title="From the project brief to a clearly documented security analysis."
              body="Cybersecurity projects become easier to manage when the work is broken into logical stages. Our guidance follows the underlying workflow rather than jumping directly to an answer."
              align="center"
            />

            <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Image
                src="/images/cybersecurity-project-workflow.png"
                alt="Seven-stage cybersecurity project workflow covering the brief, assets and risks, security assessment, findings analysis, controls, documentation and review"
                width={1800}
                height={1200}
                className="h-auto w-full"
              />
            </div>

            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p>
                The objective is not simply to move from one task to another.
                Each stage should contribute to the reasoning behind the final
                project and help you understand why the chosen approach makes
                sense.
              </p>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="section">
          <div className="container two-column">
            <div>
              <SectionHeading
                eyebrow="Where academic guidance helps"
                title="Turn a complicated security brief into a manageable project."
                body="You may already understand some of the technical concepts but still be unsure about the structure, methodology, evidence or academic expectations. That is where focused guidance can make the process clearer."
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <ul className="space-y-4">
                {supportPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Service bridge */}
        <section className="section section-tint">
          <div className="container">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
              <p className="eyebrow">GO DEEPER INTO CYBERSECURITY</p>

              <h2>
                Looking beyond the assignment itself?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl">
                If you are looking for a broader overview of our cybersecurity
                expertise, methodologies and technical capabilities, explore
                our dedicated cybersecurity service page.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/services/cybersecurity"
                  className="button button-primary"
                >
                  Explore Cybersecurity Services <ArrowRight size={17} />
                </Link>

                <Link
                  href="/assignment-project-help"
                  className="button button-ghost"
                >
                  Back to Assignment & Project Help <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Academic responsibility */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Academic responsibility"
              title="The goal is understanding, not simply producing an answer."
              body="Academic support should help students develop the knowledge and reasoning needed to complete and explain their own work. We focus on guidance, explanation, research support and constructive review while keeping academic integrity at the centre."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 p-6">
                <h3>Understand</h3>
                <p>
                  Break down unfamiliar cybersecurity concepts and connect
                  technical ideas to the requirements of the assignment.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6">
                <h3>Analyse</h3>
                <p>
                  Work through evidence, methodology, findings and reasoning
                  so that the technical analysis has a clear academic purpose.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6">
                <h3>Develop</h3>
                <p>
                  Use the guidance to strengthen your own work, documentation
                  and confidence in explaining the final outcome.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="Related academic support"
              title="Explore other assignment and project areas."
              align="center"
            />

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/assignment-project-help/programming-assignment-help"
                className="button button-ghost"
              >
                Programming Assignment Help <ArrowRight size={15} />
              </Link>

              <Link
                href="/assignment-project-help/database-assignment-help"
                className="button button-ghost"
              >
                Database & SQL Projects <ArrowRight size={15} />
              </Link>

              <Link
                href="/assignment-project-help"
                className="button button-ghost"
              >
                All Assignment & Project Help <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container faq-layout">
            <SectionHeading
              eyebrow="Cybersecurity assignment questions"
              title="A little more clarity."
              body="Here are some common questions students have before starting a cybersecurity assignment or project."
            />

            <FAQ items={faqs} />
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  )
}