import Link from "next/link";
import CardPublicacao from "@/components/CardPublicacao";
import SectionTitle from "@/components/SectionTitle";
import { getPostSummaries } from "@/lib/posts";
import styles from "./styles.module.css";

export default function HomePublicacoes() {
  const latestPosts = getPostSummaries(3);

  return (
    <section className={styles.publicacoesSection}>
      <div className={styles.publicacoesContainer}>
        <SectionTitle lightTitle="Nossas" boldTitle="Publicações" />
        <div className={styles.publicacoes}>
          {latestPosts.map((post) => (
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
      <Link href="/publicacoes" className={styles.verMaisButton}>
        Ver mais publicações
      </Link>
    </section>
  );
}
