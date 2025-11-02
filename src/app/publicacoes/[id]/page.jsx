// app/publicacoes/[id]/page.jsx
import PageBanner from "@/components/PageBanner";
import publicacoes from "@/assets/images/banner_publicacoes.jpg";
import styles from "./styles.module.css";
import { FaCalendar } from "react-icons/fa";
import posts from "@/data/posts.js";
import { renderContent } from "@/utils/contentRenderer.jsx";
import Image from "next/image";

export async function generateStaticParams() {
  return posts.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const key = decodeURIComponent(String(params.id)).trim().toLowerCase();
  const post =
    posts.find((p) => String(p.id).trim().toLowerCase() === key) ?? null;

  if (!post) {
    return {
      title: "Publicação não encontrada | PFMP Advogados",
      description: "A publicação solicitada não foi encontrada.",
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `https://pfmpadv.com.br/publicacoes/${post.id}`;

  return {
    title: `${post.title} | PFMP Advogados`,
    description: post.description ?? "Publicação do PFMP Advogados.",
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.description ?? "",
      url: canonicalUrl,
      type: "article",
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description ?? "",
      images: post.image ? [post.image] : [],
    },
  };
}

export default function Publicacao({ params }) {
  const key = decodeURIComponent(String(params.id)).trim().toLowerCase();
  const post = posts.find((p) => String(p.id).trim().toLowerCase() === key);

  if (!post) {
    return (
      <main className={styles.publicacaoNaoEncontrada}>
        <h1>Publicação não encontrada</h1>
      </main>
    );
  }

  return (
    <>
      <PageBanner title="Publicações" image={publicacoes} />
      <section className={styles.publicacaoContainer}>
        <h2 className={styles.title}>{post.title}</h2>

        <div className={styles.meta}>
          {post.authors && <p className={styles.author}>Por {post.authors}</p>}
          {post.date && (
            <p className={styles.date}>
              <FaCalendar />
              {post.date}
            </p>
          )}
        </div>

        {post.image && (
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={post.image}
              alt={post.title}
              width={1000}
              height={600}
              sizes="(max-width: 768px) 100vw, 770px"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        )}

        <div className={styles.content}>
          {post.content
            ? renderContent(post.content, styles)
            : post.paragraphs?.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

          <p className={styles.signature}>
            Conte com a equipe do PFMP Advogados para aprofundar seu
            entendimento sobre este tema e avaliar como ele pode se aplicar ao
            seu caso.
          </p>
        </div>
      </section>
    </>
  );
}
