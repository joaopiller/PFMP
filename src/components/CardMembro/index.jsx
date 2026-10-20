import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function CardMembro({ image, name, id }) {
  return (
    <Link href={`/equipe/${id}`} className={styles.equipeMember}>
      <Image src={image} alt={`Foto de ${name}`} width={400} height={400} />
      <p>{name}</p>
    </Link>
  );
}
