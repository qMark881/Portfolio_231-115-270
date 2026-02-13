import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const cases = [
    {
      title: "Hyperion Engine",
      desc: "A high-performance calculation and deterministic data processing hub with immersive architecture.",
      tags: ["React", "Core Logic", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1551288049-bb848a55a175?auto=format&fit=crop&q=80&w=1000",
      featured: true
    },
    {
      title: "Neon Horizon VR",
      desc: "Open-world low-latency VR simulation built with custom multiplayer synchronization and spatial audio.",
      tags: ["UE5", "C++", "Networking"],
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      title: "Voxel Sandbox",
      desc: "Procedural world generation with advanced ray-marched lighting and destruction physics.",
      tags: ["Shaders", "C#", "HLSL"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <div className="space-y-6">
            <h2 className="text-sm font-black uppercase tracking-widest text-blue-500">Selected Work</h2>
            <h3 className="text-5xl font-black tracking-tight leading-none uppercase md:text-6xl">ENGINEERED <br />SOLUTIONS</h3>
          </div>
          <p className="max-w-md text-stone-500 font-medium text-lg text-right hidden md:block">
            Turning complex requirements into high-performance digital reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative rounded-[3rem] overflow-hidden border bg-secondary ${project.featured ? 'md:col-span-2 aspect-[16/7]' : 'aspect-square'}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end gap-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 glass text-[10px] font-black uppercase tracking-widest rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <h4 className="text-4xl font-black uppercase tracking-tighter group-hover:text-blue-500 transition-colors uppercase">{project.title}</h4>
                  <p className="text-stone-500 font-medium max-w-lg mt-2 uppercase text-xs tracking-wider">
                    {project.desc}
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="p-3 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/20 active:scale-95 transition-transform">
                    <ArrowUpRight size={20} />
                  </button>
                  <button className="p-3 rounded-full glass active:scale-95 transition-transform">
                    <Github size={20} />
                  </button>
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
