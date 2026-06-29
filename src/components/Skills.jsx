import React from 'react';
import { Layers, Monitor, HardDrive, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Stack",
      icon: <Monitor size={18} className="text-blue-400" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "FontAwesome" ]
    },
    {
      title: "Backend & Systems",
      icon: <HardDrive size={18} className="text-cyan-400" />,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTfull APIs", "MySQL"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={18} className="text-indigo-400" />,
      skills: ["Git & GitHub" , "Vercel / Netlify", "Postman", "CI/CD", "Thunder Client"]
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-black text-white overflow-hidden border-b border-zinc-900">
      {/* Background Soft Gradients */}
      <div className="absolute right-0 bottom-0 -z-10 w-1/3 h-1/3 bg-cyan-900/10 rounded-full blur-[130px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/40 text-cyan-400 border border-cyan-900/60 backdrop-blur-sm mx-auto">
            <Layers size={14} /> Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">
            Tech Stacks I Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">& Build With</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Consistently refined, market-vetted languages, frameworks, and workflows used to bring scalable digital systems to life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-zinc-950 p-6 rounded-2xl border border-zinc-900 shadow-xl relative group hover:border-zinc-800 transition-colors"
            >
              {/* Card Accent Top Glow */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Title Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-zinc-200">{category.title}</h3>
              </div>

              {/* Tags Layout */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900/60 rounded-lg border border-zinc-900 hover:border-blue-900/60 hover:text-white transition-all cursor-default"
                  >
                    {skill}
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

export default Skills;