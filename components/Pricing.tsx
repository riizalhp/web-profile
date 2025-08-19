import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckIcon } from './Icons';
import HighlightText from './HighlightText';

type Tab = 'personal' | 'sme' | 'enterprise';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('personal');
  
  const pricingData = t('pricing');
  const tabs = pricingData.tabs;
  const currentPackages = pricingData.packages[activeTab];

  const renderTabButton = (tabKey: Tab, tabName: string) => (
    <button
      onClick={() => setActiveTab(tabKey)}
      className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
        activeTab === tabKey
          ? 'bg-zinc-900 text-white'
          : 'text-zinc-600 hover:bg-zinc-200'
      }`}
    >
      <HighlightText>{tabName}</HighlightText>
    </button>
  );

  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900"
            dangerouslySetInnerHTML={{ __html: pricingData.fullTitle }}
          ></h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
            {pricingData.subtitle}
          </p>
        </div>

        <div className="max-w-md mx-auto bg-zinc-100 p-1.5 rounded-full flex items-center justify-center mb-6">
          {Object.keys(tabs).map((key) => renderTabButton(key as Tab, tabs[key].name))}
        </div>

        <div className="text-center mb-12">
            <p className="text-zinc-600">{tabs[activeTab].description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPackages.map((pkg: any) => (
            <div key={pkg.name} className={`border rounded-xl p-8 flex flex-col relative ${pkg.popular ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200'}`}>
              {pkg.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {t('pricing.mostPopular')}
                </div>
              )}
              <h3 className="text-2xl font-bold text-zinc-900">{pkg.name}</h3>
              <p className="text-zinc-600 mt-2 mb-6 min-h-[3rem]">{pkg.description}</p>
              <div className="mb-6 min-h-[4rem] flex flex-col justify-center">
                {pkg.originalPrice ? (
                    <div>
                        <p className="text-lg text-zinc-400 line-through">{pkg.originalPrice}</p>
                        <p className="text-3xl font-bold text-zinc-900">
                            {pkg.priceNote && <span className="text-lg font-normal">{pkg.priceNote} </span>}
                            {pkg.price}
                        </p>
                    </div>
                ) : (
                    <p className="text-4xl font-bold text-zinc-900">
                        {pkg.priceNote && <span className="text-lg font-normal">{pkg.priceNote} </span>}
                        {pkg.price}
                    </p>
                )}
              </div>
              <ul className="space-y-3 text-zinc-700 mb-8 flex-grow">
                {pkg.features.map((feature: string) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={t('whatsappLink')}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full mt-auto py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${pkg.popular ? 'bg-zinc-900 text-white hover:bg-zinc-700' : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300'}`}
              >
                <HighlightText>{pkg.buttonText}</HighlightText>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;