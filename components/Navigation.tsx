'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'works', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  const handleSayHello = () => {
    window.location.href = 'mailto:rizalhp12345@gmail.com?subject=Hello! Let\'s work together&body=Hi Rizal, I\'d love to discuss a potential project with you.';
    setIsMenuOpen(false); // Close menu after clicking the button
  };

  const navItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'works', label: 'Works' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Profile Pic and Name */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-2 nav-item cursor-hover"
        >
          <Image
            alt="Rizal's profile picture - Project Manager"
            className="w-8 h-8 rounded-full border-2 border-white/20"
            src="https://s14.gifyu.com/images/bKypA.gif"
            width={32}
            height={32}
            priority
          />
          </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none cursor-hover"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Navigation Links and Say Hello Button */}
      <div
        className={`md:flex md:items-center md:space-x-2 md:flex-row w-full md:w-auto ${isMenuOpen ? 'flex flex-col space-y-4 mt-4' : 'hidden'}`}
      >
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 nav-items-group">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item cursor-hover ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
        
        {/* Say Hello Button */}
        <button 
          onClick={handleSayHello}
          className="btn-say-hello cursor-hover w-full md:w-auto"
          aria-label="Send email to say hello"
        >
          <span>Say Hello!</span>
          <span className="text-xl">👋</span>
        </button>
      </div>
    </nav>
  );
}