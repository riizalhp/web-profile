'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ToolsSection from '@/components/ToolsSection';
import WorksSection from '@/components/WorksSection';
import ConnectSection from '@/components/ConnectSection';
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
          element.classList.remove('animate-out-up', 'animate-out-down');
          element.classList.add('animate-in');
        } else {
          element.classList.remove('animate-in');
          // Determine scroll direction
          const rect = element.getBoundingClientRect();
          if (rect.top > window.innerHeight) {
            element.classList.add('animate-out-down');
          } else {
            element.classList.add('animate-out-up');
          }
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20 p-8 md:p-12 max-w-7xl mx-auto">
        <main className="space-y-16">
          <HeroSection />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ExperienceSection />
              <WorksSection />
            </div>
            
            <div className="space-y-8">
              <SkillsSection />
              <ToolsSection />
              <ConnectSection />
            </div>
          </div>
          
          <GetInTouchSection />
        </main>
      </div>
    </div>
  );
}