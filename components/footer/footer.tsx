import Logo from "../logo/logo";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.contact}>
        <h2>Contact</h2>
        <p>Work inquires: work@vaultflow.com</p>
        <p>PR and speaking: press@vaultflow.com</p>
        <p>New business: newbusiness@vaultflow.com</p>
      </section>
      <section className={styles.address}>
        <h2>Address</h2>
        <p>398 11th Street, Floor 2</p>
        <p>San Francisco, CA 94103</p>
      </section>
      <section className={styles.careers}>
        <h2>Careers</h2>
        <p>398 11th Street, Floor 2</p>
        <p>San Francisco, CA 94103</p>
      </section>
      <section className={styles.social}>
        <h2>Social</h2>
        <p>398 11th Street, Floor 2</p>
        <p>San Francisco, CA 94103</p>
      </section>
      <section className={styles.copyright}>
        <p>&copy; 2023 Urapolku. All Rights Reserved.</p>
        <Logo />
      </section>
    </footer>
  );
}

export default Footer;
