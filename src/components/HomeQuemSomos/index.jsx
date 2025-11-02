"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ExpandButton from "../ExpandButton";
import homeQuemSomos from "@/assets/images/home_quem_somos.jpeg";
import styles from "./styles.module.css";

export default function HomeQuemSomos() {
  const router = useRouter();

  const handleExpandClick = () => {
    router.push("/quem-somos");
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.quemSomosHome}>
      <div className={styles.quemSomosInfos}>
        <h2 className={styles.quemSomosTitle}>Somos o PFMP Advogados</h2>
        <p className={styles.quemSomosText}>
          <span>
            Um escritório digital com atuação nacional e foco em Direito
            Tributário. Atendemos empresas, profissionais liberais e pessoas
            físicas com soluções jurídicas claras, acessíveis e eficientes.
            Tributário de verdade para gente de verdade.
          </span>
        </p>
        <ExpandButton onClick={handleExpandClick} text="Saiba mais" />
      </div>
      <Image
        className={styles.quemSomosImage}
        src={homeQuemSomos}
        alt="Equipe PFMP Advogados"
        width={1200}
        height={800}
        priority
      />
    </section>
  );
}
