import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ToolsSection from '@/components/ToolsSection';
import ConnectSection from '@/components/ConnectSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="p-8 md:p-12 max-w-7xl mx-auto">
        <Header />
        
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HeroSection />
          <ExperienceSection />
          <div className="space-y-8 md:col-span-3 lg:col-span-1">
            <SkillsSection />
            <ToolsSection />
          </div>
          <ConnectSection />
        </main>
      </div>
    </div>
  );
}