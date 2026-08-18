'use client';

import React, { useState } from 'react';

// ==========================================
// CONFIGURATION CONSTANTS
// Change this single value when transitioning from temporary to business number.
// Format: Country code + Number without '+' or dashes (e.g., '15551234567' or '971500000000')
// ==========================================
const CONTACT_CONFIG = {
  whatsappNumber: '15551234567', 
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

  // Structured JSON-LD Schema for SEO (App Router compliant)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Academic & Technical Project Consultancy",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "ProjectAssignments.com",
      "url": "https://projectassignments.com"
    },
    "areaServed": ["United States", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait"],
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Research Methodology Consulting",
            "url": "https://projectassignments.com/services/research-methodology"
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
      subtitle: "Hands-on lab setup guidance, vulnerability assessment review, and security framework compliance.",
      description: "Structured technical advisory for security students and working professionals. We provide step-by-step guidance on penetration testing methodologies, network packet diagnostic interpretation, and alignment with industry frameworks.",
      consultingAreas: [
        "Vulnerability Assessment & Penetration Testing Review",
        "NIST SP 800-53 / ISO 27001 Mapping Guidance",
        "SIEM Diagnostics & Wireshark Analysis Walkthroughs",
        "Cryptographic Logic & Security Scripting Mentorship",
        "Threat Modeling (STRIDE) & Architectural Risk Reviews"
      ],
      toolsTech: ["Kali Linux", "Wireshark", "Metasploit", "Nmap", "Burp Suite", "Python", "Splunk"],
      hubUrl: "/services/cybersecurity",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "it-software-engineering",
      badge: "Systems & Architecture",
      title: "IT Systems & Software Engineering",
      subtitle: "Architecture design reviews, full-stack code reviews, and cloud deployment advisory.",
      description: "Technical mentorship for IT Capstone and software development projects. We assist in structuring maintainable system architectures, debugging deployment scripts, and documenting SDLC workflows.",
      consultingAreas: [
        "Cloud Architecture Review (AWS, Azure, GCP)",
        "Containerization & DevOps Pipeline Troubleshooting",
        "Database Design & SQL Optimization Mentorship",
        "API Integration & Full-Stack Code Architecture Reviews",
        "System SRS, SDLC Specifications & Diagramming Guidance"
      ],
      toolsTech: ["Docker", "AWS", "React", "Node.js", "Python", "PostgreSQL", "Terraform"],
      hubUrl: "/services/it-software-engineering",
      icon: (
        <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: "dba-doctoral-research",
      badge: "Doctoral Methodology",
      title: "DBA & Doctoral Research Consulting",
      subtitle: "Methodological precision, statistical modeling, and dissertation structure guidance.",
      description: "High-level research consulting for executive doctoral candidates. We assist in refining theoretical frameworks, designing robust quantitative or qualitative methodologies, and preparing for committee defense.",
      consultingAreas: [
        "Problem Statement & Conceptual Framework Refinement",
        "Quantitative Data Modeling (SPSS, SmartPLS, R) Guidance",
        "Qualitative Thematic Analysis (NVivo) Review",
        "Literature Review Structure & Synthesis Support",
        "Committee Review Response & Defense Preparation"
      ],
      toolsTech: ["SPSS", "SmartPLS 4", "R", "NVivo", "AMOS", "LaTeX"],
      hubUrl: "/services/dba-doctoral-research",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      id: "mba-strategic-research",
      badge: "Executive Business",
      title: "MBA & Strategic Research Guidance",
      subtitle: "Business analysis framework support, financial modeling review, and case study research.",
      description: "Consultancy tailored to business professionals balancing executive responsibilities with academic research. We advise on strategic management frameworks, valuation modeling, and market analysis.",
      consultingAreas: [
        "Strategic Management & Case Analysis Frameworks",
        "Financial Modeling & DCF Valuation Logic Review",
        "Market Dynamics & Consumer Behavior Research Strategy",
        "Supply Chain Optimization & Operations Analysis",
        "Executive Presentation & Data Visualization Review"
      ],
      toolsTech: ["Excel Modeling", "Tableau", "PowerBI", "Statistica"],
      hubUrl: "/services/mba-strategic-research",
      icon: (
        <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "What is the nature of your project and research support?",
      answer: "We provide technical consulting, code and architecture review, research methodology guidance, and editorial feedback. Our goal is to help you understand complex technical concepts, resolve implementation roadblocks, and structure your research according to institutional rubrics."
    },
    {
      question: "How do you align with US and Gulf (GCC) university expectations?",
      answer: "Our consultants are familiar with standard academic formats used in both regions—including APA 7th edition, IEEE documentation, and standard doctoral methodology structures commonly required by institutions across North America and the GCC."
    },
    {
      question: "Can I request guidance for a specific part of a project or dissertation?",
      answer: "Yes. Our engagement model is modular. You can seek targeted assistance for specific challenges, such as building a quantitative statistical model in SPSS, reviewing a cloud network configuration, or structuring a literature review."
    },
    {
      question: "How do you protect client confidentiality?",
      answer: "All project briefs, data, and communications are strictly confidential. We maintain secure channels and respect privacy requirements, which is particularly critical for executive candidates and industry professionals."
    }
  ];

  return (
    <>
      {/* Inline JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="relative min-h-screen bg-slate-50 text-slate-800 bg-light-grid">
        
        {/* Main Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Services</span>
          </nav>

          {/* Page Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Academic & Technical Consultancy
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
              Specialized Guidance for High-Stakes Technical & Doctoral Projects
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Structured technical advisory, code review, and research methodology consulting designed for Cybersecurity, IT Systems, DBA, and Executive MBA candidates in US and Gulf markets.
            </p>

            {/* Quality & Focus Pillars (Soften & Verifiable) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200">
              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-xs">
                <div className="text-base font-bold text-slate-900">Originality Focused</div>
                <div className="text-xs text-slate-500 mt-0.5">Rigorous quality reviews</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-xs">
                <div className="text-base font-bold text-slate-900">Domain Experts</div>
                <div className="text-xs text-slate-500 mt-0.5">Experienced technical advisors</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-xs">
                <div className="text-base font-bold text-slate-900">US & GCC Focus</div>
                <div className="text-xs text-slate-500 mt-0.5">Regional rubric alignment</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-xs">
                <div className="text-base font-bold text-slate-900">Responsive Support</div>
                <div className="text-xs text-slate-500 mt-0.5">Direct WhatsApp consultations</div>
              </div>
            </div>
          </div>

          {/* Service Pillars Section */}
          <div className="space-y-8 mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Core Consultancy Domains</h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">Select a core domain to explore dedicated specialized topics.</p>
              </div>
              <span className="text-xs text-slate-400 font-medium mt-2 sm:mt-0">4 Core Pillars</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {servicePillars.map((pillar) => (
                <article 
                  key={pillar.id}
                  id={pillar.id}
                  className="consultancy-card p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                        {pillar.icon}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
                    <p className="text-xs font-medium text-blue-700 mb-3">{pillar.subtitle}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">{pillar.description}</p>

                    {/* Consulting Areas */}
                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Key Advisory Areas:</h4>
                      <ul className="space-y-2">
                        {pillar.consultingAreas.map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                            <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools / Environment Badges */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Relevant Frameworks & Tools:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.toolsTech.map((tool, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions: Direct WhatsApp + Hub Link */}
                  <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 mt-2">
                    <a
                      href={pillar.hubUrl}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 group"
                    >
                      <span>Explore {pillar.title.split(' ')[0]} Hub</span>
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    <a
                      href={getWhatsAppUrl(`Hi, I would like to inquire about consulting support for ${pillar.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                    >
                      Discuss Project Requirements
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Research Methodology Specialist Service */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 mb-4">
                  Research & Methodology
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  Research Methodology Consulting
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-7">
                  Structured guidance for selecting and applying appropriate research
                  methodologies across technical, business, and postgraduate research
                  projects. Explore research design, qualitative and quantitative
                  approaches, literature review strategy, conceptual frameworks, and
                  methodological planning.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="/services/research-methodology"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
                >
                  Explore Research Methodology
                  <svg
                    className="w-4 h-4"
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
              </div>
            </div>
          </div>
        </div>

        {/* Regional Standards Block */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 mb-20 border border-slate-200 shadow-xs">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Regional Academic Framework Alignment</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We tailor our consulting approach to meet the distinct structural expectations of institutions in North America and the Gulf region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-xs">US Focus</span>
                  <h3 className="text-sm font-semibold text-slate-900">North American University Standards</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advisory focused on meeting standard university rubrics, IEEE documentation guidelines, APA 7th Edition citation precision, and rigorous technical methodology design.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs">GCC Focus</span>
                  <h3 className="text-sm font-semibold text-slate-900">Gulf Region Executive Programs</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tailored support for working professionals in UAE, KSA, Qatar, and Kuwait balancing full-time employment with Executive MBA or DBA research demands.
                </p>
              </div>
            </div>
          </div>

          {/* Engagement Workflow */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Consultancy Process</h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">A transparent, step-by-step workflow for technical advisory.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Brief Submission", desc: "Share your assignment guidelines, project rubrics, or research objectives." },
                { step: "02", title: "Expert Review", desc: "A qualified domain specialist evaluates the technical scope and requirements." },
                { step: "03", title: "Guided Execution", desc: "Receive structured feedback, code reviews, or methodological guidance." },
                { step: "04", title: "Review & Refinement", desc: "Fine-tune technical outputs based on your feedback and institutional standards." }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-2xl font-black text-slate-300 block mb-1">{item.step}</span>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">Information on our technical consulting model and privacy protocols.</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        activeFaq === idx ? "transform rotate-180 text-blue-600" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`accordion-content ${activeFaq === idx ? "open" : ""}`}>
                    <div className="accordion-inner p-4 pt-0 text-xs text-slate-600 border-t border-slate-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 text-center border border-slate-200 shadow-xs relative overflow-hidden">
            <div className="max-w-xl mx-auto relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Ready to Discuss Your Project Scope?</h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Connect directly with a technical specialist via WhatsApp or email for a confidential review of your requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl("Hi, I would like to discuss my project requirements.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  Consult via WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-semibold transition-all"
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