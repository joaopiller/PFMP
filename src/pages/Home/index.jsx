import HomeBanner from "../../components/HomeBanner";
import HomeEquipe from "../../components/HomeEquipe";
import HomePublicacoes from "../../components/HomePublicacoes";
import HomeQuemSomos from "../../components/HomeQuemSomos";
import NossosDiferenciais from "../../components/NossosDiferenciais";
import SectionTitle from "../../components/SectionTitle";
import styles from "./styles.module.css";
import {
  MdLightbulbOutline,
  MdOutlineAttachMoney,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Componentes de setas customizadas
const CustomPrevArrow = ({ onClick }) => (
  <button
    className={styles.customArrow + " " + styles.customPrevArrow}
    onClick={onClick}
  >
    <SlArrowLeft size={40} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className={styles.customArrow + " " + styles.customNextArrow}
    onClick={onClick}
  >
    <SlArrowRight size={40} />
  </button>
);

export default function Home() {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <HomeBanner />
      <section className={styles.areasDeAtuacaoSection}>
        <div className={styles.areasDeAtuacaoContainer}>
          <SectionTitle lightTitle="Áreas de" boldTitle="Atuação" />
          <Slider {...settings}>
            <div className={styles.areaDeAtuacaoCard}>
              <MdLightbulbOutline color="#db9f5d" size={90} />
              <h3>Direito Tributário</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi sequi natus nobis. Excepturi sequi natus nobis.
              </p>
            </div>
            <div className={styles.areaDeAtuacaoCard}>
              <MdOutlineAttachMoney color="#db9f5d" size={90} />
              <h3>Direito Empresarial</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi sequi natus nobis. Excepturi sequi natus nobis.
              </p>
            </div>
            <div className={styles.areaDeAtuacaoCard}>
              <MdLightbulbOutline color="#db9f5d" size={90} />
              <h3>Direito Civil</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi sequi natus nobis. Excepturi sequi natus nobis.
              </p>
            </div>
            <div className={styles.areaDeAtuacaoCard}>
              <MdOutlineAttachMoney color="#db9f5d" size={90} />
              <h3>Direito Trabalhista</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi sequi natus nobis. Excepturi sequi natus nobis.
              </p>
            </div>
            <div className={styles.areaDeAtuacaoCard}>
              <MdLightbulbOutline color="#db9f5d" size={90} />
              <h3>Direito Penal</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi sequi natus nobis. Excepturi sequi natus nobis.
              </p>
            </div>
            <div className={styles.areaDeAtuacaoCard}>
              <MdOutlineAttachMoney color="#db9f5d" size={90} />
              <h3>Direito Imobiliário</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi sequi natus nobis. Excepturi sequi natus nobis.
              </p>
            </div>
            <div className={styles.areaDeAtuacaoCard}>
              <MdLightbulbOutline color="#db9f5d" size={90} />
              <h3>Direito Previdenciário</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi sequi natus nobis. Excepturi sequi natus nobis.
              </p>
            </div>
            <div className={styles.areaDeAtuacaoCard}>
              <MdOutlineAttachMoney color="#db9f5d" size={90} />
              <h3>Direito Familiar</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi sequi natus nobis. Excepturi sequi natus nobis.
              </p>
            </div>
          </Slider>
        </div>
      </section>
      <HomeQuemSomos />
      <NossosDiferenciais />
      <HomeEquipe />
      <HomePublicacoes />
    </>
  );
}
