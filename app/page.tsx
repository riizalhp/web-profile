'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'));
const WorksSection = dynamic(() => import('@/components/WorksSection'));
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection'));
const GetInTouchSection = dynamic(() => import('@/components/GetInTouchSection'));

const Home: React.FC = () => {
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      <main className="w-full">
        <HeroSection />
        <ExperienceSection />
        <WorksSection />
        <TestimonialSection />
        <GetInTouchSection />
      </main>
    </div>
  );
};

export default Home;