import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  GitBranch,
  Layers3,
  Search,
  Target
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
    "Data Analysis & Data Mining | Techniques, Tools, Preprocessing & Machine Learning",
  description:
    "Comprehensive Data Analysis and Data Mining guide covering data preprocessing, EDA, classification, clustering, association rules, regression, anomaly detection, model evaluation, WEKA, Python, R, SQL and data visualisation.",
  keywords: [
    "data analysis and data mining",
    "data analysis",
    "data mining",
    "data analysis techniques",
    "data mining techniques",
    "data analysis tools",
    "data mining tools",
    "data analysis tutorial",
    "data mining tutorial",
    "data analysis guide",
    "data mining guide",
    "data analytics",
    "data analytics techniques",
    "data mining methods",
    "data analysis methods",
    "data mining algorithms",
    "data analysis algorithms",
    "data mining process",
    "data analysis process",
    "knowledge discovery in databases",
    "KDD process",
    "knowledge discovery process",
    "data preprocessing",
    "data preprocessing techniques",
    "data preprocessing in data mining",
    "data cleaning",
    "data cleaning techniques",
    "data transformation",
    "data transformation techniques",
    "data integration",
    "data reduction",
    "data quality",
    "missing data handling",
    "outlier detection",
    "exploratory data analysis",
    "EDA",
    "exploratory data analysis techniques",
    "statistical data analysis",
    "descriptive data analysis",
    "inferential data analysis",
    "data visualisation",
    "data visualization",
    "data visualization techniques",
    "data mining classification",
    "classification algorithms",
    "classification in data mining",
    "decision tree classification",
    "random forest classification",
    "naive bayes classification",
    "k nearest neighbour classification",
    "KNN classification",
    "support vector machine classification",
    "data mining clustering",
    "clustering algorithms",
    "clustering in data mining",
    "k means clustering",
    "hierarchical clustering",
    "density based clustering",
    "DBSCAN clustering",
    "association rule mining",
    "association analysis",
    "market basket analysis",
    "Apriori algorithm",
    "frequent itemset mining",
    "regression data mining",
    "regression analysis",
    "predictive analytics",
    "predictive data mining",
    "anomaly detection",
    "outlier detection data mining",
    "dimensionality reduction",
    "principal component analysis",
    "PCA data analysis",
    "feature selection",
    "feature engineering",
    "text mining",
    "web mining",
    "social media data mining",
    "time series data analysis",
    "data mining machine learning",
    "machine learning data mining",
    "data mining with Python",
    "data mining with R",
    "data mining with SQL",
    "data mining with Excel",
    "WEKA data mining",
    "WEKA classification",
    "WEKA clustering",
    "WEKA data preprocessing",
    "WEKA association rules",
    "data mining software",
    "data mining tools for students",
    "data analysis tools for students",
    "data mining project",
    "data mining assignment",
    "data analysis assignment",
    "data mining project help",
    "data analysis project",
    "data analysis for research",
    "data mining for research",
    "academic data mining",
    "data analysis dissertation",
    "data mining dissertation",
    "data analysis thesis",
    "data mining thesis",
    "dataset analysis",
    "research dataset analysis",
    "machine learning model evaluation",
    "classification model evaluation",
    "confusion matrix",
    "accuracy precision recall F1 score",
    "cross validation",
    "train test split",
    "overfitting and underfitting",
  ],
  alternates: {
    canonical:
      "https://projectassignments.com/technologies/data-analysis-mining",
  },
  openGraph: {
    title:
      "Data Analysis & Data Mining | Techniques, Tools, Preprocessing & Machine Learning",
    description:
      "Explore data analysis and data mining techniques including preprocessing, EDA, classification, clustering, association rules, regression, anomaly detection, model evaluation and popular analytical tools.",
    url:
      "https://projectassignments.com/technologies/data-analysis-mining",
    siteName: "ProjectAssignments",
    type: "website",
  },
}

const faqs = [
  {
    question: "What is data analysis?",
    answer:
      "Data analysis is the process of examining, cleaning, transforming and interpreting data to identify patterns, relationships, trends or other information relevant to a specific question or objective.",
  },
  {
    question: "What is data mining?",
    answer:
      "Data mining is the process of discovering useful patterns, relationships, structures or predictive information within datasets using computational, statistical and machine learning techniques.",
  },
  {
    question: "What is the difference between data analysis and data mining?",
    answer:
      "Data analysis is a broad activity that includes examining and interpreting data, while data mining focuses particularly on discovering patterns, relationships or useful structures within larger or complex datasets using systematic computational techniques.",
  },
  {
    question: "What is the KDD process?",
    answer:
      "Knowledge Discovery in Databases, or KDD, is a broader process involving data selection, preprocessing, transformation, data mining and interpretation or evaluation of discovered patterns.",
  },
  {
    question: "What is data preprocessing?",
    answer:
      "Data preprocessing prepares raw data for analysis or modelling. It can include cleaning, handling missing values, removing duplicates, transforming variables, integrating datasets and reducing irrelevant information.",
  },
  {
    question: "What is classification in data mining?",
    answer:
      "Classification is a supervised learning technique used to assign observations to predefined categories or classes using patterns learned from labelled data.",
  },
  {
    question: "What is clustering in data mining?",
    answer:
      "Clustering is an unsupervised learning technique that groups observations according to similarities in their characteristics without requiring predefined class labels.",
  },
  {
    question: "What is association rule mining?",
    answer:
      "Association rule mining identifies relationships between items or variables, often by discovering frequent combinations and rules that describe how items occur together.",
  },
  {
    question: "What is the Apriori algorithm?",
    answer:
      "Apriori is an association rule mining algorithm that uses frequent itemset generation and support-based pruning to identify combinations of items that occur frequently in transactional datasets.",
  },
  {
    question: "What is WEKA used for?",
    answer:
      "WEKA is a machine learning and data mining software environment that provides tools for preprocessing, classification, clustering, association analysis, attribute selection and evaluation.",
  },
  {
    question: "What is exploratory data analysis?",
    answer:
      "Exploratory Data Analysis, or EDA, involves examining datasets using summaries, visualisations and analytical techniques to understand distributions, relationships, unusual observations and potential patterns.",
  },
  {
    question: "What is a confusion matrix?",
    answer:
      "A confusion matrix summarises classification predictions by comparing predicted classes with actual classes and can be used to derive measures such as accuracy, precision, recall and F1 score.",
  },
]

const coreAreas = [
  {
    icon: <Database size={24} aria-hidden="true" />,
    title: "Data Preparation",
    text:
      "Clean, integrate, transform and prepare raw datasets before analysis or machine learning.",
  },
  {
    icon: <Search size={24} aria-hidden="true" />,
    title: "Exploratory Data Analysis",
    text:
      "Investigate distributions, relationships, patterns, missing values and unusual observations.",
  },
  {
    icon: <Target size={24} aria-hidden="true" />,
    title: "Classification",
    text:
      "Use supervised learning algorithms to predict predefined classes or categories.",
  },
  {
    icon: <Layers3 size={24} aria-hidden="true" />,
    title: "Clustering",
    text:
      "Discover natural groupings within datasets using unsupervised learning approaches.",
  },
  {
    icon: <GitBranch size={24} aria-hidden="true" />,
    title: "Association Mining",
    text:
      "Identify recurring item combinations and relationships using frequent pattern and association rule mining.",
  },
  {
    icon: <BarChart3 size={24} aria-hidden="true" />,
    title: "Model Evaluation",
    text:
      "Measure analytical and predictive performance using appropriate evaluation techniques.",
  },
]

const kddStages = [
  {
    number: "01",
    title: "Data Selection",
    text:
      "Identify the relevant data sources, observations and attributes required for the analytical objective.",
  },
  {
    number: "02",
    title: "Data Cleaning",
    text:
      "Identify missing, inconsistent, duplicated or incorrect information and determine appropriate treatment.",
  },
  {
    number: "03",
    title: "Data Integration",
    text:
      "Combine information from multiple sources when the research or business problem requires integrated data.",
  },
  {
    number: "04",
    title: "Data Transformation",
    text:
      "Transform variables or structures into forms suitable for analysis or the selected data mining algorithm.",
  },
  {
    number: "05",
    title: "Data Mining",
    text:
      "Apply appropriate computational, statistical or machine learning techniques to discover useful patterns.",
  },
  {
    number: "06",
    title: "Pattern Evaluation",
    text:
      "Determine whether discovered patterns are meaningful, useful, valid and relevant to the original objective.",
  },
  {
    number: "07",
    title: "Knowledge Interpretation",
    text:
      "Communicate useful findings and place them in the context of the research question, business problem or analytical objective.",
  },
]

const preprocessingTopics = [
  {
    title: "Missing Values",
    text:
      "Identify missing observations and select an appropriate strategy based on the dataset, variable and analytical methodology.",
  },
  {
    title: "Duplicate Records",
    text:
      "Detect repeated observations where duplication could distort frequencies, models or analytical conclusions.",
  },
  {
    title: "Outlier Detection",
    text:
      "Identify unusual observations and determine whether they represent genuine cases, measurement problems or data errors.",
  },
  {
    title: "Data Transformation",
    text:
      "Transform variables when required for analysis, modelling, scaling or algorithm-specific requirements.",
  },
  {
    title: "Categorical Encoding",
    text:
      "Represent categorical variables using suitable coding structures for statistical analysis or machine learning.",
  },
  {
    title: "Feature Selection",
    text:
      "Identify useful variables while reducing irrelevant or redundant attributes where appropriate.",
  },
  {
    title: "Data Reduction",
    text:
      "Reduce dataset complexity while attempting to retain information relevant to the analytical objective.",
  },
  {
    title: "Data Integration",
    text:
      "Combine compatible datasets while managing differences in structure, naming, formats and data definitions.",
  },
]

const classificationAlgorithms = [
  {
    title: "Decision Trees",
    text:
      "Build tree-based models that split observations according to selected attributes and produce interpretable decision paths.",
  },
  {
    title: "Random Forest",
    text:
      "Combines multiple decision trees to create an ensemble classification or regression model.",
  },
  {
    title: "Naive Bayes",
    text:
      "Uses probabilistic modelling based on Bayes' theorem and a conditional independence assumption.",
  },
  {
    title: "K-Nearest Neighbours",
    text:
      "Classifies observations according to the classes of nearby observations under a selected distance measure.",
  },
  {
    title: "Support Vector Machines",
    text:
      "Constructs decision boundaries intended to separate classes while maximising an appropriate margin.",
  },
  {
    title: "Neural Networks",
    text:
      "Uses interconnected computational units to model complex relationships and can support classification and regression tasks.",
  },
]

const clusteringMethods = [
  {
    title: "K-Means Clustering",
    text:
      "Partitions observations into a selected number of clusters based on similarity to cluster centres.",
  },
  {
    title: "Hierarchical Clustering",
    text:
      "Builds a hierarchy of clusters that can be represented using a dendrogram and analysed at different levels.",
  },
  {
    title: "DBSCAN",
    text:
      "Uses density-based concepts to identify clusters and can identify observations that do not belong to dense groups.",
  },
  {
    title: "Cluster Evaluation",
    text:
      "Clustering results need to be examined using appropriate measures and domain interpretation rather than assuming every mathematical grouping is meaningful.",
  },
]

const evaluationMethods = [
  {
    title: "Confusion Matrix",
    text:
      "Shows how predicted classes compare with actual classes and forms the basis for several classification metrics.",
  },
  {
    title: "Accuracy",
    text:
      "Measures the proportion of predictions that are correct overall, but should be interpreted carefully when classes are imbalanced.",
  },
  {
    title: "Precision",
    text:
      "Measures the proportion of positive predictions that are actually positive for the selected class.",
  },
  {
    title: "Recall",
    text:
      "Measures how many relevant positive observations were successfully identified.",
  },
  {
    title: "F1 Score",
    text:
      "Provides a combined measure based on precision and recall and can be useful when both are important.",
  },
  {
    title: "Cross-Validation",
    text:
      "Repeatedly divides data into training and validation portions to provide a more robust estimate of model performance.",
  },
]

const tools = [
  {
    title: "WEKA",
    text:
      "A practical visual environment for machine learning and data mining, including preprocessing, classification, clustering, association analysis and evaluation.",
  },
  {
    title: "Python",
    text:
      "Supports data preparation, exploratory analysis, visualisation, machine learning and automated analytical workflows through its ecosystem of libraries.",
  },
  {
    title: "R",
    text:
      "Provides extensive capabilities for statistical computing, data analysis, visualisation and specialised analytical methods.",
  },
  {
    title: "SQL",
    text:
      "Provides powerful mechanisms for querying, filtering, joining, aggregating and preparing structured data stored in relational databases.",
  },
  {
    title: "Excel",
    text:
      "Can support smaller-scale data exploration, formulas, pivot tables, charts and basic statistical analysis.",
  },
]

const advancedTopics = [
  {
    title: "Anomaly Detection",
    text:
      "Identifies observations that differ substantially from expected patterns and may represent unusual behaviour, errors or important events.",
  },
  {
    title: "Dimensionality Reduction",
    text:
      "Reduces the number of variables while attempting to retain important information within the dataset.",
  },
  {
    title: "Principal Component Analysis",
    text:
      "Transforms correlated variables into a smaller set of components that represent major directions of variation.",
  },
  {
    title: "Feature Engineering",
    text:
      "Creates or transforms variables to provide representations that may be more useful for analysis or predictive modelling.",
  },
  {
    title: "Text Mining",
    text:
      "Extracts patterns, structures or useful information from collections of textual data.",
  },
  {
    title: "Web Mining",
    text:
      "Applies data mining concepts to information associated with websites, web documents, usage behaviour or web structures.",
  },
  {
    title: "Time Series Analysis",
    text:
      "Examines observations ordered through time to identify trends, seasonality, cycles and other temporal patterns.",
  },
  {
    title: "Predictive Analytics",
    text:
      "Uses historical data and analytical models to estimate or classify future or otherwise unknown outcomes.",
  },
]

const applications = [
  {
    title: "Business Analytics",
    text:
      "Customer segmentation, sales analysis, churn analysis, market basket analysis and business performance investigation.",
  },
  {
    title: "Healthcare Analytics",
    text:
      "Analysis of structured healthcare datasets, patient records, outcomes and other research data where appropriate safeguards and methodology apply.",
  },
  {
    title: "Education Analytics",
    text:
      "Student performance analysis, learning analytics, survey analysis and educational research datasets.",
  },
  {
    title: "Finance",
    text:
      "Transaction analysis, anomaly detection, risk-related modelling and pattern discovery in financial datasets.",
  },
  {
    title: "Cybersecurity",
    text:
      "Network traffic analysis, anomaly detection, behavioural analysis and identification of unusual patterns.",
  },
  {
    title: "Marketing",
    text:
      "Customer segmentation, campaign analysis, purchasing patterns and behavioural datasets.",
  },
  {
    title: "Research",
    text:
      "Experimental data analysis, survey datasets, secondary research datasets and academic data mining projects.",
  },
  {
    title: "Operations",
    text:
      "Process analysis, demand patterns, resource utilisation, forecasting and operational datasets.",
  },
]

const projectActivities = [
  "Cleaning and preprocessing a research dataset.",
  "Performing exploratory data analysis on a structured dataset.",
  "Building a classification model using WEKA or Python.",
  "Comparing multiple classification algorithms.",
  "Evaluating a classifier using a confusion matrix.",
  "Performing k-means clustering on a dataset.",
  "Comparing clustering approaches.",
  "Mining association rules using the Apriori algorithm.",
  "Analysing a transactional market-basket dataset.",
  "Performing regression analysis on numerical data.",
  "Detecting unusual or anomalous observations.",
  "Reducing dataset dimensionality using PCA.",
  "Comparing feature-selection techniques.",
  "Analysing text data using text-mining methods.",
  "Creating data visualisations to communicate analytical findings.",
  "Comparing machine-learning models using cross-validation.",
]

export default function DataAnalysisMiningPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://projectassignments.com/technologies/data-analysis-mining#webpage",
        url:
          "https://projectassignments.com/technologies/data-analysis-mining",
        name:
          "Data Analysis & Data Mining | Techniques, Tools, Preprocessing & Machine Learning",
        description:
          "Comprehensive Data Analysis and Data Mining guide covering preprocessing, EDA, classification, clustering, association rules, regression, anomaly detection and model evaluation.",
        isPartOf: {
          "@id": "https://projectassignments.com/#website",
        },
        breadcrumb: {
          "@id":
            "https://projectassignments.com/technologies/data-analysis-mining#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://projectassignments.com/technologies/data-analysis-mining#breadcrumb",
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
            name: "Data Analysis & Data Mining",
            item:
              "https://projectassignments.com/technologies/data-analysis-mining",
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
          eyebrow="DATA ANALYSIS & DATA MINING"
          title="Data Analysis & Data Mining: From Raw Datasets to Patterns, Insights and Predictive Models."
          body="A comprehensive guide to data analysis and data mining covering preprocessing, exploratory analysis, classification, clustering, association rules, regression, anomaly detection, model evaluation, visualisation and analytical tools."
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="DATA ANALYSIS & DATA MINING FUNDAMENTALS"
              title="Understanding data before attempting to mine it."
              body="Data analysis and data mining combine statistical reasoning, computational techniques and domain knowledge to extract useful information from datasets."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Organisations, researchers and technical systems increasingly
                generate datasets containing information about people,
                transactions, processes, measurements, events and behaviours.
                The challenge is not simply storing this information. The
                challenge is determining what can meaningfully be learned from
                it.
              </p>

              <p style={{ marginTop: "18px" }}>
                Data analysis provides a broad set of techniques for examining
                and interpreting data. Data mining goes further by applying
                computational and statistical techniques to discover patterns,
                relationships, groups, rules or predictive structures that may
                not be immediately obvious.
              </p>

              <p style={{ marginTop: "18px" }}>
                These activities overlap with statistics, machine learning,
                database technologies, business intelligence and research
                analytics. A practical data workflow may therefore use SQL to
                retrieve data, Python or R to analyse it, WEKA to experiment
                with machine-learning algorithms and visualisation tools to
                communicate the results.
              </p>

              <p style={{ marginTop: "18px" }}>
                The most important principle is that the analytical technique
                should follow the problem. A sophisticated algorithm is not
                automatically better than a simple method if the simple method
                answers the question clearly and appropriately.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CORE AREAS"
              title="Major areas of Data Analysis and Data Mining."
              body="The field covers the complete analytical journey from raw data preparation to pattern discovery and evaluation."
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
              eyebrow="KDD PROCESS"
              title="Knowledge Discovery in Databases and the data mining process."
              body="Data mining is often considered part of a broader knowledge discovery workflow in which raw data is transformed into useful and interpretable knowledge."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "42px auto 0",
              }}
            >
              {kddStages.map((stage) => (
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
                The KDD perspective is useful because it demonstrates that data
                mining is not simply the act of running an algorithm. Data
                quality, preparation, selection, interpretation and domain
                understanding all influence whether the final result is useful.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="DATA PREPROCESSING"
              title="Data cleaning and preprocessing techniques."
              body="Raw datasets frequently contain missing values, duplicates, inconsistent formats, irrelevant attributes or other issues that need to be addressed before analysis."
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
              {preprocessingTopics.map((topic) => (
                <article
                  key={topic.title}
                  style={{
                    padding: "25px",
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

            <div
              style={{
                maxWidth: "940px",
                margin: "38px auto 0",
              }}
            >
              <h3>Why preprocessing matters</h3>

              <p style={{ marginTop: "10px" }}>
                Poor-quality input can affect both descriptive analysis and
                predictive modelling. However, preprocessing decisions should
                not be made mechanically. For example, removing every outlier
                can eliminate genuine observations, while replacing every
                missing value with the mean can distort a dataset.
              </p>

              <p style={{ marginTop: "18px" }}>
                Each preprocessing decision should therefore be connected to
                the characteristics of the data and the purpose of the
                analysis.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="EXPLORATORY DATA ANALYSIS"
              title="Exploratory Data Analysis: understand the dataset before modelling."
              body="EDA uses descriptive statistics, visualisation and structured investigation to reveal important characteristics of a dataset."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Exploratory Data Analysis is often one of the most useful
                stages of a data project because it provides an opportunity to
                understand the data before selecting a model or testing a
                hypothesis.
              </p>

              <p style={{ marginTop: "18px" }}>
                An analyst may examine distributions, frequencies, central
                tendency, variation, relationships between variables,
                categorical proportions and unusual observations.
              </p>

              <p style={{ marginTop: "18px" }}>
                Visualisations can complement numerical summaries. Histograms,
                scatter plots, box plots, bar charts and other appropriate
                graphics can reveal patterns that may not be immediately
                visible in a table.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Common EDA questions
              </h3>

              <ul
                style={{
                  marginTop: "14px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>What variables are present?</li>
                <li>What types of data do the variables contain?</li>
                <li>Are there missing observations?</li>
                <li>Are there duplicate records?</li>
                <li>What do the distributions look like?</li>
                <li>Are there unusually large or small observations?</li>
                <li>Are variables related to one another?</li>
                <li>Are there obvious groups within the observations?</li>
                <li>Does the dataset appear consistent with its documentation?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CLASSIFICATION"
              title="Classification in Data Mining and Machine Learning."
              body="Classification is a supervised learning task in which a model learns from labelled examples and predicts a class for new observations."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Classification is useful when the outcome of interest consists
                of predefined categories. Examples can include predicting
                whether an observation belongs to one of several classes,
                provided the dataset and research or business context support
                such a task.
              </p>

              <p style={{ marginTop: "18px" }}>
                A classification workflow normally involves preparing labelled
                data, selecting relevant attributes, dividing or resampling
                data appropriately, training one or more algorithms and
                evaluating their predictions on data not used for fitting the
                final model.
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
                {classificationAlgorithms.map((algorithm) => (
                  <article
                    key={algorithm.title}
                    style={{
                      padding: "25px",
                      border: "1px solid var(--border)",
                      borderRadius: "16px",
                      background: "var(--background)",
                    }}
                  >
                    <h3>{algorithm.title}</h3>

                    <p style={{ marginTop: "10px" }}>
                      {algorithm.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="CLUSTERING"
              title="Clustering techniques for discovering groups in data."
              body="Clustering is an unsupervised data mining approach that attempts to identify groups of observations based on similarity."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Unlike classification, clustering does not require predefined
                class labels. The algorithm attempts to discover structure
                within the data according to a chosen similarity or distance
                concept.
              </p>

              <p style={{ marginTop: "18px" }}>
                Clustering can be used for exploratory analysis, customer
                segmentation, document grouping, pattern discovery and other
                applications where naturally occurring groups may be relevant.
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
                {clusteringMethods.map((method) => (
                  <article
                    key={method.title}
                    style={{
                      padding: "25px",
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

              <p style={{ marginTop: "28px" }}>
                A clustering algorithm will always produce some mathematical
                grouping under its selected settings, but that does not mean
                every grouping represents a meaningful real-world category.
                Interpretation requires domain knowledge and appropriate
                evaluation.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="ASSOCIATION RULE MINING"
              title="Association analysis, frequent itemsets and the Apriori algorithm."
              body="Association rule mining identifies relationships between items or attributes that frequently occur together."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Association rule mining is particularly associated with
                transactional datasets. A classic example is market basket
                analysis, where the objective is to discover products or items
                that frequently appear together in transactions.
              </p>

              <p style={{ marginTop: "18px" }}>
                The Apriori algorithm uses the concept of frequent itemsets and
                support-based pruning to reduce the search space when
                identifying candidate combinations.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Important association-rule concepts
              </h3>

              <div
                className="two-column"
                style={{ marginTop: "28px" }}
              >
                <div>
                  <h3>Support</h3>

                  <p style={{ marginTop: "10px" }}>
                    Indicates how frequently an itemset occurs within the
                    relevant transaction collection.
                  </p>
                </div>

                <div>
                  <h3>Confidence</h3>

                  <p style={{ marginTop: "10px" }}>
                    Describes how frequently transactions containing the
                    antecedent also contain the consequent within the rule.
                  </p>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <h3>Lift</h3>

                  <p style={{ marginTop: "10px" }}>
                    Compares the observed co-occurrence of items with what
                    would be expected from their individual frequencies under
                    the relevant calculation.
                  </p>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <h3>Frequent Itemsets</h3>

                  <p style={{ marginTop: "10px" }}>
                    Groups of items that satisfy a selected frequency
                    criterion and can be used to generate candidate rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="REGRESSION & PREDICTIVE ANALYTICS"
              title="Regression, prediction and analytical modelling."
              body="Regression methods model relationships involving numerical outcomes and can be used for explanation, estimation or prediction depending on the research design."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Regression analysis examines how an outcome variable relates to
                one or more predictor variables. Depending on the problem,
                researchers and analysts may use linear regression, logistic
                regression or other specialised approaches.
              </p>

              <p style={{ marginTop: "18px" }}>
                Predictive modelling extends this idea by using historical
                observations to estimate unknown or future outcomes. The
                distinction between prediction and explanation is important:
                a model can sometimes predict effectively without establishing
                a causal relationship.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Important modelling considerations
              </h3>

              <ul
                style={{
                  marginTop: "14px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>Define the outcome variable clearly.</li>
                <li>Identify appropriate predictor variables.</li>
                <li>Check data quality before modelling.</li>
                <li>Consider relevant model assumptions.</li>
                <li>Separate training and evaluation data appropriately.</li>
                <li>Evaluate predictive performance using suitable metrics.</li>
                <li>Check for overfitting.</li>
                <li>Interpret results within the context of the problem.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="MODEL EVALUATION"
              title="Evaluating classification and data mining models."
              body="A model should be evaluated using data and metrics that provide meaningful evidence about how it performs for the intended task."
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
              {evaluationMethods.map((method) => (
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
                margin: "38px auto 0",
              }}
            >
              <h3>Accuracy is not always enough</h3>

              <p style={{ marginTop: "10px" }}>
                Accuracy can be misleading when one class is much more common
                than another. For example, a model that predicts the majority
                class for almost every observation may appear highly accurate
                while performing poorly for the minority class.
              </p>

              <p style={{ marginTop: "18px" }}>
                This is why precision, recall, F1 score, class-specific
                measures and other appropriate evaluation techniques may need
                to be considered.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="OVERFITTING & VALIDATION"
              title="Training data, test data, cross-validation and overfitting."
              body="A model that performs well on the data used to build it may not perform equally well on new observations."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Overfitting occurs when a model captures patterns that are too
                closely tied to the training data, including noise or
                accidental characteristics, and consequently performs less
                effectively on unseen data.
              </p>

              <p style={{ marginTop: "18px" }}>
                A common approach is to separate available data into training
                and evaluation portions. Cross-validation can provide another
                way of assessing model performance by repeatedly training and
                validating using different portions of the available data.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Good evaluation practice
              </h3>

              <ul
                style={{
                  marginTop: "14px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>Keep evaluation data separate from model fitting.</li>
                <li>Avoid repeatedly tuning against the final test set.</li>
                <li>Use cross-validation where appropriate.</li>
                <li>Consider class imbalance.</li>
                <li>Compare relevant metrics rather than one number alone.</li>
                <li>Interpret performance in relation to the application.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="ADVANCED DATA MINING"
              title="Advanced data mining and analytical techniques."
              body="More specialised analytical problems may require techniques beyond basic classification, clustering and association analysis."
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
              {advancedTopics.map((topic) => (
                <article
                  key={topic.title}
                  style={{
                    padding: "25px",
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
              eyebrow="DATA VISUALISATION"
              title="Visualising patterns discovered through data analysis."
              body="Visualisation helps analysts communicate distributions, comparisons, relationships and trends that emerge during exploration and modelling."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Data visualisation is useful both before and after modelling.
                During exploratory analysis, charts can reveal distributions,
                relationships and unusual observations. During reporting,
                visualisations can communicate important findings to readers
                who may not want to interpret raw analytical output.
              </p>

              <div
                className="two-column"
                style={{ marginTop: "32px" }}
              >
                <div>
                  <h3>Bar charts</h3>

                  <p style={{ marginTop: "10px" }}>
                    Useful for comparing values across discrete categories.
                  </p>
                </div>

                <div>
                  <h3>Histograms</h3>

                  <p style={{ marginTop: "10px" }}>
                    Useful for examining the distribution of numerical
                    observations.
                  </p>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <h3>Scatter plots</h3>

                  <p style={{ marginTop: "10px" }}>
                    Useful for examining relationships between numerical
                    variables.
                  </p>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <h3>Box plots</h3>

                  <p style={{ marginTop: "10px" }}>
                    Useful for comparing distributions across groups.
                  </p>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <h3>Heatmaps</h3>

                  <p style={{ marginTop: "10px" }}>
                    Useful for displaying structured relationships across a
                    matrix.
                  </p>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <h3>Line charts</h3>

                  <p style={{ marginTop: "10px" }}>
                    Useful when observations have a meaningful ordered or
                    temporal sequence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="TOOLS & SOFTWARE"
              title="Tools commonly used for Data Analysis and Data Mining."
              body="Different tools support different parts of the analytical workflow, from querying datasets to machine learning and visualisation."
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
              {tools.map((tool) => (
                <article
                  key={tool.title}
                  style={{
                    padding: "26px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    background: "var(--background)",
                  }}
                >
                  <h3>{tool.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    {tool.text}
                  </p>
                </article>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "34px",
              }}
            >
              <Link
                href="/technologies/weka"
                className="text-link"
              >
                Explore WEKA
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/technologies/weka/classification"
                className="text-link"
              >
                WEKA Classification
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/technologies/weka/clustering-evaluation"
                className="text-link"
              >
                WEKA Clustering & Evaluation
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/resources/data-mining-tools"
                className="text-link"
              >
                Data Mining Tools
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="SQL & DATA ANALYSIS"
              title="The role of databases and SQL in data analysis."
              body="Data analysis often begins before a dataset reaches a statistical or machine-learning environment."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                In many real-world environments, analytical data is stored in
                relational databases rather than a single spreadsheet or CSV
                file. SQL provides the foundation for retrieving, filtering,
                joining and aggregating that information.
              </p>

              <p style={{ marginTop: "18px" }}>
                Analysts may use SQL to create an analytical dataset before
                moving it into Python, R, Excel, WEKA or another environment.
                This makes database skills an important part of practical data
                analysis.
              </p>

              <h3 style={{ marginTop: "30px" }}>
                Common SQL activities in analytical workflows
              </h3>

              <ul
                style={{
                  marginTop: "14px",
                  paddingLeft: "22px",
                  lineHeight: 1.9,
                }}
              >
                <li>Filtering records using WHERE conditions</li>
                <li>Combining tables using JOIN operations</li>
                <li>Aggregating data using GROUP BY</li>
                <li>Calculating summary statistics</li>
                <li>Removing or identifying duplicate records</li>
                <li>Creating analytical subsets</li>
                <li>Preparing datasets for downstream analysis</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="APPLICATIONS"
              title="Where Data Analysis and Data Mining are used."
              body="Data mining techniques can be applied across business, research, education, finance, healthcare, cybersecurity and technical systems."
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
              {applications.map((application) => (
                <article
                  key={application.title}
                  style={{
                    padding: "25px",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    background: "var(--background)",
                  }}
                >
                  <h3>{application.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    {application.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH & ACADEMIC APPLICATIONS"
              title="Data Analysis and Data Mining for research projects, dissertations and theses."
              body="Data mining and analytical techniques can support academic research when they are aligned with the research question, methodology and available evidence."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              <p>
                Research datasets can contain survey responses, experimental
                measurements, public datasets, transaction records, text,
                behavioural observations or other structured information.
                Data analysis provides methods for describing these datasets,
                while data mining can help discover patterns that warrant
                further investigation.
              </p>

              <p style={{ marginTop: "18px" }}>
                In an academic context, the algorithm should not replace
                methodological reasoning. Researchers need to explain why a
                particular technique was selected, what assumptions apply, how
                the data was prepared and how the resulting patterns were
                interpreted.
              </p>

              <p style={{ marginTop: "18px" }}>
                This is particularly important for dissertation and thesis
                projects, where the analytical method needs to connect clearly
                with the research questions and methodology.
              </p>

              <div style={{ marginTop: "28px" }}>
                <Link
                  href="/services/research-methodology"
                  className="text-link"
                >
                  Explore research methodology
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="PROJECT ACTIVITIES"
              title="Common Data Analysis and Data Mining project activities."
              body="Academic and practical projects can combine several techniques depending on the dataset and analytical objective."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              {projectActivities.map((item) => (
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

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="DATA MINING PROJECT WORKFLOW"
              title="A practical workflow for a Data Analysis or Data Mining project."
              body="A strong project normally starts with the problem and dataset rather than immediately selecting an algorithm."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              {[
                "Define the analytical question or project objective.",
                "Identify and understand the available dataset.",
                "Document variables, attributes and data types.",
                "Inspect data quality and missing values.",
                "Clean and preprocess the dataset.",
                "Perform exploratory data analysis.",
                "Select an appropriate analytical or mining technique.",
                "Train or execute the selected method.",
                "Evaluate the results using appropriate measures.",
                "Compare alternative methods where useful.",
                "Interpret the patterns or predictions.",
                "Visualise important findings.",
                "Document assumptions and limitations.",
                "Relate the findings back to the original objective.",
              ].map((step, index) => (
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
              eyebrow="QUALITY CHECKLIST"
              title="Data Analysis and Data Mining checklist."
              body="Use this checklist before finalising an analytical project, assignment or research workflow."
            />

            <div
              style={{
                maxWidth: "940px",
                margin: "40px auto 0",
              }}
            >
              {[
                "The analytical problem is clearly defined.",
                "The dataset is relevant to the problem being investigated.",
                "Variables and data types have been understood.",
                "Data quality issues have been identified.",
                "Preprocessing decisions have been documented.",
                "Exploratory analysis has been performed where appropriate.",
                "The selected algorithm matches the analytical objective.",
                "Training and evaluation procedures are appropriate.",
                "Model performance is assessed using suitable metrics.",
                "Potential overfitting has been considered.",
                "Important assumptions have been identified.",
                "Results are interpreted rather than simply copied from software output.",
                "Visualisations accurately represent the data.",
                "Limitations are acknowledged.",
                "Conclusions remain consistent with the available evidence.",
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

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="RELATED TECHNOLOGY TOPICS"
              title="Data Analysis & Data Mining connects with the wider technology ecosystem."
              body="The subject overlaps naturally with databases, programming, machine learning, research analytics and visualisation."
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
                href="/technologies/weka"
                className="text-link"
              >
                WEKA Data Mining
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/technologies/weka/classification"
                className="text-link"
              >
                WEKA Classification
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/technologies/weka/clustering-evaluation"
                className="text-link"
              >
                WEKA Clustering & Evaluation
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
                Programming & Development
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/technologies/research-analytical-technologies"
                className="text-link"
              >
                Research & Analytical Technologies
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

        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="DATA ANALYSIS & DATA MINING FAQ"
              title="Frequently asked questions."
              body="Common questions about data analysis, data mining, preprocessing, machine learning, algorithms and analytical tools."
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

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="PROJECTASSIGNMENTS"
              title="A practical Data Analysis & Data Mining knowledge hub."
              body="Use this resource to understand the complete data-mining workflow, from raw data preparation and exploratory analysis to pattern discovery, modelling and evaluation."
            />

            <div
              style={{
                maxWidth: "920px",
                margin: "34px auto 0",
              }}
            >
              <p>
                Effective data mining is not simply about selecting an
                algorithm and generating output. The quality of the dataset,
                preprocessing decisions, choice of technique, evaluation
                method and interpretation all influence the usefulness of the
                final result.
              </p>

              <p style={{ marginTop: "18px" }}>
                Whether the objective is a research analysis, business
                analytics project, machine-learning experiment or academic
                data-mining assignment, the same underlying principle applies:
                start with a clearly defined problem, understand the data and
                select methods that are appropriate for the evidence available.
              </p>

              <p style={{ marginTop: "18px" }}>
                This hub provides a foundation for exploring those techniques
                while connecting to more specialised ProjectAssignments
                resources covering WEKA, databases, research analytics and
                other areas of technical data work.
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