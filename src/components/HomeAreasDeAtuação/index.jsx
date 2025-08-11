import SectionTitle from "../SectionTitle";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import areasDeAtuacao from "../../data/areasDeAtuacao";
import CardAreaDeAtuacao from "../CardAreaDeAtuacao";

export default function HomeAreasDeAtuacao({ whiteBackground = false }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };
  return (
    <section
      className={styles.areasDeAtuacaoSection}
      style={{ backgroundColor: whiteBackground ? "#efefef" : "#e8e8e8" }}
    >
      <div className={styles.areasDeAtuacaoContainer}>
        <SectionTitle lightTitle="Áreas de" boldTitle="Atuação" />

        {/* Setas Customizadas */}
        <button className={styles.customArrowPrev} onClick={goPrev}>
          <IoChevronBack size={28} />
        </button>
        <button className={styles.customArrowNext} onClick={goNext}>
          <IoChevronForward size={28} />
        </button>

        <div className={styles.areasDeAtuacaoSlider}>
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[]}
            loop
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides={true}
            watchOverflow={true}
            breakpoints={{
              780: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 16,
                centeredSlides: true,
              },
              781: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
                centeredSlides: false,
              },
              1185: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
                centeredSlides: false,
              },
              1501: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
                centeredSlides: false,
              },
            }}
          >
            {areasDeAtuacao.map((area) => (
              <SwiperSlide key={area.name}>
                <CardAreaDeAtuacao
                  margin
                  key={area.id}
                  title={area.name}
                  description={area.description}
                >
                  <area.icon color="#db9f5d" size={85} />
                </CardAreaDeAtuacao>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
