import SectionTitle from "../../components/SectionTitle";
import styles from "./styles.module.css";
import { MdLightbulbOutline, MdOutlineAttachMoney } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import CardAreaDeAtuacao from "./CardAreaDeAtuacao";

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

export default function AreasDeAtuacao() {
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
    <section className={styles.areasDeAtuacaoSection}>
      <div className={styles.areasDeAtuacaoContainer}>
        <SectionTitle lightTitle="Áreas de" boldTitle="Atuação" />
        <Slider {...settings}>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <MdLightbulbOutline color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <MdOutlineAttachMoney color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <MdLightbulbOutline color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <MdOutlineAttachMoney color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <MdLightbulbOutline color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <MdOutlineAttachMoney color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <MdLightbulbOutline color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <MdOutlineAttachMoney color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
        </Slider>
      </div>
    </section>
  );
}
