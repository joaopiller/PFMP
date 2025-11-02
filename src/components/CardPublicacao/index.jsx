"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ExpandButton from "@/components/ExpandButton";
import styles from "./styles.module.css";

export default function CardPublicacao({ image, title, description, id }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/publicacoes/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <article className={styles.publicacaoCard}>
      <Image
        className={styles.publicacaoImage}
        src={image}
        alt={`Publicação: ${title}`}
      />
      <div className={styles.publicacaoContent}>
        <div className={styles.publicacaoText}>
          <h3 className={styles.publicacaoTitle}>{title}</h3>
          <p className={styles.publicacaoDescription}>{description}</p>
        </div>
        <ExpandButton text="Leia mais" onClick={handleCardClick} />
      </div>
    </article>
  );
}
