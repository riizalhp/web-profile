
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import HowWeWork from './components/HowWeWork';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';
import MetaTags from './components/MetaTags';
import { useLanguage } from './contexts/LanguageContext';

export type Page = 'home' | 'about' | 'works' | 'pricing' | 'how-we-work' | 'contact' | 'articles';

const App: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [currentMeta, setCurrentMeta] = useState<any>(null);

  const BASE_URL = 'https://riizalhp.web.id';

  useEffect(() => {
    let metaData;
    const langPath = language === 'id' ? '' : '/en';

    if (currentPage === 'articles' && selectedArticle) {
      const articleMeta = selectedArticle.meta;
      const articleSlug = articleMeta.jsonLd.headline.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      
      const canonicalUrl = `${BASE_URL}${langPath}/artikel/${articleSlug}`;

      metaData = {
        ...articleMeta,
        ogUrl: canonicalUrl,
        jsonLd: {
          ...articleMeta.jsonLd,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          author: { '@type': 'Organization', 'name': 'RizalHp' },
          publisher: {
            '@type': 'Organization',
            'name': 'RizalHp',
            'logo': { '@type': 'ImageObject', 'url': 'https://riizalhp.web.id/assets/logo.png' }
          }
        }
      };
    } else {
      const pageKey = currentPage.replace(/-(\w)/g, (_, c) => c.toUpperCase());
      const pageMeta = t(`meta.${pageKey}`);
      const pagePath = currentPage === 'home' ? '' : `/${currentPage}`;
      const canonicalUrl = `${BASE_URL}${langPath}${pagePath}`;
      
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
    }
    setCurrentMeta(metaData);

  }, [currentPage, selectedArticle, language, t]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  const handleSelectArticle = (article: any) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (currentPage === 'articles' && selectedArticle) {
      return <ArticleDetail article={selectedArticle} onBack={handleBackToArticles} />;
    }

    switch (currentPage) {
      case 'about':
        return <About />;
      case 'works':
        return <Works />;
      case 'pricing':
        return <Pricing />;
      case 'how-we-work':
        return <HowWeWork />;
      case 'articles':
        return <Articles onSelectArticle={handleSelectArticle} />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Hero />;
    }
  };

  return (
    <>
      {currentMeta && <MetaTags meta={currentMeta} />}
      <div className="bg-white text-zinc-900 min-h-screen font-sans antialiased overflow-x-hidden relative">
        <div className="noise-overlay fixed inset-0 z-[100] pointer-events-none opacity-10"></div>
        <div className="relative z-10">
          <Navbar onNavigate={handleNavigate} />
          <main>
            {renderPage()}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
