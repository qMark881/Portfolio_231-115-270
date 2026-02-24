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

function App() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // 120 FPS Smooth Scroll Implementation (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
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
      <div className="relative selection:bg-blue-500 selection:text-white bg-[var(--background)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer onArchiveClick={() => setIsArchiveOpen(true)} />

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
