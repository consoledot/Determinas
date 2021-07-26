import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../Contect Form";
import mail from "../../public/images/mail.svg";
import phone from "../../public/images/phone.svg";
import address from "../../public/images/address.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ContactForm />
      <section className={styles.footer_section}>
        <div>
          <p>SERVICES</p>
          <ul>
            <li className={styles.first}>Big Data & Analytics</li>
            <li>Data Governance</li>
            <li>Data Engineering</li>
            <li>
              <Link href="/business-inteligence-&-data-visualization">
                Business Intelligence & Data Visualisation
              </Link>
            </li>
            <li>Data science</li>
          </ul>
          <ul>
            <li className={styles.first}>Software Product & Innovation</li>
            <li>End to End Product Engineering</li>
            <li>Product Design</li>
            <li>Product Development</li>
            <li>APP Restructuring</li>
          </ul>
          <ul>
            <li className={styles.first}>GROWTH MARKETING</li>
            <li>Market Research</li>
            <li>Market Intelligence Service</li>
            <li>
              <Link href="/business-strategy-support">
                Business Strategy Support
              </Link>
            </li>
            <li>Investment Research Services</li>
          </ul>
        </div>
        <div>
          <p>INDUSTRIES</p>
          <ul>
            <li>Telecommunications</li>
            <li> Education</li>
            <li>Healthcare</li>
            <li>Commerce </li>
            <li>Agriculture</li>
            <li>Government</li>
            <li>Enterprise Resource Planning</li>
            <li>Banking and Finance</li>
            <li>Manufacturing and Energy</li>
            <li>Transportation and Logistics</li>
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
            <li>About us</li>
            <li> Careers</li>
          </ul>
          <p>BLOG</p>
        </div>
        <div>
          <p>CONTACT US</p>
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
              Ibukun House, Ademola Adetokunbo Street, Victoria Island , Lagos.
            </li>
          </ul>
        </div>
      </section>
      <p>SEE THE LATEST ON OUR BLOG</p>
      <section className={styles.footer_section}>
        <div>
          <h5>Model Fitting and Generalization</h5>
          <p>Read more...</p>
        </div>
        <div>
          <h5>What is Artificial Intelligence?</h5>
          <p>Read more...</p>
        </div>
        <div>
          <h5>Artificial Intelligence in the Health Care Sector</h5>
          <p>Read more...</p>
        </div>
      </section>
    </footer>
  );
}
