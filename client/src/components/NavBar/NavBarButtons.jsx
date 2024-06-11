import styles from "./NavBarButtons.module.css";

export default function NavBarButtons() {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.signupButton}>
        S'inscrire
      </button>
      <button type="button" className={styles.loginButton}>
        +
      </button>
    </div>
  );
}
