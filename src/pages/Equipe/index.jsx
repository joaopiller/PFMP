import styles from "./styles.module.css";
import CardMembro from "../../components/CardMembro";
import victorImg from "../../assets/images/victor_h_piller.JPG";
import pedroImg from "../../assets/images/pedro_fonseca.JPG";
import flaviaImg from "../../assets/images/flavia_perim.JPG";
import marchesiImg from "../../assets/images/joao_marchesi.JPG";
import nossa_equipe from "../../assets/images/equipe_banner.JPG";
import PageBanner from "../../components/PageBanner";

export default function Equipe() {
  return (
    <>
      <PageBanner image={nossa_equipe} title="Equipe" />
      <section className={styles.equipeContent}>
        <h2 className={styles.equipeSubtitle}>
          Advogados especialistas em Direito Tributário
        </h2>
        <p className={styles.equipeDescription}>
          Com advogados especializados em suas áreas de atuação e dedicados a
          entender as necessidades de nossos clientes, criamos uma rede
          multidisciplinar. Estamos preparados para os desafios jurídicos do
          mundo atual.
        </p>
        <div className={styles.equipeMembers}>
          <CardMembro id="vhpiller" image={victorImg} name="Victor H. Piller" />
          <CardMembro id="phfonseca" image={pedroImg} name="Pedro H. Fonseca" />
          <CardMembro id="jmarchesi" image={marchesiImg} name="João Marchesi" />
          <CardMembro id="fperim" image={flaviaImg} name="Flávia Perim" />
        </div>
      </section>
    </>
  );
}
