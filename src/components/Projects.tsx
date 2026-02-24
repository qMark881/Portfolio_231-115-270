import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const cases = [
    {
      title: "Hyperion Engine",
      desc: "A high-performance calculation and deterministic data processing hub with immersive architecture.",
      tags: ["React", "Core Logic", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000",
      featured: true,
      category: "SYSTEM CORE"
    },
    {
      title: "Aether Neural Core",
      desc: "A self-optimizing recursive neural network that predicts market volatility with sub-millisecond precision.",
      tags: ["Transformers", "CUDA", "WebGPU"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
      featured: false,
      category: "AI/ML"
    },
    {
      title: "Kinetic Entropy Visualizer",
      desc: "A real-time particle simulation of 10 million nodes reacting to spatial-audio frequencies.",
      tags: ["Fluid Dynamics", "Shaders", "C++"],
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000",
      featured: false,
      category: "VISUAL PHYSICS"
    },
    {
      title: "Omega Ledger Protocol",
      desc: "A decentralized, deterministic ledger capable of 1 million TPS with near-zero latency.",
      tags: ["Rust", "Zero-Knowledge", "ZKP"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000",
      featured: true,
      category: "DISTRIBUTED LEDGER"
    },
    {
      title: "Neon Horizon VR",
      desc: "Open-world low-latency VR simulation built with custom multiplayer synchronization and spatial audio.",
      tags: ["UE5", "C++", "Networking"],
      image: "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?q=80&w=1000",
      featured: false,
      category: "VIRTUAL SYSTEMS"
    },
    {
      title: "Voxel Sandbox",
      desc: "Procedural world generation with advanced ray-marched lighting and destruction physics.",
      tags: ["Shaders", "C#", "HLSL"],
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000",
      featured: false,
      category: "GRAPHICS ENGINE"
    },
    {
      title: "Spectral Grid OS",
      desc: "A browser-based virtual operating system built for hyper-threaded scientific research.",
      tags: ["React", "Wasm", "Core Logic"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
      featured: false,
      category: "CLOUD OS"
    },
    {
      title: "Titan Cloud Orchestrator",
      desc: "An automated load-balancing engine that dynamically redistributes global compute nodes.",
      tags: ["Go", "Kubernetes", "Network"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
      featured: false,
      category: "INFRASTRUCTURE"
    },
    {
      title: "Synapse Biometric Engine",
      desc: "An AI-driven biological core that translates neural patterns into complex 3D geometry.",
      tags: ["Signal Proc", "Python", "HLSL"],
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000",
      featured: true,
      category: "BIOMETRICS"
    },
    {
      title: "Void Dynamics Engine",
      desc: "A collision-detection system for non-Euclidean environments using advanced physics.",
      tags: ["Physics", "Ray-Marchy", "Math"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
      featured: false,
      category: "COMPUTE PHYSICS"
    },
    {
      title: "Quasar Analytics Hub",
      desc: "A massive data-stream visualizer that maps multiversal accuracy thresholds.",
      tags: ["Data Proc", "SQL", "React"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000",
      featured: false,
      category: "BIG DATA"
    },
    {
      title: "Chronos Logic Gate",
      desc: "A high-frequency trading simulation engine that visualizes logic gate shifts.",
      tags: ["Framer", "API", "Logic"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
      featured: false,
      category: "FINTECH ENGINE"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-black uppercase tracking-widest text-[#007AFF]">Selected Work</h2>
            <h3 className="text-5xl font-black tracking-tight leading-none uppercase md:text-7xl">ENGINEERED <br />SOLUTIONS</h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md text-stone-500 font-medium text-lg text-right hidden md:block uppercase tracking-wider"
          >
            Turning complex requirements into high-performance digital reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {cases.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i % 2 * 0.1 }}
              className={`group relative rounded-[4rem] overflow-hidden border border-[var(--border)] bg-stone-100 dark:bg-[#050505] flex flex-col transition-all duration-500 hover:scale-[1.01] hover:border-[#007AFF]/30 ${project.featured ? 'md:col-span-2 aspect-[16/8]' : 'aspect-[4/5] md:aspect-square'}`}
            >
              <div className="absolute inset-0 bg-[#0a0a0a] animate-pulse" style={{ opacity: loadedImages[i] ? 0 : 1 }} />
              
              <img 
                src={project.image} 
                alt={project.title}
                onLoad={() => handleImageLoad(i)}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 will-change-transform ${loadedImages[i] ? 'opacity-100' : 'opacity-0'} dark:opacity-60`}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Header Info */}
              <div className="relative z-20 p-10 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#007AFF] bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  {project.category}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 font-jetbrains">
                  PRO_ID//{i + 231}
                </span>
              </div>

              {/* Footer Info */}
              <div className="mt-auto relative z-20 p-12 flex flex-col gap-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 glass-premium text-[10px] font-black uppercase tracking-widest rounded-full text-white/90 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-[#007AFF] transition-colors duration-500">
                    {project.title}
                  </h4>
                  <p className="text-white/50 font-medium max-w-xl mt-4 uppercase text-xs tracking-wider line-clamp-2 leading-relaxed font-jetbrains">
                    {project.desc}
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-full bg-[#007AFF] text-white shadow-xl shadow-blue-500/20 transition-all"
                  >
                    <ArrowUpRight size={24} />
                  </motion.button>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/qMark881" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full glass-premium text-white border border-white/10"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
