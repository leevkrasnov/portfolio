'use client';
import { FC } from 'react';
import { projects } from './projectList';
import Image from 'next/image';
import { fira, nunito } from '../ui/fonts';

const ProjectGrid: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-14 md:grid-cols-2 mb-40">
      {projects.map((project) => (
        <div
          key={project.id}
          className="pb-4 bg-gray-50 border border-gray-200 rounded-2xl shadow-md flex flex-col h-full"
        >
          <div>
            <h2
              className={`${nunito.className} flex justify-start p-8 text-3xl text-gray-800 mb-3`}
            >
              {project.name}
            </h2>
            <p className="text-gray-600 text-xl px-8 mb-8 whitespace-pre-line">
              {project.description}
            </p>
          </div>

          <div className="flex justify-between px-8 pt-10 items-end mt-auto">
            <div className={`flex gap-4 text-lg ${fira.className}`}>
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
                  <button className="flex items-center justify-center bg-gray-200 py-2 px-8 border border-gray-300 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-100 hover:border-orange-400 hover:rotate-6">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
