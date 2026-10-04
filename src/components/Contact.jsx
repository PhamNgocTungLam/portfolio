import React, { useState } from 'react';

export default function Contact({ onOpenExcelModal }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback(true);
    setTimeout(() => {
      setFeedback(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="py-10 scroll-mt-20" id="contact">
      <div className="flex items-center gap-2 mb-6">
        <span className="font-mono text-xs text-primary">// 05. Contact</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-3">

          <a href="mailto:pntlam12g03@gmail.com" className="flex items-center gap-3.5 bg-surface-container p-3.5 rounded-xl border border-surface-container-highest hover:border-primary/60 transition-all text-xs group">
            <span className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </span>
            <div className="truncate">
              <span className="text-on-surface-variant/70 block font-mono text-[10px]">// DIRECT EMAIL</span>
              <span className="text-on-surface font-semibold truncate block text-sm group-hover:text-primary transition-colors">pntlam12g03@gmail.com</span>
            </div>
          </a>

          <a href="tel:+84913540430" className="flex items-center gap-3.5 bg-surface-container p-3.5 rounded-xl border border-surface-container-highest hover:border-primary/60 transition-all text-xs group">
            <span className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </span>
            <div className="truncate">
              <span className="text-on-surface-variant/70 block font-mono text-[10px]">// PHONE / ZALO</span>
              <span className="text-on-surface font-semibold truncate block text-sm group-hover:text-primary transition-colors">+84 913 540 430</span>
            </div>
          </a>

          <a href="https://linkedin.com/in/pham-ngoc-tung-lam-a963a6233" target="_blank" rel="noreferrer" className="flex items-center gap-3.5 bg-surface-container p-3.5 rounded-xl border border-surface-container-highest hover:border-primary/60 transition-all text-xs group">
            <span className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">link</span>
            </span>
            <div className="truncate">
              <span className="text-on-surface-variant/70 block font-mono text-[10px]">// LINKEDIN</span>
              <span className="text-on-surface font-semibold truncate block text-sm group-hover:text-primary transition-colors">linkedin.com/in/pham-ngoc-tung-lam</span>
            </div>
          </a>

          <div className="pt-1">
            <a 
              href="/Back_End_Developer_Java_PhamNgocTungLam.pdf" 
              download="Back_End_Developer_Java_PhamNgocTungLam.pdf" 
              className="flex items-center justify-center gap-2 bg-primary-container/20 hover:bg-primary-container text-primary hover:text-on-primary-container border border-primary-container/50 p-3 rounded-xl font-mono text-xs font-semibold transition-all w-full"
            >
              <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
              <span>Download CV PDF</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-surface-container p-6 rounded-xl border border-surface-container-highest space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[11px] text-on-surface-variant mb-1" htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe" 
                  required 
                  className="w-full bg-surface-container-lowest px-3.5 py-2.5 rounded-lg border border-surface-container-highest text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container text-xs font-sans transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[11px] text-on-surface-variant mb-1" htmlFor="email">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com" 
                  required 
                  className="w-full bg-surface-container-lowest px-3.5 py-2.5 rounded-lg border border-surface-container-highest text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container text-xs font-sans transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-[11px] text-on-surface-variant mb-1" htmlFor="message">Message / Project Scope</label>
              <textarea 
                id="message" 
                rows="4" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Lam, we would like to discuss a Java Spring Boot role..." 
                required 
                className="w-full bg-surface-container-lowest px-3.5 py-2.5 rounded-lg border border-surface-container-highest text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container text-xs font-sans resize-none transition-colors"
              ></textarea>
            </div>

            <div className="flex items-center justify-between gap-4 pt-1">
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-secondary-container text-on-primary-container px-5 py-2.5 rounded-lg font-mono text-xs font-semibold shadow-[0_0_14px_rgba(225,29,46,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer">
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
              <span className="font-mono text-[11px] text-on-surface-variant/70 hidden sm:inline-block">// Direct response within 24 hours</span>
            </div>

            {feedback && (
              <div className="p-3 rounded-lg bg-primary-container/20 border border-primary-container/40 text-primary font-mono text-xs text-center">
                // Message transmitted successfully. Thank you!
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
