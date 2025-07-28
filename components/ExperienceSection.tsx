'use client';

import Image from 'next/image';
import { Github, Trello, FolderOpen, Layout, Disc } from 'lucide-react';
import ConnectCard from './ui/connect-card';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Contsolution Development",
      location: "Yogyakarta",
      role: "Project Manager",
      period: "Aug 2021 – Present",
      isActive: true
    },
    {
      company: "PT. Gemala Kempa Daya",
      location: "Jakarta Utara",
      role: "Product Owner Intern",
      period: "Jun 2024 – Aug 2024",
      isActive: false
    },
    {
      company: "ITC UPN \"Veteran\" Yogyakarta",
      location: "Yogyakarta",
      role: "Head of Project Manager Department",
      period: "Feb 2023 – Jun 2024",
      isActive: false
    }
  ];

  const companiesWorkedWith = [
    { name: "Company 1", logo: "https://s14.gifyu.com/images/bKywC.png" },
    { name: "Company 2", logo: "https://s14.gifyu.com/images/bKywr.png" },
    { name: "Company 3", logo: "https://s14.gifyu.com/images/bKywD.png" },
    { name: "Company 4", logo: "https://s14.gifyu.com/images/bKywP.png" },
    { name: "Company 5", logo: "https://s14.gifyu.com/images/bKy3S.png" },
    { name: "Company 6", logo: "https://s14.gifyu.com/images/bKy3L.png" },
    { name: "Company 7", logo: "https://s14.gifyu.com/images/bKy3T.png" },
    { name: "Company 8", logo: "https://s14.gifyu.com/images/bKy3h.png" },
    { name: "Company 9", logo: "https://s14.gifyu.com/images/bKy3q.png" },
    { name: "Company 10", logo: "https://s14.gifyu.com/images/bKy3W.png" },
    { name: "Company 11", logo: "https://s14.gifyu.com/images/bKy3j.png" },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Column */}
          <div>
            <div className="card scroll-animate p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Experience</h2>
                <span className="text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  3+ Years
                </span>
              </div>
              
              <div className="space-y-2">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line - only show for items that are not the last */}
                    {index < experiences.length - 1 && <div className="timeline-line"></div>}
                    
                    <div className="flex items-start space-x-2 sm:space-x-4">
                      <div className={`timeline-dot ${exp.isActive ? 'active' : ''}`}></div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-sm text-white">{exp.company}</h3>
                            <p className="text-white/60 text-sm">{exp.location}</p>
                          </div>
                          <p className="text-sm text-white/50 whitespace-nowrap ml-4">
                            {exp.period}
                          </p>
                        </div>
                        
                        <p className="text-white font-medium text-xxs sm:text-xs">{exp.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company | Worked With Section - Moved inside Experience Card */}
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Company | Worked With</h3>
                <div className="overflow-hidden relative py-2">
                  <div className="flex whitespace-nowrap company-scroll-animation">
                    {companiesWorkedWith.map((company, index) => (
                      <div key={index} className="tool-item cursor-hover flex-shrink-0 mx-1 sm:mx-2">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {companiesWorkedWith.map((company, index) => (
                      <div key={`duplicate-${index}`} className="tool-item cursor-hover flex-shrink-0 mx-1">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Tools & Connect Column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-8">
              <SkillsCard />
              <ToolsCard />
            </div>
            <div className="md:row-span-2">
              <ConnectCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsCard() {
  const skills = [
    "Project Planning", "Project Scheduling", "Budgeting", "Cost Management",
    "Risk Management", "Project Documentation", "Leadership", "Communication",
    "Time Management", "Team Management", "Problem Solving", "Adaptability"
  ];

  const topSkills = [
    "Project Planning",
    "Project Scheduling", 
    "Budgeting",
    "Cost Management",
  ];

  const middleSkills = [
    "Risk Management",
    "Project Documentation",
    "Leadership",
    "Communication",
  ];

  const bottomSkills = [
    "Time Management",
    "Team Management",
    "Problem Solving",
    "Adaptability"
  ];

  return (
    <div className="card scroll-animate">
      <h3 className="text-xl font-bold mb-6 text-white">Skills & Expertise</h3>
      
      <div className="space-y-4 overflow-hidden">
        {/* Top row - scrolling left */}
        <div className="relative">
          <div className="flex space-x-2 sm:space-x-3 skill-scroll-left">
            {[...topSkills, ...topSkills].map((skill, index) => ( // Duplicate for infinite scroll effect
              <span 
                key={index}
                className="tag skill-item whitespace-nowrap"
                title={`Expert in ${skill}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Middle row - scrolling right */}
        <div className="relative">
          <div className="flex space-x-2 sm:space-x-3 skill-scroll-right">
            {[...middleSkills, ...middleSkills].map((skill, index) => ( // Duplicate for infinite scroll effect
              <span 
                key={index}
                className="tag skill-item whitespace-nowrap"
                title={`Expert in ${skill}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row - scrolling left */}
        <div className="relative">
          <div className="flex space-x-2 sm:space-x-3 skill-scroll-left">
            {[...bottomSkills, ...bottomSkills].map((skill, index) => ( // Duplicate for infinite scroll effect
              <span 
                key={index}
                className="tag skill-item whitespace-nowrap"
                title={`Expert in ${skill}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolsCard() {
  const tools = [
    { name: "GitHub", icon: Github },
    { name: "Trello", icon: Trello },
    { name: "Notion", icon: FolderOpen }, // Using FolderOpen as a placeholder, Notion icon not directly in Lucide
    { name: "Canva", icon: Layout }, // Using Layout as a placeholder
    { name: "Figma", icon: Disc }, // Using Disc as a placeholder
  ];

  return (
    <div className="card scroll-animate">
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Essential Stack</h3>
      <p className="text-sm text-white/60 mb-6">
        A Comprehensive Collection of Useful Tools to Support and Optimize My Project Management Workflow
      </p>
      <div className="flex justify-center gap-x-2 sm:gap-x-4 items-center">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div key={index} className="tool-item cursor-hover flex-shrink-0">
              <Icon className="tool-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

