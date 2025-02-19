"use client"
import React from "react";
import ProjectsYears from "./components/ProjectsYears";
import ProjectsByTopic from "./components/ProjectsByTopic";
import ProjectSlider from "./components/ProjectSlider";
import { useProjectStore } from "@/data/projectManager";

export default function Projects() {
  const { projectsByTech } = useProjectStore();
  return (
    <div className="w-full min-h-40 bg-secondary px-14 py-10 flex flex-col items-start justify-start border-primary border-r-8 clip-path:polygon(10%_0%,50%_0%,90%_50%,0%_50%) max-[850px]:px-4 max-[850px]:py-4 selection:bg-primary/10">
      <div className="w-full flex flex-wrap">
        <ProjectsYears/>
        <ProjectsByTopic/>
      </div>
      <div className="w-full flex flex-wrap">
        {!!projectsByTech.length && <ProjectSlider />}
      </div>
    </div>
  );
}