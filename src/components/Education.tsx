import React from 'react';

export const Education: React.FC = () => {
  const certifications = [
    'AWS Certified Solutions Architect – Associate',
    'Spring and Angular Full Stack Developer',
    'Data Structures and Algorithms using Java',
    'Blockchain and its Applications',
    'Relational Database Administration (DBA)',
  ];

  return (
    <section id="education" className="py-24 border-b border-[#272730] relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 uppercase">
          05. EDUCATION & CERTIFICATIONS
        </h2>
        <div className="flex-1 h-[1px] bg-[#272730]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Academic Degree */}
        <div className="bg-[#121216] border border-[#272730] p-8 space-y-4 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest">
              DEGREE // 2023 - 2027
            </span>
            <i className="fas fa-[#272730] fa-graduation-cap text-2xl text-slate-500" />
          </div>

          <h3 className="font-display text-2xl font-bold text-slate-100">
            Bachelor of Engineering in Computer Science
          </h3>
          <p className="font-mono text-sm text-slate-300 font-semibold">
            Chandigarh University, Punjab, India
          </p>
          <p className="font-mono text-xs text-slate-400 leading-relaxed">
            Core focus on Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, and Computer Networks.
          </p>
        </div>

        {/* Certifications Timeline */}
        <div className="bg-[#121216] border border-[#272730] p-8 space-y-4">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest mb-4 border-b border-[#272730] pb-2">
            INDUSTRY CERTIFICATIONS
          </div>

          <ul className="space-y-3 font-mono text-xs text-slate-300">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="text-amber-400 font-bold">●</span>
                <span className="hover:text-slate-100 transition-colors">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
