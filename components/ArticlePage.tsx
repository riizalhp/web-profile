import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ArticleDetail from './ArticleDetail';
import { translations } from '../lib/translations';

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

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  
  // Determine which language's articles to use
  const articles = translations[language].articles.items;

  // Find the article that matches the slug in the URL
  const article = articles.find((art: any) => slugify(art.title) === slug);

  // If no article is found, you could redirect to a 404 page or back to the articles list
  if (!article) {
    return <Navigate to="/articles" />;
  }

  // The imageUrl is not consistently defined in translations.ts, so we handle it here.
  // This is a temporary solution. Ideally, image paths should be consistent in the data source.
  const imageUrl = article.meta.ogImage.startsWith('http') 
    ? article.meta.ogImage 
    : `https://riizalhp.web.id${article.meta.ogImage}`;

  const articleWithImage = {
    ...article,
    imageUrl: imageUrl,
  };

  return <ArticleDetail article={articleWithImage} />;
};

export default ArticlePage;
