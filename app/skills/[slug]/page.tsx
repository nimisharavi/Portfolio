'use client';

import { useParams } from 'next/navigation';

export default function SkillPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Convert slug → Proper Title
  const formatTitle = (text: string) => {
    return text
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      
      <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-wider">
        {formatTitle(slug)}
      </h1>

    </div>
  );
}