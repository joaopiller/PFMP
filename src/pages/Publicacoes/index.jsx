import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import publicacoes from "../../assets/images/banner_publicacoes.jpg";
import PageBanner from "../../components/PageBanner";
import styles from "./styles.module.css";
import CardPublicacao from "../../components/CardPublicacao";
import posts from "../../data/posts.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const POSTS_PER_PAGE = 9;

export default function Publicacoes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = () => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
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
    <>
      <PageBanner image={publicacoes} title="Publicações" />
      <section className={styles.publicacoesContainer}>
        <div className={styles.searchContainer}>
          <input
            placeholder="Pesquisar..."
            className={styles.searchInput}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            <IoSearch color="#efefef" />
          </button>
        </div>

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

        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageArrow}
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
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageArrow}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </section>
    </>
  );
}
