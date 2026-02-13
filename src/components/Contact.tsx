import { Send, Mail, MessageSquare, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[4rem] p-12 md:p-24 border overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-sm font-black uppercase tracking-widest text-blue-500">Initialization</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase">START A <br />CONVERSATION</h3>
                <p className="text-stone-500 text-lg font-medium leading-relaxed">
                  I'm currently available for freelance work and full-time opportunities. Let's build something exceptional together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white border border-blue-500/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-400">Assignment Email</h4>
                    <p className="text-xl font-black tracking-tight">markprantosarkar.dev@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white border border-blue-500/10">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-400">Formal ID</h4>
                    <p className="text-xl font-black tracking-tight">231-115-270</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-blue-500 hover:border-blue-500 transition-all active:scale-90">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>

            <form className="space-y-6 p-8 bg-white dark:bg-black/20 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Full Name</label>
                  <input type="text" placeholder="Mark Pranto" className="w-full px-6 py-4 rounded-2xl bg-secondary focus:bg-accent border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Email Address</label>
                  <input type="email" placeholder="markprantosarkar.dev@gmail.com" className="w-full px-6 py-4 rounded-2xl bg-secondary focus:bg-accent border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Message</label>
                <textarea rows={5} placeholder="Describe your vision..." className="w-full px-6 py-4 rounded-2xl bg-secondary focus:bg-accent border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none"></textarea>
              </div>
              <button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                Dispatch Request
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
