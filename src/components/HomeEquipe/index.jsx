import styles from "./styles.module.css";
import victorImg from "../../assets/images/victor_h_piller.JPG";
import pedroImg from "../../assets/images/pedro_fonseca.JPG";
import flaviaImg from "../../assets/images/flavia_perim.JPG";
import marchesiImg from "../../assets/images/joao_marchesi.JPG";
import SectionTitle from "../SectionTitle";
import CardMembro from "../CardMembro";

export default function HomeEquipe() {
  return (
    <section className={styles.equipeSection}>
      <div className={styles.equipeContainer}>
        <SectionTitle lightTitle="Nossa" boldTitle="Equipe" />
        <div className={styles.equipeMembers}>
          <CardMembro id="vhpiller" image={victorImg} name="Victor H. Piller" />
          <CardMembro id="phfonseca" image={pedroImg} name="Pedro H. Fonseca" />
          <CardMembro id="jmarchesi" image={marchesiImg} name="João Marchesi" />
          <CardMembro id="fperim" image={flaviaImg} name="Flávia Perim" />
        </div>
      </div>
    </section>
  );
}
