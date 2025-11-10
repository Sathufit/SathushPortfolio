import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Hero3D from "./Hero3D";

interface HeroSectionProps {
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

export default function HeroSection({ scrollToProjects, scrollToContact }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 pt-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* 3D Laptop on Right Side */}
      <Hero3D />
      
      {/* Content on Left Side */}
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-gray-700">Available for work</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]"
          >
            Full Stack Developer
            <br />
            <span className="text-gray-400">Building Digital</span>
            <br />
            <span className="text-gray-400">Experiences</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
          >
            Software engineering student at SLIIT specializing in MERN stack development.
            I craft clean, performant web applications with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg hover:border-gray-900 transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            <a
              href="https://github.com/Sathufit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sathush-nayakkara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sathushnayakkara@gmail.com"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-12 left-32"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
