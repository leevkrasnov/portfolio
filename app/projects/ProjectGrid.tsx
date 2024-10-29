"use client";
import { FC } from "react";
import { projects } from "./projectList";
import Image from "next/image";
import { fira, nunito } from "../ui/fonts";

const ProjectGrid: FC = () => {
  return (
    <div className="mb-40 grid grid-cols-1 gap-14 lg:grid-cols-2">
      {projects.map((project) => (
        <div key={project.id} className="project-container pb-4">
          <section className="p-4 md:p-8">
            <h2
              className={`${nunito.className} mb-8 flex justify-start text-xl text-gray-800 md:text-2xl lg:text-3xl`}
            >
              {project.name}
            </h2>
            <p className="whitespace-pre-line text-sm text-gray-600 md:text-base lg:text-xl">
              {project.description}
            </p>
          </section>

          <section className="mt-auto justify-between p-4 pb-0 md:flex md:p-8 md:pb-2">
            <div
              className={`flex items-end gap-4 text-sm md:text-lg lg:text-xl ${fira.className}`}
            >
              {project.technologies.map((tech) => (
                <div key={tech.name}>{tech.name}</div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              {project.platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="project-button grid-cols-2">
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      width={20}
                      height={20}
                      className="h-3 w-3 opacity-80 md:h-5 md:w-5"
                    />
                  </button>
                </a>
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
