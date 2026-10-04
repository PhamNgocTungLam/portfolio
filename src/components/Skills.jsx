import React from 'react';

export default function Skills() {
  return (
    <section className="py-10 scroll-mt-20 border-b border-surface-container-highest/60" id="skills">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-primary">// 02. Skills</span>
        </div>
        <span className="font-mono text-xs text-on-surface-variant/70">Extracted directly from CV & Enterprise Projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Java & Frameworks */}
        <div className="bg-surface-container p-5 rounded-xl border border-surface-container-highest space-y-3 hover:border-primary/50 transition-all">
          <div className="flex items-center gap-2 text-on-surface font-display font-bold text-sm border-b border-surface-container-highest/60 pb-2">
            <span className="material-symbols-outlined text-primary text-[20px]">terminal</span>
            <span>Java & Frameworks</span>
          </div>
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Spring Boot 3</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Spring Security</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Spring Data JPA</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">MyBatis</span>
          </div>
        </div>

        {/* Databases & Storage */}
        <div className="bg-surface-container p-5 rounded-xl border border-surface-container-highest space-y-3 hover:border-primary/50 transition-all">
          <div className="flex items-center gap-2 text-on-surface font-display font-bold text-sm border-b border-surface-container-highest/60 pb-2">
            <span className="material-symbols-outlined text-primary text-[20px]">storage</span>
            <span>Databases & Migration</span>
          </div>
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-primary border border-primary-container/30 font-semibold">PostgreSQL</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">MySQL</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Redis</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Flyway</span>
          </div>
        </div>

        {/* AI & Microservices */}
        <div className="bg-surface-container p-5 rounded-xl border border-surface-container-highest space-y-3 hover:border-primary/50 transition-all">
          <div className="flex items-center gap-2 text-on-surface font-display font-bold text-sm border-b border-surface-container-highest/60 pb-2">
            <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
            <span>AI & Microservices</span>
          </div>
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-primary border border-primary-container/30 font-semibold">Python</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Flask API</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">LangChain</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">ChromaDB</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Ollama</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-tertiary border border-tertiary-container/30">SSE Streaming</span>
          </div>
        </div>

        {/* DevOps & Languages */}
        <div className="bg-surface-container p-5 rounded-xl border border-surface-container-highest space-y-3 hover:border-primary/50 transition-all">
          <div className="flex items-center gap-2 text-on-surface font-display font-bold text-sm border-b border-surface-container-highest/60 pb-2">
            <span className="material-symbols-outlined text-primary text-[20px]">build</span>
            <span>DevOps & Languages</span>
          </div>
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Docker</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Git</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-highest">Maven / Gradle</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-emerald-400 border border-emerald-500/30">English: B1+</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low text-emerald-400 border border-emerald-500/30">Japanese: JLPT N4</span>
          </div>
        </div>

      </div>
    </section>
  );
}
