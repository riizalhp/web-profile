'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20 hero-section">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I&apos;m <span className="text-white gradient-text">Rizal</span>,<br />
            <span className="text-3xl md:text-4xl text-white/80 leading-none">Project Manager <span className="block mt-[-0.5rem]">& Freelance Developer</span></span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl md:mx-0 mx-auto leading-relaxed">
            An experienced Tech Project Manager with a strong background in leading cross-functional teams, 
            managing tech projects, and delivering impactful digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a href="mailto:rizalhp12345@gmail.com" className="btn-primary cursor-hover">
              Let&apos;s Work Together
            </a>
            <button className="btn-secondary cursor-hover">
              View My Projects
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
              src="https://s14.gifyu.com/images/bKypA.gif"
              alt="Rizal Hanifa Pratama"
              width={400}
              height={400}
              className="rounded-full border-4 border-white/20"
              priority
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}