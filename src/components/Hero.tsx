import { motion } from 'framer-motion';
import { ArrowRight, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-[var(--fluid-padding)] px-[var(--fluid-padding)] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-500/10 blur-[max(120px,10vw)] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-500/10 blur-[max(120px,10vw)] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center gap-[1.5vw] mt-[2vw]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-[0.8vw] px-[1.5vw] py-[0.5vw] rounded-full bg-blue-500/10 border border-blue-500/20 text-[#007AFF] text-[clamp(8px,0.6vw,12px)] font-black uppercase tracking-[0.3em] backdrop-blur-md"
          >
            <Cpu size="1vw" className="text-blue-500 animate-pulse" />
            FRONTEND DEVELOPER PORTFOLIO
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,9vw,10rem)] font-black tracking-tighter leading-[0.85] uppercase"
          >
            DESIGNING <br />
            <span className="text-[#007AFF] animate-kinetic-glow inline-block">FUTURE</span> <br />
            SYSTEMS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[60vw] mx-auto text-stone-500 dark:text-stone-400 text-[clamp(0.9rem,1.2vw,1.25rem)] font-medium tracking-tight"
          >
            I am <span className="text-[var(--foreground)] font-black">Mark Pranto Sarkar</span>, an engineer focused on high-performance web architectures and immersive user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row items-center justify-center gap-[4vw] mt-[1.5vw]"
          >
            <motion.a 
              href="#projects" 
              whileTap={{ scale: 0.95 }}
              className="group px-[3.5vw] py-[1.2vw] bg-[#007AFF] hover:bg-[#0051FF] text-white rounded-[1.2vw] font-black uppercase tracking-[0.2em] text-[clamp(10px,0.8vw,14px)] flex items-center justify-center gap-[1.5vw] shadow-[0_20px_60px_rgba(0,122,255,0.3)] transition-all"
            >
              EXPLORE PROJECTS
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="flex items-center gap-[1vw] text-[clamp(10px,0.8vw,14px)] font-black uppercase tracking-[0.3em] hover:text-[#007AFF] transition-colors group"
            >
              <span className="text-stone-500 group-hover:text-blue-500 transition-colors">&gt;_</span>
              ESTABLISH LINK
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
