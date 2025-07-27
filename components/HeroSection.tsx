import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <div className="md:col-span-2">
        <p className="text-gray-400 mb-4">Hey there!</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Rizal Hanifa Pratama, a{' '}
          <span className="text-blue-400">product designer</span>{' '}
          crafting user-centric design with pixel-perfect precision.
        </h1>
        <div className="flex items-center text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span>Available for Freelancing • Yogyakarta, Indonesia • UTC/GMT +7:00</span>
        </div>
      </div>
      
      <div className="flex justify-center items-center relative">
        <div className="relative w-48 h-48">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              alt="Fatiha Eros Perdana's professional profile picture - UI/UX Product Designer"
              className="w-24 h-24 rounded-full border-4 border-gray-700 hover:border-blue-500 transition-colors duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5kIlEjYNcAfgYtwCkKW_vNGe8wISmf26pKJGchx2m7SyvGDHafZqHB74xb87h0LZNQK8dpSv7bCVhG1K89zYgOpow3Um1M0xEhwts89UEB0FCSs5dl9zGYO6EXDZSZgQUYYExJG_wP92Qv5BN6-3papfSw4yY70BbKJL_b5P3C8sA32fjqzicp5983SbAn6Gc0SErmxYOFN3s-DRrape9f0lVazch8hpU12bEHKGtnRjOqHMPWpVPvuP_qCExfisMD1ALkIEibPke"
              width={96}
              height={96}
              priority
            />
          </div>
          
          {/* Floating Tags */}
          <div className="absolute top-0 right-10 animate-float">
            <span className="tag bg-gray-800 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600 transition-colors cursor-default">
              Visual Design
            </span>
          </div>
          <div className="absolute top-10 -left-12 animate-float-delay-1">
            <span className="tag bg-gray-800 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600 transition-colors cursor-default">
              UI/UX Design
            </span>
          </div>
          <div className="absolute top-1/2 -right-8 animate-float-delay-2">
            <span className="tag bg-gray-800 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600 transition-colors cursor-default">
              SEO Specialist
            </span>
          </div>
          <div className="absolute bottom-8 -right-4 animate-float-delay-3">
            <span className="tag bg-blue-600 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition-colors cursor-default">
              Fatiha Ers.
            </span>
          </div>
          <div className="absolute bottom-4 left-0 animate-float-delay-4">
            <span className="tag bg-gray-800 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600 transition-colors cursor-default">
              Web Developer
            </span>
          </div>
        </div>
      </div>
    </>
  );
}