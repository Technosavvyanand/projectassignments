import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  FileCheck2,
  FileSearch,
  HardDrive,
  KeyRound,
  Laptop,
  LockKeyhole,
  Network,
  Search,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
  TimerReset,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '@/components/site'

export const metadata: Metadata = {
  title:
    'Digital Forensics Project & Assignment Support | Forensic Analysis & Investigation',
  description:
    'Explore digital forensics concepts including evidence acquisition, chain of custody, disk and memory forensics, file-system analysis, mobile and cloud evidence, forensic tools, lab reports and investigation methodology.',
  keywords: [
    'digital forensics',
    'digital forensics assignment help online',
    'digital forensics project',
    'digital forensics academic project',
    'digital forensics research',
    'digital forensics lab',
    'digital forensics lab report writing template',
    'digital forensic investigation',
    'digital evidence analysis',
    'chain of custody digital forensics',
    'mobile device forensics chain of custody guide',
    'memory forensics',
    'how to analyze memory dumps volatility assignment',
    'Volatility 3',
    'Autopsy digital forensics',
    'FTK Imager',
    'disk forensics',
    'file system forensics',
    'cloud storage evidence acquisition homework',
    'computer forensics',
    'cybersecurity project help',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/cybersecurity/digital-forensics',
  },
  openGraph: {
    title:
      'Digital Forensics Project & Assignment Support | ProjectAssignments',
    description:
      'Structured guidance for digital evidence acquisition, chain of custody, disk and memory forensics, forensic tools, investigation methodology and technical reporting.',
    url: 'https://projectassignments.com/services/cybersecurity/digital-forensics',
    type: 'article',
    images: [
      {
        url: 'https://projectassignments.com/images/digital-forensics.png',
        width: 1408,
        height: 768,
        alt:
          'Digital forensics investigation process showing identification, preservation, collection and acquisition, analysis, reporting and presentation with continuous chain-of-custody documentation',
      },
    ],
  },
}

const pageUrl =
  'https://projectassignments.com/services/cybersecurity/digital-forensics'

const faqs = [
  {
    question: 'Can you help with a digital forensics assignment or laboratory?',
    answer:
      'Yes. We can provide structured guidance for academic digital forensics laboratories and projects involving evidence acquisition, preservation, disk analysis, memory analysis, forensic artefacts, investigation methodology and technical reporting.',
  },
  {
    question: 'Why is chain of custody important in digital forensics?',
    answer:
      'Chain of custody provides a documented history of how evidence was identified, collected, transferred, stored and analysed. It helps demonstrate that evidence was handled systematically and that its integrity was protected throughout the investigation.',
  },
  {
    question: 'Can you explain forensic disk imaging and hashing?',
    answer:
      'Yes. Guidance can cover forensic imaging concepts, write protection, image formats, acquisition procedures and cryptographic hash verification using algorithms such as MD5 or SHA-256 where appropriate to the laboratory or project requirements.',
  },
  {
    question: 'Can you help with Volatility memory-forensics assignments?',
    answer:
      'Yes. Technical guidance can cover memory-forensics concepts, process analysis, network artefacts, suspicious activity investigation and interpretation of Volatility 3 results within an authorised academic or laboratory environment.',
  },
  {
    question: 'Can you help with Autopsy or FTK Imager?',
    answer:
      'Yes. We can help explain the purpose and workflow of common forensic tools, interpret their outputs, structure evidence analysis and document findings in a clear technical report.',
  },
  {
    question: 'Do you support mobile and cloud forensics projects?',
    answer:
      'Yes. Guidance can cover the conceptual and methodological aspects of mobile-device and cloud evidence acquisition, preservation, artefact analysis, limitations and documentation.',
  },
]

const investigationAreas = [
  {
    icon: HardDrive,
    title: 'Disk & Storage Forensics',
    description:
      'Analyse forensic disk images, partitions, file systems, deleted files, metadata and storage artefacts to reconstruct relevant user or system activity.',
  },
  {
    icon: Activity,
    title: 'Memory Forensics',
    description:
      'Study volatile-memory evidence to investigate running processes, network connections, loaded modules and other artefacts that may disappear after system shutdown.',
  },
  {
    icon: Search,
    title: 'File-System & Artefact Analysis',
    description:
      'Examine operating-system artefacts such as NTFS metadata, MFT records, registry hives, Prefetch, Shimcache, logs and application traces.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Device Forensics',
    description:
      'Explore the forensic investigation of smartphones and mobile-device artefacts, including acquisition concepts, application data, communications and evidence preservation.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Remote Evidence',
    description:
      'Study evidence-acquisition challenges associated with cloud storage, remote services, account activity, access records and distributed digital environments.',
  },
  {
    icon: Network,
    title: 'Network Evidence',
    description:
      'Analyse packet captures, network logs, connection records and related evidence to reconstruct communications and identify potentially suspicious activity.',
  },
]

const evidenceTypes = [
  {
    icon: Laptop,
    title: 'Computers & Workstations',
    items: [
      'Disk images',
      'Operating-system artefacts',
      'User profiles',
      'Browser history',
      'Application artefacts',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Devices',
    items: [
      'Device artefacts',
      'Application data',
      'Messages and communications',
      'Location-related artefacts',
      'Device metadata',
    ],
  },
  {
    icon: Network,
    title: 'Network Evidence',
    items: [
      'PCAP files',
      'Firewall logs',
      'DNS records',
      'Connection logs',
      'Network-flow information',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Evidence',
    items: [
      'Cloud storage activity',
      'Access records',
      'Account activity',
      'File metadata',
      'Audit information',
    ],
  },
]

const forensicConcepts = [
  {
    icon: ShieldCheck,
    title: 'Evidence Acquisition & Preservation',
    body:
      'Understand how digital evidence is identified, preserved and acquired while minimising the risk of alteration. Academic laboratories can explore write-blocking, forensic imaging, acquisition documentation and evidence handling procedures.',
  },
  {
    icon: LockKeyhole,
    title: 'Chain of Custody & Integrity',
    body:
      'Build a clear audit trail covering evidence identification, collection, transfer, storage and analysis. Cryptographic hashes can be used to demonstrate that acquired forensic images or files remain consistent with their documented baseline.',
  },
  {
    icon: Activity,
    title: 'Memory & Volatile Evidence',
    body:
      'Investigate volatile evidence from RAM, including processes, network connections, loaded components and other artefacts that may not be recoverable from a conventional disk image.',
  },
  {
    icon: FileSearch,
    title: 'File-System & Operating-System Artefacts',
    body:
      'Examine file-system structures, registry hives, application artefacts, logs, execution traces and metadata to reconstruct user and system activity.',
  },
  {
    icon: TimerReset,
    title: 'Timeline Reconstruction',
    body:
      'Correlate timestamps and artefacts to build a chronological understanding of events. Timeline analysis can help connect files, processes, user activity and system events into a coherent investigative narrative.',
  },
  {
    icon: FileCheck2,
    title: 'Findings & Technical Reporting',
    body:
      'Translate technical observations into structured findings supported by evidence, methodology, screenshots, artefact locations, limitations and clearly reasoned conclusions.',
  },
]

const tools = [
  {
    icon: Search,
    title: 'Autopsy & The Sleuth Kit',
    description:
      'Open-source digital forensics platforms used for disk-image examination, keyword searching, artefact analysis, hashing, timelines and case management.',
  },
  {
    icon: HardDrive,
    title: 'FTK Imager',
    description:
      'A widely used forensic imaging and evidence-preview tool for understanding acquisition workflows, disk images, evidence containers and integrity verification.',
  },
  {
    icon: Activity,
    title: 'Volatility 3',
    description:
      'A memory-forensics framework used to examine volatile memory and investigate processes, network activity, loaded modules and other system artefacts.',
  },
  {
    icon: Network,
    title: 'Wireshark',
    description:
      'A packet-analysis platform useful for examining PCAP files, protocols, network conversations and communication patterns relevant to forensic investigations.',
  },
  {
    icon: TerminalSquare,
    title: 'Command-Line Forensic Utilities',
    description:
      'Command-line tools and scripting concepts can support hashing, file analysis, evidence organisation, automation and reproducible forensic workflows.',
  },
]

const reportRows = [
  {
    section: 'Executive Summary',
    elements:
      'Investigation objective, high-level findings, important conclusions and concise incident context.',
    focus:
      'Clear communication of the investigation outcome for non-technical and technical readers.',
  },
  {
    section: 'Evidence Details',
    elements:
      'Evidence identifiers, source information, acquisition details, image information and cryptographic hashes.',
    focus:
      'Demonstrating evidence integrity and maintaining a traceable chain of custody.',
  },
  {
    section: 'Methodology & Tools',
    elements:
      'Forensic procedures, tool names and versions, acquisition approach, analysis environment and relevant assumptions.',
    focus:
      'Making the investigation methodology understandable and reproducible.',
  },
  {
    section: 'Technical Analysis',
    elements:
      'Screenshots, artefact locations, timelines, registry entries, logs, memory findings and other supporting evidence.',
    focus:
      'Connecting technical observations to the investigation question.',
  },
  {
    section: 'Findings & Interpretation',
    elements:
      'Individual findings, supporting evidence, significance, limitations and confidence considerations.',
    focus:
      'Separating observed evidence from assumptions or unsupported conclusions.',
  },
  {
    section: 'Conclusion & Recommendations',
    elements:
      'Overall conclusion, security recommendations, unresolved questions and possible follow-up analysis.',
    focus:
      'Answering the investigation objective and identifying appropriate next steps.',
  },
]

const projectAreas = [
  'Digital evidence acquisition and preservation',
  'Chain-of-custody documentation',
  'Forensic disk imaging and verification',
  'Windows forensic artefact analysis',
  'NTFS and Master File Table analysis',
  'Registry hive examination',
  'Browser and application artefact analysis',
  'Deleted-file and unallocated-space analysis',
  'Memory forensics using Volatility 3',
  'Network evidence and PCAP analysis',
  'Mobile-device forensic concepts',
  'Cloud-storage evidence acquisition concepts',
  'Digital investigation timelines',
  'Malware-related forensic artefact analysis',
  'Forensic report preparation and review',
  'Evidence interpretation and technical presentation',
]

const methodology = [
  {
    number: '01',
    title: 'Identify',
    text:
      'Define the investigation objective, identify potential evidence sources and establish the systems, devices, accounts or storage locations relevant to the investigation.',
  },
  {
    number: '02',
    title: 'Preserve',
    text:
      'Protect the original evidence from unnecessary alteration and document the initial condition, handling requirements and preservation measures.',
  },
  {
    number: '03',
    title: 'Acquire',
    text:
      'Create appropriate forensic copies or acquire relevant evidence using controlled procedures. Record acquisition details and verify integrity where required.',
  },
  {
    number: '04',
    title: 'Analyse',
    text:
      'Examine files, artefacts, memory, logs, network evidence and timelines to identify information relevant to the investigation question.',
  },
  {
    number: '05',
    title: 'Interpret',
    text:
      'Correlate individual artefacts and observations to establish relationships, timelines and possible explanations while distinguishing evidence from inference.',
  },
  {
    number: '06',
    title: 'Report',
    text:
      'Document methodology, evidence, findings, limitations and conclusions in a structured forensic report supported by appropriate technical evidence.',
  },
]

const relatedServices = [
  {
    title: 'Network Security',
    href: '/services/cybersecurity/network-security',
    description:
      'Explore network architecture, packet analysis, firewall controls, monitoring and network threat detection.',
  },
  {
    title: 'Penetration Testing',
    href: '/services/cybersecurity/penetration-testing',
    description:
      'Explore controlled security testing, reconnaissance, vulnerability validation and technical security reporting.',
  },
  {
    title: 'Vulnerability Assessment',
    href: '/services/cybersecurity/vulnerability-assessment',
    description:
      'Study vulnerability identification, classification, evidence organisation and remediation planning.',
  },
  {
    title: 'Security Operations & SIEM',
    href: '/services/cybersecurity/security-operations-siem',
    description:
      'Explore security monitoring, log analysis, incident investigation and SIEM-based technical workflows.',
  },
]

const forensicPrinciples = [
  'Preserve original evidence whenever practical',
  'Document evidence handling and transfers',
  'Use appropriate acquisition procedures',
  'Verify forensic copies with cryptographic hashes',
  'Maintain a clear and traceable chain of custody',
  'Record tools, versions and relevant environment details',
  'Distinguish observed evidence from interpretation',
  'Document limitations and investigative assumptions',
]

const digitalForensicsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
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
          name: 'Services',
          item: 'https://projectassignments.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Cybersecurity',
          item: 'https://projectassignments.com/services/cybersecurity',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Digital Forensics',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Digital Forensics Project & Assignment Support',
      url: pageUrl,
      description:
        'Technical guidance covering digital evidence acquisition, preservation, chain of custody, disk and memory forensics, forensic artefact analysis, investigation methodology and technical reporting.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com/',
      },
      areaServed: [
        {
          '@type': 'Place',
          name: 'Worldwide',
        },
      ],
      serviceType: 'Digital forensics academic and technical consultancy',
    },
    {
      '@type': 'ImageObject',
      name: 'Digital Forensics Investigation Process',
      contentUrl:
        'https://projectassignments.com/images/digital-forensics.png',
      description:
        'Digital forensics investigation process showing identification, preservation, collection and acquisition, analysis, reporting and presentation, with continuous chain-of-custody documentation.',
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

export default function DigitalForensicsPage() {
  return (
    <>
      

      <main className="bg-white text-slate-800">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-cyan-50/40">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-800 shadow-sm">
                <FileSearch className="h-4 w-4" aria-hidden="true" />
                Cybersecurity • Digital Forensics
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Digital Forensics Projects, Investigation &amp; Technical
                Guidance
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Structured guidance for digital evidence acquisition,
                preservation, chain of custody, forensic analysis, memory
                investigation and technical reporting.
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                Digital forensics projects require both technical understanding
                and disciplined evidence handling. We help students and
                researchers connect forensic methodology, industry-standard
                tools, evidence interpretation and clear documentation within
                authorised academic and laboratory environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition hover:bg-cyan-800"
                >
                  Get Guidance
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/services/cybersecurity"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  Cybersecurity Services
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                <span>Evidence integrity</span>
                <span>Forensic methodology</span>
                <span>Technical reporting</span>
                <span>Responsible guidance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Understanding Digital Forensics
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Turning digital evidence into defensible investigative findings
              </h2>

              <div className="mt-6 space-y-4 leading-7 text-slate-600">
                <p>
                  Digital forensics is the structured process of identifying,
                  preserving, acquiring, examining and interpreting digital
                  evidence. Depending on the investigation, evidence may exist
                  on computers, mobile devices, removable storage, network
                  infrastructure, cloud services or volatile memory.
                </p>

                <p>
                  A strong digital forensics assignment therefore involves much
                  more than opening a forensic image in a tool. The investigator
                  must understand evidence integrity, acquisition procedures,
                  chain of custody, artefact interpretation, timestamps,
                  investigative limitations and the relationship between
                  individual pieces of evidence.
                </p>

                <p>
                  For academic and technical projects, these concepts can be
                  transformed into reproducible laboratory procedures, evidence
                  logs, screenshots, timelines, technical findings and a
                  professionally structured forensic report.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-100 p-3 text-cyan-700">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Core forensic principles
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Reliable forensic work depends on disciplined evidence
                    handling.
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {forensicPrinciples.slice(0, 6).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Investigation process image */}
        <section className="border-y border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Digital Forensics Investigation Process
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                From evidence identification to forensic presentation
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                A structured investigation connects identification, preservation,
                evidence acquisition, analysis, reporting and presentation while
                maintaining continuous documentation of evidence handling.
              </p>
            </div>

            <figure className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
              <Image
                src="/images/digital-forensics.png"
                alt="Digital forensics investigation process showing six stages: identification of potential evidence sources, preservation of the digital scene, collection and acquisition of evidence, forensic analysis, reporting of findings, and presentation of evidence and conclusions, with continuous chain-of-custody documentation"
                width={1408}
                height={768}
                className="h-auto w-full rounded-xl"
                priority={false}
              />

              <figcaption className="px-2 pb-2 pt-4 text-center text-sm leading-6 text-slate-500">
                Digital forensics investigation workflow covering identification,
                preservation, collection and acquisition, analysis, reporting
                and presentation, with chain-of-custody documentation maintained
                throughout the process.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Core technical areas */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Core Technical Areas
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Digital forensic analysis across modern evidence environments
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Digital forensics projects can focus on a single evidence source
              or combine multiple forensic disciplines to answer a broader
              investigative question.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {investigationAreas.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex rounded-lg bg-cyan-50 p-3 text-cyan-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-950">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {area.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        {/* Evidence acquisition and chain of custody */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Evidence Acquisition &amp; Chain of Custody
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Protecting evidence integrity from acquisition through
                  analysis
                </h2>

                <div className="mt-6 space-y-4 leading-7 text-slate-300">
                  <p>
                    Every forensic investigation begins with careful
                    identification and preservation of potential evidence. The
                    objective is to collect relevant information while minimising
                    unnecessary changes to the original source.
                  </p>

                  <p>
                    Depending on the laboratory scenario, acquisition may involve
                    forensic disk imaging, memory capture, mobile-device
                    acquisition or collection of relevant network and cloud
                    evidence.
                  </p>

                  <p>
                    Hash verification can provide an additional integrity check
                    for acquired forensic images or files. Algorithms such as
                    MD5 and SHA-256 may be encountered in academic exercises,
                    although the appropriate procedure should always follow the
                    requirements of the investigation and forensic environment.
                  </p>

                  <p>
                    Chain-of-custody documentation complements these technical
                    controls by recording who handled the evidence, when it was
                    handled, why it was transferred and how it was protected.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: HardDrive,
                    title: 'Forensic Imaging',
                    text:
                      'Create and document forensic copies of storage media while protecting the original evidence.',
                  },
                  {
                    icon: KeyRound,
                    title: 'Hash Verification',
                    text:
                      'Use cryptographic hashes to compare evidence states and support integrity verification.',
                  },
                  {
                    icon: ClipboardCheck,
                    title: 'Evidence Logging',
                    text:
                      'Record evidence identifiers, handling events, acquisition details and transfers.',
                  },
                  {
                    icon: LockKeyhole,
                    title: 'Evidence Preservation',
                    text:
                      'Maintain appropriate controls to reduce the risk of accidental alteration or loss.',
                  },
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-5"
                    >
                      <Icon
                        className="h-5 w-5 text-cyan-300"
                        aria-hidden="true"
                      />

                      <h3 className="mt-4 font-semibold">{item.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Forensic concepts */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Forensic Analysis Concepts
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                From raw evidence to meaningful investigative interpretation
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Effective forensic analysis requires understanding what an
                artefact represents, where it came from, how reliable it is and
                how it relates to other evidence.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {forensicConcepts.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 rounded-lg bg-cyan-50 p-3 text-cyan-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Memory forensics */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Memory Forensics
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Understanding volatile evidence with Volatility 3
              </h2>

              <div className="mt-6 space-y-4 leading-7 text-slate-600">
                <p>
                  Volatile memory can contain information that is not necessarily
                  available in a conventional disk image. A memory-forensics
                  assignment may therefore require analysing a captured RAM
                  image to understand processes, network connections, loaded
                  components and other system state.
                </p>

                <p>
                  The Volatility Framework provides a structured environment for
                  examining memory artefacts. Students may encounter analyses
                  involving process trees, process listings, network endpoints,
                  loaded modules and suspicious process behaviour.
                </p>

                <p>
                  The important academic objective is not simply executing a
                  command. Findings need to be interpreted in context and linked
                  back to the investigation question, evidence source and
                  limitations of the memory capture.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-100 p-3 text-cyan-700">
                  <Activity className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Common memory-analysis themes
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Examples of concepts encountered in academic laboratories.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  'Process and process-tree reconstruction',
                  'Network endpoint and connection analysis',
                  'Loaded modules and system components',
                  'Suspicious or anomalous process investigation',
                  'Memory-resident artefact interpretation',
                  'Correlation with disk and other evidence sources',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600"
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="border-y border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Forensic Tools &amp; Environments
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Industry-recognised tools for controlled forensic analysis
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Technical guidance can cover the purpose, workflow, output
                interpretation and documentation associated with commonly used
                digital forensics tools.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => {
                const Icon = tool.icon

                return (
                  <article
                    key={tool.title}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="inline-flex rounded-lg bg-cyan-50 p-3 text-cyan-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-slate-950">
                      {tool.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {tool.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Evidence environments */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Evidence Environments
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Different evidence sources require different investigative
              approaches
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The nature of the evidence determines the acquisition, analysis
              and documentation techniques that are appropriate for the project.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {evidenceTypes.map((type) => {
              const Icon = type.icon

              return (
                <article
                  key={type.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex rounded-lg bg-cyan-50 p-3 text-cyan-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-semibold text-slate-950">
                    {type.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {type.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-600"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </section>

        {/* Report structure */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                Digital Forensics Lab Report
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Turning forensic analysis into a structured technical report
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                A good forensic report should allow a reader to understand what
                was investigated, what evidence was examined, how the analysis
                was performed, what was discovered and how the conclusions were
                reached.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-xl border border-slate-700">
              <table className="min-w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-900">
                    <th className="px-5 py-4 text-sm font-semibold text-cyan-200">
                      Report Section
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold text-cyan-200">
                      Required Elements
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold text-cyan-200">
                      Key Focus
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {reportRows.map((row) => (
                    <tr
                      key={row.section}
                      className="border-b border-slate-800 last:border-b-0"
                    >
                      <td className="px-5 py-5 align-top">
                        <strong className="text-white">{row.section}</strong>
                      </td>

                      <td className="px-5 py-5 align-top text-sm leading-6 text-slate-300">
                        {row.elements}
                      </td>

                      <td className="px-5 py-5 align-top text-sm leading-6 text-slate-300">
                        {row.focus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Academic project topics */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Academic &amp; Research Projects
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Topics that can be explored through practical digital forensics
                work
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Digital forensics projects can combine theoretical investigation
                concepts with practical evidence analysis. The exact scope can
                be adapted to the academic requirements, available evidence,
                tools and research objectives.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {projectAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600"
                    aria-hidden="true"
                  />

                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Structured Investigation Methodology
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                A repeatable framework for digital forensic investigations
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The following framework connects evidence handling with
                technical analysis and reporting, helping transform individual
                observations into a defensible investigative narrative.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {methodology.map((step) => (
                <article
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-bold text-cyan-700">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Responsible forensic analysis */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Responsible Forensic Analysis
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Evidence should be interpreted carefully, not simply collected
              </h2>

              <div className="mt-6 space-y-4 leading-7 text-slate-600">
                <p>
                  Digital evidence can be technically complex and sometimes
                  ambiguous. A timestamp, registry entry, process or network
                  connection should therefore be interpreted in context rather
                  than treated automatically as proof of a particular event.
                </p>

                <p>
                  Strong forensic coursework demonstrates the relationship
                  between the evidence, the methodology used to obtain it and
                  the conclusion being presented. It should also acknowledge
                  relevant limitations and distinguish direct observations from
                  investigative interpretation.
                </p>

                <p>
                  Our guidance focuses on understanding these principles and
                  developing technically defensible academic work in authorised
                  laboratory and research environments.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-100 p-3 text-cyan-700">
                  <FileCheck2 className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    What strong forensic documentation should show
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {forensicPrinciples.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Frequently Asked Questions
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Digital forensics project and assignment guidance
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Common questions about digital evidence, forensic tools,
                investigation methodology and technical reporting.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-950 marker:hidden">
                    <span>{faq.question}</span>
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Explore More
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Related Cybersecurity Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Digital forensics intersects with network security, vulnerability
              assessment, penetration testing and security operations. Explore
              related areas to understand the broader cybersecurity context of
              your project.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-semibold text-slate-950 group-hover:text-cyan-700">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  <ArrowRight
                    className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-600"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="rounded-2xl bg-gradient-to-r from-cyan-800 to-slate-900 px-6 py-10 text-white sm:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
                  Digital Forensics Project?
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Need help understanding the evidence, methodology or report?
                </h2>

                <p className="mt-3 leading-7 text-cyan-50/90">
                  Get guidance on structuring your investigation, selecting an
                  appropriate analysis approach, interpreting forensic evidence
                  and organising the technical documentation.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-cyan-50"
              >
                Get Guidance
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(digitalForensicsSchema),
          }}
        />
      </main>

      <Footer />
    </>
  )
}