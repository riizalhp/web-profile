import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[80vh] items-center">
      <div className="md:col-span-2">
        <p className="text-gray-400 mb-4">Hey there!</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          I'm <span className="gradient-text">Rizal</span>,{' '}
          <span className="gradient-text">Project Manager</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          An experienced Tech Project Manager with a strong background in leading cross-functional teams, 
          managing tech projects, and delivering impactful digital solutions. Active in both startup and 
          corporate environments.
        </p>
        <div className="flex items-center text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span>Available for Freelancing • Yogyakarta, Indonesia • UTC/GMT +7:00</span>
        </div>
      </div>
      
      <div className="flex justify-center items-center relative">
        <div className="relative w-64 h-64">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <Image
                alt="Rizal Hanifa Pratama's professional profile picture - Tech Project Manager"
                className="relative w-32 h-32 rounded-full border-4 border-purple-500 hover:border-pink-500 transition-colors duration-300 object-cover"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                width={128}
                height={128}
                priority
              />
            </div>
          </div>
          
          {/* Floating Tags */}
          <div className="absolute top-0 right-10 animate-float">
            <span className="tag bg-purple-800/50 text-purple-200 text-xs px-3 py-1 rounded-full hover:bg-purple-600/50 transition-colors cursor-default">
              Project Planning
            </span>
          </div>
          <div className="absolute top-10 -left-12 animate-float-delay-1">
            <span className="tag bg-purple-800/50 text-purple-200 text-xs px-3 py-1 rounded-full hover:bg-purple-600/50 transition-colors cursor-default">
              Team Leadership
            </span>
          </div>
          <div className="absolute top-1/2 -right-8 animate-float-delay-2">
            <span className="tag bg-purple-800/50 text-purple-200 text-xs px-3 py-1 rounded-full hover:bg-purple-600/50 transition-colors cursor-default">
              Risk Management
            </span>
          </div>
          <div className="absolute bottom-8 -right-4 animate-float-delay-3">
            <span className="tag bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors cursor-default">
              Rizal HP
            </span>
          </div>
          <div className="absolute bottom-4 left-0 animate-float-delay-4">
            <span className="tag bg-purple-800/50 text-purple-200 text-xs px-3 py-1 rounded-full hover:bg-purple-600/50 transition-colors cursor-default">
              Digital Solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}