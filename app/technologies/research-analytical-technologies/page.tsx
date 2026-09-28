import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  FileSearch,
  FlaskConical,
  LineChart,
  Workflow
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
    "Research & Analytical Technologies | Data Analysis, Statistics & Research Tools",
  description:
    "Explore research and analytical technologies for quantitative and qualitative research, statistical analysis, data cleaning, visualisation, survey analysis, research datasets, SPSS, R, Python, NVivo and academic research projects.",
  keywords: [
    "research analytical technologies",
    "research and analytical technologies",
    "research analysis tools",
    "research data analysis tools",
    "research analytics",
    "research technology tools",
    "academic research tools",
    "academic data analysis tools",
    "research data analysis",
    "research data analysis tools",
    "data analysis for research",
    "research project data analysis",
    "research project analysis tools",
    "dissertation data analysis",
    "thesis data analysis",
    "dissertation research analysis",
    "thesis research analysis",
    "academic data analysis",
    "quantitative research data analysis",
    "qualitative research data analysis",
    "mixed methods data analysis",
    "statistical analysis for research",
    "statistical research tools",
    "research methodology tools",
    "research methodology software",
    "research software",
    "research analytics software",
    "survey data analysis",
    "questionnaire data analysis",
    "survey research analysis",
    "primary research data analysis",
    "secondary data analysis",
    "experimental data analysis",
    "research dataset analysis",
    "research data processing",
    "research data cleaning",
    "research data preprocessing",
    "data preparation for research",
    "data transformation research",
    "descriptive statistics research",
    "inferential statistics research",
    "hypothesis testing research",
    "statistical hypothesis testing",
    "correlation analysis research",
    "regression analysis research",
    "ANOVA research analysis",
    "t test research analysis",
    "chi square test research",
    "statistical significance research",
    "SPSS research data analysis",
    "SPSS data analysis",
    "SPSS dissertation analysis",
    "SPSS thesis data analysis",
    "R programming research analysis",
    "R statistical analysis research",
    "Python data analysis research",
    "Python research data analysis",
    "Python statistical analysis",
    "Excel research data analysis",
    "Excel statistical analysis",
    "MATLAB research analysis",
    "NVivo qualitative research",
    "NVivo data analysis",
    "qualitative coding software",
    "thematic analysis software",
    "qualitative data coding",
    "qualitative research analysis tools",
    "content analysis research",
    "thematic analysis research",
    "interview data analysis",
    "focus group data analysis",
    "research data visualisation",
    "research data visualization",
    "data visualisation for research",
    "data visualization for research",
    "academic data visualisation",
    "research charts and graphs",
    "research dashboards",
    "data interpretation research",
    "research findings analysis",
    "research results analysis",
    "research report data analysis",
    "research statistics",
    "research statistics tools",
    "statistical software for students",
    "data analysis software for students",
    "research tools for students",
    "dissertation research tools",
    "thesis research tools",
    "academic research software",
  ],
  alternates: {
    canonical:
      "https://projectassignments.com/technologies/research-analytical-technologies",
  },
  openGraph: {
    title:
      "Research & Analytical Technologies | Data Analysis, Statistics & Research Tools",
    description:
      "A comprehensive guide to research data analysis, statistical software, qualitative analysis, data preparation, visualisation and analytical technologies used in academic research.",
    url:
      "https://projectassignments.com/technologies/research-analytical-technologies",
    siteName: "ProjectAssignments",
    type: "website",
  },
}

const faqs = [
  {
    question: "What are research and analytical technologies?",
    answer:
      "Research and analytical technologies are software tools, programming environments, statistical platforms, data-processing tools and visualisation technologies used to collect, prepare, analyse, interpret and communicate research data.",
  },
  {
    question: "Which tools are commonly used for quantitative research?",
    answer:
      "Quantitative research may use tools such as SPSS, R, Python, Excel, MATLAB and other statistical or analytical platforms. The appropriate tool depends on the research design, data type, statistical methods and user's technical requirements.",
  },
  {
    question: "Which tools are used for qualitative research?",
    answer:
      "Qualitative research can use tools such as NVivo and other qualitative data analysis platforms to organise sources, code text, identify themes and examine relationships between qualitative findings.",
  },
  {
    question: "Can SPSS be used for dissertation data analysis?",
    answer:
      "SPSS can be used for many forms of quantitative dissertation and thesis analysis, including descriptive statistics, hypothesis testing, correlation, regression and other statistical procedures where appropriate to the research design.",
  },
  {
    question: "Can Python be used for academic research data analysis?",
    answer:
      "Yes. Python can support data cleaning, transformation, exploratory analysis, statistical analysis, visualisation and machine learning. Its suitability depends on the research question, methodology and required analytical techniques.",
  },
  {
    question: "Can R be used for statistical research?",
    answer:
      "Yes. R is widely used for statistical computing, data analysis and visualisation. It can support descriptive and inferential statistics as well as more specialised analytical workflows.",
  },
  {
    question: "What is qualitative data analysis?",
    answer:
      "Qualitative data analysis is the systematic process of examining non-numerical information such as interview transcripts, focus-group discussions, documents or open-ended responses to identify patterns, themes, concepts and interpretations.",
  },
  {
    question: "What is quantitative data analysis?",
    answer:
      "Quantitative data analysis involves examining numerical data using statistical or mathematical techniques to describe patterns, test relationships, evaluate hypotheses and answer research questions.",
  },
  {
    question: "What is the difference between descriptive and inferential statistics?",
    answer:
      "Descriptive statistics summarise the characteristics of observed data, while inferential statistics use sample data to draw conclusions or make statistical inferences about a broader population under appropriate assumptions.",
  },
  {
    question: "What is data preprocessing in research?",
    answer:
      "Data preprocessing involves preparing collected data for analysis. Depending on the study, this can include checking errors, handling missing values, coding variables, transforming data, removing duplicates and preparing consistent analytical structures.",
  },
  {
    question: "What is research data visualisation?",
    answer:
      "Research data visualisation uses charts, graphs, plots, tables or interactive dashboards to communicate patterns, comparisons, relationships and trends in research data.",
  },
  {
    question: "Can these tools be used for dissertation and thesis projects?",
    answer:
      "Yes. Research and analytical technologies can support many dissertation and thesis workflows, including data preparation, statistical analysis, qualitative coding, visualisation and interpretation. The tool should be selected according to the methodology rather than simply because it is popular.",
  },
]

const technologyAreas = [
  {
    icon: <BarChart3 size={24} aria-hidden="true" />,
    title: "Statistical Analysis",
    text:
      "Analyse numerical research data using descriptive statistics, hypothesis testing, correlation, regression and other appropriate statistical techniques.",
  },
  {
    icon: <Database size={24} aria-hidden="true" />,
    title: "Research Data Management",
    text:
      "Organise, clean, transform and prepare datasets before statistical, qualitative or computational analysis.",
  },
  {
    icon: <FlaskConical size={24} aria-hidden="true" />,
    title: "Quantitative Research",
    text:
      "Work with survey, experimental, observational and secondary numerical datasets using suitable analytical methods.",
  },
  {
    icon: <FileSearch size={24} aria-hidden="true" />,
    title: "Qualitative Research",
    text:
      "Organise, code and interpret interviews, focus groups, documents, open-ended responses and other qualitative materials.",
  },
  {
    icon: <LineChart size={24} aria-hidden="true" />,
    title: "Data Visualisation",
    text:
      "Transform research findings into clear charts, plots, tables and dashboards that communicate evidence effectively.",
  },
  {
    icon: <Workflow size={24} aria-hidden="true" />,
    title: "Research Workflows",
    text:
      "Connect data collection, preprocessing, analysis, interpretation and reporting into a reproducible research workflow.",
  },
]

const quantitativeTools = [
  {
    title: "SPSS",
    text:
      "A widely used statistical environment for quantitative research, survey analysis, descriptive statistics, hypothesis testing, correlation, regression and other statistical procedures.",
  },
  {
    title: "R",
    text:
      "A programming language and statistical computing environment suited to statistical analysis, data manipulation, visualisation and reproducible research workflows.",
  },
  {
    title: "Python",
    text:
      "A general-purpose programming language with extensive libraries for data cleaning, analysis, statistics, visualisation and machine learning.",
  },
  {
    title: "Microsoft Excel",
    text:
      "A familiar spreadsheet environment that can support data organisation, formulas, descriptive analysis, charts, tables and selected statistical procedures.",
  },
  {
    title: "MATLAB",
    text:
      "A numerical computing environment useful for mathematical analysis, engineering research, simulations, modelling and specialised analytical workflows.",
  },
]

const qualitativeTools = [
  {
    title: "NVivo",
    text:
      "A qualitative data analysis platform designed to help researchers organise sources, code material, identify themes and examine relationships within qualitative datasets.",
  },
  {
    title: "Qualitative Coding",
    text:
      "Coding involves assigning meaningful labels to sections of qualitative data so that recurring concepts, categories and patterns can be systematically examined.",
  },
  {
    title: "Thematic Analysis",
    text:
      "Thematic analysis identifies, develops and interprets recurring themes within qualitative data such as interviews, focus groups or open-ended responses.",
  },
  {
    title: "Content Analysis",
    text:
      "Content analysis can be used to systematically examine textual or other communication content according to defined categories, concepts or analytical criteria.",
  },
]

const dataPreparationStages = [
  {
    number: "01",
    title: "Data Collection",
    text:
      "Identify the source of the data and understand how observations, responses, measurements or records were collected.",
  },
  {
    number: "02",
    title: "Data Inspection",
    text:
      "Examine the dataset structure, variable types, missing values, unusual observations, duplicates and obvious inconsistencies.",
  },
  {
    number: "03",
    title: "Data Cleaning",
    text:
      "Correct or document errors, address duplicates and determine appropriate approaches for incomplete or inconsistent observations.",
  },
  {
    number: "04",
    title: "Variable Preparation",
    text:
      "Define variables, labels, coding schemes and measurement structures required by the planned analysis.",
  },
  {
    number: "05",
    title: "Transformation",
    text:
      "Where justified by the methodology, transform or recode variables to create suitable analytical structures.",
  },
  {
    number: "06",
    title: "Analysis Dataset",
    text:
      "Create a controlled dataset that is ready for the selected statistical, qualitative or computational analysis.",
  },
]

const statisticalMethods = [
  {
    title: "Descriptive Statistics",
    text:
      "Summarise observed data using measures such as frequency, percentage, mean, median, mode, range and measures of dispersion.",
  },
  {
    title: "Correlation Analysis",
    text:
      "Examine the degree and direction of association between variables using an appropriate correlation measure.",
  },
  {
    title: "Regression Analysis",
    text:
      "Model relationships between variables and examine how one or more predictors relate to an outcome under the assumptions of the selected model.",
  },
  {
    title: "Hypothesis Testing",
    text:
      "Use statistical procedures to evaluate evidence relevant to a stated research hypothesis under an appropriate analytical framework.",
  },
  {
    title: "t-Tests",
    text:
      "Compare means under appropriate study designs and assumptions, such as comparisons between two groups or measurements.",
  },
  {
    title: "ANOVA",
    text:
      "Examine differences between means across multiple groups when the research design and assumptions support the method.",
  },
  {
    title: "Chi-Square Analysis",
    text:
      "Analyse relationships or differences involving categorical variables under suitable assumptions.",
  },
  {
    title: "Non-Parametric Methods",
    text:
      "Use appropriate alternatives when data characteristics or research assumptions make particular parametric methods unsuitable.",
  },
]

const researchDataTypes = [
  {
    title: "Survey Data",
    text:
      "Questionnaire responses can produce categorical, ordinal, interval or other variables that require appropriate coding and analysis.",
  },
  {
    title: "Experimental Data",
    text:
      "Experiments can generate measurements that may be analysed to compare conditions, evaluate effects or examine relationships.",
  },
  {
    title: "Observational Data",
    text:
      "Observational studies can involve records or measurements collected without assigning experimental treatments.",
  },
  {
    title: "Interview Data",
    text:
      "Interviews generate qualitative material that can be transcribed, coded and analysed for themes and concepts.",
  },
  {
    title: "Focus Group Data",
    text:
      "Focus groups produce group discussions that can be analysed for recurring themes, viewpoints, disagreements and shared experiences.",
  },
  {
    title: "Secondary Datasets",
    text:
      "Existing datasets from research repositories, government sources, organisations or published studies can support secondary research where appropriate.",
  },
]

const visualisationTopics = [
  {
    title: "Bar Charts",
    text:
      "Useful for comparing categories or groups when the underlying variable and comparison make a bar representation appropriate.",
  },
  {
    title: "Histograms",
    text:
      "Useful for examining the distribution of numerical observations across intervals.",
  },
  {
    title: "Scatter Plots",
    text:
      "Useful for visually examining relationships between two numerical variables and identifying possible patterns or unusual observations.",
  },
  {
    title: "Box Plots",
    text:
      "Useful for comparing distributions, central tendency and spread across groups.",
  },
  {
    title: "Line Charts",
    text:
      "Useful for displaying changes over an ordered sequence such as time when a continuous progression is meaningful.",
  },
  {
    title: "Heatmaps",
    text:
      "Can represent patterns across a matrix and are often useful for correlation or other structured comparisons.",
  },
]

const researchWorkflow = [
  "Define the research question and analytical objectives.",
  "Identify the type and source of the required data.",
  "Select an appropriate research design and methodology.",
  "Collect or obtain the research data.",
  "Inspect the dataset and document its structure.",
  "Clean and prepare the data.",
  "Define variables and coding decisions.",
  "Select analytical methods appropriate to the research question.",
  "Conduct the analysis.",
  "Validate and interpret the results.",
  "Create appropriate tables and visualisations.",
  "Relate findings back to the research questions.",
  "Document limitations and methodological considerations.",
  "Present the findings clearly in the research report.",
]

export default function ResearchAnalyticalTechnologiesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://projectassignments.com/technologies/research-analytical-technologies#webpage",
        url:
          "https://projectassignments.com/technologies/research-analytical-technologies",
        name:
          "Research & Analytical Technologies | Data Analysis, Statistics & Research Tools",
        description:
          "A comprehensive guide to research data analysis, statistical software, qualitative analysis, data preparation, visualisation and analytical technologies used in academic research.",
        isPartOf: {
          "@id": "https://projectassignments.com/#website",
        },
        breadcrumb: {
          "@id":
            "https://projectassignments.com/technologies/research-analytical-technologies#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://projectassignments.com/technologies/research-analytical-technologies#breadcrumb",
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
            name: "Research & Analytical Technologies",
            item:
              "https://projectassignments.com/technologies/research-analytical-technologies",
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
          eyebrow="RESEARCH & ANALYTICAL TECHNOLOGIES"
          title="Research & Analytical Technologies for Data Analysis, Statistics, Modelling and Evidence-Based Research."
          body="Explore the technologies used across modern research workflows, from data collection and preprocessing to statistical analysis, qualitative coding, data visualisation, interpretation and research reporting."
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH DATA ANALYSIS"
              title="Turning research data into meaningful evidence."
              body="Research and analytical technologies provide the practical tools needed to organise, analyse and communicate evidence across quantitative, qualitative and mixed-method research."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Modern research can generate substantial amounts of data.
                Surveys may produce hundreds or thousands of responses.
                Experiments can generate repeated measurements. Interviews can
                produce large volumes of textual material. Secondary research
                may involve datasets containing hundreds of variables or
                observations.
              </p>

              <p style={{ marginTop: "18px" }}>
                Analytical technologies help researchers move from raw
                information towards structured evidence. Depending on the
                methodology, this can involve cleaning data, coding variables,
                calculating descriptive statistics, testing hypotheses,
                identifying qualitative themes, building models or producing
                visualisations.
              </p>

              <p style={{ marginTop: "18px" }}>
                The technology should support the research design rather than
                determine it. Selecting a popular software package does not
                automatically make an analytical method appropriate. The
                research question, data characteristics, methodological
                assumptions and intended interpretation should guide the
                analytical process.
              </p>

              <p style={{ marginTop: "18px" }}>
                This page brings together the major analytical technologies and
                concepts commonly encountered in academic research, including
                dissertation data analysis, thesis analysis, survey research,
                quantitative research, qualitative research and research
                projects involving secondary datasets.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CORE AREAS"
              title="Major research and analytical technology areas."
              body="Research analytics can involve several connected stages, from managing raw data to producing interpretable findings."
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
              {technologyAreas.map((area) => (
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
              eyebrow="RESEARCH WORKFLOW"
              title="A typical research data analysis workflow."
              body="A structured analytical workflow helps maintain consistency between the research question, dataset, analytical method and final interpretation."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "42px auto 0",
              }}
            >
              {researchWorkflow.map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      minWidth: "30px",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--primary)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="DATA PREPARATION"
              title="Research data cleaning, preprocessing and preparation."
              body="Data analysis is only as reliable as the data preparation that precedes it. Raw research data often requires inspection and structured preparation before analysis."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "42px auto 0",
              }}
            >
              {dataPreparationStages.map((stage) => (
                <div
                  key={stage.number}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "68px 1fr",
                    gap: "22px",
                    padding: "25px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: "var(--primary)",
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

            <div
              style={{
                maxWidth: "940px",
                margin: "34px auto 0",
              }}
            >
              <p>
                Cleaning does not mean deleting observations simply because
                they appear inconvenient. Decisions about missing values,
                outliers, invalid responses and transformations should be
                based on the research methodology and documented appropriately.
              </p>

              <p style={{ marginTop: "18px" }}>
                Researchers should also preserve an original copy of collected
                data where appropriate and maintain a clear record of
                transformations applied during preparation.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="QUANTITATIVE RESEARCH"
              title="Quantitative data analysis for surveys, experiments and numerical research."
              body="Quantitative research uses numerical information to describe observations, examine relationships, test hypotheses and investigate patterns."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Quantitative data can originate from questionnaires,
                experiments, observational studies, administrative records,
                public datasets or other structured sources.
              </p>

              <p style={{ marginTop: "18px" }}>
                Before selecting a statistical technique, researchers need to
                understand the variables involved, their measurement
                characteristics, the research design and the assumptions
                relevant to the proposed method.
              </p>

              <p style={{ marginTop: "18px" }}>
                Quantitative analysis can range from relatively simple
                descriptive summaries to more advanced statistical modelling.
                The complexity of the technique should correspond to the
                research question and the available evidence.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                  marginTop: "34px",
                }}
              >
                {quantitativeTools.map((tool) => (
                  <article
                    key={tool.title}
                    style={{
                      padding: "25px",
                      border: "1px solid var(--border)",
                      borderRadius: "16px",
                    }}
                  >
                    <h3>{tool.title}</h3>

                    <p style={{ marginTop: "10px" }}>
                      {tool.text}
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
              eyebrow="STATISTICAL METHODS"
              title="Common statistical analysis techniques used in research."
              body="Different statistical techniques answer different types of research questions. The method should be selected according to the research design and characteristics of the data."
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
              {statisticalMethods.map((method) => (
                <article
                  key={method.title}
                  style={{
                    padding: "25px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    background: "var(--background)",
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
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <h3>Statistical significance is not the whole interpretation</h3>

              <p style={{ marginTop: "10px" }}>
                A statistical result needs to be interpreted in the context of
                the research question, study design, sample, assumptions and
                limitations. A statistically significant result does not by
                itself establish practical importance, causation or broad
                generalisability.
              </p>

              <p style={{ marginTop: "18px" }}>
                Likewise, a result that does not meet a selected significance
                threshold should not automatically be interpreted as proof that
                no relationship or effect exists. The evidence needs to be
                considered in context.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="DESCRIPTIVE STATISTICS"
              title="Descriptive statistics for research data."
              body="Descriptive analysis provides an initial understanding of the structure and characteristics of a dataset."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Descriptive statistics can summarise categorical and numerical
                variables using frequencies, percentages, central tendency and
                measures of variation.
              </p>

              <div
                className="two-column"
                style={{ marginTop: "32px" }}
              >
                <div>
                  <h3>Frequency and percentage</h3>

                  <p style={{ marginTop: "10px" }}>
                    Useful for understanding how observations are distributed
                    across categories, such as demographic groups, survey
                    responses or classifications.
                  </p>
                </div>

                <div>
                  <h3>Mean, median and mode</h3>

                  <p style={{ marginTop: "10px" }}>
                    Measures of central tendency describe different aspects of
                    where observations are concentrated.
                  </p>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <h3>Range and dispersion</h3>

                  <p style={{ marginTop: "10px" }}>
                    Measures such as range and standard deviation can provide
                    information about variation within numerical observations.
                  </p>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <h3>Distribution</h3>

                  <p style={{ marginTop: "10px" }}>
                    Examining distributions can reveal skewness, concentration,
                    unusual observations and other characteristics relevant to
                    later analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="SURVEY DATA ANALYSIS"
              title="Analysing questionnaire and survey research data."
              body="Survey datasets often contain a mixture of demographic, categorical, ordinal and numerical variables and require careful coding before analysis."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Survey data analysis normally begins with understanding how
                each question was designed and how its responses should be
                represented in the analytical dataset.
              </p>

              <p style={{ marginTop: "18px" }}>
                For example, a Likert-scale question may require an ordinal
                coding structure, while a multiple-choice question may require
                categorical coding. Open-ended responses may instead require
                qualitative analysis.
              </p>

              <p style={{ marginTop: "18px" }}>
                Researchers should maintain consistent variable names, response
                coding and missing-value conventions throughout the analysis.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Common survey analysis activities
              </h3>

              <ul
                style={{
                  marginTop: "14px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>Response frequency analysis</li>
                <li>Demographic summaries</li>
                <li>Cross-tabulation</li>
                <li>Descriptive statistics</li>
                <li>Reliability analysis where appropriate</li>
                <li>Correlation analysis</li>
                <li>Hypothesis testing</li>
                <li>Regression analysis</li>
                <li>Visualisation of response patterns</li>
                <li>Analysis of open-ended responses</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="QUALITATIVE RESEARCH"
              title="Qualitative data analysis, coding and thematic analysis."
              body="Qualitative analysis provides structured approaches for examining textual, visual or other non-numerical research material."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Qualitative research may generate interviews, focus-group
                transcripts, observation notes, documents, open-ended survey
                responses or other forms of textual material. The challenge is
                to analyse this material systematically while retaining the
                context and meaning of participants' experiences.
              </p>

              <p style={{ marginTop: "18px" }}>
                Coding can help researchers organise large amounts of
                qualitative information. Initial codes may describe specific
                ideas or observations, which can later be grouped into broader
                categories or themes.
              </p>

              <p style={{ marginTop: "18px" }}>
                The exact qualitative methodology matters. The analytical
                process should reflect the selected research approach rather
                than treating software features as a substitute for
                methodological reasoning.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                  marginTop: "34px",
                }}
              >
                {qualitativeTools.map((tool) => (
                  <article
                    key={tool.title}
                    style={{
                      padding: "25px",
                      border: "1px solid var(--border)",
                      borderRadius: "16px",
                    }}
                  >
                    <h3>{tool.title}</h3>

                    <p style={{ marginTop: "10px" }}>
                      {tool.text}
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
              eyebrow="INTERVIEW & FOCUS GROUP ANALYSIS"
              title="Analysing interviews, focus groups and open-ended responses."
              body="Text-based research data often requires a different analytical workflow from numerical datasets."
            />

            <div
              className="two-column"
              style={{ marginTop: "42px" }}
            >
              <div>
                <h3>Transcription and preparation</h3>

                <p style={{ marginTop: "10px" }}>
                  Interview or focus-group recordings may first need to be
                  transcribed and prepared for analysis. Researchers should
                  establish a consistent approach appropriate to the research
                  methodology.
                </p>
              </div>

              <div>
                <h3>Initial coding</h3>

                <p style={{ marginTop: "10px" }}>
                  Relevant passages can be assigned descriptive or conceptual
                  codes that capture important ideas in the data.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Category development</h3>

                <p style={{ marginTop: "10px" }}>
                  Related codes can be organised into broader categories,
                  allowing researchers to identify recurring concepts and
                  relationships.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Theme development</h3>

                <p style={{ marginTop: "10px" }}>
                  Themes can then provide a higher-level interpretation of
                  recurring patterns that are relevant to the research
                  question.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="MIXED METHODS"
              title="Combining quantitative and qualitative research analysis."
              body="Mixed-method research can combine numerical and qualitative evidence when doing so helps answer the research question more completely."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Quantitative and qualitative approaches provide different
                forms of evidence. Numerical analysis can identify patterns,
                differences or relationships, while qualitative analysis can
                provide contextual explanations and deeper insight into
                experiences or processes.
              </p>

              <p style={{ marginTop: "18px" }}>
                In a mixed-method study, the two strands should not simply be
                performed independently and placed beside each other. The
                research design should explain why both forms of evidence are
                required and how their findings will be connected.
              </p>

              <p style={{ marginTop: "18px" }}>
                Analytical software can support each strand separately, while
                the researcher remains responsible for integrating the
                findings according to the study design.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH DATA TYPES"
              title="Different research datasets require different analytical approaches."
              body="Understanding the origin and structure of a dataset is essential before selecting analytical technologies or statistical procedures."
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
              {researchDataTypes.map((item) => (
                <article
                  key={item.title}
                  style={{
                    padding: "25px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    background: "var(--background)",
                  }}
                >
                  <h3>{item.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH DATA VISUALISATION"
              title="Data visualisation for research findings and analytical reporting."
              body="Visualisation can make patterns, distributions, comparisons and relationships easier to understand when the selected chart accurately represents the underlying data."
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
              {visualisationTopics.map((item) => (
                <article
                  key={item.title}
                  style={{
                    padding: "25px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                  }}
                >
                  <h3>{item.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Good research visualisation is not simply about making a chart
                attractive. Axis definitions, labels, units, scales,
                categories and data transformations should be clear enough for
                the reader to understand what is being represented.
              </p>

              <p style={{ marginTop: "18px" }}>
                Researchers should also avoid visual choices that exaggerate
                differences or hide important aspects of the underlying data.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH SOFTWARE"
              title="Choosing between SPSS, R, Python, Excel, MATLAB and qualitative analysis tools."
              body="There is no single research analysis tool that is appropriate for every project. Tool selection should follow the methodology, data and analytical requirements."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <div
                style={{
                  overflowX: "auto",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "720px",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "18px",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        Technology
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "18px",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        Common research uses
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "18px",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        Typical data
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td style={{ padding: "18px" }}>SPSS</td>
                      <td style={{ padding: "18px" }}>
                        Statistical analysis, surveys, hypothesis testing,
                        regression
                      </td>
                      <td style={{ padding: "18px" }}>
                        Structured quantitative data
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "18px" }}>R</td>
                      <td style={{ padding: "18px" }}>
                        Statistics, modelling, visualisation, reproducible
                        analysis
                      </td>
                      <td style={{ padding: "18px" }}>
                        Quantitative and structured datasets
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "18px" }}>Python</td>
                      <td style={{ padding: "18px" }}>
                        Data processing, analysis, visualisation, modelling
                      </td>
                      <td style={{ padding: "18px" }}>
                        Structured and computational datasets
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "18px" }}>Excel</td>
                      <td style={{ padding: "18px" }}>
                        Data organisation, descriptive analysis, charts
                      </td>
                      <td style={{ padding: "18px" }}>
                        Small to moderate structured datasets
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "18px" }}>MATLAB</td>
                      <td style={{ padding: "18px" }}>
                        Numerical analysis, modelling, simulations
                      </td>
                      <td style={{ padding: "18px" }}>
                        Numerical and engineering datasets
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "18px" }}>NVivo</td>
                      <td style={{ padding: "18px" }}>
                        Coding, thematic analysis, qualitative organisation
                      </td>
                      <td style={{ padding: "18px" }}>
                        Textual and qualitative material
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p style={{ marginTop: "24px" }}>
                These categories are broad rather than absolute. Several tools
                can perform overlapping analytical tasks, and the appropriate
                choice depends on the research methodology, dataset,
                researcher expertise and assessment requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="SECONDARY DATA ANALYSIS"
              title="Research datasets, open data and secondary data analysis."
              body="Secondary research can use existing datasets when they are relevant, accessible and appropriate for the research question."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Researchers may use datasets published by governments,
                universities, research repositories, international
                organisations, companies or open-data communities.
              </p>

              <p style={{ marginTop: "18px" }}>
                Finding a dataset is only the beginning. Researchers should
                examine the dataset's variables, population, sampling
                characteristics, collection period, methodology, missing data,
                provenance, licensing conditions and documentation.
              </p>

              <p style={{ marginTop: "18px" }}>
                A dataset can appear related to a research topic while still
                being unsuitable for the actual research question. Variables
                may not measure the required concepts, the population may not
                match the study, or the available observations may not support
                the intended analysis.
              </p>

              <div style={{ marginTop: "28px" }}>
                <Link
                  href="/tools"
                  className="text-link"
                >
                  Explore research and data tools
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH DATA INTERPRETATION"
              title="From analytical output to research findings."
              body="Producing statistical output or coded themes is not the same as interpreting research findings."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Interpretation connects analytical results back to the
                research question. A table, statistical test or qualitative
                theme provides evidence, but the researcher needs to explain
                what that evidence means within the study.
              </p>

              <p style={{ marginTop: "18px" }}>
                Interpretation should consider the study design, sample,
                measurement choices, analytical assumptions and limitations.
                Findings should not be presented as stronger than the evidence
                allows.
              </p>

              <p style={{ marginTop: "18px" }}>
                Research conclusions should also distinguish between
                association and causation where appropriate. An observed
                relationship between two variables does not automatically
                demonstrate that one variable caused the other.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Useful questions when interpreting results
              </h3>

              <ul
                style={{
                  marginTop: "14px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>What research question does this result address?</li>
                <li>What pattern or relationship does the analysis show?</li>
                <li>How strong is the available evidence?</li>
                <li>What assumptions apply to the selected method?</li>
                <li>Are there alternative explanations?</li>
                <li>What limitations affect interpretation?</li>
                <li>How does the result compare with relevant literature?</li>
                <li>What does the finding mean for the research objective?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH REPORTING"
              title="Presenting analytical results in dissertations, theses and research reports."
              body="Research analysis needs to be communicated clearly so that readers can understand the data, methods, findings and limitations."
            />

            <div
              className="two-column"
              style={{ marginTop: "42px" }}
            >
              <div>
                <h3>Methodology</h3>

                <p style={{ marginTop: "10px" }}>
                  Explain how data was collected, prepared and analysed and
                  why the selected approach was appropriate.
                </p>
              </div>

              <div>
                <h3>Results</h3>

                <p style={{ marginTop: "10px" }}>
                  Present relevant analytical findings clearly without mixing
                  every result generated by the software into the main report.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Discussion</h3>

                <p style={{ marginTop: "10px" }}>
                  Interpret the findings in relation to the research questions,
                  literature, theoretical framework and study context.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Limitations</h3>

                <p style={{ marginTop: "10px" }}>
                  Explain methodological, sampling, measurement, data or
                  analytical limitations that affect the interpretation of the
                  findings.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "36px" }}>
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
              eyebrow="ACADEMIC RESEARCH APPLICATIONS"
              title="Research and analytical technologies across academic disciplines."
              body="Data analysis technologies can support research across computing, business, healthcare, education, social sciences, engineering and other disciplines."
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
              {[
                {
                  title: "Business Research",
                  text:
                    "Survey analysis, customer research, organisational studies, market analysis and business performance research.",
                },
                {
                  title: "Management Research",
                  text:
                    "Leadership, HRM, organisational behaviour, strategy, employee engagement and management research.",
                },
                {
                  title: "Social Science Research",
                  text:
                    "Survey studies, interviews, behavioural research, social datasets and mixed-method investigations.",
                },
                {
                  title: "Education Research",
                  text:
                    "Student surveys, learning outcomes, educational interventions, interviews and classroom research.",
                },
                {
                  title: "Healthcare Research",
                  text:
                    "Structured health datasets, survey studies, observational research and statistical analysis subject to appropriate research and ethical requirements.",
                },
                {
                  title: "Computing Research",
                  text:
                    "Experimental datasets, system measurements, benchmarking, machine learning datasets and computational analysis.",
                },
                {
                  title: "Engineering Research",
                  text:
                    "Numerical measurements, experiments, simulations, modelling and technical data analysis.",
                },
                {
                  title: "Psychology & Behavioural Research",
                  text:
                    "Questionnaire analysis, behavioural measurements, experiments, interviews and qualitative research.",
                },
              ].map((area) => (
                <article
                  key={area.title}
                  style={{
                    padding: "25px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    background: "var(--background)",
                  }}
                >
                  <h3>{area.title}</h3>

                  <p style={{ marginTop: "10px" }}>
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
              eyebrow="RESEARCH ANALYTICAL PROJECTS"
              title="Common research and data analysis project activities."
              body="Academic research projects can involve one or several analytical technologies depending on the research design."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              {[
                "Designing a questionnaire and preparing its response dataset.",
                "Cleaning and coding survey responses for statistical analysis.",
                "Performing descriptive statistical analysis on research data.",
                "Testing hypotheses using appropriate statistical procedures.",
                "Analysing correlations between research variables.",
                "Building regression models for research questions where appropriate.",
                "Analysing interview transcripts using qualitative coding.",
                "Conducting thematic analysis of qualitative research data.",
                "Comparing primary and secondary research findings.",
                "Analysing an open research dataset.",
                "Creating research charts and statistical visualisations.",
                "Preparing tables for a dissertation results chapter.",
                "Interpreting analytical findings in relation to research questions.",
                "Combining quantitative and qualitative findings in mixed-method research.",
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
              eyebrow="RESEARCH QUALITY"
              title="Important considerations when working with research data."
              body="Analytical software can perform calculations, but responsible research still requires methodological judgement and transparent reporting."
            />

            <div
              className="two-column"
              style={{ marginTop: "42px" }}
            >
              <div>
                <h3>Data quality</h3>

                <p style={{ marginTop: "10px" }}>
                  Check whether the dataset is complete, consistent and
                  appropriate for the intended analysis.
                </p>
              </div>

              <div>
                <h3>Methodological fit</h3>

                <p style={{ marginTop: "10px" }}>
                  Select analytical methods that align with the research
                  design, variables and research questions.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Reproducibility</h3>

                <p style={{ marginTop: "10px" }}>
                  Maintain clear records of data preparation, analytical
                  decisions, code or procedures where appropriate.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Ethical considerations</h3>

                <p style={{ marginTop: "10px" }}>
                  Research data should be handled according to applicable
                  ethical requirements, privacy expectations, consent
                  conditions and institutional policies.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Transparent reporting</h3>

                <p style={{ marginTop: "10px" }}>
                  Explain important analytical decisions and limitations so
                  readers can understand how conclusions were reached.
                </p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3>Interpretation</h3>

                <p style={{ marginTop: "10px" }}>
                  Avoid presenting software output as a conclusion without
                  explaining its meaning in relation to the research question.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH DATA ANALYSIS CHECKLIST"
              title="Before finalising a research analysis."
              body="Use a structured review to check whether the analytical workflow remains aligned with the research methodology."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              {[
                "The research question is clearly defined.",
                "The analytical objective follows from the research question.",
                "The source and characteristics of the data are documented.",
                "Variables have been correctly identified and coded.",
                "Missing or unusual observations have been examined.",
                "Data-cleaning decisions have been documented.",
                "The selected analytical technique matches the research design.",
                "Relevant assumptions have been considered.",
                "Statistical or qualitative output has been interpreted rather than simply copied.",
                "Tables and visualisations accurately represent the underlying data.",
                "Findings are connected to the research questions.",
                "Limitations are acknowledged.",
                "Conclusions do not extend beyond the available evidence.",
                "The final research report clearly explains the analytical process.",
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
              title="Research analytics connects with data science, databases and statistical computing."
              body="Research analysis frequently overlaps with other technical areas already covered across ProjectAssignments."
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
                href="/technologies/weka"
                className="text-link"
              >
                WEKA
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/resources/data-mining-tools"
                className="text-link"
              >
                Data Mining Tools
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
                href="/tools"
                className="text-link"
              >
                Research & Data Tools
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
              eyebrow="RESEARCH & ANALYTICAL TECHNOLOGIES FAQ"
              title="Frequently asked questions."
              body="Common questions about research data analysis, statistical software, qualitative analysis, datasets and analytical technologies."
            />

            <div
              style={{
                maxWidth: "940px",
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
              title="A practical research analytics knowledge hub."
              body="Research technologies are most useful when they are selected to answer a clearly defined research question and used within a transparent methodological workflow."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "34px auto 0",
              }}
            >
              <p>
                From spreadsheet-based research analysis to statistical
                programming, qualitative coding and advanced data workflows,
                analytical technologies can reduce repetitive work and make
                complex datasets easier to investigate.
              </p>

              <p style={{ marginTop: "18px" }}>
                The technology, however, should remain secondary to the
                research methodology. A sophisticated analytical tool cannot
                compensate for an unsuitable research design, poorly defined
                variables or inappropriate interpretation.
              </p>

              <p style={{ marginTop: "18px" }}>
                A strong research workflow therefore connects the research
                question, data source, preparation process, analytical method,
                findings and interpretation into one coherent chain of
                reasoning.
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