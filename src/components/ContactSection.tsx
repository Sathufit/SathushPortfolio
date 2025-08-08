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
    email: "sathush.nanayakkara04@gmail.com",
    phone: "+94 76 934 6516",
    address: "20 Siri Dhammissara Dodanduwa",
    github: "https://github.com/Sathufit",
    linkedin: "https://www.linkedin.com/in/sathush-nanayakkara-611b65192/",
    twitter: "https://x.com/rsathush?s=21",
    instagram: "https://www.instagram.com/sathu_fit_?igsh=YjNwcGxwaGs4ZnVq&utm_source=qr"
  };

  // Generate vintage paper texture elements
  const paperTextures = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: Math.random() * 150 + 100,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    opacity: Math.random() * 0.06 + 0.03,
    rotation: Math.random() * 360
  }));

  // Generate coffee stains for texture
  const coffeeStains = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    size: Math.random() * 150 + 50,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    opacity: Math.random() * 0.1 + 0.05
  }));

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden px-6 py-24 gradient-bg">
      {/* Background elements to match HeroSection */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s, transform 0.8s"
          }}
        >
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div 
            className="space-y-10 modern-card p-8 rounded-2xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s, transform 0.8s",
              transitionDelay: "0.2s"
            }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">
                Contact Information
              </h3>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="glass-button p-4 rounded-lg mr-5">
                  <Mail className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-white hover:text-gray-300 transition-colors group-hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="glass-button p-4 rounded-lg mr-5">
                  <Phone className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-white hover:text-gray-300 transition-colors group-hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="glass-button p-4 rounded-lg mr-5">
                  <MapPin className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Address</p>
                  <address className="not-italic text-white">
                    {contactInfo.address}
                  </address>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {/* Social Icons - Update each social icon wrapper */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-3 rounded-full"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-3 rounded-full"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-3 rounded-full"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-3 rounded-full"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="social-icon p-3 rounded-full"
                >
                  <Mail className="h-5 w-5 text-white" />
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
            }}
          >
            <div className="modern-card p-8 rounded-2xl relative z-10"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${-mousePosition.x * 2}deg)`
              }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Send Me a Message
              </h3>
              
              {formStatus.submitted ? (
                <div 
                  className={`p-6 glass-button ${
                    formStatus.error 
                      ? 'border-red-500/20' 
                      : 'border-green-500/20'
                  }`}
                >
                  <p className="text-center font-medium text-white">
                    {formStatus.message}
                  </p>
                  {formStatus.error && (
                    <button 
                      onClick={() => setFormStatus({ submitted: false, error: false, message: "" })}
                      className="mt-4 mx-auto block text-sm px-4 py-2 glass-button hover:bg-white/20"
                    >
                      Try again
                    </button>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form inputs - Update each input field */}
                  <div>
                    <label className="text-sm text-gray-300 block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-button text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 block mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-button text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 block mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-button text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 block mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 glass-button text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 resize-none"
                      placeholder="I'd like to discuss a potential project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}