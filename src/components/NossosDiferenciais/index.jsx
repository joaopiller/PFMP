import { PiHandshakeLight } from "react-icons/pi";
import styles from "./styles.module.css";
import SectionTitle from "../SectionTitle";

export default function NossosDiferenciais() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.contentBox}>
          <SectionTitle lightTitle="Nossos" boldTitle="Diferenciais" white />
          <div className={styles.differentials}>
            <div className={styles.differential}>
              <div className={styles.iconContainer}>
                <h3>Flexibilidade</h3>
                <PiHandshakeLight color="#DB9F5D" size={36} />
              </div>
              <p className={styles.differentialText}>
                Nossa equipe é flexível na tratativa com o cliente. Você é
                chamado pelo nome, entendemos a sua realidade e momento.
                Independentemente do certame que você almeja.
              </p>
            </div>
            <div className={styles.differential}>
              <div className={styles.iconContainer}>
                <h3>Flexibilidade</h3>
                <PiHandshakeLight color="#DB9F5D" size={36} />
              </div>
              <p className={styles.differentialText}>
                Nossa equipe é flexível na tratativa com o cliente. Você é
                chamado pelo nome, entendemos a sua realidade e momento.
                Independentemente do certame que você almeja.
              </p>
            </div>
            <div className={styles.differential}>
              <div className={styles.iconContainer}>
                <h3>Flexibilidade</h3>
                <PiHandshakeLight color="#DB9F5D" size={36} />
              </div>
              <p className={styles.differentialText}>
                Nossa equipe é flexível na tratativa com o cliente. Você é
                chamado pelo nome, entendemos a sua realidade e momento.
                Independentemente do certame que você almeja.
              </p>
            </div>
            <div className={styles.differential}>
              <div className={styles.iconContainer}>
                <h3>Flexibilidade</h3>
                <PiHandshakeLight color="#DB9F5D" size={36} />
              </div>
              <p className={styles.differentialText}>
                Nossa equipe é flexível na tratativa com o cliente. Você é
                chamado pelo nome, entendemos a sua realidade e momento.
                Independentemente do certame que você almeja.
              </p>
            </div>
            <div className={styles.differential}>
              <div className={styles.iconContainer}>
                <h3>Flexibilidade</h3>
                <PiHandshakeLight color="#DB9F5D" size={36} />
              </div>
              <p className={styles.differentialText}>
                Nossa equipe é flexível na tratativa com o cliente. Você é
                chamado pelo nome, entendemos a sua realidade e momento.
                Independentemente do certame que você almeja.
              </p>
            </div>
            <div className={styles.differential}>
              <div className={styles.iconContainer}>
                <h3>Flexibilidade</h3>
                <PiHandshakeLight color="#DB9F5D" size={36} />
              </div>
              <p className={styles.differentialText}>
                Nossa equipe é flexível na tratativa com o cliente. Você é
                chamado pelo nome, entendemos a sua realidade e momento.
                Independentemente do certame que você almeja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
