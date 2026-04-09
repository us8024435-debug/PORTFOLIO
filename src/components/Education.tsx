import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import BorderGlow from "./reactbits/BorderGlow";

const educationEntries = [
  {
    role: "BCA SPECIALIZATION IN (ARTIFICIAL INTELLIGENCE)",
    institution: "Invertis University",
    period: "Sep 2023 – May 2026",
    status: "Active"
  },
  {
    role: "XII, SCIENCE",
    institution: "Saraswati Vidhya Mandir",
    period: "Apr 2022 – May 2023",
    status: "Completed"
  },
  {
    role: "X",
    institution: "Saraswati Vidhya Mandir",
    period: "Apr 2020 – May 2021",
    status: "Completed"
  }
];

const certifications = [
  { name: "Gemini Certified University Student", issuer: "Google" },
  { name: "Oracle OCI 2025 AI Foundations Associate", issuer: "Oracle" },
  { name: "Introduction to Data Science", issuer: "Cognitive Class" },
  { name: "McKinsey.org Forward Program", issuer: "McKinsey & Company" },
  { name: "Data Warehouse BW/4HANA", issuer: "SAP" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-950 text-white relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-24 flex items-center gap-6">
            <span className="text-zinc-800">04.</span> Education & Skills
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Education Timeline */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-indigo-500/10 rounded-2xl">
                  <GraduationCap className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-3xl font-bold">Academic Path</h3>
              </div>
              
              <div className="relative border-l border-indigo-500/20 ml-4 pl-10 space-y-12">
                {educationEntries.map((edu, idx) => (
                  <motion.div 
                    key={edu.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Node */}
                    <div className="absolute -left-[49px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-indigo-500 z-10 group-hover:bg-indigo-500 transition-colors"></div>
                    
                    <BorderGlow 
                      borderRadius={24} 
                      glowRadius={30} 
                      glowIntensity={0.5}
                      backgroundColor="rgba(24, 24, 27, 0.4)"
                    >
                      <div className="p-8 rounded-3xl border border-white/5 transition-all w-full">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                          <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{edu.role}</h4>
                          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest mt-2 md:mt-0">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 font-medium italic">
                          <BookOpen className="w-4 h-4" />
                          {edu.institution}
                        </div>
                      </div>
                    </BorderGlow>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-indigo-500/10 rounded-2xl">
                  <Award className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-3xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div 
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <BorderGlow 
                      borderRadius={16} 
                      glowRadius={20} 
                      glowIntensity={0.4}
                      backgroundColor="rgba(24, 24, 27, 0.4)"
                    >
                      <div className="flex items-center justify-between p-6 rounded-2xl border border-white/5 transition-all w-full">
                        <div className="flex items-center gap-5">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                          <div>
                            <h4 className="text-gray-200 font-bold group-hover:text-white transition-colors leading-tight">{cert.name}</h4>
                            <p className="text-zinc-600 text-sm mt-1 font-medium">{cert.issuer}</p>
                          </div>
                        </div>
                      </div>
                    </BorderGlow>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
