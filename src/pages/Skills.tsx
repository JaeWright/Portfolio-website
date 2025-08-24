import React from 'react';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I've worked with 
            throughout my development career.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 mb-6">
              I'm constantly exploring new technologies and frameworks to stay current with industry trends. 
              My experience spans from traditional web development to modern cloud-native applications, 
              giving me a versatile skill set for various project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary-50 text-primary-700 text-sm rounded-lg border border-primary-200">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 text-sm rounded-lg border border-primary-200">
                Mobile Development
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 text-sm rounded-lg border border-primary-200">
                Cloud Services
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 text-sm rounded-lg border border-primary-200">
                DevOps & CI/CD
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
