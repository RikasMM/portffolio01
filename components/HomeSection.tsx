
import React from 'react';
import Section from './Section';

const HomeSection: React.FC = () => {
  // Smooth scrolling is handled globally in App.tsx
  return (
    <Section 
      id="home" 
      className="bg-gradient-to-br from-sky-600 to-indigo-700 text-white min-h-screen flex items-center justify-center !pt-20"
      contentClassName="flex flex-col items-center justify-center" // Ensure content is centered
    >
      <div className="text-center">
        <img 
          src="https://picsum.photos/seed/portfolioavatar/160/160" 
          alt="Your Name" 
          className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto mb-8 border-4 border-sky-300 shadow-xl"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Hi, I'm <span className="text-sky-300">Your Name</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
          A Passionate Software Engineer & Full-Stack Developer specializing in creating dynamic and beautiful web applications.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <a
            href="#projects"
            className="inline-block bg-white text-sky-600 hover:bg-sky-100 font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 text-lg"
            >
            View My Work <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a
            href="#contact"
            className="inline-block bg-transparent border-2 border-sky-300 text-white hover:bg-sky-300 hover:text-sky-700 font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 text-lg"
            >
            Get in Touch
            </a>
        </div>
      </div>
    </Section>
  );
};

export default HomeSection;
