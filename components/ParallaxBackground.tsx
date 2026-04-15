'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxBackground() {
  const layer1 = useRef<HTMLDivElement>(null); // far
  const layer2 = useRef<HTMLDivElement>(null); // mid
  const fogLayer = useRef<HTMLDivElement>(null); // fog
  const layer3 = useRef<HTMLDivElement>(null); // near

  useEffect(() => {
    const move = (x: number, y: number) => {
      if (!layer1.current || !layer2.current || !layer3.current || !fogLayer.current) return;

      layer1.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      layer2.current.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
      fogLayer.current.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`; // fog mid-depth
      layer3.current.style.transform = `translate(${x * 1}px, ${y * 1}px)`;
    };

    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      move(x, y);
    };

    const handleDevice = (e: DeviceOrientationEvent) => {
      const x = (e.gamma || 0) * 2;
      const y = (e.beta || 0) * 2;
      move(x, y);
    };

    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('deviceorientation', handleDevice);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('deviceorientation', handleDevice);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      
      {/* FAR LAYER */}
      <div ref={layer1} className="absolute inset-0 transition-transform duration-200 ease-out">
        <div className="w-full h-full bg-gradient-to-br from-black via-[#050505] to-[#0a0a0a]" />
      </div>

      {/* MID COLOR LAYER */}
      <div ref={layer2} className="absolute inset-0 transition-transform duration-200 ease-out">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[140px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[140px] bottom-[-150px] right-[-150px]" />
      </div>

      {/* 🌫️ FOG LAYER */}
      <div
        ref={fogLayer}
        className="absolute inset-0 transition-transform duration-200 ease-out pointer-events-none"
      >
        <div className="fog opacity-40" />
      </div>

      {/* NEAR LAYER */}
      <div ref={layer3} className="absolute inset-0 transition-transform duration-200 ease-out">
        <div className="absolute w-[300px] h-[300px] bg-white/5 blur-[100px] top-[20%] left-[20%]" />
        <div className="absolute w-[250px] h-[250px] bg-white/5 blur-[100px] bottom-[20%] right-[20%]" />
      </div>
    </div>
  );
}
