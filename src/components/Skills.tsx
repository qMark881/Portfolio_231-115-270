import { motion } from 'framer-motion';
import { 
  Palette, 
  Terminal, 
  Layers, 
  Cpu, 
  Zap, 
  Database, 
  ShieldCheck, 
  LayoutTemplate 
} from 'lucide-react';

const Skills = () => {
  const stack = [
    { title: 'Gaming Engine', tools: 'Unreal Engine 5, C++, Blueprints', icon: LayoutTemplate },
    { title: 'Shader Dev', tools: 'HLSL, GLSL, Compute Shaders', icon: Cpu },
    { title: 'Motion Physics', tools: 'Framer Motion, Physics.js, GSAP', icon: Zap },
    { title: 'Multiplayer Sync', tools: 'WebSockets, Photon, Mirror', icon: Database },
    { title: 'Pro UI/UX', tools: 'Tailwind 4, Glassmorphism', icon: Palette },
    { title: 'System Security', tools: 'Vaulting, Auth Gates', icon: ShieldCheck },
    { title: 'DevOps Flow', tools: 'GitHub Actions, Vercel', icon: Terminal },
    { title: 'Scene Layout', tools: 'World Partitioning, Nanite', icon: Layers },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-accent/50 rounded-[4rem] mx-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <h2 className="text-sm font-black uppercase tracking-widest text-blue-500">Infrastructure</h2>
          <h3 className="text-5xl font-black tracking-tight leading-none uppercase md:text-6xl">TECHNICAL STACK</h3>
          <p className="max-w-xl text-stone-500 font-medium text-lg">
            A comprehensive overview of my capabilities in full-stack frontend engineering and system design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] glass border card-hover"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6 border border-blue-500/10">
                <skill.icon size={24} />
              </div>
              <h4 className="text-xl font-black tracking-tight mb-2 uppercase">{skill.title}</h4>
              <p className="text-sm text-stone-500 font-bold leading-relaxed">
                {skill.tools}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
