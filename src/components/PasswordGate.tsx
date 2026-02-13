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
        className="w-full max-w-md glass border-white/10 p-12 rounded-[2.5rem] relative z-10"
      >
        <div className="flex flex-col items-center text-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
            <ShieldAlert size={32} />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-tight text-white uppercase">Security Protocol</h2>
            <p className="text-stone-500 text-sm font-medium">Access restricted to authorized personnel only. Verification required.</p>
          </div>

          <form onSubmit={handleGrantAccess} className="w-full space-y-4">
            <div className="relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-500">
                <Terminal size={18} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Access Code"
                className={`w-full bg-white/5 border-2 ${error ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-stone-600 outline-none focus:border-blue-500/50 transition-all`}
              />
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-blue-500/20"
            >
              Initialize Sync
              <ArrowRight size={18} />
            </button>
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
