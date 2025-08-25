import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {experience.title}
          </h3>
          <p className="text-lg text-primary-600 font-medium">
            {experience.company}
          </p>
          <p className="text-gray-600">
            {experience.location} • {experience.startDate} – {experience.endDate}
          </p>
        </div>
      </div>
      
      <ul className="space-y-2 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-primary-500 mr-2 mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;

