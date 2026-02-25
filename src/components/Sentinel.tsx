import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap, Cpu, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Sentinel = () => {
  const [pulse, setPulse] = useState(false);
  const [activeLogic, setActiveLogic] = useState('IDLE');
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p);
      const logics = ['PARSING', 'SYNCING', 'ENCRYPTING', 'OPTIMIZING', 'IDLE'];
      setActiveLogic(logics[Math.floor(Math.random() * logics.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-[2vw] right-[2vw] z-[999] pointer-events-none"
    >
      <div className="relative pointer-events-auto group">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-[1.5vw] group-hover:bg-blue-500/20 transition-all duration-700" />
        
        {/* Main Terminal Box */}
        <motion.div 
          layout
          animate={{ 
            width: isMinimized ? '12vw' : '18vw',
          }}
          className="relative glass-premium border border-white/10 dark:border-[#007AFF]/20 p-[1vw] rounded-[1.5vw] backdrop-blur-3xl shadow-2xl flex flex-col gap-[1vw] min-w-[150px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-[0.8vw]">
            <div className="flex items-center gap-[0.5vw]">
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#007AFF] animate-pulse shadow-[0_0_10px_rgba(0,122,255,1)]" />
              <span className="text-[clamp(8px,0.5vw,10px)] font-black text-[#007AFF] font-jetbrains uppercase tracking-widest">Sentinel.v115</span>
            </div>
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-[0.4vw] hover:bg-white/5 rounded-md transition-colors text-stone-500 hover:text-white"
            >
              {isMinimized ? <ChevronUp size="1vw" /> : <ChevronDown size="1vw" />}
            </button>
          </div>

          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden space-y-[1vw]"
              >
                {/* Terminal Display */}
                <div className="space-y-[0.8vw]">
                  <div className="flex items-start gap-[1vw]">
                    <Terminal size="1.2vw" className="text-blue-400 mt-[0.2vw]" />
                    <div className="flex flex-col">
                      <span className="text-[clamp(6px,0.4vw,8px)] text-stone-500 uppercase font-black">Core Status</span>
                      <span className="text-[clamp(10px,0.7vw,14px)] text-white font-jetbrains font-black">{activeLogic}...</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-[1vw]">
                    <Cpu size="1.2vw" className="text-purple-400 mt-[0.2vw]" />
                    <div className="flex flex-col">
                      <span className="text-[clamp(6px,0.4vw,8px)] text-stone-500 uppercase font-black">Neural Load</span>
                      <div className="flex gap-[0.2vw] mt-[0.2vw]">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <motion.div 
                            key={i}
                            animate={{ 
                              opacity: i <= 3 || pulse ? 1 : 0.2,
                              backgroundColor: i <= 3 ? '#007AFF' : '#ffffff20'
                            }}
                            className="w-[1.2vw] h-[0.3vw] rounded-full shadow-[0_0_10px_rgba(0,122,255,0.5)]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="mt-[0.5vw] flex items-center justify-between bg-white/[0.03] p-[0.6vw] rounded-[1vw] border border-white/5">
                  <div className="flex items-center gap-[0.5vw]">
                    <Zap size="0.8vw" className="text-[#007AFF]" />
                    <span className="text-[clamp(6px,0.4vw,8px)] text-[#007AFF] font-black uppercase font-jetbrains">2.4ms Latency</span>
                  </div>
                  <span className="text-[clamp(6px,0.4vw,8px)] text-stone-500 font-black uppercase">Secure//TLS</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating Data Drift Text */}
        <AnimatePresence>
          {!isMinimized && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                y: [-10, -50], 
                opacity: [0, 1, 0],
                x: [0, 10]
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[2vw] right-0 text-[clamp(6px,0.4vw,8px)] font-jetbrains text-blue-500/40 whitespace-nowrap pointer-events-none"
            >
              {`>> SYNC_STATE::VALIDATED`}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Sentinel;
