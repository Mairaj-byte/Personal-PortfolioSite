import React, { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 className="text-blue-500" size={24} />
            <span className="font-black text-xl tracking-tight text-white">
              DEV
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                PORTFOLIO
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium text-zinc-400 hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-zinc-400 hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-zinc-400 hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-zinc-400 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Mairaj-byte"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white text-xl transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://linkedin.com/in/mohd-mairaj"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-blue-500 text-xl transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-2 pb-4 space-y-2">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-zinc-300 hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-zinc-300 hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-zinc-300 hover:text-blue-400"
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-zinc-300 hover:text-blue-400"
          >
            Contact
          </a>

          <div className="pt-4 flex gap-5 px-3 text-xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-blue-500"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;