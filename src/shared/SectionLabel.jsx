import styles from "../styles/shared.module.css";

export default function SectionLabel({ number, title, isMobile }) {
  return (
    <div>
      <div className={styles.sectionLabelNumber}>{`// 0${number}.`}</div>
      <h2
        className={`${styles.sectionLabelTitle} ${isMobile ? styles.sectionLabelTitleMobile : styles.sectionLabelTitleDesktop}`}
      >
        {title}
        <span className={styles.sectionLabelUnderline} />
      </h2>
    </div>
  );
}
