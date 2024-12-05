"use client";

import React, { useEffect, useRef, useState } from "react";

import Aos from "aos";

import Image from "next/image";

export default function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-start justify-start border-primary border-r-8 clip-path:polygon(10%_0%,50%_0%,90%_50%,0%_50%) max-[850px]:px-4 max-[850px]:py-4 selection:bg-primary/10">
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify-start items-start gap-y-3">
          <h1
            className={
              "max-[700px]:text-6xl uppercase text-primary font-bold text-8xl bebas-neue"
            }
          >
            Projetos
          </h1>
          <h2 className="text-tertiary border-b-2 border-primary text-4xl cursor-pointer hover:bg-primary/5 pl-1.5 pr-3.5 mb-2">
            2024
          </h2>
          <h2 className="text-tertiary border-b-2 border-primary text-4xl cursor-pointer hover:bg-primary/5 pl-1.5 pr-3.5 mb-2">
            2023
          </h2>
          <h2 className="text-tertiary border-b-2 border-primary text-4xl cursor-pointer hover:bg-primary/5 pl-1.5 pr-3.5">
            2022
          </h2>
        </div>
        <div className="flex-1 min-h-full ml-4 bg-quaternary">
          
        </div>
      </div>
    </div>
  );
}
