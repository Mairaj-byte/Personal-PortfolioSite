import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] text-[#ededed] border-t border-zinc-800/50 py-12 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left Section: Branding & Availability */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              YourName.
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for roles
            </span>
          </div>
          <p className="text-sm text-zinc-400 max-w-xs">
            Building digital experiences with purpose, precision, and clean code.
          </p>
        </div>

        {/* Right Section: Navigation / Social Links with Font Awesome Icons */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium">
          <a 
            href="https://github.com/Mairaj-byte/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 relative group"
          >
            <i className="fa-brands fa-github text-base"></i>
            <span>GitHub</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-200 group-hover:w-full" />
          </a>
          
          <a 
            href="https://linkedin.com/in/mohd-mairaj" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 relative group"
          >
            <i className="fa-brands fa-linkedin text-base"></i>
            <span>LinkedIn</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-200 group-hover:w-full" />
          </a>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 relative group"
          >
            <i className="fa-brands fa-x-twitter text-base"></i>
            <span>Twitter</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-200 group-hover:w-full" />
          </a>
          
          <a 
            href="mailto:mairajk929@gmail.com" 
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 relative group"
          >
            <i className="fa-solid fa-envelope text-base"></i>
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-200 group-hover:w-full" />
          </a>
        </div>

      </div>

      {/* Bottom Section: Divider & Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <p>&copy; {currentYear} Mohd Mairaj. All rights reserved.</p>
        <p className="italic">Designed & Built from scratch</p>
      </div>
    </footer>
  );
};

export default Footer;