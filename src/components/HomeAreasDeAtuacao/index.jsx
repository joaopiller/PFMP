"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionTitle from "@/components/SectionTitle";
import CardAreaDeAtuacao from "@/components/CardAreaDeAtuacao";
import areasDeAtuacao from "@/data/areasDeAtuacao";
import styles from "./styles.module.css";

export default function HomeAreasDeAtuacao() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Respeita a preferência do sistema por menos movimento.
  useEffect(() => {
    if (!swiperInstance) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swiperInstance.autoplay.stop();
    }
  }, [swiperInstance]);

  const goNext = () => swiperInstance?.slideNext();
  const goPrev = () => swiperInstance?.slidePrev();

  return (
    <section className={styles.areasDeAtuacaoSection}>
      <div className={styles.areasDeAtuacaoContainer}>
        <SectionTitle lightTitle="Áreas de" boldTitle="Atuação" />
        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={goPrev}
            aria-label="Área anterior"
          >
            <IoIosArrowBack size={22} />
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={goNext}
            aria-label="Próxima área"
          >
            <IoIosArrowForward size={22} />
          </button>

          <div className={styles.areasDeAtuacaoSlider}>
            <Swiper
              onSwiper={setSwiperInstance}
              modules={[A11y, Autoplay, Pagination]}
              loop
              speed={700}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              a11y={{
                prevSlideMessage: "Área anterior",
                nextSlideMessage: "Próxima área",
                paginationBulletMessage: "Ir para o grupo {{index}}",
              }}
              spaceBetween={16}
              slidesPerView={1}
              slidesPerGroup={1}
              centeredSlides
              breakpoints={{
                835: {
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
                    title={area.name}
                    description={area.description}
                  >
                    <area.icon color="#db9f5d" size={52} />
                  </CardAreaDeAtuacao>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
