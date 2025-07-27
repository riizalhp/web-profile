export default function SkillsSection() {
  const topSkills = [
    "Project Planning",
    "Project Scheduling", 
    "Budgeting",
    "Cost Management",
    "Risk Management",
    "Project Documentation"
  ];

  const bottomSkills = [
    "Leadership",
    "Communication",
    "Time Management",
    "Team Management",
    "Problem Solving",
    "Adaptability"
  ];

  return (
    <section id="skills" className="scroll-animate">
      <div className="card">
        <h2 className="text-xl font-semibold mb-6 gradient-text">Skills & Expertise</h2>
        
        <div className="space-y-4 overflow-hidden">
          {/* Top row - scrolling left */}
          <div className="relative">
            <div className="flex space-x-3 skill-scroll-left">
              {[...topSkills, ...topSkills].map((skill, index) => (
                <span 
                  key={index}
                  className="tag skill-tag whitespace-nowrap"
                  title={`Expert in ${skill}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Bottom row - scrolling right */}
          <div className="relative">
            <div className="flex space-x-3 skill-scroll-right">
              {[...bottomSkills, ...bottomSkills].map((skill, index) => (
                <span 
                  key={index}
                  className="tag skill-tag whitespace-nowrap"
                  title={`Expert in ${skill}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}