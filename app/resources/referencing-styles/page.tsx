import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Gavel,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  ListChecks,
  Microscope,
  Network,
  Quote,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react'

import {
  Footer,
  PageHero,
  SectionHeading,
} from '@/components/site'

export const metadata: Metadata = {
  title:
    'Referencing Styles Guide | Harvard, APA 7, IEEE, MLA, Vancouver, AMA, OSCOLA & More',

  description:
    'Comprehensive guide to academic referencing styles including Harvard, APA 7th, IEEE, MLA 9th, Chicago, Vancouver, NLM, AMA, OSCOLA, Bluebook, AGLC, ACS, CSE, ASA and MHRA. Learn citation rules, in-text citations, reference lists, bibliographies, source types and referencing styles for IT, engineering, medicine, nursing, business, management, law, science, education and humanities.',

  keywords: [
    'referencing styles',
    'academic referencing styles',
    'academic citation styles',
    'referencing styles guide',
    'citation styles guide',
    'reference styles',
    'academic citation guide',
    'how to reference academic sources',
    'how to cite sources',
    'academic referencing guide',

    'Harvard referencing',
    'Harvard referencing style',
    'Harvard citation style',
    'Harvard reference format',
    'Harvard in text citation',
    'Harvard reference list',
    'Harvard bibliography',
    'Harvard referencing guide',
    'Harvard style referencing examples',

    'APA 7',
    'APA 7th edition',
    'APA referencing',
    'APA citation style',
    'APA 7 referencing guide',
    'APA 7 in text citation',
    'APA 7 reference list',
    'APA 7 reference examples',
    'APA style academic writing',

    'IEEE referencing',
    'IEEE citation style',
    'IEEE referencing guide',
    'IEEE reference format',
    'IEEE in text citation',
    'IEEE reference list',
    'IEEE citations engineering',
    'IEEE citations computer science',
    'IEEE technical paper referencing',

    'MLA referencing',
    'MLA 9',
    'MLA 9th edition',
    'MLA citation style',
    'MLA works cited',
    'MLA in text citation',
    'MLA referencing guide',
    'MLA format academic writing',

    'Chicago referencing',
    'Chicago citation style',
    'Chicago notes bibliography',
    'Chicago author date',
    'Chicago referencing guide',
    'Turabian referencing',
    'Turabian citation style',

    'Vancouver referencing',
    'Vancouver citation style',
    'Vancouver reference style',
    'Vancouver medical referencing',
    'Vancouver nursing referencing',
    'Vancouver in text citations',

    'NLM referencing',
    'NLM citation style',
    'National Library of Medicine referencing',
    'NLM medical citation',
    'NLM reference style',

    'AMA referencing',
    'AMA citation style',
    'AMA referencing guide',
    'AMA medical referencing',
    'AMA nursing referencing',
    'AMA journal citation',

    'OSCOLA referencing',
    'OSCOLA 5th edition',
    'OSCOLA citation style',
    'OSCOLA legal referencing',
    'law referencing style',
    'legal citation style',

    'Bluebook citation',
    'Bluebook referencing',
    'US legal citation',
    'legal academic referencing',

    'AGLC referencing',
    'AGLC citation style',
    'Australian legal referencing',
    'Australian law citation',

    'ACS referencing',
    'ACS citation style',
    'chemistry referencing',
    'chemical engineering referencing',

    'CSE referencing',
    'CSE citation style',
    'scientific referencing',
    'biology referencing',
    'life sciences referencing',

    'ASA referencing',
    'ASA citation style',
    'sociology referencing',

    'MHRA referencing',
    'MHRA citation style',
    'humanities referencing',
    'literature referencing',

    'business referencing',
    'management referencing',
    'MBA referencing',
    'DBA referencing',
    'marketing referencing',
    'finance referencing',

    'computer science referencing',
    'IT assignment referencing',
    'software engineering referencing',
    'cybersecurity referencing',
    'networking assignment referencing',
    'engineering referencing',

    'medical referencing',
    'nursing referencing',
    'healthcare referencing',
    'public health referencing',
    'medicine citation style',

    'law assignment referencing',
    'legal research referencing',
    'education referencing',
    'psychology referencing',
    'social science referencing',

    'reference list vs bibliography',
    'in text citation',
    'reference list',
    'bibliography',
    'footnotes',
    'endnotes',
    'DOI referencing',
    'website referencing',
    'journal article referencing',
    'book referencing',
    'thesis referencing',
    'dissertation referencing',
    'government report referencing',
    'dataset referencing',
    'software referencing',
    'AI referencing',
    'academic integrity',
    'plagiarism and referencing',
  ],

  alternates: {
    canonical:
      'https://projectassignments.com/resources/referencing-styles',
  },

  openGraph: {
    title:
      'Referencing Styles Guide | Harvard, APA 7, IEEE, MLA, Vancouver & More',
    description:
      'A detailed academic referencing guide covering major citation styles and their use across technology, engineering, medicine, nursing, business, management, law, science, education, humanities and social sciences.',
    url:
      'https://projectassignments.com/resources/referencing-styles',
    type: 'article',
  },
}

const styles = [
  {
    name: 'Harvard',
    category: 'Author-date',
    disciplines:
      'Business, management, accounting, economics, social sciences, general academic writing',
    description:
      'Harvard is an author-date referencing approach widely encountered across universities and disciplines. It is important to check the specific institutional Harvard guide because Harvard is not a single globally standardised style with one universal rule set.',
    href: '#harvard',
  },
  {
    name: 'APA 7',
    category: 'Author-date',
    disciplines:
      'Psychology, education, nursing, social sciences, business, behavioural sciences',
    description:
      'APA Style uses an author-date citation system and provides detailed rules for scholarly writing, in-text citations and reference lists.',
    href: '#apa-7',
  },
  {
    name: 'IEEE',
    category: 'Numeric',
    disciplines:
      'Computer science, IT, engineering, electronics, telecommunications, technical research',
    description:
      'IEEE uses numbered citations that normally correspond to entries in a numbered reference list. It is particularly common in engineering and computing.',
    href: '#ieee',
  },
  {
    name: 'MLA 9',
    category: 'Author / works cited',
    disciplines:
      'Literature, languages, humanities, cultural studies, communication',
    description:
      'MLA uses a Works Cited system and an in-text citation approach designed around the source and the relevant location within that source.',
    href: '#mla',
  },
  {
    name: 'Chicago',
    category: 'Notes or author-date',
    disciplines:
      'History, humanities, social sciences, publishing, interdisciplinary research',
    description:
      'Chicago provides two major documentation systems: notes and bibliography, and author-date.',
    href: '#chicago',
  },
  {
    name: 'Vancouver',
    category: 'Numeric',
    disciplines:
      'Medicine, nursing, health sciences, biomedical research',
    description:
      'Vancouver is a numbered citation system widely encountered in biomedical and health-related academic publishing.',
    href: '#vancouver',
  },
  {
    name: 'NLM',
    category: 'Numeric / scientific',
    disciplines:
      'Medicine, biomedical science, health information, medical research',
    description:
      'The National Library of Medicine provides detailed citation guidance through Citing Medicine for authors, editors, publishers and researchers.',
    href: '#nlm',
  },
  {
    name: 'AMA',
    category: 'Numeric',
    disciplines:
      'Medicine, clinical research, health sciences, medical publishing',
    description:
      'AMA Style is widely used in medical and scientific publishing and provides detailed guidance for journal articles, books, electronic sources and other scholarly material.',
    href: '#ama',
  },
  {
    name: 'OSCOLA',
    category: 'Legal footnotes',
    disciplines:
      'Law, legal research, legislation, cases, legal scholarship',
    description:
      'OSCOLA is designed specifically for accurate citation of legal authorities, legislation and other legal materials.',
    href: '#oscola',
  },
  {
    name: 'Bluebook',
    category: 'Legal citation',
    disciplines:
      'US law, legal research, law reviews, legal scholarship',
    description:
      'The Bluebook is a major legal citation system used in US legal scholarship and legal writing.',
    href: '#bluebook',
  },
  {
    name: 'AGLC',
    category: 'Legal citation',
    disciplines:
      'Australian law, legal research, Australian legal scholarship',
    description:
      'AGLC is an important Australian legal citation framework used in legal writing and research.',
    href: '#aglc',
  },
  {
    name: 'ACS',
    category: 'Scientific / numeric',
    disciplines:
      'Chemistry, chemical engineering, materials science',
    description:
      'ACS guidance is used in chemistry and related scientific communication and provides conventions for citing scientific literature and other source types.',
    href: '#acs',
  },
  {
    name: 'CSE',
    category: 'Scientific',
    disciplines:
      'Biology, life sciences, environmental science, natural sciences',
    description:
      'The Council of Science Editors style provides scientific writing and documentation guidance for researchers, authors and editors.',
    href: '#cse',
  },
  {
    name: 'ASA',
    category: 'Author-date',
    disciplines:
      'Sociology and related social sciences',
    description:
      'ASA style is associated with sociology and social-science research writing.',
    href: '#asa',
  },
  {
    name: 'MHRA',
    category: 'Footnotes / humanities',
    disciplines:
      'Literature, languages, history, arts and humanities',
    description:
      'MHRA style is commonly encountered in humanities research and uses detailed documentation conventions suitable for scholarly source-based writing.',
    href: '#mhra',
  },
]

const disciplineCards = [
  {
    icon: <Network />,
    title: 'IT & Computer Science',
    styles: 'IEEE, ACM, APA, Harvard',
    text:
      'Technical reports, software engineering projects, cybersecurity assignments, databases, networking, AI and computer science research frequently require a numbered technical style such as IEEE, although the exact requirement depends on the institution or publication.',
    links: [
      ['/technologies/programming-languages-development', 'Programming & Development'],
      ['/technologies/networking-infrastructure', 'Networking & Infrastructure'],
      ['/services/cybersecurity', 'Cybersecurity'],
    ],
  },
  {
    icon: <Lightbulb />,
    title: 'Engineering & Technology',
    styles: 'IEEE, ACS, Harvard, APA',
    text:
      'Engineering assignments often involve standards, technical reports, conference papers, specifications, datasets, software and journal literature. Citation consistency is particularly important when technical claims depend on external evidence.',
    links: [
      ['/technologies', 'Technology Topics'],
      ['/services/it-software-engineering', 'IT & Software Engineering'],
    ],
  },
  {
    icon: <HeartPulse />,
    title: 'Medicine & Nursing',
    styles: 'Vancouver, NLM, AMA, APA',
    text:
      'Medical and nursing assignments commonly use numbered biomedical citation systems. The required style can vary by university, journal, clinical school or assessment brief.',
    links: [
      ['/assignment-project-help/nursing-assignment-help', 'Nursing Assignment Help'],
      ['/services/research-methodology', 'Research Methodology'],
    ],
  },
  {
    icon: <Users />,
    title: 'Business & Management',
    styles: 'Harvard, APA, Chicago',
    text:
      'Business, management, MBA and DBA research frequently use author-date systems. Harvard variants are especially common, but the university\'s own referencing guide should always take precedence.',
    links: [
      ['/services/mba-strategic-research', 'MBA Strategic Research'],
      ['/services/dba-doctoral-research', 'DBA Doctoral Research'],
      ['/assignment-project-help/management-assignment-help', 'Management Assignment Help'],
    ],
  },
  {
    icon: <Gavel />,
    title: 'Law',
    styles: 'OSCOLA, AGLC, Bluebook',
    text:
      'Legal writing differs substantially from ordinary academic citation because cases, legislation, regulations and other legal authorities require specialised treatment.',
    links: [
      ['/assignment-project-help/law-assignment-help', 'Law Assignment Help'],
    ],
  },
  {
    icon: <Microscope />,
    title: 'Science & Life Sciences',
    styles: 'CSE, ACS, Vancouver, NLM',
    text:
      'Scientific research may use discipline-specific citation systems, particularly in biology, chemistry, medicine, environmental science and related fields.',
    links: [
      ['/technologies/data-analysis-mining', 'Data Analysis & Data Mining'],
      ['/services/research-methodology', 'Research Methodology'],
    ],
  },
  {
    icon: <GraduationCap />,
    title: 'Psychology & Education',
    styles: 'APA 7, Harvard',
    text:
      'Psychology and education commonly use APA-style author-date citations, while education programmes may also prescribe Harvard or another institutional variant.',
    links: [
      ['/assignment-project-help', 'Assignment & Project Help'],
      ['/study-guides', 'Study Guides'],
    ],
  },
  {
    icon: <BookOpen />,
    title: 'Humanities & Literature',
    styles: 'MLA, Chicago, MHRA',
    text:
      'Humanities disciplines often rely on detailed source documentation, quotations, page references, footnotes and bibliographies.',
    links: [
      ['/services/research-methodology', 'Research Methodology'],
      ['/resources', 'Resource Hub'],
    ],
  },
]

const sourceTypes = [
  {
    title: 'Books',
    text:
      'Book references normally require the author, publication year or date, title and publication information. The exact order, punctuation and treatment of editions varies between styles.',
  },
  {
    title: 'Journal Articles',
    text:
      'Journal references typically require authors, article title, journal title, publication details and page or article information. DOI treatment varies by style.',
  },
  {
    title: 'Websites',
    text:
      'A webpage should not automatically be cited simply because it is online. Identify the author or organisation, page title, date information and stable location required by the selected style.',
  },
  {
    title: 'Government Reports',
    text:
      'Government departments and agencies can act as corporate authors. The reference should make the issuing organisation and report identifiable.',
  },
  {
    title: 'Conference Papers',
    text:
      'Conference publications can contain important technical and research evidence. Include conference information required by the chosen citation system.',
  },
  {
    title: 'Theses & Dissertations',
    text:
      'Theses and dissertations require information such as author, title, degree or document type, institution and publication or repository information depending on the style.',
  },
  {
    title: 'Datasets',
    text:
      'Research datasets should be cited when they contribute evidence, analysis or reproducibility. Dataset citation requirements differ across styles and repositories.',
  },
  {
    title: 'Software & Code',
    text:
      'Software packages, repositories and source code can be scholarly sources. Identify the creator, software or project name, version where relevant, date and persistent location when required.',
  },
  {
    title: 'Standards & Technical Documents',
    text:
      'Standards, specifications, technical reports and documentation are especially important in engineering, IT, cybersecurity and systems research.',
  },
  {
    title: 'AI & Generative AI',
    text:
      'AI-related citation requirements can change and may depend on the style guide, institution, publisher and nature of the use. Follow the applicable official guidance rather than assuming that one format works everywhere.',
  },
]

const mistakes = [
  'Using a citation style that is different from the one specified in the assessment brief.',
  'Mixing Harvard, APA, IEEE or other styles in the same reference list.',
  'Adding a source to the reference list that is never cited in the document when the required style expects correspondence.',
  'Citing a source in the text but accidentally omitting it from the final reference list.',
  'Copying citations from search engines without checking the underlying source details.',
  'Treating every website as if it were a journal article.',
  'Leaving out a DOI, URL, volume, issue, page range or other required element when the selected style requires it.',
  'Using incorrect author names or publication dates because the metadata was copied from an unreliable source.',
  'Relying on automatic citation generators without reviewing their output.',
  'Assuming that Harvard is one universal format rather than checking the university-specific Harvard guide.',
  'Using legal citation rules designed for one jurisdiction in another jurisdiction.',
  'Failing to distinguish between a journal article, preprint, dataset, software package and webpage.',
  'Citing a secondary source as though it were the original source.',
  'Forgetting to cite paraphrased ideas because the wording is not copied directly.',
  'Adding references simply to make a bibliography look substantial rather than because they support the argument.',
]

const faqItems = [
  {
    question: 'What is an academic referencing style?',
    answer:
      'An academic referencing style is a defined system for documenting sources used in scholarly work. It determines how sources are cited in the text or notes and how full source information is presented in a reference list, bibliography or Works Cited section.',
  },
  {
    question: 'Which referencing style is most commonly used?',
    answer:
      'There is no single referencing style that is universally required. Different disciplines, universities, journals and countries use different systems. Harvard and APA are common author-date systems, IEEE is common in technical fields, and specialist systems such as Vancouver, AMA and OSCOLA are important in medicine and law.',
  },
  {
    question: 'Is Harvard referencing the same everywhere?',
    answer:
      'No. Harvard is best understood as a family of author-date approaches rather than one universally controlled style. Universities and institutions can publish their own Harvard variants with different punctuation, ordering and rules. Always follow the referencing guide supplied by your institution.',
  },
  {
    question: 'What is the difference between APA and Harvard?',
    answer:
      'Both generally use an author-date approach, but their detailed rules differ. APA is governed by the Publication Manual of the American Psychological Association, whereas Harvard implementations can vary by institution. The differences can include punctuation, author formatting, title capitalization, DOI and URL treatment, and reference-list rules.',
  },
  {
    question: 'What referencing style is used for computer science?',
    answer:
      'IEEE is a major style encountered in computer science, engineering, electronics and technical research. However, some universities and courses specify APA, Harvard, ACM or another style. The assessment or institutional guide should determine the final choice.',
  },
  {
    question: 'What referencing style is used for engineering?',
    answer:
      'IEEE is common in many engineering fields, particularly electrical, electronics, telecommunications and computing-related areas. Other engineering programmes may prescribe Harvard, APA, ACS or a university-specific style.',
  },
  {
    question: 'What referencing style is used in medicine?',
    answer:
      'Medical and biomedical writing commonly uses numbered citation systems such as Vancouver, NLM-related guidance or AMA. The specific style depends on the medical school, university, journal or assessment requirements.',
  },
  {
    question: 'What referencing style is used for nursing?',
    answer:
      'Nursing programmes commonly encounter APA, Vancouver or other health-science citation systems. The correct choice depends on the institution and assessment requirements.',
  },
  {
    question: 'What referencing style is used in law?',
    answer:
      'Law uses specialised citation systems because legal sources include cases, legislation, regulations and other authorities. Examples include OSCOLA in UK-oriented legal education, AGLC in Australia and Bluebook in US legal scholarship.',
  },
  {
    question: 'What is the difference between a reference list and a bibliography?',
    answer:
      'The distinction depends partly on the referencing system. A reference list generally contains sources cited in the work, while a bibliography may include cited works and, depending on the system, additional works consulted. The terminology and exact requirements vary by style.',
  },
  {
    question: 'What is an in-text citation?',
    answer:
      'An in-text citation is a short source reference placed within the body of an academic document. Depending on the style, it may contain an author and year, a page or location, a number, or another identifying element.',
  },
  {
    question: 'Do websites need references?',
    answer:
      'A website may need to be cited when information from it contributes to your academic work. Whether and how it should be cited depends on the source, its authorship, its date, its permanence and the referencing style.',
  },
  {
    question: 'Do I need to reference a paraphrase?',
    answer:
      'Yes. Paraphrasing changes the wording but does not make an external idea your own. The original source should still be acknowledged according to the required citation style.',
  },
  {
    question: 'Can I use an online citation generator?',
    answer:
      'Citation generators can help produce a starting point, but their output should always be checked against the official or institutionally required style guide. Metadata can be incomplete or incorrectly interpreted.',
  },
]

function InternalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Link href={href} className="ref-inline-link">
      {children}
      <ArrowRight size={14} />
    </Link>
  )
}

function StyleCard({
  style,
}: {
  style: (typeof styles)[number]
}) {
  return (
    <article className="ref-style-card">
      <div className="ref-style-card-top">
        <div>
          <span className="ref-style-category">
            {style.category}
          </span>

          <h3>{style.name}</h3>
        </div>

        <ChevronRight size={20} />
      </div>

      <p>{style.description}</p>

      <div className="ref-style-disciplines">
        <strong>Common areas</strong>
        <span>{style.disciplines}</span>
      </div>

      <Link
        href={style.href}
        className="ref-card-link"
      >
        Explore {style.name}
        <ArrowRight size={15} />
      </Link>
    </article>
  )
}

export default function ReferencingStylesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Complete Academic Referencing Styles Guide',
    description:
      'Comprehensive guide to major academic referencing and citation styles including Harvard, APA, IEEE, MLA, Chicago, Vancouver, NLM, AMA, OSCOLA, Bluebook, AGLC, ACS, CSE, ASA and MHRA.',
    author: {
      '@type': 'Organization',
      name: 'ProjectAssignments',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ProjectAssignments',
    },
    mainEntityOfPage:
      'https://projectassignments.com/resources/referencing-styles',
  }

  return (
    <>
      <main className="ref-page">
        <PageHero
          eyebrow="ACADEMIC RESOURCE • REFERENCING"
          title="Complete Guide to Academic Referencing Styles"
          body="Understand Harvard, APA 7, IEEE, MLA, Chicago, Vancouver, NLM, AMA, OSCOLA, Bluebook, AGLC, ACS, CSE and other major citation systems — with discipline-specific guidance for technology, engineering, medicine, nursing, business, management, law, science, education and the humanities."
        />

        {/* =====================================================
            INTRODUCTION
           ===================================================== */}

        <section className="section">
          <div className="container ref-content">
            <div className="ref-intro-grid">
              <div>
                <p className="eyebrow">
                  WHY REFERENCING MATTERS
                </p>

                <h2>
                  Referencing is more than formatting a list of sources.
                </h2>

                <p>
                  Academic referencing is the system through which
                  writers identify the evidence, ideas, arguments,
                  data, theories and information that have influenced
                  their work. A well-referenced assignment allows a
                  reader to identify where important claims came from,
                  locate the underlying evidence and distinguish your
                  analysis from the work of other researchers.
                </p>

                <p>
                  The correct referencing system depends on the
                  discipline, institution, assessment brief, journal,
                  publisher and sometimes even the country or legal
                  jurisdiction. A psychology paper may require APA 7,
                  a computer engineering project may require IEEE, a
                  medical assignment may require Vancouver or AMA, and
                  a law assessment may require OSCOLA, AGLC or another
                  legal citation system.
                </p>

                <p>
                  This guide brings the major systems together so that
                  students and researchers can understand the logic
                  behind each style rather than treating referencing as
                  a collection of punctuation rules.
                </p>
              </div>

              <div className="ref-highlight">
                <div className="ref-highlight-icon">
                  <Quote size={24} />
                </div>

                <h3>
                  The most important rule
                </h3>

                <p>
                  If your university, lecturer, journal, publisher or
                  assessment brief specifies a referencing style, follow
                  that requirement even if another style is more familiar
                  to you.
                </p>

                <span>
                  Consistency + accuracy + traceable sources
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK NAVIGATION
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="QUICK NAVIGATION"
              title="Find the referencing style you need"
              body="Jump directly to the citation system most relevant to your subject or assessment."
              align="center"
            />

            <div className="ref-quick-grid">
              {styles.map((style) => (
                <a
                  key={style.name}
                  href={style.href}
                  className="ref-quick-link"
                >
                  <span>{style.name}</span>
                  <ArrowRight size={15} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT IS REFERENCING
           ===================================================== */}

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="FOUNDATIONS"
              title="What is academic referencing?"
              body="A strong referencing system creates a traceable connection between your academic claims and the sources that support them."
            />

            <div className="ref-three-grid">
              <article className="ref-info-card">
                <BookOpen />
                <h3>Identify sources</h3>
                <p>
                  Referencing tells readers which book, article,
                  webpage, dataset, report, case, standard or other
                  source contributed to your work.
                </p>
              </article>

              <article className="ref-info-card">
                <Search />
                <h3>Make evidence traceable</h3>
                <p>
                  A good citation allows readers to locate the source
                  and investigate the evidence or argument themselves.
                </p>
              </article>

              <article className="ref-info-card">
                <ShieldCheck />
                <h3>Support academic integrity</h3>
                <p>
                  Proper attribution helps distinguish your own
                  reasoning from ideas, evidence and wording originating
                  from other authors.
                </p>
              </article>
            </div>

            <div className="ref-prose">
              <h3>
                Citation, reference and bibliography are not identical
              </h3>

              <p>
                These terms are often used interchangeably in casual
                conversation, but academic styles can give them
                different functions. An <strong>in-text citation</strong>
                or note identifies a source at the point where it is
                discussed. A <strong>reference list</strong> provides
                fuller information about sources cited in the work. A
                <strong> bibliography</strong> may be broader, depending
                on the style, and can include material consulted during
                research.
              </p>

              <p>
                <strong>Works Cited</strong> is a particularly important
                term in MLA. Legal styles can use footnotes and
                specialised tables or lists of authorities. Technical
                styles such as IEEE use numbered references. Therefore,
                you should not assume that a terminology or formatting
                rule from one style applies to another.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMPARISON
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="AT A GLANCE"
              title="Major academic referencing styles compared"
              body="The table provides a practical orientation. Your institution's own guide should remain the final authority."
              align="center"
            />

            <div className="ref-table-wrap">
              <table className="ref-table">
                <thead>
                  <tr>
                    <th>Style</th>
                    <th>Citation approach</th>
                    <th>Common disciplines</th>
                    <th>Reference / source list</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Harvard</td>
                    <td>Author-date</td>
                    <td>Business, management, social sciences</td>
                    <td>Reference list / bibliography depending on variant</td>
                  </tr>

                  <tr>
                    <td>APA 7</td>
                    <td>Author-date</td>
                    <td>Psychology, education, social sciences, business</td>
                    <td>References</td>
                  </tr>

                  <tr>
                    <td>IEEE</td>
                    <td>Numbered</td>
                    <td>Engineering, computing, IT, electronics</td>
                    <td>Numbered references</td>
                  </tr>

                  <tr>
                    <td>MLA 9</td>
                    <td>Author / location-oriented</td>
                    <td>Literature, languages, humanities</td>
                    <td>Works Cited</td>
                  </tr>

                  <tr>
                    <td>Chicago</td>
                    <td>Notes or author-date</td>
                    <td>History, humanities, social sciences</td>
                    <td>Bibliography or references depending on system</td>
                  </tr>

                  <tr>
                    <td>Vancouver</td>
                    <td>Numbered</td>
                    <td>Medicine, nursing, biomedical sciences</td>
                    <td>Numbered reference list</td>
                  </tr>

                  <tr>
                    <td>NLM</td>
                    <td>Scientific / numeric and related systems</td>
                    <td>Medicine, biomedical research</td>
                    <td>References</td>
                  </tr>

                  <tr>
                    <td>AMA</td>
                    <td>Numbered</td>
                    <td>Medicine, health sciences</td>
                    <td>References</td>
                  </tr>

                  <tr>
                    <td>OSCOLA</td>
                    <td>Footnotes</td>
                    <td>Law</td>
                    <td>Footnotes and supporting lists where required</td>
                  </tr>

                  <tr>
                    <td>Bluebook</td>
                    <td>Legal citation</td>
                    <td>US law</td>
                    <td>Legal citations / authorities</td>
                  </tr>

                  <tr>
                    <td>AGLC</td>
                    <td>Legal citation</td>
                    <td>Australian law</td>
                    <td>Footnotes and legal authorities</td>
                  </tr>

                  <tr>
                    <td>ACS</td>
                    <td>Several scientific approaches</td>
                    <td>Chemistry and chemical sciences</td>
                    <td>References</td>
                  </tr>

                  <tr>
                    <td>CSE</td>
                    <td>Scientific systems</td>
                    <td>Biology and natural sciences</td>
                    <td>References / cited references</td>
                  </tr>

                  <tr>
                    <td>ASA</td>
                    <td>Author-date</td>
                    <td>Sociology</td>
                    <td>References</td>
                  </tr>

                  <tr>
                    <td>MHRA</td>
                    <td>Notes / humanities documentation</td>
                    <td>Humanities, literature, languages</td>
                    <td>Bibliography / notes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =====================================================
            STYLE CARDS
           ===================================================== */}

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="MAJOR STYLES"
              title="A detailed overview of major referencing systems"
              body="Use these sections to understand what each system is designed to do and where it is commonly encountered."
            />

            <div className="ref-style-grid">
              {styles.map((style) => (
                <StyleCard
                  key={style.name}
                  style={style}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            HARVARD
           ===================================================== */}

        <section
          id="harvard"
          className="section ref-section-tint"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">01</span>

              <div>
                <p className="eyebrow">
                  AUTHOR-DATE REFERENCING
                </p>

                <h2>
                  Harvard Referencing Style
                </h2>
              </div>
            </div>

            <p>
              Harvard referencing is one of the most frequently
              encountered author-date approaches in university
              assignments. It is particularly common in business,
              management, accounting, economics, social sciences and
              many general academic programmes.
            </p>

            <p>
              One important point is often overlooked: <strong>
              Harvard is not one universally standardised style
              </strong>. Different universities and institutions can
              publish their own Harvard referencing guides. Consequently,
              two Harvard examples found online may differ in punctuation,
              capitalisation, ordering, URL treatment or other details.
            </p>

            <h3>How Harvard generally works</h3>

            <p>
              An in-text Harvard citation commonly identifies the author
              and year, with a page or location added where appropriate.
              The corresponding full source appears in the reference list
              at the end of the document.
            </p>

            <div className="ref-example">
              <span>Illustrative pattern</span>
              <code>
                (Smith, 2025)
              </code>
            </div>

            <p>
              For a direct quotation, the required location information
              can be important, particularly where the reader needs to
              locate the quoted passage. Exact formatting should follow
              your institution's Harvard guide.
            </p>

            <h3>Harvard referencing is especially common in</h3>

            <ul className="ref-check-list">
              <li>Business and management assignments</li>
              <li>MBA coursework and research</li>
              <li>Accounting and finance</li>
              <li>Marketing</li>
              <li>Economics</li>
              <li>Social sciences</li>
              <li>Education</li>
              <li>Many Australian and UK university programmes</li>
            </ul>

            <div className="ref-related">
              <strong>Related ProjectAssignments resources</strong>

              <div>
                <InternalLink href="/services/mba-strategic-research">
                  MBA Strategic Research
                </InternalLink>

                <InternalLink href="/services/dba-doctoral-research">
                  DBA Doctoral Research
                </InternalLink>

                <InternalLink href="/assignment-project-help/management-assignment-help">
                  Management Assignment Help
                </InternalLink>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            APA
           ===================================================== */}

        <section
          id="apa-7"
          className="section"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">02</span>

              <div>
                <p className="eyebrow">
                  SOCIAL & BEHAVIOURAL SCIENCES
                </p>

                <h2>
                  APA 7th Edition Referencing
                </h2>
              </div>
            </div>

            <p>
              APA Style is widely used in psychology, education, social
              sciences, behavioural sciences and many health, business
              and interdisciplinary programmes. The official Publication
              Manual is currently the seventh edition.
            </p>

            <p>
              APA uses an author-date approach. The citation appearing in
              the text connects to a detailed entry in the reference list.
              APA also provides extensive guidance beyond citations,
              including scholarly writing, headings, tables, figures,
              reporting practices and ethical publication.
            </p>

            <h3>APA in-text citations</h3>

            <p>
              APA commonly uses the author's surname and publication year
              in an in-text citation. When a source is quoted directly,
              a location such as a page number may be required.
            </p>

            <div className="ref-example">
              <span>Illustrative parenthetical citation</span>
              <code>
                (Smith, 2025)
              </code>
            </div>

            <h3>APA 7 reference-list principles</h3>

            <ul className="ref-check-list">
              <li>References are presented in an organised reference list.</li>
              <li>
                Author information follows APA-specific formatting rules.
              </li>
              <li>
                Publication dates are important to the author-date system.
              </li>
              <li>
                Titles and source information follow APA-specific
                capitalisation and punctuation rules.
              </li>
              <li>
                Digital sources can require DOI or URL information.
              </li>
              <li>
                Different source categories have different reference
                patterns.
              </li>
            </ul>

            <h3>APA for research and dissertations</h3>

            <p>
              APA is particularly useful when your research involves
              psychology, education, behavioural research, quantitative
              analysis, qualitative research, surveys or social-science
              literature. APA's official manual includes guidance on
              references, legal references, datasets, software,
              audiovisual material and online media.
            </p>

            <div className="ref-related">
              <strong>Useful related resources</strong>

              <div>
                <InternalLink href="/services/research-methodology">
                  Research Methodology
                </InternalLink>

                <InternalLink href="/tools/survey-response-generator">
                  Survey Response Generator
                </InternalLink>

                <InternalLink href="/assignment-project-help/research-project-help">
                  Research Project Help
                </InternalLink>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            IEEE
           ===================================================== */}

        <section
          id="ieee"
          className="section ref-section-tint"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">03</span>

              <div>
                <p className="eyebrow">
                  TECHNICAL & ENGINEERING
                </p>

                <h2>
                  IEEE Referencing Style
                </h2>
              </div>
            </div>

            <p>
              IEEE-style referencing is strongly associated with
              engineering, electrical and electronics engineering,
              computer science, information technology, telecommunications
              and technical research.
            </p>

            <p>
              Instead of repeatedly placing author and year information
              into the prose, IEEE generally identifies cited sources
              using numbers. Each source receives a corresponding entry
              in a numbered reference list.
            </p>

            <div className="ref-example">
              <span>Illustrative citation</span>
              <code>
                [1]
              </code>
            </div>

            <h3>Why numbered technical referencing is useful</h3>

            <p>
              Technical papers can contain a large number of sources.
              Numbered citations allow the prose to remain relatively
              compact while still providing a direct connection to a
              detailed reference list.
            </p>

            <h3>IEEE is particularly relevant to</h3>

            <ul className="ref-check-list">
              <li>Computer science projects</li>
              <li>Cybersecurity research</li>
              <li>Software engineering</li>
              <li>Networking and telecommunications</li>
              <li>Artificial intelligence and machine learning</li>
              <li>Electrical and electronic engineering</li>
              <li>Embedded systems</li>
              <li>Technical conference papers</li>
              <li>Engineering dissertations and capstone projects</li>
            </ul>

            <p>
              IEEE-style work often involves journal papers, conference
              proceedings, standards, technical reports, software
              documentation and online technical resources. Each source
              should be checked carefully rather than relying blindly on
              automatically generated citation data.
            </p>

            <div className="ref-related">
              <strong>Related technical resources</strong>

              <div>
                <InternalLink href="/technologies/programming-languages-development">
                  Programming & Development
                </InternalLink>

                <InternalLink href="/technologies/networking-infrastructure">
                  Networking & Infrastructure
                </InternalLink>

                <InternalLink href="/services/cybersecurity">
                  Cybersecurity
                </InternalLink>

                <InternalLink href="/services/it-software-engineering">
                  IT & Software Engineering
                </InternalLink>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MLA
           ===================================================== */}

        <section
          id="mla"
          className="section"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">04</span>

              <div>
                <p className="eyebrow">
                  HUMANITIES
                </p>

                <h2>
                  MLA 9th Edition
                </h2>
              </div>
            </div>

            <p>
              MLA style is strongly associated with literature, languages,
              cultural studies and other humanities disciplines. The
              MLA Handbook is currently in its ninth edition. The MLA
              Style Center provides guidance on Works Cited entries,
              in-text citations, notes, annotated bibliographies and
              formatting research projects.
            </p>

            <h3>Works Cited</h3>

            <p>
              MLA normally refers to the final source list as a
              <strong> Works Cited</strong> page. The system focuses on
              identifying the source using a structured set of core
              bibliographic elements.
            </p>

            <h3>MLA is commonly used for</h3>

            <ul className="ref-check-list">
              <li>English literature</li>
              <li>Modern languages</li>
              <li>Cultural studies</li>
              <li>Comparative literature</li>
              <li>Humanities research</li>
              <li>Literary criticism</li>
              <li>Media and textual studies</li>
            </ul>

            <p>
              MLA also provides guidance for digital sources such as
              websites, databases and online audiovisual material.
              The ninth edition expanded examples and guidance covering
              different publication formats.
            </p>
          </div>
        </section>

        {/* =====================================================
            CHICAGO
           ===================================================== */}

        <section
          id="chicago"
          className="section ref-section-tint"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">05</span>

              <div>
                <p className="eyebrow">
                  HUMANITIES & SOCIAL SCIENCES
                </p>

                <h2>
                  Chicago Style & Turabian
                </h2>
              </div>
            </div>

            <p>
              Chicago provides two major documentation systems:
              <strong> Notes and Bibliography</strong> and
              <strong> Author-Date</strong>. The Chicago Manual of Style
              explains that the notes and bibliography system is
              especially flexible and common in humanities, while the
              author-date system is frequently encountered in sciences
              and social sciences.
            </p>

            <h3>Chicago Notes and Bibliography</h3>

            <p>
              Sources are identified using numbered footnotes or endnotes.
              A bibliography is normally provided as well. This approach
              is useful when a research project needs detailed notes or
              when the source documentation needs to accommodate a wide
              variety of source types.
            </p>

            <div className="ref-example">
              <span>Basic concept</span>
              <code>
                Superscript note number → footnote/endnote → bibliography
              </code>
            </div>

            <h3>Chicago Author-Date</h3>

            <p>
              The author-date system uses a brief parenthetical citation
              in the text and a corresponding reference entry.
            </p>

            <p>
              Turabian is closely related to Chicago and provides
              student-oriented guidance using the same two broad
              documentation approaches.
            </p>
          </div>
        </section>

        {/* =====================================================
            VANCOUVER
           ===================================================== */}

        <section
          id="vancouver"
          className="section"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">06</span>

              <div>
                <p className="eyebrow">
                  MEDICINE & HEALTH SCIENCES
                </p>

                <h2>
                  Vancouver Referencing
                </h2>
              </div>
            </div>

            <p>
              Vancouver is a numbered citation system commonly
              encountered in medicine, nursing, biomedical science and
              health-related academic work.
            </p>

            <p>
              A source is assigned a number when it is first cited, and
              that source number is then used consistently for subsequent
              citations to the same source according to the applicable
              style rules.
            </p>

            <div className="ref-example">
              <span>Illustrative citation</span>
              <code>
                ...as previously reported.[1]
              </code>
            </div>

            <h3>Vancouver source types</h3>

            <p>
              Medical researchers may need to reference journal articles,
              clinical guidelines, books, websites, reports, databases,
              conference material and other biomedical sources.
            </p>

            <p>
              Because health-science referencing can be highly
              detail-sensitive, students should use the exact guide
              specified by their nursing or medical programme rather
              than assuming that every numbered medical style is
              interchangeable.
            </p>

            <div className="ref-related">
              <strong>Related resources</strong>

              <div>
                <InternalLink href="/assignment-project-help/nursing-assignment-help">
                  Nursing Assignment Help
                </InternalLink>

                <InternalLink href="/services/research-methodology">
                  Research Methodology
                </InternalLink>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NLM
           ===================================================== */}

        <section
          id="nlm"
          className="section ref-section-tint"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">07</span>

              <div>
                <p className="eyebrow">
                  NATIONAL LIBRARY OF MEDICINE
                </p>

                <h2>
                  NLM Referencing & Citing Medicine
                </h2>
              </div>
            </div>

            <p>
              The National Library of Medicine provides detailed guidance
              through <strong>Citing Medicine: The NLM Style Guide for
              Authors, Editors, and Publishers</strong>. It covers
              journal articles, books, internet resources and many other
              biomedical source types.
            </p>

            <p>
              NLM guidance is particularly valuable when a medical or
              biomedical researcher needs more precise source-formatting
              rules than a general academic citation guide provides.
            </p>

            <h3>Examples of NLM source considerations</h3>

            <ul className="ref-check-list">
              <li>Journal article author formatting</li>
              <li>Journal title treatment</li>
              <li>Volume and issue information</li>
              <li>Page ranges</li>
              <li>Online journal articles</li>
              <li>Books and other individual titles</li>
              <li>Web-based medical information</li>
              <li>Special source notes and publication details</li>
            </ul>

            <p>
              NLM's guidance also illustrates why medical referencing
              should not be treated as a generic copy-and-paste exercise.
              The exact source type can affect the citation structure.
            </p>
          </div>
        </section>

        {/* =====================================================
            AMA
           ===================================================== */}

        <section
          id="ama"
          className="section"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">08</span>

              <div>
                <p className="eyebrow">
                  MEDICAL & SCIENTIFIC PUBLISHING
                </p>

                <h2>
                  AMA Referencing Style
                </h2>
              </div>
            </div>

            <p>
              The AMA Manual of Style is a major reference for medical
              and scientific publishing. Its references guidance covers
              books, journals, online resources and numerous specialised
              source categories. The current manual is the 11th edition.
            </p>

            <h3>AMA references</h3>

            <p>
              AMA uses a numbered citation approach. References are
              numbered according to their appearance in the document,
              subject to the exact rules of the style.
            </p>

            <p>
              Medical manuscripts can contain complicated source types:
              journal articles, preprints, databases, package inserts,
              conference proceedings, patents, online material and
              electronic resources. AMA provides detailed guidance for
              these categories.
            </p>

            <div className="ref-related">
              <strong>Useful for</strong>

              <span className="ref-pill-row">
                <span>Medicine</span>
                <span>Clinical research</span>
                <span>Healthcare</span>
                <span>Medical publishing</span>
                <span>Biomedical research</span>
              </span>
            </div>
          </div>
        </section>

        {/* =====================================================
            OSCOLA
           ===================================================== */}

        <section
          id="oscola"
          className="section ref-section-tint"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">09</span>

              <div>
                <p className="eyebrow">
                  LEGAL RESEARCH
                </p>

                <h2>
                  OSCOLA Referencing
                </h2>
              </div>
            </div>

            <p>
              OSCOLA — the Oxford University Standard for Citation of
              Legal Authorities — is designed for accurate citation of
              legal authorities, legislation and other legal materials.
              It is widely used by law schools and legal publishers in
              the UK and beyond.
            </p>

            <p>
              In 2026, Oxford published the fifth edition of OSCOLA,
              introducing updated and expanded treatment of domestic and
              international legal sources.
            </p>

            <h3>Why legal referencing is different</h3>

            <p>
              A law assignment is not simply a conventional academic
              essay with legal vocabulary. The writer may need to cite
              cases, legislation, statutory instruments, regulations,
              treaties, books, journal articles, government material and
              online legal sources.
            </p>

            <p>
              OSCOLA's system is designed around legal authorities and
              commonly uses footnotes rather than ordinary author-date
              citations.
            </p>

            <h3>Legal sources commonly encountered</h3>

            <ul className="ref-check-list">
              <li>Cases and judgments</li>
              <li>Legislation</li>
              <li>Statutory instruments</li>
              <li>Books and edited collections</li>
              <li>Journal articles</li>
              <li>Government publications</li>
              <li>International legal materials</li>
              <li>Online legal resources</li>
            </ul>

            <p>
              The Oxford guidance also provides specific advice about
              URLs, including circumstances in which a web address should
              or should not be included.
            </p>

            <div className="ref-related">
              <strong>Related ProjectAssignments resource</strong>

              <div>
                <InternalLink href="/assignment-project-help/law-assignment-help">
                  Law Assignment Help
                </InternalLink>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BLUEBOOK
           ===================================================== */}

        <section
          id="bluebook"
          className="section"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">10</span>

              <div>
                <p className="eyebrow">
                  US LEGAL CITATION
                </p>

                <h2>
                  Bluebook Citation
                </h2>
              </div>
            </div>

            <p>
              Bluebook citation is a major legal citation system used in
              US legal scholarship. It is encountered in law schools,
              legal journals and other US legal research environments.
            </p>

            <p>
              Legal citation differs substantially from ordinary
              academic referencing because legal authorities must often
              be identified through jurisdiction-specific conventions,
              case names, court information, reporters, statutory
              provisions and other legal identifiers.
            </p>

            <p>
              Students should therefore avoid applying Harvard, APA or
              IEEE rules to a US law assignment unless the course
              specifically requires them.
            </p>
          </div>
        </section>

        {/* =====================================================
            AGLC
           ===================================================== */}

        <section
          id="aglc"
          className="section ref-section-tint"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">11</span>

              <div>
                <p className="eyebrow">
                  AUSTRALIAN LAW
                </p>

                <h2>
                  AGLC Referencing
                </h2>
              </div>
            </div>

            <p>
              The Australian Guide to Legal Citation, commonly referred
              to as AGLC, is an important legal citation framework for
              Australian legal research and academic writing.
            </p>

            <p>
              Like other legal citation systems, AGLC needs to distinguish
              between different categories of legal authority. A case,
              statute, journal article, book and website cannot simply be
              formatted using the same generic reference template.
            </p>

            <h3>AGLC is relevant to</h3>

            <ul className="ref-check-list">
              <li>Australian law assignments</li>
              <li>Legal research papers</li>
              <li>Law dissertations</li>
              <li>Case analysis</li>
              <li>Legislation analysis</li>
              <li>Australian legal journals</li>
            </ul>

            <p>
              Always use the edition and institutional guide specified
              by your Australian law school or assessment brief.
            </p>
          </div>
        </section>

        {/* =====================================================
            ACS
           ===================================================== */}

        <section
          id="acs"
          className="section"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">12</span>

              <div>
                <p className="eyebrow">
                  CHEMISTRY & SCIENTIFIC RESEARCH
                </p>

                <h2>
                  ACS Referencing
                </h2>
              </div>
            </div>

            <p>
              ACS guidance is associated with chemistry and related
              scientific communication. The ACS Guide to Scholarly
              Communication provides guidance on scientific writing,
              references and numerous source categories.
            </p>

            <p>
              ACS-style documentation can be particularly relevant when
              a project relies heavily on journal literature, chemical
              data, technical reports, theses, patents or other scientific
              sources.
            </p>

            <h3>ACS in scientific projects</h3>

            <ul className="ref-check-list">
              <li>Chemistry laboratory reports</li>
              <li>Chemistry dissertations</li>
              <li>Materials science</li>
              <li>Chemical engineering</li>
              <li>Pharmaceutical research</li>
              <li>Scientific journal manuscripts</li>
            </ul>

            <p>
              ACS publication guidance can involve numbered references
              and specific treatment of scientific source information.
              Exact rules should be checked against the required ACS
              guide or publication instructions.
            </p>
          </div>
        </section>

        {/* =====================================================
            CSE
           ===================================================== */}

        <section
          id="cse"
          className="section ref-section-tint"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">13</span>

              <div>
                <p className="eyebrow">
                  NATURAL & LIFE SCIENCES
                </p>

                <h2>
                  CSE Referencing
                </h2>
              </div>
            </div>

            <p>
              The Council of Science Editors provides the CSE Manual:
              Scientific Style and Format for authors, editors and
              publishers. The manual addresses scientific communication
              and documentation across the sciences.
            </p>

            <p>
              CSE is relevant to disciplines where scientific literature,
              experiments, observations, datasets and technical evidence
              need to be documented consistently.
            </p>

            <h3>Potential subject areas</h3>

            <ul className="ref-check-list">
              <li>Biology</li>
              <li>Environmental science</li>
              <li>Ecology</li>
              <li>Life sciences</li>
              <li>Natural sciences</li>
              <li>Scientific research projects</li>
            </ul>
          </div>
        </section>

        {/* =====================================================
            ASA
           ===================================================== */}

        <section
          id="asa"
          className="section"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">14</span>

              <div>
                <p className="eyebrow">
                  SOCIAL SCIENCE
                </p>

                <h2>
                  ASA Referencing
                </h2>
              </div>
            </div>

            <p>
              ASA style is associated particularly with sociology and
              social-science research. It follows conventions designed
              for academic communication in the field.
            </p>

            <p>
              Sociology assignments often combine theoretical literature,
              empirical research, datasets, government statistics and
              policy evidence. A consistent citation system makes the
              relationship between these sources and the student's
              argument easier to follow.
            </p>
          </div>
        </section>

        {/* =====================================================
            MHRA
           ===================================================== */}

        <section
          id="mhra"
          className="section ref-section-tint"
        >
          <div className="container ref-detail">
            <div className="ref-detail-heading">
              <span className="ref-number">15</span>

              <div>
                <p className="eyebrow">
                  HUMANITIES
                </p>

                <h2>
                  MHRA Referencing
                </h2>
              </div>
            </div>

            <p>
              MHRA style is encountered in humanities research,
              particularly literature, languages, history and related
              areas. It provides conventions for documenting scholarly
              sources through notes and bibliographic information.
            </p>

            <p>
              Humanities researchers often work with primary sources,
              editions, manuscripts, archival material, books, journal
              articles and digital resources. A detailed documentation
              system can therefore be particularly useful.
            </p>
          </div>
        </section>

        {/* =====================================================
            DISCIPLINE GUIDE
           ===================================================== */}

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="DISCIPLINE GUIDE"
              title="Which referencing style should you use?"
              body="There is no universal style for every subject. Start with your assessment brief, then use your university or department's official referencing guide."
              align="center"
            />

            <div className="ref-discipline-grid">
              {disciplineCards.map((discipline) => (
                <article
                  className="ref-discipline-card"
                  key={discipline.title}
                >
                  <div className="ref-discipline-icon">
                    {discipline.icon}
                  </div>

                  <h3>
                    {discipline.title}
                  </h3>

                  <span className="ref-discipline-styles">
                    {discipline.styles}
                  </span>

                  <p>
                    {discipline.text}
                  </p>

                  <div className="ref-discipline-links">
                    {discipline.links.map(
                      ([href, label]) => (
                        <InternalLink
                          key={href}
                          href={href}
                        >
                          {label}
                        </InternalLink>
                      ),
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SOURCE TYPES
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="SOURCE TYPES"
              title="How different sources are referenced"
              body="The source type matters. A book, journal article, website, dataset, software package and legal case should not automatically be formatted in the same way."
            />

            <div className="ref-source-grid">
              {sourceTypes.map((source) => (
                <article
                  className="ref-source-card"
                  key={source.title}
                >
                  <FileText size={20} />

                  <h3>
                    {source.title}
                  </h3>

                  <p>
                    {source.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BOOKS
           ===================================================== */}

        <section className="section">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="BOOKS & EBOOKS"
              title="Referencing books and ebooks"
              body="Books remain important sources for theory, conceptual frameworks, historical research and foundational academic knowledge."
            />

            <div className="ref-prose">
              <p>
                A book reference generally needs enough information for
                the reader to identify the specific work. Depending on
                the style, this can include the author, year, title,
                edition, publisher and digital identifier or location.
              </p>

              <p>
                Edited books require additional attention because the
                editor may be the relevant contributor for the whole
                volume, while an individual chapter may have a different
                author. The correct pattern therefore depends on whether
                you are citing the entire book or a specific contribution.
              </p>

              <h3>Common mistakes with books</h3>

              <ul className="ref-check-list">
                <li>Confusing the book author with the publisher.</li>
                <li>Omitting the edition when it matters.</li>
                <li>Citing a chapter as though it were the entire book.</li>
                <li>Using an automatically generated title with incorrect capitalisation.</li>
                <li>Adding unnecessary information not required by the chosen style.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =====================================================
            JOURNAL ARTICLES
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="JOURNAL ARTICLES"
              title="How to reference academic journal articles"
              body="Journal literature is central to dissertations, research projects, literature reviews and evidence-based assignments."
            />

            <div className="ref-prose">
              <p>
                Journal references commonly contain the article author or
                authors, article title, journal title, publication
                information and a page range or article identifier.
                Digital publications can also require DOI information.
              </p>

              <p>
                The exact order and punctuation depend on the citation
                system. For example, NLM guidance has detailed rules for
                journal titles, author names, volume and issue information
                and online journal articles.
              </p>

              <p>
                Before citing an article, check the article itself or a
                reliable bibliographic database rather than copying an
                incomplete citation from a search result.
              </p>

              <div className="ref-note">
                <CheckCircle2 size={20} />

                <p>
                  <strong>Research tip:</strong> Keep the DOI, database
                  identifier or persistent source information while
                  collecting literature. It can save significant time
                  when you later build the final reference list.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WEBSITES & DIGITAL SOURCES
           ===================================================== */}

        <section className="section">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="DIGITAL SOURCES"
              title="How to reference websites, webpages and online sources"
              body="Online sources require source evaluation as well as formatting."
            />

            <div className="ref-prose">
              <p>
                A webpage should not be treated as a generic citation
                category without first identifying who created the
                material, when it was published or updated, what the page
                is called and whether the content is stable.
              </p>

              <p>
                A university research guide, government report,
                organisational policy, news article, commercial webpage
                and personal blog are all online sources, but they have
                different evidentiary characteristics.
              </p>

              <h3>Before citing a webpage, check</h3>

              <ul className="ref-check-list">
                <li>Who is the author or organisation?</li>
                <li>Is a publication or update date available?</li>
                <li>What is the exact title of the page?</li>
                <li>Is the information authoritative for your argument?</li>
                <li>Is there a DOI or persistent identifier?</li>
                <li>Does your citation style require an access date?</li>
                <li>Is the URL stable?</li>
              </ul>

              <p>
                In legal research, these questions become particularly
                important because legal citation systems can have
                specific rules about when URLs should be included.
                OSCOLA, for example, provides dedicated guidance on
                citing web addresses.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            GOVERNMENT REPORTS
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="REPORTS & POLICY"
              title="Government reports, organisational reports and policy documents"
              body="Reports can be valuable evidence in business, public policy, management, health, education, economics and social research."
            />

            <div className="ref-prose">
              <p>
                Government departments, international organisations,
                universities, professional associations and companies can
                publish reports that contain statistics, policy analysis,
                technical findings or industry evidence.
              </p>

              <p>
                When the organisation is the author, the organisation
                may function as a corporate author. The precise formatting
                depends on the selected citation style.
              </p>

              <p>
                Do not assume that the organisation's homepage is the
                correct source. Locate and cite the specific report,
                policy document or publication that supports your claim.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            THESIS & DISSERTATIONS
           ===================================================== */}

        <section className="section">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="POSTGRADUATE RESEARCH"
              title="Referencing theses, dissertations and research projects"
              body="Dissertations often contain hundreds of citations, making a consistent reference-management workflow essential."
            />

            <div className="ref-prose">
              <p>
                A thesis or dissertation can itself be a source of
                evidence. When you cite another researcher's dissertation,
                the reference usually needs to identify the author,
                title, document type, awarding institution and relevant
                publication or repository information.
              </p>

              <p>
                The same principle applies to your own research workflow:
                keep complete source metadata from the beginning rather
                than trying to reconstruct references immediately before
                submission.
              </p>

              <div className="ref-related">
                <strong>
                  ProjectAssignments research resources
                </strong>

                <div>
                  <InternalLink href="/services/research-methodology">
                    Research Methodology
                  </InternalLink>

                  <InternalLink href="/services/dba-doctoral-research">
                    DBA Doctoral Research
                  </InternalLink>

                  <InternalLink href="/assignment-project-help/dissertation-project-help">
                    Dissertation & Project Help
                  </InternalLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DATASETS & SOFTWARE
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="TECHNICAL & DATA RESEARCH"
              title="Referencing datasets, software, code and technical resources"
              body="Modern academic research increasingly cites data and computational resources in addition to books and journal articles."
            />

            <div className="ref-prose">
              <p>
                A data-driven project may depend on a public dataset,
                software library, statistical package, source-code
                repository, technical standard or machine-learning model.
                These resources can be central to reproducibility and
                should not be treated as invisible background material.
              </p>

              <h3>Examples of technical resources that may need citation</h3>

              <ul className="ref-check-list">
                <li>Public datasets</li>
                <li>Research databases</li>
                <li>Software packages</li>
                <li>Programming libraries</li>
                <li>Git repositories</li>
                <li>Technical standards</li>
                <li>Open-source projects</li>
                <li>Machine-learning models</li>
                <li>Statistical tools</li>
                <li>Data visualisation tools</li>
              </ul>

              <p>
                The exact citation depends on the referencing style and
                the resource's metadata. APA, for example, explicitly
                includes reference examples for datasets and software,
                while scientific styles may provide their own conventions.
              </p>

              <div className="ref-related">
                <strong>Explore technical resources</strong>

                <div>
                  <InternalLink href="/technologies/data-analysis-mining">
                    Data Analysis & Data Mining
                  </InternalLink>

                  <InternalLink href="/resources/data-mining-tools">
                    Data Mining Tools
                  </InternalLink>

                  <InternalLink href="/technologies/technical-documentation-development-tools">
                    Technical Documentation
                  </InternalLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            AI
           ===================================================== */}

        <section className="section">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="EMERGING SOURCE TYPE"
              title="Referencing AI and generative AI"
              body="AI-assisted writing and research introduces citation and disclosure questions that depend on the style, institution and context."
            />

            <div className="ref-prose">
              <p>
                Generative AI tools create a special referencing problem
                because the output is not equivalent to a conventional
                book, journal article or webpage. Whether an AI system
                should be cited, acknowledged or otherwise disclosed can
                depend on the applicable academic policy and referencing
                style.
              </p>

              <p>
                Students should therefore check their institution's
                current academic-integrity and AI-use policy before
                submitting work that contains AI-generated material.
              </p>

              <p>
                Do not assume that an AI-generated answer is an
                authoritative academic source simply because it produces
                a citation. Verify the underlying source independently.
              </p>

              <div className="ref-note warning">
                <ShieldCheck size={20} />

                <p>
                  <strong>Important:</strong> Never fabricate a source,
                  DOI, page number, quotation or reference entry. If a
                  source cannot be verified, do not present it as genuine
                  academic evidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            IN-TEXT CITATIONS
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CORE SKILL"
              title="Understanding in-text citations"
              body="A reference list alone is not enough. Readers need to know which source supports which claim."
              align="center"
            />

            <div className="ref-three-grid">
              <article className="ref-info-card">
                <ListChecks />
                <h3>Author-date</h3>
                <p>
                  The citation identifies the author and publication
                  year, as seen in Harvard and APA-style systems.
                </p>
              </article>

              <article className="ref-info-card">
                <Network />
                <h3>Numbered</h3>
                <p>
                  A number connects the text to a numbered reference
                  entry, as in IEEE and many biomedical styles.
                </p>
              </article>

              <article className="ref-info-card">
                <FileText />
                <h3>Notes</h3>
                <p>
                  A footnote or endnote provides source information,
                  as commonly encountered in Chicago Notes and
                  Bibliography and legal citation.
                </p>
              </article>
            </div>

            <div className="ref-prose">
              <h3>When should you cite?</h3>

              <ul className="ref-check-list">
                <li>When using another researcher's idea.</li>
                <li>When paraphrasing another author's argument.</li>
                <li>When directly quoting a source.</li>
                <li>When reporting externally sourced data.</li>
                <li>When relying on a specific theory or framework.</li>
                <li>When using evidence from a report or dataset.</li>
                <li>When discussing a specific finding from previous research.</li>
                <li>When using a technical standard or external specification.</li>
              </ul>

              <h3>What may not require a citation?</h3>

              <p>
                Widely established common knowledge may not require a
                citation, but the boundary is contextual. If you are
                unsure whether a claim is common knowledge or requires
                evidence, consult your academic guide or instructor.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            REFERENCE LIST
           ===================================================== */}

        <section className="section">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="REFERENCE LIST"
              title="How to build a consistent reference list"
              body="A strong reference list is accurate, complete, consistent and traceable."
            />

            <div className="ref-prose">
              <ol className="ref-number-list">
                <li>
                  <strong>Choose the required style first.</strong>
                  Do not format your references before you know which
                  system your assessment requires.
                </li>

                <li>
                  <strong>Collect complete metadata.</strong>
                  Record author, date, title, publication details,
                  DOI, URL and other relevant information.
                </li>

                <li>
                  <strong>Match citations to references.</strong>
                  Check that every cited source is represented correctly
                  in the final list where the style requires this.
                </li>

                <li>
                  <strong>Check every reference.</strong>
                  Do not assume that automatically generated references
                  are accurate.
                </li>

                <li>
                  <strong>Apply one style consistently.</strong>
                  Avoid mixing formatting conventions from different
                  guides.
                </li>

                <li>
                  <strong>Review before submission.</strong>
                  Perform a final citation audit alongside your normal
                  proofreading process.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* =====================================================
            REFERENCE MANAGEMENT
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH WORKFLOW"
              title="Reference management for large research projects"
              body="The larger the research project, the more important it becomes to manage references throughout the project rather than at the end."
              align="center"
            />

            <div className="ref-workflow">
              <div>
                <span>01</span>
                <h3>Discover</h3>
                <p>
                  Find journal articles, books, reports, datasets and
                  other relevant evidence.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Capture</h3>
                <p>
                  Save complete metadata and persistent identifiers
                  while you still have the source open.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Organise</h3>
                <p>
                  Group sources by research question, theme,
                  methodology or chapter.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Cite</h3>
                <p>
                  Insert citations as you write rather than postponing
                  all referencing until the final day.
                </p>
              </div>

              <div>
                <span>05</span>
                <h3>Audit</h3>
                <p>
                  Check the final document against the required
                  referencing style and assessment instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMON MISTAKES
           ===================================================== */}

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="QUALITY CHECK"
              title="Common academic referencing mistakes"
              body="Most referencing problems are not caused by difficult punctuation. They are caused by inconsistent source handling."
            />

            <div className="ref-mistakes-grid">
              {mistakes.map((mistake, index) => (
                <div
                  className="ref-mistake"
                  key={mistake}
                >
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p>
                    {mistake}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ACADEMIC INTEGRITY
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container">
            <div className="ref-integrity">
              <div>
                <p className="eyebrow">
                  ACADEMIC INTEGRITY
                </p>

                <h2>
                  Referencing and plagiarism
                </h2>
              </div>

              <div>
                <p>
                  Referencing is one part of academic integrity. It does
                  not make copied material acceptable simply because a
                  citation has been added.
                </p>

                <p>
                  Academic writing still requires you to distinguish
                  direct quotations, paraphrasing, your own analysis and
                  evidence from external sources. A citation identifies
                  the source; it does not replace critical engagement with
                  that source.
                </p>

                <p>
                  Good academic practice therefore combines accurate
                  referencing with original analysis, transparent use of
                  evidence and compliance with your institution's
                  academic-integrity requirements.
                </p>

                <Link
                  href="/policies"
                  className="button button-secondary"
                >
                  Read our Academic Integrity Policies
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW TO CHOOSE
           ===================================================== */}

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="DECISION GUIDE"
              title="How to choose the correct referencing style"
              body="Do not choose a citation style based solely on what you find easiest. Use the requirements of your academic context."
              align="center"
            />

            <div className="ref-decision-grid">
              <article>
                <span>01</span>
                <h3>Check the assessment brief</h3>
                <p>
                  Look for explicit wording such as APA 7, Harvard,
                  IEEE, OSCOLA or another named style.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Check your university guide</h3>
                <p>
                  Institutions often publish detailed referencing
                  guides that override generic internet examples.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Check your discipline</h3>
                <p>
                  Technical, medical, legal and humanities disciplines
                  can use very different documentation systems.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Check the publication</h3>
                <p>
                  Journal articles, conferences and publishers can have
                  their own author instructions.
                </p>
              </article>

              <article>
                <span>05</span>
                <h3>Use the correct edition</h3>
                <p>
                  Referencing guides can change. Make sure you are using
                  the edition required by your institution or publisher.
                </p>
              </article>

              <article>
                <span>06</span>
                <h3>Stay consistent</h3>
                <p>
                  Once the required style is established, apply its
                  rules consistently throughout the document.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            RESEARCH & PROJECT WORKFLOW
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="FROM RESEARCH TO SUBMISSION"
              title="Referencing across assignments, projects and dissertations"
              body="Referencing should be part of the research workflow rather than an isolated formatting task at the end."
            />

            <div className="ref-prose">
              <p>
                In a short assignment, referencing may involve a
                manageable number of journal articles and books. A major
                dissertation, however, can involve literature reviews,
                theoretical frameworks, methodology sources, datasets,
                technical documentation, standards, government reports
                and previous empirical studies.
              </p>

              <p>
                This is why reference management becomes increasingly
                important as research complexity grows.
              </p>

              <div className="ref-link-cluster">
                <InternalLink href="/services/research-methodology">
                  Research Methodology
                </InternalLink>

                <InternalLink href="/services/dba-doctoral-research">
                  DBA Doctoral Research
                </InternalLink>

                <InternalLink href="/services/mba-strategic-research">
                  MBA Strategic Research
                </InternalLink>

                <InternalLink href="/assignment-project-help/dissertation-project-help">
                  Dissertation Project Help
                </InternalLink>

                <InternalLink href="/assignment-project-help/research-project-help">
                  Research Project Help
                </InternalLink>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTERNAL RESOURCE NETWORK
           ===================================================== */}

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="EXPLORE MORE"
              title="More academic and technical resources"
              body="Referencing works best when it is part of a broader research and academic workflow."
              align="center"
            />

            <div className="ref-resource-grid">
              <Link
                href="/resources"
                className="ref-resource-card"
              >
                <BookOpen />
                <div>
                  <h3>Resource Hub</h3>
                  <p>
                    Explore additional academic and technical
                    resources from ProjectAssignments.
                  </p>
                </div>
                <ArrowRight />
              </Link>

              <Link
                href="/technologies/data-analysis-mining"
                className="ref-resource-card"
              >
                <Microscope />
                <div>
                  <h3>Data Analysis & Data Mining</h3>
                  <p>
                    Learn about data preparation, analysis,
                    mining techniques and research applications.
                  </p>
                </div>
                <ArrowRight />
              </Link>

              <Link
                href="/technologies/technical-documentation-development-tools"
                className="ref-resource-card"
              >
                <FileText />
                <div>
                  <h3>Technical Documentation</h3>
                  <p>
                    Explore documentation, technical reports,
                    research artefacts and development tools.
                  </p>
                </div>
                <ArrowRight />
              </Link>

              <Link
                href="/study-guides"
                className="ref-resource-card"
              >
                <GraduationCap />
                <div>
                  <h3>Study Guides</h3>
                  <p>
                    Browse institution-focused academic study
                    resources and guidance.
                  </p>
                </div>
                <ArrowRight />
              </Link>

              <Link
                href="/tools"
                className="ref-resource-card"
              >
                <Lightbulb />
                <div>
                  <h3>Academic Tools</h3>
                  <p>
                    Explore practical tools for research,
                    technical work and academic projects.
                  </p>
                </div>
                <ArrowRight />
              </Link>

              <Link
                href="/assignment-project-help"
                className="ref-resource-card"
              >
                <ShieldCheck />
                <div>
                  <h3>Assignment & Project Help</h3>
                  <p>
                    Explore ethical academic guidance across
                    technical and research disciplines.
                  </p>
                </div>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions about referencing styles"
              body="Common questions about choosing, applying and checking academic citation styles."
              align="center"
            />

            <div className="ref-faq-list">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="ref-faq"
                >
                  <summary>
                    {item.question}
                    <ChevronRight size={18} />
                  </summary>

                  <p>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CHECKLIST
           ===================================================== */}

        <section className="section">
          <div className="container">
            <div className="ref-final-check">
              <div>
                <p className="eyebrow">
                  BEFORE YOU SUBMIT
                </p>

                <h2>
                  Final referencing checklist
                </h2>

                <p>
                  Use this quick audit before submitting an assignment,
                  research project, thesis or dissertation.
                </p>
              </div>

              <div className="ref-final-list">
                <div>
                  <CheckCircle2 />
                  <span>
                    I used the referencing style required by my institution.
                  </span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>
                    Every important externally sourced claim has appropriate attribution.
                  </span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>
                    My in-text citations and reference entries correspond correctly.
                  </span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>
                    I checked author names, dates, titles and publication details.
                  </span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>
                    DOI and URL information has been checked where required.
                  </span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>
                    I did not mix citation styles or blindly trust generated references.
                  </span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>
                    I checked my institution's latest referencing and academic-integrity guidance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONCLUSION
           ===================================================== */}

        <section className="section ref-section-tint">
          <div className="container ref-content">
            <SectionHeading
              eyebrow="CONCLUSION"
              title="Good referencing makes academic work easier to verify"
              body="The goal is not to memorise dozens of punctuation rules. The goal is to identify sources accurately, attribute ideas transparently and communicate research in a form your academic audience can follow."
            />

            <div className="ref-prose">
              <p>
                Harvard, APA, IEEE, MLA, Chicago, Vancouver, NLM, AMA,
                OSCOLA, Bluebook, AGLC, ACS, CSE, ASA and MHRA all solve
                the same broad problem — documenting the relationship
                between scholarly work and its sources — but they do so
                using different conventions designed for different
                academic communities.
              </p>

              <p>
                The most reliable workflow is straightforward: identify
                the required style, use the appropriate official or
                institutional guide, collect accurate source metadata,
                cite sources while writing, and perform a final reference
                audit before submission.
              </p>

              <p>
                If your project involves substantial research, technical
                analysis, datasets, programming, cybersecurity,
                dissertation work or another specialised area, your
                referencing system should be treated as part of the
                research methodology rather than as a last-minute
                formatting task.
              </p>

              <div className="ref-related">
                <strong>
                  Continue your research journey
                </strong>

                <div>
                  <InternalLink href="/services/research-methodology">
                    Research Methodology
                  </InternalLink>

                  <InternalLink href="/assignment-project-help">
                    Assignment & Project Support
                  </InternalLink>

                  <InternalLink href="/technologies">
                    Explore Technologies
                  </InternalLink>

                  <InternalLink href="/tools">
                    Academic Tools
                  </InternalLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
           ===================================================== */}

        <section className="ref-cta">
          <div className="container">
            <div className="ref-cta-inner">
              <div>
                <p className="eyebrow">
                  NEED A CLEARER RESEARCH WORKFLOW?
                </p>

                <h2>
                  Bring us the difficult part.
                </h2>

                <p>
                  Whether you are working on an assignment,
                  technical project, dissertation, thesis or research
                  methodology, structured guidance can help you turn a
                  complex brief into a clearer academic workflow.
                </p>
              </div>

              <Link
                href="/contact"
                className="button button-light"
              >
                Get Guidance
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            STRUCTURED DATA
           ===================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </main>

      <Footer />

      {/* =======================================================
          PAGE-SPECIFIC STYLES
         ======================================================= */}

      <style>{`
        .ref-page {
          --ref-border: rgba(15, 23, 42, 0.1);
          --ref-muted: #64748b;
          --ref-soft: rgba(15, 23, 42, 0.035);
        }

        .ref-section-tint {
          background: var(--section-tint);
        }

        .ref-content,
        .ref-detail {
          max-width: 1080px;
        }

        .ref-intro-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.65fr) minmax(280px, 0.8fr);
          gap: 64px;
          align-items: start;
        }

        .ref-intro-grid h2 {
          margin: 0 0 24px;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .ref-intro-grid p,
        .ref-prose p,
        .ref-detail > p {
          color: var(--text);
          line-height: 1.85;
          font-size: 16px;
        }

        .ref-highlight {
          padding: 30px;
          border: 1px solid var(--ref-border);
          border-radius: 20px;
          background: var(--card-bg, #fff);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
        }

        .ref-highlight-icon {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--section-tint);
          margin-bottom: 20px;
        }

        .ref-highlight h3 {
          margin: 0 0 12px;
          font-size: 21px;
        }

        .ref-highlight p {
          margin: 0 0 20px;
          font-size: 15px;
        }

        .ref-highlight span {
          display: block;
          padding-top: 16px;
          border-top: 1px solid var(--ref-border);
          color: var(--primary);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.02em;
        }

        .ref-quick-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
        }

        .ref-quick-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          min-height: 54px;
          padding: 14px 16px;
          border: 1px solid var(--ref-border);
          border-radius: 12px;
          background: var(--card-bg, #fff);
          color: var(--text);
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .ref-quick-link:hover {
          transform: translateY(-2px);
          border-color: rgba(15, 23, 42, 0.2);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
        }

        .ref-three-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .ref-info-card {
          padding: 28px;
          border: 1px solid var(--ref-border);
          border-radius: 18px;
          background: var(--card-bg, #fff);
        }

        .ref-info-card > svg {
          width: 25px;
          height: 25px;
          margin-bottom: 18px;
        }

        .ref-info-card h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .ref-info-card p {
          margin: 0;
          color: var(--ref-muted);
          line-height: 1.75;
          font-size: 15px;
        }

        .ref-prose {
          max-width: 900px;
          margin: 48px auto 0;
        }

        .ref-prose h3 {
          margin: 36px 0 12px;
          font-size: 24px;
          letter-spacing: -0.02em;
        }

        .ref-prose h3:first-child {
          margin-top: 0;
        }

        .ref-table-wrap {
          overflow-x: auto;
          border: 1px solid var(--ref-border);
          border-radius: 18px;
          background: var(--card-bg, #fff);
        }

        .ref-table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
          font-size: 14px;
        }

        .ref-table th,
        .ref-table td {
          padding: 16px 18px;
          text-align: left;
          vertical-align: top;
          border-bottom: 1px solid var(--ref-border);
        }

        .ref-table th {
          background: var(--ref-soft);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        .ref-table td {
          line-height: 1.6;
        }

        .ref-table tbody tr:last-child td {
          border-bottom: 0;
        }

        .ref-table td:first-child {
          font-weight: 800;
          white-space: nowrap;
        }

        .ref-style-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .ref-style-card {
          display: flex;
          flex-direction: column;
          padding: 26px;
          border: 1px solid var(--ref-border);
          border-radius: 18px;
          background: var(--card-bg, #fff);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .ref-style-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.07);
        }

        .ref-style-card-top {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 15px;
        }

        .ref-style-card-top svg {
          flex-shrink: 0;
          color: var(--ref-muted);
        }

        .ref-style-card h3 {
          margin: 5px 0 0;
          font-size: 24px;
          letter-spacing: -0.02em;
        }

        .ref-style-category {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--primary);
        }

        .ref-style-card > p {
          color: var(--ref-muted);
          line-height: 1.72;
          font-size: 14px;
          margin: 0 0 20px;
        }

        .ref-style-disciplines {
          margin-top: auto;
          padding: 14px 0;
          border-top: 1px solid var(--ref-border);
          border-bottom: 1px solid var(--ref-border);
        }

        .ref-style-disciplines strong,
        .ref-style-disciplines span {
          display: block;
        }

        .ref-style-disciplines strong {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 5px;
        }

        .ref-style-disciplines span {
          color: var(--ref-muted);
          font-size: 13px;
          line-height: 1.5;
        }

        .ref-card-link,
        .ref-inline-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--primary);
          text-decoration: none;
          font-weight: 750;
        }

        .ref-card-link {
          margin-top: 18px;
          font-size: 14px;
        }

        .ref-inline-link {
          font-size: 14px;
          margin-right: 20px;
          margin-bottom: 10px;
        }

        .ref-detail {
          max-width: 920px;
        }

        .ref-detail-heading {
          display: flex;
          align-items: flex-start;
          gap: 22px;
          margin-bottom: 34px;
        }

        .ref-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          border-radius: 14px;
          background: var(--text);
          color: var(--background);
          font-size: 13px;
          font-weight: 800;
        }

        .ref-detail-heading h2 {
          margin: 4px 0 0;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .ref-detail h3 {
          margin: 36px 0 12px;
          font-size: 24px;
          letter-spacing: -0.02em;
        }

        .ref-example {
          margin: 24px 0;
          padding: 20px 22px;
          border-left: 4px solid var(--primary);
          background: var(--ref-soft);
          border-radius: 0 12px 12px 0;
        }

        .ref-example span {
          display: block;
          margin-bottom: 8px;
          color: var(--ref-muted);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .ref-example code {
          display: block;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 15px;
          overflow-x: auto;
        }

        .ref-check-list,
        .ref-number-list {
          padding-left: 22px;
        }

        .ref-check-list li,
        .ref-number-list li {
          margin-bottom: 11px;
          line-height: 1.7;
        }

        .ref-related {
          margin-top: 36px;
          padding: 22px;
          border: 1px solid var(--ref-border);
          border-radius: 15px;
          background: var(--ref-soft);
        }

        .ref-related > strong {
          display: block;
          margin-bottom: 15px;
          font-size: 14px;
        }

        .ref-pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ref-pill-row span {
          display: inline-flex;
          padding: 7px 11px;
          border-radius: 999px;
          background: var(--card-bg, #fff);
          border: 1px solid var(--ref-border);
          font-size: 12px;
          font-weight: 700;
        }

        .ref-discipline-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .ref-discipline-card {
          padding: 28px;
          border: 1px solid var(--ref-border);
          border-radius: 18px;
          background: var(--card-bg, #fff);
        }

        .ref-discipline-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: var(--ref-soft);
          margin-bottom: 18px;
        }

        .ref-discipline-card h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .ref-discipline-styles {
          display: inline-block;
          margin-bottom: 14px;
          color: var(--primary);
          font-weight: 800;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ref-discipline-card > p {
          margin: 0 0 18px;
          color: var(--ref-muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .ref-discipline-links {
          padding-top: 16px;
          border-top: 1px solid var(--ref-border);
        }

        .ref-source-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .ref-source-card {
          padding: 24px;
          border: 1px solid var(--ref-border);
          border-radius: 16px;
          background: var(--card-bg, #fff);
        }

        .ref-source-card > svg {
          margin-bottom: 15px;
        }

        .ref-source-card h3 {
          margin: 0 0 9px;
          font-size: 19px;
        }

        .ref-source-card p {
          margin: 0;
          color: var(--ref-muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .ref-note {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 20px;
          margin-top: 28px;
          border: 1px solid var(--ref-border);
          border-radius: 14px;
          background: var(--ref-soft);
        }

        .ref-note svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ref-note p {
          margin: 0;
        }

        .ref-note.warning {
          border-left: 4px solid var(--primary);
        }

        .ref-link-cluster {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 0;
          margin-top: 24px;
        }

        .ref-workflow {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border: 1px solid var(--ref-border);
          border-radius: 18px;
          overflow: hidden;
          background: var(--card-bg, #fff);
        }

        .ref-workflow > div {
          padding: 26px 20px;
          border-right: 1px solid var(--ref-border);
        }

        .ref-workflow > div:last-child {
          border-right: 0;
        }

        .ref-workflow span,
        .ref-decision-grid span {
          display: block;
          margin-bottom: 14px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--primary);
        }

        .ref-workflow h3,
        .ref-decision-grid h3 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        .ref-workflow p,
        .ref-decision-grid p {
          margin: 0;
          color: var(--ref-muted);
          font-size: 13px;
          line-height: 1.65;
        }

        .ref-mistakes-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .ref-mistake {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 14px;
          align-items: start;
          padding: 18px;
          border: 1px solid var(--ref-border);
          border-radius: 13px;
          background: var(--card-bg, #fff);
        }

        .ref-mistake > span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: var(--ref-soft);
          font-size: 11px;
          font-weight: 800;
        }

        .ref-mistake p {
          margin: 4px 0 0;
          font-size: 14px;
          line-height: 1.65;
        }

        .ref-integrity {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.4fr);
          gap: 70px;
          align-items: start;
        }

        .ref-integrity h2 {
          margin: 5px 0 0;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .ref-integrity p {
          color: var(--text);
          line-height: 1.8;
        }

        .ref-decision-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          overflow: hidden;
          border: 1px solid var(--ref-border);
          border-radius: 18px;
          background: var(--ref-border);
        }

        .ref-decision-grid article {
          padding: 26px;
          background: var(--card-bg, #fff);
        }

        .ref-resource-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .ref-resource-card {
          display: grid;
          grid-template-columns: 44px 1fr 20px;
          gap: 15px;
          align-items: start;
          padding: 23px;
          border: 1px solid var(--ref-border);
          border-radius: 16px;
          color: var(--text);
          background: var(--card-bg, #fff);
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .ref-resource-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.07);
        }

        .ref-resource-card > svg:first-child {
          width: 23px;
          height: 23px;
          margin-top: 2px;
        }

        .ref-resource-card h3 {
          margin: 0 0 6px;
          font-size: 18px;
        }

        .ref-resource-card p {
          margin: 0;
          color: var(--ref-muted);
          font-size: 13px;
          line-height: 1.65;
        }

        .ref-resource-card > svg:last-child {
          margin-top: 4px;
        }

        .ref-faq-list {
          max-width: 900px;
          margin: 0 auto;
        }

        .ref-faq {
          border-top: 1px solid var(--ref-border);
        }

        .ref-faq:last-child {
          border-bottom: 1px solid var(--ref-border);
        }

        .ref-faq summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 22px 4px;
          cursor: pointer;
          list-style: none;
          font-weight: 750;
        }

        .ref-faq summary::-webkit-details-marker {
          display: none;
        }

        .ref-faq[open] summary svg {
          transform: rotate(90deg);
        }

        .ref-faq summary svg {
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .ref-faq p {
          max-width: 850px;
          margin: -5px 0 22px;
          color: var(--ref-muted);
          line-height: 1.75;
          font-size: 15px;
        }

        .ref-final-check {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 70px;
          align-items: start;
          padding: 42px;
          border: 1px solid var(--ref-border);
          border-radius: 22px;
          background: var(--card-bg, #fff);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.05);
        }

        .ref-final-check h2 {
          margin: 4px 0 12px;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .ref-final-check > div:first-child > p:last-child {
          color: var(--ref-muted);
          line-height: 1.7;
        }

        .ref-final-list {
          display: grid;
          gap: 13px;
        }

        .ref-final-list > div {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding-bottom: 13px;
          border-bottom: 1px solid var(--ref-border);
          font-size: 14px;
          line-height: 1.6;
        }

        .ref-final-list > div:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .ref-final-list svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ref-cta {
          padding: 0 0 80px;
          background: var(--section-tint);
        }

        .ref-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          padding: 54px;
          border-radius: 24px;
          background: var(--text);
          color: var(--background);
        }

        .ref-cta-inner h2 {
          margin: 4px 0 14px;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .ref-cta-inner > div:first-child {
          max-width: 720px;
        }

        .ref-cta-inner > div:first-child > p:last-child {
          margin: 0;
          opacity: 0.82;
          line-height: 1.75;
        }

        .ref-cta .eyebrow {
          color: inherit;
          opacity: 0.65;
        }

        @media (max-width: 1000px) {
          .ref-quick-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .ref-style-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ref-workflow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ref-workflow > div {
            border-bottom: 1px solid var(--ref-border);
          }

          .ref-workflow > div:nth-child(2n) {
            border-right: 0;
          }

          .ref-workflow > div:last-child {
            border-bottom: 0;
          }

          .ref-discipline-grid {
            grid-template-columns: 1fr;
          }

          .ref-decision-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .ref-intro-grid,
          .ref-integrity,
          .ref-final-check {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .ref-three-grid,
          .ref-style-grid,
          .ref-source-grid,
          .ref-resource-grid {
            grid-template-columns: 1fr;
          }

          .ref-quick-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ref-mistakes-grid {
            grid-template-columns: 1fr;
          }

          .ref-decision-grid {
            grid-template-columns: 1fr;
          }

          .ref-cta-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 36px 28px;
          }

          .ref-detail-heading {
            gap: 15px;
          }

          .ref-number {
            width: 46px;
            height: 46px;
          }

          .ref-final-check {
            padding: 30px 24px;
          }
        }

        @media (max-width: 520px) {
          .ref-quick-grid {
            grid-template-columns: 1fr;
          }

          .ref-workflow {
            grid-template-columns: 1fr;
          }

          .ref-workflow > div {
            border-right: 0;
            border-bottom: 1px solid var(--ref-border);
          }

          .ref-workflow > div:last-child {
            border-bottom: 0;
          }

          .ref-inline-link {
            display: flex;
            margin-right: 0;
          }

          .ref-detail-heading h2 {
            font-size: 30px;
          }

          .ref-highlight {
            padding: 24px;
          }

          .ref-cta {
            padding-bottom: 50px;
          }
        }
      `}</style>
    </>
  )
}