import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
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
        "fixed top-0 w-full z-50 px-[var(--fluid-padding)] py-[1vw] transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled && "border-b"
      )}
      style={{
        backgroundColor: isScrolled ? 'var(--header-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(var(--header-blur))' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(var(--header-blur))' : 'none',
        borderBottomColor: isScrolled ? 'var(--header-border)' : 'transparent',
        transform: 'translateZ(0)',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-[clamp(18px,2.5vw,32px)] font-black tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
          MARK<span className="text-[#007AFF]">.PS</span>
        </a>

        {/* Universal Fluid Nav (Identical on all devices) */}
        <div className="flex items-center gap-[4vw]">
          <div className="flex items-center gap-[2.5vw]">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[clamp(8px,0.8vw,14px)] font-black hover:text-blue-500 transition-colors uppercase tracking-[0.2em] text-[var(--nav-text)]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDark(!isDark)}
            className="p-[1vw] min-p-[10px] rounded-[1vw] glass-premium hover:text-blue-500 transition-all border border-white/10"
          >
            {isDark ? <Sun size="1.5vw" /> : <Moon size="1.5vw" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
