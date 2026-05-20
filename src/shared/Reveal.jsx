import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "../styles/shared.module.css";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  style = {},
}) {
  const [ref, visible] = useScrollReveal();
  const directionClasses = {
    up: styles.revealUp,
    down: styles.revealDown,
    left: styles.revealLeft,
    right: styles.revealRight,
  };

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ""} ${directionClasses[direction]}`}
      style={{ "--delay": `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}
