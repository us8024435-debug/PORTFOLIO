import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-5 backdrop-blur-md bg-black/40 border-b border-white/10"
    >
      <div className="section-container flex items-center justify-between w-full">
        <div className="text-2xl font-bold tracking-tighter text-white z-50">
          US<span className="text-indigo-500">.</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-base font-medium text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#experience" className="text-base font-medium text-gray-300 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-base font-medium text-gray-300 hover:text-white transition-colors">Projects</a>
          
          <div className="flex items-center gap-6 ml-4 pl-6 border-l border-white/10">
            <a href="https://github.com/us8024435-debug" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Profile">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/ujjwal-sharma-776832293" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn Profile">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:us5533400@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email Me">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden z-40"
            >
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white transition-colors text-center w-full">About</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white transition-colors text-center w-full">Experience</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white transition-colors text-center w-full">Projects</a>
              <div className="flex justify-center gap-8 pt-4 border-t border-white/10 w-full mt-2">
                <a href="https://github.com/us8024435-debug" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Profile">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/ujjwal-sharma-776832293" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:us5533400@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email Me">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
