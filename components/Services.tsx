import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const services = t('servicesList');

  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
            {t('servicesTitle')} <span className="font-bold">{t('servicesTitleBold')}</span><span style={{ color: '#78ff00' }}>.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
            {t('servicesSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: {name: string, description: string}) => (
            <div key={service.name} className="bg-zinc-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-zinc-800">{service.name}</h3>
              <p className="text-zinc-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;