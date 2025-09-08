
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import HowWeWork from './components/HowWeWork';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage'; // Import the new page component
import MetaTags from './components/MetaTags';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [currentMeta, setCurrentMeta] = useState<any>(null);

  const BASE_URL = 'https://riizalhp.web.id';

  useEffect(() => {
    let metaData;
    const langPath = language === 'id' ? '' : '/en';
    const path = location.pathname;

    // This logic needs to be smart enough to handle article pages via ArticlePage component
    // For now, we focus on the main pages.
    if (!path.startsWith('/artikel')) { 
      const pageKey = path === '/' ? 'home' : path.substring(1).replace(/-(\w)/g, (_, c) => c.toUpperCase());
      const pageMeta = t(`meta.${pageKey}`);
      
      if (pageMeta) {
        const canonicalUrl = `${BASE_URL}${langPath}${path === '/' ? '' : path}`;
        
        metaData = {
          ...pageMeta,
          ogUrl: canonicalUrl,
          jsonLd: {
            ...pageMeta.jsonLd,
            url: canonicalUrl,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl,
            },
          }
        };
        setCurrentMeta(metaData);
      }
    }
  }, [location.pathname, language, t]);

  return (
    <>
      {currentMeta && <MetaTags meta={currentMeta} />}
      <div className="bg-white text-zinc-900 min-h-screen font-sans antialiased overflow-x-hidden relative">
        <div className="noise-overlay fixed inset-0 z-[100] pointer-events-none opacity-10"></div>
        <div className="relative z-10">
          <TopBar />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/artikel/:slug" element={<ArticlePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
