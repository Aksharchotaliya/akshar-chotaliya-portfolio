import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Instagram, Linkedin, Github, Youtube } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <CertificatesSection />
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
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://www.instagram.com/akshar_chotaliya/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akshar-chotaliya-182401230/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Aksharchotaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@aksharchotaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            
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