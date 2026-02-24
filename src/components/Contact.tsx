import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MessageSquare, Linkedin, Twitter, Github } from 'lucide-react';

const DataPortInput = ({ label, type = "text", placeholder }: { label: string, type?: string, placeholder?: string, name: string }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [particles, setParticles] = useState<{ id: number; x: number, drift: number }[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    const id = Date.now();
    setParticles(prev => [...prev, { 
      id, 
      x: Math.random() * 20 - 10,
      drift: Math.random() * 40 - 20
    }]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 600);
  };

  return (
    <div className="space-y-4 relative w-full group">
      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 ml-1 transition-colors group-focus-within:text-[#007AFF]">
        {label}
      </label>
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            rows={4}
            placeholder={placeholder}
            value={value}
            onChange={handleInput}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent border-b border-stone-300 dark:border-white/10 py-3 outline-none transition-all focus:border-[#007AFF] text-[var(--foreground)] font-jetbrains placeholder:text-stone-400 dark:placeholder:text-zinc-700 font-medium resize-none shadow-none focus:shadow-[0_4px_12px_rgba(0,122,255,0.05)]"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleInput}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent border-b border-stone-300 dark:border-white/10 py-3 outline-none transition-all focus:border-[#007AFF] text-[var(--foreground)] font-jetbrains placeholder:text-stone-400 dark:placeholder:text-zinc-700 font-medium shadow-none focus:shadow-[0_4px_12px_rgba(0,122,255,0.05)]"
          />
        )}
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#007AFF] shadow-[0_0_15px_rgba(0,122,255,1)] origin-left"
        />

        <AnimatePresence>
          {particles.map(p => (
            <motion.div
              key={p.id}
              initial={{ opacity: 1, y: 0, x: p.x }}
              animate={{ opacity: 0, y: -20, x: p.x + p.drift }}
              exit={{ opacity: 0 }}
              className="absolute right-0 top-1/2 w-1 h-1 bg-[#007AFF] rounded-full pointer-events-none shadow-[0_0_8px_rgba(0,122,255,1)]"
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Contact = () => {
  const iconBoxClass = "w-14 h-14 rounded-full bg-white/5 dark:bg-[#000000]/95 backdrop-blur-[40px] border border-[var(--border)] flex items-center justify-center transition-all active:scale-90 text-stone-600 dark:text-stone-400 hover:text-[#007AFF] dark:hover:text-[#007AFF] hover:border-[#007AFF]/40 hover:shadow-[0_0_20px_rgba(0,122,255,0.2)]";

  return (
    <section id="contact" className="py-48 px-6 bg-[var(--background)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass-premium rounded-[4rem] p-12 md:p-24 border border-[var(--border)] overflow-hidden relative bg-[var(--card-bg)] shadow-2xl">
          {/* Atmosphere */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#007AFF]/10 blur-[120px] rounded-full translate-y-[-20%] translate-x-[20%] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#007AFF]/60" />
                  <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#007AFF] font-jetbrains animate-data-flicker">ENVOY INITIALIZATION</h2>
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-[var(--foreground)]">
                  START A <br />
                  <span className="text-[#007AFF] drop-shadow-[0_0_40px_rgba(0,122,255,0.4)] block">CONVERSATION</span>
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-lg font-medium leading-relaxed max-w-sm">
                  Initializing secure channel for freelance collaboration and strategic partnerships. Establish link to build the future.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-8 group">
                  <div className="relative w-16 h-16 flex items-center justify-center transition-all duration-500">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full group-hover:bg-[#007AFF]/30 transition-all duration-500" />
                    <Mail size={28} className="relative z-10 text-stone-700 dark:text-stone-300 group-hover:text-[#007AFF] transition-all duration-500" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400 font-jetbrains">Assignment Email</h4>
                    <p className="text-lg md:text-xl xl:text-2xl font-black tracking-tight text-[var(--foreground)] font-jetbrains truncate">markprantosarkar.dev@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="relative w-16 h-16 flex items-center justify-center transition-all duration-500">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full group-hover:bg-[#007AFF]/30 transition-all duration-500" />
                    <MessageSquare size={28} className="relative z-10 text-stone-700 dark:text-stone-300 group-hover:text-[#007AFF] transition-all duration-500" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400 font-jetbrains">Formal ID</h4>
                    <p className="text-xl md:text-2xl font-black tracking-tight text-[var(--foreground)] font-jetbrains">231-115-270</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <a 
                  href="https://github.com/qMark881" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={iconBoxClass}
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mark-pranto-sarkar-7111823b3/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={iconBoxClass}
                >
                  <Linkedin size={24} />
                </a>
                <button className={iconBoxClass}>
                  <Twitter size={24} />
                </button>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-[540px] relative">
                <div className="absolute inset-0 rounded-[3.5rem] p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none" />
                
                <form className="space-y-10 p-12 md:p-14 bg-white/5 dark:bg-[#000000]/95 backdrop-blur-[40px] rounded-[3.5rem] shadow-none border border-[var(--border)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <DataPortInput label="Full Name" placeholder="Mark Pranto" name="name" />
                    <DataPortInput label="Email Address" placeholder="mark@dev.net" type="email" name="email" />
                  </div>
                  <DataPortInput label="Message" placeholder="Describe your vision..." type="textarea" name="message" />
                  
                  <button className="group w-full py-8 bg-[#007AFF] hover:bg-[#0051FF] text-white rounded-[2rem] font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(0,122,255,0.4)] hover:shadow-[0_0_50px_rgba(0,122,255,0.6)]">
                    DISPATCH REQUEST
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
