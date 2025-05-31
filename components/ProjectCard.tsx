
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col group">
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.imageUrl || `https://picsum.photos/seed/${project.id}/400/250`} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-sky-700 mb-3 group-hover:text-sky-600 transition-colors">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>
        
        <div className="mb-5">
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-200 flex justify-end items-center space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-600 transition-colors"
              title="View on GitHub"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300 transform hover:scale-105"
            >
              Live Demo <i className="fas fa-external-link-alt ml-2 text-xs"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
