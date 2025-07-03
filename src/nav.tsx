import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImage from './assets/1st/seakate media logo 2.jpg';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/services", label: "SERVICES" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 sm:px-8 py-3 flex items-center justify-between w-full">
          
          {/* Logo */}
          <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-full shadow-xl flex-shrink-0">
            <Link to="/" className="h-full w-full flex items-center justify-center">
              <img 
                src={logoImage}
                alt="Seakate Media Logo"
                className="h-full w-full rounded-full object-cover"
              />
            </Link>
          </div>

          {/* Nav Links - Centered */}
          <div className="hidden md:flex justify-center flex-1 space-x-6 items-center heading-font">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1 text-white font-semibold transition-all heading-font
                  ${location.pathname === link.path ? 'text-[#04E4D8] scale-110' : 'hover:text-[#04E4D8] hover:scale-105'}`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-[#04E4D8] rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Right Aligned */}
          <div className="md:hidden flex-shrink-0">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-white text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4 px-6 space-y-4 heading-font">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-semibold transition-all 
                  ${location.pathname === link.path ? 'text-[#04E4D8]' : 'text-white hover:text-[#04E4D8]'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
