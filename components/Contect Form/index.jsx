import styles from "./index.module.css";

export default function ContactForm({ contact }) {
  return (
    <form className={styles.form}>
      <section>
        <h2>CONTACT US</h2>
        {!contact ? (
          <div>
            <input type="text" name="name" placeholder="FULL NAME" />
            <input type="email" name="email" placeholder="EMAIL ADDRESS" />
            <textarea name="message" id="" placeholder="MESSAGE"></textarea>
          </div>
        ) : (
          <div>
            <label htmlFor="full name">Full Name</label>
            <input
              type="text"
              name="full name"
              placeholder="Enter your name here..."
            />
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Tell us the name of your company..."
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Example: johndoe@xyz.com"
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter a phone number here..."
            />
            <label htmlFor="message">message</label>
            <textarea
              type="text"
              name="message"
              placeholder="Briefly describe your project..."
            ></textarea>
          </div>
        )}

        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <div className={styles.bottom}>
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
