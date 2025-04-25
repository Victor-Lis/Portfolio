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
    return window.innerWidth > 1280 ? 3 : "auto";
  };

  return (
    <div
      id="projects"
      className="w-full min-h-section-common bg-secondary px-14 py-10 flex flex-col items-center justify-between border-primary border-r-8 max-[1000px]:px-4 max-[1000px]:py-4 selection:bg-primary/10"
    >
      <h1 className="uppercase text-primary text-8xl bebas-neue max-[700px]:text-6xl">
        Projetos
      </h1>
      <div className="mt-10 grid gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsByTech.map((project, index) => (
          <ProjectSlide key={`${index} ${project.name}`} project={project} />
        ))}
      </div>
    </div>
  );
}
