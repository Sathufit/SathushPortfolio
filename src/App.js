import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(Navigation, { scrollToHome: () => scrollToSection(homeRef), scrollToAbout: () => scrollToSection(aboutRef), scrollToProjects: () => scrollToSection(projectsRef), scrollToContact: () => scrollToSection(contactRef) }), _jsx("div", { ref: homeRef, children: _jsx(HeroSection, { scrollToProjects: () => scrollToSection(projectsRef), scrollToContact: () => scrollToSection(contactRef) }) }), _jsx("div", { ref: aboutRef, children: _jsx(AboutSection, {}) }), _jsx("div", { ref: projectsRef, children: _jsx(ProjectsSection, {}) }), _jsx("div", { ref: contactRef, children: _jsx(ContactSection, {}) }), _jsx("footer", { className: "bg-gray-900 text-white py-8 px-6", children: _jsx("div", { className: "max-w-7xl mx-auto text-center", children: _jsxs("p", { className: "text-gray-400", children: ["\u00A9 ", new Date().getFullYear(), " Sathush Nanayakkara. Built with React & Tailwind CSS."] }) }) })] }));
}
export default App;
