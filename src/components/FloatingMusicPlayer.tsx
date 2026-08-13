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
          <div className="rounded-2xl border border-amber-500/30 bg-[#0f0f14]/95 px-3 py-3 shadow-2xl backdrop-blur-xl">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-amber-300">
              Volume: {Math.round(volume * 100)}%
            </div>
            <input
              type="range"
              min="0.1"
              max="0.3"
              step="0.01"
              value={volume}
              onChange={(e) => handleVolumeChange(Number(e.target.value))}
              className="w-32 accent-amber-400"
              aria-label="Adjust music volume"
            />
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => setVolumeOpen((open) => !open)}
            className="h-11 w-11 flex items-center justify-center border-2 border-amber-500 bg-[#121216] text-amber-300 shadow-2xl shadow-amber-400/20 transition-all duration-300 hover:bg-amber-400 hover:text-black"
            title="Adjust volume"
            aria-label="Adjust volume"
          >
            <i className="fas fa-volume-high text-sm" />
          </button>

          <button
            onClick={handleToggle}
            className={`flex h-11 w-11 items-center justify-center border-2 shadow-2xl transition-all duration-300 hover:scale-105 ${
              isPlaying
                ? 'bg-amber-400 border-amber-300 text-black shadow-amber-400/20'
                : 'bg-[#121216] border-amber-500 text-amber-300 shadow-amber-400/20 hover:bg-amber-400 hover:text-black'
            }`}
            title={isPlaying ? 'Pause music' : 'Play music'}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            <img
              src="/sound.png"
              alt="Sound"
              className={`h-5 w-5 object-contain ${isPlaying ? 'opacity-100' : 'opacity-90'}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};