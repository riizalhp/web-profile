export default function ExperienceSection() {
  const experiences = [
    {
      company: "Contsolution Development",
      location: "Yogyakarta",
      description: "Digital solutions provider that empowers businesses to grow through technology and creativity.",
      role: "Project Manager",
      period: "Aug 2021 – Present",
      isActive: true
    },
    {
      company: "PT. Gemala Kempa Daya",
      location: "Jakarta Utara",
      description: "Automotive manufacturing company specializing in high-quality vehicle components for the global market.",
      role: "Product Owner Intern",
      period: "Jun 2024 – Aug 2024",
      isActive: false
    },
    {
      company: "ITC UPN \"Veteran\" Yogyakarta",
      location: "Yogyakarta",
      description: "Active IT community that has been fostering digital innovation and technical skills for students since 2004.",
      role: "Head of Project Manager Department",
      period: "Feb 2023 – Jun 2024",
      isActive: false
    }
  ];

  return (
    <section id="experience" className="scroll-animate">
      <div className="card">
        <h2 className="text-2xl font-semibold mb-6 flex justify-between items-center">
          <span className="gradient-text">Experience</span>
          <span className="text-sm text-purple-300 bg-purple-600/20 px-3 py-1 rounded-full border border-purple-500/30">
            3+ Years
          </span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="flex items-start space-x-4">
                <div className="pt-2">
                  <span 
                    className={`w-3 h-3 ${exp.isActive ? 'bg-green-500' : 'bg-purple-500'} rounded-full inline-block shadow-lg`}
                    title={exp.isActive ? 'Currently Active' : 'Past Role'}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-white text-lg">{exp.company}</h3>
                      <p className="text-purple-300 text-sm">{exp.location}</p>
                    </div>
                    <p className="text-sm text-gray-400 whitespace-nowrap ml-4">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                    {exp.description}
                  </p>
                  <p className="text-purple-200 font-medium">{exp.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}