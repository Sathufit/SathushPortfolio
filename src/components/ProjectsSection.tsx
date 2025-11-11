import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "MovieAI",
      description: "AI-powered movie discovery platform with advanced recommendations and personalized suggestions.",
      tech: ["React", "AI/ML", "Tailwind CSS"],
      url: "https://movieai-eta.vercel.app",
      github: "https://github.com/Sathufit/MovieAI",
      image: "/placeholder/movieai.png",
    },
    {
      title: "SLSBA Project",
      description: "Full MERN stack dashboard for Sri Lanka Schools Badminton Association with real-time data management.",
      tech: ["React", "Node.js", "MongoDB"],
      url: "https://slsba.onrender.com/",
      github: "https://github.com/Sathufit/SLSBA",
      image: "/placeholder/slsba.png",
    },
    {
      title: "FIA Minerals",
      description: "Modern business website for Sri Lankan mineral exporter with product catalog and SEO optimization.",
      tech: ["React", "Vite", "Tailwind CSS"],
      url: "https://www.fiaminerals.com/",
      github: "https://github.com/Sathufit/fia-minerals",
      image: "/placeholder/minerals.png",
    },
    {
      title: "Zentra M & Co",
      description: "Professional website for Australian property services company showcasing premium services.",
      tech: ["React", "Vite", "Tailwind CSS"],
      url: "https://www.zentram.com.au/",
      github: "https://github.com/Sathufit/Zentra-M-CO",
      image: "/placeholder/zentram.png",
    },
    {
      title: "FrontyardCricket",
      description: "Full-stack cricket statistics tracking application with batting and bowling averages.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      url: "https://frontyardcricket.onrender.com/",
      github: "https://github.com/Sathufit/frontendCrickweb",
      image: "/placeholder/cric.png",
    },
    {
      title: "Finance Tracker",
      description: "Android budgeting application with visual charts and monthly expense tracking.",
      tech: ["Kotlin", "Android Studio", "MPAndroidChart"],
      github: "https://github.com/Sathufit/FinanceTracker",
      image: "/placeholder/finance.png",
    },
  ];

  return (
    <section ref={containerRef} id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">Selected Work</h2>
            <div className="w-12 h-1 bg-zinc-50" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -4 }}
                className="group glass rounded-lg overflow-hidden hover:bg-zinc-800/50 transition-all duration-300 shine"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-zinc-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-50 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-900/50 border border-zinc-700 rounded text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-50 hover:opacity-60 transition-opacity"
                      >
                        View Live
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
                    >
                      Code
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
