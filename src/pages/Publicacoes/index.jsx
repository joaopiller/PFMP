import { IoSearch } from "react-icons/io5";
import publicacoes from "../../assets/publicacoes.jpg";
import publicacao from "../../assets/publicacao.jpg";
import PageBanner from "../../components/PageBanner";
import styles from "./styles.module.css";
import CardPublicacao from "../../components/CardPublicacao";

export default function Publicacoes() {
  return (
    <>
      <PageBanner image={publicacoes} title="Publicações" />
      <section className={styles.publicacoesContainer}>
        <div className={styles.searchContainer}>
          <input
            placeholder="Pesquisar..."
            className={styles.searchInput}
            type="text"
          />
          <button className={styles.searchButton}>
            <IoSearch color="#efefef" />
          </button>
        </div>
        <div className={styles.publicacoes}>
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
        </div>
      </section>
    </>
  );
}
