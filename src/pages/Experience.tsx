import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { experience, education } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development, from junior roles to full-stack positions, 
            working with diverse technologies and delivering impactful solutions.
          </p>
        </div>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Education
          </h2>
          <div className="card p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {education.degree}
              </h3>
              <p className="text-xl text-primary-600 font-medium mb-2">
                {education.school}
              </p>
              <p className="text-gray-600 mb-4">
                {education.location} • {education.period}
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-3">
                {education.coursework.map((course, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;

