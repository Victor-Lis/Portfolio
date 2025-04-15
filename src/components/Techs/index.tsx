"use client";

import React, { useEffect, useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./styles.css";

import Image from "next/image";

import JS from "../../../public/Icons/javascript.svg";
import TS from "../../../public/Icons/typescript.svg";
import ReactIcon from "../../../public/Icons/react.svg";
import ReactNativeIcon from "../../../public/Icons/react-native.svg";
import Tailwind from "../../../public/Icons/tailwind.svg";
import StyledComponents from "../../../public/Icons/styled-components.svg";

import NextJS from "../../../public/Icons/nextjs.svg";
import NextAuth from "../../../public/Icons/next-auth.png"

import Prisma from "../../../public/Icons/prisma.svg";
import Drizzle from "../../../public/Icons/drizzle.svg";

import PostgreSQL from "../../../public/Icons/postgresql.svg";
import SQL from "../../../public/Icons/SQL.svg";

import Firebase from "../../../public/Icons/firebase.svg";
import MongoDB from "../../../public/Icons/mongodb.svg";
import Supabase from "../../../public/Icons/supabase.svg";

import Git from "../../../public/Icons/git.svg";
import Github from "../../../public/Icons/github.svg";

export default function Techs() {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    const getWindowWidth = () => setWindowWidth(window.innerWidth)

    getWindowWidth()
  }, []);

  const isInterval = () => (windowWidth < 980 && windowWidth > 410)

  const intervals = ["300", "500", "700", "900", "1100"]

  function getInterval (): string{
    if(isInterval()){
      return intervals[2]
    }

    return intervals[4]
  }

  return (
    <div className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-center justify-center border-primary border-r-8 clip-path:polygon(10%_0%,50%_0%,90%_50%,0%_50%) max-[850px]:px-4 max-[850px]:py-4 selection:bg-primary/10">
      <div className="w-full gap-x-5 gap-y-10 grid min-[410px]:grid-cols-2 min-[980px]:grid-cols-5">
        <div data-aos={"flip-left"} data-aos-delay={intervals[0]} className="order-1">
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
              alt="React Native Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={ReactNativeIcon}
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
        <div data-aos={"flip-left"} data-aos-delay={intervals[1]} className="order-2 max-[980px]:order-3 max-[410px]:order-3">
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
        <div data-aos={"flip-left"} data-aos-delay={intervals[2]} className="order-3 max-[980px]:order-2 max-[410px]:order-2">
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Databases
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
            <Image
              alt="MongoDB Icon"
              width={50}
              height={50}
              className="h-10 w-10"
              src={MongoDB}
            />
          </div>
        </div>
        <div data-aos={"flip-left"} data-aos-delay={intervals[3]} className="order-4">
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Auth e ORMs
          </h1>
          <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <Image
              alt="NextAuth Icon"
              width={50}
              height={50}
              className="h-10 w-[2.375rem] mx-[0.0075]"
              src={NextAuth}
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
          </div>
        </div>
        <div data-aos={"flip-left"} data-aos-delay={getInterval()} className="order-5">
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