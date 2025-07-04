import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-[hsl(var(--primary))] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Akshar Chotaliya</h3>
            <p className="text-lg text-white/80 mb-6">
              Tech meets ambition. Business meets purpose.
            </p>
            <div className="border-t border-white/20 pt-6 mt-6">
              <p className="text-white/60 text-sm">
                © 2024 Akshar Chotaliya. All rights reserved. | 
                <span className="ml-2">aksharchotaliya.com</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;