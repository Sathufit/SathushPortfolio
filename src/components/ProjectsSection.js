import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ExternalLink, Github, Globe } from "lucide-react";
const ProjectCard = ({ title, description, tech, url, link, image, isHovering }) => {
    return (_jsxs("div", { className: "modern-card overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group", style: {
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
        }, children: [_jsxs("div", { className: "relative overflow-hidden h-48", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" }), _jsx("img", { src: image, alt: title, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 z-10" })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: title }), _jsx("p", { className: "text-gray-300 mb-4 text-sm", children: description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: tech.map((item, i) => (_jsx("span", { className: "glass-button text-xs px-2 py-1 rounded-md font-medium text-white", children: item }, i))) }), _jsxs("div", { className: "flex flex-wrap gap-3 mt-auto", children: [_jsx(Button, { asChild: true, className: "bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1 px-3 rounded-lg transition-all duration-300 text-xs flex items-center gap-1", children: _jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: [_jsx(Github, { size: 14 }), _jsx("span", { children: "Code" })] }) }), url && (_jsx(Button, { asChild: true, className: "glass-button text-white font-medium py-1 px-3 rounded-lg transition-all duration-300 text-xs flex items-center gap-1", children: _jsxs("a", { href: url, target: "_blank", rel: "noopener noreferrer", children: [_jsx(Globe, { size: 14 }), _jsx("span", { children: "Visit" })] }) }))] })] })] }));
};
const projects = [
    {
        title: "SLSBA Project(Sri Lanka Schools Badminton Association)",
        description: "A full MERN stack dashboard for Sri Lanka Schools Badminton Association.",
        tech: ["React", "Node.js", "MongoDB"],
        url: "https://slsba.onrender.com/",
        link: "https://github.com/Sathufit/SLSBA",
        featured: true,
        image: "/placeholder/slsba.png",
    },
    {
        title: "Finance Tracker (Kotlin)",
        description: "Android app to track income, expenses, and monthly budgets.",
        tech: ["Kotlin", "Android Studio", "MPAndroidChart"],
        link: "https://github.com/Sathufit/FinanceTracker",
        featured: true,
        image: "/placeholder/finance.png",
    },
    {
        title: "FrontyardCricket",
        description: "A full-stack MERN application to add, update, and delete cricket stats like runs and wickets, while calculating batting and bowling averages to track player performance over time.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        url: "https://frontyardcricket.onrender.com/",
        link: "https://github.com/Sathufit/frontendCrickweb",
        featured: true,
        image: "/placeholder/cric.png"
    },
    {
        title: "FIA Minerals",
        description: "A modern and responsive React website for FIA Minerals Pvt Ltd — a Sri Lankan quartz export company. Showcases products, applications, and contact information with clean visuals and SEO-friendly design.",
        tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
        url: "https://www.fiaminerals.com/",
        link: "https://github.com/Sathufit/fia-minerals",
        featured: true,
        image: "/placeholder/minerals.png",
    }
];
const ProjectsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const featuredProjects = projects.filter(project => project.featured);
    // Check if viewport is mobile size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);
    const nextProject = () => {
        setActiveIndex((prevIndex) => prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1);
    };
    const prevProject = () => {
        setActiveIndex((prevIndex) => prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1);
    };
    // Mouse parallax effect for our featured project
    const useMouseParallax = () => {
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
        useEffect(() => {
            const handleMouseMove = (e) => {
                setMousePosition({
                    x: e.clientX / window.innerWidth - 0.5,
                    y: e.clientY / window.innerHeight - 0.5,
                });
            };
            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, []);
        return mousePosition;
    };
    const { x, y } = useMouseParallax();
    return (_jsxs("section", { id: "projects", className: "relative min-h-screen py-24 px-6 overflow-hidden gradient-bg", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 opacity-30 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-pink-500/10" }), _jsx("div", { className: "absolute inset-0", style: {
                            backgroundImage: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
                        } })] }), _jsxs("div", { className: "text-center relative z-10 mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight text-white", children: ["My", " ", _jsx("span", { className: "gradient-text", children: "Projects" })] }), _jsx("p", { className: "text-gray-300 text-lg max-w-2xl mx-auto mt-4", children: "Here are a few apps and systems I've crafted \u2014 full of energy, code, and lots of coffee \u2615." })] }), featuredProjects.length > 0 && (_jsxs("div", { className: "mt-16 mb-20 max-w-6xl mx-auto relative z-10", children: [_jsx("h3", { className: "text-2xl font-semibold mb-8 text-center text-white", children: "Featured Work" }), _jsxs("div", { className: "relative", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Button, { onClick: prevProject, className: "glass-button p-2 rounded-full transition-colors duration-300", "aria-label": "Previous project", children: _jsx(ChevronLeft, { size: 20, className: "text-white" }) }), _jsx("div", { className: "relative w-full max-w-4xl mx-8", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-center modern-card rounded-xl p-6", style: {
                                                transform: `perspective(1000px) rotateX(${y * 3}deg) rotateY(${-x * 3}deg)`
                                            }, children: [_jsx("div", { className: "w-full md:w-1/2 overflow-hidden rounded-lg", children: _jsxs("div", { className: "relative h-64 overflow-hidden rounded-lg", children: [_jsx("img", { src: featuredProjects[activeIndex].image, alt: featuredProjects[activeIndex].title, className: "w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105" }), _jsx("div", { className: "absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/20 to-teal-400/20" })] }) }), _jsxs("div", { className: "w-full md:w-1/2", children: [_jsx("h4", { className: "text-2xl font-bold mb-3 text-white", children: featuredProjects[activeIndex].title }), _jsx("p", { className: "text-cyan-100/80 mb-4", children: featuredProjects[activeIndex].description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: featuredProjects[activeIndex].tech.map((tech, i) => (_jsx("span", { className: "bg-gradient-to-r from-cyan-600/40 to-teal-500/40 text-xs px-2 py-1 rounded-md text-cyan-100 font-medium border border-cyan-400/20", children: tech }, i))) }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Button, { asChild: true, className: "bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-aqua transform hover:-translate-y-1", children: _jsxs("a", { href: featuredProjects[activeIndex].link, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2", children: [_jsx(Github, { size: 16 }), "View Code", _jsx(ExternalLink, { size: 14 })] }) }), featuredProjects[activeIndex].url && (_jsx(Button, { asChild: true, variant: "outline", className: "border border-cyan-400/30 bg-blue-900/30 text-cyan-100 hover:bg-blue-800/40 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-deep transform hover:-translate-y-1", children: _jsxs("a", { href: featuredProjects[activeIndex].url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2", children: [_jsx(Globe, { size: 16 }), "Visit Website", _jsx(ExternalLink, { size: 14 })] }) }))] })] })] }, activeIndex) }), _jsx(Button, { onClick: nextProject, className: "glass-button p-2 rounded-full transition-colors duration-300", "aria-label": "Next project", children: _jsx(ChevronRight, { size: 20, className: "text-white" }) })] }), _jsx("div", { className: "flex justify-center mt-6 gap-2", children: featuredProjects.map((_, index) => (_jsx("button", { onClick: () => setActiveIndex(index), className: `h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-gradient-to-r from-indigo-400 to-purple-400 w-6" : "bg-white/30 w-2"}`, "aria-label": `Go to project ${index + 1}` }, index))) })] })] })), _jsx("h3", { className: "text-2xl font-semibold mb-8 text-center text-white", children: "All Projects" }), _jsx("div", { className: "grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10", children: projects.map((project, index) => (_jsx("div", { onMouseEnter: () => setIsHovering(index), onMouseLeave: () => setIsHovering(null), children: _jsx(ProjectCard, { ...project, isHovering: isHovering === index }) }, index))) })] }));
};
export default ProjectsSection;
