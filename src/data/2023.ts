import type { ProjectType } from "@/app/@types/project";

import Firebase from "@/assets/Icons/firebase.svg";
import NextJS from "@/assets/Icons/nextjs.svg";
import ReactNative from "@/assets/Icons/react-native.svg";
import React from "@/assets/Icons/react.svg";
import StyledComponents from "@/assets/Icons/styled-components.svg";
import Tailwind from "@/assets/Icons/tailwind.svg";
import TypeScript from "@/assets/Icons/typescript.svg";

export const twoThousandTwentyThree: ProjectType[] = [
  {
    name: "DalyGames",
    type: ["Web"],
    description:
      "Um catálogo de jogos desenvolvido com Next.js 14, TypeScript e Tailwind CSS. O projeto oferece uma interface moderna para explorar e descobrir informações sobre diversos jogos.",
    links: {
      github: "https://github.com/Victor-Lis/Daly-Games",
      deploy: "https://daly-games-victorlis-projects.vercel.app/",
    },
    techs: [
      { name: "TypeScript", image: TypeScript },
      { name: "Next.js", image: NextJS },
      { name: "Tailwind CSS", image: Tailwind },
    ],
  },
  {
    name: "MathQuiz",
    type: ["App", "Game"],
    description:
      "Um jogo educacional desafiador de matemática que torna o aprendizado divertido! Desenvolvido com tecnologias modernas como React Native e Expo, inspirado no clássico jogo 'Stop'",
    links: {
      github: "https://github.com/Victor-Lis/MathQuiz",
    },
    techs: [
      { name: "React Native", image: ReactNative },
      { name: "Styled-Components", image: StyledComponents },
      { name: "Firebase", image: Firebase },
    ],
  },
  {
    name: "Repos Search",
    type: ["Web"],
    description:
      "Uma aplicação web desenvolvida com React que permite pesquisar repositórios do GitHub e visualizar informações sobre eles.",
    links: {
      github: "https://github.com/Victor-Lis/Repositories-Search",
    },
    techs: [
      { name: "React", image: React },
      { name: "Styled-Components", image: StyledComponents },
    ],
  },
  {
    name: "Temperature App",
    type: ["App"],
    description:
      "Um aplicativo React Native elegante e intuitivo para conversão de temperaturas entre Celsius, Fahrenheit e Kelvin.",
    links: {
      github: "https://github.com/Victor-Lis/Temperature-App",
    },
    techs: [
      {
        name: "React Native",
        image: ReactNative,
      },
      {
        name: "Styled-Components",
        image: StyledComponents,
      },
    ],
  },
  {
    name: "Etec Vestibulinho",
    type: ["Web"],
    description:
      "Sistema web desenvolvido para apresentar informações e divulgar os cursos técnicos da ETEC Professor Carmine Biagio Tundisi.",
    links: {
      github: "https://github.com/Victor-Lis/Etec-Vestibulinho",
    },
    techs: [
      { name: "React", image: React },
      { name: "Styled-Components", image: StyledComponents },
      { name: "Firebase", image: Firebase },
    ],
  },
  {
    name: "Adm Vestibulinho Etec",
    type: ["App"],
    description:
      "Aplicativo desenvolvido para auxiliar na divulgação da ETEC, permitindo o gerenciamento e compartilhamento de conteúdos relacionados aos cursos técnicos.",
    links: {
      github: "https://github.com/Victor-Lis/Etec-Vestibulinho",
    },
    techs: [
      { name: "React Native", image: ReactNative },
      { name: "Styled-Components", image: StyledComponents },
      { name: "Firebase", image: Firebase },
    ],
  },
];
