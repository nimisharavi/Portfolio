'use client';

import { useEffect, useRef } from 'react';

export default function IntroSound({ play }: { play: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!play) return;

    if (!audioRef.current) {
      audioRef.current = new Audio('/intro.mp3');
      audioRef.current.volume = 0.4;
    }

    audioRef.current.play().catch(() => {
      // ignore browser interruption warnings
    });

  }, [play]);

  return null;
}
