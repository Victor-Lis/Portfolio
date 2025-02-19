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
  setProjectsByTech: (tech: Types) => void;
  getProjectsByTech: (tech: Types) => boolean;
  projectsByTech: ProjectType[];
  tech: Types;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: {
    // 2025: twoThousandTwentyFive,
    2024: twoThousandTwentyFour,
    2023: twoThousandTwentyThree,
    2022: twoThousandTwentyTwo,
  },
  selectedYear: 2024,
  projectsByTech: [],
  getYears: () => Object.keys(get().projects).reverse().map(year => Number.parseInt(year)),
  tech: "Web",
  setSelectedYear: (year) => {
    set({ selectedYear: year })
    set((state) => ({ projectsByTech: state.projects[state.selectedYear].filter((project) => project.type.includes(state.tech)) }))
  },
  setProjectsByTech: (tech) => {
    set((state) => ({ tech }))
    set((state) => ({ projectsByTech: state.projects[state.selectedYear].filter((project) => project.type.includes(tech)) }))
  },
  getProjectsByTech: (tech) => {
    return !!get().projects[get().selectedYear].filter((project) => project.type.includes(tech)).length
  }
}));