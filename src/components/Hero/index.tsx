"use client";

import "./fonts.css";
import "./profile.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { useEffect } from "react";

import { agesManager } from "@/data/getDates";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="hero" className="w-full min-h-section-common bg-primary px-14 pb-7 pt-3 max-[850px]:px-4 max-[850px]:py-4 border-secondary border-l-8 selection:bg-secondary/5">
      <div
        className="w-full flex items-center justify-center gap-x-10 gap-y-4 mb-5 max-[500px]:items-start max-[500px]:flex-col"
        data-aos="fade-down"
      >
        <a
          className="flex items-center justify-center gap-x-1 hover:opacity-80 duration-150 cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/victor-lis-bronzo"
        >
          <Image alt="Linkedin" src="/Profile/linkedin-personalized-2.svg" height={36.5} width={36.5} />
          <h2 className="text-tertiary exo-2-regular text-2xl border-b-2 border-secondary">
            Victor Lis Bronzo
          </h2>
        </a>
        <a
          className="flex items-center justify-center gap-x-1 hover:opacity-80 duration-150 cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/Victor-Lis"
        >
          <Image alt="Github" src="/Profile/github-personalized-2.svg" height={40} width={40} />
          <h2 className="text-tertiary exo-2-regular text-2xl selection:text-secondary border-b-2 border-secondary">
            Victor-Lis
          </h2>
        </a>
      </div>
      <div className="w-full min-h-full flex items-center justify-between max-[850px]:flex-col max-[850px]:justify-start">
        <div
          className="max-[850px]:mr-auto max-[850px]:mb-7 flex flex-col justify-start items-start h-10/12 min-[850px]:w-6/12"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="w-full mb-20 max-[850px]:mb-8">
            <h1
              className={
                "uppercase text-secondary text-8xl bebas-neue max-[700px]:text-6xl"
              }
            >
              Victor Lis Bronzo
            </h1>
            <h2 className="text-tertiary text-4xl exo-2-regular max-[700px]:text-2xl">
              Dev Web <strong className="text-secondary">/</strong> Front-End
              <span className="text-tertiary text-lg">
                {" "}
                - Há {agesManager.getDevAge()} anos.
              </span>{" "}
              <br />
              <span className="text-tertiary text-4xl exo-2-regular max-[700px]:text-2xl">
                {agesManager.getAge()} anos de idade.
              </span>
            </h2>
          </div>
          <div className="max-[700px]:w-full max-[700px]:text-left">
            <h2 className="text-tertiary text-5xl exo-2 max-[700px]:text-4xl max-[400px]:text-3xl">
              🎓 Técnico em <br />
              Desenvolvimento de Sistemas
              <span className="text-tertiary text-2xl font-normal whitespace-nowrap">
                {" "}
                - <a href="https://etecatibaia.cps.sp.gov.br/" target="_blank" className="underline cursor-pointer" rel="noreferrer">Etec</a>
              </span>{" "}
            </h2>
            <h4 className="text-tertiary text-2xl mt-2">
              📚✍️ Tecnólogo em Análise e Desenvolvimento de Sistemas
              <span className="text-tertiary text-sm font-normal whitespace-nowrap">
                {" "}
                - <a href="https://bra.ifsp.edu.br/" target="_blank" className="underline cursor-pointer" rel="noreferrer">IFSP</a>
              </span>{" "}
            </h4>
          </div>
        </div>
        <div
          className="max-[850px]:my-14 max-[850px]:justify-start max-[850px]:items-start flex flex-col justify-end items-end h-10/12 min-[850px]:w-6/12 min-[850px]:flex"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <Image
            alt="My photo"
            src="/Profile/Profile.jpg"
            height={2000}
            width={2000}
            className="min-w-72 w-7/12 max-w-5xl min-[850px]:[clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)]"
          />
          <h2 className="min-w-72 w-7/12 text-tertiary max-[850px]:text-2xl min-[850px]:text-xl">
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
          <h2 className="min-w-72 w-7/12 text-tertiary max-[850px]:text-2xl min-[850px]:text-xl">
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
    </div>
  );
}
