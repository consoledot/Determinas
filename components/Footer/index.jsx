import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../Contect Form";
import mail from "../../public/images/mail.svg";
import phone from "../../public/images/phone.svg";
import address from "../../public/images/address.svg";
import copy from "../../public/images/copy.svg";
import facebook from "../../public/images/facebook.svg";
import instagram from "../../public/images/instagram.svg";
import youtube from "../../public/images/youtube.svg";
import twitter from "../../public/images/twitter.svg";
import linkedin from "../../public/images/linkedin.svg";

export default function Footer({ contact }) {
  return (
    <footer className={styles.footer}>
      <ContactForm contact={contact} />
      <div
        className={styles.footer_container}
        style={{
          paddingTop: contact && "70rem",
        }}
      >
        <section className={styles.footer_section}>
          <div>
            <p>SERVICES</p>
            <ul>
              <li className={styles.first}>Big Data & Analytics</li>
              <li>
                {" "}
                <Link href="/data-governance">Data Governance</Link>
              </li>
              <li>
                {" "}
                <Link href="/data-engineering">Data Engineering</Link>
              </li>
              <li>
                <Link href="/business-inteligence-&-data-visualization">
                  Business Intelligence & Data Visualisation
                </Link>
              </li>
              <li>
                <Link href="/data-science">Data Science</Link>
              </li>
            </ul>
            <ul>
              <li className={styles.first}>
                <Link href="/software-product-innovation">
                  Software Product & Innovation
                </Link>
              </li>
              <li>End to End Product Engineering</li>
              <li>Product Design</li>
              <li>Product Development</li>
              <li>APP Restructuring</li>
            </ul>
            <ul>
              <li className={styles.first}>GROWTH MARKETING</li>
              <li>
                <Link href="/market-research">Market Research</Link>
              </li>
              <li>
                <Link href="/market-intelligence-service">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link href="/business-strategy-support">
                  Business Strategy Support
                </Link>
              </li>
              <li>
                <Link href="/investment-research-services">
                  Investment Research
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p>INDUSTRIES</p>
            <ul>
              <li>
                <Link href="/industries">Telecommunications</Link>
              </li>
              <li>
                <Link href="/industries">Education</Link>
              </li>
              <li>
                <Link href="/industries">Healthcare</Link>
              </li>
              <li>
                <Link href="/industries">Commerce</Link>{" "}
              </li>
              <li>
                <Link href="/industries">Agriculture</Link>
              </li>
              <li>
                <Link href="/industries">Government</Link>
              </li>
              <li>
                <Link href="/industries">Enterprise Resource Planning</Link>
              </li>
              <li>
                <Link href="/industries">Banking and Finance</Link>
              </li>
              <li>
                <Link href="/industries">Manufacturing and Energy</Link>
              </li>
              <li>
                <Link href="/industries">Transportation and Logistics</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>TECHNOLOGIES</p>
            <ul>
              <li>AWS</li>
              <li> Microsoft </li>
              <li> Java</li>
              <li> Python</li>
              <li>Javascript</li>
              <li>Figma</li>
              <li> Hadoop </li>
              <li> Spark</li>
            </ul>
          </div>
          <div>
            <p>CASE STUDIES</p>
            <p>COMPANY</p>
            <ul>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li> Careers</li>
            </ul>
            <p>
              <Link href="/blog">BLOG</Link>
            </p>
          </div>
          <div className={styles.contact}>
            <p>
              <Link href="/contact-us">CONTACT US</Link>
            </p>
            <ul>
              <li>
                <Image src={phone} alt="" />
                +2347066048100
              </li>
              <li>
                <Image src={mail} alt="" />
                info@determinas.com
              </li>
              <li>
                <Image src={address} alt="" />
                Ibukun House, Ademola Adetokunbo Street, Victoria Island ,
                Lagos.
              </li>
            </ul>
            <section className={styles.socials}>
              <h4>FOLLOW US</h4>
              <div>
                <Image src={instagram} alt="" />
                <Image src={facebook} alt="" />
                <Image src={linkedin} alt="" />
                <Image src={youtube} alt="" />
                <Image src={twitter} alt="" />
              </div>
            </section>
          </div>
        </section>
        <p></p>
      </div>

      <section className={styles.footer_footer}>
        <p>
          <Image src={copy} alt="" />
          2021. Determinas. All rights reserved.
        </p>
        <p>Privacy Policy | Cookies Policy</p>
      </section>
    </footer>
  );
}
