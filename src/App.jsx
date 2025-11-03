import React from 'react';
import Hero3D from './components/Hero3D';
import AboutAndSkills from './components/AboutAndSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#hero" className="font-display text-lg font-semibold text-white">[Your Name]</a>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-emerald-500/30 hover:bg-emerald-400 md:inline-block"
          >
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <Hero3D />
        <AboutAndSkills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
