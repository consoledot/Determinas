import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";
import Industries from "../components/Indutries";
import TalentPool from "../components/Talent Pool";
export default function DataGov() {
  return (
    <div>
      <Head>
        <title>BUSINESS INTELLIGENCE & DATA VISUALISATION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header
        style={{
          backgroundImage: "url('/images/big-data.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="header-text-body">
          <div>
            <h1>BIG DATA AND ANALYTICS</h1>
          </div>
        </div>
      </header>
      <section className="absolute-section">
        <div>
          <h2>DATA GOVERNANCE </h2>
          <p>
            At Determinas, we work with enterprises as part of our data
            governance consulting services and solutions to improve data
            integrity and give actionable insights. We help your organisation:
          </p>
          <div className="flex">
            <li>
              Meet various data management demands with solutions that help you
              better manage assets, share knowledge resources, build and improve
              products and services, and grab new income opportunities.
            </li>
            <li>
              Assess the worth and danger of personal data, ease concerns about
              sensitive data exposed to individuals or systems without legal
              consent, security breaches from malevolent outsiders, and prevent
              the costs of non-compliance while anticipating future rules.
            </li>
          </div>
          <div className="list">
            <p>SYSTEM & BUSINESS ANALYSIS</p>
            <p>DATA OPERATING MODEL DESIGN</p>
            <p>Business Insights & Visualisation</p>
            <p>Metrics Reporting & Dashboarding</p>
            <p>Master Data Management and Planning</p>
          </div>
          <div className="section">
            <h3>SYSTEM AND BUSINESS ANALYSIS</h3>
            <p>
              One of the competencies of Determinas is gathering system
              requirements to develop, implement, or integrate critical systems.
              And every system analyst (we place on the job) goes through
              comprehensive technical and psychological tests, so you can be
              sure youre dealing with the best.
              <br /> We give more than just the best-qualified people; we also
              provide a comprehensive set of best-practice methods, tools, and
              templates to assist our systems analysts in producing results more
              quickly.
            </p>
            <h4>Adoption by Users</h4>
            <li>Analysis of Business & Systems</li>
            <p>
              At Determinas, we design, implement and integrate essential
              systems for your firm. We also gather system requirements.
            </p>
            <li>Redesigning Business Processes</li>
            <p>
              We map business processes to roles and end-users to guarantee that
              people and processes are compatible.
            </p>
            <li>Modification Management</li>
            <p>
              We prepare people and systems to acheive a smooth transformative
              transition into the desired future state.
            </p>
            <li>Training for End-Users</li>
            <p>
              We ensure that technology end-users have the necessary knowledge,
              skills, and behaviours.
            </p>
            <li>Systems Evaluation</li>
            <p>
              We examine detailed capturing of your requirements and how well
              the your application was developed.
            </p>
          </div>
          <div>
            <h3>Data OperatiNG Model Design</h3>
            <p>
              Determinas assists with data transformation and prevents getting
              lost or behind in traffic, allowing for the dismantling of a
              companys organizational and technical silos. In addition, we
              expand on the business model by examining data handling across the
              enterprise, from data collection to cleansing and augmentation to
              sharing and use.
            </p>
          </div>
          <div>
            <h3>Business Insights & Visualisation </h3>
            <p>
              Consumer insights can aid businesses in sparking innovation,
              identifying the most promising (though not always intuitive)
              sources of development, and developing or maintaining successful
              goods and brands. Determinas qualitative and quantitative research
              approaches, tools, and techniques assist our clients in
              determining why their customers/target audience behave the way
              they do at every stage of the purchase decision journey,
              comprehending their customers experiences, and delving deeply into
              their most important drivers of customer loyalty. We enable our
              clients to create unique and differentiated marketing strategies
              by leveraging these insights, including successful value
              propositions, segmentation, branding, product design, pricing, and
              customer service.
            </p>
          </div>
          <div>
            <h3>Metrics Reporting & Dashboarding </h3>
            <p>
              Business organizations waste vast sums of money on unstructured
              data and BI initiatives, not to mention the hidden value within
              their data. At Determinas, our reports give the Key Performance
              Indicators (KPIs) that executives and managers require to run
              their businesses.
            </p>
          </div>
          <div>
            <h3>Master Data Management and Planning </h3>
            <p>
              Our master data management and planning services offer tools and
              methods for managing data linked to a businesss demands, such as
              sales, marketing, and operational strategies. We ensure the
              integrity of a companys data repository so that all services have
              constant access to accurate, relevant, consistent, and up-to-date
              data from a single source.
            </p>
          </div>
        </div>
      </section>
      <WhatWeOffer />
      <TalentPool />
      <Industries />
      <Footer />
    </div>
  );
}