import Image from 'next/image';

export default function WorksSection() {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      description: "Led a cross-functional team to redesign and optimize a major e-commerce platform, resulting in 40% increase in user engagement.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      tags: ["Project Management", "Team Leadership", "UX Strategy"],
      status: "Completed"
    },
    {
      title: "Mobile App Development",
      description: "Managed the development of a mobile application from concept to launch, coordinating between design, development, and QA teams.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
      tags: ["Agile", "Mobile Development", "Risk Management"],
      status: "Completed"
    },
    {
      title: "Digital Transformation Initiative",
      description: "Currently leading a digital transformation project for a traditional manufacturing company, implementing modern project management tools.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      tags: ["Digital Transformation", "Change Management", "Process Optimization"],
      status: "In Progress"
    }
  ];

  return (
    <section id="works" className="scroll-animate">
      <div className="card">
        <h2 className="text-2xl font-semibold mb-6 gradient-text">Works & Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="group hover:bg-purple-800/10 rounded-lg p-4 -m-4 transition-all duration-300">
              <div className="flex gap-4">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg border border-purple-500/20"
                    src={project.image}
                    width={80}
                    height={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-purple-800/30 text-purple-200 rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}