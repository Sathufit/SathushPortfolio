import { useRef } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      <div ref={homeRef}>
        <HeroSection
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} Sathush Nanayakkara.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
