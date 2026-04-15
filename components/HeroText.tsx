'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroText() {
  const nameRef = useRef<HTMLDivElement | null>(null);
  const roleRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLParagraphElement | null>(null); // ✅ ADD THIS
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!nameRef.current || !roleRef.current || !aboutRef.current || !contactRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(
      roleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(
      aboutRef.current, // ✅ NOW WORKS
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(
      contactRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.6'
    );
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
      
      {/* NAME */}
      <div
        ref={nameRef}
        className="text-white text-5xl md:text-7xl font-semibold tracking-widest"
      >
        NIMISHA RAVI
      </div>

      {/* ROLE */}
      <div
        ref={roleRef}
        className="mt-4 text-gray-400 text-sm md:text-lg tracking-[0.4em] uppercase"
      >
        Software Engineer
      </div>

      {/* ABOUT */}
      <p
        ref={aboutRef}
        className="mt-6 max-w-xl text-sm md:text-base text-white/60 leading-relaxed"
      >
        Passionate about building scalable and efficient applications that deliver real business value. With hands-on experience in React, React Native, NestJS, and Laravel, I specialize in developing high-performance systems that improve user experience, streamline processes, and support business growth.

        I approach development with a strong focus on efficiency and problem-solving—ensuring that the solutions I build are not only functional but also optimized, maintainable, and aligned with business goals. My background in both development and data-driven work allows me to understand requirements deeply and implement solutions that enhance productivity and reduce operational complexity.

        In my professional experience, I have contributed to building full-stack web and mobile applications, including systems integrated with hardware, ensuring reliability and scalability. I focus on writing clean, structured code and delivering solutions that help teams work faster, reduce errors, and improve overall system performance.

        Beyond technical skills, I bring strong ownership and accountability. I have managed projects end-to-end, collaborated with clients, and consistently delivered within timelines—ensuring that business requirements are met effectively. My ability to adapt quickly and take responsibility helps teams move faster and achieve better outcomes.

        I am driven to contribute to organizations by building impactful solutions, improving system efficiency, and delivering consistent value through technology.
      </p>
      <div
        ref={contactRef}
        className="mt-6 flex flex-col items-center gap-2 text-sm text-white/70"
      >
        {/* Email */}
        <a
          href="mailto:nimisharaavii@gmail.com"
          className="hover:text-white transition"
        >
          nimisharaavii@gmail.com
        </a>

        {/* Phone */}
        <a
          href="tel:9946604264"
          className="hover:text-white transition"
        >
          +91 9946604264
        </a>

      </div>
    </div>
  );
}