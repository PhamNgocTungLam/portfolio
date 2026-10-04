import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-surface font-sans text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <Navbar />

      <main className="w-full pt-16 bg-surface flex-grow">
        <div className="relative w-full max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter">
          <div className="absolute -top-10 left-1/3 w-80 h-80 bg-primary-container/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Back to Top Floating Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary-container text-on-primary-container shadow-[0_0_16px_rgba(225,29,46,0.5)] flex items-center justify-center hover:bg-secondary-container hover:scale-110 transition-all z-40" 
        title="Back to top"
      >
        <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
      </a>
    </div>
  );
}
