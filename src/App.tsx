import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { StarBackground } from './components/StarBackground';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';

export const App: React.FC = () => {
  const [splashFinished, setSplashFinished] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {/* Animated Signature Splash Screen */}
      {!splashFinished && (
        <SplashScreen onComplete={() => setSplashFinished(true)} />
      )}

      {/* Canvas Starfield Background */}
      <StarBackground />

      {/* Fixed Navigation Elements */}
      <Sidebar />
      <Navbar />

      {/* Main Layout Container */}
      <main className="pl-16 sm:pl-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>

      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
        <button
          onClick={() => setResumeOpen(true)}
          className="bg-[#121216] border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 px-4 py-3 shadow-2xl flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider group shadow-amber-400/20 hover:scale-105"
          title="Preview & Download Mehul's Resume"
        >
          <i className="fas fa-file-pdf text-base text-amber-400 group-hover:text-black transition-colors" />
          <span>RESUME</span>
        </button>

        <FloatingMusicPlayer />
      </div>

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};

export default App;
