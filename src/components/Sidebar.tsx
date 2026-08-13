import React from 'react';

export const Sidebar: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 sm:w-24 border-r border-[#272730] z-50 bg-[#050507]/90 backdrop-blur-md flex flex-col items-center py-8">
      {/* Brand Logo */}
      <button
        onClick={scrollToTop}
        className="font-display font-bold text-2xl text-slate-100 hover:text-amber-400 transition-colors duration-300 mb-12 focus:outline-none"
        title="Scroll to top"
      >
        M<span className="text-amber-400">.</span>
      </button>

      {/* Social Media Links */}
      <div className="flex flex-col gap-6 text-slate-400 text-lg mb-auto">
        <a
          href="https://github.com/mehul9mayank"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-100 hover:scale-110 transition-all duration-300"
          title="GitHub Profile"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/mehul-mayank44"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 hover:scale-110 transition-all duration-300"
          title="LinkedIn Profile"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:mehul09mayank@gmail.com"
          className="hover:text-emerald-400 hover:scale-110 transition-all duration-300"
          title="Email Mehul"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="tel:+918102208365"
          className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
          title="Call Mehul"
        >
          <i className="fas fa-phone"></i>
        </a>
      </div>

    </aside>
  );
};
