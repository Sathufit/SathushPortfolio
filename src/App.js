import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { useNavigate } from "react-router-dom";
function App() {
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    // ✅ React Router navigation
    const navigate = useNavigate();
    // 👉 Scroll handlers
    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
            navigate("/projects");
        }
    };
    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
            navigate("/contact");
        }
    };
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/home");
    };
    // 🌀 Track scroll position to update path
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const projectsTop = projectsRef.current?.offsetTop || 0;
            const contactTop = contactRef.current?.offsetTop || 0;
            if (scrollY >= contactTop - 200) {
                navigate("/contact", { replace: true });
            }
            else if (scrollY >= projectsTop - 200) {
                navigate("/projects", { replace: true });
            }
            else {
                navigate("/home", { replace: true });
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navigate]);
    return (_jsxs("main", { className: "bg-background text-text scroll-smooth", children: [_jsx(HeroSection, { scrollToProjects: scrollToProjects, scrollToContact: scrollToContact, scrollToHome: scrollToHome }), _jsx(AboutSection, {}), _jsx("div", { ref: projectsRef, children: _jsx(ProjectsSection, {}) }), _jsx("div", { ref: contactRef, children: _jsx(ContactSection, {}) })] }));
}
export default App;
