import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      {/* Background Spline Canvas */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Only apply the blend mode in dark theme */}
        <div className="w-full h-full dark:mix-blend-difference">
          <Spline scene="https://prod.spline.design/suRCEi8rxfFbJNjq/scene.splinecode" />
        </div>
      </div>

      {/* Gradient Overlay for Text Readability — only visible in dark mode */}
      <div className="absolute top-0 left-0 w-full h-full z-[5] pointer-events-none hidden dark:block bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pointer-events-none">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-slate-200/50 dark:border-slate-700/50 pointer-events-auto"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 tracking-wide">Always Learning, Always Building</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white drop-shadow-sm pointer-events-auto"
          >
            Vaishali
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 pointer-events-auto"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed pointer-events-auto"
          >
            I create modern web applications that are fast, scalable, and designed to deliver exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 pt-4 pointer-events-auto"
          >
            <button
              onClick={() => handleScroll('work')}
              className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="px-8 py-3 rounded-full glass-panel border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
            >
              Let's Connect
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
