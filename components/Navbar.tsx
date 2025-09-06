
import React, { useState } from 'react';
import { InstagramIcon, LinkedInIcon, TikTokIcon, WhatsAppIcon } from './Icons';
import type { Page } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import HighlightText from './HighlightText';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-sm font-medium tracking-tight">
      <button 
        onClick={() => setLanguage('id')} 
        className={`${language === 'id' ? 'text-zinc-900 font-bold' : 'text-zinc-400'} hover:text-zinc-900 transition-colors`}
      >
        <HighlightText>ID</HighlightText>
      </button>
      <span className="text-zinc-300">|</span>
      <button 
        onClick={() => setLanguage('en')}
        className={`${language === 'en' ? 'text-zinc-900 font-bold' : 'text-zinc-400'} hover:text-zinc-900 transition-colors`}
      >
        <HighlightText>EN</HighlightText>
      </button>
    </div>
  );
};

const Navbar: React.FC<{ onNavigate: (page: Page) => void; }> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleNavigation = (page: Page) => {
    onNavigate(page);
    window.scrollTo(0, 0); // Scroll to top on page change
    setIsMenuOpen(false); // Close menu on navigation
  };

  const socialLinks = [
    { Icon: InstagramIcon, href: 'https://www.instagram.com/riizalhp' },
    { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/riizalhp' },
    { Icon: TikTokIcon, href: 'https://www.tiktok.com/@riizalhp' },
    { Icon: WhatsAppIcon, href: t('whatsappLink') },
  ];
  
  const navItems: { name: string, page: Page }[] = [
    { name: t('menuAbout'), page: 'about' },
    { name: t('menuWorks'), page: 'works' },
    { name: t('menuHowWeWork'), page: 'how-we-work' },
    { name: t('menuArticles'), page: 'articles' },
    { name: t('menuPricing'), page: 'pricing' },
    { name: t('menuContact'), page: 'contact' },
  ];

  return (
    <header className="absolute top-10 left-0 right-0 z-50 p-6 md:p-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={() => handleNavigation('about')} className="hidden md:block text-sm font-medium tracking-tight hover:text-zinc-500 transition-colors">
            <HighlightText>{t('navStudio')}</HighlightText>
          </button>
          <button onClick={() => handleNavigation('home')} className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <HighlightText>
              <div className="text-2xl md:text-3xl font-medium tracking-tighter text-zinc-900">
                <span className="font-light">riizal</span>
                <span className="font-bold">hp</span>
                <span style={{ color: '#78ff00' }}>.</span>
              </div>
            </HighlightText>
          </button>
          <div className="flex items-center gap-4 md:gap-6">
            <button onClick={() => handleNavigation('works')} className="hidden md:block text-sm font-medium tracking-tight hover:text-zinc-500 transition-colors">
              <HighlightText>{t('navWorks')}</HighlightText>
            </button>
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <button
                onClick={() => handleNavigation('contact')}
                className="hidden md:inline-block bg-zinc-900 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-zinc-700 transition-colors duration-300 transform hover:-translate-y-0.5"
            >
                {t('contact.hireMeButton')}
            </button>
            <button onClick={toggleMenu} className="flex items-center gap-2 text-sm font-medium tracking-tight group">
              {t('navMenu')}
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span className={`block w-5 h-0.5 bg-zinc-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-zinc-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-zinc-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      ></div>

      {/* Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm md:max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 md:p-16 h-full flex flex-col justify-between">
          <div>
             <div className="flex justify-between items-center mb-4">
                <p className="text-zinc-400 text-sm">{t('menuTitle')}</p>
                <div className="md:hidden">
                    <LanguageSwitcher />
                </div>
            </div>
            <nav className="flex flex-col items-start gap-2">
              {navItems.map(item => (
                <button key={item.name} onClick={() => handleNavigation(item.page)} className="text-4xl md:text-5xl font-bold text-zinc-800 hover:text-zinc-400 transition-colors duration-300 -ml-1 text-left">
                  <HighlightText>{item.name}</HighlightText>
                </button>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-zinc-400 text-sm mb-4">{t('getInTouch')}</p>
            <a href="mailto:riizalhp@outlook.com" className="text-lg text-zinc-800">
              <HighlightText>riizalhp@outlook.com</HighlightText>
            </a>
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map(({ Icon, href }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-800 transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
