import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";
import styles from "../styles/layout.module.css";

export default function Footer() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const { t } = useLang();

  return (
    <footer
      className={`${styles.footer} ${isMobile ? styles.footerMobile : ""}`}
    >
      <span className={styles.copyright}>
        © {new Date().getFullYear()} Patsarun Kathinthong
      </span>
      <span className={styles.role}>{t.footer.role}</span>
    </footer>
  );
}
