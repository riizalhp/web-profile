// components/WorksSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

export default function WorksSection() {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null); // State to hold the selected service
  const router = useRouter(); // Initialize router

  const services = [
    {
      id: 1,
      title: "Project Manager",
      description: "Leading projects from conception to completion, ensuring timely delivery and stakeholder satisfaction.",
      image: "https://s14.gifyu.com/images/bKyHu.png",
      tags: ["Planning", "Execution", "Monitoring", "Closing"],
      status: "Available",
      year: "Ongoing",
      path: "/services/project-manager",
      carouselImages: [
        "https://s14.gifyu.com/images/bKyHu.png",
        "https://i.postimg.cc/rs9TMfjp/Portofolio-2.png", // Placeholder
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg" // Placeholder
      ]
    },
    {
      id: 2,
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
      id: 3,
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

  const handleViewProjectClick = (service: any) => {
    if (showInfo && selectedService && selectedService.id === service.id) {
      handleCloseInfo(); // Close if the same project is already open
    } else {
      setSelectedService(service);
      setShowInfo(true); // Show info for the new project
    }
  };

  const handleCloseInfo = () => {
    setSelectedService(null);
    setShowInfo(false); // Hide info when closed
  };

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
                  onClick={() => handleViewProjectClick(service)} // Menggunakan handleViewProjectClick
                  className="btn-secondary w-full cursor-hover"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {showInfo && selectedService && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">{selectedService.title} Projects</h3>
            <Carousel
              className="w-full max-w-full mx-auto"
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent className="-ml-1">
                    {selectedService.carouselImages.map((image: string, index: number) => (
                      <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Image
                            src={image}
                            alt={`${selectedService.title} Project ${index + 1}`}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover w-full h-auto"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-center mt-8">
              <button
                onClick={handleCloseInfo}
                className="btn-primary cursor-hover"
              >
                Close Project View
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}