import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offsetY = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${offsetY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="h-screen relative overflow-hidden flex items-center justify-center text-center text-white">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/023/977/563/large_2x/front-view-dark-silhouette-of-a-modern-sport-black-car-isolated-on-black-background-ai-generated-free-photo.jpg')",
        }}
      ></div>
      <div className="bg-black/85 absolute inset-0 z-0"></div>
      <div className="mist-overlay"></div>
      
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.02]"
        style={{ backgroundImage: "url('https://www.freepnglogos.com/uploads/batman-logo-png/batman-logo-batman-symbol-clipart-best-13.png')" }}
      ></div>

      <div className="relative z-10 p-8">
        <h2 
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight title-spotlight reveal visible"
          style={{transitionDelay: '200ms'}}
        >
          LETS PROGRESS COMMUNITY
        </h2>
        <p 
          className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light reveal visible"
          style={{transitionDelay: '500ms', letterSpacing: '0.1em'}}
        >
          In the shadows we rise. By our own code, we succeed. We are the architects of our own fate.
        </p>
        <a 
          href="#members" 
          className="mt-10 inline-block font-bold py-3 px-10 rounded-sm text-sm dark-knight-button reveal visible"
          style={{transitionDelay: '800ms'}}
        >
          Meet The Architects
        </a>
      </div>
    </section>
  );
};

export default Hero;
