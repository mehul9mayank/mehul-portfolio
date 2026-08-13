import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header className="fixed top-4 right-4 z-40 rounded-[28px] border border-cyan-500/20 bg-[#050507]/55 px-5 py-4 backdrop-blur-2xl shadow-2xl shadow-cyan-950/15 sm:right-6 sm:top-6 sm:rounded-[30px] sm:px-6 sm:py-5 md:left-auto md:right-6">
      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex gap-8 items-center font-mono text-xs font-medium tracking-wider">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition-colors duration-300 relative py-1 ${
              activeSection === item.id ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 animate-pulse" />
            )}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-slate-100 text-xl p-2 focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="absolute top-full right-0 mt-3 w-56 rounded-2xl bg-[#121216]/95 border border-[#272730] p-4 flex flex-col gap-4 md:hidden shadow-2xl z-50 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className={`font-mono text-xs tracking-wider py-2 border-b border-white/5 ${
                activeSection === item.id ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
