'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSayHello = () => {
    window.location.href = 'mailto:rizalhp12345@gmail.com?subject=Hello! Let\'s work together&body=Hi Rizal, I\'d love to discuss a potential project with you.';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-blur' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex justify-center items-center py-4">
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-300 transition-colors duration-200"
            >
              <Image
                alt="Rizal's profile picture - Project Manager"
                className="w-8 h-8 rounded-full border-2 border-purple-500/30"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                width={32}
                height={32}
                priority
              />
              <span className="font-medium">Rizal</span>
            </button>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('works')}
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
              >
                Works
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
            
            <button 
              onClick={handleSayHello}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Send email to say hello"
            >
              <span>Say Hello!</span>
              <span className="material-icons">waving_hand</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}