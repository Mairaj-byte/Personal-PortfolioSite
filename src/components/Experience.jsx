import React from 'react';
import { Calendar, Network, ShieldCheck } from 'lucide-react';

const Experience = () => {
  const timelineData = [
    {
      role: "Full-Stack Developer Intern",
      company: "NovaNectar Services Pvt Ltd",
      period: "june, 25 - Present",
      bullets: [
        "Architected core asynchronous microservices systems dealing with heavy traffic telemetry reporting nodes.",
        "Refactored relational databases configurations saving over 22% computational efficiency globally.",
        "Mentored junior engineers and orchestrated CI/CD execution pipeline implementations using Docker clusters."
      ]
    },
    // {
    //   role: "Software Engineer",
    //   company: "Nexus Software Inc",
    //   period: "2022 - 2024",
    //   bullets: [
    //     "Built responsive client interface ecosystems using Next.js, Redux, and custom style token variants.",
    //     "Integrated modern enterprise security practices checking end-to-end token structures and REST parameters.",
    //     "Decreased rendering paint scores across primary business panels by 40% via deep state tree optimization."
    //   ]
    // }

  ];

  return (
    <section id="experience" className="relative py-20 bg-black text-white overflow-hidden border-b border-zinc-900">
      {/* Background Soft Glow Right Accent */}
      <div className="absolute bottom-1/4 right-0 -z-10 w-80 h-80 bg-cyan-900/10 rounded-full blur-[120px] opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/40 text-cyan-400 border border-cyan-900/60 backdrop-blur-sm mx-auto">
            <Network size={14} /> Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Milestones</span>
          </h2>
        </div>

        {/* Vertical Timeline Tree Structure */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12">
          {timelineData.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              
              {/* Timeline Glowing Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-blue-500 group-hover:bg-blue-950/80 transition-all duration-300 shadow-[0_0_10px_transparent] group-hover:shadow-blue-500/50"></div>

              {/* Core Wrapper Box */}
              <div className="space-y-3">
                
                {/* Meta Row Headers */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-zinc-400">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Date Tag */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 bg-zinc-900/50 border border-zinc-800/80 px-2.5 py-1 rounded-md max-w-fit">
                    <Calendar size={12} /> {exp.period}
                  </div>
                </div>

                {/* Narrative Bullets Section */}
                <ul className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-1.5 min-w-[5px] h-[5px] rounded-full bg-blue-500/80"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;