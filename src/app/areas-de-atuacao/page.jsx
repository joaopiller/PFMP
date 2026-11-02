import PageBanner from "@/components/PageBanner";
import areas_de_atuacao from "@/assets/images/banner_areas.jpg";
import styles from "./styles.module.css";
import CardAreaDeAtuacao from "@/components/CardAreaDeAtuacao";
import areasDeAtuacaoData from "@/data/areasDeAtuacao.js";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Áreas de Atuação",
  description:
    "Conheça as principais áreas de atuação do escritório PFMP Advogados.",
  path: "/areas-de-atuacao",
});

export default function AreasDeAtuacao() {
  return (
    <>
      <PageBanner image={areas_de_atuacao} title="Áreas de Atuação" />

      <h2 className={styles.areasDeAtuacaoTitle}>
        Conheça as áreas em que o PFMP Advogados atua
      </h2>

      <section className={styles.areasDeAtuacaoContent}>
        <div className={styles.areasDeAtuacaoCards}>
          {areasDeAtuacaoData.map((area) => (
            <CardAreaDeAtuacao
              key={area.name}
              title={area.name}
              description={area.description}
            >
              <area.icon color="#db9f5d" size={95} />
            </CardAreaDeAtuacao>
          ))}
        </div>
      </section>
    </>
  );
}
