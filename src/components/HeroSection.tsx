import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

// Custom hook for subtle movement effect with proper TypeScript types
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  
  // Neo-Brutalist shapes for animation
  interface Shape {
    x: number;
    y: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
    color: string;
    shape: 'square' | 'circle' | 'triangle';
    opacity: number;
    speedX: number;
    speedY: number;
  }
  
  const shapesRef = useRef<Shape[]>([]);
  
  // Add global styles using useEffect
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @keyframes gradientShift {
        0% { background-position: 0% 50% }
        50% { background-position: 100% 50% }
        100% { background-position: 0% 50% }
      }
      
      @keyframes floatUp {
        0%, 100% { transform: translateY(0) }
        50% { transform: translateY(-10px) }
      }
      
      @keyframes shine {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }
      
      .modern-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      
      .modern-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      }
      
      .gradient-text {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .glass-button {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
      }
      
      .glass-button:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }
      
      .social-icon {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
      }
      
      .social-icon:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-3px);
      }
      
      .gradient-bg {
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        animation: gradientShift 15s ease infinite;
        background-size: 200% 200%;
      }
    `;
    
    document.head.appendChild(styleEl);

    // Return a cleanup function that removes the style element
    return () => {
      if (styleEl && document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
    };
  }, []);
  
  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Create animated shapes for Neo-Brutalist background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Create geometric shapes
    const shapeCount = Math.min(window.innerWidth / 100, 15); // Fewer shapes for neo-brutalist style
    shapesRef.current = Array.from({ length: shapeCount }, () => createShape(canvas.width, canvas.height));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw shapes
      shapesRef.current.forEach((shape) => {
        updateShape(shape, canvas);
        drawShape(shape, ctx);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const createShape = (canvasWidth: number, canvasHeight: number): Shape => {
    const shapes = ['square', 'circle', 'triangle'] as const;
    const colors = ['#3b82f6', '#000000', '#ef4444', '#a3e635'];
    
    return {
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      size: Math.random() * 40 + 10, // Bold, chunky shapes
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      opacity: Math.random() * 0.15 + 0.05, // Subtle background elements
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3
    };
  };

  const updateShape = (shape: Shape, canvas: HTMLCanvasElement) => {
    // Move shape
    shape.x += shape.speedX;
    shape.y += shape.speedY;
    
    // Rotate shape
    shape.rotation += shape.rotationSpeed;
    
    // Bounce off edges
    if (shape.x < 0 || shape.x > canvas.width) {
      shape.speedX *= -1;
    }
    
    if (shape.y < 0 || shape.y > canvas.height) {
      shape.speedY *= -1;
    }
  };

  const drawShape = (shape: Shape, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.translate(shape.x, shape.y);
    ctx.rotate((shape.rotation * Math.PI) / 180);
    ctx.fillStyle = shape.color;
    ctx.globalAlpha = shape.opacity;
    
    switch (shape.shape) {
      case 'square':
        ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        break;
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -shape.size / 2);
        ctx.lineTo(shape.size / 2, shape.size / 2);
        ctx.lineTo(-shape.size / 2, shape.size / 2);
        ctx.closePath();
        ctx.fill();
        break;
    }
    
    ctx.restore();
  };

  // Custom smooth scroll function
  const smoothScrollToElement = (element: HTMLElement, duration = 1000, yOffset = -50) => {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    let start: number | null = null;

    // Gentler cubic easing
    const easeInOutCubic = (t: number) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-10 flex flex-col items-center justify-center text-center gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
        }} />
      </div>
      
      {/* Canvas for animated brutalist shapes */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
      />

      {/* Main content */}
      <div 
        className={`relative z-10 p-12 max-w-2xl w-full transition-all duration-500 modern-card rounded-2xl ${
          isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Hello, I'm{" "}
            <span className="gradient-text">Sathush</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            A passionate software engineer from SLIIT, crafting elegant solutions and building immersive digital experiences.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-10">
            <Button 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) {
                  smoothScrollToElement(element, 2000, -50); // 4 seconds
                  setTimeout(() => {
                    scrollToProjects();
                  }, 4100);
                }
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Projects
            </Button>

            <Button 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  smoothScrollToElement(element, 2000, -50); // 4 seconds
                  setTimeout(() => {
                    scrollToContact();
                  }, 4100);
                }
              }}
              className="glass-button text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </Button>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/Sathufit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon p-3 rounded-full"
            >
              <Github size={24} className="text-white" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sathush-nanayakkara-611b65192/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon p-3 rounded-full"
            >
              <Linkedin size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>
  
    </section>
  );
};

export default HeroSection;