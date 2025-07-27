import Image from 'next/image';

export default function ToolsSection() {
  const tools = [
    {
      name: "GitHub Projects",
      src: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"
    },
    {
      name: "Trello", 
      src: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
    },
    {
      name: "Notion",
      src: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
    },
    {
      name: "Canva",
      src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
    },
    {
      name: "Figma",
      src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
    }
  ];

  return (
    <section className="scroll-animate">
      <div className="card">
        <h2 className="text-xl font-semibold mb-2 gradient-text">Essential Stack</h2>
        <p className="text-sm text-gray-400 mb-6">
          A Comprehensive Collection of Useful Tools to Support and Optimize My Project Management Workflow
        </p>
        <div className="grid grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group hover:scale-110 transition-all duration-300 cursor-pointer"
              title={tool.name}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  alt={`${tool.name} - Professional project management tool used by Rizal Hanifa Pratama`}
                  className="w-full h-12 object-cover rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-shadow duration-200 border border-purple-500/20"
                  src={tool.src}
                  width={48}
                  height={48}
                />
              </div>
              <p className="text-xs text-center mt-2 text-gray-400 group-hover:text-purple-300 transition-colors">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}