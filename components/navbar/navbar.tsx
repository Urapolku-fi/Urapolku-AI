import Menu from "@/icons/menu";
import Button from "../button/button";
import Logo from "../logo/logo";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <Logo />

      <div className={styles.buttonsContainer}>
        <Button className={styles.skeletonButton} variant="skeleton">
          Open Jobs
        </Button>
        <Button className={styles.skeletonButton} variant="skeleton">
          About Urapolku
        </Button>

        <div>
          <Button variant="rounded" className={styles.longButton}>Find your Career Path!</Button>
          <Button outline variant="rounded">
            Login
          </Button>
        </div>
      </div>
      <Button dark outline variant="icon" className={styles.menuButton}>
        <Menu />
      </Button>
    </nav>
  );
}

export default Navbar;
