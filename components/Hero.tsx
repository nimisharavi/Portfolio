export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6">
      
      <h1 
        className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up uppercase"
        style={{ animationDelay: '0.2s', letterSpacing: '2px' }}
      >
        Nimisha Ravi
      </h1>

      <p 
        className="mt-6 text-gray-600 text-lg tracking-widest animate-fade-in-down uppercase"
        style={{ animationDelay: '0.5s', letterSpacing: '4px', fontWeight: '500' }}
      >
        Software Engineer
      </p>

    </section>
  );
}