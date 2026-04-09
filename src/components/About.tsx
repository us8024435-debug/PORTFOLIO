import React, { Suspense } from "react";
import { motion } from "framer-motion";
import SplitText from "./reactbits/SplitText";
const ShaderAnimation = React.lazy(() => 
  import('./ui/shader-animation').then(module => ({ default: module.ShaderAnimation }))
);
import { Code2, Monitor, Database, Cpu, Brain, Terminal } from "lucide-react";
import BorderGlow from "./reactbits/BorderGlow";

const skillGroups = [
  { 
    domain: "Frontend", 
    icon: <Monitor className="w-5 h-5 text-indigo-400" />,
    items: ["React", "UI/UX", "TailwindCSS", "Next.js"] 
  },
  { 
    domain: "Backend", 
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    items: ["Node.js", "Express", "RESTful APIs", "SQL"] 
  },
  { 
    domain: "AI/ML", 
    icon: <Brain className="w-5 h-5 text-indigo-400" />,
    items: ["RAG Systems", "Prompt Eng", "LLM Integration"] 
  },
  { 
    domain: "DevOps", 
    icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    items: ["Docker", "CI/CD", "Oracle Cloud", "Git"] 
  },
  { 
    domain: "Languages", 
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    items: ["Python", "JavaScript", "TypeScript", "SQL"] 
  },
  { 
    domain: "Tools", 
    icon: <Terminal className="w-5 h-5 text-indigo-400" />,
    items: ["VS Code", "Postman", "Linux", "MongoDB"] 
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-black -z-10" />}>
        <ShaderAnimation />
      </Suspense>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 flex items-center gap-6">
            <span className="text-zinc-800">01.</span> 
            <SplitText 
              text="About Me" 
              delay={50} 
              className="text-4xl md:text-6xl font-bold tracking-tight"
            />
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
            
            {/* 60% Narrative Column */}
            <div className="lg:col-span-6 space-y-10 group">
              <BorderGlow 
                borderRadius={40} 
                glowRadius={50} 
                glowIntensity={0.6}
                backgroundColor="rgba(24, 24, 27, 0.4)"
              >
                <div className="p-10 rounded-[2.5rem] backdrop-blur-xl border border-white/5 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                    <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                    Crafting Intelligent Digital Experiences
                  </h3>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                    I'm an <span className="text-white font-medium">AI Engineer and Full-Stack Developer</span> dedicated to building highly-scalable, production-ready applications. My expertise lies at the intersection of robust web infrastructure and cutting-edge GenAI implementations.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="space-y-4">
                      <h4 className="text-indigo-400 font-bold uppercase text-xs tracking-[0.2em]">Strategy</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Specializing in RAG pipelines and LLM orchestration to turn raw data into actionable intelligence.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-indigo-400 font-bold uppercase text-xs tracking-[0.2em]">Full Stack</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Developing end-to-end MERN applications with a focus on high-performance APIs and intuitive UI/UX.
                      </p>
                    </div>
                  </div>
                </div>
              </BorderGlow>

              <BorderGlow 
                borderRadius={40} 
                glowRadius={40} 
                glowIntensity={0.4}
                backgroundColor="rgba(99, 102, 241, 0.05)"
              >
                <div className="p-10 rounded-[2.5rem] border border-indigo-500/10 backdrop-blur-md">
                  <h4 className="text-white font-bold mb-6">Quantifiable Results</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-400 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-500 mt-0.5">▹</span>
                      <span>Built DocuMind: 95%+ RAG accuracy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-500 mt-0.5">▹</span>
                      <span>Architected 5+ Production MERN Apps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-500 mt-0.5">▹</span>
                      <span>50% Database Response Optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-500 mt-0.5">▹</span>
                      <span>Zero-Downtime API Deployments</span>
                    </li>
                  </ul>
                </div>
              </BorderGlow>
            </div>

            {/* 40% Bento Skills Grid */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {skillGroups.map((group, idx) => (
                <motion.div
                  key={group.domain}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <BorderGlow 
                    borderRadius={24} 
                    glowRadius={30} 
                    glowIntensity={0.5}
                    backgroundColor="rgba(24, 24, 27, 0.4)"
                  >
                    <div className="p-6 rounded-3xl border border-white/5 transition-all group/card h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2.5 rounded-xl bg-indigo-500/10 group-hover/card:bg-indigo-500/20 transition-colors">
                          {group.icon}
                        </div>
                        <h4 className="font-bold text-white tracking-wide">{group.domain}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map(skill => (
                          <span key={skill} className="text-xs font-semibold bg-white/5 text-gray-400 px-3 py-1.5 rounded-lg border border-white/5 group-hover/card:bg-indigo-500/5 group-hover/card:text-indigo-200 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
