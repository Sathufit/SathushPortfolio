import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
export default function Navigation({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) {
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous !== undefined && latest > previous && latest > 150) {
            setHidden(true);
        }
        else {
            setHidden(false);
        }
    });
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current)
                setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navItems = [
        { name: "Home", action: scrollToHome, id: "home" },
        { name: "About", action: scrollToAbout, id: "about" },
        { name: "Projects", action: scrollToProjects, id: "projects" },
        { name: "Contact", action: scrollToContact, id: "contact" },
    ];
    return (_jsxs(motion.nav, { variants: {
            visible: { y: 0 },
            hidden: { y: "-100%" },
        }, animate: hidden ? "hidden" : "visible", transition: { duration: 0.3, ease: "easeInOut" }, className: "fixed top-0 left-0 right-0 z-50 glass", children: [_jsx("div", { className: "max-w-6xl mx-auto px-6", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx(motion.button, { onClick: scrollToHome, initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.4 }, className: "text-lg font-semibold text-zinc-50 tracking-tight hover:opacity-60 transition-opacity", children: "Sathush Nanayakkara" }), _jsx("div", { className: "hidden md:flex items-center gap-8", children: navItems.map((item, index) => (_jsxs(motion.button, { onClick: item.action, initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1, duration: 0.4 }, className: `text-sm font-medium transition-colors relative ${activeSection === item.id
                                    ? "text-zinc-50"
                                    : "text-zinc-400 hover:text-zinc-50"}`, children: [item.name, activeSection === item.id && (_jsx(motion.div, { layoutId: "activeSection", className: "absolute -bottom-[21px] left-0 right-0 h-[2px] bg-zinc-50", transition: { type: "spring", stiffness: 380, damping: 30 } }))] }, item.id))) }), _jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "md:hidden p-2 -mr-2 text-zinc-50", children: isMobileMenuOpen ? _jsx(X, { size: 20 }) : _jsx(Menu, { size: 20 }) })] }) }), isMobileMenuOpen && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800", children: _jsx("div", { className: "px-6 py-4 space-y-1", children: navItems.map((item) => (_jsx("button", { onClick: () => {
                            item.action();
                            setIsMobileMenuOpen(false);
                        }, className: `block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeSection === item.id
                            ? "bg-zinc-800 text-zinc-50"
                            : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50"}`, children: item.name }, item.id))) }) }))] }));
}
