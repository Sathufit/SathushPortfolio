import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skills = [
    "React", "TypeScript", "Node.js", "MongoDB", "Express", "Tailwind CSS",
    "React Native", "Next.js", "PostgreSQL", "Firebase", "Git", "Figma"
  ];

  const stats = [
    { value: "8+", label: "Projects Shipped" },
    { value: "3+", label: "Client Websites" },
    { value: "3 yrs", label: "of Coding" },
  ];

  const experience = [
    {
      title: "Full Stack Development",
      description: "Building scalable web applications with MERN stack",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
    },
    {
      title: "Mobile Development",
      description: "Cross-platform apps with React Native",
    },
  ];

  return (
    <section ref={containerRef} id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-zinc-700 font-mono tracking-[0.2em]">01 /</span>
              <div className="h-px flex-1 bg-zinc-800/60" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3 tracking-tight">About Me</h2>
            <p className="text-zinc-600 text-sm">Full stack developer · Sri Lanka · SLIIT</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 border border-zinc-800/60 rounded-xl overflow-hidden">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`p-6 text-center ${index < stats.length - 1 ? "border-r border-zinc-800/60" : ""}`}
              >
                <p className="text-4xl font-bold text-zinc-50 mb-2 tracking-tight">{stat.value}</p>
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Bio */}
          <div className="space-y-4 text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-6">
            <p>
              I'm a full stack developer based in Sri Lanka with a strong focus on
              building real, production-ready products. I've shipped 8+ applications
              — from AI-powered platforms to client business websites and mobile apps.
            </p>
            <p>
              I write clean, maintainable code and care deeply about the end user
              experience. Currently studying Software Engineering at SLIIT while
              taking on freelance projects for clients across Sri Lanka and Australia.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -4 }}
                className="glass p-6 rounded-lg transition-all duration-300 shine"
              >
                <h3 className="font-semibold text-zinc-50 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Stack</h3>
              <div className="h-px flex-1 bg-zinc-800/60" />
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 glass rounded-lg text-sm font-medium text-zinc-300 hover:bg-zinc-800 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
