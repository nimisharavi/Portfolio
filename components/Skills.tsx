'use client';

export default function Skills() {
  const skills = [
    '/nestjs.png',
    '/react.png',
    '/nextjs.png',
    '/laravel.png',
    '/python.png',
    '/powerbi.png',
    '/tableau.png',
    '/excel.png',
    '/postgres.png',
    '/aws.png'
  ];

  return (
    <section className="py-20 px-6 md:px-20">

      <h2 
        className="text-3xl font-semibold mb-10 animate-fade-in-up"
        style={{ animationDelay: '0.2s' }}
      >
        Technologies
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        {skills.map((img, i) => (
          <div
            key={i}
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            className="animate-fade-in-up
              min-w-[160px] md:min-w-[180px]
              h-[160px] md:h-[180px]
              bg-gradient-to-br from-white/80 to-white/50
              backdrop-blur-md
              rounded-2xl
              flex items-center justify-center
              shadow-lg hover:shadow-2xl
              hover:scale-110 
              hover:-translate-y-2
              transition-all duration-300 ease-out
              border border-white/30
              cursor-pointer
              group
              snap-center
              flex-shrink-0
            "
          >
            <img 
              src={img} 
              className="w-20 h-20 md:w-28 md:h-28 object-contain group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
        ))}

      </div>

    </section>
  );
}