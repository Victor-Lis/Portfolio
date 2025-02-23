"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import type { ProjectType } from "@/@types/project";
import { useProjectStore } from "@/data/projectManager";
import ProjectSlide from "../ProjectSlide";

export default function ProjectSlider() {
  const { projectsByTech } = useProjectStore();

  const getSlidesPerView = () => {
    return (window.innerWidth > 1280) ? 3 : "auto"
  }

  return (
    <div className="triple-slider w-full mx-auto mt-12">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={getSlidesPerView()} // Exibe 3 slides ao lado do outro
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {projectsByTech.map((project, index) => (
          <SwiperSlide
            key={`${index} ${project.name}`}
            className="swiper-slide"
          >
            <ProjectSlide project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
