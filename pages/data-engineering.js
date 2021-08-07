import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";
import Industries from "../components/Indutries";
import TalentPool from "../components/Talent Pool";
export default function DataEng() {
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
        <div className="blur-bg"></div>
        <div className="header-text-body">
          <div>
            <span>Home/ services</span>
            <h1>BIG DATA AND ANALYTICS</h1>
          </div>
        </div>
      </header>
      <section className="absolute-section">
        <div>
          <h2>DATA Engineering </h2>
          <p>
            We employ cutting-edge technology platforms to support data-driven
            transformation in this data-driven era. Determinas &apos
            comprehensive data engineering services help your advanced analytics
            thrive by enabling your data strategy - ensuring access to the
            appropriate data at the right time and in the proper format.
          </p>
          <h4>Automation of Data Processes</h4>
          <p>
            Determinas provides data engineering consultation to its clients,
            automating existing processes and creating new pipelines depending
            on business requests. These automated pipelines range from basic
            file transfers to complicated data processing and modelling, and
            they employ various tools and technologies. <br />
            We use process management tools (Airflow) as part of our data
            engineering solutions to activate them correctly. The QC (Quality
            Control) steps are maintained according to the requirements. <br />
            We create parameterized codes for each step in the pipeline to make
            it easier to integrate. <br />
            We use analytical procedures to convert business processes into
            code.
          </p>
        </div>
      </section>
      <WhatWeOffer />
      <TalentPool />
      <Industries />
      <Footer />
    </div>
  );
}
