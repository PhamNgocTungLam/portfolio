import React from 'react';

export default function About() {
  return (
    <section className="py-10 scroll-mt-20 border-b border-surface-container-highest/60" id="about">
      <div className="flex items-center gap-2 mb-6">
        <span className="font-mono text-xs text-primary">// 01. About</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Profile Card with Avatar */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center gap-4 bg-surface-container p-5 rounded-xl border border-surface-container-highest hover:border-primary/50 transition-all duration-300">
          <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-xl overflow-hidden border-2 border-primary-container/40 shrink-0 shadow-lg group relative">
            <img 
              className="w-full h-full object-cover object-center brightness-125 contrast-105 group-hover:scale-105 transition-all duration-500" 
              src="/806001428_2038741580173938_7907703051718563929_n.jpg" 
              alt="Pham Ngoc Tung Lam" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://ui-avatars.com/api/?name=Pham+Ngoc+Tung+Lam&background=e11d2e&color=fff";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <span className="font-mono text-[10px] text-primary">Pham Ngoc Tung Lam</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 text-left sm:text-left lg:text-center w-full">
            <div className="font-display text-base font-bold text-on-surface">Pham Ngoc Tung Lam</div>
            <div className="font-mono text-xs text-primary font-medium">Software Developer</div>
            <div className="inline-flex items-center gap-1.5 mt-1 bg-surface-container-low px-2.5 py-1 rounded-md text-xs font-mono text-on-surface-variant lg:justify-center border border-surface-container-highest/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Ha Noi, Vietnam</span>
            </div>
          </div>
        </div>

        {/* Highlighted Education, Skills & Languages Grid */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-4 bg-surface-container p-6 rounded-xl border border-surface-container-highest">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Education Highlight Card */}
            <div className="bg-surface-container-low p-4 rounded-xl border border-surface-container-highest hover:border-primary/40 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold border-b border-surface-container-highest/60 pb-2">
                  <span className="material-symbols-outlined text-[18px]">school</span>
                  <span>EDUCATION</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-on-surface">FPT University</h4>
                  <div className="flex items-center gap-1.5 mt-2 flex-wrap font-mono text-[10px]">
                    <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold">GPA 3.2 / 4.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Skills Highlight Card */}
            <div className="bg-surface-container-low p-4 rounded-xl border border-surface-container-highest hover:border-primary/40 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold border-b border-surface-container-highest/60 pb-2">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  <span>CORE SKILLS</span>
                </div>
                <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-semibold border border-primary-container/30">Java 21</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface border border-surface-container-highest">Spring Boot 3</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface border border-surface-container-highest">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface border border-surface-container-highest">MyBatis</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface border border-surface-container-highest">Docker</span>
                </div>
              </div>
            </div>

            {/* Languages & Soft Skills Highlight Card */}
            <div className="bg-surface-container-low p-4 rounded-xl border border-surface-container-highest hover:border-primary/40 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold border-b border-surface-container-highest/60 pb-2">
                  <span className="material-symbols-outlined text-[18px]">language</span>
                  <span>LANGUAGES</span>
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex items-center justify-between bg-surface-container px-2.5 py-1 rounded border border-surface-container-highest">
                    <span className="text-on-surface">English</span>
                    <span className="text-emerald-400 font-semibold text-[11px]">B1+</span>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container px-2.5 py-1 rounded border border-surface-container-highest">
                    <span className="text-on-surface">Japanese</span>
                    <span className="text-emerald-400 font-semibold text-[11px]">JLPT N4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Summary Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-surface-container-highest/60 font-mono text-xs">
            <div className="bg-surface-container-low p-2.5 rounded-lg border border-surface-container-highest/70 hover:border-primary/40 transition-colors">
              <span className="text-on-surface-variant/70 block text-[10px]">// ROLE</span>
              <span className="text-on-surface font-semibold truncate block mt-0.5">Software Dev</span>
            </div>
            <div className="bg-surface-container-low p-2.5 rounded-lg border border-surface-container-highest/70 hover:border-primary/40 transition-colors">
              <span className="text-on-surface-variant/70 block text-[10px]">// DEGREE</span>
              <span className="text-on-surface font-semibold truncate block mt-0.5">FPT Honors</span>
            </div>
            <div className="bg-surface-container-low p-2.5 rounded-lg border border-surface-container-highest/70 hover:border-primary/40 transition-colors">
              <span className="text-on-surface-variant/70 block text-[10px]">// PRIMARY STACK</span>
              <span className="text-on-surface font-semibold truncate block mt-0.5">Java · Spring 3</span>
            </div>
            <div className="bg-surface-container-low p-2.5 rounded-lg border border-surface-container-highest/70 hover:border-primary/40 transition-colors">
              <span className="text-on-surface-variant/70 block text-[10px]">// LANGUAGES</span>
              <span className="text-on-surface font-semibold truncate block mt-0.5">EN B1+ · JP N4</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
