import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Suspense, lazy } from "react";

const Hero3D = lazy(() => import("./Hero3D"));

interface HeroSectionProps {
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

export default function HeroSection({ scrollToProjects, scrollToContact }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />
      {/* 3D Shapes on Right Side */}
      <Suspense fallback={<div className="absolute right-0 top-0 w-full md:w-1/2 h-full" />}>
        <Hero3D />
      </Suspense>
      
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
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full bg-zinc-950/40 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-zinc-500 tracking-wide">Available for work</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="text-zinc-600 text-2xl md:text-3xl font-light tracking-normal block mb-1">Hi, I'm</span>
            <span className="text-zinc-50">Sathush</span>
            <br />
            <span className="text-zinc-50">Full Stack</span>
            <br />
            <span className="gradient-text">Developer.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed"
          >
            I build fast, polished web applications for real businesses — from MERN
            stack dashboards to full client websites. Based in Sri Lanka.
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
              className="px-7 py-3 bg-zinc-50 text-zinc-950 text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors shine"
            >
              View Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-7 py-3 glass text-zinc-50 text-sm font-semibold rounded-lg hover:bg-zinc-800 transition-colors border border-zinc-700"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-1 pt-2"
          >
            <a
              href="https://github.com/Sathufit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-lg text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sathush-nayakkara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-lg text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sathush.nanayakkara04@gmail.com"
              className="p-2 glass rounded-lg text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Location + divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-4 pt-2"
          >
            <div className="h-px w-8 bg-zinc-800" />
            <span className="text-[11px] text-zinc-600 tracking-[0.2em] uppercase">
              Sri Lanka — Full Stack Dev
            </span>
          </motion.div>
        </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-6 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-zinc-700 uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            style={{ transformOrigin: "top" }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
