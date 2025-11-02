"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SectionTitle from "@/components/SectionTitle";
import CardAreaDeAtuacao from "@/components/CardAreaDeAtuacao";
import areasDeAtuacao from "@/data/areasDeAtuacao";
import styles from "./styles.module.css";

export default function HomeAreasDeAtuacao({ whiteBackground = false }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth <= 834;
    setIsMobile(checkMobile());

    const handleResize = () => {
      const mobile = checkMobile();
      setIsMobile(mobile);

      if (swiperInstance) {
        if (mobile) swiperInstance.autoplay.start();
        else swiperInstance.autoplay.stop();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance]);

  useEffect(() => {
    if (!swiperInstance) return;
    if (isMobile) {
      swiperInstance.params.autoplay.delay = 5000;
      swiperInstance.params.autoplay.disableOnInteraction = false;
      swiperInstance.autoplay.start();
    } else {
      swiperInstance.autoplay.stop();
    }
  }, [swiperInstance, isMobile]);

  const goNext = () => swiperInstance?.slideNext();
  const goPrev = () => swiperInstance?.slidePrev();

  return (
    <section
      className={styles.areasDeAtuacaoSection}
      style={{ backgroundColor: whiteBackground ? "#efefef" : "#e8e8e8" }}
    >
      <div className={styles.areasDeAtuacaoContainer}>
        <SectionTitle lightTitle="Áreas de" boldTitle="Atuação" />
        <div className={styles.carouselWrapper}>
          <button className={styles.customArrowPrev} onClick={goPrev}>
            <SlArrowLeft size={35} />
          </button>
          <button className={styles.customArrowNext} onClick={goNext}>
            <SlArrowRight size={35} />
          </button>

          <div className={styles.areasDeAtuacaoSlider}>
            <Swiper
              onSwiper={setSwiperInstance}
              modules={[Autoplay]}
              loop
              autoplay={false}
              speed={850}
              spaceBetween={16}
              slidesPerView={1}
              slidesPerGroup={1}
              centeredSlides
              breakpoints={{
                834: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                  centeredSlides: true,
                },
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
                <SwiperSlide key={area.id}>
                  <CardAreaDeAtuacao
                    margin
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
      </div>
    </section>
  );
}
