import { useState } from "react";

export const CertificatesSection = () => {
  const [filter, setFilter] = useState("all");

  const certificates = [
    {
      id: 1,
      title: "Laravel API with POSTMAN",
      organization: "Parul University",
      date: "May 2024",
      category: "technical",
      image: "/lovable-uploads/a3905dd0-ee5e-450f-8e40-8682a2b87bb2.png",
      description: "Certificate Program in Laravel API development"
    },
    {
      id: 2,
      title: "Tech Expo 2023 - Heart Attack Prediction",
      organization: "Parul University",
      date: "Feb 2023",
      category: "project",
      image: "/lovable-uploads/2f43f456-20f6-4979-baea-d5706a46fea3.png",
      description: "Certificate of Participation for project exhibition"
    },
    {
      id: 3,
      title: "Hackathon Participation",
      organization: "Parul University",
      date: "2021",
      category: "competition",
      image: "/lovable-uploads/ffc57c63-b1ef-49c6-8bfc-87a306c0f9ba.png",
      description: "Certificate for participating in technical hackathon"
    },
    {
      id: 4,
      title: "Academic Achievement",
      organization: "Parul University",
      date: "2022",
      category: "academic",
      image: "/lovable-uploads/3355e698-8094-4234-9067-9aafa5bc3071.png",
      description: "Certificate of academic excellence"
    }
  ];

  const filteredCertificates = filter === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  return (
    <section className="bg-gradient-to-b from-[hsl(var(--bg-secondary))] to-[hsl(var(--bg-primary))]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Certificates & Awards</h2>
          <p className="section-subtitle">
            Recognition of achievements and continuous learning
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: "all", label: "All Certificates" },
            { key: "technical", label: "Technical" },
            { key: "project", label: "Projects" },
            { key: "competition", label: "Competitions" },
            { key: "academic", label: "Academic" }
          ].map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === filterOption.key
                  ? "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] text-white shadow-[var(--shadow-medium)]"
                  : "bg-white text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-accent))] border border-[hsl(var(--bg-accent))]"
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate) => (
            <div key={certificate.id} className="card-elegant overflow-hidden group hover:scale-105 transition-transform">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-2">
                  {certificate.title}
                </h3>
                <p className="text-[hsl(var(--text-secondary))] font-medium mb-2">
                  {certificate.organization}
                </p>
                <p className="text-sm text-[hsl(var(--text-muted))] mb-3">
                  {certificate.date}
                </p>
                <p className="text-[hsl(var(--text-primary))] leading-relaxed">
                  {certificate.description}
                </p>
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    certificate.category === "technical" ? "bg-blue-100 text-blue-800" :
                    certificate.category === "project" ? "bg-green-100 text-green-800" :
                    certificate.category === "competition" ? "bg-purple-100 text-purple-800" :
                    "bg-orange-100 text-orange-800"
                  }`}>
                    {certificate.category.charAt(0).toUpperCase() + certificate.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};