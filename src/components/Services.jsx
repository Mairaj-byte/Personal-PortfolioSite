import React from 'react';
import { Layout, Server, Cpu, Layers } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      title: "Frontend Engineering",
      icon: <Layout size={24} className="text-blue-400" />,
      description: "Crafting fully fluid, pixel-perfect user interfaces utilizing modern React trees, custom state management models, and ultra-fast client-side build layers."
    },
    {
      title: "Backend & API Architectures",
      icon: <Server size={24} className="text-cyan-400" />,
      description: "Designing high-throughput, asynchronous server systems built on rock-solid Express middleware setups paired with deterministic database layers."
    },
    {
      title: "Full-Stack System Deployments",
      icon: <Cpu size={24} className="text-indigo-400" />,
      description: "Connecting data pools to reactive UI views flawlessly, maintaining strict security parameter handling, low-latency REST models, and optimized asset delivery."
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Radial Light Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/40 text-blue-400 border border-blue-900/60 backdrop-blur-sm mx-auto">
            <Layers size={14} /> My Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Services Provided</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Engineered systems designed to optimize end-user retention, maintain modular file structures, and accelerate application delivery speeds.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-zinc-950/60 backdrop-blur-sm p-8 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;