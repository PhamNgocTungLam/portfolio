import React, { useRef } from 'react';

export default function Experience() {
  const scrollTrackRef = useRef(null);

  const scroll = (direction) => {
    if (scrollTrackRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 scroll-mt-20 border-b border-surface-container-highest/60" id="experience">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-primary">// 03. Experience</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Software Developer @ LG CNS</span>
        </div>
      </div>

      <div className="bg-surface-container p-6 rounded-xl border border-surface-container-highest space-y-6">

        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-container-highest/60 pb-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="font-display text-lg font-bold text-on-surface">Software Developer</h3>
              <span className="px-2.5 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/40 font-mono text-[11px] font-semibold">LG CNS</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-[10px]">Active Role</span>
            </div>
            <p className="font-sans text-xs text-on-surface-variant mt-1">Enterprise Backend Systems, Scheduled Pipeline Automations & AI Integration</p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="font-mono text-xs text-on-surface-variant bg-surface-container-low px-3 py-1 rounded border border-surface-container-highest">2023 — Present · Ha Noi</span>
            
            {/* Scroll Chevron Nav Buttons */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-surface-container-highest">
              <button 
                onClick={() => scroll('left')}
                className="w-7 h-7 rounded bg-surface-container-low hover:bg-surface-container-high border border-surface-container-highest text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
                title="Scroll left"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_left</span>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-7 h-7 rounded bg-surface-container-low hover:bg-surface-container-high border border-surface-container-highest text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
                title="Scroll right"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Instruction Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-variant/80">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-[14px]">view_carousel</span>
            <span>Scroll horizontally or use arrows to view all enterprise projects</span>
          </span>
          <span className="text-primary font-mono text-[10px]">Swipe / Scroll ➔</span>
        </div>

        {/* Horizontal Scroll Track */}
        <div 
          ref={scrollTrackRef}
          className="flex gap-4 overflow-x-auto pb-3 pt-1 scroll-smooth select-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#e11d2e #1c1b1b' }}
        >
          
          {/* Project 1: Outlook Dashboard System */}
          <div id="outlook-dashboard" className="min-w-[310px] sm:min-w-[360px] max-w-[360px] flex-shrink-0 snap-start bg-surface-container-low p-5 rounded-xl border border-surface-container-highest space-y-4 flex flex-col justify-between hover:border-primary/60 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-surface-container-highest/40 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-primary text-xs font-bold">01/</span>
                  <h4 className="font-display font-bold text-sm text-on-surface">Outlook Dashboard System</h4>
                </div>
                <span className="font-mono text-[10px] text-tertiary bg-tertiary-container/20 px-2 py-0.5 rounded border border-tertiary-container/40">Excel Migration & Batch</span>
              </div>

              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Developed a centralized reporting and analytics platform that <strong className="text-on-surface">replaced legacy Excel VBA-based reporting</strong>. Supports Excel data ingestion, report versioning, KPI visualization, revenue/profit analytics, and automated email reporting.
              </p>

              <ul className="space-y-2 text-xs text-on-surface-variant font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>Designed & implemented PostgreSQL schemas + RESTful APIs for Auth & Auth (RBAC), OTP verification, and role permissions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>Built Spring Boot scheduled batch jobs for periodic report generation, replacing manual Excel uploads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>Integrated Python/Flask/LangChain/Ollama chatbot for natural-language Q&A over financial reporting data.</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-surface-container-highest/60 flex flex-col gap-2">
              <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                <span className="text-primary bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">Spring Boot 3</span>
                <span className="text-on-surface bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">PostgreSQL</span>
                <span className="text-on-surface bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">MyBatis</span>
                <span className="text-tertiary bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">Flask / LangChain</span>
              </div>
            </div>
          </div>

          {/* Project 2: SMART ORCHESTRA */}
          <div className="min-w-[310px] sm:min-w-[360px] max-w-[360px] flex-shrink-0 snap-start bg-surface-container-low p-5 rounded-xl border border-surface-container-highest space-y-4 flex flex-col justify-between hover:border-primary/60 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-surface-container-highest/40 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-primary text-xs font-bold">02/</span>
                  <h4 className="font-display font-bold text-sm text-on-surface">SMART ORCHESTRA</h4>
                </div>
                <span className="font-mono text-[10px] text-primary bg-primary-container/20 px-2 py-0.5 rounded border border-primary-container/40">Enterprise Tooling</span>
              </div>

              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Project support and management tool used across all software development stages to improve productivity, communication, and transparent business execution.
              </p>

              <ul className="space-y-2 text-xs text-on-surface-variant font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>Maintained and enhanced production-level backend system based on tickets and requirements from Korea HQ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>Implemented new features while ensuring compatibility with legacy enterprise architecture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>Managed Flyway database migrations and optimized backend workflows for system performance and scalability.</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-surface-container-highest/60">
              <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                <span className="text-primary bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">Spring Boot</span>
                <span className="text-on-surface bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">Spring Security</span>
                <span className="text-on-surface bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">Flyway</span>
                <span className="text-on-surface bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Project 3: AI Telecom Hackathon */}
          <div className="min-w-[310px] sm:min-w-[360px] max-w-[360px] flex-shrink-0 snap-start bg-surface-container-low p-5 rounded-xl border border-surface-container-highest space-y-4 flex flex-col justify-between hover:border-primary/60 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-surface-container-highest/40 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-primary text-xs font-bold">03/</span>
                  <h4 className="font-display font-bold text-sm text-on-surface">AI Telecom Hackathon</h4>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">AI / RAG Pipeline</span>
              </div>

              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                2-week AI chatbot competition training models on UBiz+ telecom service packages to assist users with pricing and package inquiries.
              </p>

              <ul className="space-y-2 text-xs text-on-surface-variant font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>Developed Python backend service to ingest, preprocess, and index telecom package data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>Built LangChain RAG pipeline with Chroma vector database for semantic retrieval.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>Implemented Server-Sent Events (SSE) for streaming continuous AI token responses in real time.</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-surface-container-highest/60">
              <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                <span className="text-primary bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">Flask API</span>
                <span className="text-on-surface bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">LangChain</span>
                <span className="text-on-surface bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">ChromaDB</span>
                <span className="text-on-surface bg-surface-container px-2 py-0.5 rounded border border-surface-container-highest">MongoDB</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
