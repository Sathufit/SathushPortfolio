import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skills = [
    "React", "TypeScript", "Node.js", "MongoDB", "Express", "Tailwind CSS",
    "React Native", "Next.js", "PostgreSQL", "Firebase", "Git", "Figma"
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
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">About Me</h2>
            <div className="w-12 h-1 bg-zinc-50" />
          </div>

          {/* Bio */}
          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              I'm a software engineering student at SLIIT with a passion for building
              elegant solutions to complex problems. My journey in tech started with
              curiosity and has evolved into a deep commitment to crafting exceptional
              digital experiences.
            </p>
            <p>
              With expertise in full-stack development, I've built 8+ production-ready
              applications using modern technologies. I focus on writing clean,
              maintainable code and creating intuitive user interfaces that people love
              to use.
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
                whileHover={{ y: -4, borderColor: "#52525b" }}
                className="glass p-6 rounded-lg transition-all duration-300 shine"
              >
                <h3 className="font-semibold text-zinc-50 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-50 mb-6">Skills & Technologies</h3>
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
