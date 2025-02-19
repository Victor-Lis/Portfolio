"use client";
import type { ProjectType } from "@/@types/project";
import { Github, Linkedin, Chrome } from "lucide-react";
import Image from "next/image";

export default function ProjectSlide({ project }: { project: ProjectType }) {
  return (
    <div className="bg-primary bg-image min-w-full h-80 px-6 py-6 flex flex-col justify-between">
      <div className="w-full flex justify-between items-baseline">
        <h2 className="text-blue-500 text-4xl font-bold flex-[2] text-start">
          {project.name}
        </h2>
        <div className="flex gap-2 items-baseline flex-1 flex-wrap justify-end">
          {project.techs?.map((tech) => {
            return (
              <Image
                width={25}
                src={tech.image}
                alt={tech.name}
                key={tech.name}
              />
            );
          })}
        </div>
      </div>
      <p className="w-full text-tertiary line-clamp-3">{project.description}</p>
      <div className="w-full flex flex-col justify-between items-start gap-y-2 text-tertiary text-sm">
        {project.links.github && (
          <a
            href={project.links.github}
            className="flex justify-center items-center"
            target="_blank"
            rel="noreferrer"
          >
            <Github color="#32de8a" size={28} />
            <span className="underline ml-0.5">
              {project.links.github.split("/")[3]}/
              {project.links.github.split("/")[4]}
            </span>
          </a>
        )}
        {project.links?.linkedin && (
          <a
            href={project.links?.linkedin.path}
            className="flex justify-center items-center"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="#32de8a" size={28} />
            <span className="underline ml-1 mt-1.5">
              {project.links?.linkedin.name}
            </span>
          </a>
        )}
        {project.links?.deploy && (
          <a
            href={project.links?.deploy}
            className="flex justify-center items-center"
            target="_blank"
            rel="noreferrer"
          >
            <Chrome color="#32de8a" size={28} />
            <span className="underline ml-1 mt-0.5">
              {project.links?.deploy.split("/")[2].split(".")[0]}
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
