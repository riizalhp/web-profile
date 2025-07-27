// app/projects/e-commerce-platform-redesign/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function EcommercePlatformRedesignPage() {
  const router = useRouter();

  // Data statis untuk proyek ini
  const project = {
    id: 1,
    title: "E-Commerce Platform Redesign",
    description: "A comprehensive overhaul of an existing e-commerce platform. This project involved extensive user research, a complete UI/UX redesign, and implementation of new backend features to improve scalability and performance. We focused on enhancing the user journey from product discovery to checkout, leading to a significant boost in conversion rates. Key activities included stakeholder interviews, competitor analysis, wireframing, prototyping, user testing, and agile development sprints.",
    image: "https://i.postimg.cc/rs9TMfjp/Portofolio-2.png",
    tags: ["Project Management", "Team Leadership", "UX Strategy", "E-commerce", "Full-stack Development", "Agile"],
    status: "Completed",
    year: "2024",
    details: [
      "Increased user engagement by 40%.",
      "Reduced checkout abandonment rate by 25%.",
      "Improved website loading speed by 30%.",
      "Successfully integrated new payment gateways."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "AWS"],
    client: "Global Retail Solutions",
    duration: "6 months"
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto card">
        <button 
          onClick={() => router.back()} 
          className="btn-secondary mb-8 flex items-center gap-2 cursor-hover"
        >
          &larr; Back to Works
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{project.title}</h1>
        <p className="text-white/70 text-lg mb-6">{project.description}</p>

        <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Key Information</h3>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>**Status:** {project.status}</li>
              <li>**Year:** {project.year}</li>
              <li>**Client:** {project.client}</li>
              <li>**Duration:** {project.duration}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, i: number) => (
                <span key={i} className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded-full border border-white/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-white">Project Highlights</h3>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            {project.details.map((detail: string, i: number) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-white">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, i: number) => (
              <span key={i} className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}