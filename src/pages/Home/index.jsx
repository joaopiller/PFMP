import HomeBanner from "../../components/HomeBanner";
import HomeQuemSomos from "../../components/HomeQuemSomos";
import styles from "./styles.module.css";
import { PiHandshakeLight } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeQuemSomos />
      <section>
        <div className={styles.container}>
          <div className={styles.backgroundImage}></div>
          <div className={styles.contentBox}>
            <h2 className={styles.differentialsTitle}>
              Nossos<span> Diferenciais</span>
            </h2>
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
    </>
  );
}
