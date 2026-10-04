import React from 'react';

export default function Education() {
  return (
    <section className="py-10 scroll-mt-20 border-b border-surface-container-highest/60" id="education">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-primary">// 04. Education</span>
        </div>
        <span className="font-mono text-xs text-on-surface-variant hidden sm:inline-block">Ha Noi, Vietnam</span>
      </div>

      <div className="bg-surface-container p-6 rounded-xl border border-surface-container-highest hover:border-primary/50 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low border border-surface-container-highest flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-display text-base font-bold text-on-surface">FPT University</h3>
                <span className="text-on-surface-variant text-xs">—</span>
                <span className="font-sans text-sm font-semibold text-primary">Bachelor of Software Engineering</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded font-semibold">GPA: 3.2 / 4.0</span>
            <span className="font-mono text-xs text-primary bg-primary-container/10 border border-primary-container/30 px-3 py-1 rounded font-semibold">Honors Degree</span>
          </div>
        </div>
      </div>
    </section>
  );
}
