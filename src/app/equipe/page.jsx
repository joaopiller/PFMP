import styles from "./styles.module.css";
import CardMembro from "@/components/CardMembro";
import nossa_equipe from "@/assets/images/equipe_banner.jpeg";
import PageBanner from "@/components/PageBanner";
import equipeMembers from "@/data/equipeMembers";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Equipe",
  description:
    "Conheça os advogados especialistas em Direito Tributário do escritório PFMP Advogados.",
  path: "/equipe",
});

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
          {equipeMembers.map((member) => (
            <CardMembro
              key={member.id}
              id={member.id}
              image={member.image}
              name={member.shortName}
            />
          ))}
        </div>
      </section>
    </>
  );
}
