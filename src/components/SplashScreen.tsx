import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFade(true);
    }, 2200);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-[#050507] z-[10000] flex items-center justify-center transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <svg width="360" height="130" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
          <text
            x="200"
            y="100"
            textAnchor="middle"
            className="font-cursive text-8xl font-normal fill-none stroke-slate-100 stroke-[1.5] animate-draw"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: 2000,
              animation: 'drawSignature 2s ease-in-out forwards',
            }}
          >
            Mehul
          </text>
        </svg>
        <div className="mt-4 font-mono text-xs tracking-[0.3em] text-amber-400 uppercase opacity-80 animate-pulse">
          Initializing Portfolio System...
        </div>
      </div>
      <style>{`
        @keyframes drawSignature {
          0% { stroke-dashoffset: 2000; fill: transparent; }
          70% { stroke-dashoffset: 0; fill: transparent; }
          100% { stroke-dashoffset: 0; fill: #f0f0f0; }
        }
      `}</style>
    </div>
  );
};
