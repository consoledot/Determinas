import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";
import Industries from "../components/Indutries";

export default function BSS() {
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
          backgroundImage: "url('/images/growth-marketing.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay"></div>
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
          <h2>BUSINESS STRATEGY SUPPORT</h2>
          <p>
            At Determinas, we assist in the formulation of the best strategy or
            plan of action that clients can use to fulfil their vision and set
            objectives. We offer a guided decision-making processes to improve
            your companys financial stability in a competitive market.
          </p>
          <div className="list">
            <p>Go To Market Strategy</p>
            <p>Business Expansion Strategy</p>
            <p>Sales And Marketing Strategy</p>
            <p>Digitization Strategy</p>
          </div>
        </div>
      </section>
      <section className="section-list">
        <div>
          <h3>Go To Market Strategy</h3>
          <p>
            Our go-to-market strategy helps companies develop an action plan
            that outlines how they will contact their target customers and gain
            a competitive edge, enabling them to supply a product or service to
            a customer while accounting for considerations like pricing and
            distribution. Determinas is increasing consumer awareness of a
            specific product or service. Creating leads and turning leads into
            customers, entering new markets, boosting client interaction, and
            surpassing competition to increase market share.
          </p>
        </div>
        <div>
          <h3>Digitization Strategy</h3>
          <p>
            We build a clear digitization plan to help the companys long-term
            goals evolve with the rapid digital transitions in industries and
            marketplaces. All businesses must have a plan in place for how they
            will adapt to an increasingly digital world. As a result, we here to
            assist you in developing a digitalization plan that will help you
            keep your business afloat.
          </p>
        </div>
        <div>
          <h3>Sales And Marketing Strategy</h3>
          <p>
            We are reaching the target audience and converting them to
            customers, one of the sales and marketing goals. Our strategies help
            develop a plan that defines how you will sell to your target
            demographic, convert them into buyers, and locate and engage with
            prospective consumers to promote your core message and increase
            interest in the brand.
          </p>
        </div>
        <div>
          <h3>Business Expansion Strategy</h3>
          <p>
            Our business expansion strategy helps organisations understand basic
            techniques for developing the business through Product Line
            Expansion, Diversifying into New Markets, Increased Channel
            Distribution, Merging or Acquiring an Existing Business, and Over
            Expansion Warning.
          </p>
        </div>
      </section>

      <WhatWeOffer />

      <section className="talent-pool">
        <p>NEED TO PUT TOGETHER A TEAM OF TALENTS FOR YOUR NEXT PROJECT?</p>
        <button>ACCESS OUR TALENT POOL</button>
      </section>
      <Industries />
      <Footer />
    </div>
  );
}
