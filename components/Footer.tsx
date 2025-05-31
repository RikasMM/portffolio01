
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex justify-center space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" title="GitHub">
                <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" title="LinkedIn">
                <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" title="Twitter / X">
                <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-sky-400 transition-colors" title="Email Me">
                <i className="fas fa-envelope text-2xl"></i>
            </a>
        </div>
        <p className="text-sm mb-2">
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
        <p className="text-xs">
          Designed & Built by Your Name. Powered by <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
