import { useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { useNavigate } from "react-router-dom";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
      } else if (scrollY >= projectsTop - 200) {
        navigate("/projects", { replace: true });
      } else {
        navigate("/home", { replace: true });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

  return (
    <main className="bg-background text-text scroll-smooth">
      <HeroSection
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
        scrollToHome={scrollToHome}
      />

      <AboutSection />

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
