export const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-[hsl(var(--bg-primary))] to-[hsl(var(--bg-secondary))]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Driven by innovation, guided by purpose
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="card-elegant p-8">
              <p className="text-lg leading-relaxed text-[hsl(var(--text-primary))] mb-6">
                My journey began in the corridors of computer engineering, where late nights debugging code 
                taught me that <span className="text-accent font-semibold">persistence conquers complexity</span>. 
                What started as a fascination with algorithms evolved into a deeper understanding of how 
                technology can solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed text-[hsl(var(--text-primary))] mb-6">
                From hostel life to hackathons, from health setbacks to breakthrough moments, each experience 
                shaped my perspective on business and innovation. I learned that true entrepreneurship isn't 
                just about building products—it's about building solutions that matter.
              </p>
              
              <p className="text-lg leading-relaxed text-[hsl(var(--text-primary))]">
                Today, I channel this philosophy through my ventures: Ramniklal Masala and Triple A Exim, 
                while preparing for the next chapter with Axiom Electronics. My mission is simple yet ambitious—
                <span className="text-accent font-semibold"> create scalable impact through technology and business.</span>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] text-white p-6 rounded-2xl">
              <blockquote className="text-xl font-light italic text-center">
                "Work in silence, build with purpose, and let your journey speak for itself."
              </blockquote>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[hsl(var(--text-primary))] mb-8">Core Values</h3>
            
            <div className="space-y-4">
              {[
                { title: "Discipline", description: "Consistent effort compounds into extraordinary results" },
                { title: "Action", description: "Ideas without execution remain dreams" },
                { title: "Integrity", description: "Building trust through transparent practices" },
                { title: "Humility", description: "Learning never stops, growth never ends" }
              ].map((value, index) => (
                <div key={value.title} className="card-feature">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] rounded-full flex items-center justify-center text-[hsl(var(--primary))] font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[hsl(var(--text-primary))] mb-2">{value.title}</h4>
                      <p className="text-[hsl(var(--text-secondary))]">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};