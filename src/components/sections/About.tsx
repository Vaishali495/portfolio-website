import { motion } from 'framer-motion';
import { Code2, Server, Layers } from 'lucide-react';

export function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12 md:py-20 relative max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden z-20">
      <div className="mb-8 md:mb-12 relative z-20 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-center lg:text-left">
              I build elegant, high-performance web applications that combine clean design with powerful functionality. From crafting intuitive user interfaces to designing robust backend systems, I enjoy bringing ideas to life through code.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { value: "1+", label: "Years Learning & Building" },
              { value: "10+", label: "Projects Completed" },
              { value: "100+", label: "DSA Problems Solved" },
              { value: "5+", label: "Technologies Mastered" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 md:p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-white/50 dark:border-slate-700/50 shadow-sm backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 duration-300 hover:shadow-md dark:hover:bg-slate-800/60">
                <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent mb-1 md:mb-2">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
          <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-white/50 dark:border-slate-700/50 backdrop-blur-sm transition-colors duration-300">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl mb-3">
              <Layers className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5">Frontend Development</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
              Building responsive and accessible user interfaces using React, TypeScript, and modern CSS.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-white/50 dark:border-slate-700/50 backdrop-blur-sm transition-colors duration-300">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-xl mb-3">
              <Server className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5">Backend Development</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
              Designing scalable APIs, authentication systems, and database architectures with Node.js and MongoDB.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-white/50 dark:border-slate-700/50 backdrop-blur-sm transition-colors duration-300">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-xl mb-3">
              <Code2 className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5">Problem Solving</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
              Applying data structures, algorithms, and logical thinking to create efficient software solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
