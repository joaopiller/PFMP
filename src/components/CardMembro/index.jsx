"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function CardMembro({ image, name, id }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/equipe/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={styles.equipeMember}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleCardClick();
      }}
    >
      <Image
        src={image}
        alt={`Membro da equipe: ${name}`}
        width={400}
        height={400}
      />
      <p>{name}</p>
    </div>
  );
}
