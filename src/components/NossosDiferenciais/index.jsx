import { PiHandshakeLight } from "react-icons/pi";
import styles from "./styles.module.css";
import SectionTitle from "../SectionTitle";
import CardDiferencial from "./CardDiferencial";

export default function NossosDiferenciais() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.contentBox}>
          <SectionTitle lightTitle="Nossos" boldTitle="Diferenciais" white />
          <div className={styles.differentials}>
            <CardDiferencial
              title="Flexibilidade"
              description="Nossa equipe é flexível na tratativa com o cliente. Você é chamado pelo nome, entendemos a sua realidade e momento. Independentemente do certame que você almeja."
            >
              <PiHandshakeLight color="#DB9F5D" size={36} />
            </CardDiferencial>
            <CardDiferencial
              title="Flexibilidade"
              description="Nossa equipe é flexível na tratativa com o cliente. Você é chamado pelo nome, entendemos a sua realidade e momento. Independentemente do certame que você almeja."
            >
              <PiHandshakeLight color="#DB9F5D" size={36} />
            </CardDiferencial>
            <CardDiferencial
              title="Flexibilidade"
              description="Nossa equipe é flexível na tratativa com o cliente. Você é chamado pelo nome, entendemos a sua realidade e momento. Independentemente do certame que você almeja."
            >
              <PiHandshakeLight color="#DB9F5D" size={36} />
            </CardDiferencial>
            <CardDiferencial
              title="Flexibilidade"
              description="Nossa equipe é flexível na tratativa com o cliente. Você é chamado pelo nome, entendemos a sua realidade e momento. Independentemente do certame que você almeja."
            >
              <PiHandshakeLight color="#DB9F5D" size={36} />
            </CardDiferencial>
            <CardDiferencial
              title="Flexibilidade"
              description="Nossa equipe é flexível na tratativa com o cliente. Você é chamado pelo nome, entendemos a sua realidade e momento. Independentemente do certame que você almeja."
            >
              <PiHandshakeLight color="#DB9F5D" size={36} />
            </CardDiferencial>
            <CardDiferencial
              title="Flexibilidade"
              description="Nossa equipe é flexível na tratativa com o cliente. Você é chamado pelo nome, entendemos a sua realidade e momento. Independentemente do certame que você almeja."
            >
              <PiHandshakeLight color="#DB9F5D" size={36} />
            </CardDiferencial>
          </div>
        </div>
      </div>
    </section>
  );
}
