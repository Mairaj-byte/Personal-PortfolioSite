import React, { useState } from 'react';
// Removed Linkedin and Github from the lucide-react import list
import { Send, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API delay
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black text-zinc-100 border-t border-zinc-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-zinc-950/50 p-8 sm:p-10 rounded-3xl border border-zinc-900 backdrop-blur-md">
            <h2 className="text-3xl font-black mb-2">Let's Build Something <span className="text-blue-500">Fast.</span></h2>
            <p className="text-zinc-400 mb-8">Have a project, job opening, or just want to chat tech? Let's connect.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Name" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" required />
                <input type="email" placeholder="Email" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
              <textarea placeholder="Message" rows="4" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" required></textarea>
              
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70"
              >
                {formStatus === 'submitting' ? 'Dispatching...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Right Column: Info & Status */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Available for Work</h4>
                  <p className="text-xs text-zinc-500">Currently open to new collaborations</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  <Mail size={18} className="text-blue-500" /> <span>mairajk929@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin size={18} className="text-blue-500" /> <span>Rajpur Road, Dehradun, India</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Clock size={18} className="text-blue-500" /> <span>IST (GMT+5:30)</span>
                </div>
              </div>
            </div>

            {/* Social Links using Font Awesome */}
            <div className="flex gap-4">
              <a 
                href="www.linkedin.com/in/mohd-mairaj" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-blue-400 transition-all flex items-center justify-center text-[20px]"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a 
                href="https://github.com/Mairaj-byte/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all flex items-center justify-center text-[20px]"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;