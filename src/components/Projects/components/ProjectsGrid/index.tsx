"use client";

import { useProjectStore } from "@/data/projectManager";
import ProjectCard from "../ProjectCard";

export default function ProjectsGrid() {
  const { projectsByTech } = useProjectStore();
  return (
    <div
      id="projects"
      className="w-full min-h-section-common bg-secondary px-14 py-10 flex flex-col items-center justify-between max-[1000px]:px-4 max-[1000px]:py-4 selection:bg-primary/10"
    >
      <h1 className="uppercase text-primary text-8xl bebas-neue max-[700px]:text-6xl mt-9">
        Projetos
      </h1>
      <div className="mt-3 grid gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsByTech.map((project, index) => (
          <ProjectCard key={`${index} ${project.name}`} project={project} />
        ))}
      </div>
    </div>
  );
}
