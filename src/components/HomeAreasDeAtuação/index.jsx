import SectionTitle from "../SectionTitle";
import styles from "./styles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import CardAreaDeAtuacao from "../CardAreaDeAtuacao";
import areasDeAtuacaoData from "../../data/areasDeAtuacao.js";

const CustomPrevArrow = ({ onClick }) => (
  <button
    className={styles.customArrow + " " + styles.customPrevArrow}
    onClick={onClick}
  >
    <SlArrowLeft size={36} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className={styles.customArrow + " " + styles.customNextArrow}
    onClick={onClick}
  >
    <SlArrowRight size={36} />
  </button>
);

export default function HomeAreasDeAtuacao({ whiteBackground = false }) {
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
    <section
      className={styles.areasDeAtuacaoSection}
      style={{ backgroundColor: whiteBackground ? "#efefef" : "#e8e8e8" }}
    >
      <div className={styles.areasDeAtuacaoContainer}>
        <SectionTitle lightTitle="Áreas de" boldTitle="Atuação" />
        <div className={styles.areasDeAtuacaoSlider}>
          <Slider {...settings}>
            {areasDeAtuacaoData.map((area) => (
              <CardAreaDeAtuacao
                key={area.id}
                title={area.name}
                description={area.description}
              >
                <area.icon color="#db9f5d" size={85} />
              </CardAreaDeAtuacao>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
