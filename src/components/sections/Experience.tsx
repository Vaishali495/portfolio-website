import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Terminal } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Virtualize Technologies",
    period: "February 2025 - Present",
    description: [
      "Maintain and enhance the backend of Vista Business Tower App, a complaint management system.",
      "Manage REST APIs using Node.js, Express, and MongoDB.",
      "Collaborate on iServ, a volunteer management platform for students."
    ],
    align: "left",
    icon: Briefcase
  },
  {
    id: 2,
    role: "Software Developer Trainee",
    company: "CodeQuotient",
    period: "July 2024 - January 2025",
    description: [
      "Completed full-stack development training (MERN stack).",
      "Solved Data Structures & Algorithms problems daily."
    ],
    align: "right",
    icon: Terminal
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Staggered parallax speeds for the floating panels
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [250, -250]);

  return (
    <section ref={containerRef} className="py-32 relative max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden z-20">
      <div className="text-left mb-32 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
      </div>

      <div className="relative">
        {/* Stylized SVG Data Pipeline connecting the components */}
        <div className="absolute left-1/2 top-[-10%] bottom-[-10%] -translate-x-1/2 w-[600px] pointer-events-none hidden md:block z-0 opacity-40">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <motion.path
              d="M 50,0 C 80,25 20,75 50,100"
              fill="none"
              stroke="url(#pipeline-gradient)"
              strokeWidth="0.3"
              strokeDasharray="1 1.5"
            />
            {/* Animated data packet traveling the pipeline */}
            <motion.circle r="0.6" fill="#60a5fa">
              <animateMotion dur="8s" repeatCount="indefinite" path="M 50,0 C 80,25 20,75 50,100" />
            </motion.circle>
            <motion.circle r="0.4" fill="#a78bfa">
              <animateMotion dur="12s" repeatCount="indefinite" path="M 50,0 C 80,25 20,75 50,100" />
            </motion.circle>
            <defs>
              <linearGradient id="pipeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                <stop offset="20%" stopColor="#60a5fa" />
                <stop offset="80%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="space-y-16 md:space-y-0 relative z-10 flex flex-col items-center">
          {experiences.map((exp, index) => {
            const isLeft = exp.align === 'left';
            const Icon = exp.icon;

            return (
              <motion.div
                key={exp.id}
                style={{ y: index === 0 ? y1 : y2 }}
                className={`w-full md:w-1/2 flex gpu-accelerate ${isLeft ? 'md:self-start md:pr-16' : 'md:self-end md:pl-16 mt-0 md:-mt-32'}`}
              >
                <div className="w-full p-8 md:p-10 group rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-white/50 dark:border-slate-700/50 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 duration-300 hover:shadow-md dark:hover:bg-slate-800/60 relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white leading-tight">{exp.role}</h3>
                      <h4 className="text-lg font-semibold text-slate-600 dark:text-slate-300">{exp.company}</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6 text-sm font-medium bg-slate-100/50 dark:bg-slate-800/50 w-fit px-3 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
