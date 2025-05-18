import { useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
      } else if (scrollY >= projectsTop - 200) {
        window.history.replaceState(null, "", "/projects");
      } else {
        window.history.replaceState(null, "", "/home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
