import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#007AFF] text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md"
          >
            <Sparkles size={14} className="animate-pulse" />
            PROTOCOL_CORE//INITIALIZED
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.82] uppercase"
          >
            ARCHITECTING <br />
            <span className="text-[#007AFF] drop-shadow-[0_0_30px_rgba(0,122,255,0.4)]">INFINITE</span> <br />
            REALITIES.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-stone-500 dark:text-stone-400 text-lg md:text-2xl font-medium tracking-tight"
          >
            I am <span className="text-[var(--foreground)] font-black">MARK PS</span>. Deploying high-fidelity digital ecosystems through advanced web logic and spatial design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 mt-8"
          >
            <a href="#projects" className="group px-10 py-5 bg-[#007AFF] hover:bg-[#0051FF] text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(0,122,255,0.25)] transition-all hover:scale-[1.05] active:scale-95">
              EXPLORE ARCHIVE
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-10 py-5 glass-premium border border-white/10 dark:border-white/5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 transition-all hover:bg-white/10 dark:hover:bg-white/5 active:scale-95">
              <Terminal size={18} />
              ESTABLISH LINK
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
