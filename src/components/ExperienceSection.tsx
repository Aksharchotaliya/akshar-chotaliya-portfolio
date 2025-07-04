export const ExperienceSection = () => {
  return (
    <section className="bg-gradient-to-b from-[hsl(var(--bg-secondary))] to-[hsl(var(--bg-primary))]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience & Projects</h2>
          <p className="section-subtitle">
            From code to commerce, building the future
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Ventures */}
          <div>
            <h3 className="text-3xl font-bold text-[hsl(var(--text-primary))] mb-8 text-center">Business Ventures</h3>
            <div className="space-y-6">
              <div className="card-elegant p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-[hsl(var(--text-primary))]">Founder</h4>
                    <p className="text-[hsl(var(--gold))] font-semibold">Ramniklal Masala</p>
                  </div>
                  <span className="text-sm text-[hsl(var(--text-muted))] bg-[hsl(var(--bg-accent))] px-3 py-1 rounded-full">
                    Current
                  </span>
                </div>
                <p className="text-[hsl(var(--text-secondary))] mb-3">B2C/B2B Spice Business</p>
                <p className="text-[hsl(var(--text-primary))] leading-relaxed">
                  Built a retail spice brand from the ground up, focusing on quality products and 
                  sustainable business practices. Developed distribution networks and established 
                  strong customer relationships in competitive markets.
                </p>
              </div>
              
              <div className="card-elegant p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-[hsl(var(--text-primary))]">Co-founder</h4>
                    <p className="text-[hsl(var(--gold))] font-semibold">Triple A Exim</p>
                  </div>
                  <span className="text-sm text-[hsl(var(--text-muted))] bg-[hsl(var(--bg-accent))] px-3 py-1 rounded-full">
                    Current
                  </span>
                </div>
                <p className="text-[hsl(var(--text-secondary))] mb-3">Export Company</p>
                <p className="text-[hsl(var(--text-primary))] leading-relaxed">
                  Established export operations for Indian products, navigating international 
                  trade regulations and building global partnerships. Focus on authentic 
                  Indian products reaching international markets.
                </p>
              </div>
            </div>
          </div>
          
          {/* Technical Projects */}
          <div>
            <h3 className="text-3xl font-bold text-[hsl(var(--text-primary))] mb-8 text-center">Technical Projects</h3>
            <div className="space-y-6">
              <div className="card-elegant p-6">
                <h4 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-2">
                  Heart Attack Prediction System
                </h4>
                <p className="text-[hsl(var(--text-secondary))] mb-3">Machine Learning & Healthcare</p>
                <p className="text-[hsl(var(--text-primary))] leading-relaxed mb-4">
                  Developed a predictive model using machine learning algorithms to assess 
                  heart attack risk factors. Implemented data preprocessing, feature engineering, 
                  and model optimization techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[hsl(var(--primary))] text-white px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[hsl(var(--primary))] text-white px-2 py-1 rounded">ML</span>
                  <span className="text-xs bg-[hsl(var(--primary))] text-white px-2 py-1 rounded">Healthcare</span>
                </div>
              </div>
              
              <div className="card-elegant p-6">
                <h4 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-2">
                  Laravel API Certification Project
                </h4>
                <p className="text-[hsl(var(--text-secondary))] mb-3">Web Development & APIs</p>
                <p className="text-[hsl(var(--text-primary))] leading-relaxed mb-4">
                  Built comprehensive RESTful APIs using Laravel framework, implementing 
                  authentication, database optimization, and scalable architecture patterns.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[hsl(var(--gold))] text-[hsl(var(--primary))] px-2 py-1 rounded">Laravel</span>
                  <span className="text-xs bg-[hsl(var(--gold))] text-[hsl(var(--primary))] px-2 py-1 rounded">PHP</span>
                  <span className="text-xs bg-[hsl(var(--gold))] text-[hsl(var(--primary))] px-2 py-1 rounded">API</span>
                </div>
              </div>
              
              <div className="card-elegant p-6 border-2 border-[hsl(var(--gold))]">
                <h4 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-2">
                  Future: Axiom Electronics
                </h4>
                <p className="text-[hsl(var(--text-secondary))] mb-3">AI-based Electronics & R&D</p>
                <p className="text-[hsl(var(--text-primary))] leading-relaxed">
                  Upcoming venture combining AI technology with electronics manufacturing. 
                  Plans include R&D lab, retail operations, and innovative product development 
                  in the electronics sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};