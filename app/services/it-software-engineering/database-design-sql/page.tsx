import {
    ArrowRight,
    CheckCircle2,
    Database,
    GitBranch,
    Layers3,
    Server,
    ShieldCheck,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Footer, PageHero } from '@/components/site'

export const metadata: Metadata = {
  title:
    'Database Design & SQL Project Consultancy | ProjectAssignments.com',
  description:
    'Expert database design and SQL project guidance covering ER modelling, normalization, relational databases, PostgreSQL, MySQL, queries, transactions, indexing, optimization, database security, and application integration.',
  keywords: [
    'database design project consultancy',
    'SQL project guidance',
    'database assignment help',
    'database design assignment',
    'SQL assignment support',
    'DBMS project guidance',
    'database management system project',
    'ER diagram assignment',
    'database normalization help',
    'PostgreSQL project support',
    'MySQL project support',
    'SQL query help',
    'database architecture guidance',
    'relational database design',
    'database project consultancy',
    'database capstone project',
    'SQL optimization',
    'database indexing',
    'database transactions',
    'database security',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/services/it-software-engineering/database-design-sql',
  },
  openGraph: {
    title:
      'Database Design & SQL Project Consultancy | ProjectAssignments.com',
    description:
      'Technical guidance for database design, SQL development, relational modelling, normalization, PostgreSQL, MySQL, transactions, indexing, optimization, and database security.',
    url:
      'https://projectassignments.com/services/it-software-engineering/database-design-sql',
    siteName: 'ProjectAssignments',
    type: 'website',
  },
}

const databaseTopics = [
  'Relational database design',
  'Entity Relationship Diagrams (ERD)',
  'Conceptual, logical, and physical data models',
  'Database normalization',
  'Functional dependencies',
  'Primary and foreign keys',
  'Candidate and composite keys',
  'Referential integrity',
  'SQL query development',
  'DDL, DML, DQL, DCL, and TCL',
  'Joins and subqueries',
  'Views and stored procedures',
  'Functions and triggers',
  'Transactions and concurrency',
  'Indexes and query optimization',
  'Database security and access control',
  'PostgreSQL, MySQL, SQL Server, and Oracle concepts',
]

const sqlTopics = [
  {
    title: 'Data Definition Language',
    items: [
      'CREATE DATABASE and CREATE TABLE statements',
      'Table structures and column definitions',
      'Primary and foreign key constraints',
      'UNIQUE, NOT NULL, CHECK, and DEFAULT constraints',
      'ALTER and DROP operations',
    ],
  },
  {
    title: 'Data Manipulation & Querying',
    items: [
      'SELECT, INSERT, UPDATE, and DELETE',
      'Filtering and sorting records',
      'Aggregate functions and GROUP BY',
      'HAVING clauses',
      'Subqueries and correlated queries',
    ],
  },
  {
    title: 'Joins & Relational Queries',
    items: [
      'INNER JOIN',
      'LEFT and RIGHT JOIN',
      'FULL OUTER JOIN concepts',
      'Self joins',
      'Many-to-many relationship queries',
      'Multi-table analytical queries',
    ],
  },
  {
    title: 'Advanced SQL',
    items: [
      'Common Table Expressions (CTEs)',
      'Window functions',
      'CASE expressions',
      'Views',
      'Stored procedures and functions',
      'Triggers',
      'Transactions and error handling',
    ],
  },
]

const workflow = [
  {
    number: '01',
    title: 'Understand the data requirements',
    description:
      'Identify the entities, attributes, relationships, business rules, functional requirements, reporting requirements, and expected database operations.',
  },
  {
    number: '02',
    title: 'Design the data model',
    description:
      'Translate requirements into conceptual and logical models using entities, relationships, keys, constraints, cardinality, and appropriate normalization.',
  },
  {
    number: '03',
    title: 'Implement the database',
    description:
      'Convert the logical design into tables, constraints, indexes, views, procedures, and other database objects using the selected relational database platform.',
  },
  {
    number: '04',
    title: 'Develop and test SQL',
    description:
      'Create queries for inserting, retrieving, updating, aggregating, and analysing data while validating correctness against expected results.',
  },
  {
    number: '05',
    title: 'Optimize and secure',
    description:
      'Review query performance, indexing strategy, transactions, permissions, input handling, and other factors affecting reliability and security.',
  },
  {
    number: '06',
    title: 'Document and evaluate',
    description:
      'Connect the database implementation to ER diagrams, schema documentation, SQL scripts, test evidence, design decisions, and project requirements.',
  },
]

const projectScenarios = [
  {
    title: 'University Management Database',
    description:
      'Designing a relational database for students, courses, departments, instructors, enrolments, examinations, grades, and academic records.',
  },
  {
    title: 'E-Commerce Database',
    description:
      'Modelling customers, products, categories, orders, order items, payments, inventory, shipments, and transactional relationships.',
  },
  {
    title: 'Hospital Management System',
    description:
      'Designing data structures for patients, physicians, appointments, treatments, prescriptions, billing, departments, and medical records.',
  },
  {
    title: 'Library Management System',
    description:
      'Building relationships between books, authors, publishers, members, copies, loans, reservations, and overdue records.',
  },
  {
    title: 'Banking & Financial Systems',
    description:
      'Working with customers, accounts, transactions, branches, beneficiaries, transfers, and transaction integrity requirements.',
  },
  {
    title: 'Business Intelligence Database',
    description:
      'Developing analytical schemas, aggregation queries, reporting structures, dimensional models, and data extraction logic.',
  },
]

const faqs = [
  {
    question: 'What database and SQL topics do you support?',
    answer:
      'We support relational database design, ER modelling, normalization, SQL queries, keys and constraints, joins, subqueries, views, stored procedures, functions, triggers, transactions, indexing, optimization, database security, and application-database integration.',
  },
  {
    question: 'Can you help with an ER diagram and database schema?',
    answer:
      'Yes. Guidance can cover identifying entities and attributes, defining relationships and cardinality, selecting keys, resolving many-to-many relationships, normalizing the design, and converting the resulting model into a relational schema.',
  },
  {
    question: 'Can you help with SQL queries?',
    answer:
      'Yes. Support can include basic and advanced SELECT queries, joins, aggregation, subqueries, CTEs, window functions, INSERT, UPDATE, DELETE, views, stored procedures, functions, and transaction-oriented SQL.',
  },
  {
    question: 'Do you support PostgreSQL and MySQL?',
    answer:
      'Yes. We provide guidance across common relational database platforms including PostgreSQL, MySQL, Microsoft SQL Server, and Oracle, while accounting for platform-specific syntax and capabilities where relevant.',
  },
  {
    question: 'Can you help with database normalization?',
    answer:
      'Yes. We can explain functional dependencies and normalization from first principles and work through First, Second, Third, and Boyce-Codd Normal Forms where they are relevant to the project.',
  },
  {
    question: 'Can you help optimize a slow SQL query?',
    answer:
      'Yes. Query optimization guidance can include examining execution plans, join strategies, filtering, indexing, unnecessary data retrieval, aggregation, subqueries, and other factors affecting database performance.',
  },
  {
    question: 'Can you help with database security?',
    answer:
      'Yes. Guidance can cover database permissions, least privilege, authentication, parameterized queries, SQL injection prevention, sensitive-data handling, encryption concepts, auditing, and secure application-database integration.',
  },
  {
    question: 'Can you help with a database capstone project?',
    answer:
      'Yes. Technical guidance can span requirements analysis, ER modelling, schema design, normalization, SQL implementation, application integration, testing, optimization, documentation, and project evaluation.',
  },
  {
    question: 'Do you guarantee a particular academic grade?',
    answer:
      'No. We provide technical guidance and educational support, but final grades and academic outcomes are determined by the relevant institution and assessment criteria.',
  },
]

const databaseSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://projectassignments.com/services/it-software-engineering/database-design-sql#service',
      name: 'Database Design & SQL Project Consultancy',
      description:
        'Technical guidance for database design, SQL development, relational modelling, normalization, PostgreSQL, MySQL, transactions, indexing, optimization, database security, and application integration.',
      provider: {
        '@type': 'Organization',
        name: 'ProjectAssignments',
        url: 'https://projectassignments.com',
      },
      areaServed: 'Worldwide',
      serviceType: 'Database design and SQL technical consultancy',
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/services/it-software-engineering/database-design-sql#breadcrumb',
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
          name: 'IT & Software Engineering',
          item:
            'https://projectassignments.com/services/it-software-engineering',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Database Design & SQL',
          item:
            'https://projectassignments.com/services/it-software-engineering/database-design-sql',
        },
      ],
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

export default function DatabaseDesignSQLPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="DATABASES • SQL • DATA ENGINEERING"
          title="Database Design & SQL Projects, Data Modelling & Technical Guidance"
          body="Expert technical guidance for database architecture, relational modelling, SQL development, normalization, PostgreSQL, MySQL, transactions, indexing, optimization, database security, and application integration."
        />

        {/* Introduction */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">DATABASE DESIGN & SQL</p>

              <h2>
                Build databases that make sense before writing queries against
                them.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Database projects are often presented as SQL exercises, but
                strong database engineering begins much earlier. Before a
                single query is written, the underlying data requirements,
                entities, relationships, business rules, constraints, and
                expected operations need to be understood.
              </p>

              <p style={{ marginTop: '18px' }}>
                A well-designed relational database should represent the
                underlying problem accurately while maintaining data
                integrity, avoiding unnecessary duplication, supporting
                efficient queries, and remaining understandable as the system
                grows.
              </p>

              <p style={{ marginTop: '18px' }}>
                Our database and SQL consultancy helps students, researchers,
                and professionals understand these decisions and apply them to
                coursework, laboratory exercises, capstone projects, research
                prototypes, and software systems.
              </p>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              <Image
                src="/images/database-design-sql.png"
                alt="Database design and SQL workflow showing data modelling, relational schema design, SQL development, testing, optimization, and application integration"
                width={1600}
                height={900}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Why Database Projects Are Difficult */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">WHY DATABASE PROJECTS ARE CHALLENGING</p>

              <h2>
                Database work combines logical modelling, mathematics,
                programming, and system design.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Database assignments can appear straightforward when the task
                is reduced to writing a few SQL statements. Larger projects,
                however, require several layers of reasoning to work together.
              </p>

              <ul style={{ marginTop: '24px' }}>
                <li>
                  <strong>Requirements must become data structures.</strong>{' '}
                  Real-world requirements have to be translated into entities,
                  attributes, relationships, constraints, and database rules.
                </li>

                <li>
                  <strong>Relationships must be represented correctly.</strong>{' '}
                  One-to-one, one-to-many, and many-to-many relationships
                  require different relational modelling strategies.
                </li>

                <li>
                  <strong>Redundancy can create data anomalies.</strong>{' '}
                  Poorly structured tables can produce insertion, update, and
                  deletion anomalies that become increasingly difficult to
                  manage as the database grows.
                </li>

                <li>
                  <strong>SQL becomes increasingly complex.</strong> Practical
                  projects frequently require joins, nested queries,
                  aggregation, CTEs, window functions, transactions, and
                  database-specific features.
                </li>

                <li>
                  <strong>Performance depends on design.</strong> Indexes,
                  query structure, data volume, execution plans, and
                  transaction behaviour can significantly influence application
                  performance.
                </li>

                <li>
                  <strong>Security is part of database engineering.</strong>{' '}
                  Authentication, authorization, least privilege, parameterized
                  queries, sensitive data handling, and auditing all matter when
                  databases are connected to real applications.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Database Design */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '820px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">DATABASE ARCHITECTURE</p>

              <h2>
                From business requirements to a well-structured relational
                database.
              </h2>

              <p>
                Database design is the process of translating a real-world
                problem into a structured data model. A good design provides a
                clear connection between what the application needs to do and
                how information is stored.
              </p>
            </div>

            <div className="two-column">
              <div>
                <h3>Conceptual Data Modelling</h3>

                <p style={{ marginTop: '14px' }}>
                  Conceptual modelling focuses on the problem domain rather
                  than implementation details. The objective is to identify
                  important entities, relationships, and business concepts.
                </p>

                <ul style={{ marginTop: '20px' }}>
                  <li>Entity identification</li>
                  <li>Attribute identification</li>
                  <li>Relationship definition</li>
                  <li>Cardinality and participation</li>
                  <li>Business rules</li>
                  <li>Domain constraints</li>
                </ul>
              </div>

              <div>
                <h3>Logical & Physical Design</h3>

                <p style={{ marginTop: '14px' }}>
                  Logical design converts the conceptual model into a
                  relational structure. Physical design then considers the
                  characteristics of the selected DBMS and the expected
                  workload.
                </p>

                <ul style={{ marginTop: '20px' }}>
                  <li>Tables and relationships</li>
                  <li>Primary and foreign keys</li>
                  <li>Data types</li>
                  <li>Constraints</li>
                  <li>Indexes</li>
                  <li>Storage and performance considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ER Modelling */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">ER MODELLING</p>

              <h2>
                Entity Relationship Diagrams provide the bridge between
                requirements and implementation.
              </h2>

              <p style={{ marginTop: '18px' }}>
                An Entity Relationship Diagram (ERD) provides a visual
                representation of the entities and relationships that make up
                a database system. For academic projects, the ERD is often
                one of the most important pieces of evidence demonstrating
                that the database design has been understood before
                implementation.
              </p>

              <p style={{ marginTop: '18px' }}>
                We provide guidance on identifying entities, attributes,
                primary keys, foreign keys, relationship types, cardinality,
                optionality, associative entities, and other modelling
                decisions.
              </p>

              <h3 style={{ marginTop: '30px' }}>
                Common ER modelling considerations
              </h3>

              <ul style={{ marginTop: '18px' }}>
                <li>
                  Distinguishing entities from attributes and derived values.
                </li>
                <li>
                  Determining whether a relationship is one-to-one,
                  one-to-many, or many-to-many.
                </li>
                <li>
                  Resolving many-to-many relationships through associative
                  entities.
                </li>
                <li>
                  Selecting appropriate primary and candidate keys.
                </li>
                <li>
                  Representing optional and mandatory relationships.
                </li>
                <li>
                  Translating business rules into database constraints.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Normalization */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">DATABASE NORMALIZATION</p>

              <h2>
                Reduce redundancy while preserving the relationships the
                application actually needs.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Normalization provides a systematic approach to organizing
                relational data. Rather than storing repeated information
                throughout large tables, related information is separated into
                structures that better represent the underlying dependencies.
              </p>

              <p style={{ marginTop: '18px' }}>
                Database assignments commonly require students to demonstrate
                how an unnormalized structure can be transformed through
                successive normal forms.
              </p>

              <h3 style={{ marginTop: '30px' }}>Topics include</h3>

              <ul style={{ marginTop: '18px' }}>
                <li>
                  <strong>First Normal Form (1NF):</strong> atomic values and
                  elimination of repeating groups.
                </li>
                <li>
                  <strong>Second Normal Form (2NF):</strong> removal of
                  partial dependencies from composite-key relations.
                </li>
                <li>
                  <strong>Third Normal Form (3NF):</strong> reducing
                  transitive dependencies.
                </li>
                <li>
                  <strong>Boyce-Codd Normal Form (BCNF):</strong> stronger
                  treatment of functional dependencies where appropriate.
                </li>
                <li>
                  Functional dependencies and candidate keys.
                </li>
                <li>
                  Identifying insertion, update, and deletion anomalies.
                </li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                Normalization is not simply a checklist. Database design also
                requires understanding the application's access patterns and
                deciding when controlled denormalization may be appropriate
                for performance or reporting requirements.
              </p>
            </div>
          </div>
        </section>

        {/* SQL */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '800px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">SQL DEVELOPMENT</p>

              <h2>
                From simple queries to advanced relational data processing.
              </h2>

              <p>
                SQL is more than SELECT statements. Database projects often
                require students to understand the different categories of
                SQL operations and how they interact with the underlying
                relational model.
              </p>
            </div>

            <div className="two-column">
              <div>
                {sqlTopics.slice(0, 2).map((topic) => (
                  <div key={topic.title} style={{ marginBottom: '36px' }}>
                    <h3>{topic.title}</h3>

                    <ul style={{ marginTop: '16px' }}>
                      {topic.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                {sqlTopics.slice(2).map((topic) => (
                  <div key={topic.title} style={{ marginBottom: '36px' }}>
                    <h3>{topic.title}</h3>

                    <ul style={{ marginTop: '16px' }}>
                      {topic.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transactions */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">TRANSACTIONS & DATA INTEGRITY</p>

              <h2>
                Reliable databases need more than correctly structured tables.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Applications frequently perform multiple database operations as
                part of a single business action. A banking transfer, for
                example, may require one account to be debited while another is
                credited. If one operation succeeds and the other fails, the
                resulting state can be incorrect.
              </p>

              <p style={{ marginTop: '18px' }}>
                Transaction management provides mechanisms for grouping related
                operations and maintaining consistent database state.
              </p>

              <ul style={{ marginTop: '22px' }}>
                <li>
                  Understanding the ACID properties: Atomicity, Consistency,
                  Isolation, and Durability.
                </li>
                <li>COMMIT and ROLLBACK behaviour.</li>
                <li>Transaction boundaries in application code.</li>
                <li>Concurrency and simultaneous database operations.</li>
                <li>Isolation levels and consistency trade-offs.</li>
                <li>Deadlocks and transaction-management considerations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Indexing & Performance */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">DATABASE PERFORMANCE</p>

              <h2>
                Query performance begins with understanding how the database
                executes the request.
              </h2>

              <p style={{ marginTop: '18px' }}>
                A query that performs well on a small development dataset may
                become inefficient when millions of records are introduced.
                Database performance therefore requires understanding data
                volume, access patterns, indexes, joins, filtering, sorting,
                aggregation, and query execution strategies.
              </p>

              <h3 style={{ marginTop: '30px' }}>
                Database optimization topics
              </h3>

              <ul style={{ marginTop: '18px' }}>
                <li>Choosing appropriate indexes.</li>
                <li>Understanding clustered and non-clustered indexing concepts.</li>
                <li>Composite and covering indexes.</li>
                <li>Reading execution and query plans.</li>
                <li>Reducing unnecessary table scans.</li>
                <li>Optimizing joins and filtering operations.</li>
                <li>Avoiding unnecessary data retrieval.</li>
                <li>Understanding query selectivity.</li>
                <li>Balancing write performance against read performance.</li>
                <li>Considering database workload and expected growth.</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                Performance optimization should not begin by adding indexes
                everywhere. Each index introduces storage and maintenance costs,
                particularly for write-heavy systems. The appropriate strategy
                depends on how the database is actually used.
              </p>
            </div>
          </div>
        </section>

        {/* Database Security */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">DATABASE SECURITY</p>

              <h2>
                Data integrity and security should be considered during
                database design, not added at the end.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Databases frequently contain some of an application's most
                sensitive information. Security therefore needs to be
                considered across the database, application, authentication,
                authorization, and data-access layers.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '28px',
                  marginTop: '30px',
                }}
              >
                <div>
                  <ShieldCheck size={24} aria-hidden="true" />

                  <h3 style={{ marginTop: '14px' }}>
                    Access Control
                  </h3>

                  <p style={{ marginTop: '10px' }}>
                    Understand users, roles, permissions, least privilege,
                    authentication, authorization, and controlled database
                    access.
                  </p>
                </div>

                <div>
                  <Database size={24} aria-hidden="true" />

                  <h3 style={{ marginTop: '14px' }}>
                    Data Protection
                  </h3>

                  <p style={{ marginTop: '10px' }}>
                    Consider sensitive data classification, secure storage,
                    encryption concepts, backups, and appropriate retention.
                  </p>
                </div>

                <div>
                  <Server size={24} aria-hidden="true" />

                  <h3 style={{ marginTop: '14px' }}>
                    Secure Application Integration
                  </h3>

                  <p style={{ marginTop: '10px' }}>
                    Understand parameterized queries, prepared statements,
                    validation, and secure database access from application
                    code.
                  </p>
                </div>
              </div>

              <p style={{ marginTop: '30px' }}>
                SQL injection is a particularly important example of why
                database security cannot be separated from application
                development. Parameterized queries and prepared statements
                help ensure that user-controlled values remain data rather
                than being interpreted as SQL instructions.
              </p>
            </div>
          </div>
        </section>

        {/* DBMS */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '820px',
                marginBottom: '38px',
              }}
            >
              <p className="eyebrow">DATABASE MANAGEMENT SYSTEMS</p>

              <h2>
                Guidance across the relational database technologies commonly
                used in academic and professional projects.
              </h2>

              <p>
                SQL fundamentals transfer across relational database systems,
                although individual platforms provide different syntax,
                extensions, tooling, and implementation characteristics.
              </p>
            </div>

            <div className="two-column">
              <div>
                <h3>PostgreSQL</h3>

                <p style={{ marginTop: '12px' }}>
                  PostgreSQL is widely used for application development,
                  research, data-intensive systems, and advanced relational
                  database projects. Guidance can include schema design,
                  constraints, indexes, views, functions, transactions, and
                  PostgreSQL-specific SQL features.
                </p>

                <h3 style={{ marginTop: '30px' }}>MySQL</h3>

                <p style={{ marginTop: '12px' }}>
                  MySQL is commonly encountered in web application and
                  educational environments. Support can include relational
                  modelling, SQL development, joins, constraints, indexing,
                  transactions, and application integration.
                </p>
              </div>

              <div>
                <h3>Microsoft SQL Server</h3>

                <p style={{ marginTop: '12px' }}>
                  SQL Server projects may involve T-SQL, relational design,
                  stored procedures, indexing, transactions, security,
                  reporting, and database administration concepts.
                </p>

                <h3 style={{ marginTop: '30px' }}>Oracle Database</h3>

                <p style={{ marginTop: '12px' }}>
                  Oracle-based coursework can involve SQL, PL/SQL, schemas,
                  constraints, transactions, stored procedures, triggers,
                  indexing, and enterprise database concepts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Database + Application Integration */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">APPLICATION INTEGRATION</p>

              <h2>
                A database rarely exists alone—it is part of a larger software
                system.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Modern applications typically communicate with databases
                through an application or service layer. Understanding this
                boundary is important for both database assignments and
                software engineering projects.
              </p>

              <ul style={{ marginTop: '22px' }}>
                <li>
                  Connecting Python applications to PostgreSQL or MySQL.
                </li>
                <li>
                  Working with Java and Spring-based database applications.
                </li>
                <li>
                  Integrating Node.js applications with relational databases.
                </li>
                <li>
                  Understanding ORM concepts such as Hibernate, Entity
                  Framework, and SQLAlchemy.
                </li>
                <li>
                  Designing APIs that expose database-backed functionality.
                </li>
                <li>
                  Managing transactions across application and database
                  boundaries.
                </li>
                <li>
                  Separating database access logic from application business
                  logic.
                </li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                This systems perspective becomes particularly important for
                capstone projects, where the database is only one component of
                a larger architecture involving front-end applications,
                backend services, authentication, APIs, and deployment
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Project Scenarios */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '800px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">DATABASE PROJECT SCENARIOS</p>

              <h2>
                Common database and SQL projects we provide guidance with.
              </h2>

              <p>
                Database assignments vary considerably by academic level and
                subject. The underlying engineering principles, however, can
                be applied across many different domains.
              </p>
            </div>

            <div className="two-column">
              {projectScenarios.map((scenario) => (
                <div key={scenario.title} style={{ marginBottom: '30px' }}>
                  <h3>{scenario.title}</h3>

                  <p style={{ marginTop: '10px' }}>
                    {scenario.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '800px',
                marginBottom: '42px',
              }}
            >
              <p className="eyebrow">DATABASE PROJECT WORKFLOW</p>

              <h2>
                A structured process from requirements analysis to database
                validation.
              </h2>

              <p>
                A disciplined database workflow helps prevent problems from
                being discovered only after the SQL implementation has already
                been completed.
              </p>
            </div>

            <div className="approach-grid">
              {workflow.map((step) => (
                <article className="approach-card" key={step.number}>
                  <span aria-hidden="true">{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What We Can Help With */}
        <section className="section">
          <div className="container">
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <p className="eyebrow">DATABASE & SQL PROJECT SUPPORT</p>

              <h2>
                Technical guidance across the complete database development
                lifecycle.
              </h2>

              <p style={{ marginTop: '18px' }}>
                Depending on the project, support can focus on a single
                database concept or span the complete path from requirements
                to implementation and evaluation.
              </p>

              <ul style={{ marginTop: '24px' }}>
                {databaseTopics.map((topic) => (
                  <li key={topic}>
                    <CheckCircle2
                      size={17}
                      aria-hidden="true"
                      style={{
                        marginRight: '9px',
                        verticalAlign: 'middle',
                      }}
                    />
                    {topic}
                  </li>
                ))}
              </ul>

              <p style={{ marginTop: '22px' }}>
                The objective is not simply to produce SQL that happens to
                execute. Strong database work should be explainable: the
                schema should have a reason, relationships should reflect the
                requirements, constraints should protect data integrity, and
                queries should solve clearly defined information needs.
              </p>
            </div>
          </div>
        </section>

        {/* Related IT Areas */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '800px',
                marginBottom: '38px',
              }}
            >
              <p className="eyebrow">RELATED IT ENGINEERING AREAS</p>

              <h2>
                Database engineering connects naturally with the rest of the
                software stack.
              </h2>

              <p>
                Database projects frequently overlap with software engineering,
                APIs, cloud architecture, DevOps, and system architecture.
                Understanding these relationships can make larger projects
                considerably easier to design and explain.
              </p>
            </div>

            <div className="two-column">
              <div>
                <GitBranch size={23} aria-hidden="true" />

                <h3 style={{ marginTop: '14px' }}>
                  Software Engineering
                </h3>

                <p style={{ marginTop: '10px' }}>
                  Explore application architecture, programming, testing, and
                  maintainable software design.
                </p>

                <Link
                  href="/services/it-software-engineering/software-engineering"
                  className="text-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    marginTop: '14px',
                  }}
                >
                  Software Engineering
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              <div>
                <Layers3 size={23} aria-hidden="true" />

                <h3 style={{ marginTop: '14px' }}>
                  System Architecture & Design
                </h3>

                <p style={{ marginTop: '10px' }}>
                  Understand how databases fit into larger application and
                  system architectures.
                </p>

                <Link
                  href="/services/it-software-engineering/system-architecture-design"
                  className="text-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    marginTop: '14px',
                  }}
                >
                  System Architecture
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="faq-layout">
              <div>
                <p className="eyebrow">DATABASE & SQL FAQ</p>

                <h2>
                  Questions about database design and SQL project support.
                </h2>

                <p>
                  A few common questions about database modelling, SQL,
                  relational systems, and technical project guidance.
                </p>
              </div>

              <div className="faq-list">
                {faqs.map((faq) => (
                  <details className="faq-item" key={faq.question}>
                    <summary
                      style={{
                        cursor: 'pointer',
                        padding: '22px 0',
                        fontWeight: 700,
                        color: 'var(--foreground)',
                      }}
                    >
                      {faq.question}
                    </summary>

                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section-tint">
          <div className="container">
            <div
              style={{
                maxWidth: '920px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow">HAVE A DATABASE PROJECT?</p>

              <h2>
                Let's understand the data problem before designing the
                database.
              </h2>

              <p
                style={{
                  maxWidth: '700px',
                  margin: '18px auto 28px',
                }}
              >
                Share your database requirements, ER diagram, SQL assignment,
                schema, query problem, project brief, or research objective.
                We can help you understand the appropriate modelling,
                implementation, and evaluation approach.
              </p>

              <a
                href="https://wa.me/918595089080?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20Database%20Design%20or%20SQL%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Discuss Your Database Project
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(databaseSchema),
        }}
      />
    </>
  )
}