'use client';
import { FC } from 'react';
import { projects } from './projectList';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const ProjectGrid: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-40">
      {projects.map((project) => (
        <div
          key={project.id}
          className="py-4 bg-gray-50 border border-gray-200 rounded-2xl shadow-md flex flex-col h-full"
        >
          <div>
            <h2 className="flex justify-center p-5 text-2xl mb-3">
              {project.name}
            </h2>
            <p className="text-gray-800 text-xl px-8 mb-8 whitespace-pre-line">
              {project.description}
            </p>
          </div>

          <div className="flex justify-between px-8 pt-10 items-end mt-auto">
            <div className="flex gap-4">
              {project.technologies.map((tech) => (
                <Image
                  key={tech.name}
                  src={tech.icon}
                  alt={tech.name}
                  width={30}
                  height={30}
                  className="inline-block"
                />
              ))}
            </div>

            <div className="flex gap-6">
              {project.platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    width={43}
                    height={43}
                    className="inline-block hover:scale-110 transition-transform hover:rotate-6  duration-200"
                  />
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
