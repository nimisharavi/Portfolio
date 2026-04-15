'use client';

import ParallaxBackground from '@/components/ParallaxBackground';
import HeroText from '@/components/HeroText';
import SideNavButton from '@/components/SideNavButton';

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <ParallaxBackground />
      <HeroText />
      <SideNavButton />
    </main>
  );
}
