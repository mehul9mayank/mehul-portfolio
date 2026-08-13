import React from 'react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between gap-12 py-24 border-b border-[#272730] relative">
      {/* Background Cyber Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex-1 z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          AVAILABLE FOR FULL-STACK & AI ROLES
        </div>

        {/* Hero Title with Glitch Styling */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-100 mb-6 leading-none glitch-wrapper">
          HI, I'M <span className="text-amber-400 glitch-text" data-text="MEHUL">MEHUL</span> MAYANK
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-slate-400 text-sm sm:text-lg max-w-2xl leading-relaxed mb-10">
          Full-Stack Developer & AI Specialist engineering high-performance web applications serving 100+ active users. 
          Experienced in <span className="text-slate-100 font-semibold">Java, React, Node.js, Spring Boot & AI Integrations</span>.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-slate-100 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-lg shadow-amber-400/10"
          >
            VIEW PROJECTS <i className="fas fa-arrow-right ml-2" />
          </a>
          <button
            onClick={onOpenResume}
            className="px-8 py-4 bg-transparent text-slate-100 border border-[#272730] font-mono text-xs font-bold uppercase tracking-wider hover:border-amber-400 hover:text-amber-400 transition-all duration-300 flex items-center gap-2"
          >
            <i className="fas fa-file-pdf text-amber-400" /> PREVIEW & DOWNLOAD RESUME
          </button>
        </div>
      </div>

      {/* Hero Image Component featuring Mehul's local photo */}
      <div className="hidden lg:flex flex-1 justify-center items-center z-10">
        <div className="relative group">
          {/* Cyber Neon Back Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-cyan-500 to-emerald-400 rounded-none blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          
          {/* Image Container with Sharp Frame */}
          <div className="relative w-80 h-96 bg-[#121216] border-2 border-[#272730] p-3 overflow-hidden group-hover:border-amber-400 transition-colors duration-300">
            <img
              src="/mehul.jpg"
              alt="Mehul Mayank"
              className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />

            {/* Corner Cyber HUD Lines */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

            {/* Overlay Status Tag */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 flex justify-between items-center text-[10px] font-mono text-slate-300">
              <span>MEHUL MAYANK</span>
              <span className="text-amber-400">DEV // IN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
