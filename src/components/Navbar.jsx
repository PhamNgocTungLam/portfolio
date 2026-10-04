import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-surface/90 backdrop-blur-md border-b border-surface-container-highest/60 py-3' 
        : 'bg-surface/70 backdrop-blur-sm border-b border-surface-container-highest/30 py-4'
    }`}>
      <div className="max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_10px_rgba(225,29,46,0.9)] group-hover:scale-125 transition-transform duration-300"></span>
          <span className="font-mono font-bold text-sm tracking-tight text-on-surface group-hover:text-primary transition-colors flex items-center gap-1">
            &lt;<span className="text-primary">pntlam</span>.dev /&gt;
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-container/60 p-1 rounded-lg border border-surface-container-highest/40">
          <a href="#about" className="px-3.5 py-1.5 font-sans text-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-md transition-all">About</a>
          <a href="#skills" className="px-3.5 py-1.5 font-sans text-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-md transition-all">Skills</a>
          <a href="#experience" className="px-3.5 py-1.5 font-sans text-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-md transition-all">Experience</a>
          <a href="#education" className="px-3.5 py-1.5 font-sans text-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-md transition-all">Education</a>
          <a href="#contact" className="px-3.5 py-1.5 font-sans text-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-md transition-all">Contact</a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <a 
            href="/Back_End_Developer_Java_PhamNgocTungLam.pdf" 
            download="Back_End_Developer_Java_PhamNgocTungLam.pdf" 
            className="inline-flex items-center gap-1.5 bg-primary-container hover:bg-secondary-container text-on-primary-container px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold shadow-[0_0_12px_rgba(225,29,46,0.4)] transition-all hover:scale-105 active:scale-95"
            title="Download PDF Resume"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Download CV</span>
          </a>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-surface-container border border-surface-container-highest flex items-center justify-center text-on-surface hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low border-b border-surface-container-highest px-4 py-3 flex flex-col gap-2 font-sans text-sm mt-2">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container">About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container">Skills</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container">Experience</a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container">Education</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container">Contact</a>
        </div>
      )}
    </header>
  );
}
