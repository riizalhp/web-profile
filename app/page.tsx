'use client';

import { useEffect } from 'react';

import Navigation from '@/components/Navigation'; // Use Navigation component
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import WorksSection from '@/components/WorksSection';
import TestimonialSection from '@/components/TestimonialSection';
import GetInTouchSection from '@/components/GetInTouchSection';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        
        if (entry.isIntersecting) {
          element.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      
      <Navigation /> {/* Render the updated Navigation component */}
      
      <main>
        <HeroSection />
        <ExperienceSection />
        <WorksSection />
        
        <TestimonialSection />
        <GetInTouchSection />
      </main>
    </div>
  );
}