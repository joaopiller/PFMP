"use client";

import { useMemo, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import CardPublicacao from "@/components/CardPublicacao";

import styles from "./styles.module.css";

const POSTS_PER_PAGE = 9;

// Permite buscar "tributacao" e encontrar "Tributação".
const normalize = (text = "") =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export default function PublicacoesClient({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef(null);

  const filteredPosts = useMemo(() => {
    const query = normalize(searchTerm.trim());
    if (!query) return posts;

    return posts.filter((post) =>
      normalize(`${post.title} ${post.description}`).includes(query)
    );
  }, [posts, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 3)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <section className={styles.publicacoesContainer} ref={listRef}>
      <form
        role="search"
        className={styles.searchContainer}
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="busca-publicacoes" className="sr-only">
          Pesquisar publicações
        </label>
        <input
          id="busca-publicacoes"
          placeholder="Pesquisar..."
          className={styles.searchInput}
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className={styles.searchButton}
          aria-label="Pesquisar"
        >
          <IoSearch color="#efefef" />
        </button>
      </form>

      {filteredPosts.length === 0 ? (
        <p className={styles.emptyState} role="status">
          Nenhuma publicação encontrada para “{searchTerm.trim()}”.
        </p>
      ) : (
        <div className={styles.publicacoes}>
          {currentPosts.map((post) => (
            <CardPublicacao
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <nav className={styles.pagination} aria-label="Paginação">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageArrow}
            aria-label="Página anterior"
          >
            <IoIosArrowBack />
          </button>

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`${styles.pageNumber} ${
                currentPage === pageNum ? styles.activePage : ""
              }`}
              aria-label={`Página ${pageNum}`}
              aria-current={currentPage === pageNum ? "page" : undefined}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageArrow}
            aria-label="Próxima página"
          >
            <IoIosArrowForward />
          </button>
        </nav>
      )}
    </section>
  );
}
