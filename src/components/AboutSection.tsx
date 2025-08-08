import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import profileImg from "@/assets/sathush.png";
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Trophy,
  Cpu,
  Languages,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Anchor,
  Shell,
  Waves
} from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("about");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const MotionLink = motion(Link);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      y: -8,
      boxShadow: "8px 8px 0px #000000",
      transition: {
        duration: 0.2
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i:number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + (i * 0.1),
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "4px 4px 0px #000000",
      transition: {
        duration: 0.2
      }
    }
  };

  const tabVariants = {
    inactive: {
      opacity: 0.7,
      y: 0,
      borderBottom: "2px solid transparent"
    },
    active: {
      opacity: 1,
      y: 0,
      borderBottom: "4px solid #3b82f6"
    },
    hover: {
      y: -2,
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  // Data from CV
  const technologies = [
    // Languages
    { name: "Java", icon: <Code size={16} /> },
    { name: "Python", icon: <Code size={16} /> },
    { name: "JavaScript", icon: <Code size={16} /> },
    { name: "C++", icon: <Code size={16} /> },
    { name: "C", icon: <Code size={16} /> },
    { name: "PHP", icon: <Code size={16} /> },
    { name: "Kotlin", icon: <Code size={16} /> },
    { name: "Swift", icon: <Code size={16} /> },
    { name: "HTML", icon: <Code size={16} /> },
    { name: "CSS", icon: <Code size={16} /> },
    // Web Technologies
    { name: "React.js", icon: <Code size={16} /> },
    { name: "Node.js", icon: <Code size={16} /> },
    { name: "Express", icon: <Code size={16} /> },
    { name: "Next.js", icon: <Code size={16} /> },
    // Mobile
    { name: "Kotlin (Android)", icon: <Code size={16} /> },
    { name: "Swift (iOS – basic)", icon: <Code size={16} /> },
    // Databases
    { name: "MySQL", icon: <Code size={16} /> },
    { name: "MongoDB", icon: <Code size={16} /> },
    { name: "Firebase", icon: <Code size={16} /> },
    // Tools & Platforms
    { name: "Git", icon: <Code size={16} /> },
    { name: "GitHub", icon: <Code size={16} /> },
    { name: "VS Code", icon: <Code size={16} /> },
    { name: "Figma", icon: <Code size={16} /> },
    { name: "Postman", icon: <Code size={16} /> },
    // Concepts
    { name: "REST APIs", icon: <Code size={16} /> },
    { name: "OOP", icon: <Code size={16} /> },
    { name: "Agile Methodologies", icon: <Code size={16} /> }
  ];

  const skills = [
    "Public Relations", "Teamwork", "Time Management", "Leadership",
    "Communication", "Critical Thinking"
  ];

  const languages = ["English (Fluent)", "Sinhala (Fluent)"];

  const education = [
    {
      institution: "Sri Lanka Institute of Information Technology",
      period: "2023-Present",
      degree: "Bachelor of Software Engineering",
      details: "Expected Graduation - 2026"
    },
    {
      institution: "Richmond College",
      period: "2023",
      degree: "G.C.E (Advance Level) - Sinhala Medium",
      details: "Combined Maths - C, Physics - C, Chemistry - S"
    },
    {
      institution: "Richmond College Galle",
      period: "2019",
      degree: "G.C.E (Ordinary Level) - Sinhala Medium",
      details: "8 A's and 1 B including Science, Mathematics, English, Sinhala"
    }
  ];

  const experience = [
    {
      role: "Social Media and Technical Manager",
      organization: "Sri Lanka Schools Badminton Association",
      period: "2022-2024"
    },
    {
      role: "Social Media & Live Production",
      organization: "RichmondLive",
      period: "2019-Present"
    }
  ];

  const activities = [
    "Vice Treasurer of CCYM Galle Deanery (2021-2022)",
    "President of Christianity Society, Richmond College (2021-2022)",
    "Member of United Nations Study Circle, Richmond College",
    "Player on the School Badminton Team, Champion for Three Years"
  ];

  // Brutalist grid patterns
  const gridPatterns = [
    {
      pattern: "radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
      rotation: "0deg",
      opacity: 0.3
    },
    {
      pattern: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)",
      rotation: "0deg",
      opacity: 0.2
    }
  ];

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-6 py-20 flex items-center justify-center gradient-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
        }} />
      </div>

      {/* Update the card styles to match HeroSection */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full relative z-10"
      >
        {/* Header Section with Profile Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center">
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center relative md:col-span-5">
            <motion.div
              whileHover="hover"
              variants={imageHoverVariants}
              className="relative z-10 overflow-hidden modern-card rounded-2xl"
            >
              <img
                src={profileImg}
                alt="Sathush"
                className="w-full h-full object-cover object-top"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity"
              >
                <h3 className="text-2xl font-bold text-white">Sathush Nanayakkara</h3>
                <p className="gradient-text">Software Engineering Undergraduate</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Update text colors and card styles */}
          <motion.div variants={itemVariants} className="md:col-span-7 modern-card p-8 rounded-2xl">
            <motion.h2 
              className="text-5xl font-bold mb-6 tracking-tight text-white" 
              variants={itemVariants}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p className="text-gray-300 text-lg leading-relaxed mb-6" variants={itemVariants}>
              As an aspiring professional, I am an enthusiastic and dedicated individual currently pursuing my undergraduate degree at the Sri Lanka Institute of Information Technology (SLIIT). With a passion for building responsive apps, sleek UIs, and seamless user experiences, I thrive on innovation and enjoy solving problems through technology.
            </motion.p>
            
            {/* Update button styles */}
            <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
              <motion.a
                href="/placeholder/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="glass-button text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2"
              >
                <span>View Resume</span>
                <ChevronDown size={18} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Update tabs navigation */}
        <motion.div
          className="flex overflow-x-auto gap-8 mb-10 border-b border-white/10 pb-2 no-scrollbar"
          variants={itemVariants}
        >
          {["about", "education", "experience", "activities"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === tab ? "active" : "inactive"}
              whileHover="hover"
              className="px-1 py-2 font-medium uppercase text-lg whitespace-nowrap text-white/70 hover:text-white transition-colors"
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Update content styles */}
        <motion.div
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="min-h-[400px] modern-card p-8 rounded-2xl"
        >
          {/* About Tab */}
          {activeTab === "about" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <User size={18} className="gradient-text" /> Core Skills
                </h3>
                <motion.ul className="flex flex-wrap gap-3 mb-8">
                  {skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={tagVariants}
                      whileHover="hover"
                      className="glass-button text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Languages size={18} className="gradient-text" /> Languages
                </h3>
                <motion.div className="flex gap-3 mb-8" variants={itemVariants}>
                  {languages.map((lang, i) => (
                    <span key={i} className="glass-button text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                      {lang}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Cpu size={18} className="gradient-text" /> Technologies
                </h3>
                <motion.div className="flex flex-wrap gap-3 mb-8">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      custom={index}
                      variants={tagVariants}
                      whileHover="hover"
                      className="glass-button text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                    >
                      {tech.icon} {tech.name}
                    </motion.span>
                  ))}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Phone size={18} className="gradient-text" /> Contact Information
                </h3>
                <motion.div className="space-y-3">
                  <motion.div
                    className="flex items-center gap-2 text-gray-300 font-medium"
                    whileHover={{ x: 5, color: "#3b82f6" }}
                  >
                    <Phone size={16} className="w-5" />
                    <span>+76 934 6516</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-gray-300 font-medium"
                    whileHover={{ x: 5, color: "#3b82f6" }}
                  >
                    <Mail size={16} className="w-5" />
                    <span>sathufit@gmail.com</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-gray-300 font-medium"
                    whileHover={{ x: 5, color: "#3b82f6" }}
                  >
                    <MapPin size={16} className="w-5" />
                    <span>20 Siri Dhammissara Dodanduwa</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-12">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-8 border-l-4 border-white/10"
                >
                  <motion.div
                    className="absolute left-[-12px] top-0 w-5 h-5 rounded-none bg-gradient-to-r from-indigo-500 to-pink-500"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                      <p className="gradient-text">{edu.degree}</p>
                      <p className="text-gray-300 mt-1">{edu.details}</p>
                    </div>
                    <div className="text-white font-bold bg-gradient-to-r from-indigo-500 to-pink-500 px-3 py-1 rounded-lg md:ml-4 inline-block">
                      {edu.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-10">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative bg-white/10 rounded-lg p-6 border border-white/10 hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    className="absolute -right-2 -top-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold text-sm px-3 py-1 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.period}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-gray-300 mt-1">{exp.organization}</p>
                  <motion.div
                    className="w-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mt-4 group-hover:w-full transition-all duration-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {/* Activities Tab */}
          {activeTab === "activities" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -5, boxShadow: "5px 5px 0px #000000" }}
                  className="bg-white/10 rounded-lg p-4 border border-white/10 flex items-start gap-4 transition-all duration-300"
                >
                  <div className="mt-1 text-gradient">
                    {i === 0 ? <Anchor size={20} /> :
                     i === 1 ? <Shell size={20} /> :
                     i === 2 ? <Waves size={20} /> :
                     <Trophy size={20} />}
                  </div>
                  <div>
                    <p className="text-gray-300">{activity}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                className="md:col-span-2 mt-6 bg-white/10 p-6 rounded-lg border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-center text-gray-300 font-bold">
                  "I am committed to learning and growth, excited to embark on new ventures and contribute to the success of any organization I join."
                </p>
                <div className="flex justify-center mt-4">
                  <motion.div
                    className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500"
                    animate={{ width: [20, 80, 20] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}