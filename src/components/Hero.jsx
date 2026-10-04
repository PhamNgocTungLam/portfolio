import React, { useState, useEffect } from 'react';

const rawJavaCode = `@Component
public class DeveloperProfile {

    private final String name = "Pham Ngoc Tung Lam";
    private final String role = "Software Dev";
    private final String degree = "FPT University";

    private final String bio = """
        Backend developer with hands-on experience delivering
        enterprise production features, fixing issues, and maintaining
        reliable systems at LG CNS. Skilled in translating business
        requirements into scalable Spring Boot 3 solutions.
        """;

    private final List<String> techStack = List.of(
        "Java 21", "Spring Boot 3", "PostgreSQL", "Docker"
    );
}`;

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [codeCharIndex, setCodeCharIndex] = useState(0);
  const [codeTypingFinished, setCodeTypingFinished] = useState(false);

  // Live Typing effect for Code Window
  useEffect(() => {
    if (codeCharIndex < rawJavaCode.length) {
      const timeout = setTimeout(() => {
        setCodeCharIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      setCodeTypingFinished(true);
      const resetTimeout = setTimeout(() => {
        setCodeCharIndex(0);
        setCodeTypingFinished(false);
      }, 7000);
      return () => clearTimeout(resetTimeout);
    }
  }, [codeCharIndex]);

  const copyCode = () => {
    navigator.clipboard.writeText(rawJavaCode.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to render typed Java code lines with syntax highlighting
  const renderTypedJavaCode = () => {
    const currentText = rawJavaCode.substring(0, codeCharIndex);
    const lines = currentText.split('\n');

    return lines.map((line, lIdx) => {
      const isLastLine = lIdx === lines.length - 1;

      return (
        <div key={lIdx} className="min-h-[1.35rem] flex items-center font-mono text-[11px] leading-relaxed">
          <span className="inline-block w-6 text-on-surface-variant/30 select-none text-[10px] pr-2 text-right">
            {lIdx + 1}
          </span>
          <span className="flex-1">
            {highlightLineSyntax(line)}
            {isLastLine && !codeTypingFinished && (
              <span className="inline-block w-2 h-4 bg-primary-container ml-0.5 align-middle animate-pulse shadow-[0_0_8px_#e11d2e]"></span>
            )}
          </span>
        </div>
      );
    });
  };

  // High-precision Java Syntax Highlighter
  const highlightLineSyntax = (line) => {
    if (line.includes('@Component')) {
      return <span className="text-amber-400 font-semibold">@Component</span>;
    }

    if (line.trim().startsWith('//')) {
      return <span className="text-on-surface-variant/50 italic">{line}</span>;
    }

    if (line.includes('"""')) {
      return <span className="text-emerald-400 font-medium">{line}</span>;
    }

    // Highlighting String literals in green
    if (line.includes('"')) {
      const parts = line.split(/("[^"]*")/g);
      return parts.map((part, pIdx) => {
        if (part.startsWith('"') && part.endsWith('"')) {
          return <span key={pIdx} className="text-emerald-400">{part}</span>;
        }
        return <span key={pIdx}>{highlightKeywords(part)}</span>;
      });
    }

    return highlightKeywords(line);
  };

  const highlightKeywords = (text) => {
    let formatted = text
      .replace(/\b(public class|private final|public|List)\b/g, '___KW___$1___ENDKW___')
      .replace(/\b(String|List\.of)\b/g, '___TYPE___$1___ENDTYPE___');

    const parts = formatted.split(/(___KW___.*?___ENDKW___|___TYPE___.*?___ENDTYPE___)/g);

    return parts.map((part, pIdx) => {
      if (part.startsWith('___KW___')) {
        const kw = part.replace('___KW___', '').replace('___ENDKW___', '');
        return <span key={pIdx} className="text-rose-400 font-semibold">{kw}</span>;
      }
      if (part.startsWith('___TYPE___')) {
        const tp = part.replace('___TYPE___', '').replace('___ENDTYPE___', '');
        return <span key={pIdx} className="text-sky-400 font-medium">{tp}</span>;
      }
      return <span key={pIdx}>{part}</span>;
    });
  };

  return (
    <section className="py-10 lg:py-16 flex flex-col justify-center border-b border-surface-container-highest/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Clean Title & Quick Actions */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 self-start bg-surface-container px-3 py-1.5 rounded-md border border-surface-container-highest">
            <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#e11d2e] animate-pulse"></span>
            <span className="font-mono text-xs text-primary font-medium tracking-wide">// Java Backend Developer</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-[38px] sm:text-[50px] lg:text-[56px] leading-[1.08] tracking-tight font-extrabold text-on-surface">
              Pham Ngoc <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary to-secondary">Tung Lam</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#experience" className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-secondary-container text-on-primary-container px-5 py-2.5 rounded-lg font-sans text-xs font-semibold shadow-[0_0_16px_rgba(225,29,46,0.35)] transition-all hover:scale-105 active:scale-95">
              <span>View Experience</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>

            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-container-highest px-4 py-2.5 rounded-lg font-sans text-xs font-medium transition-all hover:border-primary/50">
              <span>Contact Me</span>
              <span className="material-symbols-outlined text-[16px]">mail</span>
            </a>

            <div className="flex items-center gap-2 pl-2 border-l border-surface-container-highest">
              <a href="https://linkedin.com/in/pham-ngoc-tung-lam-a963a6233" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high border border-surface-container-highest text-on-surface-variant hover:text-primary transition-all flex items-center justify-center hover:scale-110" title="LinkedIn">
                <span className="material-symbols-outlined text-[18px]">link</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high border border-surface-container-highest text-on-surface-variant hover:text-primary transition-all flex items-center justify-center hover:scale-110" title="GitHub">
                <span className="material-symbols-outlined text-[18px]">code</span>
              </a>
              <a href="mailto:pntlam12g03@gmail.com" className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high border border-surface-container-highest text-on-surface-variant hover:text-primary transition-all flex items-center justify-center hover:scale-110" title="Email">
                <span className="material-symbols-outlined text-[18px]">alternate_email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Ultra-Clean Live Code Editor */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-[#0d0d0d] rounded-xl border border-surface-container-highest overflow-hidden shadow-2xl group hover:border-primary/50 transition-all duration-300">
            
            {/* Window Header */}
            <div className="bg-surface-container/90 px-3.5 py-2.5 border-b border-surface-container-highest flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="ml-2 font-mono text-[11px] text-on-surface-variant font-medium">DeveloperProfile.java</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => { setCodeCharIndex(0); setCodeTypingFinished(false); }}
                  className="font-mono text-[10px] text-on-surface-variant hover:text-primary bg-surface-container-low px-2 py-0.5 rounded border border-surface-container-highest transition-colors flex items-center gap-1 cursor-pointer"
                  title="Replay Code Animation"
                >
                  <span className="material-symbols-outlined text-[12px]">replay</span>
                </button>
                <button 
                  onClick={copyCode}
                  className="font-mono text-[10px] text-primary hover:text-on-surface bg-surface-container-low px-2 py-0.5 rounded border border-surface-container-highest transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[12px]">{copied ? 'check' : 'content_copy'}</span>
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Live Typing Code Content */}
            <div className="p-4 font-mono select-text overflow-x-auto min-h-[19.5rem] flex flex-col justify-start leading-relaxed bg-[#0d0d0d]">
              {renderTypedJavaCode()}
            </div>

            {/* Status Bar */}
            <div className="bg-surface-container/80 px-3.5 py-2 border-t border-surface-container-highest flex items-center justify-between font-mono text-[11px]">
              <span className="flex items-center gap-2 text-on-surface-variant">
                <span className={`w-2 h-2 rounded-full ${codeTypingFinished ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`}></span>
                <span>{codeTypingFinished ? 'Profile Compiled Successfully' : 'Typing DeveloperProfile.java...'}</span>
              </span>
              <span className="text-primary text-[10px]">Java 21 · Spring Boot 3</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
