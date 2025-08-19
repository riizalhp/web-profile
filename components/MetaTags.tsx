
import React, { useEffect } from 'react';

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl: string;
  jsonLd?: any;
}

const MetaTags: React.FC<{ meta: MetaProps }> = ({ meta }) => {
  useEffect(() => {
    if (!meta) return;

    document.title = meta.title;

    const setMetaTag = (name: string, content: string, isProperty: boolean = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
            element.setAttribute('property', name);
        } else {
            element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content || '');
    };
    
    const removeMetaTag = (name: string, isProperty: boolean = false) => {
        const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
        const element = document.head.querySelector(selector);
        if (element) {
            element.remove();
        }
    };


    setMetaTag('description', meta.description);
    if (meta.keywords) {
      setMetaTag('keywords', meta.keywords);
    } else {
      removeMetaTag('keywords');
    }
    
    setMetaTag('og:title', meta.title, true);
    setMetaTag('og:description', meta.description, true);
    setMetaTag('og:url', meta.ogUrl, true);
    setMetaTag('og:type', meta.jsonLd?.['@type'] === 'BlogPosting' ? 'article' : 'website', true);
    if (meta.ogImage) {
      setMetaTag('og:image', meta.ogImage, true);
    } else {
      removeMetaTag('og:image', true);
    }
    
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', meta.title);
    setMetaTag('twitter:description', meta.description);
    if (meta.ogImage) {
      setMetaTag('twitter:image', meta.ogImage);
    } else {
      removeMetaTag('twitter:image');
    }

    let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', meta.ogUrl);
    
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (meta.jsonLd) {
        if (!scriptTag) {
            scriptTag = document.createElement('script');
            scriptTag.id = scriptId;
            scriptTag.type = 'application/ld+json';
            document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = JSON.stringify(meta.jsonLd);
    } else if (scriptTag) {
        scriptTag.remove();
    }

  }, [meta]);

  return null;
};

export default MetaTags;
