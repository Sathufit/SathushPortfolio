import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
function App() {
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    // 👉 Scroll handlers
    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", "/projects");
        }
    };
    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", "/contact");
        }
    };
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/home");
    };
    // 🌀 Track scroll position to update path
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const projectsTop = projectsRef.current?.offsetTop || 0;
            const contactTop = contactRef.current?.offsetTop || 0;
            if (scrollY >= contactTop - 200) {
                window.history.replaceState(null, "", "/contact");
            }
            else if (scrollY >= projectsTop - 200) {
                window.history.replaceState(null, "", "/projects");
            }
            else {
                window.history.replaceState(null, "", "/home");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsxs("main", { className: "bg-background text-text scroll-smooth", children: [_jsx(HeroSection, { scrollToProjects: scrollToProjects, scrollToContact: scrollToContact, scrollToHome: scrollToHome }), _jsx(AboutSection, {}), _jsx("div", { ref: projectsRef, children: _jsx(ProjectsSection, {}) }), _jsx("div", { ref: contactRef, children: _jsx(ContactSection, {}) })] }));
}
export default App;
