import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-[var(--border-color)]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider"
          
          Lets Progress Community
        </h1>
        <nav className="hidden md:flex space-x-10">
          <a href="#hero" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors duration-300 text-sm tracking-widest uppercase">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors duration-300 text-sm tracking-widest uppercase">
            Philosophy
          </a>
          <a href="#members" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors duration-300 text-sm tracking-widest uppercase">
            Members
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
