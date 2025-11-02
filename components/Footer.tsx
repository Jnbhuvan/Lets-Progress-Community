import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 text-center text-gray-500 border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-widest uppercase">&copy; {new Date().getFullYear()} LETS PROGRESS COMMUNITY. ALL RIGHTS RESERVED.</p>
        <p className="text-sm mt-2 italic text-gray-600">"Mastering Our Fate. Captaining Our Soul."</p>
      </div>
    </footer>
  );
};

export default Footer;