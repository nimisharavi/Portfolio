'use client';

import { useEffect, useRef, useState } from 'react';

export function ParallaxBackground({ children }: { children: React.ReactNode }) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate rotation based on mouse position
      // Range: -15 to 15 degrees
      const rotateX = ((clientY / innerHeight) - 0.5) * 30;
      const rotateY = ((clientX / innerWidth) - 0.5) * -30;

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (!backgroundRef.current) return;

      const { beta, gamma } = e;
      
      // beta: front to back (-180 to 180)
      // gamma: left to right (-90 to 90)
      if (beta !== null && gamma !== null) {
        // Normalize values to -15 to 15 range
        const rotateX = (beta / 180) * 15;
        const rotateY = (gamma / 90) * -15;

        setRotation({ x: rotateX, y: rotateY });
      }
    };

    // Request permission for device orientation (iOS 13+)
    if (typeof DeviceOrientationEvent !== 'undefined' && 'requestPermission' in DeviceOrientationEvent) {
      const requestPermission = async () => {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission();
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          }
        } catch (error) {
          console.log('Device orientation permission denied or unavailable');
          // Fallback to mouse tracking
          window.addEventListener('mousemove', handleMouseMove);
        }
      };
      requestPermission();
    } else {
      // For non-iOS devices or older browsers, use mouse tracking
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  return (
    <>
      {/* Parallax Background Layer - Fixed */}
      <div
        ref={backgroundRef}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -10,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: 'transform 0.1s ease-out',
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Main gradient background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom right, rgb(248,245,245), rgb(235,237,238), rgb(227,242,253), rgb(252,228,236))',
          }} />

          {/* Enhanced 3D depth layers */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
            <div style={{
              position: 'absolute',
              top: '5rem',
              left: '2.5rem',
              width: '24rem',
              height: '24rem',
              background: '#BFDBFE',
              borderRadius: '50%',
              mixBlendMode: 'multiply',
              filter: 'blur(120px)',
              opacity: 0.2,
              animation: 'blob 7s infinite',
            }} />
            <div style={{
              position: 'absolute',
              top: '10rem',
              right: '2.5rem',
              width: '24rem',
              height: '24rem',
              background: '#FBCFE8',
              borderRadius: '50%',
              mixBlendMode: 'multiply',
              filter: 'blur(120px)',
              opacity: 0.2,
              animation: 'blob 7s infinite 2s',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-8rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '24rem',
              height: '24rem',
              background: '#E9D5FF',
              borderRadius: '50%',
              mixBlendMode: 'multiply',
              filter: 'blur(120px)',
              opacity: 0.2,
              animation: 'blob 7s infinite 4s',
            }} />
          </div>

          {/* Additional depth layers for 3D effect */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.05,
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>
      </div>

      {/* Content Layer - Relative positioning */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </>
  );
}
