import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Anchor } from "lucide-react";

// Custom hook for mouse parallax effect with proper TypeScript types
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

interface HeroSectionProps {
  scrollToProjects: () => void;
  scrollToContact: () => void;
  scrollToHome: () => void;
}

const HeroSection = ({ scrollToProjects, scrollToContact, scrollToHome }: HeroSectionProps) => {
  const { x, y } = useMouseParallax();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Add global styles using useEffect
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement("style");
    // Add the CSS content
    styleEl.textContent = `
      @keyframes sway {
        0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
        33% { transform: translateX(10px) translateY(-10px) rotate(2deg); }
        66% { transform: translateX(-5px) translateY(5px) rotate(-1deg); }
        100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
      }
      
      @keyframes bubble-rise {
        0% { transform: translateY(20px); opacity: 0; }
        20% { opacity: 0.8; }
        80% { opacity: 0.6; }
        100% { transform: translateY(-100px); opacity: 0; }
      }
      
      @keyframes glow-pulse {
        0% { filter: brightness(0.8) saturate(0.8); }
        50% { filter: brightness(1.2) saturate(1.2); }
        100% { filter: brightness(0.8) saturate(0.8); }
      }
      
      @keyframes current-flow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes ripple {
        0% { transform: scale(0.8); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
      }
      
      .animate-water-text {
        background-size: 200% auto;
        animation: current-flow 8s ease infinite;
      }
      
      .bg-water-pattern {
        background-image: 
          radial-gradient(circle at 50% 50%, rgba(4, 78, 129, 0.1) 10%, transparent 20%),
          radial-gradient(circle at 80% 20%, rgba(0, 71, 171, 0.1) 10%, transparent 30%);
        background-size: 60px 60px;
      }
      
      .shadow-aqua {
        box-shadow: 0 0 15px rgba(0, 222, 255, 0.5);
      }
      
      .shadow-deep {
        box-shadow: 0 0 15px rgba(0, 98, 138, 0.3);
      }
      
      .typing-text {
        overflow: hidden;
        white-space: nowrap;
        width: fit-content;
        margin: 0 auto;
        animation: typing 3.5s steps(60) 0.5s 1 normal both;
      }
      
      @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
      }
    `;
    
    // Append the style element to the head
    document.head.appendChild(styleEl);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Generate random jellyfish
  const jellyfish = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    x: Math.random() * 100,
    y: Math.random() * 60 + 20,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.3 + 0.1
  }));

  // Generate bubbles
  const bubbles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 8,
    delay: Math.random() * 20,
    opacity: Math.random() * 0.4 + 0.1
  }));

  return (
    <section className="relative min-h-screen overflow-hidden px-6 flex flex-col items-center justify-center text-center">
      {/* Deep ocean background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-950 to-teal-950 z-0" />
      
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
      
      {/* Bioluminescent jellyfish */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {jellyfish.map((jelly) => (
          <div
            key={jelly.id}
            className="absolute"
            style={{
              width: `${jelly.size}px`,
              height: `${jelly.size * 1.3}px`,
              top: `${jelly.y}%`,
              left: `${jelly.x}%`,
              opacity: jelly.opacity,
              animation: `sway ${jelly.duration}s ease-in-out ${jelly.delay}s infinite, glow-pulse ${jelly.duration / 3}s ease-in-out ${jelly.delay / 2}s infinite`
            }}
          >
            <div className="w-full h-1/2 rounded-t-full bg-gradient-to-b from-teal-400/30 to-cyan-500/40 blur-sm" />
            <div className="w-4/5 mx-auto h-1/2 relative">
              <div className="absolute inset-x-0 -top-3 h-6 bg-cyan-400/30 blur-sm rounded-b-full" />
              {Array.from({ length: 5 }).map((_, idx) => (
                <div 
                  key={idx} 
                  className="absolute top-0 rounded-b-full bg-gradient-to-b from-cyan-300/20 to-cyan-500/5 blur-sm"
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
        ))}
        
        {/* Rising bubbles */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              bottom: `-5%`,
              left: `${bubble.x}%`,
              background: bubble.id % 4 === 0 
                ? "radial-gradient(circle at 30% 30%, rgba(125, 211, 252, 0.4), rgba(8, 145, 178, 0.1))" 
                : "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(186, 230, 253, 0.1))",
              boxShadow: "inset 0 0 4px rgba(255, 255, 255, 0.3)",
              opacity: bubble.opacity,
              animation: `bubble-rise ${bubble.duration}s linear ${bubble.delay}s infinite`
            }}
          />
        ))}
      </div>
      
      {/* Content card with aqua glass effect */}
      <div 
        className={`relative z-10 bg-blue-950/40 backdrop-blur-md p-10 rounded-xl border border-cyan-500/20 max-w-2xl w-full transition-all duration-1000 ${
          isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
        }`}
        style={{
          boxShadow: "0 0 40px rgba(6, 182, 212, 0.15), 0 0 20px rgba(8, 145, 178, 0.1) inset",
          transform: `perspective(1000px) rotateX(${y * 5}deg) rotateY(${-x * 5}deg)`
        }}
      >
        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-400/10 opacity-30" />
          <div 
            className="absolute inset-0 rounded-xl"
            style={{
              background: `radial-gradient(circle at ${50 + x * 30}% ${50 + y * 30}%, rgba(8, 145, 178, 0.2), transparent 70%)`
            }}
          />
        </div>
        
        <div className="flex flex-col items-center relative z-10">
          {/* Main heading with water effect */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight relative">
            Hello, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-400 to-cyan-500 animate-water-text">
                Sathush
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-300 via-teal-400 to-cyan-500 rounded opacity-80" />
            </span>
          </h1>
          
          {/* Subtitle with animated fade in */}
          <p className="text-cyan-100 text-lg max-w-xl mx-auto" style={{ animation: "fadeIn 1s ease forwards 0.5s", opacity: 0 }}>
            A passionate software engineer from SLIIT, building immersive web experiences and impactful projects.
          </p>

          {/* Buttons with ocean-themed hover effects */}
          <div className="flex gap-4 mt-8 justify-center">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-aqua transform hover:-translate-y-1"
            >
              <span>View Projects</span>
            </Button>

            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border border-cyan-400/30 bg-blue-900/30 text-cyan-100 hover:bg-blue-800/40 font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-deep transform hover:-translate-y-1"
            >
              <Mail size={16} className="mr-2" />
              <span>Contact Me</span>
            </Button>
          </div>
          
          {/* Social icons with underwater glow effects */}
          <div className="flex gap-8 mt-8 justify-center">
            <a 
              href="https://github.com/Sathufit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-70 blur transition duration-300" />
              <div className="relative bg-blue-900/50 rounded-full p-2 group-hover:bg-blue-800/70 transition duration-300">
                <Github size={24} className="text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sathush-nanayakkara-611b65192/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-70 blur transition duration-300" />
              <div className="relative bg-blue-900/50 rounded-full p-2 group-hover:bg-blue-800/70 transition duration-300">
                <Linkedin size={24} className="text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with anchor icon */}
      <div 
        className="absolute bottom-10 text-cyan-200 flex flex-col items-center gap-2"
        style={{
          animation: "fadeIn 2s ease forwards",
          animationDelay: "1.5s",
          opacity: 0
        }}
      >
        <span className="text-sm font-light tracking-widest">DIVE IN</span>
        <Anchor size={20} className="animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;