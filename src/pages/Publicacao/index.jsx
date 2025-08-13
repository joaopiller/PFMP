import PageBanner from "../../components/PageBanner";
import publicacoes from "../../assets/images/banner_publicacoes.jpg";
import styles from "./styles.module.css";
import { FaCalendar } from "react-icons/fa";
import posts from "../../data/posts.js";
import { useParams } from "react-router-dom";
import { renderContent } from "../../utils/contentRenderer.jsx";

export default function Publicacao() {
  const { publicacaoId } = useParams();
  const post = posts.find((p) => p.id === publicacaoId);

  return (
    <>
      <PageBanner title="Publicações" image={publicacoes} />
      <section className={styles.publicacaoContainer}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.meta}>
          <p className={styles.author}>Por {post.authors}</p>
          <p className={styles.date}>
            <FaCalendar />
            {post.date}
          </p>
        </div>
        <div>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={post.image} alt={post.title} />
          </div>
        </div>
        <div className={styles.content}>
          {/* Renderizar conteúdo rico se disponível, senão usar paragraphs */}
          {post.content
            ? renderContent(post.content, styles)
            : post.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
          <p className={styles.signature}>
            Entre em contato com nosso time de especialistas em Tributário para
            entender como essas soluções podem se aplicar ao seu caso e apoiar a
            regularização fiscal da sua empresa.
          </p>
        </div>
      </section>
    </>
  );
}
