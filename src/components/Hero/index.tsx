"use client";

import "./fonts.css";
import "./profile.css";

import AOS from "aos";
import "aos/dist/aos.css";

import localFont from "next/font/local";
import Image from "next/image";
import { useEffect } from "react";

import ProfilePhoto from "@/assets/Profile.jpg";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  const getMyAge =
    new Date().getFullYear() - new Date("2007-02-16T23:50:00").getFullYear();

  return (
    <div className="max-[1000px]:flex-col max-[1000px]:justify-start w-full min-h-section-common bg-primary px-14 py-10 flex items-center justify-between max-[1000px]:px-4 max-[1000px]:py-4 border-secondary border-l-8">
      <div
        className="max-[1000px]:mr-auto max-[1000px]:my-14 flex flex-col justify-start items-start h-10/12 min-[1000px]:w-6/12"
        data-aos="fade-right"
      >
        <div className="w-full mb-20 max-[1000px]:mb-8">
          <h1 className={"uppercase text-secondary text-8xl bebas-neue max-[700px]:text-6xl"}>
            Victor Lis Bronzo
          </h1>
          <h2 className="text-tertiary text-4xl exo-2-regular max-[700px]:text-2xl">
            Dev Web <strong className="text-secondary">/</strong> Front-End
          </h2>
          <h2 className="text-tertiary text-4xl exo-2-regular max-[700px]:text-2xl">
            {getMyAge} anos.
          </h2>
        </div>
        <h2 className="text-tertiary text-5xl exo-2 max-[700px]:w-full max-[700px]:text-left max-[700px]:text-4xl max-[400px]:text-3xl">
          Técnico em <br />
          Desenvolvimento de Sistemas
        </h2>
      </div>
      <div
        className="max-[1000px]:my-14 max-[1000px]:justify-start max-[1000px]:items-start flex flex-col justify-end items-end h-10/12 min-[1000px]:w-6/12 min-[1000px]:flex"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <Image
          alt="My photo"
          src={ProfilePhoto}
          height={2000}
          width={2000}
          className="min-w-72 w-7/12 max-h-3/12 rounded min-[1000px]:[clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)]"
        />
        <h2 className="min-w-72 w-7/12 text-tertiary max-[1000px]:text-2xl min-[1000px]:text-xl">
          Meu{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://www.linkedin.com/posts/victor-lis-bronzo_nota-m%C3%A1xima-no-tcceco-play-boa-tarde-activity-7268707865601744898--VMD?utm_source=share&utm_medium=member_desktop"
          >
            TCC
          </a>
          ,{" "}
        </h2>
        <h2 className="min-w-72 w-7/12 text-tertiary max-[1000px]:text-2xl min-[1000px]:text-xl">
          quando fomos convidados a ir na{" "}
          <a
            className="text-secondary font-normal underline"
            href="https://www.linkedin.com/posts/victor-lis-bronzo_tcc-na-faculdades-atibaia-faat-uma-jornada-activity-7214915997688864769-DylW?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            rel="noreferrer"
          >
            Unifaat
          </a>
        </h2>
      </div>
    </div>
  );
}
