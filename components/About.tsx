import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-32 bg-[#101010] text-white overflow-hidden border-y border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className={`order-2 md:order-1 ${isVisible ? 'reveal-left visible' : 'reveal-left'}`} style={{transitionDelay: '200ms'}}>
            <h3 className="text-5xl font-bold mb-6 border-b-2 border-[var(--accent-color)] pb-3 inline-block">Our Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We are a collective of individuals committed to relentless self-improvement and the pursuit of excellence. Our philosophy is rooted in independence, resilience, and strategic thinking. We don't follow the path; we create it.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
             We operate with purpose and precision. Our strength lies not in numbers, but in the depth of our character and the unwavering focus on our goals.
            </p>
          </div>
          <div className={`order-1 md:order-2 ${isVisible ? 'reveal-right visible' : 'reveal-right'}`}>
            <div className="p-1 border border-gray-800 rounded-sm hover:border-[var(--accent-color)] transition-colors duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1589824783837-29d3562a4b69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Philosophy" 
                  className="rounded-sm shadow-2xl shadow-black/50 w-full h-auto object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;