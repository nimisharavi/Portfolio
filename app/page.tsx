import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import { SectionDivider } from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <SectionDivider />

      <About />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <Projects />
    </main>
  );
}