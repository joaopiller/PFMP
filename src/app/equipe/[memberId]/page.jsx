"use client";

import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import nossa_equipe from "@/assets/images/equipe_banner.jpg";
import styles from "./styles.module.css";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import equipeMembers from "@/data/equipeMembers.js";

const renderTextWithLinks = (textItem) => {
  if (typeof textItem === "string") return textItem;

  const { text, links } = textItem;
  if (!links || Object.keys(links).length === 0) return text;

  let renderedText = text;
  const parts = [];
  let lastIndex = 0;

  Object.entries(links).forEach(([linkText, url]) => {
    const index = renderedText.indexOf(linkText);
    if (index !== -1) {
      if (index > lastIndex)
        parts.push(renderedText.substring(lastIndex, index));

      parts.push(
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkDestaque}
        >
          {linkText}
        </a>
      );

      lastIndex = index + linkText.length;
    }
  });

  if (lastIndex < renderedText.length)
    parts.push(renderedText.substring(lastIndex));
  return parts.length > 1 ? parts : text;
};

export default function MembroDetalhes({ params }) {
  const { memberId } = params;
  const membro = equipeMembers.find((m) => m.id === memberId);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  if (!membro) {
    return (
      <main className={styles.membroNaoEncontrado}>
        <h1>Membro não encontrado 😢</h1>
      </main>
    );
  }

  const toggleAdditionalInfo = () => setShowAdditionalInfo((prev) => !prev);

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
                <FaPhoneAlt size={16} color="#db9f5d" />
                <span>{membro.phoneNumber}</span>
              </div>
              <div className={styles.membroDetalhesContactData}>
                <FaLinkedinIn size={16} color="#db9f5d" />
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

          <div className={styles.membroDetalhesFormacaoAtuacao}>
            <button
              className={styles.informacoesAdicionaisButton}
              onClick={toggleAdditionalInfo}
            >
              <span>{showAdditionalInfo ? "-" : "+"}</span>
              Informações Adicionais
            </button>
            {showAdditionalInfo && (
              <div className={styles.informacoesAdicionaisContent}>
                <ul>
                  {membro.additional.map((info, index) => (
                    <li key={index}>{renderTextWithLinks(info)}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
