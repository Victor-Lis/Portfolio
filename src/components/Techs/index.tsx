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
import ShadcnUI from "../../../public/Icons/shadcn.svg";
import StyledComponents from "../../../public/Icons/styled-components.svg";

import NextJS from "../../../public/Icons/nextjs.svg";
import NextAuth from "../../../public/Icons/next-auth.png";

import Prisma from "../../../public/Icons/prisma.svg";
import Drizzle from "../../../public/Icons/drizzle.svg";

import PostgreSQL from "../../../public/Icons/postgresql.svg";
import SQL from "../../../public/Icons/SQL.svg";

import Firebase from "../../../public/Icons/firebase.svg";
import MongoDB from "../../../public/Icons/mongodb.svg";
import Supabase from "../../../public/Icons/supabase.svg";

import Git from "../../../public/Icons/git.svg";
import Github from "../../../public/Icons/github.svg";
import TechCard from "./components/TechCard";

export default function Techs() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const getWindowWidth = () => setWindowWidth(window.innerWidth);

    getWindowWidth();
  }, []);

  const isInterval = () => windowWidth < 980 && windowWidth > 410;

  const intervals = ["300", "500", "700", "900", "1100"];

  function getInterval(): string {
    if (isInterval()) {
      return intervals[2];
    }

    return intervals[4];
  }

  return (
    <div
      id="techs"
      className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-center justify-center border-primary border-r-8 clip-path:polygon(10%_0%,50%_0%,90%_50%,0%_50%) max-[850px]:px-4 max-[850px]:py-4 selection:bg-primary/10"
    >
      <div className="w-full gap-x-5 gap-y-10 grid min-[410px]:grid-cols-2 min-[980px]:grid-cols-5">
        <div
          data-aos={"flip-left"}
          data-aos-delay={intervals[0]}
          className="order-1"
        >
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Linguagens
          </h1>
            <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <TechCard
              alt="JavaScript Icon"
              src={"/Icons/javascript.svg"}
              description="JavaScript is a versatile language used for web development, server-side applications, and more."
            />
            <TechCard
              alt="TypeScript Icon"
              src={"/Icons/typescript.svg"}
              description="TypeScript is a superset of JS that adds static typing, enhancing code quality and maintainability."
            />
            <TechCard
              alt="SQL Icon"
              src={"/Icons/SQL.svg"}
              description="SQL is a standard language for managing and manipulating relational databases."
            />
            <TechCard
              alt="React Icon"
              src={"/Icons/react.svg"}
              description="ReactJS is a popular JavaScript library for building user interfaces, focusing on component-based architecture and efficient rendering."
            />
            <TechCard
              alt="React Native Icon"
              src={"/Icons/react-native.svg"}
              description="RN is a framework for building mobile apps using React, allowing code sharing between platforms."
            />
            <TechCard
              alt="NextJS Icon"
              src={"/Icons/nextjs.svg"}
              description="Next.js is a React framework for building fast, server-rendered web applications with ease."
            />
            </div>
        </div>
        <div
          data-aos={"flip-left"}
          data-aos-delay={intervals[1]}
          className="order-2 max-[980px]:order-3 max-[410px]:order-3"
        >
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Estilização
          </h1>
            <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <TechCard
              alt="Styled-Components Icon"
              src={"/Icons/styled-components.svg"}
              description="Styled-Components is a library for styling React components using tagged template literals."
            />
            <TechCard
              alt="Tailwind Icon"
              src={"/Icons/tailwind.svg"}
              description="Tailwind CSS is a utility-first CSS framework for rapidly building custom designs."
            />
            <TechCard
              alt="ShadcnUI Icon"
              src={"/Icons/shadcn.svg"}
              description="ShadcnUI is a modern UI library for building accessible and customizable components."
              className="mt-0.5 w-9 h-9 rounded-full"
            />
            </div>
        </div>
        <div
          data-aos={"flip-left"}
          data-aos-delay={intervals[2]}
          className="order-3 max-[980px]:order-2 max-[410px]:order-2"
        >
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Databases
          </h1>
            <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <TechCard
              alt="PostgreSQL Icon"
              src={"/Icons/postgresql.svg"}
              description="PostgreSQL is a powerful, open-source object-relational database system known for its reliability and feature set."
            />
            <TechCard
              alt="Supabase Icon"
              src={"/Icons/supabase.svg"}
              description="Supabase is an open-source backend-as-a-service platform that provides a PostgreSQL database and other tools."
            />
            <TechCard
              alt="Firebase Icon"
              src={"/Icons/firebase.svg"}
              description="Firebase is a platform developed by Google for building mobile and web applications with real-time database capabilities."
            />
            <TechCard
              alt="MongoDB Icon"
              src={"/Icons/mongodb.svg"}
              description="MongoDB is a NoSQL database known for its flexibility and scalability, using a document-oriented data model."
            />
            </div>
        </div>
        <div
          data-aos={"flip-left"}
          data-aos-delay={intervals[3]}
          className="order-4"
        >
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Auth e ORMs
          </h1>
            <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <TechCard
              alt="NextAuth Icon"
              src={"/Icons/next-auth.png"}
              description="NextAuth.js is a complete open-source authentication solution for Next.js applications."
            />
            <TechCard
              alt="Prisma Icon"
              src={"/Icons/prisma.svg"}
              description="Prisma is a next-generation ORM for Node.js and TypeScript, focusing on type safety and developer productivity."
            />
            <TechCard
              alt="Drizzle Kit Icon"
              src={"/Icons/drizzle.svg"}
              description="Drizzle ORM is a lightweight TypeScript ORM for SQL databases, designed for simplicity and performance."
            />
            </div>
        </div>
        <div
          data-aos={"flip-left"}
          data-aos-delay={getInterval()}
          className="order-5"
        >
          <h1
            className={
              "uppercase text-primary text-5xl bebas-neue max-[700px]:text-3xl"
            }
          >
            Versionamento
          </h1>
            <div className="w-7/12 flex flex-wrap justify-start gap-x-4 gap-y-2">
            <TechCard
              alt="Git Icon"
              src={"/Icons/git.svg"}
              description="Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
            />
            <TechCard
              alt="GitHub Icon"
              src={"/Icons/github.svg"}
              description="GitHub is a platform for version control and collaboration, allowing developers to host and review code, manage projects, and build software together."
            />
            </div>
        </div>
      </div>
    </div>
  );
}
