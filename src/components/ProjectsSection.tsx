import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ExternalLink, Github, Globe } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  link: string;
  featured: boolean;
  image: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  link: string;
  image: string;
  isHovering?: boolean;
}

const ProjectCard = ({ title, description, tech, url, link, image, isHovering }: ProjectCardProps) => {
  return (
    <div className="modern-card overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      {/* Project Image with overlay */}
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 z-10" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        
        {/* Technology stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, i) => (
            <span
              key={i}
              className="glass-button text-xs px-2 py-1 rounded-md font-medium text-white"
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          <Button
            asChild
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1 px-3 rounded-lg transition-all duration-300 text-xs flex items-center gap-1"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} />
              <span>Code</span>
            </a>
          </Button>
          
          {url && (
            <Button
              asChild
              className="glass-button text-white font-medium py-1 px-3 rounded-lg transition-all duration-300 text-xs flex items-center gap-1"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={14} />
                <span>Visit</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    title: "SLSBA Project(Sri Lanka Schools Badminton Association)",
    description: "A full MERN stack dashboard for Sri Lanka Schools Badminton Association.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "https://slsba.onrender.com/",
    link: "https://github.com/Sathufit/SLSBA",
    featured: true,
    image: "/placeholder/slsba.png",
  },
  {
    title: "Finance Tracker (Kotlin)",
    description: "Android app to track income, expenses, and monthly budgets.",
    tech: ["Kotlin", "Android Studio", "MPAndroidChart"],
    link: "https://github.com/Sathufit/FinanceTracker",
    featured: true,
    image: "/placeholder/finance.png",
  },
  {
    title: "FrontyardCricket",
    description: "A full-stack MERN application to add, update, and delete cricket stats like runs and wickets, while calculating batting and bowling averages to track player performance over time.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    url: "https://frontyardcricket.onrender.com/",
    link: "https://github.com/Sathufit/frontendCrickweb",  
    featured: true,
    image: "/placeholder/cric.png" 
  },
  {
    title: "FIA Minerals",
    description: "A modern and responsive React website for FIA Minerals Pvt Ltd — a Sri Lankan quartz export company. Showcases products, applications, and contact information with clean visuals and SEO-friendly design.",
    tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    url: "https://www.fiaminerals.com/",
    link: "https://github.com/Sathufit/fia-minerals",
    featured: true,
    image: "/placeholder/minerals.png",
  },
  {
    title: "Zentra M & Co",
    description: "A professional React website for Zentra M & Co — an Australian property services company offering premium cleaning, pressure washing, painting, maintenance, flooring, and digital solutions. The site showcases services with a modern design, responsive layout, and smooth user experience.",
    tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    url: "https://www.zentram.com.au/",
    link: "https://github.com/Sathufit/Zentra-M-CO",
    featured: true,
    image: "/placeholder/zentram.png",
  },

  {
        title: "VoteSphere voting System",
        description: "A fully working voting system using Html and php and MySQL.",
        tech: ["PHP", "MySQL", "HTML", "CSS"],
        url: "https://votesphere.infinityfreeapp.com/",
        link: "https://github.com/Sathufit/VoteSphere-voting-system",
        featured: true,
        image: "/placeholder/voteSphere.png",
  },
  
];

const ProjectsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const featuredProjects = projects.filter(project => project.featured);

  // Check if viewport is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const nextProject = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };

  // Mouse parallax effect for our featured project
  const useMouseParallax = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        });
      };
      
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    
    return mousePosition;
  };

  const { x, y } = useMouseParallax();

  const scrollToSection = (element: HTMLElement | null) => {
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 1500; // Increase duration for slower scroll
    let start: number | null = null;

    const ease = (t: number) => {
      return t < 0.5 
        ? 4 * t * t * t 
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // Cubic easing
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + (distance * ease(progress)));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-24 px-6 overflow-hidden gradient-bg smooth-scroll"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
        }} />
      </div>

      {/* Section heading */}
      <div className="text-center relative z-10 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          My{" "}
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
          Here are a few apps and systems I've crafted — full of energy, code, and lots of coffee ☕.
        </p>
      </div>

      {/* Featured Project Showcase */}
      {featuredProjects.length > 0 && (
        <div className="mt-16 mb-20 max-w-6xl mx-auto relative z-10">
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">
            Featured Work
          </h3>
          
          <div className="relative">
            <div className="flex items-center justify-between">
              <Button 
                onClick={prevProject}
                className="glass-button p-2 rounded-full transition-colors duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} className="text-white" />
              </Button>
              
              <div className="relative w-full max-w-4xl mx-8">
                <div
                  key={activeIndex}
                  className="flex flex-col md:flex-row gap-8 items-center modern-card rounded-xl p-6"
                  style={{
                    transform: `perspective(1000px) rotateX(${y * 3}deg) rotateY(${-x * 3}deg)`
                  }}
                >
                  {/* Keep existing featured project content structure but update styles */}
                  <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src={featuredProjects[activeIndex].image} 
                        alt={featuredProjects[activeIndex].title}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                      />
                      {/* Aqua glow overlay on hover */}
                      <div className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/20 to-teal-400/20" />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <h4 className="text-2xl font-bold mb-3 text-white">{featuredProjects[activeIndex].title}</h4>
                    <p className="text-cyan-100/80 mb-4">{featuredProjects[activeIndex].description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProjects[activeIndex].tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-cyan-600/40 to-teal-500/40 text-xs px-2 py-1 rounded-md text-cyan-100 font-medium border border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        asChild
                        className="bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-aqua transform hover:-translate-y-1"
                      >
                        <a
                          href={featuredProjects[activeIndex].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <Github size={16} />
                          View Code
                          <ExternalLink size={14} />
                        </a>
                      </Button>
                      
                      {featuredProjects[activeIndex].url && (
                        <Button 
                          asChild
                          variant="outline"
                          className="border border-cyan-400/30 bg-blue-900/30 text-cyan-100 hover:bg-blue-800/40 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-deep transform hover:-translate-y-1"
                        >
                          <a
                            href={featuredProjects[activeIndex].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <Globe size={16} />
                            Visit Website
                            <ExternalLink size={14} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={nextProject}
                className="glass-button p-2 rounded-full transition-colors duration-300"
                aria-label="Next project"
              >
                <ChevronRight size={20} className="text-white" />
              </Button>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-gradient-to-r from-indigo-400 to-purple-400 w-6" : "bg-white/30 w-2"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Projects Grid */}
      <h3 className="text-2xl font-semibold mb-8 text-center text-white">
        All Projects
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between h-[450px] bg-gray-900 rounded-lg shadow-lg p-6"
            style={{ minHeight: "450px", maxHeight: "450px" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4 h-36 w-full object-cover"
              style={{ minHeight: "144px", maxHeight: "144px" }}
            />
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a href={project.link} className="btn-code">Code</a>
              {project.url && (
                <a href={project.url} className="btn-visit">Visit</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;