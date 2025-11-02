import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-gray-300 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Members />
      </main>
      <Footer />
    </div>
  );
};

export default App;