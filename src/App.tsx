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
      <footer className="border-t border-zinc-800/60 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Sathush Nanayakkara. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Sathufit" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 hover:text-indigo-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sathush-nayakkara" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 hover:text-indigo-400 transition-colors">LinkedIn</a>
            <a href="mailto:sathush.nanayakkara04@gmail.com" className="text-xs text-zinc-600 hover:text-indigo-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
