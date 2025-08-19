import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
            {t('aboutTitle')} <span className="font-bold">{t('aboutTitleBold')}</span><span style={{ color: '#78ff00' }}>.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
            {t('aboutSubtitle')}
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-left text-zinc-700 space-y-6">
            <p dangerouslySetInnerHTML={{ __html: t('aboutP1') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('aboutP2') }}></p>

            <h3 className="text-2xl font-bold text-zinc-800 pt-4" dangerouslySetInnerHTML={{ __html: t('aboutWhyChoose') }}></h3>
            <ul className="list-disc list-inside space-y-2">
                <li dangerouslySetInnerHTML={{ __html: t('aboutReason1') }}></li>
                <li dangerouslySetInnerHTML={{ __html: t('aboutReason2') }}></li>
                <li dangerouslySetInnerHTML={{ __html: t('aboutReason3') }}></li>
                <li dangerouslySetInnerHTML={{ __html: t('aboutReason4') }}></li>
            </ul>

            <h3 className="text-2xl font-bold text-zinc-800 pt-4">{t('aboutVisionTitle')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('aboutVisionText') }}></p>

            <h3 className="text-2xl font-bold text-zinc-800 pt-4">{t('aboutMissionTitle')}</h3>
            <ul className="list-disc list-inside space-y-2">
                <li dangerouslySetInnerHTML={{ __html: t('aboutMission1') }}></li>
                <li dangerouslySetInnerHTML={{ __html: t('aboutMission2') }}></li>
                <li dangerouslySetInnerHTML={{ __html: t('aboutMission3') }}></li>
            </ul>

            <p className="pt-4" dangerouslySetInnerHTML={{ __html: t('aboutClosing') }}></p>
        </div>
      </div>
    </section>
  );
};

export default About;