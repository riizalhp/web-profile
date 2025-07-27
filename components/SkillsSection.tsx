export default function SkillsSection() {
  const skills = [
    "Information Architecture",
    "Story Boarding", 
    "Visual Design",
    "Framer & No Code",
    "SEO Specialist",
    "Illustration"
  ];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Skills & Expertise</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="tag skill-tag"
            title={`Expert in ${skill}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}