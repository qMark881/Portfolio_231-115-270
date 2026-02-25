import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Terminal, ArrowRight } from 'lucide-react';

const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio_auth') === 'true';
    }
    return false;
  });
  const [error, setError] = useState(false);

  const handleGrantAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'UNDERSTANDINGMYASSIGNMENT') {
      setIsAuthorized(true);
      localStorage.setItem('portfolio_auth', 'true');
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  if (isAuthorized) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[100] bg-[#09090b] flex items-center justify-center p-6 font-['Inter']">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[35vw] min-w-[300px] glass border-white/10 p-[4vw] rounded-[2.5vw] relative z-10 transform-gpu"
      >
        <div className="flex flex-col items-center text-center gap-[2vw]">
          <div className="w-[5vw] h-[5vw] min-w-[48px] min-h-[48px] rounded-[1vw] bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
            <ShieldAlert size="2.5vw" />
          </div>
          
          <div className="space-y-[1vw]">
            <h2 className="text-[clamp(18px,1.5vw,32px)] font-black tracking-tight text-white uppercase">Security Protocol</h2>
            <p className="text-stone-500 text-[clamp(10px,0.8vw,14px)] font-medium">Access restricted to authorized personnel only. Verification required.</p>
          </div>

          <form onSubmit={handleGrantAccess} className="w-full space-y-[1.5vw]">
            <div className="relative group">
              <div className="absolute left-[1.5vw] top-1/2 -translate-y-1/2 text-stone-500">
                <Terminal size="1.2vw" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Access Code"
                className={`w-full bg-white/5 border-[2px] ${error ? 'border-red-500/50' : 'border-white/10'} rounded-[1.5vw] py-[1.2vw] pl-[4vw] pr-[1.5vw] text-white placeholder:text-stone-600 outline-none focus:border-blue-500/50 transition-all font-jetbrains text-[clamp(10px,0.8vw,14px)]`}
              />
            </div>
            
            <motion.button 
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="w-full py-[1.2vw] bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5vw] font-black uppercase tracking-widest text-[clamp(8px,0.6vw,12px)] flex items-center justify-center gap-[1vw] transition-all shadow-xl shadow-blue-500/20"
            >
              Initialize Sync
              <ArrowRight size="1.2vw" />
            </motion.button>
          </form>

          {error && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-[10px] font-black uppercase tracking-widest"
            >
              Invalid Access Credentials
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordGate;
