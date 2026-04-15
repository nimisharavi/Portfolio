'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function SideNavButton() {
  const router = useRouter();

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 flex items-center">

      <div
        onClick={() => router.push('/next')}
        className="
          relative
          w-20 h-40
          rounded-l-full
          backdrop-blur-xl
          bg-white/[0.08]
          border border-white/10
          flex items-center justify-center
          cursor-pointer
          overflow-hidden
          transition-all duration-500
          group

          hover:bg-white/[0.12]
          hover:scale-105
          hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
        "
      >

        {/* Soft glow gradient */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-white/5 via-transparent to-transparent
          opacity-0 group-hover:opacity-100
          transition duration-500
        " />

        {/* Light sweep effect */}
        {/* <div className="
          absolute top-0 left-[-100%]
          w-full h-full
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          group-hover:left-[100%]
          transition-all duration-700
        " /> */}

        {/* Arrow */}
        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition" />
      </div>
    </div>
  );
}
