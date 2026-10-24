import Link from "next/link";
import styles from "./styles.module.css";

export default function NotFoundMessage({ message, linkHref, linkLabel }) {
  return (
    <section className={styles.notFound}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>{message}</p>
      <Link href={linkHref} className={styles.button}>
        {linkLabel}
      </Link>
    </section>
  );
}
