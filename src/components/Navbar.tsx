import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest - lastScrollY;
    
    // Scrolled state for glass effect
    setIsScrolled(latest > 20);

    // Visibility logic: hide on scroll down, show on scroll up
    if (latest < 50) {
      setIsVisible(true);
    } else if (direction > 5) {
      setIsVisible(false);
    } else if (direction < 0) {
      setIsVisible(true);
    }

    setLastScrollY(latest);
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled && "border-b"
      )}
      style={{
        backgroundColor: isScrolled ? 'var(--header-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(var(--header-blur))' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(var(--header-blur))' : 'none',
        borderBottomColor: isScrolled ? 'var(--header-border)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl md:text-3xl font-black tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
          MARK<span className="text-[#007AFF]">.PS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold hover:text-blue-500 transition-colors uppercase tracking-widest text-[var(--nav-text)]"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-xl glass-premium hover:text-blue-500 transition-all duration-300 ease-in-out border"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-xl glass-premium border"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t mt-4 overflow-hidden rounded-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
