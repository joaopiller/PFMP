import styles from "./styles.module.css";

export default function CardAreaDeAtuacao({title, description, children, margin, key}) {
  return (
    <div key={key} className={styles.areaDeAtuacaoCard} style={{ margin: margin ? "0 auto" : "0" }}>
      {children}
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </div>
  );
}
