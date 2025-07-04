import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";

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
        <div className="max-w-4xl">
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