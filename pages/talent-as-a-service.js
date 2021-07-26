import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";
import Industries from "../components/Indutries";

export default function TSA() {
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
          <h2>TALENT AS A SERVICE</h2>
          <p>
            We offer a variety of effective Technology Talent models. These
            allow firms to focus on crucial business innovation strategies and
            operations without the risks of tech talent management, reducing
            stress and inefficiencies associated with recruiting and managing
            tech talent.
          </p>
          <div className="list">
            <p>tALENT OUTSOURCING</p>
            <p>REMOTE TALENTS</p>
          </div>
        </div>
      </section>
      <section className="section-list">
        <div className="flex">
          <div>
            <h3>Talent Outsourcing</h3>
            <p>
              We use a quick approach to identifying and acquiring top-tier
              talents. As a result, risks of wrong-hire are reduced, and clients
              may take advantage of the fantastic community that supports their
              abilities through cost-effective recruitment cycles.
            </p>
          </div>
          <div>
            <h3>REMOTE TALENTS</h3>
            <p>
              We supply the highest-quality remote teams with the necessary
              capabilities to complete tasks, delivering value while operating
              under flexible operating models and at flexible pricing.
            </p>
          </div>
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
