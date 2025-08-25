
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckIcon } from './Icons';

export interface Project {
  title: string;
  category: string;
  liveUrl: string;
  imageUrl: string;
  overview: string;
  contributions: string[];
  githubUrl?: string | null;
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full text-left overflow-hidden relative"
            style={{ maxHeight: '90vh' }}
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={onClose}
                className="w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-all"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="overflow-y-auto" style={{ maxHeight: '90vh' }}>
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
                
                <div className="p-8 md:p-10">
                    <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">{project.category}</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mt-1 mb-6">{project.title}</h2>
                    
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-zinc-800 mb-3 border-b pb-2">{t('works.modal.overviewTitle')}</h3>
                        <p className="text-zinc-600 leading-relaxed">{project.overview}</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-zinc-800 mb-3 border-b pb-2">{t('works.modal.contributionsTitle')}</h3>
                        <ul className="space-y-2">
                            {project.contributions.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-zinc-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-zinc-50 px-8 md:px-10 py-5 flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 text-center py-3 px-6 rounded-lg font-semibold bg-zinc-900 text-white hover:bg-zinc-700 transition-colors duration-300"
                    >
                      {t('works.modal.liveDemoButton')}
                    </a>
                    {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto flex-1 text-center py-3 px-6 rounded-lg font-semibold bg-zinc-200 text-zinc-900 hover:bg-zinc-300 transition-colors duration-300"
                        >
                          {t('works.modal.githubButton')}
                        </a>
                    )}
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
