
import React from 'react';
import Section from './Section';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Let's Connect" className="bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
      </div>
      <ContactForm />
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-slate-700 mb-6">Find me on other platforms:</h3>
        <div className="flex justify-center space-x-6 sm:space-x-8">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors transform hover:scale-110" title="GitHub">
                <i className="fab fa-github text-3xl sm:text-4xl"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors transform hover:scale-110" title="LinkedIn">
                <i className="fab fa-linkedin text-3xl sm:text-4xl"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors transform hover:scale-110" title="Twitter / X">
                <i className="fab fa-twitter text-3xl sm:text-4xl"></i>
            </a>
            <a href="mailto:youremail@example.com" className="text-slate-500 hover:text-sky-600 transition-colors transform hover:scale-110" title="Email Me">
                <i className="fas fa-envelope text-3xl sm:text-4xl"></i>
            </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
