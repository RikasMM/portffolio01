
import React from 'react';
import Section from './Section';
import SkillTag from './SkillTag';
import { Skill } from '../types';

const skillsData: Skill[] = [
  { name: 'React', icon: <i className="fab fa-react"></i> },
  { name: 'TypeScript', icon: <span className="font-bold text-blue-600 text-sm">TS</span> }, // Custom icon for TS
  { name: 'Node.js', icon: <i className="fab fa-node-js"></i> },
  { name: 'Tailwind CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="w-6 h-6"><path fill="currentColor" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.656C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.656C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.656C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.656C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"></path></svg> },
  { name: 'JavaScript (ES6+)', icon: <i className="fab fa-js-square"></i> },
  { name: 'HTML5', icon: <i className="fab fa-html5"></i> },
  { name: 'CSS3', icon: <i className="fab fa-css3-alt"></i> },
  { name: 'Python', icon: <i className="fab fa-python"></i> },
  { name: 'Git & GitHub', icon: <i className="fab fa-git-alt"></i> },
  { name: 'MongoDB', icon: <i className="fas fa-leaf"></i> }, // Using a leaf for MongoDB
  { name: 'PostgreSQL', icon: <i className="fas fa-database"></i> },
  { name: 'Docker', icon: <i className="fab fa-docker"></i> },
  { name: 'Figma', icon: <i className="fab fa-figma"></i> },
  { name: 'REST APIs', icon: <i className="fas fa-cogs"></i> },
  { name: 'Agile Methodology', icon: <i className="fas fa-users-cog"></i> },
];

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="My Skills & Expertise" className="bg-sky-50">
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        I have a diverse skill set that allows me to tackle various aspects of web development, from frontend aesthetics to backend logic. Here are some of the key technologies and methodologies I work with:
      </p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {skillsData.map((skill) => (
          <SkillTag key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
