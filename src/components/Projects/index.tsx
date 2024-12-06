"use client";

import React, { useEffect, useRef, useState } from "react";

import Aos from "aos";

import Image from "next/image";
import ProjectsGrid from "./components/ProjectsGrid";

export default function Projects() {
  const [year, setYear] = useState<2022 | 2023 | 2024>(2024)
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-start justify-start border-primary border-r-8 clip-path:polygon(10%_0%,50%_0%,90%_50%,0%_50%) max-[850px]:px-4 max-[850px]:py-4 selection:bg-primary/10">
      <div className="w-full flex">
        <div className="flex flex-col justify-start items-start gap-y-3 pr-12" data-aos="fade-right">
          <h1
            className={
              "max-[700px]:text-6xl uppercase text-primary font-bold text-8xl bebas-neue"
            }
          >
            Projetos
          </h1>
          <h2 className={year === 2024 ? "text-tertiary border-b-2 border-primary text-4xl bg-primary/5 pl-1.5 pr-3.5 mb-2" : "text-tertiary border-b-2 border-primary text-4xl cursor-pointer hover:bg-primary/5 hover:duration-150 pl-1.5 pr-3.5 mb-2 duration-150"} onKeyDown={() => setYear(2024)} onClick={() => setYear(2024)}>
            2024
          </h2>
          <h2 className={year === 2023 ? "text-tertiary border-b-2 border-primary text-4xl bg-primary/5 pl-1.5 pr-3.5 mb-2" : "text-tertiary border-b-2 border-primary text-4xl cursor-pointer hover:bg-primary/5 hover:duration-150 pl-1.5 pr-3.5 mb-2 duration-150"} onKeyDown={() => setYear(2024)} onClick={() => setYear(2023)}>
            2023
          </h2>
          <h2 className={year === 2022 ? "text-tertiary border-b-2 border-primary text-4xl bg-primary/5 pl-1.5 pr-3.5 mb-2" : "text-tertiary border-b-2 border-primary text-4xl cursor-pointer hover:bg-primary/5 hover:duration-150 pl-1.5 pr-3.5 mb-2 duration-150"} onKeyDown={() => setYear(2024)} onClick={() => setYear(2022)}>
            2022
          </h2>
        </div>
        <ProjectsGrid year={year}/>
      </div>
    </div>
  );
}
