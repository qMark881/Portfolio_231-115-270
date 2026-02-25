import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PasswordGate from './components/PasswordGate';
import ProjectArchive from './components/ProjectArchive';
import Sentinel from './components/Sentinel';

function App() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // Ultra-HD 120 FPS "Butter-Flow" Implementation
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2,
      lerp: 0.1, // Elastic responsiveness
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Keyboard Smooth-Scroll Intercept
    const handleKeyScroll = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown'].includes(e.code)) {
        e.preventDefault();
        const scrollAmount = 400;
        let target = window.scrollY;
        
        if (e.code === 'ArrowDown' || e.code === 'Space') target += scrollAmount;
        if (e.code === 'ArrowUp') target -= scrollAmount;
        if (e.code === 'PageDown') target += window.innerHeight;
        if (e.code === 'PageUp') target -= window.innerHeight;

        lenis.scrollTo(target, { duration: 1 });
      }
    };

    window.addEventListener('keydown', handleKeyScroll, { passive: false });

    return () => {
      lenis.destroy();
      window.removeEventListener('keydown', handleKeyScroll);
    };
  }, []);

  // Disable scroll when archive is open
  useEffect(() => {
    if (isArchiveOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isArchiveOpen]);

  return (
    <PasswordGate>
      <div className="relative selection:bg-blue-500 selection:text-white bg-[var(--background)] transition-colors duration-500 isolation-isolate">
        <Navbar />
        <main className="w-full transform-gpu">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer onArchiveClick={() => setIsArchiveOpen(true)} />
        <Sentinel />

        <AnimatePresence>
          {isArchiveOpen && (
            <ProjectArchive onBack={() => setIsArchiveOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </PasswordGate>
  );
}

export default App;
