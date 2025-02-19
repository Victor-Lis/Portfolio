import "./fonts.css";
import "./profile.css";

import { useEffect } from "react";
import Section from "./components/Section";

export default function AboutMe() {
  return (
    <div className="w-full min-h-section-common bg-primary px-14 py-10 flex flex-col items-center justify-between border-secondary border-l-8 max-[1000px]:px-4 max-[1000px]:py-4 selection:bg-secondary/5">
      <Section aosData="fade-left">
        <h1
          className={
            "max-[700px]:text-6xl uppercase text-secondary font-bold text-8xl bebas-neue w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48"
          }
        >
          Tecnologia
        </h1>
        <p className="max-[700px]:text-2xl text-tertiary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 max-xl:hidden">
          Sempre fui um apaixonado assíduo por qualquer tecnologia e inovação,
          quando mais novo adorava jogar videogames e imaginar como era o
          processo para seu desenvolvimento
        </p>
        <p className="max-[700px]:text-2xl text-tertiary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 mt-4">
          Após minha entrada na Etec Prof. Carmine Biagio Tundisi, onde realizei
          meu curso técnico em Desenvolvimento de Sistemas durante{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://github.com/Victor-Lis?tab=overview&from=2022-12-01&to=2022-12-31"
          >
            2022
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://github.com/Victor-Lis?tab=overview&from=2023-12-01&to=2023-12-31"
          >
            2023
          </a>{" "}
          e{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://github.com/Victor-Lis?tab=overview&from=2024-12-01&to=2024-12-31"
          >
            2024
          </a>
          , vi que esse mundo da tecnologia era muito mais complexo, com isso ao
          invés de me assustar ou me afastar, me apaixonei ainda mais, já tendo
          desenvolvido até aqui:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://github.com/Victor-Lis?tab=repositories&q=&type=&language=typescript,javascript,html,css,tsx"
          >
            sites
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://github.com/Victor-Lis?tab=repositories&q=app"
          >
            apps
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://github.com/Victor-Lis?tab=repositories&q=&language=c%2B%2B"
          >
            sistemas embarcados
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://github.com/Victor-Lis?tab=repositories&q=API"
          >
            APIs
          </a>
          ...
        </p>
        <p className="max-[700px]:text-2xl text-tertiary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 mt-4 max-lg:hidden">
          Mas minha paixão mesmo é para o lado que interage com o usúario,
          entender os pensamentos que passam por sua cabeça, quais padrões,
          cores e tipografias usar, portanto gosto mais do lado Front-End, mas
          não tenho nenhum problema em ler, estudar e desenvolver outras stacks
          (até fora da programação).
        </p>
      </Section>
      <Section aosData="fade-right">
        <h1
          className={
            "max-[700px]:text-6xl uppercase text-secondary font-bold text-8xl bebas-neue w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48"
          }
        >
          TCC
        </h1>
        <p className="max-[700px]:text-2xl text-tertiary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48">
          O{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://www.linkedin.com/feed/update/urn:li:activity:7266495833804558336/"
          >
            Eco-Play
          </a>{" "}
          representa muito sobre mim acima de tudo, ouvi muitas vezes antes de
          definir qual seria meu TCC que seguir o rumo que tomei não era tão bom
          e que os demais{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://www.linkedin.com/in/victor-lis-bronzo/details/projects/"
          >
            projetos
          </a>{" "}
          que já havia construído tinham mais cara de TCC, ainda si acreditei na
          ideia junto dos meus orientadores e integrantes do grupo, então
          intensifiquei os meus estudos a respeito dos temas do trabalho e das{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://github.com/Victor-Lis/EcoPlay-Web"
          >
            tecnologias utilizadas
          </a>
          .
        </p>
      </Section>
      <Section aosData="fade-left">
        <h1
          className={
            "max-[700px]:text-6xl uppercase text-secondary font-bold text-8xl bebas-neue w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48"
          }
        >
          Mundo Acadêmico
        </h1>
        <p className="max-[700px]:text-2xl text-tertiary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 max-lg:hidden">
          Após algumas experiências em escrever conteúdos utilizando a linguagem
          acadêmica e por consequência conhecer mais sobre esse mundo, tenho em
          meus pensamentos foco para uma carreira profissional voltada a
          tecnologia, mas também surgiu como um forte interesse da minha parte a
          evolução acadêmica.
        </p>
        <p className="max-[700px]:text-2xl text-tertiary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 mt-4">
          É perceptivel a evolução da habilidade e prática do grupo falando de
          mundo acadêmico quando observamos a diferença entre as produções para{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://drive.google.com/file/d/1d5dw6X9UM-dh-K3sY_HXURzOot5TlC5z/view?usp=drive_link"
          >
            Feteps 2024
          </a>{" "}
          (que o ocorreu entre 2023 e 2024) e a produção do{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-normal underline"
            href="https://www.linkedin.com/posts/victor-lis-bronzo_eco-play-activity-7266495833804558336-cO3f?utm_source=share&utm_medium=member_desktop"
          >
            artigo do TCC
          </a>{" "}
          (produzido ao longo de 2024).
        </p>
      </Section>
      <Section aosData="fade-right">
        <h1
          className={
            "max-[700px]:text-6xl uppercase text-secondary font-bold text-8xl bebas-neue w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48"
          }
        >
          Objetivos
        </h1>
        <p className="max-[700px]:text-2xl text-tertiary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48">
          Tenho como meus objetivos para essa nova etapa:
        </p>
        <ul className="max-[700px]:text-2xl text-tertiary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 list-disc marker:text-secondary">
          <li className="w-[93%] max-[500px]:w-11/12 ml-auto">
            Ingressar em um curso tecnólogo no próximo ano, já que ainda sou muito novo e até
            aqui o tempo sempre jogou a meu favor
          </li>
          <li className="w-[93%] max-[500px]:w-11/12 ml-auto">
            Para buscar experiência e consolidação dos meus aprendizados pretendo o quanto antes ingressar no
            meio profissional.
          </li>
        </ul>
      </Section>
    </div>
  );
}
