import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
export default function ProjectsSection() {
    const containerRef = useRef(null);
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
    return (_jsx("section", { ref: containerRef, id: "projects", className: "py-32 px-6 bg-white", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6 }, children: [_jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Selected Work" }), _jsx("div", { className: "w-12 h-1 bg-gray-900" })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: projects.map((project, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6, delay: 0.1 * index }, whileHover: { y: -4 }, className: "group bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-gray-900 transition-all duration-300", children: [_jsxs("div", { className: "relative h-64 bg-gray-100 overflow-hidden", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105", onError: (e) => {
                                                const target = e.target;
                                                target.style.display = "none";
                                            } }), _jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" })] }), _jsxs("div", { className: "p-6 space-y-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: project.title }), _jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: project.description })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.tech.map((tech, i) => (_jsx("span", { className: "px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-700", children: tech }, i))) }), _jsxs("div", { className: "flex items-center gap-4 pt-2", children: [project.url && (_jsxs("a", { href: project.url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-60 transition-opacity", children: ["View Live", _jsx(ExternalLink, { size: 16 })] })), _jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors", children: ["Code", _jsx(Github, { size: 16 })] })] })] })] }, index))) })] }) }) }));
}
