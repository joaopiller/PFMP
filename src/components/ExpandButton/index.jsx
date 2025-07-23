import { IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.css";

export default function ExpandButton({text}) {
  return (
    <button className={styles.expandButton}>
      <span className={styles.buttonCircle}>
        <IoIosArrowForward size={20} />
      </span>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}
