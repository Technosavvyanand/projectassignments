import {
  BookOpen,
  Microscope,
  ShieldCheck
} from "lucide-react";

import {
  CTA,
  Footer,
  PageHero,
  SectionHeading
} from "@/components/site";

export const metadata = { title: 'About', description: 'Learn how ProjectAssignments approaches complex work.' }

export default function AboutPage() { return <><main>
    <PageHero
  eyebrow="ABOUT PROJECTASSIGNMENTS"
  title="Technical Expertise. Academic Integrity. Practical Guidance."
  body="ProjectAssignments helps students, researchers and professionals navigate complex technical academic work with confidence. We specialise in cybersecurity, programming, research methodology, technical artefacts, MBA, DBA and postgraduate research support through ethical academic consultancy."
/>
<section className="section">
  <div className="container about-intro">

    <SectionHeading
      eyebrow="Who We Are"
      title="Built for work that demands more than generic academic support."
    />

    <p>
      ProjectAssignments was established to support technically demanding
      academic work where precision, structure and subject knowledge matter.
      Rather than offering generic assistance, we focus on helping students,
      researchers and professionals understand complex concepts, improve the
      quality of their work and produce well-structured academic submissions.
    </p>

    <p>
      Our expertise spans cybersecurity, programming, technical artefacts,
      software engineering, MBA and DBA research, dissertations, research
      proposals and postgraduate methodology. Every engagement is approached
      with clarity, confidentiality and respect for academic integrity.
    </p>

  </div>
</section>
<section className="section section-tint">
  <div className="container about-story">

    <SectionHeading
      eyebrow="Why ProjectAssignments Exists"
      title="Technical work deserves technical expertise."
    />

    <div className="about-story-grid">

      <div>
        <p>
          Many academic support platforms attempt to cover every subject, every
          course and every discipline. We deliberately chose a different path.
          ProjectAssignments was created to focus on technically demanding work
          where accuracy, methodology and subject knowledge genuinely matter.
        </p>

        <p>
          Whether it is a cybersecurity risk assessment, a software engineering
          project, a technical artefact, an MBA dissertation or a DBA research
          methodology chapter, these projects require more than good writing.
          They require structured thinking, technical understanding and careful
          academic reasoning.
        </p>
      </div>

      <div>
        <p>
          Our role is not simply to help complete an assignment. We help our
          clients understand complex technical problems, organise research,
          strengthen methodology and improve the overall quality of their work
          while respecting academic integrity and institutional standards.
        </p>

        <p>
          That philosophy continues to guide every consultation, every review
          and every project we support.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="section">
  <div className="container">

    <SectionHeading
      eyebrow="Areas of Expertise"
      title="Specialised support across technical and postgraduate disciplines."
      body="Our expertise is focused on technically demanding academic work where structured thinking, subject knowledge and rigorous methodology make the greatest difference."
    />

    <div className="expertise-grid">

      <article className="expertise-card">
        <h3>Cybersecurity</h3>
        <p>
          Penetration testing reports, digital forensics, secure software,
          risk assessment, ISO 27001, NIST framework, governance,
          compliance and security research.
        </p>
      </article>

      <article className="expertise-card">
        <h3>Programming & Software Development</h3>
        <p>
          Java, Python, C++, C#, JavaScript, web applications,
          software engineering, databases, APIs,
          debugging and software architecture.
        </p>
      </article>

      <article className="expertise-card">
        <h3>Research Methodology</h3>
        <p>
          Quantitative and qualitative research,
          research proposals, literature reviews,
          methodology chapters,
          data collection and academic frameworks.
        </p>
      </article>

      <article className="expertise-card">
        <h3>Technical Artefacts</h3>
        <p>
          Capstone projects, design documentation,
          cloud architecture, UML diagrams,
          implementation reports,
          testing documentation and technical portfolios.
        </p>
      </article>

      <article className="expertise-card">
        <h3>MBA & DBA Research</h3>
        <p>
          Executive MBA projects,
          DBA dissertations,
          business research,
          strategic management,
          organisational studies and applied research.
        </p>
      </article>

      <article className="expertise-card">
        <h3>Data Analysis</h3>
        <p>
          SPSS, NVivo, Excel,
          statistical analysis,
          survey interpretation,
          hypothesis testing and research findings.
        </p>
      </article>

    </div>

  </div>
</section>
<section className="section section-tint">
  <div className="container">

    <SectionHeading
      eyebrow="Who We Support"
      title="Supporting students, researchers and professionals across every stage of their academic journey."
      body="Whether you're completing a technical assignment, developing a research proposal or preparing a doctoral dissertation, our consultancy is designed to provide structured academic guidance."
    />

    <div className="audience-grid">

      <div className="audience-card">
        <h3>🎓 Undergraduate Students</h3>
        <p>Assignments, programming projects, technical reports, software engineering coursework and practical assessments.</p>
      </div>

      <div className="audience-card">
        <h3>🎓 Postgraduate Students</h3>
        <p>MBA, MSc and Master's research projects, literature reviews, dissertations and technical artefacts.</p>
      </div>

      <div className="audience-card">
        <h3>📘 DBA Researchers</h3>
        <p>Research methodology, proposal development, Chapter reviews, data analysis and dissertation consultancy.</p>
      </div>

      <div className="audience-card">
        <h3>💻 IT Professionals</h3>
        <p>Professional certifications, technical documentation, cybersecurity research and workplace learning support.</p>
      </div>

      <div className="audience-card">
        <h3>🔬 Researchers</h3>
        <p>Research design, statistical guidance, qualitative analysis, academic writing structure and publication preparation.</p>
      </div>

      <div className="audience-card">
        <h3>🌍 International Students</h3>
        <p>Supporting students studying in Australia, the UK, New Zealand, the Gulf region and other international universities.</p>
      </div>

    </div>

  </div>
</section>
<section className="section">
  <div className="container">

    <SectionHeading
      eyebrow="Our Approach"
      title="A structured approach to technically demanding academic work."
      body="Every project follows a clear process designed to improve understanding, strengthen research quality and produce well-structured academic outcomes."
    />

    <div className="approach-grid">

      <article className="approach-card">
        <span>01</span>
        <h3>Understand the Challenge</h3>
        <p>
          We begin by understanding your assignment, research question,
          university requirements and technical objectives before suggesting
          the most appropriate academic approach.
        </p>
      </article>

      <article className="approach-card">
        <span>02</span>
        <h3>Research & Structure</h3>
        <p>
          Every engagement is built on structured research,
          technical understanding and recognised academic methodologies
          rather than generic templates.
        </p>
      </article>

      <article className="approach-card">
        <span>03</span>
        <h3>Collaborative Guidance</h3>
        <p>
          We work collaboratively by explaining concepts,
          strengthening methodology and helping clients make informed
          academic decisions throughout their project.
        </p>
      </article>

      <article className="approach-card">
        <span>04</span>
        <h3>Continuous Improvement</h3>
        <p>
          From initial planning to final review,
          our focus remains on improving clarity,
          technical accuracy and academic quality.
        </p>
      </article>

    </div>
    <section className="section">
  <div className="container">

    <SectionHeading
      eyebrow="Our Values"
      title="The principles behind every consultation."
      body="Our work is guided by a commitment to technical quality, ethical academic practice and continuous learning."
    />

    <div className="values-simple">

      <article>
        <ShieldCheck size={34}/>
        <h3>Academic Integrity</h3>
        <p>
          We believe learning is strengthened through ethical guidance,
          transparency and responsible academic support.
        </p>
      </article>

      <article>
        <BookOpen size={34}/>
        <h3>Technical Excellence</h3>
        <p>
          Every project is approached with technical precision,
          structured thinking and recognised academic methodologies.
        </p>
      </article>

      <article>
        <Microscope size={34}/>
        <h3>Continuous Learning</h3>
        <p>
          Technology evolves rapidly.
          We continually refine our knowledge and methods
          to remain relevant.
        </p>
      </article>

    </div>

  </div>
</section>

  </div>
</section>
<section className="section section-tint">
  <div className="container">

    <SectionHeading
      eyebrow="Why Choose ProjectAssignments"
      title="Built around technical expertise, not generic academic support."
      body="Our consultancy focuses on technically demanding disciplines where subject knowledge, structured thinking and academic integrity make the greatest difference."
    />

    <div className="why-grid">

      <article className="why-card">
        <h3>Technical Subject Expertise</h3>
        <p>
          We focus on complex technical disciplines including cybersecurity,
          software development, databases, cloud technologies and postgraduate
          research rather than trying to cover every academic subject.
        </p>
      </article>

      <article className="why-card">
        <h3>Ethical Academic Consultancy</h3>
        <p>
          Our approach is centred on guidance, explanation and structured
          academic support that helps clients better understand their work
          while respecting institutional standards.
        </p>
      </article>

      <article className="why-card">
        <h3>Research-Driven Methodology</h3>
        <p>
          Every project is approached through recognised research methods,
          logical structure and technical accuracy rather than generic templates.
        </p>
      </article>

      <article className="why-card">
        <h3>Clear Communication</h3>
        <p>
          We believe technically challenging work becomes manageable when
          expectations, methodology and progress are communicated clearly.
        </p>
      </article>

      <article className="why-card">
        <h3>Confidential Collaboration</h3>
        <p>
          Every consultation is handled professionally with respect for privacy,
          confidentiality and long-term client relationships.
        </p>
      </article>

      <article className="why-card">
        <h3>International Perspective</h3>
        <p>
          We support learners working across diverse academic systems,
          postgraduate programmes and technical disciplines around the world.
        </p>
      </article>

    </div>

  </div>
</section>

<CTA />

</main>

<Footer />

</>
}