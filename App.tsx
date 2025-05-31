
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Apply smooth scrolling via JavaScript for better control and compatibility.
    // This ensures that clicks on nav links scroll smoothly.
    const smoothScrollHandler = (event: Event) => {
      const anchor = event.target as HTMLAnchorElement;
      if (anchor.tagName === 'A' && anchor.hash) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', smoothScrollHandler);

    return () => {
      document.removeEventListener('click', smoothScrollHandler);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        {/* HomeSection has pt-20 to account for fixed navbar height */}
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
