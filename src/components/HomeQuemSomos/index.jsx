import styles from "./styles.module.css";
import time from "../../assets/time.jpg";
import ExpandButton from "../ExpandButton";
import { useNavigate } from "react-router-dom";

export default function HomeQuemSomos() {
  const navigate = useNavigate();
  const handleExpandClick = () => {
    navigate("/quem-somos");
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.quemSomosHome}>
      <div className={styles.quemSomosInfos}>
        <h2 className={styles.quemSomosTitle}>
          Escritório de Advocacia Tributária Piller, Fonseca, Marchesi e Perim
        </h2>
        <p className={styles.quemSomosText}>
          <span>
            Maximus id maximus Sed Lorem placerat commodo at Cras tincidunt
            Morbi nec eu Cras malesuada id in commodo vel elit eget sapien
            Quisque venenatis lacus, luctus non, tempor massa quam enim.
            elementum turpis placerat. tempor eget tempor massa sed commodo
            Lorem Sed tortor. Lacus, scelerisque cursus vel lacus elit Quisque
            Cras Donec hendrerit sodales. urna.
          </span>
          <span>
            Lacus, scelerisque cursus vel lacus elit Quisque Cras Donec
            hendrerit sodales. urna. nec ultrices dui. Consectetur ex
            consectetur Nunc placerat non, vitae id ipsum volutpat diam
            placerat.
          </span>
        </p>
        <ExpandButton onClick={handleExpandClick} text={"Saiba mais"}/>
      </div>
      <img className={styles.quemSomosImage} src={time} alt="Imagem" />
    </section>
  );
}
