import { Mail, Phone, Github, Linkedin, Instagram, Youtube } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-[hsl(var(--bg-primary))] to-[hsl(var(--bg-secondary))]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to build something amazing together?
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--text-primary))] mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[hsl(var(--text-muted))] text-sm">Email</p>
                    <a href="mailto:contact@aksharchotaliya.com" className="text-[hsl(var(--text-primary))] font-medium hover:text-[hsl(var(--gold))] transition-colors">
                      contact@aksharchotaliya.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <p className="text-[hsl(var(--text-muted))] text-sm">Phone</p>
                    <a href="tel:+919265324408" className="text-[hsl(var(--text-primary))] font-medium hover:text-[hsl(var(--gold))] transition-colors">
                      +91 92653 24408
                    </a>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a 
                  href="https://wa.me/919265324408" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Me
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="card-elegant p-6">
              <h4 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/akshar_chotaliya/", label: "Instagram" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/akshar-chotaliya-182401230/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/Aksharchotaliya", label: "GitHub" },
                  { icon: Youtube, href: "https://www.youtube.com/@aksharchotaliya", label: "YouTube" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--text-primary))] mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[hsl(var(--text-primary))] font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-[hsl(var(--bg-accent))] rounded-xl focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[hsl(var(--text-primary))] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-[hsl(var(--bg-accent))] rounded-xl focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[hsl(var(--text-primary))] font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-[hsl(var(--bg-accent))] rounded-xl focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[hsl(var(--text-primary))] font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-[hsl(var(--bg-accent))] rounded-xl focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Goals & Mission */}
        <div className="mt-20 text-center">
          <div className="card-feature max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[hsl(var(--text-primary))] mb-6">Goals & Mission</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-[hsl(var(--gold))] mb-4">Short-term Goals</h4>
                <ul className="text-[hsl(var(--text-primary))] space-y-2 text-left">
                  <li>• Expand current business operations</li>
                  <li>• Prepare for international education opportunities</li>
                  <li>• Develop technical expertise in AI and electronics</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[hsl(var(--gold))] mb-4">Long-term Vision</h4>
                <ul className="text-[hsl(var(--text-primary))] space-y-2 text-left">
                  <li>• Build a successful tech company</li>
                  <li>• Establish a multispecialty hospital</li>
                  <li>• Create impact-driven ventures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};