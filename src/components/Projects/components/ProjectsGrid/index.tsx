import ProjectBox from "../ProjectBox";

import JS from "@/assets/Icons/javascript.svg";

// 2024
import EtecChamados from "@/assets/Projects/2024/Etec Chamados.png";
import EcoPlay from "@/assets/Projects/2024/Eco Play.png";
import CasaDaMae from "@/assets/Projects/2024/Casa Da Mae.png";
import TodoListBetahub from "@/assets/Projects/2024/Todo-List Betahub.png";
import CashConvert from "@/assets/Projects/2024/CashConvert.png";
import UniaoEtequianos from "@/assets/Projects/2024/Uniao Etequianos.png";
import InOrbit from "@/assets/Projects/2024/inorbit.svg";
import HomeAutomate from "@/assets/Projects/2024/HomeAutomate.png";
import LocalUser from "@/assets/Projects/2024/LocalUser.png";
import ResistorCalculator from "@/assets/Projects/2024/Resistor Calculator.png";
import ClimateControl from "@/assets/Projects/2024/ClimateControl.png";
import StudyPlus from "@/assets/Projects/2024/StudyPlus.png";
import AdressSignUp from "@/assets/Projects/2024/Adress SignUp.ico";
import DevVictorLinks from "@/assets/Projects/2024/DevVictorLinks.png";

// 2023
import MathQuiz from "@/assets/Projects/2023/MathIcon.png";
import DalyGames from "@/assets/Projects/2023/DalyGames.svg";
import SolarSystem from "@/assets/Projects/2023/SolarSystem.png";
import GoodDay from "@/assets/Projects/2023/GoodDay.png";
import VestibulinhoWeb from "@/assets/Projects/2023/VestibulinhoWeb.png";
import WhoIsThatPokemon from "@/assets/Projects/2023/WhoIsThatPokemon.png";
import RepositoriesSearch from "@/assets/Projects/2023/RepositoriesSearch.png";
import TemperatureCalculator from "@/assets/Projects/2023/TemperatureCalculator.png";
import TrianglesApp from "@/assets/Projects/2023/Triangle App.png"

// 2022 
import AlienGame from "@/assets/Projects/2022/AlienGame.svg"
import SvgCreator from "@/assets/Projects/2022/SvgCreate.png"

export default function ProjectsGrid({ year }: { year: number }) {
  if (year === 2024) {
    return (
      <div
        className="w-full ml-auto min-h-full flex flex-wrap justify-end items-start gap-4"
        data-aos="fade-left"
      >
        <ProjectBox
          href="https://github.com/Victor-Lis/EcoPlay-Web/"
          alt="Eco Play"
          image={EcoPlay}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Etec-Chamados"
          alt="Etec Chamados"
          image={EtecChamados}
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
          href="https://github.com/Victor-Lis/MathQuiz"
          alt="Math Quiz"
          image={MathQuiz}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Daly-Games/"
          alt="Daly Games"
          image={DalyGames}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Solar-System-in-ThreeJS"
          alt="Solar System with ThreeJS"
          image={SolarSystem}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Good-Day-App"
          alt="Good Day App"
          image={GoodDay}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Etec-Vestibulinho"
          alt="Vestibulinho Etec"
          image={VestibulinhoWeb}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Who-is-that-pokemon-app/"
          alt="Who is that pokemon?"
          image={WhoIsThatPokemon}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Repositories-Search"
          alt="Repositories Search"
          image={RepositoriesSearch}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Temperature-App"
          alt="Temperature App"
          image={TemperatureCalculator}
        />
        <ProjectBox
          href="https://github.com/Victor-Lis/Triangles-App"
          alt="Triangles App"
          image={TrianglesApp}
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
        href="https://github.com/Victor-Lis/ET-Game/"
        alt="Alien Game"
        image={AlienGame}
      />
      <ProjectBox
        href="https://github.com/Victor-Lis/Svg-Creator"
        alt="SVG Creator"
        image={SvgCreator}
      />
    </div>
  );
}
