import React from 'react';

export const Skills: React.FC = () => {
  const skillsList = [
    { name: 'Java', level: 'Advanced', icon: '☕', category: 'Languages' },
    { name: 'React.js', level: 'Proficient', icon: '⚛️', category: 'Frontend' },
    { name: 'HTML/CSS', level: 'Proficient', icon: '📘', category: 'Languages' },
    { name: 'Node.js', level: 'Intermediate', icon: '🟩', category: 'Backend' },
    { name: 'Spring Boot', level: 'Beginner', icon: '🌿', category: 'Backend' },
    { name: 'MySQL', level: 'Proficient', icon: '🗄️', category: 'Database' },
    { name: 'Tailwind CSS', level: 'Proficient', icon: '🎨', category: 'Styling' },
    { name: 'REST APIs', level: 'Advanced', icon: '🔗', category: 'Architecture' },
  ];

  const neuralConcepts = [
    'Data Structures & Algorithms',
    'System Design',
    'Operating Systems',
    'Computer Networks',
    'Database Management',
    'Cloud Computing',
    'RESTful APIs',
  ];

  return (
    <section id="skills" className="py-24 border-b border-[#272730] relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 uppercase">
              TECHNICAL SKILLS
        </h2>
        <div className="flex-1 h-[1px] bg-[#272730]" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-[#121216] border border-[#272730] rounded-[28px] p-8 sm:p-10">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.14em] text-amber-400 uppercase">
              Functional Tools
            </h3>
            <div className="flex-1 h-[1px] bg-amber-400/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillsList.map((skill, idx) => (
              <div
                key={idx}
                className="bg-[#0d0d12] border border-[#272730] rounded-2xl p-5 flex items-center gap-4 hover:border-amber-400/60 hover:bg-[#181820] transition-all duration-300 group transform hover:-translate-y-1"
              >
                <div className="text-3xl p-3 bg-black/60 border border-[#272730] rounded-xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {skill.name}
                  </div>
                  <div className="font-mono text-xs text-slate-400 mt-0.5">
                    {skill.level}
                  </div>
                  <div className="font-mono text-[10px] text-amber-500/80 uppercase mt-1">
                    [{skill.category}]
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-violet-500/30 bg-[#100b14] p-8 sm:p-10 shadow-[0_0_0_1px_rgba(168,85,247,0.05)]">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/10 rounded-tr-full -ml-4 -mb-4 blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 mb-8 relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.14em] text-amber-400 uppercase">
              Neural Concepts
            </h3>
            <div className="flex-1 h-[1px] bg-violet-500/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {neuralConcepts.map((concept) => (
              <div
                key={concept}
                className="rounded-lg border border-violet-500/25 bg-violet-500/5 px-4 py-3 text-center font-mono text-sm text-violet-200/90 uppercase tracking-wide"
              >
                {concept}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
