import PageBanner from "../../components/PageBanner";
import publicacao_banner from "../../assets/publicacao_banner.jpg";
import styles from "./styles.module.css";
import { FaCalendar } from "react-icons/fa";
import posts from "../../data/posts.js";
import { useParams } from "react-router-dom";

export default function Publicacao() {
  const { publicacaoId } = useParams();
  const post = posts.find((p) => p.id === publicacaoId);

  return (
    <>
      <PageBanner title="Publicações" image={publicacao_banner} />
      <section className={styles.publicacaoContainer}>
        <h2 className={styles.title}>
          {post.title}
        </h2>
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
          {post.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
