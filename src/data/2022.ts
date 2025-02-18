import type { ProjectType } from "@/app/@types/project";

import JavaScript from "@/assets/Icons/javascript.svg";

export const twoThousandTwentyTwo: ProjectType[] = [
  {
    name: "Alien Game",
    description: "Um jogo interativo onde você precisa encontrar um alienígena misterioso escondido entre as árvores, baseado em uma narrativa envolvente.",
    type: ["Web"],
    links: {
      github: "https://github.com/Victor-Lis/Alien-Game",
      deploy: "https://alien-game-by-victor-lis-bronzo.netlify.app/",
    },
    techs: [
      {
        name: "JavaScript",
        image: JavaScript,
      }
    ]
  }
]