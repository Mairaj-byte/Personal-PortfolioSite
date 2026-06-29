import React from 'react';
import { ShieldCheck, Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certificationsData = [
    {
      title: "Full-Stack Development (MERN)",
      issuer: "Apna College",
      date: "2025",
      id: "6902360285cda9fb7d004fd9",
      link: "https://drive.google.com/file/d/1qcyJXZAUlcyiajZvpkivvH8KZZOvTQ8w/view?usp=drivesdk"
    },
    // {
    //   title: "Cloud Infrastructure Architect & Docker Containerization",
    //   issuer: "Global Systems Council",
    //   date: "2025",
    //   id: "CERT-CLD-9403",
    //   link: "#"
    // },
    // {
    //   title: "AI Integration & Neural Processing Implementation",
    //   issuer: "Deep Computing Lab",
    //   date: "2024",
    //   id: "CERT-AI-3301",
    //   link: "#"
    // }
  ];

  return (
    <section id="certifications" className="relative py-20 bg-black text-white overflow-hidden border-b border-zinc-900">
      {/* Background Soft Left Corner Glow */}
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-cyan-950/20 rounded-full blur-[140px] opacity-40"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/40 text-cyan-400 border border-cyan-900/60 backdrop-blur-sm mx-auto">
            <ShieldCheck size={14} /> Global Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Credentials</span>
          </h2>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div 
              key={index}
              className="bg-zinc-950 p-6 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Internal Accent Stripe */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Icon Wrapper Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:text-blue-400 transition-colors">
                    <Award size={18} />
                  </div>
                  <span className="text-[11px] font-medium text-zinc-500 tracking-wider">
                    {cert.date}
                  </span>
                </div>

                {/* Credential Data Title */}
                <h3 className="font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-4">{cert.issuer}</p>
              </div>

              {/* Bottom Deck Metadata Row */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-900 text-xs mt-2">
                <span className="font-mono text-zinc-600 tracking-tight">ID: {cert.id}</span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-cyan-400 transition-colors font-medium"
                >
                  Verify <ExternalLink size={12} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;