/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
