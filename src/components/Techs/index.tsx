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
import Drizzle from "@/assets/Icons/Drizzle.svg";

import PostgreSQL from '@/assets/Icons/postgresql.svg'
import SQL from '@/assets/Icons/sql.svg'

import Git from '@/assets/Icons/git.svg'
import Github from '@/assets/Icons/github.svg'

export default function Techs() {

  const getSlidesPerView = () => window.innerWidth > 1350? 4 : window.innerWidth > 915 ? 3 : window.innerWidth > 650 ? 2 : 1

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-center justify-center border-primary border-r-8 cursor-grab clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)"
    >
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          enabled: false,
        }}
        slidesPerView={getSlidesPerView()}
        modules={[Autoplay, Navigation]}
        className="w-full h-full"
        data-aos={"fade-right"}
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
            <br/>
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
    </div>
  );
}
