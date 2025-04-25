"use client";
import type { ProjectType } from "@/@types/project";
import { Github, Linkedin, Chrome } from "lucide-react";
import Image from "next/image";

export default function ProjectSlide({ project }: { project: ProjectType }) {
  return (
    <div className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full max-w-[400px]">
      <main>
        <h2 className="text-secondary text-4xl bebas-neue mb-4">
          {project.name}
        </h2>
        <p className="text-tertiary text-xl exo-2-regular mb-4">
            {project.description
            ? project.description.length > 120
              ? `${project.description.slice(0, 120)}...`
              : project.description
            : "Descrição breve do projeto. Clique abaixo para saber mais."}
        </p>
      </main>
      <footer className="flex items-center justify-start gap-2 mt-4">
        {project.links.linkedin?.path && (
          <a
            href={project.links.linkedin.path}
            target="_blank"
            rel="noreferrer"
            className="scale-100 hover:scale-110 transition-transform duration-300"
          >
            <Linkedin color="#32de8a" size={28} />
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="scale-100 hover:scale-110 transition-transform duration-300"
          >
            <Github color="#32de8a" size={28} />
          </a>
        )}
        {project.links.deploy && (
          <a
            href={project.links.deploy}
            target="_blank"
            rel="noreferrer"
            className="scale-100 hover:scale-110 transition-transform duration-300"
          >
            <Chrome color="#32de8a" size={28} />
          </a>
        )}
      </footer>
    </div>
  );
}
