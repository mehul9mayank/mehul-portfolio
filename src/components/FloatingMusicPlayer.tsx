import React, { useEffect, useRef, useState } from 'react';

export const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [volumeOpen, setVolumeOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleToggle = async () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      return;
    }

    try {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (nextVolume: number) => {
    setVolume(nextVolume);

    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="flex items-end gap-3">
      <audio ref={audioRef} loop preload="auto">
        <source src="/loser-tame%20implala.mp3" type="audio/mp3" />
      </audio>

      <div className="flex flex-col items-end gap-2">
        {volumeOpen && (
          <div className="rounded-2xl border border-violet-500/30 bg-[#0f0f14]/95 px-3 py-3 shadow-2xl backdrop-blur-xl">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-violet-300">
              Volume: {Math.round(volume * 100)}%
            </div>
            <input
              type="range"
              min="0.1"
              max="0.3"
              step="0.01"
              value={volume}
              onChange={(e) => handleVolumeChange(Number(e.target.value))}
              className="w-32 accent-violet-400"
              aria-label="Adjust music volume"
            />
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => setVolumeOpen((open) => !open)}
            className="h-11 w-11 flex items-center justify-center border-2 border-violet-500 bg-[#121216] text-violet-300 shadow-2xl shadow-violet-500/20 transition-all duration-300 hover:bg-violet-500 hover:text-white"
            title="Adjust volume"
            aria-label="Adjust volume"
          >
            <i className="fas fa-volume-high text-sm" />
          </button>

          <button
            onClick={handleToggle}
            className={`flex items-center gap-3 border-2 px-4 py-3 shadow-2xl transition-all duration-300 font-mono text-xs font-bold uppercase tracking-wider hover:scale-105 ${
              isPlaying
                ? 'bg-violet-500 border-violet-300 text-white shadow-violet-500/20'
                : 'bg-[#121216] border-violet-500 text-violet-300 shadow-violet-500/20 hover:bg-violet-500 hover:text-white'
            }`}
            title={isPlaying ? 'Pause music' : 'Play music'}
          >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-base`} />
            <span>{isPlaying ? 'MUSIC ON' : 'MUSIC OFF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};