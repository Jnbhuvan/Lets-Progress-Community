import React, { useEffect, useRef, useState } from 'react';

const members = [
    { name: 'Harsha R', image: 'https://i.pinimg.com/564x/8e/98/8c/8e988c8e87413c2337e7a835b45f78ac.jpg' },
    { name: 'Adithya Maiya B', image: 'https://i.pinimg.com/564x/0f/37/d5/0f37d53063f4857bafa1e94a8f401cb1.jpg' },
    { name: 'Bhuvan J N', image: 'https://i.pinimg.com/564x/f3/9d/54/f39d54972f103a8fcf1f582f153a5513.jpg' },
    { name: 'Chiranth kumar J', image: 'https://i.pinimg.com/564x/6c/e0/75/6ce07550247610f76326e0b78486a4e3.jpg' },
    { name: 'Charan k The Chirathe', image: 'https://i.pinimg.com/564x/3b/b1/7d/3bb17d5c9c9e8a04b1f6a1b241416999.jpg' },
    { name: 'Kishore H P', image: 'https://i.pinimg.com/564x/e7/7b/39/e77b39b50b73c09b8130833b763f0d4b.jpg' },
    { name: 'Madan R', image: 'https://i.pinimg.com/564x/51/79/61/517961b7f2f1c841e537c77c68b7501a.jpg' },
    { name: 'Manoj', image: 'https://i.pinimg.com/564x/c0/8e/a4/c08ea4379e46951b1432a58b4a11f2d6.jpg' },
];

const MemberCard: React.FC<{ name: string; image: string; isVisible: boolean; index: number; }> = ({ name, image, isVisible, index }) => (
  <div 
    className={`group reveal-zoom ${isVisible ? 'visible' : ''}`}
    style={{transitionDelay: `${index * 100}ms`}}
  >
    <div className="relative w-full h-96 rounded-sm shadow-lg overflow-hidden group-hover:transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-black/60 transition-all duration-500 ease-in-out">
      <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover object-center filter grayscale group-hover:grayscale-[20%] transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--accent-color)] transition-all duration-500 rounded-sm pointer-events-none shadow-[0_0_20px_rgba(168,125,68,0)] group-hover:shadow-[0_0_20px_rgba(168,125,68,0.3)]"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h4 className="text-3xl font-bold text-white tracking-wide text-shadow-soft">{name}</h4>
      </div>
    </div>
  </div>
);

const Members: React.FC = () => {
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
        threshold: 0.1,
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
    <section ref={sectionRef} id="members" className="py-20 sm:py-32 bg-black/80" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-concrete.png')" }}>
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-5xl font-bold text-white mb-20 relative inline-block">
            OUR ARCHITECTS
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-[var(--accent-color)]"></span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <MemberCard key={index} name={member.name} image={member.image} isVisible={isVisible} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;