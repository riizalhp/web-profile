
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HighlightText from './HighlightText';

interface ArticleDetailProps {
  article: {
    title: string;
    category: string;
    content: string;
    imageUrl: string;
  };
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  const { t } = useLanguage();

  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen" id="article-detail">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 text-zinc-600 hover:text-zinc-900 transition-colors font-semibold"
          >
            <HighlightText>&larr; {t('articles.backToArticles')}</HighlightText>
          </button>

          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">{article.category}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 my-4">{article.title}</h1>
          
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg my-8 shadow-lg"
          />

          <div 
            className="prose prose-lg max-w-none text-zinc-700 space-y-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>

        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
