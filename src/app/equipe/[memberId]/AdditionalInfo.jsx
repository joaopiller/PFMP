"use client";

import { useId, useState } from "react";
import styles from "./styles.module.css";

// Substitui os trechos cadastrados em `links` por âncoras externas.
function renderTextWithLinks(item) {
  if (typeof item === "string") return item;

  const { text, links } = item;
  if (!links || Object.keys(links).length === 0) return text;

  const parts = [];
  let lastIndex = 0;

  Object.entries(links).forEach(([linkText, url]) => {
    const index = text.indexOf(linkText, lastIndex);
    if (index === -1) return;

    if (index > lastIndex) parts.push(text.substring(lastIndex, index));
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
  });

  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return parts;
}

export default function AdditionalInfo({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={styles.membroDetalhesFormacaoAtuacao}>
      <button
        type="button"
        className={styles.informacoesAdicionaisButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
        Informações Adicionais
      </button>
      {isOpen && (
        <div id={contentId} className={styles.informacoesAdicionaisContent}>
          <ul>
            {items.map((info, index) => (
              <li key={index}>{renderTextWithLinks(info)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
