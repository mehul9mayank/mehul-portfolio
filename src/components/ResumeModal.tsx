import React, { useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'document' | 'interactive'>('document');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in-up">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[90vh] bg-[#0c0c10] border-2 border-amber-400/60 shadow-2xl flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="flex flex-wrap justify-between items-center px-6 py-4 bg-[#14141c] border-b border-[#272730] gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
            <i className="fas fa-file-pdf text-xl text-amber-400" />
            <span>MEHUL MAYANK // RESUME PREVIEW</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex border border-[#272730] p-0.5 bg-black/40 font-mono text-[11px]">
              <button
                onClick={() => setViewMode('document')}
                className={`px-3 py-1 uppercase font-bold transition-colors ${
                  viewMode === 'document' ? 'bg-amber-400 text-black' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 uppercase font-bold transition-colors ${
                  viewMode === 'interactive' ? 'bg-amber-400 text-black' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                Text View
              </button>
            </div>

            {/* Download PDF Link */}
            <a
              href="/Mehul_Mayank_Resume.pdf"
              download="Mehul_Mayank_Resume.pdf"
              className="px-4 py-2 bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-lg shadow-amber-400/20"
              title="Download Resume PDF"
            >
              <i className="fas fa-download" /> DOWNLOAD PDF
            </a>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-red-400 hover:bg-white/5 font-mono text-lg transition-colors"
              title="Close Modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 bg-[#08080c] relative overflow-hidden">
          {viewMode === 'document' ? (
            /* Embedded Official PDF Document Preview */
            <iframe
              src="/Mehul_Mayank_Resume.pdf#toolbar=1&navpanes=0"
              className="w-full h-full border-none"
              title="Mehul Mayank Official Resume PDF"
            />
          ) : (
            /* Interactive Readable Resume View */
            <div className="h-full p-6 sm:p-10 overflow-y-auto font-mono text-xs leading-relaxed text-slate-300 space-y-8 select-text">
              {/* Header */}
              <div className="border-b border-[#272730] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <h1 className="font-display text-4xl font-bold text-slate-100 tracking-tight">
                    MEHUL MAYANK
                  </h1>
                  <div className="text-amber-400 text-sm font-semibold mt-1">
                    Software Developer | Full-Stack & AI Specialist
                  </div>
                </div>

                <div className="text-right space-y-1 text-[11px] text-slate-400 font-mono">
                  <div>+91-8102208365</div>
                  <div>mehul09mayank@gmail.com</div>
                  <div className="text-amber-400">linkedin.com/in/mehul-mayank44 | github.com/mehul9mayank</div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2 className="font-display text-lg font-bold text-amber-400 border-b border-[#272730] pb-1 uppercase tracking-wider">
                  SUMMARY
                </h2>
                <p className="text-slate-300">
                  Full-Stack and Frontend Developer who has built AI-powered, responsive web applications serving 100+ users. Skilled in modern frontend development and scalable backend services. Hands-on experience integrating Generative AI solutions using the Gemini API for real-time, context-aware features, and third-party APIs for production-grade integrations. Strong foundation in Data Structures & Algorithms, OOP, Computer Networks, and Agile development practices.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h2 className="font-display text-lg font-bold text-amber-400 border-b border-[#272730] pb-1 uppercase tracking-wider">
                  EDUCATION
                </h2>

                <div className="space-y-2">
                  <div className="flex justify-between font-bold text-slate-100">
                    <span>Chandigarh University, Punjab</span>
                    <span className="text-slate-400 font-normal">2023 – 2027</span>
                  </div>
                  <div className="text-slate-300">Bachelor of Engineering in Computer Science</div>

                  <div className="flex justify-between font-bold text-slate-100 mt-2">
                    <span>DBMS Career Academy, Jamshedpur</span>
                    <span className="text-slate-400 font-normal">2022 – 2023</span>
                  </div>
                  <div className="text-slate-300">Senior Secondary</div>

                  <div className="flex justify-between font-bold text-slate-100 mt-2">
                    <span>DBMS English School, Jamshedpur</span>
                    <span className="text-slate-400 font-normal">2019 – 2020</span>
                  </div>
                  <div className="text-slate-300">Secondary</div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h2 className="font-display text-lg font-bold text-amber-400 border-b border-[#272730] pb-1 uppercase tracking-wider">
                  PROJECTS
                </h2>

                <div className="space-y-2">
                  <div className="flex justify-between font-bold text-slate-100">
                    <span>Meditatva | AI Healthcare Platform | medi-tatva.vercel.app</span>
                    <span className="text-amber-400 font-normal">2025 – 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 pl-2">
                    <li>Developed a full-stack AI healthcare platform using React.js, TypeScript, and REST APIs, automating appointment booking, pharmacy search, and medical-record management.</li>
                    <li>Integrated Gemini API with asynchronous API handling to automate context-aware health recommendations across 3+ core features.</li>
                    <li>Built a reusable UI using React.js and Tailwind CSS minimizing repetitive implementation across devices.</li>
                  </ul>
                  <div className="text-xs text-amber-400 font-semibold">Tech: React.js, TypeScript, Tailwind CSS, Gemini API, REST APIs</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-bold text-slate-100">
                    <span>VOCA | AI Communication Analysis System | voca-rouge.vercel.app</span>
                    <span className="text-amber-400 font-normal">2024 – 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 pl-2">
                    <li>Developed an AI-powered interview evaluation platform using Node.js, Express.js, JavaScript, and REST APIs, improving evaluation efficiency by 60%.</li>
                    <li>Built scalable Node.js backend services with real-time multimodal processing pipelines, cutting review time from 30 to 12 minutes.</li>
                    <li>Integrated 5+ REST APIs for speech, gesture, and vocabulary analysis with 85%+ report accuracy.</li>
                  </ul>
                  <div className="text-xs text-amber-400 font-semibold">Tech: Node.js, React.js, JavaScript, REST APIs</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-bold text-slate-100">
                    <span>Ghoomo Firoo | Full-Stack Travel Booking Platform</span>
                    <span className="text-amber-400 font-normal">2023 – 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 pl-2">
                    <li>Developed a travel booking platform using Java, Spring Boot, Spring Data JPA, MySQL/H2 improving trip planning efficiency by 65%.</li>
                    <li>Integrated Amadeus Flight and Hotel APIs using OAuth2 client-credentials across 10+ REST endpoints.</li>
                    <li>Engineered a budget-optimization and server-side filtering engine reducing manual booking effort by 70%.</li>
                  </ul>
                  <div className="text-xs text-amber-400 font-semibold">Tech: Java, Spring Boot, Spring Data JPA, MySQL/H2, JavaScript, Amadeus API</div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-2">
                <h2 className="font-display text-lg font-bold text-amber-400 border-b border-[#272730] pb-1 uppercase tracking-wider">
                  TECHNICAL SKILLS
                </h2>
                <ul className="space-y-1 text-slate-300">
                  <li><strong className="text-slate-100">Languages:</strong> Java, JavaScript, TypeScript, HTML, CSS, SQL</li>
                  <li><strong className="text-slate-100">Frameworks:</strong> React.js, Next.js, Node.js, Express.js, Spring Boot, Spring Data JPA, Tailwind CSS</li>
                  <li><strong className="text-slate-100">Databases:</strong> MySQL, H2 </li>
                  <li><strong className="text-slate-100">Tools & APIs:</strong> Git, GitHub, Postman, REST APIs, OAuth2, Gemini API, Amadeus API</li>
                  <li><strong className="text-slate-100">Core CS:</strong> Data Structures & Algorithms, OOP, Computer Networks, Agile</li>
                  <li><strong className="text-slate-100">Soft Skills:</strong> Problem Solving, Team Collaboration, Adaptability</li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h2 className="font-display text-lg font-bold text-amber-400 border-b border-[#272730] pb-1 uppercase tracking-wider">
                  CERTIFICATIONS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  <div>● AWS Certified Solutions Architect – Associate (Udemy, Nov 2025)</div>
                  <div>● Spring and Angular Full Stack Developer (Infosys, Aug 2025)</div>
                  <div>● Artificial Intelligence – Samsung Innovation Campus (Dec-Apr 2026)</div>
                  <div>● Blockchain and its Applications (NPTEL / IIT Kharagpur, Jan-Apr 2025)</div>
                  <div>● Relational Database Administration (DBA) (IBM / Coursera, Mar 2025)</div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <h2 className="font-display text-lg font-bold text-amber-400 border-b border-[#272730] pb-1 uppercase tracking-wider">
                  ACHIEVEMENTS
                </h2>
                <div className="space-y-1 text-slate-300">
                  <div>🏆 2nd Runner-Up – NIT Hamirpur Hackathon</div>
                  <div>🏆 3rd Position – Chase the Code 2.0 Hackathon</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
