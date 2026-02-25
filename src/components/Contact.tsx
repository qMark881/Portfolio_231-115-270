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
  return (
    <section id="contact" className="py-[var(--fluid-padding)] px-[var(--fluid-padding)] bg-[var(--background)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass-premium rounded-[4vw] p-[5vw] border border-[var(--border)] overflow-hidden relative bg-[var(--card-bg)] shadow-2xl">
          {/* Atmosphere */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#007AFF]/10 blur-[min(120px,10vw)] rounded-full translate-y-[-20%] translate-x-[20%] pointer-events-none" />
          
          <div className="flex flex-row gap-[5vw] relative z-10 items-center">
            {/* Left Content */}
            <div className="w-1/2 space-y-[4vw]">
              <div className="space-y-[2vw]">
                <div className="flex items-center gap-[2vw]">
                  <div className="w-[8vw] h-[1px] bg-[#007AFF]/60" />
                  <h2 className="text-[clamp(10px,0.7vw,14px)] font-black uppercase tracking-[0.5em] text-[#007AFF] font-jetbrains animate-data-flicker">ENVOY INITIALIZATION</h2>
                </div>
                <h3 className="text-[clamp(28px,4vw,64px)] font-black tracking-tighter leading-[0.9] uppercase text-[var(--foreground)]">
                  START A <br />
                  <span className="text-[#007AFF] drop-shadow-[0_0_40px_rgba(0,122,255,0.4)] block">CONVERSATION</span>
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-[clamp(1rem,1.2vw,1.3rem)] font-medium leading-relaxed max-w-[30vw]">
                  Initializing secure channel for freelance collaboration and strategic partnerships. Establish link to build the future.
                </p>
              </div>

              <div className="space-y-[3vw]">
                <div className="flex items-center gap-[3vw] group">
                  <div className="relative w-[5vw] h-[5vw] min-w-[40px] min-h-[40px] flex items-center justify-center transition-all duration-500">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full group-hover:bg-[#007AFF]/30 transition-all duration-500" />
                    <Mail size="2vw" className="relative z-10 text-stone-700 dark:text-stone-300 group-hover:text-[#007AFF] transition-all duration-500" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-[clamp(8px,0.5vw,10px)] font-black uppercase tracking-[0.3em] text-stone-400 font-jetbrains">Assignment Email</h4>
                    <p className="text-[clamp(14px,1.5vw,24px)] font-black tracking-tight text-[var(--foreground)] font-jetbrains truncate">markprantosarkar.dev@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-[3vw] group">
                  <div className="relative w-[5vw] h-[5vw] min-w-[40px] min-h-[40px] flex items-center justify-center transition-all duration-500">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full group-hover:bg-[#007AFF]/30 transition-all duration-500" />
                    <MessageSquare size="2vw" className="relative z-10 text-stone-700 dark:text-stone-300 group-hover:text-[#007AFF] transition-all duration-500" />
                  </div>
                  <div>
                    <h4 className="text-[clamp(8px,0.5vw,10px)] font-black uppercase tracking-[0.3em] text-stone-400 font-jetbrains">Formal ID</h4>
                    <p className="text-[clamp(14px,1.5vw,24px)] font-black tracking-tight text-[var(--foreground)] font-jetbrains">231-115-270</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-[2vw]">
                {[{ Icon: Github, href: "https://github.com/qMark881" }, { Icon: Linkedin, href: "https://www.linkedin.com/in/mark-pranto-sarkar-7111823b3/" }, { Icon: Twitter, href: "#" }].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileTap={{ scale: 0.9 }}
                    className="w-[4vw] h-[4vw] min-w-[48px] min-h-[48px] rounded-full bg-white/5 dark:bg-[#000000]/95 backdrop-blur-[40px] border border-[var(--border)] flex items-center justify-center text-stone-600 dark:text-stone-400 hover:text-[#007AFF] hover:border-[#007AFF]/40 transition-all"
                  >
                    <social.Icon size="1.5vw" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="w-1/2 flex justify-end">
              <div className="w-full max-w-[40vw] relative transform-gpu">
                <div className="absolute inset-0 rounded-[3.5vw] p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none" />
                
                <form className="space-y-[4vw] p-[4vw] bg-white/5 dark:bg-[#000000]/95 backdrop-blur-[40px] rounded-[3.5vw] shadow-none border border-[var(--border)]">
                  <div className="flex flex-row gap-[2vw]">
                    <DataPortInput label="Full Name" placeholder="Mark Pranto" name="name" />
                    <DataPortInput label="Email Address" placeholder="mark@dev.net" type="email" name="email" />
                  </div>
                  <DataPortInput label="Message" placeholder="Describe your vision..." type="textarea" name="message" />
                  
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="group w-full py-[2vw] bg-[#007AFF] hover:bg-[#0051FF] text-white rounded-[2vw] font-black uppercase tracking-[0.4em] text-[clamp(8px,0.7vw,14px)] flex items-center justify-center gap-[1vw] shadow-[0_0_30px_rgba(0,122,255,0.4)] transition-all"
                  >
                    DISPATCH REQUEST
                    <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size="1.2vw" />
                  </motion.button>
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
