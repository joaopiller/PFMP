import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import publicacoes from "@/assets/images/banner_publicacoes.jpg";
import styles from "./styles.module.css";
import { FaCalendar } from "react-icons/fa";
import { getAllPosts, getPostById, parsePostDate } from "@/lib/posts";
import { articleJsonLd, buildMetadata, toOpenGraphImage } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { renderContent } from "@/utils/contentRenderer";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: "Publicação não encontrada",
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/publicacoes/${post.id}`,
    openGraph: {
      type: "article",
      publishedTime: parsePostDate(post.date).toISOString(),
      authors: [post.authors],
      images: [toOpenGraphImage(post.image, post.title)],
    },
  });
}

export default async function Publicacao({ params }) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={articleJsonLd(post, parsePostDate(post.date))} />
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
          {renderContent(post.content, styles)}

          <p className={styles.signature}>
            Conte com a equipe do PFMP Advogados para aprofundar seu
            entendimento sobre este tema e avaliar como ele pode se aplicar ao
            seu caso.
          </p>
        </div>

        <Link href="/publicacoes" className={styles.backLink}>
          Ver todas as publicações
        </Link>
      </section>
    </>
  );
}
