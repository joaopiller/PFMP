import Image from "next/image";
import ExpandButton from "@/components/ExpandButton";
import styles from "./styles.module.css";

export default function CardPublicacao({
  image,
  title,
  description,
  id,
  ...props
}) {
  return (
    <article className={styles.publicacaoCard} {...props}>
      <Image
        className={styles.publicacaoImage}
        src={image}
        alt=""
        sizes="(max-width: 475px) 100vw, 368px"
      />
      <div className={styles.publicacaoContent}>
        <div className={styles.publicacaoText}>
          <h3 className={styles.publicacaoTitle}>{title}</h3>
          <p className={styles.publicacaoDescription}>{description}</p>
        </div>
        <ExpandButton text="Leia mais" href={`/publicacoes/${id}`} />
      </div>
    </article>
  );
}
