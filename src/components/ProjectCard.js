import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Layers, ChevronRight, Globe } from "lucide-react";
export default function ProjectCard({ title, description, tech, link, url, featured = false, image = "/api/placeholder/400/250", isHovering = false }) {
    const [showDetails, setShowDetails] = useState(false);
    // Animation variants
    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        }
    };
    const detailsVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: "auto",
            opacity: 1,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };
    const techBadgeColors = {
        "React": "from-blue-500 to-cyan-400",
        "React Native": "from-blue-600 to-cyan-500",
        "Node.js": "from-green-500 to-emerald-400",
        "MongoDB": "from-green-600 to-emerald-500",
        "Tailwind": "from-cyan-500 to-blue-400",
        "Supabase": "from-emerald-500 to-green-400",
        "Expo": "from-gray-700 to-gray-500",
        "PostGIS": "from-blue-700 to-blue-500",
        "Kotlin": "from-purple-600 to-indigo-500",
        "Android Studio": "from-green-600 to-teal-500",
        "MPAndroidChart": "from-yellow-500 to-orange-400",
        "Vue.js": "from-emerald-500 to-green-400",
        "D3.js": "from-orange-500 to-red-400",
        "OpenWeather API": "from-blue-500 to-cyan-400"
    };
    const getTechColor = (techName) => {
        return techBadgeColors[techName] || "from-purple-500 to-cyan-500";
    };
    return (_jsxs(motion.div, { className: "flex flex-col rounded-xl border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg overflow-hidden h-full", whileHover: {
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }, children: [_jsxs("div", { className: "relative w-full h-48 overflow-hidden", children: [_jsx("img", { src: image, alt: title, className: "w-full h-full object-cover transition-transform duration-700 hover:scale-110" }), featured && (_jsx("div", { className: "absolute top-3 right-3", children: _jsx("span", { className: "bg-accent/90 text-white text-xs px-2 py-1 rounded-md font-medium", children: "Featured" }) }))] }), _jsxs("div", { className: "p-6 flex flex-col justify-between flex-grow", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("h3", { className: "text-xl font-semibold text-white", children: title }), _jsxs(motion.div, { className: "flex space-x-2", initial: "hidden", animate: isHovering ? "visible" : "hidden", variants: iconVariants, children: [_jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "p-1 rounded-full bg-white/10 hover:bg-accent/20 transition-colors", "aria-label": "View project code", children: _jsx(Github, { size: 18, className: "text-accent" }) }), url && (_jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "p-1 rounded-full bg-white/10 hover:bg-accent/20 transition-colors", "aria-label": "Visit website", children: _jsx(Globe, { size: 18, className: "text-accent" }) }))] })] }), _jsx("p", { className: "text-sm text-muted-foreground mb-4", children: description }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [tech.slice(0, 3).map((t, i) => (_jsx("span", { className: `bg-gradient-to-br ${getTechColor(t)} text-xs px-2 py-1 rounded-md text-white font-medium opacity-90 shadow-md hover:opacity-100 transition`, children: t }, i))), tech.length > 3 && (_jsxs("button", { onClick: () => setShowDetails(!showDetails), className: "text-xs text-accent hover:underline flex items-center", children: ["+", tech.length - 3, " more", _jsx(ChevronRight, { size: 14, className: `ml-1 transition-transform ${showDetails ? 'rotate-90' : ''}` })] }))] }), _jsxs(motion.div, { variants: detailsVariants, initial: "hidden", animate: showDetails ? "visible" : "hidden", className: "overflow-hidden", children: [tech.length > 3 && (_jsxs("div", { className: "mt-2 mb-4", children: [_jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center", children: [_jsx(Layers, { size: 16, className: "mr-1 text-accent" }), "Full Tech Stack"] }), _jsx("div", { className: "flex flex-wrap gap-2", children: tech.slice(3).map((t, i) => (_jsx("span", { className: `bg-gradient-to-br ${getTechColor(t)} text-xs px-2 py-1 rounded-md text-white font-medium opacity-90 shadow-md hover:opacity-100 transition`, children: t }, i))) })] })), _jsxs("div", { className: "mt-2 mb-2", children: [_jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center", children: [_jsx(Code, { size: 16, className: "mr-1 text-accent" }), "Project Features"] }), _jsxs("ul", { className: "text-xs text-muted-foreground list-disc list-inside space-y-1", children: [_jsx("li", { children: "Responsive design across all devices" }), _jsx("li", { children: "Intuitive user interface with smooth animations" }), _jsx("li", { children: "Efficient data management and storage" })] })] })] })] }), _jsx("div", { className: "mt-4 pt-4 border-t border-white/10", children: url ? (_jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [_jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "group flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-accent/90 text-white px-3 py-2 rounded-md transition-colors duration-300", children: [_jsx(Github, { size: 16 }), "Code", _jsx(ExternalLink, { size: 14, className: "group-hover:translate-x-1 transition-transform" })] }), _jsxs("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "group flex-1 flex items-center justify-center gap-2 bg-accent/90 hover:bg-accent text-white px-3 py-2 rounded-md transition-colors duration-300", children: [_jsx(Globe, { size: 16 }), "Website", _jsx(ExternalLink, { size: 14, className: "group-hover:translate-x-1 transition-transform" })] })] })) : (_jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "group w-full flex items-center justify-center gap-2 bg-accent/90 hover:bg-accent text-white px-4 py-2 rounded-md transition-colors duration-300", children: ["View Project", _jsx(ExternalLink, { size: 16, className: "group-hover:translate-x-1 transition-transform" })] })) })] })] }));
}
