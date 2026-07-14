import { motion } from 'framer-motion';
import { GraduationCap, Database, Layout, Server, Wrench, TerminalSquare } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'text-sky-500',
    bg: 'bg-sky-100 dark:bg-sky-900/40',
    skills: ['React.js', 'TypeScript', 'JavaScript','Tailwind CSS', 'HTML', 'CSS']
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-green-500',
    bg: 'bg-green-100 dark:bg-green-900/40',
    skills: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'text-blue-600',
    bg: 'bg-blue-100 dark:bg-blue-900/40',
    skills: ['MongoDB']
    // skills: ['MongoDB', 'PostgreSql', 'Redis', 'SQL']
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'text-orange-500',
    bg: 'bg-orange-100 dark:bg-orange-900/40',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel']
  },
  {
    title: 'Languages',
    icon: TerminalSquare,
    color: 'text-purple-600',
    bg: 'bg-purple-100 dark:bg-purple-900/40',
    skills: ['JavaScript', 'TypeScript', 'C++', 'C']
  }
];

const education = [
  { degree: 'MCA', institution: 'Maharishi Markendeshwar Deemed To be University (MMU)', year: 'Jan 2026 - Present' },
  { degree: 'BCA', institution: 'Maharaja Agrasen Institute of Management and Technology (MAIMT)', year: 'July 2023 - May 2025' },
];

export function SkillsEducation() {
  return (
    <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 z-20">
      <div className="flex flex-col gap-16 md:gap-20">

        {/* Skills Bento Grid (Top Section) */}
        <div className="w-full">
          <div className="mb-10 text-left flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              // Last category takes 2 columns on small/medium screens to balance the grid
              const colSpan = idx === skillCategories.length - 1 ? 'sm:col-span-2 lg:col-span-1' : '';
              return (
                <div key={idx} style={{ perspective: 1000 }} className={colSpan}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="h-full"
                  >
                    <div className="p-6 h-full flex flex-col gap-4 group rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-white/50 dark:border-slate-700/50 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 duration-300 hover:shadow-md dark:hover:bg-slate-800/60 relative overflow-hidden">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-3 rounded-xl ${category.bg} ${category.color} shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                           <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 tracking-wide">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium border border-slate-200/60 dark:border-slate-700/60">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Bottom Section */}
        <div className="w-full">
          <div className="mb-10 text-left flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col w-full"
              >
                {/* Line 1: Icon + Degree & Timeline */}
                <div className="flex flex-row justify-between items-center w-full mb-2">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-slate-800 dark:text-slate-200" />
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">{edu.degree}</h3>
                  </div>
                  <span className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 text-right whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                
                {/* Line 2: Institution */}
                <div className="pl-9">
                  <p className="text-slate-500 dark:text-slate-400/80 font-medium text-sm md:text-base">
                    {edu.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
