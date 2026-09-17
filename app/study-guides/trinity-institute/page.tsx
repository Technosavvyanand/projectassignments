import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Car,
  CheckCircle2,
  ChefHat,
  Code2,
  FileText,
  GraduationCap,
  Hammer,
  HardHat,
  Laptop,
  Network,
  Paintbrush,
  Search,
  Settings,
  ShieldCheck,
  Users,
  UtensilsCrossed,
  Wifi,
  Wrench,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Trinity Institute Assignment Help | Trinity Institute Study Guide',
  description:
    'Independent Trinity Institute study guide covering Trinity Institute assignments, assessments, units of competency, business, IT, cyber security, automotive, construction, carpentry, hospitality, community services and academic support.',
  keywords: [
    'Trinity Institute assignment help',
    'Trinity Institute assignments',
    'Trinity Institute assignment',
    'Trinity Institute assessment help',
    'Trinity Institute assessments',
    'Trinity Institute study guide',
    'Trinity Institute study guides',
    'Trinity Institute student guide',
    'Trinity Institute academic support',
    'Trinity Institute academic help',
    'Trinity Institute coursework help',
    'Trinity Institute homework help',
    'Trinity Institute project help',
    'Trinity Institute project support',
    'Trinity Institute assessment support',
    'Trinity Institute assessment guidance',
    'Trinity Institute assignment support',
    'Trinity Institute assignment assistance',
    'Trinity Institute academic assistance',
    'Trinity Institute online study help',
    'Trinity Institute student support',
    'Trinity Institute Australia assignment help',
    'Trinity Institute Australia assignments',
    'Trinity Institute Australia study guide',
    'Trinity Institute Australia academic support',
    'Trinity Institute Australia assessment help',
    'Trinity Institute Australia student guide',
    'Trinity Institute Sydney assignment help',
    'Trinity Institute Parramatta assignment help',
    'Trinity Institute assignments Australia',
    'Trinity Institute assessment help Australia',
    'Trinity Institute course assignment help',
    'Trinity Institute unit assignment help',
    'Trinity Institute unit of competency help',
    'Trinity Institute units of competency',
    'Trinity Institute vocational assignment help',
    'Trinity Institute VET assignment help',
    'Trinity Institute VET assessment help',
    'Trinity Institute competency assessment help',
    'Trinity Institute practical assessment help',
    'Trinity Institute theory assessment help',
    'Trinity Institute report writing help',
    'Trinity Institute research help',
    'Trinity Institute academic writing help',
    'Trinity Institute technical assignment help',
    'Trinity Institute assignment guidance',
    'Trinity Institute assessment guidance',
    'Trinity Institute student resources',
    'Trinity Institute course guide',
    'Trinity Institute course work help',
    'Trinity Institute unit guide',
    'Trinity Institute learning support',
    'Trinity Institute business assignment help',
    'Trinity Institute business assignments',
    'Trinity Institute Diploma of Business assignment help',
    'BSB50120 assignment help',
    'BSB50120 Diploma of Business assignment help',
    'Trinity Institute Advanced Diploma of Business assignment help',
    'BSB60120 assignment help',
    'BSB60120 Advanced Diploma of Business assignment help',
    'Trinity Institute Graduate Diploma assignment help',
    'BSB80120 assignment help',
    'BSB80120 Graduate Diploma of Management assignment help',
    'Trinity Institute management assignment help',
    'Trinity Institute management assignments',
    'Trinity Institute marketing assignment help',
    'Trinity Institute finance assignment help',
    'Trinity Institute project management assignment help',
    'Trinity Institute business report help',
    'Trinity Institute risk management assignment help',
    'Trinity Institute sustainability assignment help',
    'Trinity Institute critical thinking assignment help',
    'Trinity Institute professional development assignment help',
    'Trinity Institute IT assignment help',
    'Trinity Institute information technology assignment help',
    'Trinity Institute information technology assignments',
    'Trinity Institute cyber security assignment help',
    'Trinity Institute cybersecurity assignment help',
    'Trinity Institute cyber security assignments',
    'Trinity Institute cybersecurity assignments',
    'Trinity Institute Diploma of IT assignment help',
    'ICT50220 assignment help',
    'ICT50220 Diploma of Information Technology assignment help',
    'ICT60220 assignment help',
    'ICT60220 Advanced Diploma of Information Technology assignment help',
    'Trinity Institute telecommunications assignment help',
    'Trinity Institute network engineering assignment help',
    'Trinity Institute networking assignment help',
    'Trinity Institute network security assignment help',
    'Trinity Institute programming assignment help',
    'Trinity Institute database assignment help',
    'Trinity Institute cloud computing assignment help',
    'Trinity Institute systems analysis assignment help',
    'Trinity Institute cyber security project help',
    'Trinity Institute IT project help',
    'Trinity Institute automotive assignment help',
    'Trinity Institute automotive assignments',
    'Trinity Institute automotive assessment help',
    'Trinity Institute automotive technology assignment help',
    'Trinity Institute automotive electrical assignment help',
    'Trinity Institute automotive mechanic assignment help',
    'Trinity Institute automotive diagnostics assignment help',
    'AUR30620 assignment help',
    'AUR30620 Certificate III assignment help',
    'AUR30320 assignment help',
    'AUR30320 Certificate III Automotive Electrical assignment help',
    'AUR40216 assignment help',
    'AUR40216 Certificate IV assignment help',
    'AUR50216 assignment help',
    'AUR50216 Diploma of Automotive Technology assignment help',
    'AUR32721 assignment help',
    'Trinity Institute light vehicle mechanical assignment help',
    'Trinity Institute automotive electrical technology assignment help',
    'Trinity Institute automotive mechanical diagnosis assignment help',
    'Trinity Institute automotive technology project help',
    'Trinity Institute automotive workshop assessment help',
    'Trinity Institute EV assignment help',
    'Trinity Institute electric vehicle assignment help',
    'Trinity Institute construction assignment help',
    'Trinity Institute construction assignments',
    'Trinity Institute building assignment help',
    'Trinity Institute carpentry assignment help',
    'Trinity Institute carpentry assignments',
    'Trinity Institute cabinet making assignment help',
    'Trinity Institute joinery assignment help',
    'Trinity Institute wall and floor tiling assignment help',
    'Trinity Institute bricklaying assignment help',
    'Trinity Institute plastering assignment help',
    'Trinity Institute painting and decorating assignment help',
    'Trinity Institute building and construction assignment help',
    'CPC30220 assignment help',
    'CPC30220 Certificate III Carpentry assignment help',
    'MSF30322 assignment help',
    'MSF30322 Cabinet Making assignment help',
    'CPC31320 assignment help',
    'CPC31320 Wall and Floor Tiling assignment help',
    'CPC33020 assignment help',
    'CPC33020 Bricklaying assignment help',
    'CPC31920 assignment help',
    'CPC31920 Joinery assignment help',
    'CPC31020 assignment help',
    'CPC31020 Solid Plastering assignment help',
    'CPC30620 assignment help',
    'CPC30620 Painting and Decorating assignment help',
    'CPC40120 assignment help',
    'CPC40120 Certificate IV Building and Construction assignment help',
    'CPC50220 assignment help',
    'CPC50220 Diploma Building and Construction assignment help',
    'Trinity Institute building report help',
    'Trinity Institute trade assessment help',
    'Trinity Institute practical trade assignment help',
    'Trinity Institute community services assignment help',
    'Trinity Institute community services assignments',
    'Trinity Institute community services assessment help',
    'Trinity Institute Diploma of Community Services assignment help',
    'CHC52021 assignment help',
    'CHC52021 Diploma of Community Services assignment help',
    'Trinity Institute case management assignment help',
    'Trinity Institute community work assignment help',
    'Trinity Institute person centred practice assignment help',
    'Trinity Institute social support assignment help',
    'Trinity Institute community services report help',
    'Trinity Institute hospitality assignment help',
    'Trinity Institute hospitality assignments',
    'Trinity Institute hospitality management assignment help',
    'Trinity Institute cookery assignment help',
    'Trinity Institute commercial cookery assignment help',
    'Trinity Institute kitchen management assignment help',
    'Trinity Institute chef assignment help',
    'Trinity Institute food safety assignment help',
    'Trinity Institute menu planning assignment help',
    'Trinity Institute hospitality report help',
    'SIT40521 assignment help',
    'SIT40521 Certificate IV Kitchen Management assignment help',
    'SIT50422 assignment help',
    'SIT50422 Diploma Hospitality Management assignment help',
    'SIT60322 assignment help',
    'SIT60322 Advanced Diploma Hospitality Management assignment help',
    'Trinity Institute cookery assessment help',
    'Trinity Institute food preparation assessment help',
    'Trinity Institute hospitality project help',
    'Trinity Institute kitchen practical assessment help',
    'Trinity Institute assessment answers guidance',
    'Trinity Institute assignment structure help',
    'Trinity Institute assessment brief help',
    'Trinity Institute competency unit help',
    'Trinity Institute competency based assessment help',
  ],
  alternates: {
    canonical: 'https://projectassignments.com/study-guides/trinity-institute',
  },
  openGraph: {
    title:
      'Trinity Institute Assignment Help | Trinity Institute Study Guide',
    description:
      'Independent Trinity Institute study guide covering assignments, assessments, units of competency and major Trinity Institute study areas including business, IT, cyber security, automotive, construction, community services and hospitality.',
    url: 'https://projectassignments.com/study-guides/trinity-institute',
    type: 'website',
  },
}

const studyAreas = [
  {
    icon: BriefcaseBusiness,
    title: 'Business & Management',
    text:
      'Trinity Institute business students may work across communication, marketing, finance, business resources, operations, project work, sustainability, critical thinking, professional development, continuous improvement and risk management. Assignment support can focus on understanding the unit requirements, structuring reports, researching evidence and explaining practical business decisions.',
    keywords:
      'Trinity Institute business assignment help, business assignment support, business report help, management assignment help',
    links: [
      {
        label: 'Business Assignment Support',
        href: '/assignment-project-help',
      },
      {
        label: 'Research Methodology',
        href: '/services/research-methodology',
      },
    ],
  },
  {
    icon: Code2,
    title: 'Information Technology & Cyber Security',
    text:
      'IT-related study can involve information systems, programming, databases, networking, cyber security, systems analysis, technical documentation and technology projects. Students may need help understanding technical requirements, documenting solutions, analysing evidence, explaining configurations or preparing structured reports.',
    keywords:
      'Trinity Institute IT assignment help, cyber security assignment help, networking assignment help, information technology assignment help',
    links: [
      {
        label: 'IT & Technical Assignment Help',
        href: '/assignment-project-help',
      },
      {
        label: 'Technology Resources',
        href: '/technologies',
      },
    ],
  },
  {
    icon: Car,
    title: 'Automotive Technology',
    text:
      'Automotive students can encounter mechanical systems, electrical systems, diagnostics, vehicle safety, steering and suspension, braking, engine management, transmission and driveline systems and advanced automotive technology. Technical assessment work often combines underpinning knowledge with practical competency.',
    keywords:
      'Trinity Institute automotive assignment help, automotive assessment help, automotive technology assignment help',
    links: [
      {
        label: 'Technical Assignment Support',
        href: '/assignment-project-help',
      },
      {
        label: 'Research Project Help',
        href: '/assignment-project-help/research-project-help',
      },
    ],
  },
  {
    icon: Hammer,
    title: 'Carpentry, Cabinet Making & Trades',
    text:
      'Trade-focused courses can include carpentry, cabinet making and timber technology, joinery, wall and floor tiling, bricklaying and blocklaying, solid plastering, and painting and decorating. Academic and technical documentation may include workplace procedures, safety requirements, materials, tools, planning and evidence of practical competence.',
    keywords:
      'Trinity Institute carpentry assignment help, cabinet making assignment help, construction assignment help, trade assessment help',
    links: [
      {
        label: 'Assignment & Project Help',
        href: '/assignment-project-help',
      },
      {
        label: 'Technical Resources',
        href: '/technologies',
      },
    ],
  },
  {
    icon: Building2,
    title: 'Building & Construction',
    text:
      'Building and construction study may cover construction planning, building practices, materials, workplace safety, project documentation, building processes and technical requirements. Higher-level construction assignments can also require structured reports, planning documents, calculations and evidence-based explanations.',
    keywords:
      'Trinity Institute building assignment help, building and construction assignment help, construction report help',
    links: [
      {
        label: 'Construction Assignment Support',
        href: '/assignment-project-help',
      },
      {
        label: 'Research & Report Help',
        href: '/assignment-project-help/research-project-help',
      },
    ],
  },
  {
    icon: Users,
    title: 'Community Services',
    text:
      'Community services coursework can involve person-centred support, case management, community programs, social wellbeing, service coordination, ethical practice, legislation and professional responsibilities. Written assessments may require students to connect theory, policy and workplace scenarios using appropriate evidence.',
    keywords:
      'Trinity Institute community services assignment help, CHC52021 assignment help, community services assessment help',
    links: [
      {
        label: 'Community Services Assignment Support',
        href: '/assignment-project-help',
      },
      {
        label: 'Research & Academic Writing',
        href: '/services/research-methodology',
      },
    ],
  },
  {
    icon: ChefHat,
    title: 'Cookery, Kitchen & Hospitality',
    text:
      'Hospitality and kitchen-management study can involve food preparation, food safety, special dietary requirements, recipe planning and costing, menu design, kitchen operations, conflict management, budgeting, staff rostering and hospitality management. Practical assessments often sit alongside knowledge-based and written assessment tasks.',
    keywords:
      'Trinity Institute hospitality assignment help, cookery assignment help, kitchen management assignment help, hospitality assessment help',
    links: [
      {
        label: 'Hospitality Assignment Support',
        href: '/assignment-project-help',
      },
      {
        label: 'Project & Report Help',
        href: '/assignment-project-help/research-project-help',
      },
    ],
  },
]

const courses = [
  {
    category: 'Automotive',
    icon: Car,
    title: 'AUR30620 Certificate III in Light Vehicle Mechanical Technology',
    code: 'AUR30620',
    text:
      'A practical automotive qualification covering light vehicle mechanical work, diagnostic strategies, tools and equipment, electrical circuits, batteries, instruments, warning systems and automotive repair activities.',
    keywords:
      'AUR30620 assignment help, Certificate III Light Vehicle Mechanical Technology assignment help, Trinity Institute automotive assignment help',
  },
  {
    category: 'Automotive',
    icon: Wrench,
    title: 'AUR30320 Certificate III in Automotive Electrical Technology',
    code: 'AUR30320',
    text:
      'Focuses on automotive electrical systems, diagnostic strategies, electrical circuits, batteries, vehicle electrical components and related workshop practices.',
    keywords:
      'AUR30320 assignment help, Certificate III Automotive Electrical Technology assignment help, Trinity Institute auto electrician assignment help',
  },
  {
    category: 'Automotive',
    icon: Settings,
    title: 'AUR40216 Certificate IV in Automotive Mechanical Diagnosis',
    code: 'AUR40216',
    text:
      'Advanced automotive diagnostic study involving complex faults, braking, steering and suspension, engines, transmissions, driveline systems, safety systems and engine management.',
    keywords:
      'AUR40216 assignment help, Certificate IV Automotive Mechanical Diagnosis assignment help, Trinity Institute automotive diagnosis assignment help',
  },
  {
    category: 'Automotive',
    icon: Car,
    title: 'AUR50216 Diploma of Automotive Technology',
    code: 'AUR50216',
    text:
      'Advanced automotive technology study covering diagnosis, analysis, evaluation, design and modification of vehicle systems, including electrical, braking, steering, suspension, engine, fuel and driveline systems.',
    keywords:
      'AUR50216 assignment help, Diploma of Automotive Technology assignment help, Trinity Institute automotive technology assignment help',
  },
  {
    category: 'Automotive',
    icon: Wifi,
    title: 'AUR32721 Certificate III in Automotive Electric Vehicle Technology',
    code: 'AUR32721',
    text:
      'Electric-vehicle focused study covering servicing, diagnosis and repair of battery electric vehicles and their components within automotive service and repair environments.',
    keywords:
      'AUR32721 assignment help, Electric Vehicle Technology assignment help, EV automotive assignment help Trinity Institute',
  },
  {
    category: 'Building Trades',
    icon: Hammer,
    title: 'CPC30220 Certificate III in Carpentry',
    code: 'CPC30220',
    text:
      'Carpentry study combining construction knowledge, workplace practices, tools, materials, safety and practical building skills.',
    keywords:
      'CPC30220 assignment help, Certificate III Carpentry assignment help, Trinity Institute carpentry assignment help',
  },
  {
    category: 'Building Trades',
    icon: Hammer,
    title: 'MSF30322 Certificate III in Cabinet Making and Timber Technology',
    code: 'MSF30322',
    text:
      'Cabinet-making and timber-technology study involving materials, workshop processes, tools, construction methods, measurements and practical production.',
    keywords:
      'MSF30322 assignment help, Cabinet Making assignment help, Timber Technology assignment help Trinity Institute',
  },
  {
    category: 'Building Trades',
    icon: Building2,
    title: 'CPC31320 Certificate III in Wall and Floor Tiling',
    code: 'CPC31320',
    text:
      'Wall and floor tiling study involving preparation, materials, installation processes, workplace safety, planning and practical construction work.',
    keywords:
      'CPC31320 assignment help, Wall and Floor Tiling assignment help, Trinity Institute tiling assignment help',
  },
  {
    category: 'Building Trades',
    icon: Building2,
    title: 'CPC33020 Certificate III in Bricklaying and Blocklaying',
    code: 'CPC33020',
    text:
      'Bricklaying and blocklaying study focused on construction techniques, materials, workplace practices, planning and practical masonry work.',
    keywords:
      'CPC33020 assignment help, Bricklaying assignment help, Blocklaying assignment help Trinity Institute',
  },
  {
    category: 'Building Trades',
    icon: Hammer,
    title: 'CPC31920 Certificate III in Joinery',
    code: 'CPC31920',
    text:
      'Joinery study involving timber construction, workshop practices, tools, measurements, materials and joinery production for residential and commercial applications.',
    keywords:
      'CPC31920 assignment help, Joinery assignment help, Trinity Institute joinery assignment help',
  },
  {
    category: 'Building Trades',
    icon: Building2,
    title: 'CPC31020 Certificate III in Solid Plastering',
    code: 'CPC31020',
    text:
      'Solid plastering study covering preparation, materials, application techniques, finishing and workplace requirements.',
    keywords:
      'CPC31020 assignment help, Solid Plastering assignment help, Trinity Institute plastering assignment help',
  },
  {
    category: 'Building Trades',
    icon: Paintbrush,
    title: 'CPC30620 Certificate III in Painting and Decorating',
    code: 'CPC30620',
    text:
      'Painting and decorating study involving surface preparation, materials, application methods, finishing, workplace safety and professional practice.',
    keywords:
      'CPC30620 assignment help, Painting and Decorating assignment help, Trinity Institute painting assignment help',
  },
  {
    category: 'Building & Construction',
    icon: HardHat,
    title: 'CPC40120 Certificate IV in Building and Construction (Building)',
    code: 'CPC40120',
    text:
      'Building and construction study involving construction processes, planning, documentation, technical requirements and building-related workplace responsibilities.',
    keywords:
      'CPC40120 assignment help, Certificate IV Building and Construction assignment help, Trinity Institute building assignment help',
  },
  {
    category: 'Building & Construction',
    icon: Building2,
    title: 'CPC50220 Diploma of Building and Construction (Building)',
    code: 'CPC50220',
    text:
      'Higher-level building and construction study that can involve project planning, construction documentation, technical analysis, compliance and management-oriented tasks.',
    keywords:
      'CPC50220 assignment help, Diploma Building and Construction assignment help, Trinity Institute construction assignment help',
  },
  {
    category: 'Community Services',
    icon: Users,
    title: 'CHC52021 Diploma of Community Services',
    code: 'CHC52021',
    text:
      'Community services study covering specialised support work, person-centred services, case management, program coordination, professional responsibilities and workplace-based practice.',
    keywords:
      'CHC52021 assignment help, Diploma of Community Services assignment help, Trinity Institute community services assignment help',
  },
  {
    category: 'Information Technology',
    icon: ShieldCheck,
    title: 'ICT50220 Diploma of Information Technology (Cyber Security)',
    code: 'ICT50220',
    text:
      'IT and cyber security study involving technical systems, cyber security concepts, information technology operations, security practices and technical documentation.',
    keywords:
      'ICT50220 assignment help, Diploma of Information Technology Cyber Security assignment help, Trinity Institute cyber security assignment help',
  },
  {
    category: 'Information Technology',
    icon: Code2,
    title: 'ICT60220 Advanced Diploma of Information Technology (Cyber Security)',
    code: 'ICT60220',
    text:
      'Advanced IT and cyber security study involving higher-level technical analysis, security concepts, systems, risk considerations and technology project work.',
    keywords:
      'ICT60220 assignment help, Advanced Diploma IT Cyber Security assignment help, Trinity Institute cybersecurity assignment help',
  },
  {
    category: 'Information Technology',
    icon: Network,
    title:
      'ICT60220 Advanced Diploma of Information Technology (Telecommunications Network Engineering)',
    code: 'ICT60220',
    text:
      'Advanced networking and telecommunications study involving network engineering concepts, infrastructure, technical analysis, network operations and related documentation.',
    keywords:
      'ICT60220 telecommunications assignment help, Telecommunications Network Engineering assignment help, Trinity Institute networking assignment help',
  },
  {
    category: 'Business & Management',
    icon: BriefcaseBusiness,
    title: 'BSB50120 Diploma of Business',
    code: 'BSB50120',
    text:
      'Business study covering workplace communication, marketing opportunities, budgets and financial plans, business resources, complex documents, sustainability, project work, operations, critical thinking, professional development, continuous improvement and business risk.',
    keywords:
      'BSB50120 assignment help, Diploma of Business assignment help, Trinity Institute business assignment help',
  },
  {
    category: 'Business & Management',
    icon: BarChart3,
    title: 'BSB60120 Advanced Diploma of Business',
    code: 'BSB60120',
    text:
      'Advanced business study designed around complex business tasks, specialist knowledge, research and analysis, leadership and strategic workplace responsibilities.',
    keywords:
      'BSB60120 assignment help, Advanced Diploma of Business assignment help, Trinity Institute advanced business assignment help',
  },
  {
    category: 'Business & Management',
    icon: GraduationCap,
    title: 'BSB80120 Graduate Diploma of Management (Learning)',
    code: 'BSB80120',
    text:
      'Graduate-level management and learning study that can involve leadership, organisational learning, management practice, strategic thinking and professional development.',
    keywords:
      'BSB80120 assignment help, Graduate Diploma of Management assignment help, Trinity Institute management assignment help',
  },
  {
    category: 'Cookery & Hospitality',
    icon: ChefHat,
    title: 'SIT40521 Certificate IV in Kitchen Management',
    code: 'SIT40521',
    text:
      'Kitchen-management study covering commercial cookery, appetisers and salads, stocks and sauces, vegetables, vegetarian and vegan dishes, poultry, meat, seafood, cakes, pastries and breads, special diets, recipe costing, menu design, food safety, finances and staff rostering.',
    keywords:
      'SIT40521 assignment help, Certificate IV Kitchen Management assignment help, Trinity Institute cookery assignment help',
  },
  {
    category: 'Cookery & Hospitality',
    icon: UtensilsCrossed,
    title: 'SIT50422 Diploma of Hospitality Management',
    code: 'SIT50422',
    text:
      'Hospitality management study combining hospitality operations, managerial skills, business decisions and targeted cookery skills for hospitality workplaces.',
    keywords:
      'SIT50422 assignment help, Diploma Hospitality Management assignment help, Trinity Institute hospitality assignment help',
  },
  {
    category: 'Cookery & Hospitality',
    icon: GraduationCap,
    title: 'SIT60322 Advanced Diploma of Hospitality Management',
    code: 'SIT60322',
    text:
      'Advanced hospitality management study involving senior operational responsibilities, management, planning, hospitality business decisions and industry-focused skills.',
    keywords:
      'SIT60322 assignment help, Advanced Diploma Hospitality Management assignment help, Trinity Institute hospitality management assignment help',
  },
]

const businessUnits = [
  'BSBXCM501 Lead communication in the workplace',
  'BSBMKG541 Identify and evaluate marketing opportunities',
  'BSBFIN501 Manage budgets and financial plans',
  'BSBOPS501 Manage business resources',
  'BSBWRT411 Write complex documents',
  'BSBSUS511 Develop workplace policies and procedures for sustainability',
  'BSBPMG430 Undertake project work',
  'BSBOPS502 Manage business operational plans',
  'BSBCRT511 Develop critical thinking in others',
  'BSBPEF501 Manage personal and professional development',
  'BSBSTR502 Facilitate continuous improvement',
  'BSBOPS504 Manage business risk',
]

const hospitalityUnits = [
  'SITHCCC027 Prepare dishes using basic methods of cookery',
  'SITHCCC028 Prepare appetisers and salads',
  'SITHCCC029 Prepare stocks, sauces and soups',
  'SITHCCC030 Prepare vegetable, fruit, egg and farinaceous dishes',
  'SITHCCC031 Prepare vegetarian and vegan dishes',
  'SITHCCC035 Prepare poultry dishes',
  'SITHCCC036 Prepare meat dishes',
  'SITHCCC037 Prepare seafood dishes',
  'SITHCCC041 Produce cakes, pastries and breads',
  'SITHCCC042 Prepare food to meet special dietary requirements',
  'SITHCCC043 Work effectively as a cook',
  'SITHKOP010 Plan and cost recipes',
  'SITHKOP012 Develop recipes for special dietary requirements',
  'SITHKOP013 Plan cooking operations',
  'SITHKOP015 Design and cost menus',
  'SITHPAT016 Produce desserts',
  'SITXCOM010 Manage conflict',
  'SITXFIN009 Manage finances within a budget',
  'SITXFSA005 Use hygienic practices for food safety',
  'SITXFSA006 Participate in safe food handling practices',
  'SITXFSA008 Develop and implement a food safety program',
  'SITXHRM008 Roster staff',
]

const assessmentTypes = [
  'Written assignments',
  'Short-answer knowledge assessments',
  'Workplace projects',
  'Research and evidence-based reports',
  'Technical reports',
  'Case studies',
  'Project documentation',
  'Practical demonstrations',
  'Workplace simulations',
  'Competency-based assessments',
  'Observation-based assessments',
  'Portfolio evidence',
  'Reflective and workplace documentation',
  'Business reports and plans',
  'IT and cyber security technical documentation',
  'Automotive diagnostic documentation',
  'Construction planning documentation',
  'Hospitality menu and recipe documentation',
  'Food safety documentation',
  'Workplace procedures and policies',
]

// FAQ strings use syntax-safe quoting; apostrophes inside text must not terminate JS strings.
const faqs = [
  {
    question: 'What is this Trinity Institute Study Guide?',
    answer:
      'This is an independent academic resource for students studying at Trinity Institute (Australia). It provides general guidance on assignments, assessments, units of competency, research, technical documentation and study planning. It is not an official Trinity Institute publication and does not replace current course outlines, assessment instructions, policies, trainer guidance or the student portal.',
  },
  {
    question: 'Can you help with Trinity Institute assignments?',
    answer:
      'ProjectAssignments provides academic and technical guidance for students working on assignments, projects and assessments. Support can include understanding an assessment brief, planning a response, researching evidence, structuring a report, documenting technical work and improving academic or professional presentation. Students remain responsible for their own submitted work and compliance with Trinity Institute requirements.',
  },
  {
    question: 'What does Trinity Institute mean by units of competency?',
    answer:
      'Trinity Institute describes its vocational courses in terms of units of competency. These units are linked to specific skills and knowledge associated with workplace roles. A qualification may contain a combination of core and elective units, and assessment may involve both knowledge and practical competency.',
  },
  {
    question: 'Can you help with Trinity Institute business assignments?',
    answer:
      'Yes. Business-related support can cover topics such as workplace communication, marketing, budgets, business resources, operations, sustainability, project work, critical thinking, professional development, continuous improvement and risk management. Support can focus on research, structure, evidence and clear business analysis.',
  },
  {
    question: 'Can you help with Trinity Institute IT and cyber security assignments?',
    answer:
      'Yes. Technical academic support can cover IT, cyber security, networking, telecommunications and technical documentation. The appropriate approach depends on the specific unit, assessment requirements and technical task.',
  },
  {
    question: 'Can you help with Trinity Institute automotive assessments?',
    answer:
      'Yes. Automotive assessment guidance can cover technical research, diagnostic reasoning, documentation, safety considerations and the written components associated with automotive units. Practical competency must still be demonstrated according to the requirements of the course.',
  },
  {
    question: 'Can you help with Trinity Institute construction and carpentry assignments?',
    answer:
      'Yes. Support can cover research, technical documentation, planning, report structure, workplace procedures and written components associated with construction and trade qualifications. Practical skills must be completed and demonstrated according to the applicable assessment requirements.',
  },
  {
    question: 'Can you help with Trinity Institute hospitality assignments?',
    answer:
      'Yes. Hospitality and kitchen-management support can include research, report writing, menu planning concepts, recipe costing, food-safety documentation, workplace procedures and written assessment preparation. Practical cookery requirements remain subject to the course assessment process.',
  },
  {
    question: 'Where should I check Trinity Institute assessment requirements?',
    answer:
      'Students should use their current course outline, assessment instructions, learning materials, trainer guidance and Trinity Institute student resources as the authoritative sources for current requirements. Course structures and assessment arrangements can change, so older examples should not be treated as current instructions.',
  },
  {
    question: 'Is Trinity Institute Assignment Help official?',
    answer:
      'No. ProjectAssignments is an independent academic resource and is not affiliated with, endorsed by or officially connected with Trinity Institute (Australia). Current institutional requirements should always be checked against Trinity Institute resources.',
  },
]

export default function TrinityInstituteStudyGuidePage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <p className="eyebrow">Study Guide • Trinity Institute</p>

            <h1>
              Trinity Institute Assignment Help & Study Guide: Assessments,
              Courses, Units & Academic Support
            </h1>

            <p className="page-hero-description">
              An independent study resource for Trinity Institute (Australia)
              students covering assignments, assessments, units of competency,
              technical documentation and major study areas including business,
              information technology, cyber security, automotive, construction,
              carpentry, community services, cookery and hospitality.
            </p>

            <div className="page-hero-actions">
              <Link
                href="/assignment-project-help"
                className="button button-primary"
              >
                Explore Assignment Support
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/study-guides"
                className="button button-secondary"
              >
                All Study Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NON-AFFILIATION NOTICE */}
      <section className="section">
        <div className="container">
          <div className="notice-box">
            <ShieldCheck size={22} />

            <div>
              <strong>Independent study resource</strong>
              <p>
                ProjectAssignments is not affiliated with, endorsed by, or
                officially connected with Trinity Institute (Australia). This
                page provides independent academic and technical guidance only.
                Always use your current Trinity Institute course outline,
                assessment brief, learning materials, trainer instructions and
                official student resources as the authoritative source for
                course requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Trinity Institute Student Guide</p>
            <h2>
              Understanding Trinity Institute study, assessment and units of
              competency
            </h2>
          </div>

          <div className="rich-content">
            <p>
              Trinity Institute (Australia) delivers vocational education and
              training across areas including automotive, building trades,
              information technology, business, hospitality and community
              services. The institution's student information explains that
              vocational training places an emphasis on both underpinning
              knowledge and practical skills, with each component or subject
              described as a unit of competency.
            </p>

            <p>
              This means that a Trinity Institute assessment may look different
              from a traditional university essay. Depending on the course and
              unit, students may need to complete written questions, workplace
              projects, technical documentation, practical demonstrations,
              observations, portfolios or other forms of competency evidence.
              Students should always follow the assessment instructions for
              their specific unit.
            </p>

            <p>
              Trinity Institute currently provides courses across several
              industry areas. Its course information includes automotive,
              building and construction, information technology, business,
              community services and cookery and hospitality offerings. The
              course list and availability should be checked directly with the
              institution because course offerings and delivery arrangements can
              change.
            </p>

            <p>
              Trinity Institute also describes a combination of face-to-face
              practical sessions, theory sessions, supervised online study and
              self-directed learning, depending on the course. Some programs
              include vocational placement requirements, making it especially
              important to understand both the knowledge and practical
              components of an assessment.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON ASSESSMENTS */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Coursework & Assessment</p>
            <h2>Common types of Trinity Institute assessment work</h2>
            <p>
              The exact assessment format depends on the qualification and unit.
              Vocational assessment can combine knowledge-based work with
              practical demonstrations and workplace evidence.
            </p>
          </div>

          <div className="guide-grid">
            {assessmentTypes.map((item) => (
              <div className="guide-item" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="rich-content centered-copy">
            <p>
              A useful approach to Trinity Institute assessment work is to
              separate the task into its knowledge requirements, practical
              requirements, evidence requirements and presentation requirements.
              This makes it easier to identify what needs to be researched,
              documented, demonstrated or submitted.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO APPROACH AN ASSESSMENT */}
      <section className="section">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Assessment Strategy</p>
            <h2>How to approach a Trinity Institute assignment or assessment</h2>
          </div>

          <div className="rich-content">
            <p>
              Trinity Institute assignments and assessments should be approached
              according to the exact requirements of the relevant unit of
              competency. Before beginning, identify what knowledge must be
              demonstrated, what evidence must be produced and whether a
              practical demonstration or workplace observation is required.
            </p>

            <h3>1. Read the assessment instructions carefully</h3>
            <p>
              Identify the task, required evidence, submission format,
              assessment conditions, due date, performance criteria and any
              resources that you are permitted or required to use.
            </p>

            <h3>2. Identify the unit of competency</h3>
            <p>
              Record the unit code and title before starting the work. This
              prevents confusion when several units contain similar concepts or
              workplace activities.
            </p>

            <h3>3. Separate knowledge from practical evidence</h3>
            <p>
              Some tasks require written explanations while others require
              demonstrations, observations, workplace documents or other
              evidence. Treat each evidence requirement as a separate item on
              your assessment checklist.
            </p>

            <h3>4. Use appropriate technical and academic evidence</h3>
            <p>
              Depending on the subject, useful sources may include textbooks,
              official standards, government information, manufacturer
              documentation, industry guidance, professional resources and
              credible academic literature.
            </p>

            <h3>5. Make technical explanations precise</h3>
            <p>
              For IT, automotive, construction and hospitality subjects,
              technical terminology should be used consistently. Explain what a
              process does, why it is required and how it relates to the task
              rather than simply listing terms.
            </p>

            <h3>6. Check every assessment requirement before submission</h3>
            <p>
              Use the assessment checklist or marking criteria to confirm that
              each question has been answered and each required evidence item
              has been addressed. Practical requirements should also be checked
              separately from written requirements.
            </p>

            <h3>7. Keep academic and workplace integrity in mind</h3>
            <p>
              Do not fabricate workplace evidence, practical observations,
              research findings, measurements, service records or other
              information. Submitted evidence should accurately represent the
              student's own work and experience.
            </p>
          </div>
        </div>
      </section>

      {/* STUDY AREAS */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Trinity Institute Study Areas</p>
            <h2>Trinity Institute assignment help by subject area</h2>
            <p>
              Explore guidance for the major Trinity Institute study areas,
              from business and IT to automotive, construction, community
              services and hospitality.
            </p>
          </div>

          <div className="study-area-grid">
            {studyAreas.map((area) => {
              const Icon = area.icon

              return (
                <article className="study-area-card" key={area.title}>
                  <div className="study-area-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.text}</p>

                  <div className="study-area-links">
                    {area.links.map((link) => (
                      <Link key={link.href + link.label} href={link.href}>
                        {link.label}
                        <ArrowRight size={15} />
                      </Link>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* COURSE LIST */}
      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Courses & Qualifications</p>
            <h2>Trinity Institute courses and qualification areas</h2>
            <p>
              The following course areas are included to help students locate
              relevant study and assessment guidance. Always confirm the latest
              course availability, units and delivery arrangements with Trinity
              Institute.
            </p>
          </div>

          <div className="resource-grid">
            {courses.map((course) => {
              const Icon = course.icon

              return (
                <article className="resource-card" key={course.code + course.title}>
                  <Icon size={24} />

                  <p className="eyebrow">{course.category}</p>

                  <h3>{course.title}</h3>

                  <p>{course.text}</p>

                  <p>
                    <strong>Assignment keywords:</strong> {course.keywords}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="section section-tint">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Business & Management</p>
            <h2>Trinity Institute business assignment help</h2>
          </div>

          <div className="rich-content">
            <p>
              Business is one of the major Trinity Institute study areas.
              Students may work on workplace communication, marketing, finance,
              business resources, operations, sustainability, project work,
              critical thinking, professional development, continuous
              improvement and business risk.
            </p>

            <p>
              For business assignments, a useful structure is to identify the
              business problem, establish the relevant evidence, apply an
              appropriate framework or business concept, analyse the situation
              and develop conclusions or recommendations that follow from the
              evidence.
            </p>

            <h3>BSB50120 Diploma of Business units</h3>

            <div className="guide-grid">
              {businessUnits.map((unit) => (
                <div className="guide-item" key={unit}>
                  <CheckCircle2 size={18} />
                  <span>{unit}</span>
                </div>
              ))}
            </div>

            <p>
              This makes useful long-tail searches such as{' '}
              <strong>
                BSB50120 assignment help, Diploma of Business assignment help,
                Trinity Institute business assignment help, Trinity Institute
                marketing assignment help, Trinity Institute business report
                help and Trinity Institute project management assignment help
              </strong>{' '}
              relevant to students looking for guidance in this area.
            </p>
          </div>
        </div>
      </section>

      {/* IT & CYBER SECURITY */}
      <section className="section">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Information Technology</p>
            <h2>
              Trinity Institute IT, cyber security and networking assignment
              help
            </h2>
          </div>

          <div className="rich-content">
            <p>
              Trinity Institute's IT study area includes qualifications related
              to cyber security and telecommunications network engineering.
              Students working on technical assessments may need to combine
              conceptual explanations with technical documentation, diagrams,
              configurations, analysis or project evidence.
            </p>

            <p>
              Common areas of Trinity Institute IT assignment help can include
              cyber security concepts, network engineering, information
              technology systems, technical documentation, systems analysis,
              data, databases, programming and security-related research.
            </p>

            <p>
              For a technical assessment, the strongest response normally
              explains the problem, identifies the relevant technology or
              control, describes the implementation or analysis, presents
              evidence and discusses the outcome or limitations.
            </p>

            <div className="internal-link-list">
              <Link href="/technologies/dbms-database-technologies">
                Database & DBMS Resources
                <ArrowRight size={16} />
              </Link>

              <Link href="/technologies/weka">
                WEKA Data Mining Resources
                <ArrowRight size={16} />
              </Link>

              <Link href="/assignment-project-help">
                IT Technical Assignment Help
                <ArrowRight size={16} />
              </Link>

              <Link href="/tools">
                Academic & Research Tools
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMOTIVE */}
      <section className="section section-tint">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Automotive Technology</p>
            <h2>Trinity Institute automotive assignment and assessment help</h2>
          </div>

          <div className="rich-content">
            <p>
              Automotive qualifications at Trinity Institute cover areas such
              as light vehicle mechanical technology, automotive electrical
              technology, mechanical diagnosis and advanced automotive
              technology. Depending on the qualification, units can involve
              diagnostic strategies, tools, electrical systems, braking,
              steering and suspension, engine and fuel systems, transmissions,
              driveline systems and vehicle safety.
            </p>

            <p>
              Automotive assignment support can therefore include technical
              research, diagnostic reasoning, structured explanations,
              technical reports, safety documentation and preparation for
              knowledge-based components of competency assessments. Practical
              vehicle work must still be completed according to the applicable
              assessment conditions.
            </p>

            <p>
              Electric vehicle study is another specialist area. Students may
              encounter battery-electric vehicle systems, servicing,
              diagnostics and repair concepts. Any technical work should use
              current manufacturer and industry information where required by
              the assessment.
            </p>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION */}
      <section className="section">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Construction & Trades</p>
            <h2>
              Trinity Institute construction, carpentry and trade assignment
              help
            </h2>
          </div>

          <div className="rich-content">
            <p>
              Trinity Institute's building and trade offerings include
              carpentry, cabinet making and timber technology, wall and floor
              tiling, bricklaying and blocklaying, joinery, solid plastering,
              painting and decorating, building and construction.
            </p>

            <p>
              Trade-related written assessments may involve workplace safety,
              tools and equipment, materials, construction processes, planning,
              measurements, quality requirements and technical documentation.
              Higher-level building and construction work can additionally
              involve project planning, compliance, documentation and
              management-oriented tasks.
            </p>

            <p>
              Practical competence cannot be substituted with written
              assistance. Academic and technical guidance should instead help
              students understand the underlying requirements and document
              their own work accurately.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY SERVICES */}
      <section className="section section-tint">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Community Services</p>
            <h2>Trinity Institute community services assignment help</h2>
          </div>

          <div className="rich-content">
            <p>
              Community services study can require students to connect
              person-centred practice with professional responsibilities,
              community needs, social wellbeing, service delivery, case
              management and program coordination.
            </p>

            <p>
              Written assessments may include case studies, workplace scenarios,
              reflective components, research tasks, reports and evidence-based
              explanations. Students should pay close attention to legislation,
              professional responsibilities, ethical requirements and the
              specific assessment context.
            </p>

            <p>
              For the CHC52021 Diploma of Community Services, Trinity Institute
              students may also need to complete workplace or vocational
              placement requirements. Written guidance should support genuine
              learning and documentation rather than fabricate workplace
              evidence.
            </p>
          </div>
        </div>
      </section>

      {/* HOSPITALITY */}
      <section className="section">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Cookery & Hospitality</p>
            <h2>
              Trinity Institute hospitality, cookery and kitchen management
              assignment help
            </h2>
          </div>

          <div className="rich-content">
            <p>
              Trinity Institute hospitality courses include kitchen management,
              hospitality management and advanced hospitality management.
              Students can encounter commercial cookery, recipe planning and
              costing, menu design, food safety, special dietary requirements,
              kitchen operations, budgeting, conflict management and staff
              rostering.
            </p>

            <h3>SIT40521 Certificate IV in Kitchen Management units</h3>

            <div className="guide-grid">
              {hospitalityUnits.map((unit) => (
                <div className="guide-item" key={unit}>
                  <CheckCircle2 size={18} />
                  <span>{unit}</span>
                </div>
              ))}
            </div>

            <p>
              Hospitality assessment help can therefore include recipe costing
              explanations, menu-planning concepts, food-safety documentation,
              report structure, workplace procedures and research. Practical
              food preparation and kitchen demonstrations must be completed
              according to the applicable course requirements.
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH & REPORT WRITING */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Research & Documentation</p>
            <h2>
              Trinity Institute research, report writing and technical
              documentation help
            </h2>
            <p>
              Written evidence can be important across both business and
              technical vocational subjects. Clear documentation helps show
              what was done, why it was done and what evidence supports the
              result.
            </p>
          </div>

          <div className="research-grid">
            <article className="research-card">
              <Search size={24} />
              <h3>Understand the Task</h3>
              <p>
                Identify the unit, assessment question, required evidence,
                performance criteria and submission requirements before
                beginning.
              </p>
            </article>

            <article className="research-card">
              <BookOpen size={24} />
              <h3>Research the Topic</h3>
              <p>
                Use appropriate academic, industry, government, technical and
                professional sources relevant to the specific assessment.
              </p>
            </article>

            <article className="research-card">
              <FileText size={24} />
              <h3>Structure the Evidence</h3>
              <p>
                Organise research, explanations, workplace evidence and
                technical information so that each assessment requirement can
                be located clearly.
              </p>
            </article>

            <article className="research-card">
              <BarChart3 size={24} />
              <h3>Explain the Outcome</h3>
              <p>
                Where appropriate, interpret results, compare options, explain
                decisions and connect the evidence to the assessment criteria.
              </p>
            </article>
          </div>

          <div className="center-action">
            <Link
              href="/services/research-methodology"
              className="button button-secondary"
            >
              Research Methodology Support
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ACADEMIC INTEGRITY */}
      <section className="section">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Academic & Workplace Integrity</p>
            <h2>Use Trinity Institute assignment support responsibly</h2>
          </div>

          <div className="rich-content">
            <p>
              Academic and technical support should help students understand
              their coursework, improve research and analytical skills, develop
              professional documentation and complete their own assessments.
            </p>

            <p>
              Students should not fabricate practical observations, workplace
              evidence, service records, measurements, research participants,
              research findings or other information. Where an assessment
              requires original practical work or workplace evidence, that work
              should be completed and documented genuinely.
            </p>

            <p>
              For technical subjects, accuracy is particularly important. Do
              not submit invented diagnostic results, fabricated network
              configurations, false workplace records or made-up compliance
              evidence as if they were genuine.
            </p>

            <div className="notice-box">
              <ShieldCheck size={22} />

              <div>
                <strong>Important</strong>
                <p>
                  Current Trinity Institute assessment requirements, course
                  outlines, trainer instructions and student policies should
                  always take priority over information on this independent
                  study guide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL RESOURCES */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Official Information</p>
            <h2>Trinity Institute resources students should check</h2>
            <p>
              Use current institutional information for course requirements,
              assessment conditions, student support and other official
              requirements.
            </p>
          </div>

          <div className="official-links">
            <a
              href="https://trinityinstitute.edu.au/courses/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen size={20} />
              <span>
                <strong>Trinity Institute Courses</strong>
                <small>
                  Current course areas, qualifications and course information
                </small>
              </span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://trinityinstitute.edu.au/students-handbook-and-policies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraduationCap size={20} />
              <span>
                <strong>Student Handbook & Policies</strong>
                <small>
                  Student information, policies, forms and academic resources
                </small>
              </span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://trinityinstitute.edu.au/forms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Users size={20} />
              <span>
                <strong>Student Support & Wellbeing</strong>
                <small>
                  Study skills, academic support, technical support and student
                  services
                </small>
              </span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://trinityinstitute.edu.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Laptop size={20} />
              <span>
                <strong>Trinity Institute Australia</strong>
                <small>
                  Official Trinity Institute website and current institutional
                  information
                </small>
              </span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container narrow">
          <div className="section-heading centered">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2>
              Trinity Institute assignments, assessments and study questions
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-tint">
        <div className="container">
          <div className="cta-box">
            <div>
              <p className="eyebrow">Need Academic Guidance?</p>
              <h2>
                Work through your Trinity Institute assessment with a clear
                plan.
              </h2>
              <p>
                Get guidance on research, assessment structure, technical
                documentation, academic writing, business reports and project
                development while keeping your own academic and workplace
                responsibility at the centre.
              </p>
            </div>

            <div className="cta-actions">
              <Link
                href="/assignment-project-help"
                className="button button-primary"
              >
                Explore Assignment Help
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/study-guides"
                className="button button-secondary"
              >
                Explore Study Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
