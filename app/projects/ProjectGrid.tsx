"use client";
import { FC } from "react";
import { projects } from "./projectList";
import Image from "next/image";
import { fira, nunito } from "../ui/fonts";

const ProjectGrid: FC = () => {
  return (
    <div className="mb-40 grid grid-cols-1 gap-14 md:grid-cols-2">
      {projects.map((project) => (
        <div key={project.id} className="project-container pb-4">
          <section className="p-8">
            <h2
              className={`${nunito.className} mb-8 flex justify-start text-3xl text-gray-800`}
            >
              {project.name}
            </h2>
            <p className="whitespace-pre-line text-xl text-gray-600">
              {project.description}
            </p>
          </section>

          <section className="mt-auto flex justify-between p-8">
            <div className={`flex items-end gap-4 text-lg ${fira.className}`}>
              {project.technologies.map((tech) => (
                <div key={tech.name}>{tech.name}</div>
              ))}
            </div>

            <div className="flex gap-3">
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
                      className="opacity-80"
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
