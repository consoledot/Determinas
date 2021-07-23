import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import styles from "./index.module.css";

export default function Navigation() {
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
        </li>
        <li>
          <Link href="/industries">
            <a>INDUSTRIES</a>
          </Link>
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
