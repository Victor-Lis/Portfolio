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
  const [slidesPerView, setSlidesPerView] = useState<number>(0);

  useEffect(() => {
    const getSlidesPerView = () =>
      window.innerWidth > 1350
        ? 4
        : window.innerWidth > 915
        ? 3
        : window.innerWidth > 650
        ? 2
        : 1;
    setSlidesPerView(getSlidesPerView());

    Aos.init();
  }, []);

  return (
    <div className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-center justify-center border-primary border-r-8 clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%) max-[1000px]:px-4 max-[1000px]:py-4">
      <Swiper
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        navigation={{
          enabled: false,
        }}
        slidesPerView={slidesPerView}
        modules={[Autoplay, Navigation]}
        className="w-full"
        data-aos={"flip-up"}
      >
        <SwiperSlide>
          <Image
            alt="JavaScript Icon"
            width={100}
            height={100}
            className="h-20 w-20"
            src={JS}
          />
          <h2 className="text-3xl text-tertiary ml-2">JavaScript</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="TypeScript Icon"
            width={100}
            height={100}
            className="h-20 w-20"
            src={TS}
          />
          <h2 className="text-3xl text-tertiary ml-2">TypeScript</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="React Icon"
            width={100}
            height={100}
            className="h-20 w-20"
            src={ReactIcon}
          />
          <h2 className="text-3xl text-tertiary ml-2">React</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Styled Components Icon"
            width={100}
            height={100}
            className="h-20 w-20"
            src={StyledComponents}
          />
          <h2 className="text-3xl text-tertiary ml-2 text-left">
            Styled
            <br />
            Components
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Tailwind Icon"
            width={100}
            height={100}
            className="h-20 w-20"
            src={Tailwind}
          />
          <h2 className="text-3xl text-tertiary ml-2">Tailwind</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="NextJS Icon"
            width={100}
            height={100}
            className="h-20 w-20"
            src={NextJS}
          />
          <h2 className="text-3xl text-tertiary ml-2">NextJS</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Prisma Icon"
            width={100}
            height={100}
            className="h-20 w-20"
            src={Prisma}
          />
          <h2 className="text-3xl text-tertiary ml-2">Prisma ORM</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Drizzle Icon"
            width={100}
            height={100}
            className="h-20 w-20"
            src={Drizzle}
          />
          <h2 className="text-3xl text-tertiary ml-2">Drizzle ORM</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="PostgreSQL"
            width={100}
            height={100}
            className="h-20 w-20"
            src={PostgreSQL}
          />
          <h2 className="text-3xl text-tertiary ml-2">PostgreSQL</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="SQL"
            width={100}
            height={100}
            className="h-20 w-20"
            src={SQL}
          />
          <h2 className="text-3xl text-tertiary ml-2">SQL</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Firebase"
            width={100}
            height={100}
            className="h-20 w-20"
            src={Firebase}
          />
          <h2 className="text-3xl text-tertiary ml-2">Firebase</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Supabase"
            width={100}
            height={100}
            className="h-20 w-20"
            src={Supabase}
          />
          <h2 className="text-3xl text-tertiary ml-2">Supabase</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Git"
            width={100}
            height={100}
            className="h-20 w-20"
            src={Git}
          />
          <h2 className="text-3xl text-tertiary ml-2">Git</h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="GitHub"
            width={100}
            height={100}
            className="h-20 w-20"
            src={Github}
          />
          <h2 className="text-3xl text-tertiary ml-2">GitHub</h2>
        </SwiperSlide>
      </Swiper>
      <div className="w-full gap-x-5 gap-y-5 grid min-[500px]:grid-cols-2 min-[980px]:grid-cols-4 mt-5 min-[650px]:mt-10">
        <div>
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Linguagens
          </h1>
          <div className="w-8/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
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
        <div>
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Estilização
          </h1>
          <div className="w-8/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
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
        <div>
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            ORMs e BDs
          </h1>
          <div className="w-8/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
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
        <div>
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Versionamento
          </h1>
          <div className="w-8/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
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
