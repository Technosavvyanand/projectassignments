'use client';

import React, { useState } from 'react';

// ==========================================
// CONFIGURATION CONSTANTS
// Change this single value when transitioning from temporary to business number.
// Format: Country code + Number without '+' or dashes
// ==========================================
const CONTACT_CONFIG = {
  whatsappNumber: '918595089080',
  email: 'support@projectassignments.com'
};

const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

interface ServicePillar {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  consultingAreas: string[];
  toolsTech: string[];
  hubUrl: string;
  icon: React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function ServicesClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Structured JSON-LD Schema for SEO
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Academic & Technical Project Consultancy",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "ProjectAssignments.com",
      "url": "https://projectassignments.com"
    },
    "areaServed": [
      "United States",
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Kuwait"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Specialized Academic Consultancy",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity & Information Security Consultancy",
            "url": "https://projectassignments.com/services#cybersecurity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Systems & Software Engineering Advisory",
            "url": "https://projectassignments.com/services#it-software-engineering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DBA Research & Doctoral Methodology Consulting",
            "url": "https://projectassignments.com/services#dba-doctoral-research"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MBA Strategic Research & Business Analysis Guidance",
            "url": "https://projectassignments.com/services#mba-strategic-research"
          }
        }
      ]
    }
  };

  const servicePillars: ServicePillar[] = [
    {
      id: "cybersecurity",
      badge: "Technical Security",
      title: "Cybersecurity & Information Assurance",
      subtitle:
        "Hands-on lab setup guidance, vulnerability assessment review, and security framework compliance.",
      description:
        "Structured technical advisory for security students and working professionals. We provide step-by-step guidance on penetration testing methodologies, network packet diagnostic interpretation, and alignment with industry frameworks.",
      consultingAreas: [
        "Vulnerability Assessment & Penetration Testing Review",
        "NIST SP 800-53 / ISO 27001 Mapping Guidance",
        "SIEM Diagnostics & Wireshark Analysis Walkthroughs",
        "Cryptographic Logic & Security Scripting Mentorship",
        "Threat Modeling (STRIDE) & Architectural Risk Reviews"
      ],
      toolsTech: [
        "Kali Linux",
        "Wireshark",
        "Metasploit",
        "Nmap",
        "Burp Suite",
        "Python",
        "Splunk"
      ],
      hubUrl: "/services/cybersecurity",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      )
    },
    {
      id: "it-software-engineering",
      badge: "Systems & Architecture",
      title: "IT Systems & Software Engineering",
      subtitle:
        "Architecture design reviews, full-stack code reviews, and cloud deployment advisory.",
      description:
        "Technical mentorship for IT Capstone and software development projects. We assist in structuring maintainable system architectures, debugging deployment scripts, and documenting SDLC workflows.",
      consultingAreas: [
        "Cloud Architecture Review (AWS, Azure, GCP)",
        "Containerization & DevOps Pipeline Troubleshooting",
        "Database Design & SQL Optimization Mentorship",
        "API Integration & Full-Stack Code Architecture Reviews",
        "System SRS, SDLC Specifications & Diagramming Guidance"
      ],
      toolsTech: [
        "Docker",
        "AWS",
        "React",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Terraform"
      ],
      hubUrl: "/services/it-software-engineering",
      icon: (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      )
    },
    {
      id: "dba-doctoral-research",
      badge: "Doctoral Methodology",
      title: "DBA & Doctoral Research Consulting",
      subtitle:
        "Methodological precision, statistical modeling, and dissertation structure guidance.",
      description:
        "High-level research consulting for executive doctoral candidates. We assist in refining theoretical frameworks, designing robust quantitative or qualitative methodologies, and preparing for committee defense.",
      consultingAreas: [
        "Problem Statement & Conceptual Framework Refinement",
        "Quantitative Data Modeling (SPSS, SmartPLS, R) Guidance",
        "Qualitative Thematic Analysis (NVivo) Review",
        "Literature Review Structure & Synthesis Support",
        "Committee Review Response & Defense Preparation"
      ],
      toolsTech: [
        "SPSS",
        "SmartPLS 4",
        "R",
        "NVivo",
        "AMOS",
        "LaTeX"
      ],
      hubUrl: "/services/dba-doctoral-research",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      )
    },
    {
      id: "mba-strategic-research",
      badge: "Executive Business",
      title: "MBA & Strategic Research Guidance",
      subtitle:
        "Business analysis framework support, financial modeling review, and case study research.",
      description:
        "Consultancy tailored to business professionals balancing executive responsibilities with academic research. We advise on strategic management frameworks, valuation modeling, and market analysis.",
      consultingAreas: [
        "Strategic Management & Case Analysis Frameworks",
        "Financial Modeling & DCF Valuation Logic Review",
        "Market Dynamics & Consumer Behavior Research Strategy",
        "Supply Chain Optimization & Operations Analysis",
        "Executive Presentation & Data Visualization Review"
      ],
      toolsTech: [
        "Excel Modeling",
        "Tableau",
        "PowerBI",
        "Statistica"
      ],
      hubUrl: "/services/mba-strategic-research",
      icon: (
        <svg
          className="w-6 h-6 text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      )
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "What is the nature of your project and research support?",
      answer:
        "We provide technical consulting, code and architecture review, research methodology guidance, and editorial feedback. Our goal is to help you understand complex technical concepts, resolve implementation roadblocks, and structure your research according to institutional rubrics."
    },
    {
  question: "How do you adapt your support to different universities and academic requirements?",
  answer:
    "Our consultants are familiar with different university guidelines, academic formats, citation requirements, and project expectations. We adapt the consultation approach to the specific brief, rubric, methodology, and institutional requirements provided by the client.",
},
    {
      question: "Can I request guidance for a specific part of a project or dissertation?",
      answer:
        "Yes. Our engagement model is modular. You can seek targeted assistance for specific challenges, such as building a quantitative statistical model in SPSS, reviewing a cloud network configuration, or structuring a literature review."
    },
    {
      question: "How do you protect client confidentiality?",
      answer:
        "All project briefs, data, and communications are strictly confidential. We maintain secure channels and respect privacy requirements, which is particularly critical for executive candidates and industry professionals."
    }
  ];

  return (
    <>
      {/* Inline JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchema)
        }}
      />

      <div className="relative min-h-screen bg-slate-50 text-slate-800 bg-light-grid">
        {/* Main Content Wrapper */}
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20 relative z-10">

          {/* Breadcrumb Navigation */}
          <nav
            className="flex items-center space-x-2 text-sm font-medium text-slate-500 mb-10"
            aria-label="Breadcrumb"
          >
            <a
              href="/"
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <span>/</span>
            <span className="text-slate-900 font-semibold">
              Services
            </span>
          </nav>

          {/* Page Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <p className="eyebrow">
              OUR SERVICES
              </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.08]">
              Specialized Guidance for High-Stakes Technical & Doctoral Projects
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-8 font-normal max-w-3xl mx-auto">
              Structured technical advisory, code review, and research methodology consulting for students, researchers, and professionals working on complex technical and postgraduate projects worldwide.
            </p>

            {/* Quality & Focus Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200">

              <div className="p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm">
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  Originality Focused
                </div>
                <div className="text-sm text-slate-500 mt-1">
                  Rigorous quality reviews
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm">
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  Domain Experts
                </div>
                <div className="text-sm text-slate-500 mt-1">
                  Experienced technical advisors
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm">
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  Global Reach
                  </div>
  <div className="text-sm text-slate-500 mt-1">
    Support across disciplines and institutions
  </div>
</div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm">
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  Responsive Support
                </div>
                <div className="text-sm text-slate-500 mt-1">
                  Direct WhatsApp consultations
                </div>
              </div>

            </div>
          </div>

          {/* Service Pillars Section */}
          <div className="space-y-10 mb-24">

            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Core Consultancy Domains
                </h2>

                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  Select a core domain to explore dedicated specialized topics.
                </p>
              </div>

              <span className="text-xs text-slate-400 font-medium mt-2 sm:mt-0">
                4 Core Pillars
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {servicePillars.map((pillar) => (
                <article
                  key={pillar.id}
                  id={pillar.id}
                  className="consultancy-card p-7 sm:p-9 flex flex-col justify-between min-h-[520px]"
                >

                  <div>

                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">

                      <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                        {pillar.icon}
                      </div>

                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {pillar.badge}
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                      {pillar.title}
                    </h3>

                    <p className="text-sm font-medium text-blue-700 mb-4">
                      {pillar.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 leading-7 mb-7">
                      {pillar.description}
                    </p>

                    {/* Consulting Areas */}
                    <div className="mb-7">

                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                        Key Advisory Areas:
                      </h4>

                      <ul className="space-y-2.5">

                        {pillar.consultingAreas.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-slate-700 leading-6"
                          >
                            <svg
                              className="w-4 h-4 text-blue-600 mr-2 mt-1 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>

                            <span>{item}</span>
                          </li>
                        ))}

                      </ul>
                    </div>

                    {/* Tools / Environment Badges */}
                    <div className="mb-6">

                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                        Relevant Frameworks & Tools:
                      </h4>

                      <div className="flex flex-wrap gap-1.5">

                        {pillar.toolsTech.map((tool, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-600 font-mono"
                          >
                            {tool}
                          </span>
                        ))}

                      </div>
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">

                    <a
                      href={pillar.hubUrl}
                      className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 group"
                    >
                      <span>
  Explore {pillar.title.split(' ')[0]}
</span>

                      <svg
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>

                    <a
                      href={getWhatsAppUrl(
                        `Hi, I would like to inquire about consulting support for ${pillar.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
                    >
                      Discuss Project Requirements
                    </a>

                  </div>

                </article>
              ))}

            </div>
          </div>

          {/* Regional Standards Block */}
{/* Academic & Professional Standards */}
<div className="bg-white rounded-2xl p-8 sm:p-12 mb-24 border border-slate-200 shadow-sm">

  <div className="max-w-2xl mx-auto text-center mb-10">

    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
      Academic & Professional Standards
    </h2>

    <p className="text-slate-600 text-sm sm:text-base leading-7">
      Every project is approached according to its institutional requirements,
      academic discipline, technical environment and research objectives.
    </p>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">

      <h3 className="text-base font-semibold text-slate-900 mb-3">
        Institutional Requirements
      </h3>

      <p className="text-sm text-slate-600 leading-7">
        We work from your assignment brief, assessment criteria,
        research guidelines and submission requirements.
      </p>

    </div>

    <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">

      <h3 className="text-base font-semibold text-slate-900 mb-3">
        Technical Standards
      </h3>

      <p className="text-sm text-slate-600 leading-7">
        Guidance is grounded in recognised technical practices,
        documentation standards and appropriate methodologies.
      </p>

    </div>

    <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">

      <h3 className="text-base font-semibold text-slate-900 mb-3">
        Research Integrity
      </h3>

      <p className="text-sm text-slate-600 leading-7">
        Our approach keeps understanding, responsible authorship
        and academic integrity at the centre of every engagement.
      </p>

    </div>

  </div>

</div>

          {/* Engagement Workflow */}
          <div className="mb-24">

            <div className="text-center max-w-xl mx-auto mb-12">

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Consultancy Process
              </h2>

              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-7">
                A transparent, step-by-step workflow for technical advisory.
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

              {[
                {
                  step: "01",
                  title: "Brief Submission",
                  desc: "Share your assignment guidelines, project rubrics, or research objectives."
                },
                {
                  step: "02",
                  title: "Expert Review",
                  desc: "A qualified domain specialist evaluates the technical scope and requirements."
                },
                {
                  step: "03",
                  title: "Guided Execution",
                  desc: "Receive structured feedback, code reviews, or methodological guidance."
                },
                {
                  step: "04",
                  title: "Review & Refinement",
                  desc: "Fine-tune technical outputs based on your feedback and institutional standards."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <span className="text-3xl font-black text-slate-300 block mb-2">
                    {item.step}
                  </span>

                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-6">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-24">

            <div className="text-center mb-10">

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-7">
                Information on our technical consulting model and privacy protocols.
              </p>

            </div>

            <div className="space-y-3">

              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200"
                >

                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-sm sm:text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                  >

                    <span>{faq.question}</span>

                    <svg
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        activeFaq === idx
                          ? "transform rotate-180 text-blue-600"
                          : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>

                  </button>

                  <div
                    className={`accordion-content ${
                      activeFaq === idx ? "open" : ""
                    }`}
                  >
                    <div className="accordion-inner p-5 pt-0 text-sm text-slate-600 border-t border-slate-100 leading-7">
                      {faq.answer}
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-10 sm:p-14 text-center border border-slate-200 shadow-sm relative overflow-hidden">

            <div className="max-w-xl mx-auto relative z-10">

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Ready to Discuss Your Project Scope?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-7 mb-7">
                Connect directly with a technical specialist via WhatsApp or email for a confidential review of your requirements.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                <a
                  href={getWhatsAppUrl(
                    "Hi, I would like to discuss my project requirements."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
                >

                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>

                  Consult via WhatsApp

                </a>

                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-sm font-semibold transition-all"
                >
                  Email Project Brief
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}