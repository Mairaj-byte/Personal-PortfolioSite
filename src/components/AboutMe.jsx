import React from 'react';
import { User, Code2, Terminal, Cpu } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="relative py-20 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-2/3 h-2/3 bg-blue-900/10 rounded-full blur-[150px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/40 text-blue-400 border border-blue-900/60 backdrop-blur-sm">
              <User size={14} /> Story Behind The Code
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">
              Driven by Curiosity, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Sustained by Clean Architecture
              </span>
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              I am a digital artisan who bridges the gap between complex engineering requirements and elegant user experiences. My journey involves breaking things, building things better, and optimizing every line of code for scalability. 
            </p>
            
            <p className="text-zinc-400 leading-relaxed">
              Whether architecting robust server infrastructures or rendering smooth 60fps frontend animations, I prioritize security, performance, and responsive user flows across every device.
            </p>
          </div>

          {/* Right Column: Experience/Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-2xl border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-blue-950/50 flex items-center justify-center border border-blue-900/40 text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Code2 size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">1+ Years</h3>
              <p className="text-zinc-400 text-sm">Of continuous deployment and production engineering experience.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-2xl border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/50 flex items-center justify-center border border-cyan-900/40 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Terminal size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">6+ Projects</h3>
              <p className="text-zinc-400 text-sm">Successfully shipped globally across diverse software niches.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-2xl border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 group col-span-1 sm:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-blue-950/50 flex items-center justify-center border border-blue-900/40 text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Cpu size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Core Philosophy</h3>
              <p className="text-zinc-400 text-sm">Write readable code today so it can be automated without technical debt tomorrow.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;