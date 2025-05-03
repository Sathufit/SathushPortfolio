import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Layers, ChevronRight, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  url?: string;
  featured?: boolean;
  image?: string;
  isHovering?: boolean;
}

interface TechBadgeColors {
  [key: string]: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  link,
  url,
  featured = false,
  image = "/api/placeholder/400/250",
  isHovering = false
}: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  
  // Animation variants
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };
  
  const detailsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const techBadgeColors: TechBadgeColors = {
    "React": "from-blue-500 to-cyan-400",
    "React Native": "from-blue-600 to-cyan-500",
    "Node.js": "from-green-500 to-emerald-400",
    "MongoDB": "from-green-600 to-emerald-500",
    "Tailwind": "from-cyan-500 to-blue-400",
    "Supabase": "from-emerald-500 to-green-400",
    "Expo": "from-gray-700 to-gray-500",
    "PostGIS": "from-blue-700 to-blue-500",
    "Kotlin": "from-purple-600 to-indigo-500",
    "Android Studio": "from-green-600 to-teal-500",
    "MPAndroidChart": "from-yellow-500 to-orange-400",
    "Vue.js": "from-emerald-500 to-green-400",
    "D3.js": "from-orange-500 to-red-400",
    "OpenWeather API": "from-blue-500 to-cyan-400"
  };

  const getTechColor = (techName: string): string => {
    return techBadgeColors[techName] || "from-purple-500 to-cyan-500";
  };

  return (
    <motion.div
      className="flex flex-col rounded-xl border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg overflow-hidden h-full"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        
        {featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-accent/90 text-white text-xs px-2 py-1 rounded-md font-medium">
              Featured
            </span>
          </div>
        )}
      </div>
      
      {/* Content Container */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            
            <motion.div 
              className="flex space-x-2"
              initial="hidden"
              animate={isHovering ? "visible" : "hidden"}
              variants={iconVariants}
            >
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1 rounded-full bg-white/10 hover:bg-accent/20 transition-colors"
                aria-label="View project code"
              >
                <Github size={18} className="text-accent" />
              </a>
              
              {url && (
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1 rounded-full bg-white/10 hover:bg-accent/20 transition-colors"
                  aria-label="Visit website"
                >
                  <Globe size={18} className="text-accent" />
                </a>
              )}
            </motion.div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.slice(0, 3).map((t: string, i: number) => (
              <span
                key={i}
                className={`bg-gradient-to-br ${getTechColor(t)} text-xs px-2 py-1 rounded-md text-white font-medium opacity-90 shadow-md hover:opacity-100 transition`}
              >
                {t}
              </span>
            ))}
            {tech.length > 3 && (
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-accent hover:underline flex items-center"
              >
                +{tech.length - 3} more
                <ChevronRight size={14} className={`ml-1 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
              </button>
            )}
          </div>
          
          {/* Expandable Details */}
          <motion.div
            variants={detailsVariants}
            initial="hidden"
            animate={showDetails ? "visible" : "hidden"}
            className="overflow-hidden"
          >
            {tech.length > 3 && (
              <div className="mt-2 mb-4">
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Layers size={16} className="mr-1 text-accent" />
                  Full Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tech.slice(3).map((t: string, i: number) => (
                    <span
                      key={i}
                      className={`bg-gradient-to-br ${getTechColor(t)} text-xs px-2 py-1 rounded-md text-white font-medium opacity-90 shadow-md hover:opacity-100 transition`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-2 mb-2">
              <h4 className="text-sm font-medium mb-2 flex items-center">
                <Code size={16} className="mr-1 text-accent" />
                Project Features
              </h4>
              <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                <li>Responsive design across all devices</li>
                <li>Intuitive user interface with smooth animations</li>
                <li>Efficient data management and storage</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-4 pt-4 border-t border-white/10">
          {url ? (
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-accent/90 text-white px-3 py-2 rounded-md transition-colors duration-300"
              >
                <Github size={16} />
                Code
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2 bg-accent/90 hover:bg-accent text-white px-3 py-2 rounded-md transition-colors duration-300"
              >
                <Globe size={16} />
                Website
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-2 bg-accent/90 hover:bg-accent text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              View Project
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}