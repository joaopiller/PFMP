import PageBanner from "../../components/PageBanner";
import publicacao_banner from "../../assets/publicacao_banner.jpg";
import publicacao_image from "../../assets/publicacao_image.jpg";
import styles from "./styles.module.css";

export default function Publicacao() {
  return (
    <>
      <PageBanner title="Publicação" image={publicacao_banner} />
      <section className={styles.publicacaoContainer}>
        <h2 className={styles.title}>
          Senado aprova tornar permanentes benefícios fiscais ao esporte
        </h2>
        <p className={styles.author}>Por Victor Hugo Piller</p>
        <div>
            <div className={styles.imageWrapper}>
              <img className={styles.image} src={publicacao_image} alt="" />
            </div>
        </div>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            Fruto de um esforço para fomentar o ambiente de negócios e promover
            o aumento da oferta de capital para investimento em empreendedorismo
            inovador, o Brasil editou a Lei Complementar nº 182, que passou a
            ser conhecida como o Marco Legal das Startups.
          </p>
          <p className={styles.paragraph}>
            A Lei, no caput de seu art. 4º, buscou enquadrar as startups como
            “organizações empresariais ou societárias, nascentes ou em operação
            recente, cuja atuação caracteriza-se pela inovação aplicada a modelo
            de negócios ou a produtos ou serviços ofertados”.
          </p>
          <p className={styles.paragraph}>
            Deixando a seara dos conceitos legais, uma definição muito utilizada
            é a do estudioso americano Eric Ries, que definiu startup como uma
            “instituição humana projetada para criar novos produtos e serviços
            sob condições de extrema incerteza”. O autor, ao trazer essa
            reflexão, pondera que o diferencial reside justamente no que o
            conceito não diz sobre as startups.
          </p>
          <p className={styles.paragraph}>
            Sem a intenção de esgotar a discussão sobre o tema, podemos concluir
            que startups são empresas cujo histórico operacional costuma ser
            limitado, que como a própria tradução literal do termo sugere,
            encontra-se em fase inicial, que atraem investidores pelo perfil de
            risco e recompensa de maior retorno potencial sobre o investimento
            através da escalabilidade de uma empresa que, um dia, foi apenas uma
            ideia.
          </p>
          <p className={styles.paragraph}>
            Sem a intenção de esgotar a discussão sobre o tema, podemos concluir
            que startups são empresas cujo histórico operacional costuma ser
            limitado, que como a própria tradução literal do termo sugere,
            encontra-se em fase inicial, que atraem investidores pelo perfil de
            risco e recompensa de maior retorno potencial sobre o investimento
            através da escalabilidade de uma empresa que, um dia, foi apenas uma
            ideia.
          </p>
          <p className={styles.paragraph}>
            Fruto de um esforço para fomentar o ambiente de negócios e promover
            o aumento da oferta de capital para investimento em empreendedorismo
            inovador, o Brasil editou a Lei Complementar nº 182, que passou a
            ser conhecida como o Marco Legal das Startups.
          </p>
        </div>
      </section>
    </>
  );
}
