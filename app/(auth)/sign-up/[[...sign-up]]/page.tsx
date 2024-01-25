import { SignUp } from "@clerk/nextjs";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <SignUp
        appearance={{
          elements: {
            card: styles.card,
            socialButtons: styles.socialButtonsBlockButton,
            selectButton: styles.selectButton,
            selectOptionsContainer: styles.selectOptionsContainer,
            selectOption__countryCode: styles.selectOptionCountryCode,
            otpCodeFieldInputs: styles.otpCodeFieldInputs,
          },
          variables: {
            colorBackground: "#0b0121",
            colorPrimary: "#bb9bff",
            colorText: "#ececec",
            colorTextOnPrimaryBackground: "#0b0121",
          },
        }}
      />
    </div>
  );
}
