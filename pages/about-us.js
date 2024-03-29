import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Industries from "../components/Indutries";
import Navigation from "../components/Navigation";
import TalentPool from "../components/Talent Pool";
import image1 from "../public/images/who-we-are.png";
import image2 from "../public/images/how-we-work.png";
import arrow_right from "../public/images/arrow-right-blue.svg";
import ceo from "../public/images/ceo.png";
import coo from "../public/images/coo.png";
import partner from "../public/images/partner.png";
import crystal_lg from "../public/images/crystal-large.svg";
import crystal_sm from "../public/images/crystal-small.svg";

export default function AboutUs() {
  const coreValues = [
    "EXCELLENCE",
    "INNOVATION",
    "EMPATHY",
    "INTEGRITY",
    "COMMUNITY BUILDING",
  ];
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header
        style={{
          backgroundImage: "url('/images/about-header.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay"></div>
        <div className="blur-bg"></div>
        <div className="header-text-body">
          <div>
            <span>Home/</span>
            <h1>ABOUT US</h1>
            <p>
              At Determinas, we use advanced technologies in Artificial
              Intelligence (AI), Innovation, and operations research to help
              organisations implement data-driven digital transformations that
              involve all aspects of their business.
            </p>
          </div>
        </div>
      </header>
      <section className="container-section">
        <div>
          <h2>WHO WE ARE</h2>
          <p>
            We are Africa’s foremost AI-driven company. We help organizations
            implement data-driven digital strategy that touches all aspects of
            their business using advanced data analytics techniques such as
            machine learning, deep learning and artificial intelligence.
          </p>
        </div>
        <div className="choose-us">
          <Image src={image1} alt="" />
          <div>
            <h1>WHY YOU SHOULD CHOOSE DETERMINAS ?</h1>
            <p>
              In everything we do, Determinas strives for operational excellence
              and exceptional perfomance. We believe in Speed and Accurate
              Insight - that using intelligence, expertise, and science to
              improve businesses can help create a better and more prosperous
              society for everyone.
            </p>
          </div>
        </div>
        <div className="mission-vision">
          <div>
            <h2>OUR MISSION</h2>
            <ul>
              <li>
                To help organisations implement data-driven digital startegies
                using advanced data analytics techniques.
              </li>
              <li>
                To help inntegrate AI and Data solutions into businesses to
                acheive competitive advantage, increase their revenue and
                optimize their processes.
              </li>
              <li>
                To help businesses leverage the full potential of technology and
                Big Data.
              </li>
            </ul>
          </div>
          <div>
            <h2>OUR VISION</h2>
            <p>Bridging the gap between businesses and AI</p>
          </div>
        </div>
        <div className="how-we-work">
          <Image src={image2} alt="" />
          <div>
            <h3>HOW WE WORK</h3>
            <p>
              We use data to keep you ahead of your competitors by helping your
              organisation make data-driven business decisions. We help your
              business harness to full potential, the opportunities in
              technology and Big Data.
            </p>
            <button>
              <Image src={arrow_right} alt="" />
              LET’S DISCUSS YOUR PROJECT
            </button>
          </div>
        </div>
      </section>
      <section className="core-values">
        <div className="outer-focus">
          <h1>OUR CORE VALUES</h1>
          <div className="focus">
            {coreValues.map((value, i) => (
              <div key={i}>{value}</div>
            ))}
          </div>
        </div>

        <div className="who-we-are">
          <div>
            <p>EXCELLENCE</p>
            <ul>
              <h4>WE ARE:</h4>
              <li>Rigorous</li>
              <li>Efficient</li>
              <li>Diligent</li>
            </ul>
          </div>
          <div>
            <p>INNOVATION</p>
            <ul>
              <li>Inspired</li>
              <li>Creative</li>
              <li>Bold</li>
              <li>Curious</li>
            </ul>
          </div>
          <div>
            <p>EMPATHY</p>
            <ul>
              <li>Awareness</li>
              <li>Understanding</li>
              <li>Hospitality</li>
            </ul>
          </div>
          <div>
            <p>INTEGRITY</p>
            <ul>
              <li>Authentic</li>
              <li>Transparent</li>
            </ul>
          </div>
          <div>
            <p>COMMUNITY BUILDING</p>
            <ul>
              <li>Dilligence</li>
              <li>Leadership</li>
              <li>Inclusion</li>
              <li>Diversity</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container-section">
        <h2>INDUSTRY EXPERTISE</h2>
        <Industries />
      </section>
      <section
        style={{
          padding: " 1rem 0rem",
          position: "relative",
        }}
      >
        <h2
          style={{
            padding: "0 3rem",
          }}
        >
          OUR LEADERSHIP TEAM
        </h2>
        <div className="leadership">
          <div className="explore">
            <div className="item">
              <Image src={ceo} alt="" />
              <div className="text">
                <h5>Theophilus Babatunde Medeiros</h5>
                <p>Founder/CEO</p>
              </div>
            </div>
            <div className="item">
              <Image src={coo} alt="" />
              <div className="text">
                <h5>Ugwumba Desire Chukwudi</h5>
                <p>COO/VP Of Products</p>
              </div>
            </div>
          </div>
          <div className="explore">
            <div className="item">
              <Image src={partner} alt="" />
              <div className="text">
                <h5>Olayemi Wonuola Keri, CRISC, MSC</h5>
                <p>Co-Founder/Partner</p>
              </div>
            </div>
          </div>
          <div className="top">
            <Image src={crystal_lg} alt="" />
            <Image src={crystal_sm} alt="" />
          </div>
          <div className="bottom">
            <Image src={crystal_sm} alt="" />
            <Image src={crystal_lg} alt="" />
          </div>
        </div>

        <div className="paint"></div>
      </section>
      <TalentPool />
      <Footer />
    </div>
  );
}
