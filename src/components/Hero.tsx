import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useCallback } from "react";
import type { Application as SplineApp } from "@splinetool/runtime";
import { ChevronDown, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";
import { SplineScene } from "./ui/splite";
import { Spotlight } from "./ui/spotlight";
import BorderGlow from "./reactbits/BorderGlow";

export default function Hero() {
  const [splineApp, setSplineApp] = useState<SplineApp | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // 3D Tilt Effect State (simplified for the new layout)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-500, 500], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-500, 500], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Spline Controls
  const handleZoomIn = useCallback(() => {
    if (splineApp) {
      const newZoom = Math.min(zoomLevel + 0.2, 2.5);
      setZoomLevel(newZoom);
      splineApp.setZoom(newZoom);
    }
  }, [splineApp, zoomLevel]);

  const handleZoomOut = useCallback(() => {
    if (splineApp) {
      const newZoom = Math.max(zoomLevel - 0.2, 0.5);
      setZoomLevel(newZoom);
      splineApp.setZoom(newZoom);
    }
  }, [splineApp, zoomLevel]);

  const handleReset = useCallback(() => {
    if (splineApp) {
      setZoomLevel(1);
      splineApp.setZoom(1);
    }
  }, [splineApp]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-20 lg:py-0 pt-24">
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 inline-flex items-center"
            >
              <BorderGlow
                borderRadius={999}
                glowRadius={20}
                glowIntensity={0.8}
                className="inline-flex"
                backgroundColor="transparent"
              >
                <div className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm flex items-center">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-500 mr-3 animate-pulse"></span>
                  Available for new opportunities
                </div>
              </BorderGlow>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <BlurText text="Ujjwal" delay={150} />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                <BlurText text="Sharma" delay={150} />
              </span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-10 font-medium leading-tight"
            >
              <ShinyText 
                text="AI Engineer & Full-Stack Developer" 
                speed={3} 
                className="text-white"
              />
              <p className="text-gray-400 text-base md:text-lg mt-4 font-normal max-w-2xl mx-auto lg:mx-0">
                Building scalable AI systems and production-grade full-stack applications with MERN, GenAI, and RAG.
              </p>
              <p className="text-gray-500 text-sm mt-2 font-normal">Bareilly, Uttar Pradesh, India</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 px-1"
            >
              <BorderGlow borderRadius={999} glowIntensity={0.5} glowRadius={30} backgroundColor="transparent">
                <a href="#projects" className="px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10 flex items-center">
                  View My Work
                </a>
              </BorderGlow>
              <BorderGlow borderRadius={999} glowIntensity={0.3} glowRadius={30} backgroundColor="transparent">
                <a href="mailto:us5533400@gmail.com" className="px-10 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 active:scale-95 flex items-center">
                  Get In Touch
                </a>
              </BorderGlow>
            </motion.div>
          </motion.div>

          {/* Right Content - Spline Robot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex-1 w-full lg:w-auto h-[400px] md:h-[500px] lg:h-[700px] relative group"
          >
            <BorderGlow 
              borderRadius={48} 
              glowRadius={60} 
              glowIntensity={0.8} 
              className="w-full h-full"
              backgroundColor="rgba(0,0,0,0.5)"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-3xl opacity-20 pointer-events-none"></div>
              
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full cursor-grab active:cursor-grabbing"
                onLoad={(app) => setSplineApp(app)}
              />
              
              {/* Interactive Controls Overlay */}
              <div className="absolute bottom-8 right-8 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <button 
                  onClick={handleZoomIn}
                  className="p-4 rounded-full bg-white/5 hover:bg-indigo-500/40 text-white backdrop-blur-xl border border-white/10 transition-all hover:scale-110 active:scale-90"
                  title="Zoom In"
                  aria-label="Zoom in on 3D model"
                >
                  <ZoomIn className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleReset}
                  className="p-4 rounded-full bg-white/5 hover:bg-indigo-500/40 text-white backdrop-blur-xl border border-white/10 transition-all hover:scale-110 active:scale-90"
                  title="Reset View"
                  aria-label="Reset 3D model view"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleZoomOut}
                  className="p-4 rounded-full bg-white/5 hover:bg-indigo-500/40 text-white backdrop-blur-xl border border-white/10 transition-all hover:scale-110 active:scale-90"
                  title="Zoom Out"
                  aria-label="Zoom out on 3D model"
                >
                  <ZoomOut className="w-6 h-6" />
                </button>
              </div>
              
              {/* Hint Text */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 1 }}
                  className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 text-white/70 text-xs px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3"
                >
                  <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  Interact with the model • Drag to rotate
                </motion.div>
              </div>
            </BorderGlow>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hidden lg:block"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
      
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
    </section>
  );
}
