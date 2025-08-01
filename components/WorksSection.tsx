// components/WorksSection.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, useCarousel } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "embla-carousel-react";
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function WorksSection() {
  const router = useRouter(); // Initialize router
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // State for selected service to display inline slider
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
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
        { src: "https://s14.gifyu.com/images/bKy5T.png", id: "sales-distribution-optimization" },
        { src: "https://s14.gifyu.com/images/bKy5E.png", id: "mvp-agrofaster" },
        { src: "https://s14.gifyu.com/images/bKy5k.png", id: "cms-rantangin" },
        { src: "https://s14.gifyu.com/images/bKy5q.png", id: "attendance-system" },
        { src: "https://s14.gifyu.com/images/bKy5l.png", id: "jogja-dataku-dlhk" },
        { src: "https://s14.gifyu.com/images/bKy5W.png", id: "mvp-sinaou-edu" },
        { src: "https://s14.gifyu.com/images/bKy5c.png", id: "ahp-dss" },
        { src: "https://s14.gifyu.com/images/bKy5j.png", id: "dashboard-oee" },
        { src: "https://s14.gifyu.com/images/bKy5F.png", id: "ayra-ai" },
        { src: "https://s14.gifyu.com/images/bKX3g.png", id: "healthy-games-quiz" }
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
        { src: "https://s14.gifyu.com/images/bKXKI.png", id: "web-developer-portfolio" },
        { src: "https://s14.gifyu.com/images/bKXxK.jpg", id: "web-developer-portfolio" },
        { src: "https://s14.gifyu.com/images/bKXx0.png", id: "web-developer-portfolio" },
        { src: "https://s14.gifyu.com/images/bKXxU.png", id: "web-developer-portfolio" },
        { src: "https://s14.gifyu.com/images/bKXxf.png", id: "web-developer-portfolio" },
        { src: "https://s14.gifyu.com/images/bKXK2.png", id: "web-developer-portfolio" },
        { src: "https://s14.gifyu.com/images/bKXKS.png", id: "web-developer-portfolio" }
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
        { src: "https://s14.gifyu.com/images/bKy5g.png", id: "ai-agent-developer-showcase" }
      ]
    }
  ];

  const displayedServices = services;
  const selectedService = displayedServices.find(service => service.id === selectedServiceId);

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
            <div key={service.id}>
              <div
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
                      if (selectedServiceId === service.id) {
                        setSelectedServiceId(null); // Close slider if already open
                      } else {
                        setSelectedServiceId(service.id); // Open slider for this service
                      }
                    }}
                    className="btn-secondary w-full cursor-hover"
                  >
                    View Project
                  </button>
                </div>
              </div>

              {/* Conditional rendering of the inline slider for mobile */}
              {isMobile && selectedServiceId === service.id && (
                <div className="mt-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">{service.title} Projects</h2>
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
                      {service.carouselImages.map((image, index: number) => (
                        <CarouselItem
                          key={index}
                          className={`md:basis-1/2 lg:basis-1/3 transition-all duration-300 ${
                            hoveredSliderImageIndex !== null && hoveredSliderImageIndex !== index ? 'blur-sm' : ''
                          }`}
                          onMouseEnter={() => setHoveredSliderImageIndex(index)}
                          onMouseLeave={() => setHoveredSliderImageIndex(null)}
                        >
                          <div className="p-0">
                            <Link href={`/projects/${image.id}`}>
                              <div className="block cursor-hover relative overflow-hidden rounded-lg shadow-lg group flex aspect-video items-center justify-center">
                                <Image
                                  src={image.src}
                                  alt={`${service.title} Image ${index + 1}`}
                                  width={800}
                                  height={450}
                                  className="rounded-lg object-cover w-full h-full transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <p className="text-white text-lg font-bold text-center">View Project</p>
                                </div>
                              </div>
                            </Link>
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
                      onClick={() => setSelectedServiceId(null)}
                      className="btn-secondary cursor-hover"
                    >
                      Close List Project
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conditional rendering of the inline slider for desktop */}
        {!isMobile && selectedService && (
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
                {selectedService.carouselImages.map((image, index: number) => (
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
                          src={image.src}
                          alt={`${selectedService.title} Image ${index + 1}`}
                          width={800}
                          height={450}
                          className={`rounded-lg object-cover w-full h-full cursor-pointer transition-transform duration-300 ${
                            hoveredSliderImageIndex === index ? 'scale-125' : ''
                          }`}
                          onClick={() => {
                            router.push(`/projects/${image.id}`);
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
                onClick={() => setSelectedServiceId(null)}
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
