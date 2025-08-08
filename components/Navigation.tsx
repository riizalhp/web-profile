'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'works'];
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
      setIsMenuOpen(false);
    }
  };

  const handleSayHello = () => {
    window.location.href = 'mailto:rizalhp12345@gmail.com?subject=Hello! Let\'s work together&body=Hi Rizal, I\'d love to discuss a potential project with you.';
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'works', label: 'Works' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 cursor-pointer select-none"
              aria-label="Scroll to top"
            >
              <Image
                alt="Rizal's profile picture"
                className="w-10 h-10 rounded-full ring-2 ring-blue-500"
                src="https://s14.gifyu.com/images/bNH4S.webp"
                width={40}
                height={40}
                priority
              />
              <div className="text-left">
                <h2 className="text-white font-bold text-lg">pmngetech.</h2>
                <p className="text-gray-400 text-xs">Project Manager and Freelance Web Developer</p>
              </div>
            </button>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                      activeSection === item.id 
                        ? 'text-blue-400 bg-blue-500/20' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              {/* CTA Button */}
              <button 
                onClick={handleSayHello}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                Let&apos;s Talk 🚀
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-gray-800">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 cursor-pointer select-none"
              aria-label="Scroll to top"
            >
              <Image
                alt="Rizal's profile picture"
                className="w-8 h-8 rounded-full ring-2 ring-blue-500"
                src="https://s14.gifyu.com/images/bNH4S.webp"
                width={32}
                height={32}
                priority
              />
              <div className="text-left">
                <h2 className="text-white font-bold text-sm">pmngetech.</h2>
                <p className="text-gray-400 text-xs">Project Manager and Freelance Web Developer</p>
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            <div className="space-y-2 pt-2">
              {navItems.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 text-sm ${
                      activeSection === item.id 
                        ? 'text-blue-400 bg-blue-500/20' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              {/* Mobile CTA Button */}
              <button 
                onClick={handleSayHello}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-3 text-sm"
              >
                Let&apos;s Talk 🚀
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}