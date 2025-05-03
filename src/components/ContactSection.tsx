import { Github, Linkedin, Mail, Phone, MapPin, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  // Use the same parallax effect as the hero section
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
  
  // Intersection Observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitted: true, error: false, message: "Sending your message..." });
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Replace with your actual form handling service
      const response = await fetch("https://formspree.io/f/mgvkanry", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormStatus({ 
          submitted: true, 
          error: false, 
          message: "Thank you! Your message has been sent successfully." 
        });
        form.reset();
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus({ 
        submitted: true, 
        error: true, 
        message: "Oops! There was a problem sending your message. Please try again." 
      });
    }
  };

  // Contact Information
  const contactInfo = {
    email: "sathufit@gmail.com",
    phone: "+94 76 934 6516",
    address: "20 Siri Dhammissara Dodanduwa",
    github: "https://github.com/Sathufit",
    linkedin: "https://www.linkedin.com/in/sathush-nanayakkara-611b65192/",
    twitter: "https://x.com/rsathush?s=21",
    instagram: "https://www.instagram.com/sathu_fit_?igsh=YjNwcGxwaGs4ZnVq&utm_source=qr"
  };

  // Generate random jellyfish for background decoration
  const jellyfish = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    x: Math.random() * 100,
    y: Math.random() * 60 + 20,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.2 + 0.1
  }));

  // Generate bubbles
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 8,
    delay: Math.random() * 20,
    opacity: Math.random() * 0.4 + 0.1
  }));

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s, transform 0.8s"
          }}
        >
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-400 to-cyan-500 animate-water-text">
              Let's Connect
            </span>
          </h2>
          <p className="text-lg text-cyan-100 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div 
            className="space-y-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s, transform 0.8s",
              transitionDelay: "0.2s"
            }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-8 relative inline-block text-cyan-100">
                Contact Information
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-teal-500"></span>
              </h3>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-cyan-600 to-teal-700 p-4 rounded-xl mr-5 shadow-lg shadow-cyan-900/20 group-hover:shadow-cyan-900/40 transition-all duration-300">
                  <Mail className="h-6 w-6 text-cyan-100 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-sm text-cyan-300 mb-1">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-cyan-100 hover:text-cyan-400 transition-colors relative overflow-hidden group-hover:underline decoration-cyan-400/30 underline-offset-4"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-teal-600 to-cyan-700 p-4 rounded-xl mr-5 shadow-lg shadow-teal-900/20 group-hover:shadow-teal-900/40 transition-all duration-300">
                  <Phone className="h-6 w-6 text-cyan-100 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-sm text-cyan-300 mb-1">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-cyan-100 hover:text-teal-300 transition-colors group-hover:underline decoration-teal-400/30 underline-offset-4"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-700 p-4 rounded-xl mr-5 shadow-lg shadow-blue-900/20 group-hover:shadow-blue-900/40 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-cyan-100 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-sm text-cyan-300 mb-1">Address</p>
                  <address className="not-italic text-cyan-100 hover:text-blue-300 transition-colors">
                    {contactInfo.address}
                  </address>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 relative inline-block text-cyan-100">
                Connect With Me
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-teal-500"></span>
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="GitHub"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-70 blur transition duration-300" />
                  <div className="relative bg-blue-900/50 rounded-full p-3 group-hover:bg-blue-800/70 transition duration-300">
                    <Github className="h-5 w-5 text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="LinkedIn"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-70 blur transition duration-300" />
                  <div className="relative bg-blue-900/50 rounded-full p-3 group-hover:bg-blue-800/70 transition duration-300">
                    <Linkedin className="h-5 w-5 text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                </a>
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Twitter"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-70 blur transition duration-300" />
                  <div className="relative bg-blue-900/50 rounded-full p-3 group-hover:bg-blue-800/70 transition duration-300">
                    <Twitter className="h-5 w-5 text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                </a>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Instagram"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 opacity-0 group-hover:opacity-70 blur transition duration-300" />
                  <div className="relative bg-blue-900/50 rounded-full p-3 group-hover:bg-blue-800/70 transition duration-300">
                    <Instagram className="h-5 w-5 text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group relative"
                  aria-label="Email"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-70 blur transition duration-300" />
                  <div className="relative bg-blue-900/50 rounded-full p-3 group-hover:bg-blue-800/70 transition duration-300">
                    <Mail className="h-5 w-5 text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s, transform 0.8s",
              transitionDelay: "0.3s",
              transformStyle: "preserve-3d",

            }}
          >
            <div className="bg-blue-950/40 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 relative z-10"
              style={{
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.15), 0 0 20px rgba(8, 145, 178, 0.1) inset"
              }}
            >
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-400/10 opacity-30" />
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, rgba(8, 145, 178, 0.2), transparent 70%)`
                  }}
                />
              </div>
              
              <h3 className="text-2xl font-semibold mb-6 relative inline-block text-cyan-100 z-10">
                Send Me a Message
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-teal-500"></span>
              </h3>
              
              {formStatus.submitted ? (
                <div 
                  className={`p-6 rounded-xl ${
                    formStatus.error 
                      ? 'bg-gradient-to-br from-red-900/50 to-red-950/50 border border-red-700/30' 
                      : 'bg-gradient-to-br from-teal-900/50 to-teal-950/50 border border-teal-700/30'
                  }`}
                  style={{
                    opacity: 0,
                    animation: "fadeIn 0.3s forwards",
                    boxShadow: formStatus.error 
                      ? "0 0 20px rgba(220, 38, 38, 0.1) inset" 
                      : "0 0 20px rgba(20, 184, 166, 0.1) inset"
                  }}
                >
                  <p className="text-center font-medium text-cyan-100">
                    {formStatus.message}
                  </p>
                  {formStatus.error && (
                    <button 
                      onClick={() => setFormStatus({ submitted: false, error: false, message: "" })}
                      className="mt-4 mx-auto block text-sm px-4 py-2 bg-red-800/50 hover:bg-red-700/50 rounded-lg transition-colors"
                    >
                      Try again
                    </button>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label htmlFor="name" className="text-sm text-cyan-300 block mb-2 font-medium">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-4 rounded-xl bg-blue-900/30 text-cyan-100 placeholder-cyan-300/50 border border-cyan-600/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm text-cyan-300 block mb-2 font-medium">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-4 rounded-xl bg-blue-900/30 text-cyan-100 placeholder-cyan-300/50 border border-cyan-600/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="text-sm text-cyan-300 block mb-2 font-medium">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-4 rounded-xl bg-blue-900/30 text-cyan-100 placeholder-cyan-300/50 border border-cyan-600/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm text-cyan-300 block mb-2 font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-blue-900/30 text-cyan-100 placeholder-cyan-300/50 border border-cyan-600/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 resize-none"
                      placeholder="I'd like to discuss a potential project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-900/30 hover:shadow-cyan-900/50 relative overflow-hidden group"
                    style={{
                      transform: "translateY(0)",
                      transition: "transform 0.2s, shadow 0.3s"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/10 to-cyan-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  </button>
                </form>
              )}
            </div>
            
            {/* Subtle glow effect */}
            <div 
              className="absolute -inset-4 rounded-3xl blur-xl opacity-30 z-0"
              style={{ 
                background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.15), transparent 70%)",
                animation: "glow-pulse 4s infinite ease-in-out"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}