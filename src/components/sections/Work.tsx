import { motion, type Variants } from 'framer-motion';
import { ExternalLink, Server, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Vista Business Tower Backend",
    subtitle: "Complaint Management System",
    description:
      "Built the backend of a complaint management system using Express.js and MongoDB, handling ticket creation, assignment, and status updates. Designed REST APIs to connect tenants, administrators, and technicians on a single platform, making communication and issue tracking much smoother. Structured the database schema to efficiently manage complaint history, user roles, and permissions. Added validation and error handling to keep the system reliable and prevent incorrect or duplicate ticket entries.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    liveUrl: "https://tower-backend-2.onrender.com/api-docs/", // Placeholder — update when live
    icon: Server,
    accent: "from-blue-500 to-indigo-600",
    accentBg: "bg-blue-50 dark:bg-blue-900/30",
    accentText: "text-blue-600 dark:text-blue-400",
    borderAccent: "border-t-blue-500/70",
  },
  {
    id: 2,
    title: "Iserv Admin",
    subtitle: "Event Volunteer Management System",
    description: "Developed a full-stack admin portal using React.js, TypeScript, Node.js, Express.js, and MongoDB to manage NPOs, students, teachers, events, and user access. Built and integrated RESTful APIs with MongoDB to support volunteer management, enabling NPOs to create events and students to register as volunteers.",
    tags: ["React.js","TypeScript","Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveUrl: "https://iserv-admin.onrender.com", // Placeholder — update when live
    icon: Server,
    accent: "from-blue-500 to-indigo-600",
    accentBg: "bg-blue-50 dark:bg-blue-900/30",
    accentText: "text-blue-600 dark:text-blue-400",
    borderAccent: "border-t-blue-500/70",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Work() {
  return (
    <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 z-20">
      {/* Section Header */}
      <div className="text-left mb-14 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Featured Work
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-8"
      >
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div key={project.id} variants={cardVariants}>
              <div
                className={`p-0 overflow-hidden border border-white/50 dark:border-slate-700/50 border-t-4 ${project.borderAccent} rounded-2xl bg-white/50 dark:bg-slate-900/50 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 duration-300 hover:shadow-md dark:hover:bg-slate-800/60`}
              >
                <div className="p-7 md:p-9">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${project.accentBg} ${project.accentText} shadow-inner shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Live Link */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Live Site (URL coming soon)"
                      className="shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full
                        bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400
                        border border-slate-200/80 dark:border-slate-700/60
                        hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400
                        hover:border-blue-300/60 dark:hover:border-blue-700/50
                        transition-all duration-200 group"
                    >
                      <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      Live Site
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[0.95rem] mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-semibold
                          bg-slate-100/80 dark:bg-slate-800/70
                          text-slate-600 dark:text-slate-300
                          border border-slate-200/60 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* "More Projects Coming" Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl
          bg-slate-100/60 dark:bg-slate-800/40
          border border-slate-200/60 dark:border-slate-700/40
          text-slate-500 dark:text-slate-400 text-sm font-medium"
      >
        <Sparkles className="w-4 h-4 text-indigo-400 dark:text-indigo-400 shrink-0" />
        <span>
          I am actively working on additional development projects, which will be published here upon completion.
        </span>
      </motion.div>
    </section>
  );
}
