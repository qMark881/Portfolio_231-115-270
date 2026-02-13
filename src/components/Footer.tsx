
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-black tracking-tighter">
          MARK<span className="text-blue-500">.PS</span>
        </div>
        
        <p className="text-sm font-bold text-stone-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Mark Pranto Sarkar • ID: 231-115-270
        </p>

        <div className="flex gap-8 text-xs font-black uppercase tracking-[0.2em] text-stone-400">
          <a href="#" className="hover:text-blue-500 transition-colors">Archive</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Stack</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Connect</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
