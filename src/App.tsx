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

      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-end pr-4 sm:pr-6">
        <div className="pointer-events-auto flex items-end">
          <FloatingMusicPlayer />
        </div>
      </div>

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};

export default App;
