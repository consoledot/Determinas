import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";

export default function Services() {
  return (
    <div>
      <Head>
        <title>Service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header
        style={{
          backgroundImage: "url('/images/service-header.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="header-text-body">
          <div>
            <h1>SERVICES WE OFFER</h1>
            <p>
              Triumph new business milestones as we super-charge your growth
              with our full-cycle software solutions, innovation and
              development.
            </p>
            <button>CONTACT US TODAY</button>
          </div>
        </div>
      </header>
      <section>
        <div
          style={{
            padding: "1rem",
          }}
        >
          <p>
            Get proven software engineering and consulting services. We partner
            with companies like yours to create custom solutions that drive
            business success.
          </p>
          <h2>WHAT WE OFFER</h2>
        </div>
        <WhatWeOffer />
      </section>
      <section className="talent-pool">
        <p>NEED TO PUT TOGETHER A TEAM OF TALENTS FOR YOUR NEXT PROJECT?</p>
        <button>ACCESS OUR TALENT POOL</button>
      </section>
      <Footer />
    </div>
  );
}
