"use client";

import Menu from "@/icons/menu";
import Button from "../button/button";
import Logo from "../logo/logo";
import styles from "./navbar.module.css";
import { UserButton, useAuth, useClerk } from "@clerk/nextjs";

function Navbar() {
  const { isLoaded, isSignedIn } = useAuth();

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
          <Button variant="rounded" className={styles.longButton}>
            Find your Career Path!
          </Button>
          {isLoaded && !isSignedIn ? (
            <a href="/sign-in">
              <Button outline variant="rounded">
                Sign In
              </Button>
            </a>
          ) : (
            <UserButton appearance={{
              elements: {
                rootBox: styles.userButton,
                
              }
            }} />
          )}
        </div>
      </div>
      <Button dark outline variant="icon" className={styles.menuButton}>
        <Menu />
      </Button>
    </nav>
  );
}

export default Navbar;
