import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SearchIcon } from './Icons';
import HighlightText from './HighlightText';
import ExternalLinkModal from './ExternalLinkModal';

const allProjects = [
  { title: 'Gamezio', category: 'Esport', imageUrl: '/images/contoh-website-bisnis-online-boycodes.webp', liveUrl: '#' },
  { title: 'Portal Berita', category: 'News', imageUrl: '/images/contoh-website-portfolio-freelancer-boycodes.webp', liveUrl: '#' },
  { title: 'ViewTube', category: 'Streaming', imageUrl: '/images/contoh-website-toko-online-umkm-boycodes.webp', liveUrl: '#' },
  { title: 'Architect Agency', category: 'Arsitektur', imageUrl: '/images/desain-website-modern-responsif-boycodes.webp', liveUrl: '#' },
  { title: 'Realistica', category: 'Arsitektur', imageUrl: '/images/jasa-bikin-website-seo-friendly-boycodes.webp', liveUrl: '#' },
  { title: 'Gymon', category: 'Gym', imageUrl: '/images/jasa-buat-website-company-profile-boycodes.webp', liveUrl: '#' },
  { title: 'Zinzira', category: 'Fashion', imageUrl: '/images/jasa-pembuatan-website-murah-profesional-boycodes.webp', liveUrl: '#' },
  { title: 'Modestwear', category: 'Fashion', imageUrl: '/images/jasa-pembuatan-website-personal-brand-boycodes.webp', liveUrl: '#' },
  { title: 'Rental Mobil', category: 'Otomotif', imageUrl: '/images/jasa-pembuatan-website-umkm-terbaik-boycodes.webp', liveUrl: '#' },
  { title: 'Magelang Advanture', category: 'Advanture', imageUrl: '/images/jasa-web-developer-yogyakarta-boycodes.webp', liveUrl: '#' },
  { title: 'Woodland', category: 'Arsitektur', imageUrl: '/images/website-company-profile-perusahaan-boycodes..webp', liveUrl: '#' },
  { title: 'Properti Agent', category: 'Properti', imageUrl: '/images/website-custom-untuk-bisnis-boycodes.webp', liveUrl: '#' },
  { title: 'FashionHub', category: 'Fashion', imageUrl: '/images/website-landing-page-marketing-boycodes.webp', liveUrl: '#' },
  { title: 'Plume', category: 'Gym', imageUrl: '/images/website-online-store-mobile-friendly-boycodes.webp', liveUrl: '#' },
  { title: 'Clothes', category: 'Fashion', imageUrl: '/images/website-startup-teknologi-profesional-boycodes.webp', liveUrl: '#' }
];

const Works: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectUrl, setSelectedProjectUrl] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const allProjectsCategory = t('worksFilterAll');

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allProjects.map((p: any) => p.category))];
    return [allProjectsCategory, ...uniqueCategories];
  }, [allProjects, allProjectsCategory]);

  const [activeCategory, setActiveCategory] = useState(allProjectsCategory);

  const filteredProjects = useMemo(() => {
    return allProjects
      .filter((project: any) => {
        if (activeCategory === allProjectsCategory) return true;
        return project.category === activeCategory;
      })
      .filter((project: any) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          project.title.toLowerCase().includes(searchTermLower) ||
          project.category.toLowerCase().includes(searchTermLower)
        );
      });
  }, [allProjects, activeCategory, searchTerm, allProjectsCategory]);
  
  const handleProjectClick = (url: string) => {
    setSelectedProjectUrl(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectUrl(null);
  };

  const handleConfirmNavigation = () => {
    if (selectedProjectUrl) {
      window.open(selectedProjectUrl, '_blank', 'noopener,noreferrer');
    }
    handleCloseModal();
  };

  return (
    <>
      <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32" id="works">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
              {t('worksTitle')} <span className="font-bold">{t('worksTitleBold')}</span><span style={{ color: '#78ff00' }}>.</span>
            </h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
              {t('worksSubtitle')}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  <HighlightText>{category}</HighlightText>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder={t('worksSearchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-zinc-200 rounded-full focus:ring-2 focus:ring-zinc-300 focus:outline-none transition-shadow"
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProjects.map((project: any, index: number) => (
                <button 
                  key={index}
                  onClick={() => handleProjectClick(project.liveUrl)} 
                  className="group block text-left overflow-hidden rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Glass card with hover animation */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30 backdrop-blur-lg transform md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                      <p className="text-sm text-zinc-300">{project.category}</p>
                      <h3 className="text-2xl font-bold text-white mt-1 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-zinc-500">{t('worksNoResults')}</p>
            </div>
          )}
        </div>
      </section>
      <ExternalLinkModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmNavigation}
      />
    </>
  );
};

export default Works;