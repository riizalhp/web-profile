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
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 hero-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-8">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" // Using dummy image
              alt="Rizal Hanifa Pratama"
              width={120}
              height={120}
              className="rounded-full border-4 border-white/20 mx-auto"
              priority
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I&apos;m <span className="text-white gradient-text">Rizal</span>,<br />
            <span className="text-white/80">Project Manager</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            An experienced Tech Project Manager with a strong background in leading cross-functional teams, 
            managing tech projects, and delivering impactful digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary cursor-hover">
              Let&apos;s Work Together
            </button>
            <button className="btn-secondary cursor-hover">
              View My Work
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-8 text-sm text-white/50">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for Freelancing • Yogyakarta, Indonesia • UTC/GMT +7:00
          </div>
        </div>
      </div>
    </section>
  );
}