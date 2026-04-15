'use client';

import { Canvas } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Jaguar() {
  const face = useTexture('/jaguar.png');
  const eyes = useTexture('/eyes.png');

  const faceRef = useRef<any>(null);
  const eyesRef = useRef<any>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      eyesRef.current.material,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: 'power2.out' }
    )
    .fromTo(
      faceRef.current.material,
      { opacity: 0 },
      { opacity: 1, duration: 4, ease: 'power2.out' },
      '-=1'
    )
    .fromTo(
      faceRef.current.scale,
      { x: 1.4, y: 1.4 },
      { x: 1, y: 1, duration: 6, ease: 'power2.out' },
      0
    );
  }, []);

  return (
    <>
      <mesh ref={faceRef}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={face} transparent opacity={0} />
      </mesh>

      <mesh ref={eyesRef}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={eyes} transparent opacity={0} />
      </mesh>
    </>
  );
}

export default function JaguarScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <Jaguar />
    </Canvas>
  );
}
