"use client";

import { IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.css";

export default function ExpandButton({ text, onClick }) {
  return (
    <button className={styles.expandButton} type="button" onClick={onClick}>
      <span className={styles.buttonCircle}>
        <IoIosArrowForward size={20} />
      </span>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}
