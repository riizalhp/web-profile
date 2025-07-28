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
      period: "Aug 2024 – Present",
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
                  1+ Years
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
    { name: "GitHub", icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.804 1.307 3.49.997.107-.775.418-1.307.762-1.606-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ) },
    { name: "Trello", icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="#0079BF" d="M7 2h10c1.104 0 2 .896 2 2v16c0 1.104-.896 2-2 2H7c-1.104 0-2-.896-2-2V4c0-1.104.896-2 2-2zm0 2v16h10V4H7zm2 2h6v2H9V6zm0 4h6v2H9v-2zm0 4h4v2H9v-2z"/>
      </svg>
    ) },
    { name: "Notion", icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M16 0H8C3.582 0 0 3.582 0 8v8c0 4.418 3.582 8 8 8h8c4.418 0 8-3.582 8-8V8c0-4.418-3.582-8-8-8zm-1 4h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2zm10-12h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2z"/>
      </svg>
    ) },
    { name: "Canva", icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" {...props}>
<path d="M 25 2 C 12.310434 2 2 12.310434 2 25 C 2 37.689566 12.310434 48 25 48 C 37.689566 48 48 37.689566 48 25 C 48 12.310434 37.689566 2 25 2 z M 25 4 C 36.608434 4 46 13.391566 46 25 C 46 36.608434 36.608434 46 25 46 C 13.391566 46 4 36.608434 4 25 C 4 13.391566 13.391566 4 25 4 z M 15.117188 17.082031 C 14.400188 17.082031 13.612203 17.295609 12.908203 17.724609 C 9.8402031 19.593609 7.8598125 23.857375 8.2578125 27.109375 C 8.3838125 28.142375 8.8130469 29.27225 9.6230469 30.03125 C 10.169047 30.53725 11.157312 31.160156 12.320312 31.160156 C 13.580312 31.160156 14.645563 30.675313 15.601562 30.070312 C 16.249562 29.656313 16.789094 29.153625 17.246094 28.640625 C 17.567094 29.319625 18.234734 29.777344 18.927734 29.777344 C 19.470734 29.777344 19.980234 29.505047 20.365234 28.998047 C 20.481234 29.466047 20.807625 29.777344 21.390625 29.777344 C 21.816625 29.777344 22.727266 29.352703 23.572266 28.720703 L 23.486328 29.171875 C 23.463328 29.267875 23.454891 29.364891 23.462891 29.462891 C 23.488891 29.677891 23.636078 29.775391 23.830078 29.775391 C 24.237078 29.775391 24.830172 29.38525 24.951172 28.78125 L 25.136719 27.925781 C 25.374719 26.854781 26.940719 25.236328 27.386719 25.236328 C 27.443719 25.236328 27.488047 25.275516 27.498047 25.353516 C 27.531047 25.626516 27.000531 26.521891 26.769531 27.962891 C 26.725531 28.207891 26.718141 28.457125 26.744141 28.703125 C 26.822141 29.346125 27.203344 29.773438 27.902344 29.773438 C 28.506344 29.773437 29.795844 29.264813 30.714844 28.257812 C 30.783844 28.820813 30.903031 29.301375 31.082031 29.609375 C 31.159031 29.745375 31.334234 29.783203 31.490234 29.783203 C 31.685234 29.783203 31.956094 29.706781 32.246094 29.550781 C 32.944094 29.160781 33.856516 28.282578 34.728516 27.017578 C 34.844516 27.036578 34.939641 27.037109 35.056641 27.037109 C 35.405641 27.037109 35.796203 26.913453 36.158203 26.689453 C 36.021203 27.128453 35.970484 27.574234 36.021484 27.990234 C 36.144484 29.002234 37.016203 29.783203 37.908203 29.783203 C 38.431203 29.783203 38.943125 29.510437 39.328125 29.023438 C 39.445125 29.667437 39.858422 30.348813 40.857422 30.757812 C 40.920422 30.796813 40.998641 30.796875 41.056641 30.796875 C 41.250641 30.796875 41.369563 30.661859 41.351562 30.505859 C 41.344562 30.445859 41.292078 30.348484 41.205078 30.271484 C 40.965078 30.057484 40.708672 29.686094 40.638672 29.121094 C 40.605672 28.848094 40.621938 28.517906 40.710938 28.128906 C 40.927937 27.213906 40.974938 26.96075 40.960938 26.84375 C 40.932938 26.60975 40.766266 26.511719 40.572266 26.511719 C 40.164266 26.511719 39.61275 26.919375 39.46875 27.484375 C 39.24475 28.340375 38.635516 28.925781 38.228516 28.925781 C 37.724516 28.925781 37.465484 28.379453 37.396484 27.814453 C 37.224484 26.413453 38.117969 24.679688 39.417969 24.679688 C 39.805969 24.679688 40.211766 24.836562 40.259766 25.226562 C 40.333766 25.829562 39.695562 25.692312 39.726562 25.945312 C 39.757562 26.198312 40.194375 26.277344 40.484375 26.277344 C 40.775375 26.277344 41.624906 26.082844 41.503906 25.089844 C 41.408906 24.310844 40.586719 23.939453 39.636719 23.939453 C 38.520719 23.939453 37.568922 24.507016 36.919922 25.291016 C 36.833922 25.341016 36.743484 25.427109 36.646484 25.537109 C 36.432484 25.791109 36.045016 26.025391 35.541016 26.025391 C 35.483016 26.025391 35.347656 26.005859 35.347656 26.005859 C 35.675656 25.363859 35.908203 24.702188 35.908203 24.117188 C 35.908203 23.182187 35.3275 22.714844 34.6875 22.714844 C 33.8735 22.714844 33.039062 23.435891 33.039062 24.837891 C 33.039062 25.674891 33.368172 26.356562 33.951172 26.726562 C 33.292172 27.817563 32.380141 28.714844 32.244141 28.714844 C 32.167141 28.714844 32.149859 28.636594 32.130859 28.558594 C 32.033859 28.189594 31.935547 27.467531 31.935547 27.019531 C 31.935547 26.221531 32.090859 25.423406 32.380859 24.566406 C 32.419859 24.469406 32.439453 24.370969 32.439453 24.292969 C 32.439453 24.059969 32.284312 23.943359 32.070312 23.943359 C 31.645312 23.943359 31.004609 24.428547 30.849609 24.935547 C 30.694609 25.421547 30.636719 26.084344 30.636719 26.902344 C 30.636719 27.054344 30.639531 27.203563 30.644531 27.351562 C 29.854531 28.395562 28.874312 28.767578 28.570312 28.767578 C 28.189313 28.767578 28.116156 28.453141 28.160156 28.244141 C 28.366156 27.262141 28.677125 26.120328 28.953125 25.361328 C 29.082125 24.991328 29.139234 24.661797 29.115234 24.466797 C 29.072234 24.115797 28.818281 23.941406 28.488281 23.941406 C 27.712281 23.941406 26.415031 24.756187 25.582031 25.867188 L 25.847656 24.666016 C 25.872656 24.550016 25.880094 24.450047 25.871094 24.373047 C 25.843094 24.139047 25.695953 24.042969 25.501953 24.042969 C 24.550953 24.042969 24.381922 24.525141 24.294922 24.994141 C 24.272922 25.107141 23.997438 26.537359 23.773438 27.693359 C 23.061437 28.332359 22.291031 28.746094 22.082031 28.746094 C 21.818031 28.746094 21.731609 28.538719 21.724609 28.386719 C 21.714609 28.212719 21.908078 27.368234 21.955078 27.115234 C 21.980078 26.999234 21.987516 26.902219 21.978516 26.824219 C 21.952516 26.609219 21.804797 26.511719 21.591797 26.511719 C 21.182797 26.511719 20.629328 26.900375 20.486328 27.484375 C 20.260328 28.341375 19.674578 28.925781 19.267578 28.925781 C 18.763578 28.925781 18.483016 28.381937 18.416016 27.835938 C 18.268016 26.626938 19.039547 24.679688 20.435547 24.679688 C 20.823547 24.679687 21.227391 24.816078 21.275391 25.205078 C 21.352391 25.829562 20.732625 25.692312 20.765625 25.945312 C 20.795625 26.198312 21.231906 26.277344 21.503906 26.277344 C 21.814906 26.277344 22.642437 26.080422 22.523438 25.107422 C 22.428437 24.327422 21.62625 23.9375 20.65625 23.9375 C 18.41425 23.9375 16.907781 26.142437 17.050781 27.898438 C 16.470781 28.573437 15.892094 28.985813 14.871094 29.507812 C 14.286094 29.799813 13.629766 29.974609 13.009766 29.974609 C 11.148766 29.974609 10.239594 28.26125 10.058594 26.78125 C 9.5945938 22.98425 12.932766 17.765625 15.259766 17.765625 C 15.802766 17.765625 16.286953 18.236656 16.376953 18.972656 C 16.515953 20.116656 16.494547 20.927016 15.310547 21.916016 C 15.181547 22.023016 15.143937 22.198734 15.210938 22.302734 C 15.310937 22.457734 15.629484 22.472484 16.271484 22.146484 C 17.530484 21.511484 17.984703 20.531484 17.845703 19.396484 C 17.691703 18.136484 16.591187 17.082031 15.117188 17.082031 z M 34.222656 23.466797 C 34.435656 23.466797 34.707031 23.777516 34.707031 24.478516 C 34.707031 24.849516 34.630141 25.219844 34.494141 25.589844 C 34.145141 25.220844 33.873047 24.655375 33.873047 24.109375 C 33.873047 23.817375 33.970656 23.467797 34.222656 23.466797 z"></path>
</svg>
    ) },,
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

