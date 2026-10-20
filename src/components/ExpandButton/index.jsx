import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.css";

// Com `href` renderiza um link de navegação; sem ele, um botão comum.
export default function ExpandButton({ text, href, onClick }) {
  const content = (
    <>
      <span className={styles.buttonCircle} aria-hidden="true">
        <IoIosArrowForward size={20} />
      </span>
      <span className={styles.buttonText}>{text}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles.expandButton}>
        {content}
      </Link>
    );
  }

  return (
    <button className={styles.expandButton} type="button" onClick={onClick}>
      {content}
    </button>
  );
}
