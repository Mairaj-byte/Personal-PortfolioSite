import React from 'react';
import { GraduationCap, Landmark, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
  degree: "Master of Computer Applications (MCA)",
  institution: "Jamia Hamdard University, New Delhi",
  period: "2026 - Present",
  specialization: "Computer Applications",
  details: "Remote (Online) | Pursuing postgraduate studies with a focus on advanced software development, database systems, cloud computing, data structures, algorithms, and modern web technologies."
},
{
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "H.N.B Garhwal University, Srinagar",
  period: "2023 - 2026",
  specialization: "Computer Applications",
  details: "Graduated with a strong foundation in programming, data structures, database management systems, operating systems, computer networks, software engineering, and full-stack web development."
},
{
  degree: "Higher Secondary Education (Class XII)",
  institution: "Senior Secondary Board",
  period: "2021 - 2023",
  specialization: "Science Stream",
  details: "Completed higher secondary education with core subjects including Physics, Chemistry, Mathematics, and Computer Science."
}
  ];

  return (
    <section id="education" className="relative py-20 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Cyber Blur Accent */}
      <div className="absolute top-1/2 right-1/4 -z-10 w-80 h-80 bg-blue-900/10 rounded-full blur-[130px] opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/40 text-blue-400 border border-blue-900/60 backdrop-blur-sm">
            <GraduationCap size={14} /> Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">History</span>
          </h2>
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-zinc-950 to-black p-6 sm:p-8 rounded-2xl border-l-4 border-zinc-800 hover:border-blue-500 bg-zinc-950/50 backdrop-blur-sm transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                
                {/* Degree & Period Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Landmark size={14} className="text-zinc-500" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  {/* Time Badge */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800/60 h-fit max-w-fit">
                    <Calendar size={12} /> {edu.period}
                  </span>
                </div>

                {/* Focus Specialization */}
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                  <Award size={12} /> {edu.specialization}
                </div>

                {/* Details Narrative */}
                <p className="text-sm text-zinc-400 leading-relaxed pt-2 border-t border-zinc-900">
                  {edu.details}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;