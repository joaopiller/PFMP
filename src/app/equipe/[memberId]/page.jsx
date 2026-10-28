import { notFound } from "next/navigation";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import nossa_equipe from "@/assets/images/equipe_banner.jpeg";
import styles from "./styles.module.css";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import equipeMembers from "@/data/equipeMembers";
import { buildMetadata, toOpenGraphImage } from "@/lib/metadata";
import AdditionalInfo from "./AdditionalInfo";

const getMember = (memberId) =>
  equipeMembers.find((member) => member.id === memberId);

export function generateStaticParams() {
  return equipeMembers.map((member) => ({ memberId: member.id }));
}

export async function generateMetadata({ params }) {
  const { memberId } = await params;
  const membro = getMember(memberId);

  if (!membro) {
    return { title: "Membro não encontrado", robots: { index: false } };
  }

  return buildMetadata({
    title: membro.name,
    description: `${membro.name}, ${membro.role.toLowerCase()} do PFMP Advogados. Atuação em ${membro.areas
      .slice(0, 3)
      .join(", ")}.`,
    path: `/equipe/${membro.id}`,
    openGraph: { images: [toOpenGraphImage(membro.image, membro.name)] },
  });
}

export default async function MembroDetalhes({ params }) {
  const { memberId } = await params;
  const membro = getMember(memberId);

  if (!membro) {
    notFound();
  }

  return (
    <div>
      <PageBanner image={nossa_equipe} title="Equipe" />
      <section className={styles.membroDetalhesContent}>
        <div className={styles.membroDetalhesCard}>
          <Image
            className={styles.membroDetalhesImage}
            src={membro.image}
            alt={`Foto de ${membro.name}`}
            width={400}
            height={400}
            priority
          />
          <div className={styles.membroDetalhesContact}>
            <div className={styles.membroDetalhesContactInfo}>
              <div className={styles.membroDetalhesContactData}>
                <FaPhoneAlt size={16} color="#db9f5d" aria-hidden="true" />
                <a href={`tel:+55${membro.phoneNumber.replace(/\D/g, "")}`}>
                  {membro.phoneNumber}
                </a>
              </div>
              <div className={styles.membroDetalhesContactData}>
                <FaLinkedinIn size={16} color="#db9f5d" aria-hidden="true" />
                <a
                  href={membro.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Perfil no LinkedIn
                </a>
              </div>
            </div>
            <div className={styles.membroDetalhesIdiomas}>
              <h3>Idiomas</h3>
              <ul>
                {membro.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.membroDetalhesInfo}>
          <div className={styles.membroDetalhesInfoHeader}>
            <h2>{membro.name}</h2>
            <p>{membro.role}</p>
          </div>

          <div className={styles.membroDetalhesFormacaoAtuacao}>
            <h3>Formação Acadêmica</h3>
            <ul>
              {membro.academic.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.membroDetalhesFormacaoAtuacao}>
            <h3>Áreas de Atuação</h3>
            <ul>
              {membro.areas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>

          <AdditionalInfo items={membro.additional} />
        </div>
      </section>
    </div>
  );
}
