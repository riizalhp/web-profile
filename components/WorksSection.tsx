// components/WorksSection.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, useCarousel } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "embla-carousel-react";

export default function WorksSection() {
  const router = useRouter(); // Initialize router

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // State for selected service to display inline slider
  const [selectedService, setSelectedService] = useState<any>(null); // Using 'any' for simplicity, can define a type
  const [hoveredSliderImageIndex, setHoveredSliderImageIndex] = useState<number | null>(null); // New state for hover effect on slider images

  const onSelect = useCallback((api: CarouselApi) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const onInit = useCallback((api: CarouselApi) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    onInit(api);
    api.on("reInit", onInit);
    api.on("select", onSelect);
  }, [api, onInit, onSelect]);

  const services = [
    {
      id: "project-manager-work-service",
      title: "Project Manager",
      description: "Leading projects from conception to completion, ensuring timely delivery and stakeholder satisfaction.",
      image: "https://s14.gifyu.com/images/bKyHu.png",
      tags: ["Planning", "Execution", "Monitoring", "Closing"],
      status: "Available",
      year: "Ongoing",
      path: "/services/project-manager",
      carouselImages: [
        "https://s14.gifyu.com/images/bKy5T.png", // PT. AMDK AIRKU
        "https://s14.gifyu.com/images/bKy5E.png", // Agrofaster
        "https://s14.gifyu.com/images/bKy5k.png", // Rantangin
        "https://s14.gifyu.com/images/bKy5q.png", // Seven Inc
        "https://s14.gifyu.com/images/bKy5l.png", // Jogja Dataku Dinas Lingkungan Hidup Yogyakarta
        "https://s14.gifyu.com/images/bKy5W.png", // Sinaou Education
        "https://s14.gifyu.com/images/bKy5c.png", // PT Pindad
        "https://s14.gifyu.com/images/bKy5j.png", // PT Gemala Kempa Daya
        "https://s14.gifyu.com/images/bKy5F.png"  // Ayra AI
      ]
    },
    {
      id: "web-developer-portfolio",
      title: "Web Developer",
      description: "Crafting responsive and high-performance web applications using modern frameworks and best practices.",
      image: "https://s14.gifyu.com/images/bKyHd.png",
      tags: ["Frontend", "Backend", "Fullstack", "UI/UX"],
      status: "Available",
      year: "Ongoing",
      path: "/services/web-developer",
      carouselImages: [
        "https://s14.gifyu.com/images/bKyHd.png",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", // Placeholder
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg" // Placeholder
      ]
    },
    {
      id: "ai-agent-developer-showcase",
      title: "AI Agent Developer",
      description: "Developing intelligent AI agents for automation, data analysis, and enhanced user experiences with intelligent.",
      image: "https://s14.gifyu.com/images/bKyH6.png",
      tags: ["Machine Learning", "NLP", "Automation", "n8n"],
      status: "Available",
      year: "Ongoing",
      path: "/services/ai-agent-developer",
      carouselImages: [
        "https://s14.gifyu.com/images/bKyH6.png",
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg", // Placeholder
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" // Placeholder
      ]
    }
  ];

  const displayedServices = services;

  return (
    <section id="works" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Works Service</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore the range of services we offer to help you achieve your digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div
              key={service.id}
              className="project-card scroll-animate cursor-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="project-image"
                />

              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-white">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (selectedService && selectedService.id === service.id) {
                      setSelectedService(null); // Close slider if already open for this service
                    } else {
                      setSelectedService(service); // Open slider for this service
                    }
                  }}
                  className="btn-secondary w-full cursor-hover"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Conditional rendering of the inline slider */}
        {selectedService && (
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">{selectedService.title} Projects</h2>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {selectedService.carouselImages.map((imgSrc: string, index: number) => (
                  <CarouselItem
                    key={index}
                    className={`md:basis-1/2 lg:basis-1/3 transition-all duration-300 ${
                      hoveredSliderImageIndex !== null && hoveredSliderImageIndex !== index ? 'blur-sm' : ''
                    }`}
                    onMouseEnter={() => setHoveredSliderImageIndex(index)}
                    onMouseLeave={() => setHoveredSliderImageIndex(null)}
                  >
                    <div className="p-0">
                      <div className="flex aspect-video items-center justify-center p-6">
                        <Image
                          src={imgSrc}
                          alt={`${selectedService.title} Image ${index + 1}`}
                          width={800}
                          height={450}
                          className={`rounded-lg object-cover w-full h-full cursor-pointer transition-transform duration-300 ${
                            hoveredSliderImageIndex === index ? 'scale-110' : ''
                          }`}
                          onClick={() => {
                            router.push(`/projects/${selectedService.id}`);
                          }}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <div className="py-2 text-center">
                <div className="flex justify-center space-x-2">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === selectedIndex ? 'bg-white' : 'bg-gray-500'}`}
                      onClick={() => api?.scrollTo(index)}
                    />
                  ))}
                </div>
              </div>
            </Carousel>
            <div className="text-center mt-8">
              <button
                onClick={() => setSelectedService(null)}
                className="btn-secondary cursor-hover"
              >
                Close List Project
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}