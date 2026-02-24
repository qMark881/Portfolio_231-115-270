import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState, useMemo } from 'react';
import { 
  Palette, 
  Terminal, 
  Layers, 
  Cpu, 
  Zap, 
  Database, 
  ShieldCheck, 
  LayoutTemplate,
  Orbit,
  Atom,
  type LucideIcon 
} from 'lucide-react';

interface Skill {
  title: string;
  tools: string;
  icon: LucideIcon;
}

class SystemParticle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  angle: number;

  constructor(w: number, h: number) {
    this.baseX = Math.random() * w;
    this.baseY = Math.random() * h;
    this.z = Math.random() * 100 - 50;
    this.x = this.baseX;
    this.y = this.baseY;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.vz = (Math.random() - 0.5) * 0.15;
    this.size = Math.random() * 3 + 1.5;
    this.color = Math.random() > 0.5 ? '#007AFF' : '#a855f7';
    this.angle = Math.random() * Math.PI * 2;
  }

  update(w: number, h: number, mouse: { x: number, y: number, active: boolean }) {
    this.baseX += this.vx;
    this.baseY += this.vy;
    this.z += this.vz;

    if (this.baseX < 0 || this.baseX > w) this.vx *= -1;
    if (this.baseY < 0 || this.baseY > h) this.vy *= -1;
    if (this.z < -50 || this.z > 50) this.vz *= -1;

    if (mouse.active) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 250) {
        const force = Math.pow((250 - dist) / 250, 2);
        const angle = Math.atan2(dy, dx);
        const movePower = force * 40;
        this.x -= Math.cos(angle) * movePower;
        this.y -= Math.sin(angle) * movePower;
      }
    }
    
    this.x += (this.baseX - this.x) * 0.05;
    this.y += (this.baseY - this.y) * 0.05;
  }

  draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
    const scale = (this.z + 100) / 100;
    const finalSize = this.size * scale;
    
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle + (this.z * 0.01));
    
    ctx.beginPath();
    ctx.moveTo(-finalSize, 0);
    ctx.lineTo(finalSize, 0);
    ctx.moveTo(0, -finalSize);
    ctx.lineTo(0, finalSize);
    
    ctx.strokeStyle = isDark ? this.color : '#007AFF';
    ctx.globalAlpha = (isDark ? 0.35 : 0.15) * scale;
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.restore();
    ctx.globalAlpha = 1;
  }
}

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: SystemParticle[] = [];
    const particleCount = 40; 

    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      particles = Array.from({ length: particleCount }, () => new SystemParticle(canvas.width, canvas.height));
    };

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(canvas.width, canvas.height, mouse.current);
        p.draw(ctx, isDark);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 16900) { // 130px
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark ? `rgba(0, 122, 255, ${0.1 * (1 - dist / 130)})` : `rgba(0, 122, 255, ${0.04 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        onMouseMove={(e) => {
          const rect = containerRef.current?.getBoundingClientRect();
          if (rect) {
            mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
          }
        }}
        onMouseOver={() => (mouse.current.active = true)}
        onMouseLeave={() => (mouse.current.active = false)}
        className="block w-full h-full"
      />
    </div>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
  const [syncRate, setSyncRate] = useState(99.8);

  const barData = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      height: 30 + ((i * 17) % 65),
      duration: 1.5 + ((i * 3) % 15) / 10
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncRate(prev => {
        const delta = (Math.random() - 0.5) * 0.1;
        return parseFloat(Math.max(98.2, Math.min(99.9, prev + delta)).toFixed(1));
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        rotateX: -3,
        translateZ: 20 
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.08, 
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: true }}
      style={{ 
        transformStyle: 'preserve-3d',
        backgroundColor: 'var(--card-bg)',
        color: 'var(--card-text)'
      }}
      className="group relative p-8 rounded-[2rem] transition-all duration-200 shadow-xl dark:shadow-none border border-transparent dark:border-white/[0.05]"
    >
      <div className="relative z-10 flex flex-col items-start gap-8">
        {/* Aura Glow Icon Housing */}
        <div className="relative w-full">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="relative w-16 h-16 flex items-center justify-center transition-all duration-500"
          >
            <div className="absolute inset-0 bg-blue-500/20 dark:bg-[#007AFF]/10 blur-xl rounded-full group-hover:bg-[#007AFF]/30 transition-all duration-500" />
            <skill.icon size={32} className="relative z-10 text-[var(--card-text)] group-hover:text-[#007AFF] group-hover:drop-shadow-[0_0_15px_rgba(0,122,255,1)] transition-all duration-500" />
          </motion.div>
        </div>

        <div className="space-y-3 w-full">
          <h4 className="text-xl font-black tracking-tight uppercase group-hover:text-[#007AFF] transition-colors duration-500 text-[var(--card-text)]">
            {skill.title}
          </h4>
          <p className="text-[10px] font-mono text-stone-500 dark:text-stone-400 font-bold tracking-[0.15em] uppercase leading-relaxed max-w-[200px]">
            {skill.tools}
          </p>
        </div>

        <div className="mt-auto w-full">
          <div className="flex justify-between items-center mb-4 px-1 font-mono animate-data-flicker">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#007AFF] shadow-[0_0_10px_rgba(0,122,255,1)]" />
              <span className="text-[8px] text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest font-jetbrains">PROTOCOL 2026.SYS</span>
            </div>
            <span className="text-[10px] text-[#007AFF] font-black font-jetbrains">{syncRate}%</span>
          </div>
          
          <div className="flex gap-1 h-5 items-end mb-4 px-1">
            {barData.map((data, i) => (
              <motion.div 
                key={i}
                animate={{ height: [`${data.height * 0.4}%`, `${data.height}%`, `${data.height * 0.6}%`] }}
                transition={{ repeat: Infinity, duration: data.duration, delay: i * 0.05 }}
                className="flex-1 bg-[#007AFF]/10 group-hover:bg-[#007AFF]/50 rounded-t-[1px] transition-all duration-500"
              />
            ))}
          </div>
          
          <div className="w-full h-[1px] bg-stone-200 dark:bg-white/5 overflow-hidden relative">
            <motion.div 
              className="h-full bg-[#007AFF] shadow-[0_0_15px_rgba(0,122,255,0.8)]"
              animate={{ width: `${syncRate}%` }}
              transition={{ duration: 1.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25, restDelta: 0.001 });

  const textScale = useTransform(smoothProgress, [0, 0.5, 1], [0.6, 1.1, 0.6]);
  const textOpacity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.2, 0.5, 0.2, 0]);
  const textBlur = useTransform(smoothProgress, [0, 0.5, 1], ["blur(15px)", "blur(0px)", "blur(15px)"]);

  const stack: Skill[] = useMemo(() => [
    { title: 'Kinetic Simulation Core', tools: 'Unreal Engine 5, C++, Blueprints', icon: LayoutTemplate },
    { title: 'Photonic Rendering Node', tools: 'HLSL, GLSL, Compute Shaders', icon: Cpu },
    { title: 'Vector Dynamics Engine', tools: 'Framer Motion, Physics.js, GSAP', icon: Zap },
    { title: 'Neural Net Synchronization', tools: 'WebSockets, Photon, Mirror', icon: Database },
    { title: 'Sovereign Interface Unit', tools: 'Tailwind 4, Glassmorphism', icon: Palette },
    { title: 'Encryption Gatekeeper', tools: 'Vaulting, Auth Gates', icon: ShieldCheck },
    { title: 'Deployment Automaton', tools: 'GitHub Actions, Vercel', icon: Terminal },
    { title: 'Spatial Architecture Node', tools: 'World Partitioning, Nanite', icon: Layers },
    { title: 'Quantum Compute Lattice', tools: 'Q#, Cirq, Parallel Optimization', icon: Atom },
    { title: 'Bio-Digital Synthesis', tools: 'WebGPU, GANs, Neural Radiance', icon: Orbit },
  ], []);

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="relative py-80 px-6 overflow-hidden bg-[var(--background)]"
    >
      <NeuralBackground />
      
      {/* Global Scanline Overlay */}
      <div className="tech-scanline-overlay" />
      
      {/* Atmosphere Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] dark:bg-[#007AFF]/10 bg-blue-500/5 blur-[220px] rounded-full" />
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] dark:bg-purple-600/10 bg-purple-500/5 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col items-center text-center gap-12 mb-64">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10"
          >
            <div className="flex items-center gap-8">
              <div className="w-20 h-[1px] bg-[#007AFF]/40" />
              <span className="text-[12px] font-black uppercase tracking-[1em] text-[#007AFF] bg-[#007AFF]/5 px-6 py-2 rounded-full border border-[#007AFF]/20">
                Neural Infrastructure
              </span>
              <div className="w-20 h-[1px] bg-[#007AFF]/40" />
            </div>
            
            <h3 className="text-8xl font-black tracking-tighter leading-none uppercase md:text-[11rem] text-[var(--foreground)] relative select-none">
              NEURAL <span className="text-[#007AFF] drop-shadow-[0_0_40px_rgba(0,122,255,0.4)]">LINK</span>
            </h3>
            
            <p className="max-w-4xl text-stone-500 dark:text-zinc-500 font-mono text-[11px] uppercase tracking-[0.6em] mt-4 leading-relaxed opacity-60 font-jetbrains">
              Initializing Type II Civilization Core // Status: Operational // 2026.02.24
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 gap-y-16 relative z-30">
          {stack.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
      
      {/* GLOWING INTELLIGENCE TEXT - CENTERED BEHIND CARDS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
        <motion.div
          style={{ 
            scale: textScale, 
            opacity: textOpacity,
            filter: textBlur
          }}
          className="text-[120px] md:text-[230px] font-black italic tracking-tighter uppercase whitespace-nowrap"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 dark:from-white dark:via-blue-300 dark:to-white drop-shadow-[0_0_80px_rgba(59,130,246,0.4)] dark:drop-shadow-[0_0_150px_rgba(59,130,246,1)]">
            INTELLIGENCE
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-10 opacity-5 pointer-events-none">
        <div className="text-[100px] font-black italic tracking-tighter select-none uppercase white-space-nowrap font-jetbrains">Mainframe v.115</div>
      </div>
    </section>
  );
};

export default Skills;
