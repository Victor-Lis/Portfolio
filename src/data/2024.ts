import type { ProjectType } from "@/app/@types/project";

import Arduino from "@/assets/Icons/arduino.svg";
import Drizzle from "@/assets/Icons/drizzle.svg";
import Firebase from "@/assets/Icons/firebase.svg";
import JavaScript from "@/assets/Icons/javascript.svg";
import NextAuth from "@/assets/Icons/next-auth.png";
import NextJS from "@/assets/Icons/nextjs.svg";
import PostgreSQL from "@/assets/Icons/postgresql.svg";
import Prisma from "@/assets/Icons/prisma.svg";
import ReactNative from "@/assets/Icons/react-native.svg";
import React from "@/assets/Icons/react.svg";
import Supabase from "@/assets/Icons/supabase.svg";
import Tailwind from "@/assets/Icons/tailwind.svg";
import TypeScript from "@/assets/Icons/typescript.svg";
import ThreeJS from "@/assets/Icons/threejs.svg";
import NodeJS from '@/assets/Icons/node.png';

export const twoThousandTwentyFour: ProjectType[] = [
  {
    name: "Dev Controle",
    type: ["Web", "Back-End"],
    description:
      "Sistema de gerenciamento de chamados desenvolvido para otimizar o fluxo de trabalho de desenvolvedores.",
    links: {
      github: "https://github.com/Victor-Lis/Dev-Controle",
      deploy: "https://daly-games-by-victor-lis-bronzo.vercel.app",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "React",
        image: React,
      },
      {
        name: "NextJS",
        image: NextJS,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
    ],
  },
  {
    name: "Adress SignUp",
    type: ["Web", "Back-End"],
    description:
      "Este projeto, desenvolvido inicialmente como uma explicação simples para requisições HTTP usando JavaScript, evoluiu para um sistema de cadastro de endereços a partir do CEP. Ele utiliza dados recebidos de uma API para exibir mapas e informações climáticas para cada endereço salvo. O projeto inclui um sistema de autenticação via Google e passou por várias versões, adicionando funcionalidades como mapas e dados climáticos.",
    links: {
      github: "https://github.com/Victor-Lis/Adress-SignUp/",
      deploy: "https://adress-sign-up-by-dev-victor.vercel.app/",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "React",
        image: React,
      },
      {
        name: "NextJS",
        image: NextJS,
      },
      {
        name: "NextAuth",
        image: NextAuth,
      },
      {
        name: "Prisma",
        image: Prisma,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
    ],
  },
  {
    name: "Casa da Mãe",
    type: ["Web"],
    description:
      "Casa da Mãe é um projeto social que visa ajudar famílias carentes através de acolhimento alimentar e educacional. O portal disponibiliza cursos gratuitos e gerencia doações para auxiliar famílias necessitadas.",
    links: {
      github: "https://github.com/Victor-Lis/Casa-da-Mae",
      deploy: "https://casa-da-mae.vercel.app/",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "React",
        image: React,
      },
      {
        name: "NextJS",
        image: NextJS,
      },
      {
        name: "NextAuth",
        image: NextAuth,
      },
      {
        name: "Supabase",
        image: Supabase,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
    ],
  },
  {
    name: "Clima Control+",
    type: ["Web", "Back-End"],
    description:
      "Um sistema web para monitoramento e análise de temperatura e umidade em ambientes internos, desenvolvido como projeto escolar.",
    links: {
      github: "https://github.com/Victor-Lis/Climate-Control-Plus",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "NextJS",
        image: NextJS,
      },
      {
        name: "Prisma",
        image: Prisma,
      },
      {
        name: "PostgreSQL",
        image: PostgreSQL,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
    ],
  },
  {
    name: "Linktree with ThreeJS",
    type: ["Web", "Game"],
    description:
      "Este projeto, é inspirado em uma página de Linktree que redireciona para as redes sociais do autor, estilizada com base no Minecraft. Utilizando Three.js para renderização 3D, Cannon-es para física e dat.gui para interface de debug, o projeto simula portais de Minecraft para redirecionar os usuários.",
    links: {
      github: "https://github.com/Victor-Lis/Linktree-with-ThreeJS",
      deploy: "https://dev-victor-lis-links.vercel.app/",
      linkedin:
        "https://www.linkedin.com/posts/victor-lis-bronzo_threejs-uma-biblioteca-javascript-para-gr%C3%A1ficos-activity-7154107032244019200-wz_Y/",
    },
    techs: [
      {
        name: "JavaScript",
        image: JavaScript,
      },
      {
        name: "ThreeJS",
        image: ThreeJS,
      },
    ],
  },
  {
    name: "Eco-Play",
    type: ["Web", "Game", "IoT"],
    description:
      "O projeto utiliza tecnologia para engajar crianças e jovens no descarte correto de tampinhas plásticas, conscientizando-os sobre questões ambientais. Pesquisas na Etec Professor Carmine Biagio Tundisi revelaram alta aceitação do público jovem, embora ainda exista pouca valorização do descarte adequado. ",
    links: {
      deploy: "https://eco-play.vercel.app/",
      github: "https://github.com/Victor-Lis/EcoPlay",
      linkedin:
        "https://www.linkedin.com/feed/update/urn:li:activity:7268707865601744898/",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "NextJS",
        image: NextJS,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
      {
        name: "Arduino",
        image: Arduino,
      },
    ],
  },
  {
    name: "Etec Chamados",
    type: ["Web", "Back-End"],
    description: "Sistema de gerenciamento de chamados desenvolvido para otimizar os processos da secretaria da Etec Professor Carmine Biagio Tundisi.",
    links: {
      github: "https://github.com/Victor-Lis/Etec-Chamados-with-NextJS/tree/main",
      deploy: "https://etec-chamados-by-dev-victor-lis.vercel.app/",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "NextJS",
        image: NextJS,
      },
      {
        name: "NextAuth",
        image: NextAuth,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
    ]
  },
  {
    name: "Home Automation",
    type: ["Web", "IoT"],
    description: "Este aplicativo foi desenvolvido para simplificar o controle de dispositivos IoT baseados em ESP32, permitindo gerenciar múltiplos pontos de automação residencial através de uma interface intuitiva.",
    links: {
      github: "https://github.com/Victor-Lis/Home-Automation-with-React-Native/tree/master",
      deploy: "https://expo.dev/accounts/dev_victor/projects/home-automation/builds/36d99b36-ce90-4971-b883-0096864fb5aa",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "React Native",
        image: ReactNative,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
    ]
  },
  {
    name: "In.Orbit",
    type: ["Web", "Back-End"],
    description: "Front-End integrado a uma API para gerenciamento de metas e objetivos pessoais, com Front-End construído em React, React Query e Radix UI, e Back-End em Node.js, Fastify e Drizzle ORM.",
    links: {
      github: "https://github.com/Victor-Lis/In.Orbit-Web",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "React",
        image: React,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
      {
        name: "NodeJS",
        image: NodeJS,
      },
      {
        name: "Drizzle",
        image: Drizzle,
      },
    ]
  },
  {
    name: "Resistor Calculator App",
    type: ["App", "IoT"],
    description: "Aplicativo para cálculo de resistores elétricos com foco em ajudar meus amigos e colegas de turma na matéria sobre IoT, desenvolvido com React Native e TypeScript.",
    links: {
      github: "https://github.com/Victor-Lis/Resistor-Calculator-App",
      deploy: "https://expo.dev/accounts/dev_victor/projects/resistor-calculator/builds/7b6f0b2b-5d5b-4c4d-8b3b-3b5d1b7e4c1b",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "React Native",
        image: ReactNative,
      },
    ]
  },
  {
    name: "StudyPlus",
    type: ["Web", "Back-End"],
    description: "Sistema web para gerenciamento de tarefas e estudos desenvolvido com Next.js 14, TypeScript e Prisma.",
    links: {
      github: "https://github.com/Victor-Lis/StudyPlus-with-NextJS",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "NextJS",
        image: NextJS,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
      {
        name: "NextAuth",
        image: NextAuth,
      },
      {
        name: "Prisma",
        image: Prisma,
      },
      {
        name: "PostgreSQL",
        image: PostgreSQL,
      },
    ]
  },
  {
    name: "Portal do Festival de Primavera",
    type: ["Web"],
    description: "Portal de inscrição e gerenciamento de eventos para o Festival da Primavera da Etec Professor Carmine Biagio Tundisi de 2024.",
    links: {
      github: "https://github.com/Victor-Lis/Festival-da-Primavera-2024",
    },
    techs: [
      {
        name: "TypeScript",
        image: TypeScript,
      },
      {
        name: "NextJS",
        image: NextJS,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
      {
        name: "Supabase",
        image: Supabase,
      }
    ]
  },
]
