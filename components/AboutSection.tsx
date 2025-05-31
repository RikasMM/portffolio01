
import React from 'react';
import Section from './Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-white">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 max-w-md mx-auto md:mx-0">
          <img 
            src="https://picsum.photos/seed/aboutmeportrait/600/750" 
            alt="A professional portrait of Your Name" 
            className="rounded-xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:col-span-3 text-left">
          <h3 className="text-2xl font-semibold text-sky-700 mb-4">Crafting Digital Experiences</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Hello! I'm Rikas, a dedicated software engineer with a knack for building elegant and efficient solutions. My journey into tech started with a fascination for how bits and bytes can translate into impactful user experiences.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Over the years, I've honed my skills in full-stack development, working with a variety of technologies to bring ideas to life. I thrive in collaborative environments and am always eager to learn new things and tackle challenging problems, transforming complex requirements into intuitive and performant applications.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not coding, you can find me exploring new hiking trails, diving into a good sci-fi novel, or experimenting with new recipes in the kitchen.
          </p>
          <div className="mt-8 flex space-x-6">
             <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors text-3xl">
                <i className="fab fa-github"></i>
             </a>
             <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors text-3xl">
                <i className="fab fa-linkedin"></i>
             </a>
             <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors text-3xl">
                <i className="fab fa-twitter"></i>
             </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
