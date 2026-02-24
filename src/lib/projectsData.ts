export interface Project {
  year: string;
  title: string;
  madeAt: string;
  builtWith: string[];
  link: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    year: "2026",
    title: "Hyperion Engine",
    madeAt: "Personal Project",
    builtWith: ["React", "Core Logic", "Framer Motion"],
    link: "https://daily-calculator-inky.vercel.app/",
    category: "SYSTEM CORE"
  },
  {
    year: "2026",
    title: "Aether Neural Core",
    madeAt: "AI Research",
    builtWith: ["Transformers", "CUDA", "WebGPU"],
    link: "#",
    category: "AI/ML"
  },
  {
    year: "2025",
    title: "Kinetic Entropy Visualizer",
    madeAt: "Visual Physics",
    builtWith: ["Fluid Dynamics", "Shaders", "C++"],
    link: "#",
    category: "VISUAL PHYSICS"
  },
  {
    year: "2025",
    title: "Omega Ledger Protocol",
    madeAt: "Deterministic Systems",
    builtWith: ["Rust", "Zero-Knowledge", "ZKP"],
    link: "#",
    category: "DISTRIBUTED LEDGER"
  },
  {
    year: "2025",
    title: "Neon Horizon VR",
    madeAt: "Simulation Lab",
    builtWith: ["UE5", "C++", "Networking"],
    link: "#",
    category: "VIRTUAL SYSTEMS"
  },
  {
    year: "2024",
    title: "Voxel Sandbox",
    madeAt: "Graphics Engine",
    builtWith: ["Shaders", "C#", "HLSL"],
    link: "#",
    category: "GRAPHICS ENGINE"
  },
  {
    year: "2024",
    title: "Spectral Grid OS",
    madeAt: "Cloud Systems",
    builtWith: ["React", "Wasm", "Core Logic"],
    link: "#",
    category: "CLOUD OS"
  },
  {
    year: "2024",
    title: "Titan Cloud Orchestrator",
    madeAt: "Infrastructure",
    builtWith: ["Go", "Kubernetes", "Network"],
    link: "#",
    category: "INFRASTRUCTURE"
  },
  {
    year: "2023",
    title: "Synapse Biometric Engine",
    madeAt: "Biometrics",
    builtWith: ["Signal Proc", "Python", "HLSL"],
    link: "#",
    category: "BIOMETRICS"
  },
  {
    year: "2023",
    title: "Void Dynamics Engine",
    madeAt: "Compute Physics",
    builtWith: ["Physics", "Ray-Marchy", "Math"],
    link: "#",
    category: "COMPUTE PHYSICS"
  },
  {
    year: "2023",
    title: "Quasar Analytics Hub",
    madeAt: "Big Data",
    builtWith: ["Data Proc", "SQL", "React"],
    link: "#",
    category: "BIG DATA"
  },
  {
    year: "2023",
    title: "Chronos Logic Gate",
    madeAt: "Fintech Engine",
    builtWith: ["Framer", "API", "Logic"],
    link: "#",
    category: "FINTECH ENGINE"
  }
];
