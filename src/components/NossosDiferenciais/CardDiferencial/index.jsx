import styles from "./styles.module.css";

export default function CardDiferencial({ title, description, children }) {
  return (
    <div className={styles.differential}>
      <div className={styles.iconContainer}>
        <h3>{title}</h3>
        {children}
      </div>
      <p className={styles.differentialText}>
        {description}
      </p>
    </div>
  );
}
