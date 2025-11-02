import React, { useEffect, useRef, useState } from 'react';

const members = [
    { name: 'Harsha R', image: 'https://tse4.mm.bing.net/th/id/OIP.-5B5mkBaqTcevF6d3ZSDQwAAAA?pid=ImgDet&w=185&h=330&c=7&dpr=1.1&o=7&rm=3' },
    { name: 'Adithya Maiya B', image: 'https://tse2.mm.bing.net/th/id/OIP.EHo_9rC__d7l1f9H0g1TOwHaM9?pid=ImgDet&w=185&h=323&c=7&dpr=1.1&o=7&rm=3' },
    { name: 'Jainag Bhuvan', image: 'https://tse1.mm.bing.net/th/id/OIP.yEfwfeH2W1XIFqqYzcUEcQHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1.1&o=7&rm=3' },
    { name: 'Chiranth kumar J', image: 'https://tse3.mm.bing.net/th/id/OIP.1PH6Agr9BCUH1PjQNR6-jgHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.1&o=7&rm=3' },
    { name: 'Charan k The Chirathe', image: 'https://tse3.mm.bing.net/th/id/OIP.Kpm3p2p-zpuHpWF9WO4n7QHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1.1&o=7&rm=3' },
    { name: 'Kishore H P', image: 'https://tse2.mm.bing.net/th/id/OIP.TnwtTu8_5OQ_6dSZt8VRWAHaKa?pid=ImgDet&w=185&h=260&c=7&dpr=1.1&o=7&rm=3' },
    { name: 'Madan R', image: 'https://tse2.mm.bing.net/th/id/OIP.Yn409q9FkxFm49EH_n19jgHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1.1&o=7&rm=3' },
    { name: 'Manoj', image: 'https://tse4.mm.bing.net/th/id/OIP.kFCM6BtE7TbkKwpp0d2IkQHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'You Be the Next', image: 'https://i.pinimg.com/736x/14/d1/12/14d1128a7224f7405715302b7259b51f.jpg' },
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
