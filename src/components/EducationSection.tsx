export const EducationSection = () => {
  return (
    <section>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle">
            Building foundations for innovation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Education Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--gold))] to-[hsl(var(--primary))]" />
              
              {/* Education Items */}
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="card-elegant p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
                        Diploma in Computer Engineering
                      </h3>
                      <span className="text-[hsl(var(--text-secondary))] font-medium">CGPA: 6.66</span>
                    </div>
                    <p className="text-[hsl(var(--text-secondary))] mb-4">Parul University</p>
                    <p className="text-[hsl(var(--text-primary))] leading-relaxed">
                      Focused on software development, system design, and emerging technologies. 
                      Built strong foundations in programming languages, data structures, and software engineering principles.
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="card-elegant p-6">
                    <h3 className="text-2xl font-bold text-[hsl(var(--text-primary))] mb-2">
                      Secondary School Certificate (SSC)
                    </h3>
                    <p className="text-[hsl(var(--text-secondary))] mb-4">Bharad School (CBSE)</p>
                    <p className="text-[hsl(var(--text-primary))] leading-relaxed">
                      Developed strong analytical and problem-solving skills with a focus on mathematics and sciences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Achievements Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="card-feature text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[hsl(var(--primary))]">🏆</span>
                </div>
                <h4 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-2">Smart India Hackathon</h4>
                <p className="text-[hsl(var(--text-secondary))]">Finalist</p>
                <p className="text-sm text-[hsl(var(--text-muted))] mt-2">
                  Competed at national level with innovative tech solutions
                </p>
              </div>
              
              <div className="card-feature text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">📜</span>
                </div>
                <h4 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-2">Laravel Certified</h4>
                <p className="text-[hsl(var(--text-secondary))]">API Development</p>
                <p className="text-sm text-[hsl(var(--text-muted))] mt-2">
                  Mastered modern web development frameworks
                </p>
              </div>
              
              <div className="card-feature text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[hsl(var(--primary))]">🥇</span>
                </div>
                <h4 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-2">Coding Competition</h4>
                <p className="text-[hsl(var(--text-secondary))]">1st Rank</p>
                <p className="text-sm text-[hsl(var(--text-muted))] mt-2">
                  Demonstrated exceptional programming skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};