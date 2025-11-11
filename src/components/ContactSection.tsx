import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, XCircle } from "lucide-react";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mgvkanry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section ref={containerRef} id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">Get In Touch</h2>
            <div className="w-12 h-1 bg-zinc-50 mb-6" />
            <p className="text-lg text-zinc-400">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 glass rounded-lg">
                  <Mail className="w-5 h-5 text-zinc-50" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Email</p>
                  <a
                    href="mailto:sathushnayakkara@gmail.com"
                    className="text-zinc-50 hover:opacity-60 transition-opacity"
                  >
                    sathush.nanayakkara04@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 glass rounded-lg">
                  <MapPin className="w-5 h-5 text-zinc-50" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Location</p>
                  <p className="text-zinc-50">Colombo, Sri Lanka</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm text-zinc-500 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://github.com/Sathufit"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="p-3 glass rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <Github className="w-5 h-5 text-zinc-50" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/sathush-nayakkara"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="p-3 glass rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-zinc-50" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:bg-zinc-800 transition-colors text-zinc-50 placeholder-zinc-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:bg-zinc-800 transition-colors text-zinc-50 placeholder-zinc-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:bg-zinc-800 transition-colors resize-none text-zinc-50 placeholder-zinc-500"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full px-6 py-3 bg-zinc-50 text-zinc-950 text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shine"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 glass rounded-lg text-green-400 text-sm"
                >
                  <CheckCircle size={16} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 glass rounded-lg text-red-400 text-sm"
                >
                  <XCircle size={16} />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
