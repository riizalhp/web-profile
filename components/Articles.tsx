
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HighlightText from './HighlightText';

const staticImageUrls = [
  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1522199670076-2852f8c89bb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

interface ArticlesProps {
  onSelectArticle: (article: any) => void;
}

const Articles: React.FC<ArticlesProps> = ({ onSelectArticle }) => {
  const { t } = useLanguage();
  const articlesContent = t('articles');
  const articles = articlesContent.items.map((article: any, index: number) => ({
    ...article,
    imageUrl: staticImageUrls[index % staticImageUrls.length],
  }));

  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen" id="articles">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
            {articlesContent.title} <span className="font-bold">{articlesContent.titleBold}</span><span style={{ color: '#78ff00' }}>.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
            {articlesContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article: any, index: number) => (
            <div 
              key={index} 
              className="group flex flex-col overflow-hidden rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300 bg-zinc-50 cursor-pointer"
              onClick={() => onSelectArticle(article)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">{article.category}</p>
                <h3 className="text-xl font-bold text-zinc-800 mt-2 group-hover:text-zinc-900 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-zinc-600 mt-3 text-sm leading-relaxed flex-grow">
                  {article.excerpt}
                </p>
                <div
                  className="mt-4 text-left font-bold text-zinc-800 hover:text-zinc-900 transition-colors duration-300 self-start"
                >
                  <HighlightText>{t('articles.readMore')}</HighlightText>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;