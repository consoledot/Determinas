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
          <a>INDUSTRIES</a>
        </li>
        <li>
          <a>TECHNOLOGIES</a>
        </li>
        <li>
          <a>CASE STUDIES</a>
        </li>
        <li>
          <a>ABOUT US</a>
        </li>
        <li>
          <a>BLOG</a>
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
