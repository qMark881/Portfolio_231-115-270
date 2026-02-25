import { motion } from 'framer-motion';
import { BadgeCheck, Fingerprint, Code2, Globe2 } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Student ID', value: '231-115-270', icon: Fingerprint },
    { label: 'Focus', value: 'UI Architecture', icon: Code2 },
    { label: 'Location', value: 'Bangladesh', icon: Globe2 },
    { label: 'Status', value: 'Active', icon: BadgeCheck },
  ];

  return (
    <section id="about" className="py-[var(--fluid-padding)] px-[var(--fluid-padding)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row gap-[5vw] items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            className="w-1/2 relative group cursor-pointer"
          >
            <div className="aspect-[4/5] rounded-[3vw] bg-stone-100 dark:bg-black overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-[4vw] left-[4vw] text-white space-y-[1vw]">
                <p className="text-[clamp(8px,0.6vw,12px)] font-black uppercase tracking-[0.5em] opacity-80">Development Specialist</p>
                <h3 className="text-[clamp(24px,3vw,48px)] font-black uppercase tracking-tighter leading-none">MARK PS</h3>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-[2vw] -right-[2vw] w-[8vw] h-[8vw] glass-premium rounded-[1.5vw] flex items-center justify-center -rotate-12 border shadow-2xl">
              <span className="text-[clamp(16px,2vw,32px)] font-black text-blue-500">231</span>
            </div>
          </motion.div>

          <div className="w-1/2 space-y-[4vw]">
            <div className="space-y-[2vw]">
              <h2 className="text-[clamp(10px,0.8vw,14px)] font-black uppercase tracking-widest text-blue-500">Professional Identity</h2>
              <h3 className="text-[clamp(28px,4vw,64px)] font-black tracking-tight leading-none uppercase">CORE PRINCIPLES OF <br />ENGINEERING</h3>
              <p className="text-stone-500 text-[clamp(0.9rem,1.2vw,1.25rem)] leading-relaxed font-medium">
                I specialize in high-fidelity interface design and modular logic. My approach combines the rigor of computer science with the fluidity of modern design systems. As a developer represented by <span className="text-foreground font-bold underline decoration-blue-500">ID 231-115-270</span>, I am dedicated to pushing the boundaries.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-[2vw]">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileTap={{ scale: 0.95 }}
                  className="space-y-[1vw] p-[2vw] glass-premium rounded-[1.5vw] border cursor-pointer"
                >
                  <div className="w-[3vw] h-[3vw] rounded-[1vw] bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <stat.icon size="1.5vw" />
                  </div>
                  <div>
                    <p className="text-[clamp(8px,0.5vw,10px)] font-black uppercase tracking-widest text-stone-400">{stat.label}</p>
                    <p className="text-[clamp(12px,1.2vw,20px)] font-black tracking-tight">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
