export default function ExperienceSection() {
  const experiences = [
    {
      company: "Sabila Transport",
      role: "Product Designer - Full-time",
      period: "Oct 2024 - Present",
      isActive: true
    },
    {
      company: "Cipta Daya Inovasi",
      role: "Human Capital - Internship",
      period: "Oct 2024 - Present",
      isActive: false
    },
    {
      company: "Hasnur Centre",
      role: "UI/UX Designer - Internship",
      period: "Aug - Dec 2023",
      isActive: false
    }
  ];

  const companies = [
    { name: "Asva Labs", icon: "grain" },
    { name: "BUILDER", icon: "build" },
    { name: "Refen", icon: "track_changes" }
  ];

  return (
    <div className="card md:col-span-3 lg:col-span-1">
      <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
        <span>Experience</span>
        <span className="text-sm text-gray-400 bg-blue-600/20 px-2 py-1 rounded-full">
          04 Years
        </span>
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item flex space-x-4 items-start">
            <div className="pt-1">
              <span 
                className={`w-2 h-2 ${exp.isActive ? 'bg-green-500' : 'bg-gray-500'} rounded-full inline-block`}
                title={exp.isActive ? 'Currently Active' : 'Past Role'}
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-white">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.role}</p>
            </div>
            <p className="text-sm text-gray-400 ml-auto whitespace-nowrap">
              {exp.period}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <p className="text-sm text-gray-400 mb-4">Companies I Worked With</p>
        <div className="flex items-center space-x-4 text-gray-300 flex-wrap gap-2">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center space-x-2 hover:text-white transition-colors duration-200 cursor-default"
              title={`Worked with ${company.name}`}
            >
              <span className="material-icons text-sm">{company.icon}</span>
              <span className="text-sm">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}