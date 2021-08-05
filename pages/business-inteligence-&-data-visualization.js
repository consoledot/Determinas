import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";
import Industries from "../components/Indutries";
import TalentPool from "../components/Talent Pool";
export default function BSI() {
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
            <h1>BIG DATA AND ANALYTICS</h1>
          </div>
        </div>
      </header>
      <section className="absolute-section">
        <div>
          <h2>BUSINESS INTELLIGENCE & DATA VISUALISATION</h2>
          <p>
            Data discovery, reporting, business intelligence, data
            visualization, and data aggregation are essential components of an
            organizations ability to consume data and make informed decisions.
            We offer business intelligence and data visualization solutions at
            Determinas to help you quickly combine data from many sources and
            establish essential KPIs (Key Performance Indicators) for speedier
            decision-making.
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
