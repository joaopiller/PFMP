import styles from "./styles.module.css";

export default function SectionTitle({ lightTitle, boldTitle, white = false }) {
  return (
    <h2 className={`${styles.differentialsTitle} ${white ? styles.white : ""}`}>
      {lightTitle} <span>{boldTitle}</span>
    </h2>
  );
}
