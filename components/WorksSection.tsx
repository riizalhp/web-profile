// components/WorksSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function WorksSection() {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter(); // Initialize router

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      description: "Led a cross-functional team to redesign and optimize a major e-commerce platform, resulting in 40% increase in user engagement.",
      image: "https://i.postimg.cc/rs9TMfjp/Portofolio-2.png",
      tags: ["Project Management", "Team Leadership", "UX Strategy"],
      status: "Completed",
      year: "2024",
      path: "/projects/e-commerce-platform-redesign" // Static path for this project
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Managed the development of a mobile application from concept to launch, coordinating between design, development, and QA teams.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
      tags: ["Agile", "Mobile Development", "Risk Management"],
      status: "Completed",
      year: "2023",
      path: "/projects/mobile-app-development" // Static path for this project
    },
    {
      id: 3,
      title: "Digital Transformation Initiative",
      description: "Currently leading a digital transformation project for a traditional manufacturing company, implementing modern project management tools.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      tags: ["Digital Transformation", "Change Management", "Process Optimization"],
      status: "In Progress",
      year: "2024",
      path: "/projects/digital-transformation-initiative" // Static path for this project
    },
    {
      id: 4,
      title: "SaaS Product Launch",
      description: "Orchestrated the launch of a new SaaS product, managing stakeholder expectations and ensuring on-time delivery.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      tags: ["Product Launch", "Stakeholder Management", "Go-to-Market"],
      status: "Completed",
      year: "2023",
      path: "/projects/saas-product-launch" // Static path for this project
    },
    {
      id: 5,
      title: "Enterprise Integration Project",
      description: "Led the integration of multiple enterprise systems, improving operational efficiency by 35%.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      tags: ["System Integration", "Enterprise Solutions", "Process Improvement"],
      status: "Completed",
      year: "2022",
      path: "/projects/enterprise-integration-project" // Static path for this project
    },
    {
      id: 6,
      title: "Cloud Migration Strategy",
      description: "Developed and executed a comprehensive cloud migration strategy for a Fortune 500 company.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      tags: ["Cloud Migration", "Strategic Planning", "Risk Assessment"],
      status: "Completed",
      year: "2022",
      path: "/projects/cloud-migration-strategy" // Static path for this project
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Ubah ini untuk mengarahkan ke jalur statis
  const navigateToProject = (projectPath: string) => {
    router.push(projectPath);
  };

  return (
    <section id="works" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Works & Projects</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A showcase of successful projects and digital solutions I&apos;ve managed and delivered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card scroll-animate cursor-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="project-image"
                />
                
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-white">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigateToProject(project.path)} // Menggunakan project.path
                  className="btn-secondary w-full cursor-hover"
                >
                  Detail Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12 scroll-animate">
            <button
              onClick={() => setShowAll(true)}
              className="btn-primary cursor-hover"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}