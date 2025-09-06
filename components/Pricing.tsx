
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';
import HighlightText from './HighlightText';

type Tab = 'personal' | 'sme' | 'enterprise';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('personal');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isEconomyVisible, setIsEconomyVisible] = useState(false);

  const pricingData = t('pricing');
  const tabs = pricingData.tabs;
  const currentPackages = pricingData.packages[activeTab] || [];
  
  const getMainViewScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container && container.children.length > 0) {
      const economyCard = container.children[0] as HTMLElement;
      const gap = 32; // Corresponds to space-x-8
      return economyCard.offsetWidth + gap;
    }
    return 0;
  }, []);
  
  useEffect(() => {
    const scrollPosition = getMainViewScrollPosition();
    const container = scrollContainerRef.current;
    if (container && scrollPosition > 0) {
      // Use a timeout to ensure the browser has calculated element widths after a tab change
      const timer = setTimeout(() => {
        container.scrollTo({ left: scrollPosition, behavior: 'auto' });
        setIsEconomyVisible(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab, getMainViewScrollPosition]);

  const scrollToEconomyView = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
      setIsEconomyVisible(true);
    }
  };

  const scrollToMainView = () => {
    const scrollPosition = getMainViewScrollPosition();
    const container = scrollContainerRef.current;
    if (container && scrollPosition > 0) {
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setIsEconomyVisible(false);
    }
  };

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

        <div className="relative max-w-6xl mx-auto group">
          <button 
            onClick={scrollToEconomyView}
            disabled={isEconomyVisible}
            aria-label="Scroll left to see economy plan"
            className={`absolute top-1/2 -translate-y-1/2 -left-4 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-zinc-200 text-zinc-600
              transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed hover:bg-white`}>
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-8 py-8 scrollbar-hide snap-x snap-mandatory">
            {currentPackages.map((pkg: any) => {
              const baseLink = t('whatsappLink').split('?')[0];
              const template = t('pricing.whatsappMessageTemplate');
              const message = template.replace('{packageName}', pkg.name);
              const finalWhatsAppLink = `${baseLink}?text=${encodeURIComponent(message)}`;

              return (
                <div 
                  key={pkg.name} 
                  className={`border rounded-xl p-8 flex flex-col relative w-[90vw] sm:w-[22.5rem] flex-shrink-0 snap-center transition-transform duration-300
                    ${pkg.popular 
                      ? 'border-zinc-900 bg-zinc-50 transform scale-105 shadow-2xl z-10' 
                      : 'border-zinc-200'
                    }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
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
                                {pkg.price}
                                {pkg.priceNote && <span className="text-lg font-normal tracking-tight text-zinc-500"> {pkg.priceNote}</span>}
                            </p>
                        </div>
                    ) : (
                        <p className="text-4xl font-bold text-zinc-900">
                            {pkg.price}
                            {pkg.priceNote && <span className="text-lg font-normal tracking-tight text-zinc-500"> {pkg.priceNote}</span>}
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
                    href={finalWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full mt-auto py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${pkg.popular ? 'bg-zinc-900 text-white hover:bg-zinc-700' : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300'}`}
                  >
                    <HighlightText>{pkg.buttonText}</HighlightText>
                  </a>
                </div>
              );
            })}
          </div>
          
          <button 
            onClick={scrollToMainView}
            disabled={!isEconomyVisible}
            aria-label="Scroll right to main plans"
            className={`absolute top-1/2 -translate-y-1/2 -right-4 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-zinc-200 text-zinc-600
              transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed hover:bg-white`}>
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
        
        {/* Feature Comparison Table */}
        <div className="mt-20 md:mt-28">
          <h3
            className="text-3xl font-light tracking-tighter text-zinc-900 mb-8 text-center"
            dangerouslySetInnerHTML={{ __html: pricingData.comparisonTitle }}
          ></h3>
          <div className="overflow-x-auto rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full min-w-[700px] text-sm text-left text-zinc-600">
              <thead className="bg-zinc-50 text-xs text-zinc-700 uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold w-48">Feature</th>
                  {currentPackages.map((pkg: any) => (
                    <th key={pkg.name} scope="col" className={`px-6 py-4 font-semibold text-center ${pkg.popular ? 'bg-zinc-100' : ''}`}>
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingData.featureComparison.map((featureName: string, featureIndex: number) => (
                  <tr key={featureName} className="bg-white border-b last:border-b-0 hover:bg-zinc-50/50">
                    <td className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap">
                      {featureName}
                    </td>
                    {currentPackages.map((pkg: any) => {
                      const value = pkg.comparisonValues?.[featureIndex] || '—';
                      const isCheck = typeof value === 'string' && value.startsWith('✓');
                      const isDash = value === '—';

                      return (
                        <td key={`${pkg.name}-${featureName}`} className={`px-6 py-4 text-center ${pkg.popular ? 'bg-zinc-50' : ''}`}>
                          <span className={
                            isCheck ? 'text-green-600 font-semibold' : 
                            isDash ? 'text-zinc-400' : 'text-zinc-800'
                          }>
                            {value}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Products I Can Develop */}
        {pricingData.products && (
          <div className="mt-20 md:mt-28">
            <h3
              className="text-3xl font-light tracking-tighter text-zinc-900 mb-4 text-center"
              dangerouslySetInnerHTML={{ __html: pricingData.products.title }}
            ></h3>
            <p className="text-lg text-zinc-500 max-w-3xl mx-auto text-center mb-12">
              {pricingData.products.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pricingData.products.items.map((product: { name: string, description: string }, index: number) => (
                <div key={index} className="bg-zinc-50/70 p-6 rounded-xl border border-zinc-200/80 flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-800">{product.name}</h4>
                    <p className="text-zinc-600 text-sm mt-1">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Pricing;
