
import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';

const navLinksData: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const sections = navLinksData.map(link => document.getElementById(link.href.substring(1)));
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjusted for better active link detection

    for (const section of sections) {
      if (section) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(`#${section.id}`);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial active link
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigateToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Smooth scrolling is handled globally in App.tsx
    // This function now primarily closes the mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
    // No e.preventDefault() or scrollIntoView here, App.tsx handles it
  };


  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50 top-0 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => navigateToSection(e, '#home')} className="text-2xl font-bold text-sky-600 hover:text-sky-700 transition-colors">
              YourName
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinksData.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => navigateToSection(e, link.href)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                    ${activeLink === link.href 
                      ? 'bg-sky-500 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-sky-100 hover:text-sky-600'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <i className="fas fa-bars text-xl"></i>
              ) : (
                <i className="fas fa-times text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => navigateToSection(e, link.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out
                ${activeLink === link.href 
                  ? 'bg-sky-500 text-white' 
                  : 'text-gray-700 hover:bg-sky-100 hover:text-sky-600'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
