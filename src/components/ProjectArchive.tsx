import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Search, ArrowLeft } from 'lucide-react';
import { projectsData } from '../lib/projectsData';

const ProjectArchive = ({ onBack }: { onBack: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.builtWith.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#020202] text-[#FFFFFF] overflow-y-auto font-sans"
    >
      {/* Search & Header Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-row items-center justify-between gap-[4vw] mb-[8vw]">
          <div className="space-y-[1vw]">
            <button 
              onClick={onBack}
              className="group flex items-center gap-[1vw] text-stone-500 hover:text-[#007AFF] transition-colors text-[clamp(8px,0.5vw,10px)] font-black uppercase tracking-[0.3em]"
            >
              <ArrowLeft size="1vw" className="group-hover:-translate-x-1 transition-transform" />
              Return to Interface
            </button>
            <h1 className="text-[clamp(32px,5vw,72px)] font-black tracking-tighter uppercase leading-none">
              PROJECT <span className="text-[#007AFF] drop-shadow-[0_0_30px_rgba(0,122,255,0.3)]">ARCHIVE</span>
            </h1>
          </div>

          <div className="relative w-[30vw] min-w-[150px]">
            <Search className="absolute left-[1.5vw] top-1/2 -translate-y-1/2 text-stone-600" size="1.2vw" />
            <input 
              type="text" 
              placeholder="Filter by title..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[1.5vw] py-[1vw] pl-[4vw] pr-[2vw] outline-none focus:border-[#007AFF]/50 focus:bg-white/10 transition-all font-jetbrains text-[clamp(8px,0.6vw,12px)] placeholder:text-stone-600"
            />
          </div>
        </div>

        {/* Ledger Table */}
        <div className="w-full overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-stone-500 text-[10px] font-black uppercase tracking-[0.3em]">
                <th className="py-6 px-4">Year</th>
                <th className="py-6 px-4">Project Title</th>
                <th className="py-6 px-4 hidden md:table-cell">Associated Entity</th>
                <th className="py-6 px-4 hidden md:table-cell">Technical Core</th>
                <th className="py-6 px-4 text-right">Link</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.tr 
                    key={project.title}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="group border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-8 px-4 font-jetbrains text-stone-500 group-hover:text-[#007AFF] transition-colors text-sm">
                      {project.year}
                    </td>
                    <td className="py-8 px-4 font-black transition-colors group-hover:text-[#007AFF] text-lg uppercase tracking-tight">
                      {project.title}
                    </td>
                    <td className="py-8 px-4 hidden md:table-cell text-sm text-stone-400 font-medium">
                      {project.madeAt}
                    </td>
                    <td className="py-8 px-4 hidden md:table-cell">
                      <div className="flex flex-wrap gap-2">
                        {project.builtWith.map(tech => (
                          <span key={tech} className="text-[9px] font-jetbrains font-bold text-stone-600 dark:text-stone-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-8 px-4 text-right">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-[#007AFF] hover:text-[#007AFF] transition-all group/link"
                      >
                        <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <p className="font-jetbrains text-stone-600 text-sm uppercase tracking-widest">No matching records found in database.</p>
              <button onClick={() => setSearchQuery("")} className="text-[#007AFF] text-xs font-black uppercase underline underline-offset-4">Reset Query</button>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-10 left-10 opacity-10 pointer-events-none select-none">
        <p className="text-[120px] font-black italic tracking-tighter uppercase whitespace-nowrap">DETERMINISTIC LEDGER</p>
      </div>
    </motion.div>
  );
};

export default ProjectArchive;
