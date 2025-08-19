import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import HighlightText from './HighlightText';

const socialLinks = [
  { Icon: InstagramIcon, href: 'https://www.instagram.com/boycodes.id' },
  { Icon: FacebookIcon, href: 'https://www.facebook.com/boycodes' },
  { Icon: TikTokIcon, href: 'https://www.tiktok.com/@boycodes' },
];

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
            {t('contactTitle')} <span className="font-bold">{t('contactTitleBold')}</span><span style={{ color: '#78ff00' }}>.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
            {t('contactSubtitle')}
          </p>
        </div>
        <div className="max-w-xl mx-auto mt-12 md:mt-16">
            <div className="text-center">
                <p className="text-zinc-500 text-lg mb-2">{t('contactEmailPrompt')}</p>
                <a href="mailto:boycodes@outlook.com" className="text-2xl md:text-3xl font-medium text-zinc-800">
                    <HighlightText>boycodes@outlook.com</HighlightText>
                </a>
            </div>

            <div className="text-center mt-12">
                <p className="text-zinc-500 text-lg mb-2">{t('contactWhatsappPrompt')}</p>
                <a href={t('whatsappLink')} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-medium text-zinc-800">
                    <HighlightText>{t('whatsappNumber')}</HighlightText>
                </a>
            </div>

            <div className="text-center mt-12">
                <p className="text-zinc-500 text-lg mb-4">{t('contactSocialPrompt')}</p>
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