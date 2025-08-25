import React from 'react';
import { InstagramIcon, LinkedInIcon, TikTokIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import HighlightText from './HighlightText';

const socialLinks = [
  { Icon: InstagramIcon, href: 'https://www.instagram.com/riizalhp' },
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/riizalhp' },
  { Icon: TikTokIcon, href: 'https://www.tiktok.com/@riizalhp' },
];

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const content = t('contact');

  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
            {content.title} <span className="font-bold">{content.titleBold}</span><span style={{ color: '#78ff00' }}>.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
            {content.subtitle}
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-12 md:mt-16 text-center">
            
            <a
              href="https://www.linkedin.com/in/riizalhp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-zinc-900 text-white font-bold text-lg px-12 py-4 rounded-full hover:bg-zinc-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {content.hireMeButton}
            </a>

            <p className="text-zinc-500 text-base my-8">{content.orPrompt}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-zinc-500 text-base mb-2">{content.emailPrompt}</p>
                    <a href="mailto:riizalhp@outlook.com" className="text-xl md:text-2xl font-medium text-zinc-800">
                        <HighlightText>riizalhp@outlook.com</HighlightText>
                    </a>
                </div>

                <div>
                    <p className="text-zinc-500 text-base mb-2">{content.whatsappPrompt}</p>
                    <a href={t('whatsappLink')} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-medium text-zinc-800">
                        <HighlightText>{content.whatsappNumber}</HighlightText>
                    </a>
                </div>
            </div>

            <div className="text-center mt-12">
                <p className="text-zinc-500 text-base mb-4">{content.socialPrompt}</p>
                <div className="flex items-center justify-center gap-6">
                  {socialLinks.map(({ Icon, href }, index) => (
                    <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-800 transition-colors">
                      <Icon className="w-8 h-8" />
                    </a>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;