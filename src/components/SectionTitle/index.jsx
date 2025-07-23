import styles from './styles.module.css';

export default function SectionTitle({ lightTitle, boldTitle, white }) {
  return (
    <h2
      style={{ color: white ? "#efefef" : "#203029" }}
      className={styles.differentialsTitle}
    >
      {lightTitle} <span>{boldTitle}</span>
    </h2>
  );
}
