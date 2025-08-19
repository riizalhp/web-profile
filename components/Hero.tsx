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
  'https://i.postimg.cc/rFP12wxt/62ea6eb5b3469aa3d6ebb52f.png',
  'https://i.postimg.cc/26GWckCy/62ea6f00b3469aa3d6ebb531.png',
  'https://i.postimg.cc/fWHXYRHg/62ea6ed9b3469aa3d6ebb530.png',
];

const Companies: React.FC = () => {
    const { t } = useLanguage();
    const extendedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="absolute bottom-8 left-0 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-zinc-500 font-medium tracking-widest uppercase mb-8 text-sm">
                    {t('trustedBy')}
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
  const words = t('heroWords');
  const { text: typedText, wordIndex } = useTypewriter(words);
  const currentWord = words[wordIndex];

  const renderTypedWord = () => {
    if (currentWord === 'boycodes.') {
      return (
        <>
          <span className="font-light">{typedText.substring(0, 3)}</span>
          <span className="font-bold">{typedText.substring(3, 8)}</span>
          {typedText.length > 8 && <span style={{ color: '#78ff00' }}>.</span>}
        </>
      );
    }

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
          {t('heroWeAre')}{' '}
          <span className="typed-cursor whitespace-nowrap min-h-[1em] inline-block">
            {renderTypedWord()}
          </span>
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl text-zinc-800 max-w-md mx-auto mt-8 font-normal">
          {t('heroSubtitle')}
        </h3>
      </div>
      <Companies />
    </section>
  );
};

export default Hero;