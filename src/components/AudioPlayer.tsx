"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, FastForward } from "lucide-react";

interface AudioPlayerProps {
  content: string[];
}

export const AudioPlayer = ({ content }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [progress, setProgress] = useState(0);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    synthesisRef.current = window.speechSynthesis;
    
    return () => {
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!synthesisRef.current) return;

    if (isPlaying) {
      synthesisRef.current.pause();
      setIsPlaying(false);
    } else {
      if (synthesisRef.current.paused) {
        synthesisRef.current.resume();
        setIsPlaying(true);
      } else {
        const textToRead = content.join(" ").replace(/##\s+/g, "").replace(/>\s+/g, "");
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.rate = playbackSpeed;
        
        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(0);
        };

        utterance.onboundary = (event) => {
          const totalLength = textToRead.length;
          const currentProgress = (event.charIndex / totalLength) * 100;
          setProgress(Math.min(currentProgress, 100));
        };

        utteranceRef.current = utterance;
        synthesisRef.current.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  const changeSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    const nextSpeed = speeds[nextIndex];
    setPlaybackSpeed(nextSpeed);
    
    if (isPlaying && synthesisRef.current) {
      synthesisRef.current.cancel();
      const textToRead = content.join(" ").replace(/##\s+/g, "").replace(/>\s+/g, "");
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = nextSpeed;
      utteranceRef.current = utterance;
      synthesisRef.current.speak(utterance);
    }
  };

  const restart = () => {
    if (synthesisRef.current) {
      synthesisRef.current.cancel();
      setIsPlaying(false);
      setProgress(0);
    }
  };

  return (
    <div className="bg-secondary/50 border border-border rounded-2xl p-6 mb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="h-14 w-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>
          <div>
            <div className="text-sm font-bold text-black uppercase tracking-widest mb-1">
              Listen to this article
            </div>
            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              {isPlaying ? "Playing now" : "Read by Twelve Lords AI"}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 max-w-md">
          <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            <span>Progress: {Math.round(progress)}%</span>
            <div className="flex items-center gap-4">
              <button onClick={restart} className="hover:text-black flex items-center gap-1">
                <RotateCcw className="w-3 h-3" /> Restart
              </button>
              <button onClick={changeSpeed} className="hover:text-black flex items-center gap-1">
                <FastForward className="w-3 h-3" /> {playbackSpeed}x Speed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
