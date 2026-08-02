import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Flour Dude",
    description:
      "Full website for Galle's most loved cafe & custom cake studio — all-day menu, custom cake orders via WhatsApp, and events. Rated 5.0 on Uber Eats with 140+ verified reviews.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    url: "https://flourdude.com/",
    image: "/placeholder/flourdude.jpg",
  },
  {
    title: "Island Mantra",
    description:
      "Full e-commerce storefront for a Sri Lankan coastal fashion label — product catalog, collections, size guide, cart drawer, checkout, and buy-now-pay-later badges, with cart state persisted in Zustand.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Zustand", "Framer Motion"],
    url: "https://island-mantra.vercel.app",
    github: "https://github.com/Sathufit/island-mantra",
    image: "/placeholder/islandmantra.jpg",
  },
  {
    title: "WorkoutPro",
    description:
      "Full-stack fitness platform in a Turborepo monorepo — a Next.js dashboard for workouts, nutrition, and health tracking backed by a NestJS API with JWT auth, MongoDB, scheduled reminders, web push, and AI-generated training plans. Zod schemas are shared across both apps.",
    tech: ["Next.js", "NestJS", "TypeScript", "MongoDB", "Turborepo", "Zod", "Claude API"],
    github: "https://github.com/Sathufit/workout-pro",
  },
  {
    title: "Magnate Analysis System",
    description:
      "B2B procurement and quotation platform for marine supply — RFQ workflow, vendor and catalog management, vessel records, live market prices, margin policies, PDF quotation generation, and an analytics dashboard.",
    tech: ["Next.js", "TypeScript", "ShadCN UI", "TanStack Table", "React PDF", "Claude API"],
    github: "https://github.com/Sathufit/magnate-analysis-system",
  },
  {
    title: "Zentra M & Co",
    description:
      "Professional website for an Australian property services company. Clean, conversion-focused design showcasing premium services for the AU market.",
    tech: ["React", "Vite", "Tailwind CSS"],
    url: "https://www.zentram.com.au/",
    github: "https://github.com/Sathufit/Zentra-M-CO",
    image: "/placeholder/zentram.jpg",
  },
  {
    title: "Zyntrix Website",
    description:
      "Full corporate website with dark/light mode, animated sections, contact form with Zod validation, and SEO-ready metadata. Built with the latest Next.js 15 and React 19.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "ShadCN UI"],
    url: "https://zyntrix-website.vercel.app/",
    github: "https://github.com/Sathufit/zyntrix-website",
    image: "/placeholder/zyntrix.jpg",
  },
  {
    title: "HanGuk Bites",
    description:
      "Full-stack website for a Korean restaurant in Melbourne — menu, gallery, and online table reservations, with an admin panel for managing bookings and reservation history. MongoDB Atlas backed.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    url: "https://zyntrix-restaurant.vercel.app/",
    github: "https://github.com/Sathufit/korean-restaurant-web",
    image: "/placeholder/hangukbites.jpg",
  },
  {
    title: "SolarSpot",
    description:
      "Solar charging station finder app. I built the full Station Management module — browse, filter, and manage EV charging stations with role-based access and real-time data.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "ShadCN UI", "Redux"],
    url: "https://solarspot.vercel.app/",
    github: "https://github.com/sithummadhuranga/solarspot-frontend",
    image: "/placeholder/solarspot.jpg",
  },
  {
    title: "MovieAI",
    description:
      "AI-powered movie and TV show discovery platform built on Next.js. Supports natural language search, personalized recommendations, and full TV show browsing.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI/ML"],
    url: "https://movieai-eta.vercel.app",
    github: "https://github.com/Sathufit/movie-ai-app",
    image: "/placeholder/movieai.jpg",
  },
  {
    title: "VoiceMe",
    description:
      "Assistive communication (AAC) mobile app for non-verbal users. Type or draw letters on-screen, get AI word predictions from Gemini, and have the phrase spoken aloud with text-to-speech. Includes saved quick phrases and customizable voice settings.",
    tech: ["React Native", "Expo", "TypeScript", "Gemini API", "Reanimated"],
    github: "https://github.com/Sathufit/ai-assistive-app",
  },
  {
    title: "Smart Healthcare",
    description:
      "Production-grade telemedicine platform built on a microservices architecture. Patients book appointments, attend video consultations, make payments, and use an AI symptom checker. I built the Doctor Service, Appointment Service, and Admin APIs.",
    tech: ["Node.js", "TypeScript", "React", "MongoDB", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes"],
    github: "https://github.com/sithummadhuranga/Smart-Healthcare",
  },
  {
    title: "AssetTracker",
    description:
      "Mobile + web app for tracking clinical and mobility assets across Residential Aged Care facilities. QR code scanning, live TV dashboard, service/calibration scheduling, and offline support.",
    tech: ["React Native", "Expo", "TypeScript", "Firebase"],
    github: "https://github.com/Sathufit/AssestsTracker",
  },
  {
    title: "Frontyard Cricket",
    description:
      "React Native mobile app for live ball-by-ball cricket scoring with real-time Firestore sync. Admins score while spectators watch live from the same app. Supports limited-overs and Test matches.",
    tech: ["React Native", "Expo", "Firebase", "JavaScript"],
    github: "https://github.com/Sathufit/frontyard-mobile",
  },
  {
    title: "Home4Paws",
    description:
      "Full-stack pet adoption and marketplace platform. Next.js frontend with AI dog breed recognition, backed by a .NET 8 Clean Architecture API, PostgreSQL, and Docker containers.",
    tech: ["Next.js 14", "TypeScript", ".NET 8", "PostgreSQL", "Docker"],
    github: "https://github.com/sithummadhuranga/home4paws-platform",
  },
  {
    title: "3D Gemstone Viewer",
    description:
      "Premium 360° gemstone platform with an interactive drag-to-rotate viewer, certification management, shareable public links, and a luxury admin dashboard for uploading and managing gemstone models.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Firebase", "Cloudinary"],
    url: "https://3-d-gemstone-viewer.vercel.app/",
    github: "https://github.com/farhan156/3DGemstoneViewer",
  },
  {
    title: "SLSBA Dashboard",
    description:
      "Full-stack MERN dashboard for the Sri Lanka Schools Badminton Association — player registration, tournament management, and real-time data.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Sathufit/SLSBA",
    image: "/placeholder/slsba.jpg",
  },
  {
    title: "FIA Minerals",
    description:
      "Business website for a Sri Lankan mineral exporter with a full product catalog, enquiry forms, and SEO optimization for international buyers.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Sathufit/fia-minerals",
    image: "/placeholder/minerals.jpg",
  },
];

function initials(title: string) {
  return title
    .split(/\s+/)
    .filter((w) => /[a-z0-9]/i.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

/** Renders the project screenshot, falling back to a generated tile when there is none. */
function ProjectThumb({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(project.image) && !failed;

  return (
    <div className="relative h-52 bg-zinc-900 overflow-hidden">
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          aria-hidden="true"
          className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800"
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <span className="relative text-4xl font-mono font-semibold tracking-tight text-zinc-700 transition-colors duration-500 group-hover:text-zinc-600">
            {initials(project.title)}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-zinc-700 font-mono tracking-[0.2em]">02 /</span>
              <div className="h-px flex-1 bg-zinc-800/60" />
              <span className="text-xs text-zinc-700 font-mono">{projects.length} projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3 tracking-tight">Selected Work</h2>
            <p className="text-zinc-600 text-sm">Real projects shipped for clients and built to solve actual problems.</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.06 * Math.min(index, 8) }}
                whileHover={{ y: -4 }}
                className="group relative glass rounded-xl overflow-hidden border border-zinc-800/40 hover:border-zinc-700/60 transition-all duration-300 flex flex-col"
              >
                {/* Top border accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />
                {/* Project number */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-xs font-mono text-zinc-700">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <ProjectThumb project={project} />

                {/* Project Info */}
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-50 mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 border border-zinc-800 rounded text-[11px] font-mono text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 pt-3 mt-auto border-t border-zinc-800/50">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — open live site`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-200 hover:text-zinc-50 transition-colors tracking-widest uppercase"
                      >
                        Live <ExternalLink size={11} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — view source on GitHub`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-300 transition-colors tracking-widest uppercase"
                      >
                        Code <Github size={11} />
                      </a>
                    )}
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
