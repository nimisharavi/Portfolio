export default function About() {
  return (
    <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT TEXT */}
      <div>
        <h2 
          className="text-4xl font-bold mb-8 animate-fade-in-up uppercase tracking-tight"
          style={{ animationDelay: '0.2s', letterSpacing: '1px' }}
        >
          About Me
        </h2>

        <p 
          className="text-gray-700 leading-relaxed animate-fade-in-up text-base font-light"
          style={{ animationDelay: '0.4s', lineHeight: '1.8', fontWeight: '300' }}
        >
I am a Software Engineer with 1+ years of experience building scalable, high-performance digital solutions that translate complex ideas into measurable business outcomes.

I specialize in React, React Native, NestJS, and Laravel, engineering robust web and mobile systems with a strong focus on scalability, performance, and clean architecture.

My work goes beyond development I act as a bridge between technology and business strategy, simplifying technical complexity into clear, actionable insights for clients. This enables informed decision-making, stronger trust, and long-term business relationships.

I have consistently delivered end-to-end projects within strict timelines, ensuring reliability, precision, and execution excellence. This discipline has contributed to improved client confidence, repeat engagements, and enhanced business profitability through dependable software delivery.

I operate with full ownership from concept to deployment building solutions that not only function efficiently but also create real, lasting business impact.

My focus is simple: build systems that scale, earn trust, and drive growth.        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div 
        className="flex justify-center animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        <img
          src="/profile.png"
          className="w-64 h-85 object-cover rounded-2xl shadow-lg"
        />
      </div>

    </section>
  );
}