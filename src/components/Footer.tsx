
const Footer = ({ onArchiveClick }: { onArchiveClick: () => void }) => {
  return (
    <footer className="py-[var(--fluid-padding)] px-[var(--fluid-padding)] border-t border-black/[0.05] dark:border-white/[0.05] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-[4vw]">
        <a href="#home" className="text-[clamp(18px,2.5vw,32px)] font-black tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
          MARK<span className="text-[#007AFF]">.PS</span>
        </a>
        
        <p className="text-[clamp(6px,0.6vw,10px)] font-bold text-stone-500 uppercase tracking-[0.3em] font-jetbrains opacity-60 text-left">
          © {new Date().getFullYear()} Mark Pranto Sarkar • SYSTEM_ID: 231-115-270
        </p>

        <div className="flex gap-[3vw] text-[clamp(6px,0.6vw,10px)] font-black uppercase tracking-[0.4em] text-stone-400">
          <a href="https://github.com/qMark881" target="_blank" rel="noopener noreferrer" className="hover:text-[#007AFF] transition-colors">GITHUB</a>
          <a href="https://www.linkedin.com/in/mark-pranto-sarkar-7111823b3/" target="_blank" rel="noopener noreferrer" className="hover:text-[#007AFF] transition-colors">LINKEDIN</a>
          <button 
            onClick={onArchiveClick}
            className="hover:text-[#007AFF] transition-all hover:tracking-[0.6em] duration-500"
          >
            ARCHIVE
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
