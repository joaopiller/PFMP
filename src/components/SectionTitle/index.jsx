import styles from "./styles.module.css";

export default function SectionTitle({ lightTitle, boldTitle, white = false }) {
  return (
    <h2
      className={styles.differentialsTitle}
      style={{ color: white ? "#efefef" : "#203029" }}
    >
      {lightTitle} <span>{boldTitle}</span>
    </h2>
  );
}
