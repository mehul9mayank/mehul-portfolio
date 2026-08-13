import React, { useState, useRef, useEffect } from 'react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'welcome',
      output: 'Mehul System OS v2.0 - Type "help" for available commands.',
    },
  ]);

  const historyEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output = '';

    switch (trimmed) {
      case 'help':
        output = `Available Commands:
  ● about        - Learn about Mehul Mayank
  ● projects     - View engineered projects
  ● skills       - Technical stack
  ● education    - Degree & certifications
  ● contact      - Direct email, phone & links
  ● neofetch     - Display system info & ASCII art
  ● clear        - Clear terminal screen
  ● exit         - Close system terminal`;
        break;

      case 'about':
        output = `[ABOUT MEHUL MAYANK]
Software Developer & Full-Stack Engineer with 2+ years of experience engineering AI-driven web apps.
Key Achievements:
  ● Built applications serving 100+ active users
  ● Reduced query resolution time by 45% with AI integration
  ● Achieved 98% cross-device compatibility`;
        break;

      case 'projects':
        output = `[PROJECT DIRECTORY]
1. Meditatva (AI Healthcare) -> React.js, TypeScript, Gemini API
   Demo: https://medi-tatva.vercel.app
2. VOCA (AI Interview Evaluation) -> Node.js, React.js
   Demo: https://voca-rouge.vercel.app
3. Ghoomo Firoo (Travel Booking) -> Java, Spring Boot, MySQL`;
        break;

      case 'skills':
        output = `[TECHNICAL SKILLS]
Languages:      Java, JavaScript, TypeScript, HTML, CSS, SQL
Frontend:       React.js, Next.js, Tailwind CSS
Backend:        Node.js, Spring Boot, REST APIs
Databases:      MySQL, H2`;
        break;

      case 'education':
        output = `[ACADEMIC HISTORY & CERTS]
Degree: B.E. Computer Science @ Chandigarh University (2023 - 2027)
Certifications:
  ● AWS Certified Solutions Architect – Associate
  ● Spring and Angular Full Stack Developer
  ● DSA using Java | Blockchain & Applications`;
        break;

      case 'contact':
        output = `[CONTACT DECK]
Email:    mehul09mayank@gmail.com
Phone:    +91 8102 208365
LinkedIn: linkedin.com/in/mehul09
GitHub:   github.com/mehul09`;
        break;

      case 'neofetch':
      case 'sysinfo':
        output = `
  _________________
 |.---------------.|
 ||     ● ● ●     ||
 ||     MEHUL     ||
 ||   PORTFOLIO   ||
 ||_______________||
 /.-.-.-.-.-.-.-.-.\\
/___________________\\
\\___________________/

mehul@portfolio ~ %
------------------------
Developer:   Full-Stack & AI Engineer
Experience:  2+ Years
Location:    Chandigarh, India
Status:      Open to Opportunities`;
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        onClose();
        return;

      default:
        output = `Command not recognized: "${trimmed}". Type "help" for available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-full md:w-2/3 lg:w-1/2 h-[50vh] bg-[#0c0c10]/95 border-t border-l border-[#272730] z-50 flex flex-col backdrop-blur-md shadow-2xl">
      {/* Terminal Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#14141c] border-b border-[#272730]">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="ml-2 text-slate-300 font-bold">&gt; mehul@portfolio ~ %</span>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-red-400 text-sm font-mono">
          ✕
        </button>
      </div>

      {/* History log */}
      <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3 leading-relaxed text-slate-300">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400">
              <span>&gt;</span>
              <span className="text-slate-100">{item.command}</span>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-slate-300 text-xs">{item.output}</pre>
          </div>
        ))}
        <div ref={historyEndRef} />
      </div>

      {/* Prompt input */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/60 border-t border-[#272730]">
        <span className="font-mono text-xs text-emerald-400 font-bold">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help' for commands..."
          className="flex-1 bg-transparent font-mono text-xs text-slate-100 focus:outline-none placeholder-slate-600"
        />
      </div>
    </div>
  );
};
