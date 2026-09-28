import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Database,
  GitBranch,
  MonitorCog,
  Search
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import {
  CTA,
  Footer,
  PageHero,
  SectionHeading,
} from "@/components/site"

export const metadata: Metadata = {
  title:
    "Systems Analysis and Design | SDLC, Requirements, UML, DFD & System Design",
  description:
    "Comprehensive Systems Analysis and Design guide covering SDLC, requirements engineering, feasibility analysis, DFDs, ER diagrams, UML, use cases, system architecture, prototyping, testing and implementation.",
  keywords: [
    "systems analysis and design",
    "systems analysis and design guide",
    "systems analysis and design tutorial",
    "systems analysis and design concepts",
    "systems analysis and design methodology",
    "systems analysis and design process",
    "systems analysis and design techniques",
    "systems analysis and design tools",
    "systems analysis and design project",
    "systems analysis and design project help",
    "systems analysis and design assignment",
    "systems analysis assignment help",
    "system design assignment",
    "system analysis project",
    "information systems analysis and design",
    "information systems analysis",
    "information systems design",
    "systems development life cycle",
    "SDLC",
    "SDLC phases",
    "SDLC models",
    "waterfall model systems development",
    "agile systems development",
    "systems analysis methodology",
    "requirements engineering",
    "requirements analysis",
    "system requirements analysis",
    "functional requirements",
    "non functional requirements",
    "functional and non functional requirements",
    "requirements gathering techniques",
    "requirements elicitation",
    "requirements specification",
    "software requirements analysis",
    "system feasibility study",
    "feasibility analysis in systems analysis",
    "technical feasibility",
    "economic feasibility",
    "operational feasibility",
    "schedule feasibility",
    "stakeholder analysis systems",
    "business process analysis",
    "business process modelling",
    "system investigation",
    "system analysis techniques",
    "data flow diagram",
    "data flow diagram DFD",
    "DFD levels",
    "context diagram",
    "level 0 DFD",
    "level 1 DFD",
    "entity relationship diagram",
    "ER diagram",
    "ERD database design",
    "UML diagrams",
    "UML systems analysis and design",
    "use case diagram",
    "use case analysis",
    "class diagram",
    "sequence diagram",
    "activity diagram",
    "state diagram",
    "UML class diagram systems design",
    "UML sequence diagram",
    "UML activity diagram",
    "system architecture design",
    "software architecture design",
    "logical system design",
    "physical system design",
    "database system design",
    "user interface design",
    "UI design systems analysis",
    "system prototyping",
    "prototype model systems development",
    "Agile systems analysis",
    "Waterfall systems analysis",
    "system testing",
    "system implementation",
    "system maintenance",
    "systems documentation",
    "CASE tools",
    "computer aided software engineering",
    "systems analysis documentation",
    "system design documentation",
    "information systems project methodology",
  ],
  alternates: {
    canonical:
      "https://projectassignments.com/technologies/systems-analysis-design",
  },
  openGraph: {
    title:
      "Systems Analysis and Design | SDLC, Requirements, UML, DFD & System Design",
    description:
      "Explore Systems Analysis and Design concepts including SDLC, requirements engineering, feasibility analysis, DFDs, ER diagrams, UML, architecture, prototyping, testing and implementation.",
    url:
      "https://projectassignments.com/technologies/systems-analysis-design",
    siteName: "ProjectAssignments",
    type: "website",
  },
}

const faqs = [
  {
    question: "What is Systems Analysis and Design?",
    answer:
      "Systems Analysis and Design is the structured process of understanding an existing or proposed information system, identifying requirements, analysing business and user needs, designing a solution and planning its implementation and maintenance.",
  },
  {
    question: "What are the main phases of Systems Analysis and Design?",
    answer:
      "The exact phases depend on the methodology, but common activities include system investigation, requirements analysis, feasibility analysis, system design, implementation, testing, deployment and maintenance.",
  },
  {
    question: "What is the difference between systems analysis and systems design?",
    answer:
      "Systems analysis focuses primarily on understanding the problem, business processes, users, requirements and constraints. Systems design uses those findings to determine how the proposed system, data, interfaces, components and technical architecture should work.",
  },
  {
    question: "What is requirements engineering?",
    answer:
      "Requirements engineering is the systematic process of discovering, analysing, documenting, validating and managing requirements for a system.",
  },
  {
    question: "What is a Data Flow Diagram?",
    answer:
      "A Data Flow Diagram, or DFD, represents how data moves through a system. It commonly shows external entities, processes, data flows and data stores at different levels of detail.",
  },
  {
    question: "What are UML diagrams used for in Systems Analysis and Design?",
    answer:
      "UML diagrams provide standardised ways to model different aspects of a system. Common diagrams include use case, class, sequence, activity and state diagrams.",
  },
  {
    question: "What is a feasibility study in systems analysis?",
    answer:
      "A feasibility study evaluates whether a proposed system is practical and worthwhile from perspectives such as technical capability, economic cost, operational suitability and implementation schedule.",
  },
  {
    question: "What is the difference between Agile and Waterfall?",
    answer:
      "Waterfall generally follows a more sequential development structure, while Agile uses iterative development and encourages repeated feedback and adaptation. The appropriate approach depends on the project context and requirements.",
  },
  {
    question: "Why are prototypes used in system design?",
    answer:
      "Prototypes provide an early representation of a proposed system or interface. They can help stakeholders visualise requirements, identify usability issues and provide feedback before full implementation.",
  },
  {
    question: "What documentation is produced during Systems Analysis and Design?",
    answer:
      "Documentation varies by project and methodology but may include requirements specifications, feasibility reports, process models, DFDs, UML diagrams, data models, interface designs, architecture documentation, test plans and implementation documentation.",
  },
]

const coreAreas = [
  {
    icon: <Search size={24} aria-hidden="true" />,
    title: "System Investigation",
    text:
      "Understand the existing environment, business problem, stakeholders, processes, constraints and opportunities before proposing a solution.",
  },
  {
    icon: <ClipboardList size={24} aria-hidden="true" />,
    title: "Requirements Analysis",
    text:
      "Identify, analyse, document, prioritise and validate functional and non-functional system requirements.",
  },
  {
    icon: <BarChart3 size={24} aria-hidden="true" />,
    title: "Feasibility Analysis",
    text:
      "Evaluate technical, economic, operational and schedule considerations before significant development begins.",
  },
  {
    icon: <GitBranch size={24} aria-hidden="true" />,
    title: "Process Modelling",
    text:
      "Model business processes and system behaviour using structured techniques such as DFDs, flowcharts and UML.",
  },
  {
    icon: <Database size={24} aria-hidden="true" />,
    title: "Data Modelling",
    text:
      "Identify entities, attributes, relationships and data requirements that support the proposed information system.",
  },
  {
    icon: <MonitorCog size={24} aria-hidden="true" />,
    title: "System Design",
    text:
      "Translate requirements into system architecture, components, interfaces, data structures and implementation specifications.",
  },
]

const modellingTopics = [
  {
    title: "Context Diagram",
    text:
      "A context diagram provides a high-level view of the system and its interactions with external entities. It establishes the system boundary before more detailed process modelling is developed.",
  },
  {
    title: "Data Flow Diagram",
    text:
      "DFDs model how information moves between external entities, processes and data stores. Different levels can progressively represent greater detail.",
  },
  {
    title: "Entity Relationship Diagram",
    text:
      "ER diagrams model data entities and their relationships. They are particularly useful when analysing the information requirements of database-driven systems.",
  },
  {
    title: "Use Case Diagram",
    text:
      "Use case diagrams provide a high-level view of actors and the interactions they have with system functionality.",
  },
  {
    title: "Class Diagram",
    text:
      "Class diagrams describe classes, attributes, operations and relationships and are commonly used when modelling object-oriented systems.",
  },
  {
    title: "Sequence Diagram",
    text:
      "Sequence diagrams represent interactions between actors and system objects over time, helping clarify the order in which messages or operations occur.",
  },
  {
    title: "Activity Diagram",
    text:
      "Activity diagrams represent workflows and activities, making them useful for modelling business processes and system behaviour.",
  },
  {
    title: "State Diagram",
    text:
      "State diagrams describe how an object or system component moves between states in response to events or conditions.",
  },
]

const sdlcStages = [
  {
    number: "01",
    title: "Planning and Investigation",
    text:
      "The project begins by understanding the business problem, organisational context, stakeholders, objectives, constraints and initial scope.",
  },
  {
    number: "02",
    title: "Requirements Analysis",
    text:
      "Analysts identify what users and stakeholders need from the proposed system and document functional and non-functional requirements.",
  },
  {
    number: "03",
    title: "Feasibility Study",
    text:
      "The proposed solution is evaluated against technical, economic, operational and scheduling considerations.",
  },
  {
    number: "04",
    title: "System Design",
    text:
      "Requirements are translated into system architecture, processes, data models, interfaces, components and other design specifications.",
  },
  {
    number: "05",
    title: "Development and Construction",
    text:
      "The designed solution is implemented using appropriate technologies, development practices and project controls.",
  },
  {
    number: "06",
    title: "Testing",
    text:
      "The system is evaluated to determine whether requirements are satisfied and whether defects, usability problems or integration issues need attention.",
  },
  {
    number: "07",
    title: "Implementation",
    text:
      "The completed system is introduced into its operational environment, which may involve migration, training, configuration and deployment.",
  },
  {
    number: "08",
    title: "Maintenance and Improvement",
    text:
      "After deployment, systems may require corrective maintenance, enhancements, security updates, performance improvements and adaptation to changing requirements.",
  },
]

const requirementTypes = [
  {
    title: "Functional Requirements",
    text:
      "Describe what the system should do. Examples include user authentication, searching, reporting, transaction processing, notifications or record management.",
  },
  {
    title: "Non-Functional Requirements",
    text:
      "Describe qualities, constraints or performance expectations such as security, usability, availability, scalability, reliability and response time.",
  },
  {
    title: "Business Requirements",
    text:
      "Describe the broader organisational objectives or outcomes that the proposed system is intended to support.",
  },
  {
    title: "User Requirements",
    text:
      "Describe system needs from the perspective of users and stakeholders, often using accessible language before being translated into more detailed specifications.",
  },
]

const methodologyTopics = [
  {
    title: "Waterfall",
    text:
      "A sequential development approach in which major stages are generally planned and completed in an ordered progression.",
  },
  {
    title: "Agile",
    text:
      "An iterative approach that emphasises incremental delivery, collaboration, feedback and adaptation as project understanding develops.",
  },
  {
    title: "Prototyping",
    text:
      "An approach that uses early representations of the proposed system to explore requirements, interfaces and user expectations.",
  },
  {
    title: "Iterative Development",
    text:
      "The system evolves through repeated cycles of analysis, design, development, testing and feedback.",
  },
]

export default function SystemsAnalysisDesignPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://projectassignments.com/technologies/systems-analysis-design#webpage",
        url:
          "https://projectassignments.com/technologies/systems-analysis-design",
        name:
          "Systems Analysis and Design | SDLC, Requirements, UML, DFD & System Design",
        description:
          "Comprehensive Systems Analysis and Design guide covering SDLC, requirements engineering, feasibility analysis, DFDs, ER diagrams, UML, system architecture, prototyping, testing and implementation.",
        isPartOf: {
          "@id": "https://projectassignments.com/#website",
        },
        breadcrumb: {
          "@id":
            "https://projectassignments.com/technologies/systems-analysis-design#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://projectassignments.com/technologies/systems-analysis-design#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://projectassignments.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Technologies",
            item: "https://projectassignments.com/technologies",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Systems Analysis and Design",
            item:
              "https://projectassignments.com/technologies/systems-analysis-design",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
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
          eyebrow="SYSTEMS ANALYSIS & DESIGN"
          title="Systems Analysis and Design: From Requirements and Process Analysis to System Architecture."
          body="A comprehensive Systems Analysis and Design resource covering SDLC methodologies, requirements engineering, feasibility analysis, business process modelling, DFDs, ER diagrams, UML, system architecture, prototyping, testing, implementation and maintenance."
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEMS ANALYSIS & DESIGN FUNDAMENTALS"
              title="Understanding how information systems are analysed, modelled and designed."
              body="Systems Analysis and Design provides a structured way to understand organisational problems, identify information and process requirements, model system behaviour and design solutions that support users and business objectives."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                An information system is more than an application or database.
                It normally involves people, processes, data, technology,
                organisational rules and interactions between different
                components. Systems analysis attempts to understand how these
                elements work together and where a proposed system could create
                improvements.
              </p>

              <p style={{ marginTop: "18px" }}>
                Systems design then takes the findings from analysis and turns
                them into a structured description of how the proposed solution
                should operate. This can involve system architecture, database
                structures, user interfaces, process models, security
                requirements, integrations and technical components.
              </p>

              <p style={{ marginTop: "18px" }}>
                This makes Systems Analysis and Design particularly important
                for information systems, software engineering, business
                information systems, database applications and enterprise
                technology projects.
              </p>

              <p style={{ marginTop: "18px" }}>
                A well-designed analysis process reduces the risk of building
                a technically functional system that does not actually solve
                the original business or user problem.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CORE AREAS"
              title="Major areas covered by Systems Analysis and Design."
              body="A complete systems analysis and design process connects business investigation, requirements, modelling, architecture and implementation planning."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(270px, 1fr))",
                gap: "22px",
                marginTop: "42px",
              }}
            >
              {coreAreas.map((area) => (
                <article
                  key={area.title}
                  style={{
                    padding: "28px",
                    border: "1px solid var(--border)",
                    borderRadius: "18px",
                    background: "var(--background)",
                  }}
                >
                  <div className="icon-box">{area.icon}</div>

                  <h3 style={{ marginTop: "18px" }}>
                    {area.title}
                  </h3>

                  <p style={{ marginTop: "12px" }}>
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
              eyebrow="SYSTEMS DEVELOPMENT LIFE CYCLE"
              title="SDLC: understanding the systems development life cycle."
              body="The Systems Development Life Cycle provides a structured way to organise activities involved in investigating, specifying, designing, developing, testing, implementing and maintaining information systems."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "42px auto 0",
              }}
            >
              {sdlcStages.map((stage) => (
                <div
                  key={stage.number}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "70px 1fr",
                    gap: "22px",
                    padding: "26px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--primary)",
                      paddingTop: "4px",
                    }}
                  >
                    {stage.number}
                  </div>

                  <div>
                    <h3>{stage.title}</h3>

                    <p style={{ marginTop: "9px" }}>
                      {stage.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEMS INVESTIGATION"
              title="System investigation: understand the problem before designing the solution."
              body="System investigation is concerned with understanding the current environment and establishing whether a proposed system is worth taking forward."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                A common mistake in systems projects is to begin designing
                screens or databases before understanding the underlying
                problem. System investigation provides an opportunity to
                examine how work is currently performed and why change may be
                required.
              </p>

              <p style={{ marginTop: "18px" }}>
                An analyst may examine existing processes, information flows,
                systems, stakeholders, organisational policies, technology
                limitations and recurring operational problems.
              </p>

              <p style={{ marginTop: "18px" }}>
                Investigation can also identify the boundaries of the proposed
                system. Defining what belongs inside the system and what
                remains outside it is important because unclear scope can
                create requirements conflicts later in the project.
              </p>

              <h3 style={{ marginTop: "32px" }}>
                Typical investigation questions
              </h3>

              <ul
                style={{
                  marginTop: "16px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>What business problem is the organisation experiencing?</li>
                <li>Who are the main stakeholders and users?</li>
                <li>How is the current process performed?</li>
                <li>What information is created, stored or exchanged?</li>
                <li>What limitations exist in the current system?</li>
                <li>What objectives should the proposed system support?</li>
                <li>What constraints could affect the project?</li>
                <li>What should be included within the proposed system scope?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="REQUIREMENTS ENGINEERING"
              title="Requirements analysis and requirements engineering."
              body="Requirements engineering establishes what a system needs to accomplish and provides a foundation for later design, development and testing."
            />

            <div
              className="two-column"
              style={{ marginTop: "42px" }}
            >
              <div>
                <h3>Requirements elicitation</h3>

                <p style={{ marginTop: "12px" }}>
                  Requirements elicitation involves gathering information from
                  users, stakeholders, documents, existing systems and other
                  relevant sources. Interviews, workshops, observation,
                  questionnaires and document analysis can all contribute.
                </p>
              </div>

              <div>
                <h3>Requirements analysis</h3>

                <p style={{ marginTop: "12px" }}>
                  Collected requirements need to be examined for ambiguity,
                  duplication, conflict, feasibility and completeness. Analysts
                  may need to negotiate priorities when stakeholders have
                  competing needs.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Requirements specification</h3>

                <p style={{ marginTop: "12px" }}>
                  Important requirements should be documented in a form that
                  stakeholders, analysts, designers, developers and testers can
                  understand and use.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Requirements validation</h3>

                <p style={{ marginTop: "12px" }}>
                  Validation checks whether documented requirements accurately
                  represent stakeholder needs and whether they are sufficiently
                  clear, consistent, realistic and testable.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "48px" }}>
              <h3>Common categories of system requirements</h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px",
                  marginTop: "24px",
                }}
              >
                {requirementTypes.map((item) => (
                  <article
                    key={item.title}
                    style={{
                      padding: "24px",
                      border: "1px solid var(--border)",
                      borderRadius: "16px",
                    }}
                  >
                    <h4>{item.title}</h4>

                    <p style={{ marginTop: "10px" }}>
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="REQUIREMENTS GATHERING"
              title="Requirements gathering techniques used in systems analysis."
              body="Different techniques reveal different types of information. The choice depends on the users, organisation, system complexity and project context."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <h3>Interviews</h3>

              <p style={{ marginTop: "10px" }}>
                Interviews allow analysts to explore user responsibilities,
                pain points, expectations and proposed improvements in detail.
                Structured, semi-structured and informal approaches can be
                useful in different circumstances.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Observation
              </h3>

              <p style={{ marginTop: "10px" }}>
                Observing users performing real tasks can reveal practical
                details that may not be mentioned during interviews. This is
                particularly useful when analysing complex workflows or
                repetitive operational processes.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Questionnaires and surveys
              </h3>

              <p style={{ marginTop: "10px" }}>
                Questionnaires can gather information from larger groups of
                users and can be useful when common requirements or perceptions
                need to be identified.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Workshops
              </h3>

              <p style={{ marginTop: "10px" }}>
                Requirements workshops bring multiple stakeholders together to
                discuss processes, priorities, problems and proposed
                capabilities.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Document analysis
              </h3>

              <p style={{ marginTop: "10px" }}>
                Existing forms, reports, policies, databases, manuals and
                system documentation can provide useful information about
                current processes and data requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="FEASIBILITY ANALYSIS"
              title="Feasibility study in Systems Analysis and Design."
              body="A feasibility study helps determine whether a proposed information system is practical from technical, economic, operational and scheduling perspectives."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                A technically attractive system may still be unsuitable if an
                organisation cannot afford it, lacks the required skills or
                cannot integrate it into existing operations. Feasibility
                analysis brings these considerations into the project before
                major resources are committed.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                  marginTop: "30px",
                }}
              >
                <article
                  style={{
                    padding: "24px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                  }}
                >
                  <h3>Technical Feasibility</h3>
                  <p style={{ marginTop: "10px" }}>
                    Can the organisation access the required hardware,
                    software, infrastructure, technical skills and integration
                    capabilities?
                  </p>
                </article>

                <article
                  style={{
                    padding: "24px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                  }}
                >
                  <h3>Economic Feasibility</h3>
                  <p style={{ marginTop: "10px" }}>
                    Are the expected benefits and organisational outcomes
                    reasonable in relation to development, implementation and
                    ongoing operating costs?
                  </p>
                </article>

                <article
                  style={{
                    padding: "24px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                  }}
                >
                  <h3>Operational Feasibility</h3>
                  <p style={{ marginTop: "10px" }}>
                    Can the proposed system operate effectively within the
                    organisation and be accepted and used by relevant
                    stakeholders?
                  </p>
                </article>

                <article
                  style={{
                    padding: "24px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                  }}
                >
                  <h3>Schedule Feasibility</h3>
                  <p style={{ marginTop: "10px" }}>
                    Can the system realistically be analysed, designed,
                    developed and implemented within the required timeframe?
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="BUSINESS PROCESS ANALYSIS"
              title="Business process modelling and workflow analysis."
              body="Understanding how work moves through an organisation is an important part of analysing information systems."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Business process analysis examines activities, decisions,
                information flows, participants and dependencies within an
                existing or proposed process.
              </p>

              <p style={{ marginTop: "18px" }}>
                The purpose is not simply to draw a workflow. Analysts need to
                understand why each activity exists, where information enters
                the process, where decisions occur and where delays, duplicate
                work or control problems may arise.
              </p>

              <p style={{ marginTop: "18px" }}>
                Process models can then provide a foundation for identifying
                automation opportunities, defining system requirements and
                designing improved workflows.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                As-is and to-be process models
              </h3>

              <p style={{ marginTop: "10px" }}>
                An <strong>as-is</strong> model represents the current process.
                A <strong>to-be</strong> model represents a proposed future
                process. Comparing the two can help identify what the proposed
                information system needs to change or support.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="DATA FLOW DIAGRAMS"
              title="Data Flow Diagrams: context diagrams, Level 0 and detailed DFDs."
              body="Data Flow Diagrams provide a structured way to represent how information moves through a system."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                A Data Flow Diagram focuses on the movement and transformation
                of information. It commonly represents external entities,
                processes, data flows and data stores.
              </p>

              <p style={{ marginTop: "18px" }}>
                A context diagram provides a high-level representation of the
                system boundary. More detailed DFD levels can then decompose
                major processes into smaller processes and flows.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Context Diagram
              </h3>

              <p style={{ marginTop: "10px" }}>
                The context diagram presents the system as a single process
                and shows the main external entities that exchange information
                with it.
              </p>

              <h3 style={{ marginTop: "26px" }}>
                Level 0 DFD
              </h3>

              <p style={{ marginTop: "10px" }}>
                A Level 0 DFD expands the system into its major processes and
                provides more detail about data flows and data stores.
              </p>

              <h3 style={{ marginTop: "26px" }}>
                Lower-level DFDs
              </h3>

              <p style={{ marginTop: "10px" }}>
                Individual processes can be decomposed further when additional
                detail is required. The objective is to maintain consistency
                between levels while providing useful detail.
              </p>

              <div
                style={{
                  marginTop: "28px",
                  padding: "24px",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  background: "var(--section-tint)",
                }}
              >
                <strong>Important modelling principle:</strong>{" "}
                a DFD should represent meaningful data movement rather than
                simply reproduce the visual structure of an application
                interface.
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="UML SYSTEMS ANALYSIS"
              title="UML diagrams used in Systems Analysis and Design."
              body="Unified Modeling Language provides a common visual language for describing different structural and behavioural aspects of software and information systems."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(270px, 1fr))",
                gap: "20px",
                marginTop: "42px",
              }}
            >
              {modellingTopics.map((topic) => (
                <article
                  key={topic.title}
                  style={{
                    padding: "26px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    background: "var(--background)",
                  }}
                >
                  <h3>{topic.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    {topic.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="USE CASE ANALYSIS"
              title="Use case modelling: understanding users and system functionality."
              body="Use case analysis focuses on interactions between actors and the system and can provide a useful bridge between requirements and system design."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                A use case represents a meaningful goal or interaction that an
                actor has with a system. Actors may represent human users,
                external systems or other entities that interact with the
                proposed solution.
              </p>

              <p style={{ marginTop: "18px" }}>
                Use case analysis can help clarify what the system is expected
                to provide without immediately prescribing how the functionality
                must be implemented.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Typical use case components
              </h3>

              <ul
                style={{
                  marginTop: "14px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>Actor or stakeholder</li>
                <li>System boundary</li>
                <li>Use case</li>
                <li>Association between actor and use case</li>
                <li>Relevant relationships between use cases</li>
                <li>Detailed scenarios where required</li>
              </ul>

              <p style={{ marginTop: "20px" }}>
                Detailed use case descriptions can additionally document
                preconditions, main flows, alternative flows, exceptions and
                expected outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="DATA MODELLING"
              title="Entity Relationship Diagrams and database design."
              body="Data modelling identifies the information a system needs to store and the relationships between different data entities."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                An Entity Relationship Diagram, or ERD, can be used during
                systems analysis to represent entities, attributes and
                relationships. This provides a conceptual view of the
                information requirements before detailed database
                implementation.
              </p>

              <p style={{ marginTop: "18px" }}>
                For example, a university information system might involve
                entities such as students, courses, enrolments and assessments.
                The exact model depends on the requirements of the particular
                system.
              </p>

              <p style={{ marginTop: "18px" }}>
                Database design can then progress from conceptual modelling to
                logical structures and, where appropriate, physical
                implementation decisions.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Important data-modelling considerations
              </h3>

              <ul
                style={{
                  marginTop: "14px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>Identify meaningful entities.</li>
                <li>Define relevant attributes.</li>
                <li>Determine relationships between entities.</li>
                <li>Identify appropriate keys.</li>
                <li>Consider cardinality and relationship constraints.</li>
                <li>Check for redundancy and inconsistent data structures.</li>
                <li>Maintain consistency with system requirements.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEM ARCHITECTURE"
              title="From system requirements to system architecture and design."
              body="System architecture describes the major components of a proposed solution and how those components interact."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Architecture decisions should be driven by system requirements
                rather than selected independently of the problem. Security,
                performance, availability, scalability, integration, data
                requirements and operational constraints can all influence the
                architecture.
              </p>

              <p style={{ marginTop: "18px" }}>
                Depending on the project, architecture discussions may include
                application components, databases, APIs, client interfaces,
                authentication services, external systems, networks and cloud
                infrastructure.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Logical and physical design
              </h3>

              <p style={{ marginTop: "10px" }}>
                Logical design focuses on what the system needs to accomplish
                and how its components relate conceptually. Physical design
                moves closer to implementation and can specify technologies,
                infrastructure, deployment components and technical details.
              </p>

              <p style={{ marginTop: "18px" }}>
                Keeping these perspectives distinct can make system
                documentation easier to understand and allows requirements to
                be considered before implementation technology becomes the
                dominant focus.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="USER INTERFACE & PROTOTYPING"
              title="System prototyping and user interface design."
              body="Prototypes can help stakeholders visualise proposed functionality and provide feedback before a complete system is built."
            />

            <div
              className="two-column"
              style={{ marginTop: "42px" }}
            >
              <div>
                <h3>Low-fidelity prototypes</h3>

                <p style={{ marginTop: "12px" }}>
                  Simple sketches, wireframes or paper prototypes can be used
                  to explore page structure, navigation and workflow without
                  investing heavily in implementation.
                </p>
              </div>

              <div>
                <h3>High-fidelity prototypes</h3>

                <p style={{ marginTop: "12px" }}>
                  More detailed interactive prototypes can represent interface
                  behaviour and visual structure more closely and can be useful
                  when stakeholder feedback needs to address specific
                  interactions.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Requirements validation</h3>

                <p style={{ marginTop: "12px" }}>
                  Showing users an early representation can expose unclear or
                  incomplete requirements before development costs become
                  significant.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Usability considerations</h3>

                <p style={{ marginTop: "12px" }}>
                  Interface design should consider the needs, capabilities,
                  workflows and expectations of intended users rather than
                  focusing only on visual appearance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="DEVELOPMENT METHODOLOGIES"
              title="Waterfall, Agile, prototyping and iterative systems development."
              body="Systems Analysis and Design can be performed using different development methodologies. The appropriate approach depends on project requirements, uncertainty, stakeholders and organisational context."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
                marginTop: "42px",
              }}
            >
              {methodologyTopics.map((method) => (
                <article
                  key={method.title}
                  style={{
                    padding: "26px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                  }}
                >
                  <h3>{method.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    {method.text}
                  </p>
                </article>
              ))}
            </div>

            <div
              style={{
                maxWidth: "920px",
                margin: "42px auto 0",
              }}
            >
              <h3>Agile and Systems Analysis</h3>

              <p style={{ marginTop: "10px" }}>
                Agile environments do not eliminate analysis and design.
                Instead, analysis and design activities may be performed
                incrementally as understanding develops and requirements are
                refined through stakeholder feedback.
              </p>

              <h3 style={{ marginTop: "28px" }}>
                Waterfall and Systems Analysis
              </h3>

              <p style={{ marginTop: "10px" }}>
                In a more sequential approach, substantial analysis and
                requirements documentation may take place before later
                development stages. This can provide structure when
                requirements are sufficiently understood and stable.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEM TESTING"
              title="Testing as part of system analysis, design and implementation."
              body="Testing provides evidence about whether the implemented system behaves as expected and satisfies documented requirements."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Testing should not be treated as an activity that begins only
                after development is finished. Requirements should be
                sufficiently clear and testable so that the project team can
                determine whether the final system meets expectations.
              </p>

              <p style={{ marginTop: "18px" }}>
                Depending on the system, testing may include functional
                testing, integration testing, usability testing, security
                testing, performance testing, system testing and user
                acceptance testing.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Traceability between requirements and testing
              </h3>

              <p style={{ marginTop: "10px" }}>
                Requirements can provide a basis for test cases. If a documented
                requirement cannot be tested or verified, it may need greater
                precision. Traceability helps connect requirements, design
                decisions and test evidence.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="IMPLEMENTATION"
              title="System implementation, deployment and change management."
              body="A technically complete system still needs to be introduced into its operational environment in a controlled way."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Implementation may involve data migration, infrastructure
                configuration, software deployment, user training,
                documentation, integration with existing systems and
                operational support.
              </p>

              <p style={{ marginTop: "18px" }}>
                Organisations may also need to consider how the transition from
                an existing system to a new system will occur. Depending on
                risk and project requirements, approaches can include direct
                changeover, phased implementation, pilot deployment or
                parallel operation.
              </p>

              <p style={{ marginTop: "18px" }}>
                Change management can be important because users may need to
                understand new workflows, responsibilities and system
                capabilities before adoption can be successful.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEM MAINTENANCE"
              title="Maintenance and continuous improvement after deployment."
              body="Information systems continue to evolve after implementation because organisations, technologies, regulations, users and business requirements change."
            />

            <div
              className="two-column"
              style={{ marginTop: "42px" }}
            >
              <div>
                <h3>Corrective maintenance</h3>

                <p style={{ marginTop: "12px" }}>
                  Addresses defects or errors discovered after deployment.
                </p>
              </div>

              <div>
                <h3>Adaptive maintenance</h3>

                <p style={{ marginTop: "12px" }}>
                  Adapts the system to changes in its operating environment,
                  technologies, regulations or organisational context.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Perfective maintenance</h3>

                <p style={{ marginTop: "12px" }}>
                  Improves functionality, usability, performance or other
                  characteristics in response to evolving needs.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Preventive maintenance</h3>

                <p style={{ marginTop: "12px" }}>
                  Reduces the likelihood of future problems by improving
                  maintainability, reliability or underlying system components.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEM DOCUMENTATION"
              title="Documentation in Systems Analysis and Design projects."
              body="Clear documentation creates a shared reference for stakeholders, analysts, designers, developers, testers and future maintenance teams."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Documentation requirements vary according to the project and
                methodology. A small application may need relatively limited
                documentation, while a complex organisational information
                system may require extensive technical and business
                documentation.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Common Systems Analysis and Design documentation
              </h3>

              <ul
                style={{
                  marginTop: "14px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>Problem definition and project scope</li>
                <li>Stakeholder analysis</li>
                <li>Feasibility study</li>
                <li>Requirements specification</li>
                <li>Functional and non-functional requirements</li>
                <li>Business process models</li>
                <li>Data Flow Diagrams</li>
                <li>Entity Relationship Diagrams</li>
                <li>UML diagrams</li>
                <li>System architecture documentation</li>
                <li>Interface specifications</li>
                <li>Database design documentation</li>
                <li>Test plans and test cases</li>
                <li>Implementation and deployment documentation</li>
                <li>User and operational documentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CASE TOOLS"
              title="CASE tools and software used for systems analysis and design."
              body="Computer-Aided Software Engineering tools can support modelling, documentation, requirements management and other activities across the system development process."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                CASE tools can help analysts and designers create and maintain
                models, diagrams and project documentation. Depending on the
                tool, capabilities may include UML modelling, database
                modelling, requirements management, process modelling,
                versioning and documentation generation.
              </p>

              <p style={{ marginTop: "18px" }}>
                The value of a CASE tool is not simply its ability to produce
                attractive diagrams. Effective use depends on whether the
                models accurately represent requirements and remain consistent
                with the system being analysed.
              </p>

              <p style={{ marginTop: "18px" }}>
                Diagramming and modelling software can therefore be considered
                part of the broader Systems Analysis and Design toolkit rather
                than a replacement for analysis itself.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEMS ANALYSIS PROJECTS"
              title="Common Systems Analysis and Design project areas."
              body="Systems Analysis and Design projects often combine requirements analysis, process modelling, data modelling and system design into one integrated case."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                A typical academic or practical systems analysis project may
                begin with a business scenario such as a retail system,
                healthcare information system, university management system,
                hotel reservation system, library system, banking application,
                inventory system or appointment platform.
              </p>

              <p style={{ marginTop: "18px" }}>
                The project can then require the analyst to investigate the
                current situation, identify stakeholders, define system
                requirements, conduct a feasibility study and produce
                appropriate process and data models.
              </p>

              <p style={{ marginTop: "18px" }}>
                Depending on the project requirements, the design phase may
                include use cases, UML diagrams, DFDs, ER diagrams, database
                design, system architecture, interface prototypes and test
                specifications.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                A useful project structure
              </h3>

              <ol
                style={{
                  marginTop: "14px",
                  paddingLeft: "24px",
                  lineHeight: 1.9,
                }}
              >
                <li>Define the problem and project scope.</li>
                <li>Identify stakeholders and users.</li>
                <li>Investigate the existing process.</li>
                <li>Gather and analyse requirements.</li>
                <li>Evaluate feasibility.</li>
                <li>Model processes and information flows.</li>
                <li>Develop data and UML models.</li>
                <li>Design the proposed system architecture.</li>
                <li>Develop interface or system prototypes where required.</li>
                <li>Define testing and implementation considerations.</li>
                <li>Document assumptions, limitations and recommendations.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEMS ANALYSIS & DESIGN ACADEMIC WORK"
              title="Approaching Systems Analysis and Design assignments and projects."
              body="Systems Analysis and Design coursework often requires students to combine theoretical understanding with practical modelling and documentation."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Academic assignments in Systems Analysis and Design may ask
                students to analyse a scenario, identify requirements, create
                diagrams, compare methodologies, evaluate system alternatives
                or design a proposed information system.
              </p>

              <p style={{ marginTop: "18px" }}>
                A useful approach is to begin with the assessment question and
                scenario before selecting modelling techniques. Not every
                project requires every UML diagram or every possible
                framework.
              </p>

              <p style={{ marginTop: "18px" }}>
                The diagrams and models should support the analysis. For
                example, a DFD should communicate information flows, an ERD
                should communicate data relationships and a use case diagram
                should communicate actors and system functionality.
              </p>

              <p style={{ marginTop: "18px" }}>
                Consistency is particularly important. Requirements,
                diagrams, database models, interface designs and testing
                expectations should describe the same proposed system rather
                than separate interpretations of it.
              </p>

              <div style={{ marginTop: "28px" }}>
                <Link
                  href="/assignment-project-help"
                  className="text-link"
                >
                  Explore assignment & academic project support
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="QUALITY CHECKLIST"
              title="Systems Analysis and Design checklist."
              body="Before finalising a systems analysis or design project, check that the major artefacts remain consistent and traceable."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "40px auto 0",
              }}
            >
              {[
                "The problem statement clearly explains the issue being addressed.",
                "The system scope is clearly defined.",
                "Relevant stakeholders and users have been identified.",
                "Functional requirements are clear and testable.",
                "Non-functional requirements are specific enough to evaluate.",
                "Feasibility considerations are supported by reasonable evidence.",
                "Process models represent the intended workflow accurately.",
                "Data models are consistent with system requirements.",
                "UML diagrams use consistent terminology.",
                "Use cases correspond to meaningful system functionality.",
                "The proposed architecture addresses relevant requirements.",
                "Interface designs are consistent with user requirements.",
                "Testing considerations can be traced back to requirements.",
                "Implementation assumptions and constraints are documented.",
                "Recommendations are supported by the analysis.",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "13px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <CheckCircle2
                    size={19}
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      marginTop: "2px",
                      color: "var(--primary)",
                    }}
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="RELATED TECHNOLOGY TOPICS"
              title="Systems Analysis and Design connects with several areas of computing."
              body="The systems analysis process often overlaps with databases, programming, software engineering, networking, cybersecurity and information systems."
            />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "34px",
              }}
            >
              <Link
                href="/technologies/dbms-database-technologies"
                className="text-link"
              >
                DBMS & Database Technologies
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/technologies/programming-languages-development"
                className="text-link"
              >
                Programming & Software Development
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/technologies/networking-infrastructure"
                className="text-link"
              >
                Networking & Infrastructure
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/services/it-software-engineering"
                className="text-link"
              >
                IT & Software Engineering
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/services/cybersecurity"
                className="text-link"
              >
                Cybersecurity
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/technologies"
                className="text-link"
              >
                Explore all technologies
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEMS ANALYSIS & DESIGN FAQ"
              title="Frequently asked questions."
              body="Common questions about Systems Analysis and Design, SDLC, requirements, modelling, UML, DFDs and system design."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "38px auto 0",
              }}
            >
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  style={{
                    padding: "25px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <h3>{faq.question}</h3>

                  <p style={{ marginTop: "10px" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="PROJECTASSIGNMENTS"
              title="A practical Systems Analysis and Design knowledge hub."
              body="Use this resource to understand the concepts, models, methodologies and documentation techniques commonly encountered in Systems Analysis and Design projects."
            />

            <div
              style={{
                maxWidth: "900px",
                margin: "34px auto 0",
              }}
            >
              <p>
                Systems Analysis and Design works best when each activity
                contributes to the same overall understanding of the system.
                Requirements should inform models, models should support design,
                design should address requirements and testing should provide
                evidence that the implemented system satisfies those
                requirements.
              </p>

              <p style={{ marginTop: "18px" }}>
                Whether the project involves a small information system, a
                database-driven application or a larger organisational
                platform, the underlying principle remains the same: understand
                the problem carefully before deciding how the technology should
                work.
              </p>
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