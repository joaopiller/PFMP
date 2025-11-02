import styles from "./styles.module.css";
import CardMembro from "@/components/CardMembro";
import victorImg from "@/assets/images/victor_h_piller.jpeg";
import pedroImg from "@/assets/images/pedro_fonseca.jpeg";
import flaviaImg from "@/assets/images/flavia_perim.jpeg";
import marchesiImg from "@/assets/images/joao_marchesi.jpeg";
import nossa_equipe from "@/assets/images/equipe_banner.jpeg";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Equipe | PFMP Advogados",
  description:
    "Conheça os advogados especialistas em Direito Tributário do escritório PFMP Advogados.",
};

export default function Equipe() {
  return (
    <>
      <PageBanner image={nossa_equipe} title="Equipe" />
      <section className={styles.equipeContent}>
        <h2 className={styles.equipeSubtitle}>
          Advogados especialistas em Direito Tributário
        </h2>
        <p className={styles.equipeDescription}>
          Com atuação especializada em Direito Tributário, nosso time reúne
          sócios com passagem por grandes escritórios, experiência no setor
          público e atuação direta em empresas. Essa vivência diversificada nos
          permite compreender os desafios do ambiente de negócios e oferecer
          soluções jurídicas alinhadas às demandas dos nossos clientes.
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
