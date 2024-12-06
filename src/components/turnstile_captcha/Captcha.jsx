import styles from "./Captcha.module.css";
import Turnstile, { useTurnstile } from "react-turnstile";

const Captcha = ({ setCaptchaVerified }) => {
  const turnstile = useTurnstile();

  return (
    <Turnstile
      className={styles.captcha}
      size="flexible"
      sitekey="0x4AAAAAAA1oLpr6ZN4haMO2"
      onVerify={(token) => {
        // Send token to backend for verification
        fetch("/login", {
          method: "POST",
          body: JSON.stringify({ token }),
        }).then((response) => {
          if (response.ok) {
            setCaptchaVerified(true); // Enable button
          } else {
            setCaptchaVerified(false); // Disable button
            turnstile.reset();
          }
        });
      }}
    />
  );
};

export default Captcha;
