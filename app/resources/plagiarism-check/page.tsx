import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  GraduationCap,
  Info,
  Link2,
  Search,
  ShieldCheck,
  Stethoscope,
  Scale,
  BriefcaseBusiness,
  Code2,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react'
import { Footer } from '@/components/site'

export const metadata: Metadata = {
  title:
    'Plagiarism Check & Similarity Guide | Turnitin, Free & Paid Plagiarism Checkers',
  description:
    'Detailed guide to plagiarism, similarity reports, Turnitin checks, free and paid plagiarism checkers, academic integrity, citation, paraphrasing and ethical ways to reduce inappropriate similarity in assignments, dissertations and research papers.',
  keywords: [
    'plagiarism check',
    'plagiarism checker',
    'plagiarism checker online',
    'free plagiarism checker',
    'paid plagiarism checker',
    'plagiarism detection',
    'plagiarism detection software',
    'similarity check',
    'similarity report',
    'similarity score',
    'Turnitin',
    'Turnitin check',
    'Turnitin plagiarism check',
    'Turnitin similarity check',
    'Turnitin similarity report',
    'Turnitin similarity score',
    'Turnitin report',
    'how Turnitin works',
    'Turnitin assignment check',
    'plagiarism free assignment help',
    'plagiarism free assignment',
    'remove similarity',
    'reduce similarity',
    'reduce plagiarism',
    'remove plagiarism from assignment',
    'fix plagiarism',
    'assignment similarity check',
    'essay plagiarism checker',
    'research paper plagiarism checker',
    'dissertation plagiarism check',
    'thesis plagiarism check',
    'academic plagiarism checker',
    'academic integrity',
    'unintentional plagiarism',
    'self plagiarism',
    'duplicate content checker',
    'citation checker',
    'paraphrasing and plagiarism',
    'APA plagiarism check',
    'Harvard plagiarism check',
    'IEEE plagiarism check',
    'medical assignment plagiarism check',
    'nursing assignment plagiarism check',
    'law assignment plagiarism check',
    'legal writing plagiarism check',
    'MBA assignment plagiarism check',
    'DBA thesis plagiarism check',
    'technical assignment plagiarism check',
    'programming assignment plagiarism',
    'technical report similarity check',
  ],
  alternates: {
    canonical: 'https://projectassignments.com/resources/plagiarism-check',
  },
  openGraph: {
    title:
      'Plagiarism Check & Similarity Guide | Turnitin and Plagiarism Checkers',
    description:
      'Understand plagiarism, similarity scores, Turnitin reports and ethical ways to identify and correct problematic overlap before submitting academic work.',
    url: 'https://projectassignments.com/resources/plagiarism-check',
    type: 'article',
  },
}

const tools = [
  {
    name: 'Turnitin',
    type: 'Institutional / academic',
    access: 'Usually provided through a school, college or university',
    best: 'Formal academic similarity checking and institutional workflows',
    note: 'Turnitin states that Similarity Reports identify matching text; they do not by themselves determine plagiarism.',
  },
  {
    name: 'Scribbr Plagiarism Checker',
    type: 'Paid / individual',
    access: 'Individual document checking',
    best: 'Students who want a detailed similarity report before submission',
    note: 'Scribbr describes its checker as comparing documents against large collections of online and academic sources.',
  },
  {
    name: 'Grammarly Plagiarism Checker',
    type: 'Paid / product dependent',
    access: 'Available in supported Grammarly offerings',
    best: 'Plagiarism checking alongside writing and citation support',
    note: 'Grammarly says its checker compares writing with web pages and academic databases and provides citation suggestions.',
  },
  {
    name: 'Quetext',
    type: 'Free + paid',
    access: 'Online individual access',
    best: 'Quick originality checks and source identification',
    note: 'Quetext currently offers a limited free checker and paid plans with larger word allowances and additional features.',
  },
  {
    name: 'Copyleaks',
    type: 'Free trial / paid',
    access: 'Online, education and API workflows',
    best: 'Broader originality workflows, including paraphrase and code-related checks',
    note: 'Copyleaks describes its checker as detecting duplicate content, paraphrasing and source-code infringement among other patterns.',
  },
]

const faq = [
  [
    'Is a high similarity score automatically plagiarism?',
    'No. A similarity score is a measure of matching text, not a final finding of plagiarism. Proper quotations, references, assignment templates, common phrases and correctly cited material can create legitimate matches. The context and attribution still need to be reviewed.',
  ],
  [
    'Does Turnitin check for plagiarism?',
    'Turnitin describes its product as similarity checking. It compares submitted text with sources in its configured databases and highlights matching material. Whether a match constitutes plagiarism is a judgment that depends on context, citation, authorship and institutional policy.',
  ],
  [
    'Can I buy Turnitin directly as an individual student?',
    'Turnitin states that Feedback Studio and Similarity subscriptions are not sold directly to individuals. Students generally access Turnitin through an institution that licenses the service. Turnitin points individuals who need personal similarity checking toward iThenticate instead.',
  ],
  [
    'How can I reduce similarity in an assignment?',
    'Review every meaningful match, identify whether it is a quotation, common wording, source-derived idea or incorrectly paraphrased passage, then improve the citation, quotation or original explanation. The objective should be accurate attribution and genuinely independent writing rather than simply forcing a percentage downward.',
  ],
  [
    'Is 0% similarity the goal?',
    'Not necessarily. Academic writing legitimately uses terminology, source titles, quotations, references and standard technical language. A zero score is not a universal requirement and a low score does not prove that a paper is academically sound.',
  ],
  [
    'Can plagiarism checkers detect every form of plagiarism?',
    'No automated checker should be treated as a complete plagiarism judge. Detection depends on the sources available to the service, the wording used, the type of plagiarism and the settings applied. Human review, source checking and correct citation remain important.',
  ],
]

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="pc-stat">
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  )
}

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  return (
    <article className="pc-tool-card">
      <div className="pc-tool-topline">
        <span className="pc-tool-icon"><FileCheck2 size={19} /></span>
        <span className="pc-tool-type">{tool.type}</span>
      </div>
      <h3>{tool.name}</h3>
      <p className="pc-tool-best"><strong>Useful for:</strong> {tool.best}</p>
      <p>{tool.access}</p>
      <p className="pc-tool-note">{tool.note}</p>
    </article>
  )
}

export default function PlagiarismCheckPage() {
  return (
    <>
      <main className="plagiarism-page">
        <section className="pc-hero">
          <div className="container pc-hero-inner">
            <div className="pc-hero-copy">
              <p className="eyebrow">Academic integrity • Similarity • Originality</p>
              <h1>Plagiarism Check, Similarity Reports &amp; Turnitin: A Complete Academic Guide</h1>
              <p className="pc-hero-lead">
                Understand plagiarism, similarity checking, Turnitin reports, free and paid plagiarism checkers, citation problems and practical ways to correct problematic overlap before submitting an assignment, dissertation, thesis or research paper.
              </p>
              <div className="pc-hero-actions">
                <a href="#turnitin" className="button button-primary">Understand Turnitin <ArrowRight size={16} /></a>
                <a href="#tools" className="button button-secondary">Compare Plagiarism Checkers <ChevronRight size={16} /></a>
              </div>
              <div className="pc-hero-note">
                <Info size={17} />
                <span>There is no universal “safe” similarity percentage. Your institution, assignment settings, citation style and the nature of each match matter.</span>
              </div>
            </div>

            <div className="pc-hero-panel" aria-label="Plagiarism and similarity overview">
              <div className="pc-scan-ring"><Search size={30} /></div>
              <div className="pc-panel-line"><span>Original writing</span><b>Review</b></div>
              <div className="pc-panel-line"><span>Source matches</span><b>Context</b></div>
              <div className="pc-panel-line"><span>Citations</span><b>Verify</b></div>
              <div className="pc-panel-line"><span>Similarity</span><b>Interpret</b></div>
              <div className="pc-panel-footer">CHECK → INTERPRET → CORRECT → CITE</div>
            </div>
          </div>
        </section>

        <section className="pc-stat-strip">
          <div className="container pc-stat-grid">
            <Stat number="01" label="Similarity is not the same as plagiarism" />
            <Stat number="02" label="Turnitin highlights matches for review" />
            <Stat number="03" label="Citation and paraphrasing are central" />
            <Stat number="04" label="A lower score is not automatically better" />
          </div>
        </section>

        <section className="section pc-section" id="what-is-plagiarism">
          <div className="container pc-narrow">
            <p className="eyebrow">01 • Foundations</p>
            <h2>What is plagiarism?</h2>
            <p>
              Plagiarism is the use of another person’s words, ideas, structure, evidence, creative work or other intellectual contribution without appropriate acknowledgement. In academic writing, the problem is not simply that two pieces of text look alike. The important questions are where the material came from, how it was used, whether the source was acknowledged, whether quotation or paraphrasing conventions were followed, and whether the submission represents the student’s own work.
            </p>
            <p>
              Plagiarism can be intentional, such as copying passages and presenting them as original, but it can also be unintentional. Weak note-taking, missing citations, patchwriting, careless paraphrasing, copied technical definitions and reusing an earlier assignment without disclosure can all create academic-integrity problems.
            </p>
            <div className="pc-callout">
              <ShieldCheck size={22} />
              <div>
                <strong>The purpose of a plagiarism check is prevention and review.</strong>
                <span>A checker should help you locate material that needs attribution, quotation, better paraphrasing or further investigation. It should not be treated as a machine that declares a student guilty or innocent.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section pc-tint-section" id="similarity-vs-plagiarism">
          <div className="container">
            <div className="pc-section-heading">
              <p className="eyebrow">02 • The distinction matters</p>
              <h2>Similarity is not plagiarism</h2>
              <p>One of the most important ideas in academic integrity is the difference between a text match and an academic-integrity violation.</p>
            </div>
            <div className="pc-comparison">
              <div className="pc-comparison-card">
                <span className="pc-badge">Similarity</span>
                <h3>A textual match</h3>
                <p>A checker finds wording that resembles or matches material in its searchable sources.</p>
                <ul>
                  <li>Can include correctly cited quotations</li>
                  <li>Can include references and bibliography entries</li>
                  <li>Can include common technical language</li>
                  <li>Can include assignment templates or standard wording</li>
                </ul>
              </div>
              <div className="pc-comparison-card pc-comparison-accent">
                <span className="pc-badge">Plagiarism</span>
                <h3>An attribution problem</h3>
                <p>A person presents another person’s work or ideas as their own, contrary to the applicable academic rules.</p>
                <ul>
                  <li>Requires contextual review</li>
                  <li>May involve poor or missing citation</li>
                  <li>Can occur even when similarity is low</li>
                  <li>Is not determined by a percentage alone</li>
                </ul>
              </div>
            </div>
            <p className="pc-source-note">Turnitin explicitly explains that its Similarity Report highlights matching content and that educators must consider context when determining whether plagiarism has occurred.</p>
          </div>
        </section>

        <section className="section pc-section" id="why-check">
          <div className="container">
            <div className="pc-section-heading">
              <p className="eyebrow">03 • Why it matters</p>
              <h2>Why should students perform a plagiarism check?</h2>
              <p>A final originality review is useful because students can discover citation and paraphrasing problems before submission rather than after an assessment is marked.</p>
            </div>
            <div className="pc-grid-3">
              <article><BookOpen /><h3>Improve source use</h3><p>Identify places where an argument depends too closely on source wording and rewrite the explanation in your own analytical voice.</p></article>
              <article><Link2 /><h3>Verify citations</h3><p>Use matching sources as a prompt to confirm that every borrowed idea, quotation, statistic and distinctive claim has appropriate attribution.</p></article>
              <article><GraduationCap /><h3>Protect academic integrity</h3><p>A pre-submission plagiarism check can reveal accidental copying, weak paraphrasing and self-reuse before the work reaches formal assessment.</p></article>
            </div>
          </div>
        </section>

        <section className="section pc-dark-section" id="types">
          <div className="container">
            <div className="pc-section-heading pc-light-heading">
              <p className="eyebrow">04 • Common forms</p>
              <h2>Types of plagiarism students should understand</h2>
            </div>
            <div className="pc-type-grid">
              {[
                ['Direct plagiarism', 'Copying another source word-for-word without quotation marks and appropriate citation.'],
                ['Mosaic / patchwriting', 'Keeping source wording or sentence structure while changing only a few words without sufficiently independent paraphrasing.'],
                ['Poor paraphrasing', 'Changing wording but retaining the source structure or ideas without giving the source appropriate credit.'],
                ['Self-plagiarism', 'Reusing substantial material from your own earlier work without the disclosure or permission required by your institution.'],
                ['Citation plagiarism', 'Using another source’s ideas, evidence or distinctive wording without an adequate in-text citation or reference.'],
                ['Source fabrication', 'Inventing references, sources, quotations, data or attribution. This is an academic-integrity issue even when no text has been copied.'],
                ['Collusion-related copying', 'Using another student’s work or submitting collaborative material where individual work is required.'],
                ['Translation plagiarism', 'Translating source material into another language and presenting it as original without attribution.'],
              ].map(([title, text]) => (
                <article key={title}>
                  <span className="pc-type-number">{title === 'Direct plagiarism' ? '01' : title === 'Mosaic / patchwriting' ? '02' : title === 'Poor paraphrasing' ? '03' : title === 'Self-plagiarism' ? '04' : title === 'Citation plagiarism' ? '05' : title === 'Source fabrication' ? '06' : title === 'Collusion-related copying' ? '07' : '08'}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pc-section" id="turnitin">
          <div className="container">
            <div className="pc-section-heading">
              <p className="eyebrow">05 • Major academic platform</p>
              <h2>Turnitin: what students need to know about a Turnitin check</h2>
              <p>Turnitin is one of the most recognised academic similarity-checking platforms. It is widely encountered in university assignments, dissertations and other formal assessment workflows.</p>
            </div>

            <div className="pc-turnitin-intro">
              <div>
                <h3>Turnitin is a similarity system, not a plagiarism verdict</h3>
                <p>
                  Turnitin compares submitted writing with material in the repositories selected for the assignment. Its Similarity Report then highlights matching text and identifies sources. The percentage represents the amount of matching text found in the configured comparison set; it does not by itself establish that a student plagiarised.
                </p>
                <p>
                  This distinction is particularly important when students search for terms such as <strong>Turnitin check</strong>, <strong>Turnitin plagiarism check</strong>, <strong>Turnitin similarity report</strong> or <strong>Turnitin similarity score</strong>. The useful question is not simply “What number did I get?” but “What are the matches, why did they occur, and have I attributed the underlying material correctly?”
                </p>
              </div>
              <div className="pc-turnitin-facts">
                <div><strong>Matches</strong><span>Highlighted source overlaps</span></div>
                <div><strong>Sources</strong><span>Locations associated with matches</span></div>
                <div><strong>Score</strong><span>Overall percentage of matching text</span></div>
                <div><strong>Review</strong><span>Human interpretation remains essential</span></div>
              </div>
            </div>

            <div className="pc-subsection" id="turnitin-database">
              <h3>What does Turnitin compare against?</h3>
              <p>Turnitin describes its comparison environment as including internet content, student submissions and academic publications, depending on the product, license and assignment configuration. Its current Similarity product describes a repository containing student papers, current and archived web pages and premium subscription articles from publishers.</p>
              <p>This is one reason a generic free plagiarism checker cannot be assumed to reproduce the exact result of a university’s Turnitin check. Different services have different databases, indexing rules, exclusion settings, matching technology and access to proprietary content.</p>
            </div>

            <div className="pc-subsection" id="turnitin-score">
              <h3>How should a Turnitin similarity score be interpreted?</h3>
              <div className="pc-score-grid">
                <div><strong>Low similarity</strong><p>May indicate limited matching text, but it does not prove originality. A paper can still contain uncited ideas or other integrity problems.</p></div>
                <div><strong>Moderate similarity</strong><p>May contain a mixture of legitimate quotations, citations, common wording and passages that deserve closer review.</p></div>
                <div><strong>High similarity</strong><p>Should prompt careful inspection of the highlighted sources. It can arise from legitimate quoted or template material, but it can also reveal weak paraphrasing or missing attribution.</p></div>
                <div><strong>Any score</strong><p>The actual passages and sources matter more than a number viewed in isolation.</p></div>
              </div>
              <div className="pc-warning"><AlertTriangle size={20} /><span>Do not promise a student that a specific percentage is universally “safe”. Assignment settings and institutional policies differ.</span></div>
            </div>

            <div className="pc-subsection" id="turnitin-filters">
              <h3>Turnitin filters and exclusions</h3>
              <p>Turnitin provides filters and exclusions that can help users focus on meaningful matches. Depending on the report and assignment settings, exclusions can include bibliography material, quotations, cited material and small matches. These controls refine how the report is displayed or calculated; they do not rewrite the submitted work.</p>
              <p>Students should also understand that temporary exclusions in a student view may not change the official similarity score seen by an instructor. The assignment’s settings and the institution’s workflow determine how the official report is handled.</p>
            </div>

            <div className="pc-subsection" id="turnitin-access">
              <h3>Can an individual student buy Turnitin?</h3>
              <p>Turnitin currently states that Feedback Studio and Similarity subscriptions are designed for institutions rather than direct individual purchase. Students normally access Turnitin through their school, college or university if the institution has a license. Turnitin separately points individual users toward iThenticate for personal similarity-checking needs.</p>
            </div>
          </div>
        </section>

        <section className="section pc-tint-section" id="turnitin-workflow">
          <div className="container">
            <div className="pc-section-heading">
              <p className="eyebrow">06 • Practical workflow</p>
              <h2>How to use a Turnitin report properly</h2>
            </div>
            <div className="pc-workflow">
              {[
                ['01', 'Read the assignment brief', 'Understand whether the assignment requires individual work, particular sources, quotations, a specific referencing style or a defined report structure.'],
                ['02', 'Review the overall similarity', 'Use the percentage as a starting signal, not as a final judgment about your work.'],
                ['03', 'Open the matched sources', 'Inspect the actual highlighted passages. Ask whether the match is a quotation, reference, common phrase, template, technical definition or substantive source-derived writing.'],
                ['04', 'Check attribution', 'Confirm that source-derived ideas and wording have been cited correctly according to the required style.'],
                ['05', 'Improve weak paraphrasing', 'If a paragraph follows the source too closely, return to the source, understand the idea, close it, and write an independent explanation before adding the citation.'],
                ['06', 'Run a final review', 'Check citations, reference list entries, quotations, paraphrasing, figures, tables and reused material before submission.'],
              ].map(([num, title, text]) => (
                <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pc-section" id="remove-similarity">
          <div className="container pc-narrow">
            <p className="eyebrow">07 • Fixing problems ethically</p>
            <h2>How to reduce or remove inappropriate similarity</h2>
            <p>
              Students often search for phrases such as <strong>remove similarity</strong>, <strong>reduce similarity</strong>, <strong>remove plagiarism from assignment</strong> or <strong>plagiarism free assignment help</strong>. These phrases can describe a legitimate need: a student may have identified copied wording, weak paraphrasing or missing citations and wants to correct it before submission.
            </p>
            <p>
              The ethical objective is not to manipulate a detector. The objective is to make the academic work genuinely attributable, independently expressed and correctly referenced. Avoid changing words mechanically simply to defeat a similarity checker. That can produce awkward writing, preserve the original structure and fail to address the underlying academic problem.
            </p>
            <div className="pc-fix-list">
              {[
                ['Replace copied wording with genuine explanation', 'Read the source, understand the concept, then explain it in your own structure and analytical voice.'],
                ['Use quotations when exact wording matters', 'Short quotations can be appropriate when the precise wording is important, provided the required citation and quotation format are used.'],
                ['Cite ideas as well as words', 'Paraphrasing a source does not remove the need to acknowledge the source.'],
                ['Correct incomplete references', 'Make sure in-text citations and the reference list correspond and follow the assignment’s required style.'],
                ['Separate your analysis from source material', 'After presenting evidence, explain what it means for your research question rather than allowing source text to become the argument.'],
                ['Review self-reuse', 'If you have reused earlier assignments, reports or dissertation material, check your institution’s rules and disclose or cite the earlier work where required.'],
              ].map(([title, text]) => <div key={title}><CheckCircle2 size={20} /><span><strong>{title}</strong>{text}</span></div>)}
            </div>
          </div>
        </section>

        <section className="section pc-dark-section" id="academic-work">
          <div className="container">
            <div className="pc-section-heading pc-light-heading">
              <p className="eyebrow">08 • By discipline</p>
              <h2>Plagiarism checking for different academic fields</h2>
              <p>Different disciplines have different conventions for quotations, terminology, evidence, legal authorities, clinical literature and technical documentation.</p>
            </div>
            <div className="pc-discipline-grid">
              <article><Code2 /><h3>IT, computing &amp; technical assignments</h3><p>Technical reports often contain standard definitions, API names, protocol terminology, code snippets and documentation language. Similarity should be interpreted alongside correct citation and the distinction between standard technical terminology and copied explanatory prose.</p><Link href="/assignment-project-help/programming-assignment-help">Programming assignment help <ArrowRight size={14} /></Link></article>
              <article><Stethoscope /><h3>Medical, nursing &amp; health sciences</h3><p>Medical assignments frequently rely on clinical guidelines, published research, diagnostic terminology and evidence-based definitions. Use the required citation style and clearly distinguish evidence from your own clinical or analytical discussion.</p><Link href="/assignment-project-help/nursing-assignment-help">Nursing assignment help <ArrowRight size={14} /></Link></article>
              <article><Scale /><h3>Law &amp; legal writing</h3><p>Legal assignments may quote legislation, judgments, regulations and legal commentary. The correct legal citation system matters, and a match to a statute or judgment is not automatically plagiarism. Check the required legal referencing rules carefully.</p><Link href="/assignment-project-help/law-assignment-help">Law assignment help <ArrowRight size={14} /></Link></article>
              <article><BriefcaseBusiness /><h3>Management, MBA &amp; DBA research</h3><p>Management research commonly synthesises journal literature, business reports, models, strategy frameworks and organisational evidence. Strong paraphrasing and consistent author-date citation help distinguish your analysis from the literature.</p><Link href="/assignment-project-help/management-assignment-help">Management assignment help <ArrowRight size={14} /></Link></article>
            </div>
          </div>
        </section>

        <section className="section pc-section" id="referencing">
          <div className="container">
            <div className="pc-section-heading">
              <p className="eyebrow">09 • Citation is the foundation</p>
              <h2>Plagiarism prevention starts with good referencing</h2>
              <p>A similarity report often sends students back to the same fundamental question: “Have I clearly acknowledged where this material came from?”</p>
            </div>
            <div className="pc-reference-grid">
              <Link href="/resources/referencing-styles"><BookOpen /><strong>Referencing Styles Guide</strong><span>Harvard, APA 7, IEEE, MLA, Chicago, Vancouver, OSCOLA and other major styles.</span><ArrowRight size={16} /></Link>
              <Link href="/services/research-methodology"><BookOpen /><strong>Research Methodology</strong><span>Research design, literature review, methodology and evidence-based academic work.</span><ArrowRight size={16} /></Link>
              <Link href="/assignment-project-help/research-project-help"><GraduationCap /><strong>Research Project Help</strong><span>Planning and understanding research projects while keeping authorship and academic integrity central.</span><ArrowRight size={16} /></Link>
              <Link href="/assignment-project-help/dissertation-project-help"><FileCheck2 /><strong>Dissertation Project Help</strong><span>Support for structure, research direction, evidence and academic presentation.</span><ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="section pc-tint-section" id="tools">
          <div className="container">
            <div className="pc-section-heading">
              <p className="eyebrow">10 • Online tools</p>
              <h2>Free and paid plagiarism checker tools</h2>
              <p>Online plagiarism checkers are useful for different purposes. A free web checker may be useful for a quick draft review, while a paid or institutional service may provide broader databases, deeper reporting or academic-specific workflows.</p>
            </div>
            <div className="pc-tool-grid">
              {tools.map((tool) => <ToolCard key={tool.name} tool={tool} />)}
            </div>
            <div className="pc-tool-disclaimer">
              <AlertTriangle size={19} />
              <p>No third-party checker should be assumed to produce the same result as your university’s system. Database coverage, indexing, settings and matching methods differ.</p>
            </div>
          </div>
        </section>

        <section className="section pc-section" id="free-tools">
          <div className="container">
            <div className="pc-section-heading">
              <p className="eyebrow">11 • Free checks</p>
              <h2>What to expect from a free plagiarism checker</h2>
            </div>
            <div className="pc-free-grid">
              <article><span>01</span><h3>Useful for early drafts</h3><p>A free plagiarism detector can help you identify obvious web matches, copied phrases and citation problems while drafting.</p></article>
              <article><span>02</span><h3>Often has limits</h3><p>Free services may limit word counts, reports, advanced source coverage or the number of scans available.</p></article>
              <article><span>03</span><h3>Not a Turnitin replacement</h3><p>A free plagiarism checker generally cannot reproduce the exact institutional Turnitin environment used by your university.</p></article>
              <article><span>04</span><h3>Check privacy first</h3><p>Before uploading unpublished research, dissertation chapters or sensitive documents, read the provider’s current privacy and document-retention information.</p></article>
            </div>
          </div>
        </section>

        <section className="section pc-section" id="paid-tools">
          <div className="container">
            <div className="pc-section-heading">
              <p className="eyebrow">12 • Paid options</p>
              <h2>When a paid plagiarism checker may be useful</h2>
            </div>
            <div className="pc-paid-list">
              <div><strong>Detailed source reports</strong><span>Useful when you need to inspect individual matches and trace them back to sources.</span></div>
              <div><strong>Larger document limits</strong><span>Helpful for dissertations, theses, long research papers and technical reports.</span></div>
              <div><strong>Academic databases</strong><span>Some services provide access to collections that are broader than a simple public-web search.</span></div>
              <div><strong>Citation support</strong><span>Some tools combine similarity checking with citation suggestions or reference-management features.</span></div>
              <div><strong>Self-plagiarism review</strong><span>Some services allow you to compare your current work against your own earlier documents.</span></div>
            </div>
          </div>
        </section>

        <section className="section pc-dark-section" id="what-checkers-miss">
          <div className="container">
            <div className="pc-section-heading pc-light-heading">
              <p className="eyebrow">13 • Limitations</p>
              <h2>What plagiarism checkers can and cannot tell you</h2>
            </div>
            <div className="pc-can-grid">
              <div><h3>They can help identify</h3><ul><li>Text that resembles indexed sources</li><li>Potentially copied passages</li><li>Possible citation gaps</li><li>Source matches requiring review</li><li>Some forms of paraphrased overlap, depending on the system</li></ul></div>
              <div><h3>They cannot replace</h3><ul><li>Reading and understanding the source</li><li>Academic judgment</li><li>Correct citation decisions</li><li>Institutional academic-integrity policies</li><li>Your responsibility for authorship and evidence</li></ul></div>
            </div>
          </div>
        </section>

        <section className="section pc-section" id="submission-checklist">
          <div className="container">
            <div className="pc-section-heading">
              <p className="eyebrow">14 • Final review</p>
              <h2>Plagiarism and similarity checklist before assignment submission</h2>
            </div>
            <div className="pc-checklist">
              {[
                'I understand the referencing style required by my institution or assignment brief.',
                'Every quotation is clearly marked and appropriately cited.',
                'Paraphrased ideas are written independently and still acknowledge their sources.',
                'In-text citations correspond to entries in the reference list where required.',
                'I have checked reused material from my own previous assignments.',
                'I have reviewed figures, tables, diagrams, images and code for attribution requirements.',
                'I have inspected important similarity matches rather than focusing only on the percentage.',
                'I have not used a paraphrasing or rewriting tool simply to disguise copied wording.',
                'I have checked my institution’s academic-integrity policy before submitting.',
                'My final work reflects my own analysis, interpretation and authorship within the rules of my course.',
              ].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><CheckCircle2 size={19} /><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section pc-section" id="plagiarism-free-assignment-help">
          <div className="container pc-narrow">
            <p className="eyebrow">15 • Ethical academic support</p>
            <h2>What does “plagiarism-free assignment help” actually mean?</h2>
            <p>
              The phrase <strong>plagiarism free assignment help</strong> is widely searched by students who want confidence that an assignment does not contain accidental copying. It should not mean a promise of a particular similarity percentage or a guarantee that an automated detector will produce zero matches.
            </p>
            <p>
              Responsible academic support means helping a student understand the brief, develop their own argument, locate appropriate evidence, paraphrase responsibly, cite sources correctly, structure the work and review potential similarity issues. It does not mean disguising copied material, fabricating references or manipulating a plagiarism checker.
            </p>
            <div className="pc-ethical-box">
              <ShieldCheck size={24} />
              <div><strong>Originality is more than a number.</strong><span>The strongest submission is one where the evidence is traceable, the sources are acknowledged, the analysis is genuinely the writer’s own, and the required academic conventions are followed.</span></div>
            </div>
          </div>
        </section>

        <section className="section pc-tint-section" id="faq">
          <div className="container pc-narrow">
            <p className="eyebrow">16 • Frequently asked questions</p>
            <h2>Plagiarism checker and Turnitin FAQs</h2>
            <div className="pc-faq-list">
              {faq.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<ChevronRight size={18} /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pc-cta">
          <div className="container pc-cta-inner">
            <div>
              <p className="eyebrow">Build better academic work</p>
              <h2>Need help understanding a similarity report, citation issue or research-writing problem?</h2>
              <p>ProjectAssignments focuses on ethical academic guidance, technical understanding, research structure and clearer independent work.</p>
            </div>
            <div className="pc-cta-links">
              <Link href="/contact" className="button button-light">Get Guidance <ArrowRight size={17} /></Link>
              <Link href="/resources/referencing-styles" className="button pc-cta-secondary">Referencing Styles <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="pc-sources-section">
          <div className="container">
            <p className="eyebrow">Reference note</p>
            <h2>Use official documentation for current tool behaviour</h2>
            <p>
              Turnitin features, report interfaces, database coverage and access arrangements can change. For current product behaviour, students should consult their institution and Turnitin’s own documentation. The same principle applies to third-party plagiarism checkers: features, limits, pricing and privacy policies can change over time.
            </p>
          </div>
        </section>
      </main>

      <style>{`
        .plagiarism-page { background: var(--background, #fff); color: var(--text, #17212b); }
        .pc-hero { background: linear-gradient(135deg, #004f50 0%, #006467 55%, #073d45 100%); color: #fff; padding: 90px 0 72px; overflow: hidden; }
        .pc-hero-inner { display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(300px, .7fr); gap: 60px; align-items: center; }
        .pc-hero h1 { font-size: clamp(42px, 5.4vw, 72px); line-height: 1.02; letter-spacing: -2.5px; margin: 14px 0 24px; max-width: 900px; }
        .pc-hero-lead { font-size: 19px; line-height: 1.75; max-width: 820px; color: rgba(255,255,255,.88); }
        .pc-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 30px; }
        .pc-hero .button-secondary { color: #fff; border-color: rgba(255,255,255,.38); background: rgba(255,255,255,.08); }
        .pc-hero-note { margin-top: 26px; display: flex; gap: 10px; max-width: 780px; padding: 14px 16px; border: 1px solid rgba(255,255,255,.17); border-radius: 12px; background: rgba(255,255,255,.06); color: rgba(255,255,255,.82); font-size: 13px; line-height: 1.6; }
        .pc-hero-panel { border: 1px solid rgba(255,255,255,.2); border-radius: 24px; padding: 28px; background: rgba(4,26,31,.3); box-shadow: 0 24px 60px rgba(0,0,0,.18); }
        .pc-scan-ring { width: 74px; height: 74px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.35); border-radius: 50%; margin-bottom: 26px; }
        .pc-panel-line { display: flex; justify-content: space-between; gap: 20px; padding: 15px 0; border-bottom: 1px solid rgba(255,255,255,.1); font-size: 14px; }
        .pc-panel-line span { color: rgba(255,255,255,.65); }
        .pc-panel-line b { color: #ffc15a; }
        .pc-panel-footer { margin-top: 24px; font-size: 10px; letter-spacing: 1.6px; color: rgba(255,255,255,.5); }
        .pc-stat-strip { background: #f4f8f7; border-bottom: 1px solid #dce8e6; }
        .pc-stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .pc-stat { padding: 25px 20px; border-right: 1px solid #dce8e6; display: flex; flex-direction: column; gap: 6px; }
        .pc-stat:last-child { border-right: 0; }
        .pc-stat strong { font-size: 13px; color: #006467; }
        .pc-stat span { font-size: 13px; line-height: 1.5; color: #51636b; }
        .pc-section { padding: 82px 0; }
        .pc-narrow { max-width: 900px; }
        .pc-section h2, .pc-sources-section h2 { font-size: clamp(32px, 4vw, 48px); line-height: 1.12; letter-spacing: -1.2px; margin: 10px 0 22px; }
        .pc-section h3 { font-size: 22px; line-height: 1.25; margin: 0 0 12px; }
        .pc-section p { line-height: 1.8; color: #4d6068; }
        .pc-section-heading { max-width: 850px; margin-bottom: 38px; }
        .pc-section-heading > p:last-child { max-width: 820px; }
        .pc-callout { display: flex; gap: 15px; margin-top: 28px; padding: 22px; border-left: 4px solid #ffad32; border-radius: 10px; background: #fff7e8; }
        .pc-callout svg { flex-shrink: 0; color: #b76a00; }
        .pc-callout div { display: grid; gap: 5px; }
        .pc-callout span { color: #5c5a53; line-height: 1.65; }
        .pc-tint-section { padding: 82px 0; background: #f4f8f7; }
        .pc-comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .pc-comparison-card { padding: 32px; background: #fff; border: 1px solid #dce8e6; border-radius: 18px; }
        .pc-comparison-accent { border-top: 4px solid #006467; }
        .pc-badge { display: inline-flex; padding: 6px 9px; border-radius: 99px; background: #e8f2f1; color: #006467; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .7px; }
        .pc-comparison-card ul { padding-left: 19px; color: #56666d; line-height: 1.75; }
        .pc-comparison-card li { margin: 7px 0; }
        .pc-source-note { font-size: 13px; margin-top: 22px; }
        .pc-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .pc-grid-3 article { padding: 28px; border: 1px solid #dce8e6; border-radius: 16px; background: #fff; }
        .pc-grid-3 svg { color: #006467; margin-bottom: 18px; }
        .pc-dark-section { padding: 82px 0; background: #082f35; color: #fff; }
        .pc-light-heading h2, .pc-light-heading p { color: #fff; }
        .pc-light-heading .eyebrow { color: #ffc15a; }
        .pc-type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.12); }
        .pc-type-grid article { padding: 26px; background: #0b3a40; min-height: 220px; }
        .pc-type-number { display: block; color: #ffc15a; font-size: 11px; font-weight: 800; margin-bottom: 30px; }
        .pc-type-grid h3 { color: #fff; }
        .pc-type-grid p { color: rgba(255,255,255,.67); font-size: 14px; line-height: 1.7; }
        .pc-turnitin-intro { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(280px, .7fr); gap: 30px; padding: 32px; border-radius: 20px; background: #eef6f5; border: 1px solid #d6e8e5; }
        .pc-turnitin-intro p { margin-top: 0; }
        .pc-turnitin-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .pc-turnitin-facts div { padding: 17px; background: #fff; border-radius: 12px; border: 1px solid #dbe8e6; display: grid; gap: 5px; }
        .pc-turnitin-facts strong { color: #006467; }
        .pc-turnitin-facts span { font-size: 12px; color: #66767c; line-height: 1.45; }
        .pc-subsection { padding: 45px 0 0; }
        .pc-subsection > p { max-width: 900px; }
        .pc-score-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 22px; }
        .pc-score-grid > div { padding: 21px; border: 1px solid #dce8e6; border-radius: 14px; background: #fff; }
        .pc-score-grid strong { color: #006467; }
        .pc-score-grid p { font-size: 13px; line-height: 1.65; }
        .pc-warning, .pc-tool-disclaimer { display: flex; gap: 12px; align-items: flex-start; margin-top: 22px; padding: 16px 18px; border-radius: 12px; background: #fff5df; border: 1px solid #f2d69b; color: #5f543d; }
        .pc-warning svg, .pc-tool-disclaimer svg { color: #a86a00; flex-shrink: 0; margin-top: 2px; }
        .pc-warning span { font-size: 13px; line-height: 1.6; }
        .pc-workflow { border-left: 2px solid #cbdedb; }
        .pc-workflow article { display: grid; grid-template-columns: 70px 1fr; gap: 22px; padding: 0 0 34px 28px; position: relative; }
        .pc-workflow article > span { width: 48px; height: 48px; display: grid; place-items: center; margin-left: -53px; border-radius: 50%; background: #006467; color: #fff; font-size: 12px; font-weight: 800; }
        .pc-workflow h3 { margin-bottom: 5px; }
        .pc-workflow p { margin: 0; }
        .pc-fix-list { display: grid; gap: 13px; margin-top: 28px; }
        .pc-fix-list > div { display: flex; gap: 12px; padding: 17px; background: #f4f8f7; border-radius: 10px; }
        .pc-fix-list svg { color: #006467; flex-shrink: 0; }
        .pc-fix-list span { display: grid; gap: 3px; line-height: 1.65; color: #4e6067; }
        .pc-fix-list strong { color: #1e3036; }
        .pc-discipline-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .pc-discipline-grid article { padding: 28px; background: #0c3b41; border: 1px solid rgba(255,255,255,.12); border-radius: 15px; }
        .pc-discipline-grid svg { color: #ffc15a; margin-bottom: 15px; }
        .pc-discipline-grid h3 { color: #fff; }
        .pc-discipline-grid p { color: rgba(255,255,255,.7); font-size: 14px; }
        .pc-discipline-grid a { display: inline-flex; gap: 7px; align-items: center; margin-top: 10px; color: #ffc15a; font-size: 13px; font-weight: 700; text-decoration: none; }
        .pc-reference-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .pc-reference-grid a { display: grid; grid-template-columns: 25px 1fr auto; gap: 5px 13px; align-items: center; padding: 22px; border: 1px solid #dce8e6; border-radius: 14px; text-decoration: none; background: #fff; transition: transform .2s ease, box-shadow .2s ease; }
        .pc-reference-grid a:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,60,65,.08); }
        .pc-reference-grid svg:first-child { color: #006467; grid-row: span 2; }
        .pc-reference-grid strong { color: #18353b; }
        .pc-reference-grid span { grid-column: 2; color: #65767c; font-size: 13px; line-height: 1.55; }
        .pc-reference-grid svg:last-child { grid-column: 3; grid-row: 1 / span 2; color: #006467; }
        .pc-tool-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .pc-tool-card { padding: 25px; border: 1px solid #dce8e6; border-radius: 15px; background: #fff; }
        .pc-tool-topline { display: flex; justify-content: space-between; gap: 12px; align-items: center; }
        .pc-tool-icon { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 10px; background: #e8f2f1; color: #006467; }
        .pc-tool-type { font-size: 11px; color: #63757b; font-weight: 700; }
        .pc-tool-card h3 { margin-top: 18px; }
        .pc-tool-card p { font-size: 13px; line-height: 1.65; margin: 8px 0; }
        .pc-tool-best { color: #344e55 !important; }
        .pc-tool-note { color: #687980 !important; }
        .pc-tool-disclaimer p { margin: 0; font-size: 13px; line-height: 1.6; }
        .pc-free-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .pc-free-grid article { padding: 24px; border-top: 3px solid #006467; background: #f5f8f8; border-radius: 0 0 12px 12px; }
        .pc-free-grid span { color: #006467; font-size: 12px; font-weight: 800; }
        .pc-free-grid h3 { margin-top: 18px; font-size: 19px; }
        .pc-paid-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .pc-paid-list div { display: grid; gap: 5px; padding: 19px 21px; border: 1px solid #dce8e6; border-radius: 12px; }
        .pc-paid-list strong { color: #18383e; }
        .pc-paid-list span { color: #63757b; font-size: 13px; line-height: 1.55; }
        .pc-can-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .pc-can-grid > div { padding: 30px; border: 1px solid rgba(255,255,255,.13); border-radius: 14px; background: rgba(255,255,255,.04); }
        .pc-can-grid h3 { color: #ffc15a; }
        .pc-can-grid ul { padding-left: 20px; color: rgba(255,255,255,.7); line-height: 1.75; }
        .pc-checklist { display: grid; gap: 9px; max-width: 950px; }
        .pc-checklist div { display: grid; grid-template-columns: 35px 22px 1fr; gap: 10px; align-items: center; padding: 14px 16px; border: 1px solid #dce8e6; border-radius: 10px; }
        .pc-checklist span { font-size: 11px; font-weight: 800; color: #006467; }
        .pc-checklist svg { color: #006467; }
        .pc-checklist p { margin: 0; font-size: 14px; color: #53666d; }
        .pc-ethical-box { display: flex; gap: 14px; padding: 22px; margin-top: 28px; border-radius: 13px; background: #eaf5f3; }
        .pc-ethical-box svg { color: #006467; flex-shrink: 0; }
        .pc-ethical-box div { display: grid; gap: 5px; }
        .pc-ethical-box span { color: #52686e; line-height: 1.65; }
        .pc-faq-list { display: grid; gap: 10px; }
        .pc-faq-list details { background: #fff; border: 1px solid #dce8e6; border-radius: 12px; padding: 0 20px; }
        .pc-faq-list summary { list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 20px 0; font-weight: 750; }
        .pc-faq-list summary::-webkit-details-marker { display: none; }
        .pc-faq-list details[open] summary svg { transform: rotate(90deg); }
        .pc-faq-list summary svg { transition: transform .2s ease; flex-shrink: 0; }
        .pc-faq-list p { padding: 0 0 20px; margin: 0; }
        .pc-cta { padding: 70px 0; background: linear-gradient(135deg, #006467, #08424a); color: #fff; }
        .pc-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .pc-cta h2 { max-width: 800px; font-size: clamp(30px, 4vw, 48px); line-height: 1.12; margin: 10px 0 15px; letter-spacing: -1px; }
        .pc-cta p:not(.eyebrow) { max-width: 720px; color: rgba(255,255,255,.78); line-height: 1.7; }
        .pc-cta-links { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }
        .pc-cta-secondary { color: #fff; border-color: rgba(255,255,255,.35); background: rgba(255,255,255,.08); }
        .pc-sources-section { padding: 55px 0; background: #f4f8f7; }
        .pc-sources-section p { max-width: 900px; color: #63757b; line-height: 1.75; }
        @media (max-width: 1000px) {
          .pc-hero-inner { grid-template-columns: 1fr; }
          .pc-hero-panel { max-width: 600px; }
          .pc-type-grid { grid-template-columns: repeat(2, 1fr); }
          .pc-score-grid, .pc-free-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 760px) {
          .pc-hero { padding: 65px 0 55px; }
          .pc-hero h1 { letter-spacing: -1.5px; }
          .pc-hero-lead { font-size: 17px; }
          .pc-stat-grid { grid-template-columns: 1fr 1fr; }
          .pc-stat:nth-child(2) { border-right: 0; }
          .pc-comparison, .pc-grid-3, .pc-discipline-grid, .pc-reference-grid, .pc-tool-grid, .pc-paid-list, .pc-can-grid { grid-template-columns: 1fr; }
          .pc-turnitin-intro { grid-template-columns: 1fr; padding: 23px; }
          .pc-score-grid { grid-template-columns: 1fr 1fr; }
          .pc-cta-inner { flex-direction: column; align-items: flex-start; }
          .pc-cta-links { width: 100%; }
        }
        @media (max-width: 520px) {
          .pc-section, .pc-tint-section, .pc-dark-section { padding: 60px 0; }
          .pc-type-grid, .pc-score-grid, .pc-free-grid { grid-template-columns: 1fr; }
          .pc-stat { padding: 18px 13px; }
          .pc-stat span { font-size: 12px; }
          .pc-workflow article { grid-template-columns: 1fr; padding-left: 25px; }
          .pc-workflow article > span { margin-left: -49px; }
          .pc-checklist div { grid-template-columns: 28px 20px 1fr; padding: 12px; }
        }
      `}</style>
      <Footer />
    </>
  )
}
