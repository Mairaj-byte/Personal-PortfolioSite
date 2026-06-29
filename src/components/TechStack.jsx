import React from 'react';
import { Cpu } from 'lucide-react';

const TechStack = () => {
  const stackData = [
    { name: "HTML5", iconClass: "fa-brands fa-html5 text-orange-500", delay: "0s" },
    { name: "CSS3", iconClass: "fa-brands fa-css3-alt text-blue-500", delay: "0.4s" },
    { name: "JavaScript", iconClass: "fa-brands fa-js text-yellow-400", delay: "0.2s" },
    { name: "React", iconClass: "fa-brands fa-react text-cyan-400", delay: "0.6s" },
    { name: "Node.js", iconClass: "fa-brands fa-node-js text-emerald-500", delay: "0.1s" },
    { name: "Express", iconClass: "fa-solid fa-server text-zinc-400", delay: "0.5s" },
    { name: "MongoDB", iconClass: "fa-solid fa-database text-green-500", delay: "0.3s" },
    { name: "Git", iconClass: "fa-brands fa-git-alt text-orange-600", delay: "0.7s" },
    { name: "GitHub", iconClass: "fa-brands fa-github text-white", delay: "0.2s" },
    { name: "Tailwind CSS", iconClass: "fa-brands fa-css3-alt text-sky-400", delay: "0.8s" },
    { name: "Vite", iconClass: "fa-solid fa-bolt text-indigo-400", delay: "0.4s" }
  ];

  return (
    <section id="techstack" className="relative py-20 bg-black text-white overflow-hidden border-b border-zinc-900">
      {/* Background Soft Glow Right Accent */}
      <div className="absolute bottom-0 right-0 -z-10 w-96 h-96 bg-cyan-950/20 rounded-full blur-[140px] opacity-40"></div>

      {/* Tailwind CSS Inline Keyframe Injector */}
      <style>{`
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .slow-float-card {
          animation: slowFloat 4s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/40 text-cyan-400 border border-cyan-900/60 backdrop-blur-sm mx-auto">
            <Cpu size={14} /> Production Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">
            Core Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Ecosystem</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
          {stackData.map((tech, idx) => (
            <div 
              key={idx}
              className="slow-float-card bg-zinc-950 border border-zinc-900 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-zinc-700 transition-all duration-300 group shadow-lg"
              style={{ animationDelay: tech.delay }}
            >
              {/* Brand Logo Container */}
              <div className="w-12 h-12 rounded-xl bg-zinc-900/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className={`${tech.iconClass} text-[26px]`}></i>
              </div>

              {/* Name Tag */}
              <span className="text-xs font-semibold tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;