import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";
import TalentPool from "../components/Talent Pool";
import Industries from "../components/Indutries";
import image1 from "../public/images/market-intelligence.png";
import image2 from "../public/images/business-strategy.png";

export default function MarketResearch() {
  return (
    <div>
      <Head>
        <title>GROWTH MARKETING</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header
        style={{
          backgroundImage: "url('/images/growth-marketing.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="blur-bg"></div>
        <div className="header-text-body">
          <div>
            <span>Home/ services</span>
            <h1>GROWTH MARKETING</h1>
          </div>
        </div>
      </header>
      <section className="absolute-section">
        <div>
          <h2>MARKET RESEARCH</h2>
          <p>
            Determinas analyse data to understand the target audience better and
            leverage it to improve product design and user experience. We also
            build a marketing strategy that generates high-quality leads and
            increases gross margins and market share.
          </p>
          <div className="list">
            <p>MARKET INTELLIGENCE</p>
            <p>Business Strategy</p>
          </div>
          <div className="flex">
            <Image src={image1} alt="" />
            <div className="text">
              <h3>Market Intelligence</h3>
              <p>
                Our market intelligent method collects, extracts data and then
                transforms it into smart business decisions for our clients to:
              </p>
              <ul>
                <li>Choose Benchmarking Competitors.</li>
                <li>
                  Measure Business Goals with the Key Performance Indicators
                  (KPIs)
                </li>
                <li>
                  Design an Audience and Competitive Analysis for the Business
                </li>
                <li>Share Marketing Insights Throughout the Organization</li>
                <li>
                  Convert Data into business decisions and recommendations
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <div className="text">
              <h3>Business Strategy</h3>
              <p>
                Determinas Business Strategies are designed to assist in
                developing a long-term strategy for the companys targeted reach,
                goals, and objectives. Analysing data from internal customer
                systems (e.g., CRM, billing) and external sources (e.g.,
                demographic) to provide actionable customer insights for more
                effective targeting and richer interaction through Business
                Intelligence tools-based customer segmentation.
              </p>
            </div>
            <Image src={image2} alt="" />
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
