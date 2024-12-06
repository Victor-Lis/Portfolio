import ProjectBox from "../ProjectBox";

import JS from "@/assets/Icons/javascript.svg";

// 2024
import EtecChamados from "@/assets/Projects/Etec Chamados.png";
import EcoPlay from "@/assets/Projects/Eco Play.png";
import CasaDaMae from "@/assets/Projects/Casa Da Mae.png";
import TodoListBetahub from "@/assets/Projects/Todo-List Betahub.png";
import CashConvert from "@/assets/Projects/CashConvert.png";
import UniaoEtequianos from "@/assets/Projects/Uniao Etequianos.png";
import InOrbit from "@/assets/Projects/inorbit.svg";
import HomeAutomate from "@/assets/Projects/HomeAutomate.png";
import LocalUser from "@/assets/Projects/LocalUser.png";
import ResistorCalculator from "@/assets/Projects/Resistor Calculator.png";
import ClimateControl from "@/assets/Projects/ClimateControl.png";
import StudyPlus from "@/assets/Projects/StudyPlus.png";
import AdressSignUp from "@/assets/Projects/Adress SignUp.ico";
import DevVictorLinks from "@/assets/Projects/DevVictorLinks.png";

export default function ProjectsGrid({ year }: { year: number }) {
  if (year === 2024) {
    return (
      <div
        className="w-full ml-auto min-h-full flex flex-wrap justify-end items-start gap-4"
        data-aos="fade-left"
      >
        <ProjectBox
          href="https://github.com/Victor-Lis/Etec-Chamados"
          alt="Etec Chamados"
          image={EtecChamados}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/EcoPlay-Web/"
          alt="Eco Play"
          image={EcoPlay}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Casa-da-Mae/"
          alt="Casa da Mãe"
          image={CasaDaMae}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/ToDo-List-BetaHub"
          alt="Todo-List Betahub"
          image={TodoListBetahub}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/cash-convert/"
          alt="Cash Convert"
          image={CashConvert}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Festival-da-Primavera-2024/"
          alt="União Etequianos"
          image={UniaoEtequianos}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/In.Orbit-Web"
          alt="In Orbit"
          image={InOrbit}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Home-Automation-with-React-Native"
          alt="Home Automation"
          image={HomeAutomate}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/People-SignUp/"
          alt="People SignUp"
          image={LocalUser}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Resistor-Calculator/"
          alt="Resistor Calculador"
          image={ResistorCalculator}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Climate-Control/"
          alt="Climate Control"
          image={ClimateControl}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/StudyPlus-with-NextJS/"
          alt="Study Plus"
          image={StudyPlus}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Adress-SignUp/"
          alt="Adress SignUp"
          image={AdressSignUp}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Linktree-with-ThreeJS/"
          alt="Linktree with ThreeJS"
          image={DevVictorLinks}
        />
      </div>
    );
  }

  if (year === 2023) {
    return (
      <div
        className="w-full ml-auto min-h-full flex flex-wrap justify-end items-start gap-4"
        data-aos="fade-left"
      >
        <ProjectBox
          href="https://github.com/Victor-Lis/Etec-Chamados"
          alt="Etec Chamados"
          image={EtecChamados}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Etec-Chamados"
          alt="Etec Chamados"
          image={EtecChamados}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Etec-Chamados"
          alt="Etec Chamados"
          image={EtecChamados}
        />
      </div>
    );
  }

  return (
    <div
      className="w-full ml-auto min-h-full flex flex-wrap justify-end items-start gap-4"
      data-aos="fade-left"
    >
      <ProjectBox
        href="https://github.com/Victor-Lis/Etec-Chamados"
        alt="Etec Chamados"
        image={EtecChamados}
      />
      <ProjectBox
        href="https://github.com/Victor-Lis/Etec-Chamados"
        alt="Etec Chamados"
        image={EtecChamados}
      />
    </div>
  );
}
