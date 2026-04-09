import { motion } from "framer-motion";
import { Github, ExternalLink, Globe } from "lucide-react";
import BorderGlow from "./reactbits/BorderGlow";

const projects = [
  {
    title: "DocuMind",
    description: "A Retrieval-Augmented Generation (RAG) assistant that generates 95%+ accurate responses by leveraging semantic search and vector databases. Built with modular prompt engineering.",
    tech: ["Python", "GenAI", "RAG", "Vector DB"],
    github: "https://github.com/us8024435-debug",
    demo: "#",
    isComingSoon: true
  },
  {
    title: "Full-Stack MERN Apps",
    description: "Built 5+ production-ready web applications with responsive UI/UX, RESTful APIs, and secure authentication. Deployed via CI/CD pipelines on Oracle OCI.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/us8024435-debug",
    demo: "#",
    isComingSoon: false
  },
  {
    title: "Smart Lead Generator",
    description: "Automated B2B lead generation system using Python scraping and data structuring for climate-tech startups. Integrated with CRM workflows.",
    tech: ["Python", "Automation", "Scraping", "Data strategy"],
    github: "https://github.com/us8024435-debug",
    demo: "#",
    isComingSoon: true
  },
  {
    title: "3D Portfolio V2",
    description: "An immersive, widescreen-first 3D portfolio featuring Spline, Framer Motion, and Tailwind 4 for showcase and interaction.",
    tech: ["React", "Spline", "Tailwind 4", "Framer Motion"],
    github: "https://github.com/us8024435-debug",
    demo: "https://ujjwalsharma.me",
    isComingSoon: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-24 flex items-center gap-6">
            <span className="text-zinc-800">03.</span> Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group h-full"
              >
                <BorderGlow 
                  borderRadius={40} 
                  glowRadius={40} 
                  glowIntensity={0.6}
                  backgroundColor="rgba(24, 24, 27, 0.4)"
                  className="h-full"
                >
                  <div className="flex flex-col h-full rounded-[2.5rem] border border-white/5 transition-all overflow-hidden w-full">
                    {/* Upper Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-indigo-500/10 rounded-2xl">
                          <Globe className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div className="flex gap-4">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label={`GitHub link for ${project.title}`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <div className="relative group/tooltip">
                            <a 
                              href={project.demo} 
                              target={project.demo === "#" ? undefined : "_blank"}
                              rel="noreferrer" 
                              className={`transition-colors ${project.demo === "#" ? 'text-zinc-600 cursor-not-allowed' : 'text-zinc-400 hover:text-white'}`}
                              aria-label={`View live demo of ${project.title}`}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                            {(project.isComingSoon || project.demo === "#") && (
                              <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-indigo-600 text-[10px] font-bold text-white rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest">
                                {project.isComingSoon ? "Coming Soon" : "In Progress"}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                        {project.description}
                      </p>
                    </div>

                    {/* Lower Meta */}
                    <div className="px-8 pb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-zinc-800/80 text-zinc-500 px-3 py-1.5 rounded-lg border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
