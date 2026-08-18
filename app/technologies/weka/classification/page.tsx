import type { Metadata } from 'next'
import Link from 'next/link'

import {
    CTA,
    Footer,
    PageHero,
    SectionHeading,
} from '@/components/site'

export const metadata: Metadata = {
  title:
    'WEKA Classification: J48, Naive Bayes & Random Forest Guide | ProjectAssignments',
  description:
    'Learn classification in WEKA with practical guidance on J48 decision trees, Naive Bayes, Random Forest, k-NN, training and testing data, cross-validation, confusion matrices, accuracy, precision, recall, F-measure, and interpreting WEKA results.',
  keywords: [
    'WEKA classification',
    'WEKA classification tutorial',
    'WEKA J48',
    'WEKA Naive Bayes',
    'WEKA Random Forest',
    'WEKA k-NN',
    'WEKA decision tree',
    'WEKA confusion matrix',
    'WEKA accuracy precision recall',
    'WEKA cross validation',
    'WEKA classification assignment',
    'machine learning classification WEKA',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/technologies/weka/classification',
  },
  openGraph: {
    title:
      'WEKA Classification: J48, Naive Bayes & Random Forest Guide',
    description:
      'A practical guide to classification in WEKA, covering major classifiers, evaluation metrics, cross-validation, confusion matrices, and interpretation of results.',
    url:
      'https://projectassignments.com/technologies/weka/classification',
    siteName: 'ProjectAssignments',
    type: 'article',
  },
}

const classifiers = [
  {
    name: 'J48 Decision Tree',
    type: 'Decision tree',
    description:
      'A tree-based classifier that represents decisions as a hierarchy of tests and outcomes. J48 is a commonly studied classifier in WEKA and is particularly useful for understanding decision-tree construction and interpretation.',
    strengths:
      'Easy-to-interpret model structure, visual decision rules, useful for explaining classification decisions.',
  },
  {
    name: 'Naive Bayes',
    type: 'Probabilistic classifier',
    description:
      'A probabilistic classification approach based on Bayes’ theorem and a simplifying conditional-independence assumption between attributes.',
    strengths:
      'Fast training, straightforward probabilistic interpretation, and useful as a baseline classifier.',
  },
  {
    name: 'Random Forest',
    type: 'Ensemble method',
    description:
      'An ensemble approach that combines multiple decision trees to produce a classification result rather than relying on a single tree.',
    strengths:
      'Often provides strong predictive performance and can be useful when a single decision tree is too sensitive to the training data.',
  },
  {
    name: 'IBk / k-NN',
    type: 'Instance-based learning',
    description:
      'A nearest-neighbour approach that classifies an instance according to the classes of nearby training instances.',
    strengths:
      'Conceptually intuitive and useful for demonstrating how similarity between observations can influence classification.',
  },
]

const workflow = [
  {
    number: '01',
    title: 'Prepare the dataset',
    text:
      'Check the attributes, class variable, missing values, data types, and overall structure of the dataset before training a model.',
  },
  {
    number: '02',
    title: 'Open the Classify panel',
    text:
      'Load the dataset in WEKA Explorer and select the classification workflow from the Classify section.',
  },
  {
    number: '03',
    title: 'Choose a classifier',
    text:
      'Select an appropriate algorithm such as J48, Naive Bayes, Random Forest, or IBk depending on the purpose of the analysis.',
  },
  {
    number: '04',
    title: 'Choose an evaluation method',
    text:
      'Use an appropriate training and testing strategy, such as a supplied test set, percentage split, or cross-validation.',
  },
  {
    number: '05',
    title: 'Run the classifier',
    text:
      'Execute the model and inspect the generated summary, correctly classified instances, incorrectly classified instances, and detailed evaluation output.',
  },
  {
    number: '06',
    title: 'Interpret the results',
    text:
      'Do not stop at accuracy. Examine the confusion matrix, precision, recall, F-measure, model structure, and errors in the context of the research question.',
  },
]

const metrics = [
  {
    name: 'Accuracy',
    formula: 'Correct predictions / Total predictions',
    explanation:
      'The proportion of instances that the classifier predicts correctly.',
  },
  {
    name: 'Precision',
    formula: 'TP / (TP + FP)',
    explanation:
      'Among the instances predicted as a particular class, precision indicates how many actually belong to that class.',
  },
  {
    name: 'Recall',
    formula: 'TP / (TP + FN)',
    explanation:
      'Among the instances that actually belong to a class, recall indicates how many were correctly identified.',
  },
  {
    name: 'F-measure',
    formula: 'Harmonic mean of precision and recall',
    explanation:
      'Provides a combined measure of precision and recall and can be useful when both types of error matter.',
  },
]

const commonMistakes = [
  {
    title: 'Looking only at accuracy',
    text:
      'A high accuracy value does not automatically mean that a classifier is useful, particularly when class distributions are highly uneven.',
  },
  {
    title: 'Ignoring the class attribute',
    text:
      'The class variable must be correctly identified before classification results can be interpreted meaningfully.',
  },
  {
    title: 'Using the wrong evaluation strategy',
    text:
      'A model should be evaluated using a method appropriate to the dataset and the research question rather than choosing an evaluation option arbitrarily.',
  },
  {
    title: 'Comparing models without context',
    text:
      'A classifier with a slightly higher score is not automatically the better choice. Interpretability, computational requirements, errors, and research objectives can also matter.',
  },
  {
    title: 'Reporting WEKA output without interpretation',
    text:
      'A report should explain what the output means and how it relates to the research question rather than simply reproducing screenshots or tables.',
  },
  {
    title: 'Treating training performance as final performance',
    text:
      'A model that performs well on its training data may not generalise equally well to unseen observations.',
  },
]

const classificationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/technologies/weka/classification#webpage',
      url:
        'https://projectassignments.com/technologies/weka/classification',
      name:
        'WEKA Classification: J48, Naive Bayes & Random Forest Guide',
      description:
        'A practical guide to classification in WEKA covering major classifiers, evaluation metrics, cross-validation, confusion matrices, and interpretation.',
      isPartOf: {
        '@id': 'https://projectassignments.com/#website',
      },
      breadcrumb: {
        '@id':
          'https://projectassignments.com/technologies/weka/classification#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/technologies/weka/classification#breadcrumb',
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
          name: 'Technologies',
          item: 'https://projectassignments.com/technologies',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'WEKA',
          item: 'https://projectassignments.com/technologies/weka',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Classification',
          item:
            'https://projectassignments.com/technologies/weka/classification',
        },
      ],
    },
  ],
}

export default function WekaClassificationPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="WEKA • CLASSIFICATION"
          title="WEKA Classification: A Practical Guide to J48, Naive Bayes, Random Forest & More."
          body="Learn how supervised classification works in WEKA, how to choose and run common classifiers, and how to interpret accuracy, confusion matrices, precision, recall, F-measure, and other evaluation results."
        />

        {/* Introduction */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="UNDERSTANDING CLASSIFICATION"
              title="Classification is about learning from labelled examples."
              body="Classification is a supervised machine-learning task in which a model learns from examples whose class is already known and then uses that learned relationship to classify new instances."
            />

            <div className="content-stack">
              <p>
                Imagine a dataset containing information about students, with
                attributes such as attendance, study hours, previous scores,
                and a final performance category. If the performance category
                is known for the training observations, a classification
                algorithm can learn patterns associated with those categories.
              </p>

              <p>
                WEKA provides a graphical environment in which students and
                researchers can experiment with classification algorithms
                without having to implement each algorithm from scratch.
              </p>

              <p>
                This makes WEKA particularly useful for learning machine
                learning concepts, comparing algorithms, exploring datasets,
                and producing interpretable experimental results for academic
                projects.
              </p>

              <Link href="/technologies/weka" className="text-link">
                ← Return to the complete WEKA guide
              </Link>
            </div>
          </div>
        </section>

        {/* Classification workflow */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="WEKA CLASSIFICATION WORKFLOW"
              title="A structured process from dataset to interpretation."
              body="A good WEKA experiment is more than selecting a classifier and clicking Start. Each stage affects how meaningful the final result will be."
            />

            <div className="approach-grid">
              {workflow.map((step) => (
                <article className="approach-card" key={step.number}>
                  <span aria-hidden="true">{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WEKA Explorer */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="WEKA EXPLORER"
              title="Where classification happens in WEKA."
              body="The Classify panel in WEKA Explorer brings together classifier selection, evaluation settings, execution, and result inspection."
            />

            <div className="content-stack">
              <p>
                After loading a dataset into WEKA Explorer, the Classify tab
                allows you to select a learning algorithm and configure how
                the model should be evaluated.
              </p>

              <p>
                The workflow normally involves selecting a classifier,
                selecting the class attribute, choosing the evaluation
                approach, and then running the experiment.
              </p>

              <p>
                The resulting output can include a model description,
                correctly and incorrectly classified instances, error
                statistics, a confusion matrix, and class-level evaluation
                measures.
              </p>

              <p>
                For academic work, it is important to capture the relevant
                WEKA output during the experiment so that the methodology and
                results can later be documented accurately.
              </p>
            </div>
          </div>
        </section>

        {/* Major classifiers */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="COMMON CLASSIFIERS"
              title="Four useful algorithms to understand in WEKA."
              body="Each classifier approaches the prediction problem differently. Learning the differences is more valuable than simply knowing where each algorithm appears in the WEKA interface."
            />

            <div className="feature-grid">
              {classifiers.map((classifier) => (
                <article className="feature-card" key={classifier.name}>
                  <p className="eyebrow">{classifier.type}</p>

                  <h3>{classifier.name}</h3>

                  <p>{classifier.description}</p>

                  <p>
                    <strong>Useful for:</strong>{' '}
                    {classifier.strengths}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* J48 */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="J48 DECISION TREE"
              title="J48: one of the most useful classifiers for learning from WEKA output."
              body="Decision trees are attractive in academic work because the resulting model can often be explained as a sequence of attribute-based decisions."
            />

            <div className="content-stack">
              <p>
                J48 is WEKA's implementation of the C4.5 decision-tree
                approach. It constructs a tree by selecting attributes that
                help separate observations into classes.
              </p>

              <p>
                A resulting tree can be interpreted from the root toward its
                branches and leaves. Each decision node represents a test on an
                attribute, while terminal leaves represent predicted classes.
              </p>

              <p>
                This interpretability makes decision trees particularly useful
                when an academic report needs to explain not only whether a
                model made a prediction, but also the structure of the learned
                decision process.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`J48
├── Attribute A <= threshold
│   ├── Class A
│   └── Class B
└── Attribute A > threshold
    ├── Class B
    └── Class C`}</code>
                </pre>
              </div>

              <p>
                The actual structure depends on the dataset and the parameters
                used during training. The example above is only a conceptual
                representation of how a decision tree can be read.
              </p>
            </div>
          </div>
        </section>

        {/* Naive Bayes */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="NAIVE BAYES"
              title="Naive Bayes approaches classification through probability."
              body="Naive Bayes provides a useful contrast to decision trees because it approaches the classification problem through conditional probabilities rather than a tree structure."
            />

            <div className="content-stack">
              <p>
                Bayes' theorem provides the mathematical foundation for the
                method. Naive Bayes simplifies the problem by assuming
                conditional independence between attributes given the class.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`P(Class | Features)
        ∝
P(Class) × P(Features | Class)`}</code>
                </pre>
              </div>

              <p>
                The simplifying assumption does not mean that the attributes
                are genuinely independent in every real-world dataset. It is a
                modelling assumption that allows the classifier to estimate
                class probabilities efficiently.
              </p>

              <p>
                In WEKA, Naive Bayes is particularly useful when learning about
                probabilistic classification and when establishing a baseline
                against which other classifiers can be compared.
              </p>
            </div>
          </div>
        </section>

        {/* Random Forest */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="RANDOM FOREST"
              title="Random Forest combines multiple decision trees."
              body="Instead of relying on one decision tree, Random Forest builds an ensemble of trees and combines their predictions."
            />

            <div className="content-stack">
              <p>
                The basic idea behind an ensemble is that multiple models can
                collectively produce a more robust prediction than a single
                model in many situations.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`Training data
      │
      ├── Tree 1 ──┐
      ├── Tree 2 ──┤
      ├── Tree 3 ──┼──> Combined prediction
      ├── Tree 4 ──┤
      └── Tree N ──┘`}</code>
                </pre>
              </div>

              <p>
                Random Forest is therefore useful when students want to compare
                a single decision tree such as J48 with an ensemble-based
                approach.
              </p>

              <p>
                However, a comparison should not simply report which model has
                the highest accuracy. The analysis should consider the chosen
                evaluation method, class-level metrics, model complexity, and
                the purpose of the experiment.
              </p>
            </div>
          </div>
        </section>

        {/* kNN */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="IBK / K-NEAREST NEIGHBOURS"
              title="Classification based on nearby observations."
              body="Instance-based learning provides another useful perspective on classification because it makes predictions based on similarity to existing observations."
            />

            <div className="content-stack">
              <p>
                The basic intuition behind k-nearest neighbours is simple:
                observations that are close to one another in the selected
                feature space may have similar class labels.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`New instance
     │
     ├── nearest observation → Class A
     ├── nearest observation → Class A
     └── nearest observation → Class B

Majority class → Class A`}</code>
                </pre>
              </div>

              <p>
                The choice of <code>k</code> affects the classification
                behaviour. A very small neighbourhood can be sensitive to
                individual observations, while a larger neighbourhood can
                smooth the decision.
              </p>

              <p>
                In WEKA, IBk provides a practical way to explore this
                instance-based approach and compare it with tree-based and
                probabilistic classifiers.
              </p>
            </div>
          </div>
        </section>

        {/* Training and test */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="TRAINING & TESTING"
              title="A classifier must be evaluated on data it has not simply memorised."
              body="The evaluation strategy determines how confidently you can interpret the reported performance of a classification model."
            />

            <div className="two-column">
              <div>
                <h3>Training data</h3>

                <p>
                  Training data is used by the algorithm to learn the
                  relationship between attributes and class labels.
                </p>

                <p>
                  A model can appear highly successful on the data it learned
                  from, but that does not necessarily mean it will generalise
                  well to unseen observations.
                </p>
              </div>

              <div>
                <h3>Testing data</h3>

                <p>
                  Testing data provides observations that can be used to
                  evaluate how the trained model behaves on data that was not
                  used in the same way during model construction.
                </p>

                <p>
                  Separating training and evaluation is therefore fundamental
                  to meaningful machine-learning experiments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cross validation */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CROSS-VALIDATION"
              title="Why WEKA commonly uses k-fold cross-validation."
              body="Cross-validation provides a structured way to use available data for both training and evaluation while reducing dependence on one arbitrary train-test split."
            />

            <div className="content-stack">
              <p>
                In k-fold cross-validation, the dataset is divided into
                approximately k portions. The model is trained using some
                portions and evaluated on another portion, with the process
                repeated so that different portions serve as the evaluation
                data.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`Fold 1 → Test | Train | Train | Train | Train
Fold 2 → Train | Test | Train | Train | Train
Fold 3 → Train | Train | Test | Train | Train
...
Fold k → Train | Train | Train | Train | Test`}</code>
                </pre>
              </div>

              <p>
                The final evaluation aggregates the results across the folds.
                This can provide a more stable estimate than relying on a
                single split, although the suitability of any evaluation
                strategy depends on the dataset and research design.
              </p>
            </div>
          </div>
        </section>

        {/* Confusion matrix */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="CONFUSION MATRIX"
              title="The confusion matrix shows where the classifier gets things right and wrong."
              body="Accuracy provides a single number. A confusion matrix provides a much richer picture of the types of predictions a classifier is making."
            />

            <div className="content-stack">
              <p>
                For a binary classification problem, predictions can be
                described using true positives, true negatives, false
                positives, and false negatives.
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Predicted Positive</th>
                      <th>Predicted Negative</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>Actual Positive</th>
                      <td>True Positive</td>
                      <td>False Negative</td>
                    </tr>
                    <tr>
                      <th>Actual Negative</th>
                      <td>False Positive</td>
                      <td>True Negative</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                In multi-class problems, the confusion matrix expands into a
                larger table where each row and column corresponds to a class.
                This can reveal which classes the model tends to confuse.
              </p>

              <p>
                For academic analysis, this is often more informative than
                reporting accuracy alone.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="MODEL EVALUATION"
              title="Accuracy is only one part of the story."
              body="Different evaluation metrics highlight different aspects of classifier performance."
            />

            <div className="feature-grid">
              {metrics.map((metric) => (
                <article className="feature-card" key={metric.name}>
                  <h3>{metric.name}</h3>

                  <div className="code-block">
                    <pre>
                      <code>{metric.formula}</code>
                    </pre>
                  </div>

                  <p>{metric.explanation}</p>
                </article>
              ))}
            </div>

            <div className="content-stack" style={{ marginTop: '32px' }}>
              <p>
                The appropriate metric depends on the problem. For example,
                when one class is much more important than another, or when
                the classes are imbalanced, accuracy alone can provide a
                misleading impression of performance.
              </p>
            </div>
          </div>
        </section>

        {/* Comparing classifiers */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="MODEL COMPARISON"
              title="How should you compare classifiers in WEKA?"
              body="A meaningful comparison requires more than placing several accuracy values next to one another."
            />

            <div className="content-stack">
              <p>
                Suppose a WEKA experiment produces results from J48, Naive
                Bayes, Random Forest, and IBk. A useful comparison can consider:
              </p>

              <ul>
                <li>Overall accuracy</li>
                <li>Precision and recall</li>
                <li>F-measure</li>
                <li>Confusion matrices</li>
                <li>Number and type of classification errors</li>
                <li>Model interpretability</li>
                <li>Training and evaluation strategy</li>
                <li>The objectives of the research or assignment</li>
              </ul>

              <p>
                A decision tree might be easier to explain than a more complex
                ensemble model, while an ensemble might provide stronger
                predictive performance on a particular dataset. The "best"
                classifier therefore depends on the question being asked.
              </p>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="COMMON WEKA MISTAKES"
              title="What often goes wrong in classification experiments?"
              body="The biggest problems are often methodological rather than technical."
            />

            <div className="feature-grid">
              {commonMistakes.map((mistake) => (
                <article className="feature-card" key={mistake.title}>
                  <h3>{mistake.title}</h3>
                  <p>{mistake.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Academic reporting */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="ACADEMIC REPORTING"
              title="How WEKA classification results can be presented in a report."
              body="The technical output should be transformed into an explanation that another reader can understand and evaluate."
            />

            <div className="content-stack">
              <p>
                A strong academic write-up should normally explain the dataset,
                identify the class attribute, describe the chosen classifier,
                state the evaluation method, present the relevant results, and
                interpret what those results mean.
              </p>

              <p>
                For example, rather than writing only:
              </p>

              <div className="code-block">
                <pre>
                  <code>{`J48 Accuracy: 86.4%`}</code>
                </pre>
              </div>

              <p>
                a stronger discussion would explain how the model was
                evaluated, what the confusion matrix reveals, which classes
                were most difficult to predict, and why the result matters to
                the research question.
              </p>

              <p>
                Screenshots of WEKA output can support the report, but they
                should complement rather than replace the written analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Practical workflow example */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="PRACTICAL EXPERIMENT"
              title="A simple way to structure a WEKA classification experiment."
              body="The following sequence provides a useful framework for a small academic classification exercise."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`Dataset
   ↓
Inspect attributes
   ↓
Identify class
   ↓
Select classifier
   ↓
Choose evaluation method
   ↓
Run model
   ↓
Inspect confusion matrix
   ↓
Review precision / recall / F-measure
   ↓
Compare with other classifiers
   ↓
Interpret results`}</code>
                </pre>
              </div>

              <p>
                The important point is that the final interpretation comes
                after the complete workflow. Choosing an algorithm is only one
                part of the experiment.
              </p>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="CONTINUE LEARNING"
              title="Continue through the WEKA technology cluster."
              body="The WEKA resources are designed to work together, moving from the general platform to focused machine-learning workflows."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>WEKA Complete Guide</h3>

                <p>
                  Start with the main WEKA guide for an overview of data
                  mining, ARFF datasets, preprocessing, classification,
                  clustering, and model evaluation.
                </p>

                <Link href="/technologies/weka" className="text-link">
                  Open the complete WEKA guide →
                </Link>
              </article>

              <article className="feature-card">
                <h3>Classification</h3>

                <p>
                  You are here. Explore supervised learning, J48, Naive Bayes,
                  Random Forest, IBk, cross-validation, confusion matrices,
                  and classification metrics.
                </p>
              </article>

              <article className="feature-card">
                <h3>Clustering & Evaluation</h3>

                <p>
                  Explore unsupervised learning, k-means clustering, cluster
                  evaluation, model comparison, and interpretation of WEKA
                  results.
                </p>

                <Link
                  href="/technologies/weka/clustering-evaluation"
                  className="text-link"
                >
                  Explore clustering and evaluation →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Academic support */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="ACADEMIC & PROJECT WORK"
              title="WEKA classification is particularly useful when the analysis needs to be explained."
              body="Machine-learning assignments often require more than obtaining a model output. Students may need to understand the methodology, justify their choices, interpret results, and document the experiment."
            />

            <div className="content-stack">
              <p>
                ProjectAssignments provides structured technical and academic
                guidance around data-mining and machine-learning work. This
                can include understanding WEKA workflows, interpreting model
                output, reviewing methodology, discussing evaluation results,
                and improving technical explanations.
              </p>

              <p>
                The objective is to help students and researchers understand
                what they are doing and why the results matter, rather than
                simply presenting unexplained software output.
              </p>

              <Link href="/services" className="text-link">
                Explore our technical academic services →
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(classificationSchema),
        }}
      />
    </>
  )
}