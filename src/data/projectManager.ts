import type { Types } from "@/app/@types/type";
import type { ProjectsType } from '@/app/@types/projects';
import type { ProjectType } from "@/app/@types/project";

import { create } from 'zustand';

import { twoThousandTwentyFive } from "./2025";
import { twoThousandTwentyFour } from "./2024";
import { twoThousandTwentyThree } from "./2023";
import { twoThousandTwentyTwo } from "./2022";

type ProjectStore = {
  projects: ProjectsType
  selectedYear: number;
  getYears: () => number[]
  setSelectedYear: (year: number) => void;
  getProjectsByTech: (tech:Types) => ProjectType[]
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: {
    2025: twoThousandTwentyFive,
    2024: twoThousandTwentyFour,
    2023: twoThousandTwentyThree,
    2022: twoThousandTwentyTwo,
  },
  selectedYear: 2025,
  getYears: () => Object.keys(get().projects).reverse().map(year => Number.parseInt(year)),
  setSelectedYear: (year) => set({ selectedYear: year }),
  getProjectsByTech: (tech) => get().projects[get().selectedYear].filter((project) => project.type.includes(tech))
}));