import React from 'react';

export const Projects: React.FC = () => {
  const projectsList = [
    {
      title: 'Meditatva',
      subtitle: 'AI Healthcare Platform',
      description:
        'Comprehensive AI Healthcare Platform with appointment booking, pharmacy search, and medical records management. Integrated Gemini API for real-time health recommendations with 98% cross-device compatibility.',
      tags: ['React.js', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
      link: 'https://medi-tatva.vercel.app',
      status: 'LIVE DEMO',
      color: 'border-amber-400/40 hover:border-amber-400',
    },
    {
      title: 'VOCA',
      subtitle: 'AI Communication Analysis System',
      description:
        'AI Communication Analysis System automating interview evaluation across 5 parameters. Reduced review time from 30 to 12 minutes (60% efficiency improvement) and supports concurrent multimodal assessments.',
      tags: ['Node.js', 'React.js', 'JavaScript', 'REST APIs'],
      link: 'https://voca-rouge.vercel.app',
      status: 'LIVE DEMO',
      color: 'border-cyan-400/40 hover:border-cyan-400',
    },
    {
      title: 'Ghoomo Firoo',
      subtitle: 'Full-Stack Travel Booking Platform',
      description:
        'Full-stack travel booking platform with live flight/hotel search, automated itinerary builder, and budget optimization engine. Integrated Amadeus APIs with OAuth2 and 10+ REST endpoints.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Amadeus API'],
      link: '#',
      status: 'LEARN MORE',
      color: 'border-emerald-400/40 hover:border-emerald-400',
    },
  ];

  return (
    <section id="projects" className="py-24 border-b border-[#272730] relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 uppercase">
          03. FEATURED PROJECTS
        </h2>
        <div className="flex-1 h-[1px] bg-[#272730]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project, idx) => (
          <div
            key={idx}
            className={`bg-[#121216] border ${project.color} p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 group shadow-xl relative overflow-hidden`}
          >
            {/* Background Cyber Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-amber-400/10 transition-all duration-500" />

            <div>
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                  SYS.PROJECT 0{idx + 1}
                </span>
                <i className="fas fa-folder-open text-slate-500 group-hover:text-amber-400 transition-colors text-xl" />
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-100 mb-1 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
              <div className="font-mono text-xs text-slate-400 mb-4 font-semibold">
                {project.subtitle}
              </div>

              <p className="font-mono text-xs text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-black/60 border border-[#272730] font-mono text-[10px] text-slate-300 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-amber-400 hover:text-slate-100 uppercase tracking-wider transition-colors"
              >
                {project.status} <i className="fas fa-external-link-alt text-[10px]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
