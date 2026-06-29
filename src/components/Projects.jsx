import React from 'react';
// Removed Github from the lucide-react import list
import { Briefcase, FolderGit2, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: "Clothify Fashion E-Commerce Platform",
      description: "A highly resilient enterprise-grade microservices system executing real-time striping payments and low-latency inventory syncing at scale.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "ThunderClient", "Stripe API", "Vercel"],
      github: "https://github.com/Mairaj-byte/Clothify-MERN--Stack",
      live: "https://clothify-frontend-vert.vercel.app/",
    },
    {
      title: "Influ-Brand Collab Management System",
      description: "Engineered deep machine learning telemetry panels processing incoming visual web traffic matrix data and generating 2026 performance trend charts.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "ThunderClient", "RazorPay", "Vercel"],
      github: "https://github.com/Mairaj-byte/CollabZoneX",
      live: "https://collabzone.vercel.app/",
    },
    // {
    //   title: "Distributed Real-time Chat Workspace",
    //   description: "Built end-to-end encrypted messaging environment operating via custom websocket infrastructure with instant presence notification trackers.",
    //   tags: ["React.js", "Express.js", "Socket.io", "MongoDB", "WebRTC"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    // }
  ];

  return (
    <section id="projects" className="relative py-20 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Subtle Blue Glow Center Vector */}
      <div className="absolute top-1/3 left-1/4 -z-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/40 text-blue-400 border border-blue-900/60 backdrop-blur-sm mx-auto">
            <Briefcase size={14} /> Selected Applications
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">
            Recent Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Deployments</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            A curated deep dive into architectural instances that prioritize user retention, performance data metrics, and absolute structural stability.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div 
              key={idx}
              className="bg-zinc-950/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-900 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent rounded-tr-2xl pointer-events-none"></div>

              <div>
                {/* Folder Top Deck */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-400">
                    <FolderGit2 size={20} />
                  </div>
                  
                  {/* Action Link Row */}
                  <div className="flex items-center gap-4 text-zinc-400">
                    {/* Replaced Lucide icon with Font Awesome i tag */}
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-center">
                      <i className="fa-brands fa-github text-[18px]"></i>
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center justify-center">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Info Metadata */}
                <h3 className="font-bold text-xl text-zinc-100 group-hover:text-blue-400 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags Stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-900/40 border border-zinc-900/80 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;