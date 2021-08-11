import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import styles from "./index.module.css";
import menu_open from "../../public/images/menu-open.svg";
import menu_close from "../../public/images/menu-close.svg";
import arrow_down from "../../public/images/arrow-down.svg";
import arrow_up from "../../public/images/arrow-up.svg";
import contact_bg from "../../public/images/contact-bg.svg";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [addWhiteBg, setAddWhiteBg] = useState(false);
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
  const technologies = [
    "AWS",
    "Microsoft",
    "Python",
    "Javascript",
    "Figma",
    "Java",
    "Hadoop",
    "Spark",
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setAddWhiteBg(true) : setAddWhiteBg(false);
    });
  }, []);
  return (
    <nav className={addWhiteBg ? `${styles.nav} ${styles.white}` : styles.nav}>
      <div className={styles.menu_top}>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <div className={styles.menu} onClick={() => setOpen(!open)}>
          <Image src={open ? menu_close : menu_open} alt="" />
        </div>
      </div>

      <ul className={open ? styles.open : styles.close}>
        <li>
          <Link href="/services">
            <div className={`${styles.link_list} ${styles.industry}`}>
              <a>SERVICES</a>
              <Image src={arrow_down} alt="" className={styles.image} />
            </div>
          </Link>
          <div className={styles.dropdown}>
            <li>
              Big Data And Analytics
              <div className={styles.inner_dropdown}>
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
              </div>
            </li>
            <li>
              <Link href="/software-product-innovation">
                Software Product and Innovation
              </Link>
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
                <li>
                  <Link href="/talent-fellowship">Talent Fellowship</Link>
                </li>
                <li>
                  <Link href="/talent-as-a-service">Talent As a Service</Link>
                </li>
                <li>Talent Outsourcing</li>
              </div>
            </li>
            <li>
              Growth Marketing
              <div className={styles.inner_dropdown}>
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
              </div>
            </li>
          </div>
        </li>
        <li>
          <Link href="/industries">
            <div className={styles.link_list}>
              <a>INDUSTRIES</a>
              <Image src={arrow_down} alt="" className={styles.image} />
            </div>
          </Link>
          <div className={styles.dropdown}>
            {industries.map((industry, i) => (
              <li key={i}>
                {" "}
                <Link href="/industries">{industry}</Link>
              </li>
            ))}
          </div>
        </li>
        <li>
          <div className={styles.link_list}>
            <a>TECHNOLOGIES</a>
            <Image src={arrow_down} alt="" className={styles.image} />
          </div>
          <div className={styles.dropdown}>
            {technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </div>
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
            <a
              className={styles.contact}
              style={{
                backgroundImage: addWhiteBg && "url('/images/contact-bg.svg')",
              }}
            >
              CONTACT US
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
