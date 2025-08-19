import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface ExternalLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center"
          >
            <h3 className="text-2xl font-bold text-zinc-800 mb-4">{t('worksModal.title')}</h3>
            <p className="text-zinc-600 mb-8">{t('worksModal.message')}</p>
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="w-full py-3 px-6 rounded-lg font-semibold bg-zinc-200 text-zinc-900 hover:bg-zinc-300 transition-colors duration-300"
              >
                {t('worksModal.cancelButton')}
              </button>
              <button
                onClick={onConfirm}
                className="w-full py-3 px-6 rounded-lg font-semibold bg-zinc-900 text-white hover:bg-zinc-700 transition-colors duration-300"
              >
                {t('worksModal.continueButton')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExternalLinkModal;
