
import React from 'react';
import { LocationPinIcon, MailIcon, PhoneIcon } from './Icons';

const TopBar: React.FC = () => {
  return (
    <header className="bg-zinc-50 border-b border-zinc-200 h-10 fixed top-0 left-0 right-0 z-[60] text-zinc-600 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <LocationPinIcon className="w-4 h-4 text-zinc-400" />
          <span>Yogyakarta, Indonesia</span>
        </div>
        
        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="mailto:riizalhp@outlook.com" className="flex items-center gap-2 hover:text-zinc-900 transition-colors">
            <MailIcon className="w-4 h-4 text-zinc-400" />
            <span className="hidden md:inline">riizalhp@outlook.com</span>
          </a>
          <a href="tel:+6288225444313" className="flex items-center gap-2 hover:text-zinc-900 transition-colors">
            <PhoneIcon className="w-4 h-4 text-zinc-400" />
            <span className="hidden md:inline">+62 882-2544-4313</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
