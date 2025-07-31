import { IoSearch } from "react-icons/io5";
import publicacoes from "../../assets/publicacoes.jpg";
import PageBanner from "../../components/PageBanner";
import styles from "./styles.module.css";
import CardPublicacao from "../../components/CardPublicacao";
import posts from "../../data/posts.js";

export default function Publicacoes() {
  return (
    <>
      <PageBanner image={publicacoes} title="Publicações" />
      <section className={styles.publicacoesContainer}>
        <div className={styles.searchContainer}>
          <input
            placeholder="Pesquisar..."
            className={styles.searchInput}
            type="text"
          />
          <button className={styles.searchButton}>
            <IoSearch color="#efefef" />
          </button>
        </div>
        <div className={styles.publicacoes}>
          {posts.map((post) => (
            <CardPublicacao key={post.id} id={post.id} image={post.image} title={post.title} description={post.description} />
          ))}
        </div>
      </section>
    </>
  );
}
