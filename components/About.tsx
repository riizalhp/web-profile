
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const content = t('about');

  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-zinc-900">
              {content.title} <span className="font-bold">{content.titleBold}</span><span style={{ color: '#78ff00' }}>.</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto mt-4">
              {content.subtitle}
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none text-zinc-700 mb-16 text-center">
            <p>{content.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              {/* Experience */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-zinc-800 mb-6 border-b pb-2">{content.experienceTitle}</h3>
                <div className="space-y-6">
                  {content.experience.map((exp: any, index: number) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-8 text-zinc-400">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900">{exp.role}</h4>
                        <p className="text-zinc-700">{exp.company}</p>
                        <p className="text-sm text-zinc-500">{exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Do */}
              <div>
                <h3 className="text-2xl font-bold text-zinc-800 mb-6 border-b pb-2">{content.expertiseAreasTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {content.expertiseAreas.map((area: any, index: number) => (
                        <div key={index}>
                            <h4 className="font-bold text-zinc-900 text-lg mb-1">{area.title}</h4>
                            <p className="text-zinc-600">{area.description}</p>
                        </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Skills & Certificates Column */}
            <div className="md:col-span-1">
              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold text-zinc-800 mb-6 border-b pb-2">{content.skillsTitle}</h3>
                <div className="relative w-full overflow-hidden space-y-4">
                    {/* Row 1: PM Skills (Right to Left) */}
                    <div className="flex flex-nowrap">
                        <ul className="flex flex-none items-center animate-scroll-slow">
                            {content.pmSkills.map((skill: string, index: number) => (
                                <li key={`pm-a-${index}`} className="mx-2 whitespace-nowrap">
                                    <span className="bg-zinc-100 text-zinc-700 text-sm font-medium px-3 py-1.5 rounded-full">
                                        {skill}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-none items-center animate-scroll-slow" aria-hidden="true">
                            {content.pmSkills.map((skill: string, index: number) => (
                                <li key={`pm-b-${index}`} className="mx-2 whitespace-nowrap">
                                    <span className="bg-zinc-100 text-zinc-700 text-sm font-medium px-3 py-1.5 rounded-full">
                                        {skill}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Row 2: Dev Skills (Left to Right) */}
                    <div className="flex flex-nowrap">
                        <ul className="flex flex-none items-center animate-scroll-slow-reverse">
                            {content.devSkills.map((skill: string, index: number) => (
                                <li key={`dev-a-${index}`} className="mx-2 whitespace-nowrap">
                                    <span className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full">
                                        {skill}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-none items-center animate-scroll-slow-reverse" aria-hidden="true">
                            {content.devSkills.map((skill: string, index: number) => (
                                <li key={`dev-b-${index}`} className="mx-2 whitespace-nowrap">
                                    <span className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full">
                                        {skill}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Certificates */}
              {content.certificates && content.certificates.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-zinc-800 mb-6 border-b pb-2">{content.certificatesTitle}</h3>
                  <div className="space-y-4">
                    {content.certificates.map((cert: any, index: number) => (
                      <a
                        key={index}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group transition-opacity hover:opacity-75"
                      >
                         <div className="flex items-start">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-zinc-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          <div>
                            <h4 className="font-bold text-zinc-900 group-hover:underline">{cert.name}</h4>
                            <p className="text-sm text-zinc-500">{cert.issuer}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mt-16 md:mt-24">
            <h3 className="text-3xl font-bold text-zinc-800 mb-8 text-center">{content.testimonialsTitle}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {content.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="bg-zinc-50 p-6 rounded-lg border border-zinc-200 flex flex-col text-center">
                  <img
                    src={testimonial.image}
                    alt={`Photo of ${testimonial.author}`}
                    className="w-20 h-20 rounded-full object-cover mb-4 shadow-md mx-auto"
                  />
                  <p className="text-zinc-700 italic flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-4 pt-4 border-t border-zinc-200 w-full">
                    <p className="font-bold text-zinc-900">&mdash; {testimonial.author}</p>
                    <p className="text-sm text-zinc-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;