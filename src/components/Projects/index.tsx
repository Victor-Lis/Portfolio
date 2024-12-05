"use client";

import React, { useEffect, useRef, useState } from "react";

import Aos from "aos";

import Image from "next/image";

import EtecChamados from "@/assets/Projects/Etec Chamados.png";

import TS from "@/assets/Icons/typescript.svg";
import NextJS from "@/assets/Icons/nextjs.svg";
import Firebase from "@/assets/Icons/firebase.svg";

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
        <div className="flex-1 grid grid-cols-5 justify-items-end ml-8 gap-x-4 gap-y-8">
          <a 
            target="_blank"
            rel="noreferrer"
            className="max-h-40 max-w-44 flex flex-col justify-center items-center bg-primary/80 p-2 rounded selection:bg-secondary/10"
            href="https://github.com/Victor-Lis/Etec-Chamados-with-NextJS"  
          >
            <h2 className="text-3xl text-center"><strong className="uppercase">Etec</strong> <br/> Chamados</h2>
            <div className="w-full flex justify-center items-center gap-x-2 mt-5">
              <Image
                alt="TypeScript Icon"
                width={50}
                height={50}
                className="h-8 w-8"
                src={TS}
              />
              <Image
                alt="NextJS Icon"
                width={50}
                height={50}
                className="h-8 w-8"
                src={NextJS}
              />
              <Image
                alt="Firebase Icon"
                width={50}
                height={50}
                className="h-8 w-8"
                src={Firebase}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
