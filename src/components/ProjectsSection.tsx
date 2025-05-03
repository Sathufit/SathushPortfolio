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
    <div className="bg-blue-950/30 backdrop-blur-md rounded-xl border border-cyan-500/20 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group"
      style={{
        boxShadow: "0 0 25px rgba(6, 182, 212, 0.1), 0 0 10px rgba(8, 145, 178, 0.05) inset"
      }}
    >
      {/* Project Image with overlay */}
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Aqua glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 z-10" />
        
        {/* Bubble effect on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div 
              key={idx} 
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                bottom: '0%',
                left: `${Math.random() * 100}%`,
                background: idx % 3 === 0 
                  ? "radial-gradient(circle at 30% 30%, rgba(125, 211, 252, 0.5), rgba(8, 145, 178, 0.2))" 
                  : "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(186, 230, 253, 0.2))",
                boxShadow: "inset 0 0 4px rgba(255, 255, 255, 0.3)",
                opacity: 0.7,
                animation: `bubble-rise ${Math.random() * 5 + 3}s linear ${Math.random() * 2}s infinite`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-cyan-100/80 mb-4 text-sm">{description}</p>
        
        {/* Technology stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md font-medium bg-gradient-to-r from-cyan-600/40 to-teal-500/40 text-cyan-100 border border-cyan-400/20"
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white font-medium py-1 px-3 rounded-lg transition-all duration-300 hover:shadow-aqua text-xs flex items-center gap-1"
            style={{
              boxShadow: "0 0 10px rgba(6, 182, 212, 0.15)"
            }}
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
              variant="outline"
              className="border border-cyan-400/30 bg-blue-900/30 text-cyan-100 hover:bg-blue-800/40 font-medium py-1 px-3 rounded-lg transition-all duration-300 hover:shadow-deep text-xs flex items-center gap-1"
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
    url: "https://frontendcrickweb.onrender.com/",
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
  }
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

  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Deep ocean background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950 to-teal-950 z-0" />
      
      {/* Animated water current effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-blue-900/10 to-transparent opacity-40 z-0"
        style={{
          animation: "current-flow 30s linear infinite",
          backgroundSize: "200% 200%"
        }}
      />
      
      {/* Deep sea textures */}
      <div className="absolute inset-0 bg-water-pattern opacity-30 z-0" />
      
      {/* Bioluminescent jellyfish in background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => {
          const size = Math.random() * 80 + 40;
          const x = Math.random() * 100;
          const y = Math.random() * 60 + 20;
          const duration = Math.random() * 20 + 15;
          const delay = Math.random() * 10;
          const opacity = Math.random() * 0.2 + 0.05;
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: `${size}px`,
                height: `${size * 1.3}px`,
                top: `${y}%`,
                left: `${x}%`,
                opacity: opacity,
                animation: `sway ${duration}s ease-in-out ${delay}s infinite, glow-pulse ${duration / 3}s ease-in-out ${delay / 2}s infinite`
              }}
            >
              <div className="w-full h-1/2 rounded-t-full bg-gradient-to-b from-teal-400/20 to-cyan-500/30 blur-sm" />
              <div className="w-4/5 mx-auto h-1/2 relative">
                <div className="absolute inset-x-0 -top-3 h-6 bg-cyan-400/20 blur-sm rounded-b-full" />
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div 
                    key={idx} 
                    className="absolute top-0 rounded-b-full bg-gradient-to-b from-cyan-300/10 to-cyan-500/5 blur-sm"
                    style={{
                      left: `${idx * 20 + 10}%`,
                      width: '10%',
                      height: '100%',
                      animationDelay: `${idx * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Section heading with underwater glow */}
      <div className="text-center relative z-10 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          My{" "}
          <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-400 to-cyan-500 animate-water-text">
                Projects
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-300 via-teal-400 to-cyan-500 rounded opacity-80" />
          </span>
        </h2>
        <p className="text-cyan-100 text-lg max-w-2xl mx-auto mt-4">
          Here are a few apps and systems I've crafted — full of energy, code, and lots of coffee ☕.
        </p>
      </div>

      {/* Featured Project Showcase with Carousel */}
      {featuredProjects.length > 0 && (
        <div className="mt-16 mb-20 max-w-6xl mx-auto relative z-10">
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-100">
            Featured Work
          </h3>
          
          <div className="relative">
            <div className="flex items-center justify-between">
              <Button 
                onClick={prevProject}
                className="bg-blue-900/40 hover:bg-blue-800/50 border border-cyan-500/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} className="text-cyan-100" />
              </Button>
              
              <div className="relative w-full max-w-4xl mx-8">
                <div
                  key={activeIndex}
                  className="flex flex-col md:flex-row gap-8 items-center bg-blue-950/40 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6"
                  style={{
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.15), 0 0 15px rgba(8, 145, 178, 0.1) inset",
                    transform: `perspective(1000px) rotateX(${y * 3}deg) rotateY(${-x * 3}deg)`
                  }}
                >
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
                className="bg-blue-900/40 hover:bg-blue-800/50 border border-cyan-500/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Next project"
              >
                <ChevronRight size={20} className="text-cyan-100" />
              </Button>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-gradient-to-r from-cyan-400 to-teal-400 w-6" : "bg-white/30 w-2"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Projects Grid */}
      <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-100">
        All Projects
      </h3>
      
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setIsHovering(index)}
            onMouseLeave={() => setIsHovering(null)}
          >
            <ProjectCard 
              {...project} 
              isHovering={isHovering === index}
            />
          </div>
        ))}
      </div>
      
      {/* Rising bubbles animation for ambiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = Math.random() * 12 + 3;
          const x = Math.random() * 100;
          const duration = Math.random() * 15 + 8;
          const delay = Math.random() * 20;
          const opacity = Math.random() * 0.2 + 0.1;
          
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                bottom: `-5%`,
                left: `${x}%`,
                background: i % 4 === 0 
                  ? "radial-gradient(circle at 30% 30%, rgba(125, 211, 252, 0.4), rgba(8, 145, 178, 0.1))" 
                  : "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(186, 230, 253, 0.1))",
                boxShadow: "inset 0 0 4px rgba(255, 255, 255, 0.3)",
                opacity: opacity,
                animation: `bubble-rise ${duration}s linear ${delay}s infinite`
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;