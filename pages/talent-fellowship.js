import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";
import Industries from "../components/Indutries";
export default function BSI() {
  return (
    <div>
      <Head>
        <title>TALENT MOBILITY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header
        style={{
          backgroundImage: "url('/images/talent-header.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="header-text-body">
          <div>
            <h1>TALENT MOBILITY</h1>
            <p>
              Increase engagement and retention while building a solid
              leadership pipeline.
            </p>
          </div>
        </div>
      </header>
      <section className="absolute-section">
        <div>
          <h2>TALENT FELLOWSHIP</h2>
          <p>
            We select the best-fit crude/junior tech talent and put them through
            our Best-in-class Tech fellowship program that transforms them into
            industry-ready top Talents, equipped for building the
            next-revolution systems and solutions. We connect them with chances
            to make a difference in the world.
          </p>
        </div>
      </section>
      <section className="talent-pool">
        <p>NEED TO PUT TOGETHER A TEAM OF TALENTS FOR YOUR NEXT PROJECT?</p>
        <button>ACCESS OUR TALENT POOL</button>
      </section>
      <WhatWeOffer />

      <Industries />
      <Footer />
    </div>
  );
}