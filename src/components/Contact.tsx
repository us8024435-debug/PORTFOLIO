import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import StarBorder from "./reactbits/StarBorder";
import BorderGlow from "./reactbits/BorderGlow";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-950 text-white relative flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="section-container relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <BorderGlow
            borderRadius={40}
            glowRadius={60}
            glowIntensity={0.8}
            backgroundColor="rgba(6, 0, 16, 0.5)"
            className="w-full"
            colors={['#c084fc', '#f472b6', '#38bdf8']}
          >
            <div className="bg-zinc-900/50 p-12 rounded-[2.5rem] backdrop-blur-xl w-full border border-white/5 shadow-2xl">
              <p className="text-indigo-500 font-bold uppercase tracking-[0.3em] font-mono mb-6 text-sm">05. What's Next?</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Let's Build Something<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Great Together</span>
              </h2>
              
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Currently looking for opportunities in <span className="text-white font-medium">Generative AI, Full-Stack Development,</span> and <span className="text-white font-medium">AI Engineering.</span><br/>
                If you're hiring for performance-driven roles—let's chat!
              </p>
              
              <div className="mb-16 flex justify-center">
                <StarBorder as="a" href="mailto:us5533400@gmail.com" color="#6366f1" speed="4s" className="scale-110">
                  <span className="flex items-center gap-3 font-bold px-4 py-1">
                    <Mail className="w-5 h-5 text-indigo-400" />
                    Get in Touch
                  </span>
                </StarBorder>
              </div>
              
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-gray-400">
                <a href="tel:7351057134" className="flex items-center gap-3 hover:text-white transition-all group" aria-label="Call me at 7351057134">
                  <Phone className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">+91 7351057134</span>
                </a>
                <a href="mailto:us5533400@gmail.com" className="flex items-center gap-3 hover:text-white transition-all group" aria-label="Email me at us5533400@gmail.com">
                  <Mail className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">us5533400@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/ujjwal-sharma-776832293" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-all group" aria-label="Visit my LinkedIn">
                  <Linkedin className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a href="https://github.com/us8024435-debug" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-all group" aria-label="Visit my GitHub">
                  <Github className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
      
      <div className="mt-20 text-zinc-700 text-xs font-mono uppercase tracking-[0.4em] z-10">
        Ujjwal Sharma © 2026 • AI Engineer
      </div>
      
      {/* Subtle BG Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
