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
      // window.innerWidth > 1350
      //   ? 4
      //   :
      window.innerWidth > 915 ? 3 : window.innerWidth > 650 ? 2 : 1;
    setSlidesPerView(getSlidesPerView());

    Aos.init();
  }, []);

  return (
    <div className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-center justify-center border-primary border-r-8 clip-path:polygon(10%_0%,50%_0%,90%_50%,0%_50%) max-[850px]:px-4 max-[850px]:py-4">
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
        <SwiperSlide className="min-h-20">
          <Image
            alt="JavaScript Icon"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={JS}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            JavaScript
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="TypeScript Icon"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={TS}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            TypeScript
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="React Icon"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={ReactIcon}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            React
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="Styled Components Icon"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={StyledComponents}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl text-left">
            Styled
            <br />
            Components
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="Tailwind Icon"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={Tailwind}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            Tailwind
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="NextJS Icon"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={NextJS}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            NextJS
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="Prisma Icon"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={Prisma}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            Prisma ORM
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="Drizzle Icon"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={Drizzle}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            Drizzle ORM
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="PostgreSQL"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={PostgreSQL}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            PostgreSQL
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="SQL"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={SQL}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            SQL
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="Firebase"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={Firebase}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            Firebase
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="Supabase"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={Supabase}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            Supabase
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="Git"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={Git}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            Git
          </h2>
        </SwiperSlide>
        <SwiperSlide className="min-h-20">
          <Image
            alt="GitHub"
            width={50}
            height={50}
            className="w-16 max-[500px]:w-14"
            src={Github}
          />
          <h2 className="text-3xl text-tertiary ml-2 max-[500px]:text-xl">
            GitHub
          </h2>
        </SwiperSlide>
      </Swiper>
      <div className="w-full gap-x-5 gap-y-5 grid min-[500px]:grid-cols-2 min-[980px]:grid-cols-4 mt-5 min-[650px]:mt-9 min-[1000px]:mt-12">
        <div data-aos={"flip-up"} data-aos-delay={"300"}>
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
        <div data-aos={"flip-up"} data-aos-delay={"300"}>
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
        <div data-aos={"flip-up"} data-aos-delay={"300"}>
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
        <div data-aos={"flip-up"} data-aos-delay={"300"}>
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
