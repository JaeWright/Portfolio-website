import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { liveProjects, personalProjects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'personal'>('live');

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work, from production applications to personal projects that demonstrate 
            my skills and passion for building innovative solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('live')}
              className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                activeTab === 'live'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Live Projects ({liveProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                activeTab === 'personal'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Personal Projects ({personalProjects.length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'live' 
            ? liveProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            : personalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
          }
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Project Development Approach
            </h3>
            <p className="text-gray-600 mb-6">
              Each project represents a unique challenge and learning opportunity. I focus on creating 
              scalable, maintainable code while delivering exceptional user experiences. My development 
              process includes thorough planning, iterative development, and comprehensive testing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Planning & Design</h4>
                <p className="text-sm text-gray-600">Thorough requirements analysis and UI/UX design</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Development</h4>
                <p className="text-sm text-gray-600">Clean, maintainable code with modern best practices</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Testing & Deployment</h4>
                <p className="text-sm text-gray-600">Comprehensive testing and smooth deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

