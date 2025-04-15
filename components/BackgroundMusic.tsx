"use client";

import { useEffect, useRef } from 'react';

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/music/quantum-beats.mp3');
    audio.loop = true;
    audio.muted = true;
    audioRef.current = audio;

    const playAudio = async () => {
      try {
        await audio.play();
        console.log('Audio is playing');
      } catch (error) {
        console.log('Auto-play blocked by browser:', error);
      }
    };

    playAudio();

    // Attempt to unmute after a short delay
    const unmuteAfterDelay = () => {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.muted = false;
          audioRef.current.play().catch((error) => {
            console.log('Unmute attempt failed:', error);
          });
        }
      }, 5000); // 5-second delay
    };

    unmuteAfterDelay();

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  return null;
}
