"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

import Aos from "aos";

import Image from "next/image";

import JS from "@/assets/Icons/javascript.svg";
import TS from "@/assets/Icons/typescript.svg";
import ReactIcon from "@/assets/Icons/react.svg";
import Tailwind from "@/assets/Icons/tailwind.svg";
import StyledComponents from "@/assets/Icons/styled-components.svg";

import NextJS from "@/assets/Icons/nextjs.svg";
import Prisma from "@/assets/Icons/prisma.svg";
import Drizzle from "@/assets/Icons/drizzle.svg";

import PostgreSQL from "@/assets/Icons/postgresql.svg";
import SQL from "@/assets/Icons/SQL.svg";

import Firebase from "@/assets/Icons/firebase.svg";
import Supabase from "@/assets/Icons/supabase.svg";

import Git from "@/assets/Icons/git.svg";
import Github from "@/assets/Icons/github.svg";

export default function Techs() {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    const getWindowWidth = () => setWindowWidth(window.innerWidth)

    getWindowWidth()
    Aos.init();
  }, []);

  return (
    <div className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-center justify-center border-primary border-r-8 clip-path:polygon(10%_0%,50%_0%,90%_50%,0%_50%) max-[850px]:px-4 max-[850px]:py-4 selection:bg-primary/10">
      <div className="w-full gap-x-5 gap-y-5 grid min-[410px]:grid-cols-2 min-[980px]:grid-cols-4">
        <div data-aos={"flip-left"} data-aos-delay={"300"} className="order-1">
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Linguagens
          </h1>
          <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <Image
              alt="JavaScript Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={JS}
            />
            <Image
              alt="TypeScript Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={TS}
            />
            <Image
              alt="SQL"
              width={50}
              height={50}
              className="h-10 w-10"
              src={SQL}
            />
            <Image
              alt="React Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={ReactIcon}
            />
            <Image
              alt="NextJS Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={NextJS}
            />
          </div>
        </div>
        <div data-aos={"flip-left"} data-aos-delay={(windowWidth < 980 && windowWidth > 410) ? "700": "500"} className="order-2 max-[980px]:order-3 max-[410px]:order-3">
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Estilização
          </h1>
          <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <Image
              alt="Styled-Components Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={StyledComponents}
            />
            <Image
              alt="Tailwind Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={Tailwind}
            />
          </div>
        </div>
        <div data-aos={"flip-left"} data-aos-delay={(windowWidth < 980 && windowWidth > 410) ? "500": "700"} className="order-3 max-[980px]:order-2 max-[410px]:order-2">
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            ORMs e BDs
          </h1>
          <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <Image
              alt="PostgreSQL Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={PostgreSQL}
            />
            <Image
              alt="Prisma Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={Prisma}
            />
            <Image
              alt="Drizzle Kit Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={Drizzle}
            />
            <Image
              alt="Supabase Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={Supabase}
            />
            <Image
              alt="Firebase Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={Firebase}
            />
          </div>
        </div>
        <div data-aos={"flip-left"} data-aos-delay={"900"} className="order-4">
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Versionamento
          </h1>
          <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <Image
              alt="Git Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={Git}
            />
            <Image
              alt="GitHub Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={Github}
            />
          </div>
        </div>
      </div>
    </div>
  );
}