"use client";

import { useRouter } from "next/navigation";
import CardPublicacao from "@/components/CardPublicacao";
import SectionTitle from "@/components/SectionTitle";
import posts from "@/data/posts.js";
import styles from "./styles.module.css";

export default function HomePublicacoes() {
  const router = useRouter();

  const handleVerMaisClick = () => {
    router.push("/publicacoes");
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.publicacoesSection}>
      <div className={styles.publicacoesContainer}>
        <SectionTitle lightTitle="Nossas" boldTitle="Publicações" />
        <div className={styles.publicacoes}>
          {posts.slice(0, 3).map((post) => (
            <CardPublicacao
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
      <button onClick={handleVerMaisClick} className={styles.verMaisButton}>
        Ver mais publicações
      </button>
    </section>
  );
}
