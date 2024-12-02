"use client";

import "./fonts.css";
import "./profile.css";

import AOS from "aos";
import "aos/dist/aos.css";

import localFont from "next/font/local";
import Image from "next/image";

import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);

  const getMyAge =
    new Date().getFullYear() - new Date("2007-02-16T23:50:00").getFullYear();

  return (
    <div className="w-full min-h-section-common bg-secondary px-14 py-10 flex items-center justify-between border-primary border-r-8">
      <div
        className="max-[1000px]:mr-auto max-[1000px]:my-20 flex flex-col justify-start items-start h-10/12 min-[1000px]:w-6/12"
        data-aos="fade-right"
      >
        <div className="w-full mb-20">
          <h1
            className={
              "max-[700px]:text-6xl uppercase text-primary text-8xl bebas-neue"
            }
          >
            Victor Lis Bronzo
          </h1>
          <h2 className="max-[700px]:text-2xl text-tertiary text-4xl exo-2-regular">
            {getMyAge} anos.
          </h2>
        </div>
        <h2 className="text-tertiary text-5xl exo-2 max-[700px]:w-full max-[700px]:text-left max-[700px]:text-4xl max-[400px]:text-3xl">
          Técnico em <br />
          Desenvolvimento de Sistemas
        </h2>
      </div>
    </div>
  );
}
