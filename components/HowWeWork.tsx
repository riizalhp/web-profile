import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

const HowWeWork: React.FC = () => {
  const { t } = useLanguage();
  const mainRef = useRef<HTMLElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const gsapContext = gsap.context(() => {
        const panels = gsap.utils.toArray(".panel", panelsRef.current);
        if (!panels.length || !panelsRef.current || !panelsContainerRef.current || !lineRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: panelsContainerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                end: () => "+=" + (panelsRef.current!.offsetWidth - window.innerWidth),
            }
        });

        tl.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
        });
        
        tl.fromTo(lineRef.current, 
            { width: "0%" }, 
            { width: "100%", ease: "none" }, 
            0
        );

    }, mainRef);

    return () => gsapContext.revert();
  }, [t]);

  const content = t('howWeWork');
  const steps = content.steps || [];

  return (
    <section ref={mainRef} className="bg-white pt-32 md:pt-40 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
            {content.title} <span className="font-bold">{content.titleBold}</span><span style={{ color: '#78ff00' }}>.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mt-4">
            {content.subtitle}
          </p>
        </div>
      </div>
      
      <div ref={panelsContainerRef} className="h-[70vh] overflow-hidden">
        <div ref={panelsRef} style={{ width: `${steps.length * 100}vw` }} className="flex flex-nowrap relative h-full">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-[50vw] right-[50vw] h-px bg-zinc-200 -translate-y-1/2 z-0">
                <div ref={lineRef} className="h-full bg-zinc-900"></div>
            </div>

            {steps.map((step: {title: string, description: string}, index: number) => (
              <div key={index} className="panel w-screen flex items-center justify-center p-8 relative z-10 h-full">
                <div className="max-w-lg w-full text-left bg-zinc-50 p-10 rounded-2xl shadow-lg border border-zinc-200">
                  <span className="text-6xl font-bold text-zinc-200">0{index + 1}</span>
                  <h3 className="text-3xl font-bold text-zinc-800 mt-2 mb-4">{step.title}</h3>
                  <p className="text-zinc-600 leading-relaxed text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default HowWeWork;