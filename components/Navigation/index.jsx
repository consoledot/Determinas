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
        <Image src={logo} />
      </Link>

      <ul>
        <li>
          <Link href="/services">
            <a>SERVICES</a>
          </Link>
          <div className={styles.dropdown}>
            {services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
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
