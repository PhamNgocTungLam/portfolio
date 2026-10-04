import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-highest/60 py-5 mt-auto">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant">
        <div>© 2026 Pham Ngoc Tung Lam.</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" title="GitHub">
            <span className="material-symbols-outlined text-[18px]">code</span>
          </a>
          <a href="https://linkedin.com/in/pham-ngoc-tung-lam-a963a6233" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" title="LinkedIn">
            <span className="material-symbols-outlined text-[18px]">link</span>
          </a>
          <a href="mailto:pntlam12g03@gmail.com" className="hover:text-primary transition-colors" title="Email">
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
