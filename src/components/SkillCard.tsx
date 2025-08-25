import React from 'react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
        {skill.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

