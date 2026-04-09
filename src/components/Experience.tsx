import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import BorderGlow from "./reactbits/BorderGlow";

const experiences = [
  {
    role: "AI & Data Strategy Intern",
    company: "Treesy.dk",
    location: "Remote (Denmark-based Climate-Tech)",
    period: "February 2026 – Present",
    description: "Spearheading AI-driven business strategy and automated data workflows.",
    highlights: [
      "Building B2B lead generation systems via high-quality dataset scraping.",
      "Developing competitor intelligence datasets for Danish industrial markets.",
      "Architecting data-driven outbound infrastructure for LinkedIn and CRM.",
      "Collaborating with the CEO on GenAI business applications and strategy."
    ],
    tech: ["Python", "Data Scraping", "AI Automation", "Market Research"]
  },
  {
    role: "Full Stack Engineer",
    company: "Freelance & Academic Projects",
    location: "India",
    period: "September 2023 – Present",
    description: "Developing scalable, production-grade applications with a focus on AI integration.",
    highlights: [
      "Architected 5+ full-stack MERN applications with secure authentication.",
      "Integrated RAG systems using vector databases for semantic search.",
      "Optimized backend performance, reducing query times by up to 50%.",
      "Mentored junior developers on MERN stack and clean code practices."
    ],
    tech: ["MERN Stack", "RAG", "LLM Integration", "Oracle OCI"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black text-white relative">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-24 flex items-center gap-6">
            <span className="text-zinc-800">02.</span> Experience
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent transform -translate-x-1/2"></div>

            <div className="space-y-24">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 top-1 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] transform -translate-x-1/2 z-10"></div>

                  {/* Content Card (Role/Company) */}
                  <div className="flex-1 pl-10 md:pl-0">
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="text-indigo-400 font-bold tracking-wider mb-2">{exp.company}</div>
                      <div className="text-zinc-500 text-sm font-mono mb-6 uppercase">{exp.period}</div>
                    </div>
                  </div>

                  {/* Details Card wrapped in BorderGlow */}
                  <div className="flex-1 pl-10 md:pl-0">
                    <BorderGlow 
                      borderRadius={32} 
                      glowRadius={40} 
                      glowIntensity={0.6}
                      backgroundColor="rgba(24, 24, 27, 0.4)"
                    >
                      <div className="p-8 rounded-3xl border border-white/5 backdrop-blur-sm group transition-all">
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium bg-indigo-500/5 p-4 rounded-xl border border-indigo-500/10 italic">
                          "{exp.description}"
                        </p>
                        <ul className="space-y-4 mb-8">
                          {exp.highlights.map(item => (
                            <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                              <span className="text-indigo-500 mt-1 shrink-0">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-start'}`}>
                          {exp.tech.map(t => (
                            <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-zinc-800 text-zinc-400 px-3 py-1.5 rounded-md border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </BorderGlow>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
