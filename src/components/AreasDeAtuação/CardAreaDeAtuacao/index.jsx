import styles from "./styles.module.css";

export default function CardAreaDeAtuacao({title, description, children}) {
  return (
    <div className={styles.areaDeAtuacaoCard}>
      {children}
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </div>
  );
}
