import Image from "next/image";
import logo from "../../public/images/logo.svg";
import styles from "./index.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Image src={logo} />
      <ul>
        <li>
          <a>SERVICES</a>
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
          <a className={styles.contact}>CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
}
