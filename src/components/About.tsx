import React from 'react';

export const About: React.FC = () => {
  const stats = [
    { value: '2+', label: 'Years Hands-On Experience', color: 'text-amber-400' },
    { value: '100+', label: 'Active Application Users', color: 'text-emerald-400' },
    { value: '10+', label: 'Projects Engineered', color: 'text-cyan-400' },
  ];

  return (
    <section id="about" className="py-24 border-b border-[#272730] relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 uppercase">
          02. ABOUT ME
        </h2>
        <div className="flex-1 h-[1px] bg-[#272730]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Bio Paragraphs */}
        <div className="lg:col-span-2 space-y-6 font-mono text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            Results-driven Software Developer and Computer Science student with 2+ years of hands-on experience engineering full-stack, AI-driven web applications serving 100+ active users.
          </p>
          <p>
            I specialize in building scalable microservices, responsive UIs, and intelligent systems using modern technologies. Strong foundation in Data Structures, Object-Oriented Programming, Database Systems, and Computer Networks.
          </p>
          <p className="text-slate-400">
            Passionate about agile development, system design, and creating solutions that make a real impact.
          </p>
        </div>

        {/* Quick Highlights / Specs */}
        <div className="bg-[#121216] border border-[#272730] p-6 space-y-4 font-mono text-xs">
          <div className="text-amber-400 font-bold tracking-wider uppercase border-b border-[#272730] pb-2">
            SPECIFICATIONS
          </div>
          <div className="flex justify-between text-slate-400">
            <span>LOCATION:</span>
            <span className="text-slate-200">Chandigarh, India</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>DEGREE:</span>
            <span className="text-slate-200">B.E. Computer Science</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>INSTITUTION:</span>
            <span className="text-slate-200">Chandigarh University</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>STATUS:</span>
            <span className="text-emerald-400">OPEN TO WORK</span>
          </div>
        </div>
      </div>

      {/* Counter Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#121216] border border-[#272730] p-8 hover:border-amber-400/50 transition-colors duration-300 group"
          >
            <div className={`font-display text-5xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
              {stat.value}
            </div>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
