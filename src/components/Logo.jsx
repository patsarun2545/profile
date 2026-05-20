import styles from "../styles/layout.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.logoBracket}>{"<"}</span>
      <span className={styles.logoText}>PS</span>
      <span className={styles.logoBracket}>{"/>"}</span>
    </div>
  );
}
