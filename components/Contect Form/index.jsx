import styles from "./index.module.css";

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <section>
        <h2>CONTACT US</h2>
        <div>
          <input type="text" name="name" placeholder="FULL NAME" />
          <input type="email" name="email" placeholder="EMAIL ADDRESS" />
          <textarea name="message" id="" placeholder="MESSAGE"></textarea>
        </div>
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <div>
          <span>
            <input type="checkbox" name="accept" />
            <span>I accept the Privacy Policy</span>
          </span>
          <button>SUBMIT FORM</button>
        </div>
      </section>
    </form>
  );
}
