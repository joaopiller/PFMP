import styles from "./styles.module.css";

export default function Diferencial({ title, description, children }) {
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
