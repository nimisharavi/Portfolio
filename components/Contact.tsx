export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      <h2 
        className="text-4xl font-bold mb-12 uppercase tracking-tight animate-fade-in-up"
        style={{ animationDelay: '0.2s', letterSpacing: '1px' }}
      >
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        {/* Email */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="mb-4 flex justify-center">
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <a
            href="mailto:nimisharaavii@gmail.com"
            className="text-lg text-gray-900 hover:text-gray-600 transition-colors duration-300 underline decoration-gray-900 hover:decoration-gray-600 underline-offset-2"
            style={{ letterSpacing: '0.5px' }}
          >
            nimisharaavii@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

        {/* Phone */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="mb-4 flex justify-center">
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <a
            href="tel:+919946604264"
            className="text-lg text-gray-900 hover:text-gray-600 transition-colors duration-300 underline decoration-gray-900 hover:decoration-gray-600 underline-offset-2"
            style={{ letterSpacing: '0.5px' }}
          >
            +91 9946604264
          </a>
        </div>
      </div>

      <p 
        className="mt-16 text-gray-600 text-sm italic"
        style={{ animationDelay: '0.8s', fontWeight: '300' }}
      >
        Feel free to reach out.
      </p>
    </section>
  );
}
