'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

const items = [
  { slug: 'nestjs', img: '/nestjs.png' },
  { slug: 'nextjs', img: '/nextjs.png' },
  { slug: 'laravel', img: '/laravel.png' },
  { slug: 'react', img: '/react.png' },
  { slug: 'python', img: '/python.png' },
  { slug: 'ai', img: '/ai.png' },
  { slug: 'powerbi', img: '/powerbi.png' },
];

export default function GridBoxes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const boxes = Array.from(containerRef.current!.children);

    boxes.forEach((box) => {
      gsap.fromTo(
        box,
        {
          scale: 0.05,
          opacity: 0,
          borderRadius: '50%',
          transformOrigin: 'center center',
        },
        {
          scale: 1,
          opacity: 1,
          borderRadius: '12px',
          duration: 0.5,
          ease: 'back.out(2)',
        }
      );
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className="
        grid grid-cols-3 gap-16
      "
    >
    {items.map((item, i) => (
      <div
        key={i}
        onClick={() => router.push(`/skills/${item.slug}`)}
        className="
          w-32 h-32
          rounded-xl
          overflow-hidden
          cursor-pointer
          group
        "
      >
        <img
          src={item.img}
          className="
            w-full h-full
            object-cover
            transition duration-300
            group-hover:scale-110
          "
        />
      </div>
    ))}
    </div>
  );
}