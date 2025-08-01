'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { PaginationContent, PaginationItem } from '@/components/ui/pagination';
import Autoplay from "embla-carousel-autoplay";
import { type UseEmblaCarouselType } from "embla-carousel-react";
import { projectsData, type ProjectDetail } from '@/lib/projects';

import DeniedPopup from '@/components/ui/DeniedPopup';

export default function ProjectDetailPage({ project, otherProjects }: { project: ProjectDetail | undefined, otherProjects: ProjectDetail[] }) {
  const [api, setApi] = useState<any>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null); // New state for hover effect
  const [isDeniedPopupOpen, setIsDeniedPopupOpen] = useState(false);
  const [deniedPopupCompanyUrl, setDeniedPopupCompanyUrl] = useState<string | undefined>(undefined);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const onInit = useCallback((api: any) => {
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

  const handleLinkClick = (link: any) => {
    if (link.type === 'denied') {
      setDeniedPopupCompanyUrl(link.companyProfileUrl);
      setIsDeniedPopupOpen(true);
    } else if (link.url) {
      window.open(link.url, '_blank');
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-lg mb-8">The project you are looking for does not exist.</p>
          <Link href="/" className="btn-primary cursor-hover">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="flex items-center text-white/70 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">{project.title}</h1>

        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.mainImage}
            alt={project.title}
            width={600}
            height={300}
            className="w-full h-auto object-cover mx-auto"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-white/70 leading-relaxed mb-8">{project.overview}</p>

            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside text-white/70 mb-8 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {project.githubLink && (
                <button
                  onClick={() => handleLinkClick(project.githubLink)}
                  className="btn-secondary cursor-hover"
                >
                  View GitHub
                </button>
              )}
              {project.websiteLink && (
                <button
                  onClick={() => handleLinkClick(project.websiteLink)}
                  className="btn-primary cursor-hover"
                >
                  View Website
                </button>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="text-sm px-3 py-1 bg-white/10 text-white/70 rounded-full border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.galleryImages && project.galleryImages.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="space-y-4">
                  {project.galleryImages.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`${project.title} Gallery Image ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Other Projects</h2>
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
              <CarouselContent>
                {otherProjects.map((otherProject, index) => (
                  <CarouselItem
                    key={index}
                    className={`md:basis-1/2 lg:basis-1/3 transition-all duration-300 ${
                      hoveredProjectId && hoveredProjectId !== otherProject.id ? 'blur-sm' : ''
                    }`}
                    onMouseEnter={() => setHoveredProjectId(otherProject.id)}
                    onMouseLeave={() => setHoveredProjectId(null)}
                  >
                    <Link href={`/projects/${otherProject.id}`} className="block cursor-hover">
                      <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <Image
                          src={otherProject.mainImage}
                          alt={otherProject.title}
                          width={500}
                          height={300}
                          className={`w-full h-48 object-cover transition-transform duration-300 ${
                            hoveredProjectId === otherProject.id ? 'scale-110' : ''
                          }`}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-lg font-bold text-center">View Project</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mt-4 text-white text-center">{otherProject.title}</h3>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 cursor-pointer" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 cursor-pointer" />
            </Carousel>
          </div>
        )}
      </div>
      <DeniedPopup 
        isOpen={isDeniedPopupOpen} 
        onClose={() => setIsDeniedPopupOpen(false)} 
        companyProfileUrl={deniedPopupCompanyUrl} 
      />
    </section>
  );
}
