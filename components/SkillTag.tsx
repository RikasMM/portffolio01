
import React from 'react';
import { Skill } from '../types';

interface SkillTagProps {
  skill: Skill;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="bg-sky-100 text-sky-700 px-4 py-3 rounded-lg shadow-md flex items-center space-x-3 hover:bg-sky-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {skill.icon && <span className="text-xl text-sky-600">{skill.icon}</span>}
      <span className="font-medium">{skill.name}</span>
    </div>
  );
};

export default SkillTag;
