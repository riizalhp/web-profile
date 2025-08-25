
import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SearchIcon } from './Icons';
import HighlightText from './HighlightText';
import ProjectDetailModal from './ProjectDetailModal';
import type { Project } from './ProjectDetailModal';

const staticImageUrls = [
  'https://images.unsplash.com/photo-1559028006-44d08a09b38b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D',
  'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D',
];

const Works: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ongoingProjects = t('works.ongoingProjects') || [];
  
  const INITIAL_PROJECT_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECT_COUNT);


  const allProjects: Project[] = useMemo(() => {
    const projectsFromT: any[] = t('works.projects');
    return projectsFromT.map((project, index) => ({
      ...project,
      imageUrl: project.imageUrl || staticImageUrls[index % staticImageUrls.length],
    }));
  }, [t]);

  const [searchTerm, setSearchTerm] = useState('');
  const allProjectsCategory = t('works.filterAll');

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allProjects.map((p) => p.category))];
    return [allProjectsCategory, ...uniqueCategories];
  }, [allProjects, allProjectsCategory]);

  const [activeCategory, setActiveCategory] = useState(allProjectsCategory);

  const filteredProjects = useMemo(() => {
    return allProjects
      .filter((project) => {
        if (activeCategory === allProjectsCategory) return true;
        return project.category === activeCategory;
      })
      .filter((project) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          project.title.toLowerCase().includes(searchTermLower) ||
          project.category.toLowerCase().includes(searchTermLower)
        );
      });
  }, [allProjects, activeCategory, searchTerm, allProjectsCategory]);

  useEffect(() => {
    setVisibleCount(INITIAL_PROJECT_COUNT);
  }, [activeCategory, searchTerm]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32" id="works">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Ongoing Works */}
          {ongoingProjects.length > 0 && (
            <>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
                  {t('works.ongoingTitleLight')} <span className="font-bold">{t('works.ongoingTitleBold')}</span><span style={{ color: '#78ff00' }}>.</span>
                </h2>
                <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
                  {t('works.ongoingSubtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {ongoingProjects.map((project: any, index: number) => {
                  const CardContent = (
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={project.imageUrl || staticImageUrls[(staticImageUrls.length - 1 - index) % staticImageUrls.length]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30 backdrop-blur-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-sm text-zinc-300">{project.category}</p>
                            <span className="text-xs font-bold bg-green-100 text-green-800 px-2.5 py-1 rounded-full flex-shrink-0">{project.status}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mt-1 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-zinc-200 mt-2 text-sm">{project.description}</p>
                      </div>
                    </div>
                  );

                  if (project.liveUrl) {
                    return (
                      <a
                        key={index}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block text-left overflow-hidden rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300"
                      >
                        {CardContent}
                      </a>
                    );
                  }

                  return (
                    <div key={index} className="group block text-left overflow-hidden rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-default">
                      {CardContent}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Divider and Our Works */}
          <div className="mt-20 md:mt-28 pt-16 border-t border-zinc-200">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
                {t('works.title')} <span className="font-bold">{t('works.titleBold')}</span><span style={{ color: '#78ff00' }}>.</span>
              </h2>
              <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
                {t('works.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
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

              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder={t('works.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-zinc-200 rounded-full focus:ring-2 focus:ring-zinc-300 focus:outline-none transition-shadow"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {visibleProjects.map((project, index) => (
                    <button 
                      key={index}
                      onClick={() => handleProjectClick(project)} 
                      className="group block text-left overflow-hidden rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30 backdrop-blur-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                          <p className="text-sm text-zinc-300">{project.category}</p>
                          <h3 className="text-2xl font-bold text-white mt-1 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                {filteredProjects.length > visibleCount && (
                  <div className="text-center mt-12">
                    <button
                      onClick={handleLoadMore}
                      className="bg-zinc-900 text-white text-base font-semibold px-8 py-3 rounded-full hover:bg-zinc-700 transition-colors duration-300 transform hover:-translate-y-0.5"
                    >
                      <HighlightText>{t('works.loadMoreButton')}</HighlightText>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-zinc-500">{t('works.noResults')}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <ProjectDetailModal 
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Works;
