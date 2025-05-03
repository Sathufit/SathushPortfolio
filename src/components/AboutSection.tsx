import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import profileImg from "@/assets/profile.png";
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
  Fish,
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
      scale: 1.05,
      boxShadow: "0 0 30px rgba(8, 145, 178, 0.4)",
      borderColor: "rgba(6, 182, 212, 0.4)",
      transition: {
        duration: 0.3
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
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
      scale: 1.1,
      backgroundColor: "#06b6d4",
      color: "#042f2e",
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
      borderBottom: "2px solid #06b6d4" 
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
    { name: "React", icon: <Code size={16} /> },
    { name: "Tailwind", icon: <Code size={16} /> },
    { name: "Node.js", icon: <Code size={16} /> },
    { name: "MongoDB", icon: <Code size={16} /> },
    { name: "TypeScript", icon: <Code size={16} /> },
    { name: "Framer Motion", icon: <Code size={16} /> }
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
      role: "Media Handler",
      organization: "Sri Lanka Schools Badminton Association",
      period: "2022-2024"
    },
    {
      role: "Social Media Handler & Live Production",
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

  // Create random light rays effect for deep sea theme
  const rays = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    rotation: i * 30,
    width: Math.random() * 40 + 20,
    delay: Math.random() * 4,
    duration: Math.random() * 8 + 6
  }));

  // Create small fish animations
  const fishElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    top: Math.random() * 80 + 10,
    delay: Math.random() * 30,
    duration: Math.random() * 40 + 30,
    direction: i % 2 === 0 ? "ltr" : "rtl"
  }));

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-blue-950 via-cyan-950 to-blue-900 text-cyan-50 px-6 py-20 flex items-center justify-center overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Underwater light rays */}
      <div className="absolute inset-0 overflow-hidden">
        {rays.map((ray) => (
          <motion.div
            key={ray.id}
            className="absolute top-0 left-1/2 h-full bg-cyan-300/5 blur-md"
            style={{
              width: `${ray.width}px`,
              transformOrigin: "top",
              rotate: `${ray.rotation}deg`
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: ray.duration,
              delay: ray.delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Animated small fish */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fishElements.map((fish) => (
          <motion.div
            key={fish.id}
            className="absolute"
            style={{
              top: `${fish.top}%`,
              left: fish.direction === "ltr" ? "-20px" : "auto",
              right: fish.direction === "rtl" ? "-20px" : "auto"
            }}
            animate={{
              [fish.direction === "ltr" ? "left" : "right"]: [
                fish.direction === "ltr" ? "-20px" : "-20px",
                fish.direction === "ltr" ? "100vw" : "100vw"
              ]
            }}
            transition={{
              duration: fish.duration,
              delay: fish.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div
              className="text-cyan-300/40"
              style={{ transform: fish.direction === "rtl" ? "scaleX(-1)" : "none" }}
            >
              <Fish size={fish.size} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Water surface waves effect at the top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2306b6d4' fill-opacity='1' d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat-x",
            backgroundSize: "100% 100%"
          }}
          animate={{
            x: [0, -1440],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230ea5e9' fill-opacity='1' d='M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,192C672,203,768,245,864,261.3C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat-x",
            backgroundSize: "120% 100%"
          }}
          animate={{
            x: [-1440, 0],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

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
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 rounded-2xl blur-3xl opacity-30"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              whileHover="hover"
              variants={imageHoverVariants}
              className="rounded-2xl w-72 h-72 md:w-90 md:h-80 relative z-10 overflow-hidden border-2 border-cyan-500/20 shadow-lg"
            >
              <img 
                src={profileImg} 
                alt="Sathush" 
                className="w-full h-full object-cover object-top rounded-2xl"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent flex flex-col justify-end p-6"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-2xl font-bold text-cyan-50">Sathush Nanayakkara</h3>
                <p className="text-cyan-300">Software Engineering Undergraduate</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="md:col-span-7">
            <motion.h2 className="text-5xl font-bold mb-6" variants={itemVariants}>
              About <span className="text-cyan-400">Me</span>
            </motion.h2>

            <motion.p className="text-cyan-100 text-lg leading-relaxed mb-6" variants={itemVariants}>
              As an aspiring professional, I am an enthusiastic and dedicated individual currently pursuing my undergraduate degree at the Sri Lanka Institute of Information Technology (SLIIT). With a passion for building responsive apps, sleek UIs, and seamless user experiences, I thrive on innovation and enjoy solving problems through technology.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-400 text-cyan-950 font-medium rounded-full flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Contact Me</span>
                <ChevronRight size={18} />
              </MotionLink>
              <MotionLink
                to="/resume"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2.5 bg-blue-900/40 backdrop-blur-sm text-cyan-100 font-medium rounded-full border border-cyan-500/20 flex items-center gap-2"
              >
                <span>View Resume</span>
                <ChevronDown size={18} />
              </MotionLink>
            </motion.div>

            <motion.div className="flex gap-2 mt-8 items-center" variants={itemVariants}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-cyan-400"
              >
                <CheckCircle size={20} />
              </motion.div>
              <span className="text-cyan-200">Available for opportunities</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Tabs Navigation */}
        <motion.div 
          className="flex overflow-x-auto gap-8 mb-10 border-b border-cyan-500/20 pb-2 no-scrollbar"
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
              className="px-1 py-2 font-medium capitalize text-lg whitespace-nowrap"
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="min-h-[400px]"
        >
          {/* About Tab */}
          {activeTab === "about" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-cyan-100 flex items-center gap-2">
                  <User size={18} className="text-cyan-400" /> Core Skills
                </h3>
                <motion.ul className="flex flex-wrap gap-3 mb-8">
                  {skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={tagVariants}
                      whileHover="hover"
                      className="bg-blue-900/40 text-cyan-100 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-500/10 shadow-sm"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>

                <h3 className="text-xl font-semibold mb-4 text-cyan-100 flex items-center gap-2">
                  <Languages size={18} className="text-cyan-400" /> Languages
                </h3>
                <motion.div className="flex gap-3 mb-8" variants={itemVariants}>
                  {languages.map((lang, i) => (
                    <span key={i} className="text-sm text-cyan-200 bg-blue-900/30 px-3 py-1 rounded-full border border-cyan-500/10">
                      {lang}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-cyan-100 flex items-center gap-2">
                  <Cpu size={18} className="text-cyan-400" /> Technologies
                </h3>
                <motion.div className="flex flex-wrap gap-3 mb-8">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      custom={index}
                      variants={tagVariants}
                      whileHover="hover"
                      className="bg-blue-900/40 text-cyan-100 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-500/10 shadow-sm flex items-center gap-1.5"
                    >
                      {tech.icon} {tech.name}
                    </motion.span>
                  ))}
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 text-cyan-100 flex items-center gap-2">
                  <Phone size={18} className="text-cyan-400" /> Contact Information
                </h3>
                <motion.div className="space-y-3">
                  <motion.div 
                    className="flex items-center gap-2 text-cyan-200"
                    whileHover={{ x: 5, color: "#06b6d4" }}
                  >
                    <Phone size={16} className="w-5" />
                    <span>+76 934 6516</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-cyan-200"
                    whileHover={{ x: 5, color: "#06b6d4" }}
                  >
                    <Mail size={16} className="w-5" />
                    <span>sathufit@gmail.com</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-cyan-200"
                    whileHover={{ x: 5, color: "#06b6d4" }}
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
                  className="relative pl-8 border-l-2 border-cyan-500/30"
                >
                  <motion.div 
                    className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0 rgba(8, 145, 178, 0.4)",
                        "0 0 20px rgba(8, 145, 178, 0.6)",
                        "0 0 0 rgba(8, 145, 178, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-50">{edu.institution}</h3>
                      <p className="text-cyan-400 font-medium">{edu.degree}</p>
                      <p className="text-cyan-200 mt-1">{edu.details}</p>
                    </div>
                    <div className="text-cyan-800 font-medium bg-cyan-400/20 px-3 py-1 rounded-full backdrop-blur-sm md:ml-4 inline-block border border-cyan-400/30">
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
                  className="group relative bg-blue-900/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm hover:bg-blue-800/30 transition-all duration-300"
                >
                  <motion.div 
                    className="absolute -right-2 -top-2 bg-gradient-to-r from-cyan-500 to-teal-400 text-cyan-950 font-medium text-sm px-3 py-1 rounded-full shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.period}
                  </motion.div>
                  <h3 className="text-xl font-bold text-cyan-50 group-hover:text-cyan-300 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-200 mt-1">{exp.organization}</p>
                  
                  <motion.div 
                    className="w-0 h-0.5 bg-cyan-400 mt-4 group-hover:w-full transition-all duration-500"
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
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -5px rgba(8, 145, 178, 0.2)" }}
                  className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20 flex items-start gap-4 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="mt-1 text-cyan-400">
                    {i === 0 ? <Anchor size={20} /> : 
                     i === 1 ? <Shell size={20} /> : 
                     i === 2 ? <Waves size={20} /> : 
                     <Trophy size={20} />}
                  </div>
                  <div>
                    <p className="text-cyan-100">{activity}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div 
                className="md:col-span-2 mt-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-center text-cyan-200 italic">
                  "I am committed to learning and growth, excited to embark on new ventures and contribute to the success of any organization I join."
                </p>
                <div className="flex justify-center mt-4">
                  <motion.div 
                    className="h-0.5 w-20 bg-cyan-400"
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