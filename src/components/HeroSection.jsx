import React from 'react';
import { Zap, ArrowRight, FileText } from 'lucide-react';
import heroimage from '../assets/heroimage.png'; // Path to your cutout portrait image
import mairajresume from '../assets/mairajresume.pdf'; // Path to your resume PDF

const HeroSection = () => {
  return (
    <header className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-black text-white">
      
      {/* Cyber Blue & Dark Ambient Glow Effects */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-[140px] opacity-70"></div>
      <div className="absolute bottom-10 left-10 -z-10 w-1/3 h-1/3 bg-cyan-950/30 rounded-full blur-[120px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left Content Column */}
          <div className="md:col-span-7 space-y-6 flex flex-col items-center md:items-start">
            
            {/* Highlight Tag */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/50 text-blue-400 border border-blue-800/50 backdrop-blur-sm">
              <Zap size={14} className="fill-cyan-400 text-cyan-400" /> Available for Roles in 2026
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-100 tracking-tight leading-tight md:leading-none">
              Building Scalable & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500">
                Interactive Systems
              </span>
            </h1>

            {/* Description Text */}
            <p className="text-lg text-zinc-400 max-w-xl mx-auto md:mx-0 font-normal leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Mohd Mairaj</strong>. A Full-Stack Engineer specializing in crafting robust web architectures, fluid UI/UX interactions, and production-ready applications.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start pt-2">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-900/40 transition-all hover:-translate-y-0.5">
                View My Work <ArrowRight size={18} />
              </a>
              <a href={mairajresume} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-zinc-300 border border-zinc-800 px-8 py-4 rounded-xl font-semibold hover:bg-zinc-800 hover:text-white transition-all">
                Download Resume <FileText size={18} />
              </a>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="md:col-span-5 relative w-full">
            <div className="relative w-full max-w-lg mx-auto md:max-w-none aspect-[4/3] md:aspect-square flex items-end justify-center group">

              {/* 1. Decorative Glow / Backdrop Accent */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>

              {/* 2. The Curved Solid Background Shape (Deep Blues and Blacks) */}
              <div className="absolute bottom-0 right-4 w-[85%] h-[85%] bg-gradient-to-br from-zinc-900 via-blue-950 to-black rounded-tl-[120px] rounded-br-[80px] rounded-tr-[40px] rounded-bl-[40px] border border-zinc-800/80 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay"></div>
              </div>

              {/* 3. The Cutout Portrait Image */}
              <div className="relative z-10 w-[90%] h-[105%] flex items-end overflow-visible">
                <img
                  src={heroimage}
                  alt="Portfolio Owner Portrait"
                  className="w-full h-auto max-h-full object-contain drop-shadow-[0_20px_50px_rgba(0,149,255,0.15)] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* 4. Floating Tech Stack Badges */}
              {/* React Badge */}
              <div className="absolute left-4 bottom-1/4 z-20 flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-zinc-800 animate-bounce [animation-duration:4s]">
                <span className="text-cyan-400 font-bold tracking-tight text-sm">⚛ React</span>
              </div>

              {/* TypeScript Badge */}
              <div className="absolute right-0 top-1/3 z-20 flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-zinc-800 animate-bounce [animation-duration:5s]">
                <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center text-[10px] font-bold text-white">JS</div>
                <span className="text-zinc-300 font-medium text-xs md:text-sm">JavaScript</span>
              </div>

              {/* Node.js Badge */}
              <div className="absolute left-12 top-12 z-20 flex items-center gap-1 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-zinc-800 animate-bounce [animation-duration:6s]">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">🟢 Node.js</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HeroSection;