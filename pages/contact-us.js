import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function ContactUs() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header
        style={{
          backgroundImage: "url('/images/contact-header.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="header-text-body">
          <h1>LET US PARTNER WITH YOU</h1>
          <p>
            We will work with you to use Data to keep you ahead of your
            competitors by helping you make Data- driven business decisions.
          </p>
          <button>CONTACT US TODAY</button>
        </div>
      </header>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <p>
          Why don’t you get in touch with us today, let us discuss how we can
          help you reach your business goals.
        </p>
      </div>
      <Footer />
    </div>
  );
}
