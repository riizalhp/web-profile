import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const useTypewriter = (words: string[], { typeSpeed = 75, backSpeed = 50, backDelay = 1200 } = {}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;

    const currentWord = words[wordIndex] || '';

    if (isDeleting) {
      // Deleting logic
      timer = setTimeout(() => {
        setText(current => current.slice(0, -1));
      }, backSpeed);
    } else {
      // Typing logic
      timer = setTimeout(() => {
        setText(current => currentWord.substring(0, current.length + 1));
      }, typeSpeed);
    }

    // Transition to deleting
    if (!isDeleting && text === currentWord) {
      clearTimeout(timer); // Clear the typing timer
      timer = setTimeout(() => setIsDeleting(true), backDelay);
    } 
    // Transition to typing next word
    else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex(current => (current + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, backSpeed, backDelay]);

  return { text, wordIndex };
};

const logos = [
  'https://i.postimg.cc/7Zw0JR8f/1.png',
  'https://i.postimg.cc/Gp9BkwMh/10.png',
  'https://i.postimg.cc/fbFVC2F7/11.png',
  'https://i.postimg.cc/W3FkPLrf/2.png',
  'https://i.postimg.cc/y6RZQK7D/3.png',
  'https://i.postimg.cc/wMDR7XwX/4.png',
  'https://i.postimg.cc/ydMS1Qy6/5.png',
  'https://i.postimg.cc/65NGFPQY/6.png',
  'https://i.postimg.cc/XYjBYyd5/7.png',
  'https://i.postimg.cc/pXYnvBhx/8.png',
  'https://i.postimg.cc/Z5wBBKxM/9.png'
];

const Companies: React.FC = () => {
    const { t } = useLanguage();
    const extendedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="absolute bottom-8 left-0 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-zinc-500 font-medium tracking-widest uppercase mb-8 text-sm">
                    {t('hero.trustedBy')}
                </h3>
                <div className="relative w-full overflow-hidden">
                    <div className="flex flex-nowrap">
                        <ul className="flex flex-none items-center animate-scroll-infinite">
                            {extendedLogos.map((logo, index) => (
                                <li key={`a-${index}`} className="mx-8 md:mx-12">
                                    <img src={logo} alt={`Company logo ${index + 1}`} className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-none items-center animate-scroll-infinite" aria-hidden="true">
                            {extendedLogos.map((logo, index) => (
                                <li key={`b-${index}`} className="mx-8 md:mx-12">
                                    <img src={logo} alt={`Company logo ${index + 1}`} className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const content = t('hero');
  const words = content.words;
  const { text: typedText, wordIndex } = useTypewriter(words);
  const currentWord = words[wordIndex];

  const renderTypedWord = () => {
    if (currentWord && currentWord.endsWith('.')) {
      const typedWordPart = typedText.endsWith('.') ? typedText.slice(0, -1) : typedText;
      const typedDot = typedText.endsWith('.') ? '.' : '';

      return (
        <>
          <span className="font-bold">{typedWordPart}</span>
          {typedDot && <span style={{ color: '#78ff00' }}>{typedDot}</span>}
        </>
      );
    }
    
    return <span className="font-bold">{typedText}</span>;
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative px-4">
      <div className="relative z-10 pointer-events-none">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter text-zinc-900">
          {content.weAre}{' '}
          <span className="typed-cursor whitespace-nowrap min-h-[1em] inline-block">
            {renderTypedWord()}
          </span>
        </h1>
        <h3
          className="text-base sm:text-lg md:text-xl text-zinc-800 max-w-md md:max-w-3xl mx-auto mt-8 font-normal"
          dangerouslySetInnerHTML={{ __html: content.subtitle }}
        >
        </h3>
      </div>
      <Companies />
    </section>
  );
};

export default Hero;