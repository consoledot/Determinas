import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import styles from "./index.module.css";

export default function Navigation() {
  const industries = [
    "Telecommunications",
    "Education",
    "Healthcare",
    "Commerce",
    "Agriculture",
    "Energy",
    "Banking and Finance",
    "Manufacturing",
    "Transportation and Logistics",
  ];
  const services = [
    "Big Data And Analytics",
    "Software Product and Innovation",
    "Talent Mobility",
    "Growth Marketing",
  ];
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src={logo} alt="" />
      </Link>

      <ul>
        <li>
          <Link href="/services">
            <a>SERVICES</a>
          </Link>
          <div className={styles.dropdown}>
            {/* {services.map((service, i) => (
              <li key={i}>{service}</li>
            ))} */}
            <li>
              Big Data And Analytics
              <div className={styles.inner_dropdown}>
                <li>Data Governance</li>
                <li>Data Engineering</li>
                <li>Business Intelligence & Visualisation</li>
                <li>Data Science</li>
              </div>
            </li>
            <li>
              Software Product and Innovation
              <div className={styles.inner_dropdown}>
                <li>End to End Product Engineering</li>
                <li>Product Design</li>
                <li>Product Development</li>
                <li>App Restructuring</li>
              </div>
            </li>
            <li>
              Talent Mobility
              <div className={styles.inner_dropdown}>
                <li>Talent Fellowship</li>
                <li>Talent As a Service</li>
                <li>Talent Outsourcing</li>
              </div>
            </li>
            <li>
              Growth Marketing
              <div className={styles.inner_dropdown}>
                <li>Market Research</li>
                <li>Market Intelligence</li>
                <li>Business Strategy Support</li>
                <li>Investment Research</li>
              </div>
            </li>
          </div>
        </li>
        <li>
          <Link href="/industries">
            <a>INDUSTRIES</a>
          </Link>
          <div className={styles.dropdown}>
            {industries.map((industry, i) => (
              <li key={i}>{industry}</li>
            ))}
          </div>
        </li>
        <li>
          <a>TECHNOLOGIES</a>
        </li>
        <li>
          <Link href="/case-studies">
            <a>CASE STUDIES</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a>ABOUT US</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>BLOG</a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <a className={styles.contact}>CONTACT US</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
