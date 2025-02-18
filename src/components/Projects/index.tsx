"use client"
import { useProjectStore } from "@/data/projectManager";
import React, { useEffect, useRef, useState } from "react";
import Year from "./components/Year";

export default function Projects() {
  const { getYears } = useProjectStore()
  return (
    <div className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-start justify-start border-primary border-r-8 clip-path:polygon(10%_0%,50%_0%,90%_50%,0%_50%) max-[850px]:px-4 max-[850px]:py-4 selection:bg-primary/10">
      <div className="w-full flex">
        <div className="flex flex-col justify-start items-start gap-y-3 max-[500px]:pr-2 pr-12" data-aos="fade-right">
          <h1
            className={
              "max-[700px]:text-6xl max-[500px]:text-4xl uppercase text-primary font-bold text-8xl bebas-neue"
            }
          >
            Projetos
          </h1>
          {getYears().map((year) => <Year year={year} key={year}/>)}
        </div>
        <div className="flex flex-col justify-start items-start gap-y-3 max-[500px]:pr-2 pr-12" data-aos="fade-right">
        </div>
      </div>
    </div>
  );
}