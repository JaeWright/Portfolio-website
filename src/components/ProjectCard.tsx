import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          project.type === 'live' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          {project.type === 'live' ? 'Live' : 'Personal'}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">
        {project.description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-auto">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block mr-3"
          >
            View Project
          </a>
        )}
        {project.video && (
          <button className="btn-secondary">
            Watch Demo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
