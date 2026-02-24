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
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] bg-stone-100 dark:bg-black overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white space-y-2">
                <p className="text-xs font-black uppercase tracking-[0.5em] opacity-80">Development Specialist</p>
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">MARK PS</h3>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-premium rounded-3xl flex items-center justify-center -rotate-12 border-2 shadow-2xl">
              <span className="text-4xl font-black text-blue-500">231</span>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase tracking-widest text-blue-500">Professional Identity</h2>
              <h3 className="text-5xl font-black tracking-tight leading-none uppercase">CORE PRINCIPLES OF <br />ENGINEERING</h3>
              <p className="text-stone-500 text-lg leading-relaxed font-medium">
                I specialize in high-fidelity interface design and modular logic. My approach combines the rigor of computer science with the fluidity of modern design systems. As a developer represented by <span className="text-foreground font-bold underline decoration-blue-500">ID 231-115-270</span>, I am dedicated to pushing the boundaries of what's possible in professional web and game development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-3 p-6 glass-premium rounded-2xl border">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">{stat.label}</p>
                    <p className="text-lg font-black tracking-tight">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
