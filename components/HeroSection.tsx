import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import PdfViewerPopup from '@/components/ui/PdfViewerPopup';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCvPopupOpen, setIsCvPopupOpen] = useState(false);

  const pdfLink = "https://pdflink.to/100dd795/embed/";
  const phrases = ["I'm Rizal,", "Project Manager & Freelance Website Developer"];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      }, 50); // Deleting speed
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }, 100); // Typing speed
    }

    if (!isDeleting && displayText === currentPhrase) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1000); // Pause before deleting
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="min-h-screen flex items-center px-4 md:px-6 pt-24 md:pt-20 hero-section">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className={phraseIndex === 0 ? "text-white gradient-text" : "text-3xl md:text-4xl text-white/80 leading-none"}>
              {displayText}
            </span>
            <span className="cursor">|</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl md:mx-0 mx-auto leading-relaxed">
            I bring ideas to life by managing  projects and crafting websites that turn big visions into impactful digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a href="mailto:riizalhp@outlook.com" className="btn-primary cursor-hover">
              Let&apos;s Work Together
            </a>
            <button onClick={() => setIsCvPopupOpen(true)} className="btn-secondary cursor-hover">
              View CV
            </button>
          </div>
          
          <div className="flex items-center justify-center md:justify-start mt-8 text-sm text-white/50">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for Freelancing • Yogyakarta, Indonesia • UTC/GMT +7:00
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative inline-block">
            <Image
              src="https://s14.gifyu.com/images/bNH4S.webp"
              alt="Rizal Hanifa Pratama"
              width={300}
              height={300}
              className="rounded-full border-4 border-white/20"
              priority
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse"></div>
          </div>
        </div>
      </div>
      <PdfViewerPopup
        isOpen={isCvPopupOpen}
        onClose={() => setIsCvPopupOpen(false)}
        pdfUrl={pdfLink}
      />
    </section>
  );
}