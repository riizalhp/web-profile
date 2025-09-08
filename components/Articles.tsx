import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import HighlightText from './HighlightText';

// Function to generate a URL-friendly slug from a title
const slugify = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');

const Articles: React.FC = () => {
  const { t } = useLanguage();
  const articlesContent = t('articles');
  
  const articles = articlesContent.items.map((article: any) => ({
    ...article,
    // Construct a full URL for the image if a relative path is provided in translations
    imageUrl: article.meta.ogImage.startsWith('/') 
      ? `https://riizalhp.web.id${article.meta.ogImage}` 
      : article.meta.ogImage,
    slug: slugify(article.title),
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
            <Link 
              to={`/artikel/${article.slug}`}
              key={index} 
              className="group flex flex-col overflow-hidden rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300 bg-zinc-50"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;