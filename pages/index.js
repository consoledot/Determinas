import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Industries from "../components/Indutries";
import TalentPool from "../components/Talent Pool";
import styles from "../styles/Home.module.css";
import arrow from "../public/images/arrow.svg";
import explore1 from "../public/images/explore-1.png";
import explore2 from "../public/images/explore-2.png";
import explore3 from "../public/images/explore-3.png";
import feature1 from "../public/images/feature-1.png";
import feature2 from "../public/images/feature-2.png";
import feature3 from "../public/images/feature-3.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Determinas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header>
        {/* <div className="blur-bg"></div> */}
        <div className="header-text-body index">
          <div>
            <h1>DIGITAL TRANSFORMATION</h1>
            <p>
              Harness the power of new, fast, and ever-evolving digital
              technology to solve your business challenges
            </p>
            <button>
              <Link href="/contact-us">CONTACT US TODAY</Link>
            </button>
          </div>
        </div>
        <video muted loop className="video" autoPlay>
          <source src="video.mp4" type="video/mp4" />
        </video>
      </header>
      <section>
        <div
          style={{
            padding: "4rem 1rem",
            backgroundColor: "white",
          }}
        >
          <h2>DISCOVER</h2>
          <p>
            How Our Bespoke & Contextual Research, Analytics, and Technology
            Solutions Can Empower Your Crucial Business Decisions
          </p>
        </div>

        <div className="discover">
          <div className="item">
            <h4> BIG DATA AND ANALYTICS</h4>
            <ul>
              <li>
                <Link href="/data-governance">Data Governance</Link>
              </li>
              <li>
                <Link href="/data-engineering">Data Engineering</Link>
              </li>
              <li>
                <Link href="/business-inteligence-&-data-visualization">
                  Business Intelligence & Visualisation
                </Link>
              </li>
              <li>
                <Link href="/data-science">Data Science</Link>
              </li>
              <Image src={arrow} alt="" />
            </ul>
          </div>
          <div className="item">
            <h4>
              {" "}
              <Link href="/software-product-innovation">
                SOFTWARE PRODUCT INNOVATION
              </Link>
            </h4>
            <ul>
              <li>End to End Product Engineering</li>
              <li>Product Design</li>
              <li>Product Development</li>
              <li>App Restructuring</li>
              <Image src={arrow} alt="" />
            </ul>
          </div>
          <div className="item">
            <h4>TALENT MOBILITY</h4>
            <ul>
              <li>
                <Link href="/talent-fellowship">Talent Fellowship</Link>
              </li>
              <li>
                <Link href="/talent-as-a-service">Talent As a Service</Link>
              </li>
              <li>Talent Outsourcing</li>
              <Image src={arrow} alt="" />
            </ul>
          </div>
          <div className="item">
            <h4> GROWTH MARKETING</h4>
            <ul>
              <li>
                <Link href="/business-strategy-support">
                  Business Strategy Support
                </Link>
              </li>
              <li>
                <Link href="/market-research">Market Research</Link>
              </li>
              <li>
                <Link href="/market-intelligence-service">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link href="/investment-research-services">
                  Investment Research
                </Link>
              </li>
              <Image src={arrow} alt="" />
            </ul>
          </div>
        </div>
      </section>
      <section className="container-section">
        <div>
          <h2>OUR FOCUS INDUSTRIES</h2>
          <p>
            Our in-depth experience with industries helps us understand the
            market specifics and create software solutions customized to a
            specific niche. Our goal is to help your business exceed customers’
            expectations and to help you take a leading role in your industry.
          </p>
        </div>
        <Industries />
      </section>
      <section className="container-section">
        <div>
          <h2>EXPLORE</h2>
          <p>
            Our rich collection of case studies created by experts at Determinas
          </p>
        </div>
        <div className="explore">
          <div className="item">
            <Image src={explore1} alt="" />
            <div className="text">
              <h5>Lorem Ipsum Dolor Sit Amet</h5>
              <p>Telecommunications</p>
            </div>
          </div>
          <div className="item">
            <Image src={explore2} alt="" />
            <div className="text">
              <h5>Lorem Ipsum Dolor Sit Amet</h5>
              <p>Banking and Finance</p>
            </div>
          </div>
          <div className="item">
            <Image src={explore3} alt="" />
            <div className="text">
              <h5>Lorem Ipsum Dolor Sit Amet</h5>
              <p>Education</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-section">
        <div>
          <h2>FEATURED CONTENT</h2>
        </div>
        <div className="features">
          <div>
            <Image src={feature1} alt="" />
            <div className="text">
              <h5>Model Fitting and Generalization</h5>
              <p>Machine Learning</p>
            </div>
          </div>
          <div>
            <Image src={feature2} alt="" />
            <div className="text">
              <h5>What is Artificial Intelligence?</h5>
              <p>Artificial Intelligence</p>
            </div>
          </div>
          <div>
            <Image src={feature3} alt="" />
            <div className="text">
              <h5>Artificial Intelligence in the Health Care Sector</h5>
              <p>Healthcare</p>
            </div>
          </div>
        </div>
      </section>
      <TalentPool />
      <Footer />
    </div>
  );
}
