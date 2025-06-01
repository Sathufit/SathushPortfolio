import { useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // 👉 Scroll handlers
  const scrollToSection = (element: HTMLElement | null) => {
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 6000; // Increased to 6 seconds for very slow scroll
    let start: number | null = null;

    // Smooth easing function
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      const currentPosition = startPosition + (distance * easeInOutCubic(progress));
      
      window.scrollTo({
        top: currentPosition,
        behavior: 'auto'
      });

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // Update the scroll handlers
  const scrollToProjects = () => {
    if (projectsRef.current) {
      scrollToSection(projectsRef.current);
      window.history.pushState(null, "", "/projects");
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      scrollToSection(contactRef.current);
      window.history.pushState(null, "", "/contact");
    }
  };

  const scrollToHome = () => {
    scrollToSection(document.body);
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
    <main className="bg-background text-text smooth-scroll">
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
