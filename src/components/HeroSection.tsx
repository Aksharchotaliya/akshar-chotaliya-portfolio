import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Instagram, Linkedin, Github, Youtube } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary-light))] to-transparent opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl">
          <div>
            <div className="animate-fade-in">
              <h1 className="text-hero font-serif mb-6">
                Akshar <span className="text-accent">Chotaliya</span>
              </h1>
            </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-tagline mb-8">
              Tech meets ambition. <span className="text-accent">Business meets purpose.</span>
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-xl text-[hsl(var(--text-secondary))] mb-12 max-w-2xl leading-relaxed">
              Tech enthusiast with a business mindset, building brands and ideas for the future.
            </p>
          </div>
          
            <div className="animate-scale-in flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.6s" }}>
              <button className="btn-gold group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-outline">
                Contact Me
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="animate-scale-in flex space-x-4 mt-8" style={{ animationDelay: "0.8s" }}>
              <a
                href="https://www.instagram.com/akshar_chotaliya/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/akshar-chotaliya-182401230/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://github.com/Aksharchotaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@aksharchotaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="animate-scale-in lg:justify-self-end" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-[var(--shadow-strong)] border-4 border-white/20">
                <img 
                  src="/lovable-uploads/06d2b54b-d6d1-4e5c-adca-74ba1316e02b.png" 
                  alt="Akshar Chotaliya Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[hsl(var(--gold))] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[hsl(var(--gold))] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};