import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import profileImg from "@/assets/profile.png";
import { Code, User, Trophy, Cpu, Languages, Phone, Mail, MapPin, ChevronRight, ChevronDown, Anchor, Shell, Waves } from "lucide-react";
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
        visible: (i) => ({
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
        { name: "React", icon: _jsx(Code, { size: 16 }) },
        { name: "Tailwind", icon: _jsx(Code, { size: 16 }) },
        { name: "Node.js", icon: _jsx(Code, { size: 16 }) },
        { name: "MongoDB", icon: _jsx(Code, { size: 16 }) },
        { name: "TypeScript", icon: _jsx(Code, { size: 16 }) },
        { name: "Framer Motion", icon: _jsx(Code, { size: 16 }) }
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
    return (_jsxs(motion.section, { id: "about", ref: sectionRef, className: "relative min-h-screen overflow-hidden px-6 py-20 flex items-center justify-center gradient-bg", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 }, children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 opacity-30 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-pink-500/10" }), _jsx("div", { className: "absolute inset-0", style: {
                            backgroundImage: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
                        } })] }), _jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, className: "max-w-6xl w-full relative z-10", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center", children: [_jsx(motion.div, { variants: itemVariants, className: "flex justify-center relative md:col-span-5", children: _jsxs(motion.div, { whileHover: "hover", variants: imageHoverVariants, className: "relative z-10 overflow-hidden modern-card rounded-2xl", children: [_jsx("img", { src: profileImg, alt: "Sathush", className: "w-full h-full object-cover object-top" }), _jsxs(motion.div, { className: "absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity", children: [_jsx("h3", { className: "text-2xl font-bold text-white", children: "Sathush Nanayakkara" }), _jsx("p", { className: "gradient-text", children: "Software Engineering Undergraduate" })] })] }) }), _jsxs(motion.div, { variants: itemVariants, className: "md:col-span-7 modern-card p-8 rounded-2xl", children: [_jsxs(motion.h2, { className: "text-5xl font-bold mb-6 tracking-tight text-white", variants: itemVariants, children: ["About ", _jsx("span", { className: "gradient-text", children: "Me" })] }), _jsx(motion.p, { className: "text-gray-300 text-lg leading-relaxed mb-6", variants: itemVariants, children: "As an aspiring professional, I am an enthusiastic and dedicated individual currently pursuing my undergraduate degree at the Sri Lanka Institute of Information Technology (SLIIT). With a passion for building responsive apps, sleek UIs, and seamless user experiences, I thrive on innovation and enjoy solving problems through technology." }), _jsxs(motion.div, { className: "flex flex-wrap gap-3", variants: itemVariants, children: [_jsxs(MotionLink, { to: "/contact", whileHover: { scale: 1.05 }, className: "glass-button text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2", children: [_jsx("span", { children: "Contact Me" }), _jsx(ChevronRight, { size: 18 })] }), _jsxs(MotionLink, { to: "/resume", whileHover: { scale: 1.05 }, className: "glass-button text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2", children: [_jsx("span", { children: "View Resume" }), _jsx(ChevronDown, { size: 18 })] })] })] })] }), _jsx(motion.div, { className: "flex overflow-x-auto gap-8 mb-10 border-b border-white/10 pb-2 no-scrollbar", variants: itemVariants, children: ["about", "education", "experience", "activities"].map((tab) => (_jsx(motion.button, { onClick: () => setActiveTab(tab), variants: tabVariants, initial: "inactive", animate: activeTab === tab ? "active" : "inactive", whileHover: "hover", className: "px-1 py-2 font-medium uppercase text-lg whitespace-nowrap text-white/70 hover:text-white transition-colors", children: tab }, tab))) }), _jsxs(motion.div, { variants: contentVariants, initial: "hidden", animate: "visible", exit: "exit", className: "min-h-[400px] modern-card p-8 rounded-2xl", children: [activeTab === "about" && (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [_jsxs(motion.div, { variants: itemVariants, children: [_jsxs("h3", { className: "text-xl font-bold mb-4 text-white flex items-center gap-2", children: [_jsx(User, { size: 18, className: "gradient-text" }), " Core Skills"] }), _jsx(motion.ul, { className: "flex flex-wrap gap-3 mb-8", children: skills.map((skill, i) => (_jsx(motion.li, { custom: i, variants: tagVariants, whileHover: "hover", className: "glass-button text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2", children: skill }, i))) }), _jsxs("h3", { className: "text-xl font-bold mb-4 text-white flex items-center gap-2", children: [_jsx(Languages, { size: 18, className: "gradient-text" }), " Languages"] }), _jsx(motion.div, { className: "flex gap-3 mb-8", variants: itemVariants, children: languages.map((lang, i) => (_jsx("span", { className: "glass-button text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2", children: lang }, i))) })] }), _jsxs(motion.div, { variants: itemVariants, children: [_jsxs("h3", { className: "text-xl font-bold mb-4 text-white flex items-center gap-2", children: [_jsx(Cpu, { size: 18, className: "gradient-text" }), " Technologies"] }), _jsx(motion.div, { className: "flex flex-wrap gap-3 mb-8", children: technologies.map((tech, index) => (_jsxs(motion.span, { custom: index, variants: tagVariants, whileHover: "hover", className: "glass-button text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2", children: [tech.icon, " ", tech.name] }, tech.name))) }), _jsxs("h3", { className: "text-xl font-bold mb-4 text-white flex items-center gap-2", children: [_jsx(Phone, { size: 18, className: "gradient-text" }), " Contact Information"] }), _jsxs(motion.div, { className: "space-y-3", children: [_jsxs(motion.div, { className: "flex items-center gap-2 text-gray-300 font-medium", whileHover: { x: 5, color: "#3b82f6" }, children: [_jsx(Phone, { size: 16, className: "w-5" }), _jsx("span", { children: "+76 934 6516" })] }), _jsxs(motion.div, { className: "flex items-center gap-2 text-gray-300 font-medium", whileHover: { x: 5, color: "#3b82f6" }, children: [_jsx(Mail, { size: 16, className: "w-5" }), _jsx("span", { children: "sathufit@gmail.com" })] }), _jsxs(motion.div, { className: "flex items-center gap-2 text-gray-300 font-medium", whileHover: { x: 5, color: "#3b82f6" }, children: [_jsx(MapPin, { size: 16, className: "w-5" }), _jsx("span", { children: "20 Siri Dhammissara Dodanduwa" })] })] })] })] })), activeTab === "education" && (_jsx("div", { className: "space-y-12", children: education.map((edu, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.2 }, className: "relative pl-8 border-l-4 border-white/10", children: [_jsx(motion.div, { className: "absolute left-[-12px] top-0 w-5 h-5 rounded-none bg-gradient-to-r from-indigo-500 to-pink-500", animate: {
                                                scale: [1, 1.2, 1],
                                            }, transition: { duration: 2, repeat: Infinity } }), _jsxs("div", { className: "flex flex-col md:flex-row md:justify-between md:items-start gap-2", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-white", children: edu.institution }), _jsx("p", { className: "gradient-text", children: edu.degree }), _jsx("p", { className: "text-gray-300 mt-1", children: edu.details })] }), _jsx("div", { className: "text-white font-bold bg-gradient-to-r from-indigo-500 to-pink-500 px-3 py-1 rounded-lg md:ml-4 inline-block", children: edu.period })] })] }, i))) })), activeTab === "experience" && (_jsx("div", { className: "space-y-10", children: experience.map((exp, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.2 }, className: "group relative bg-white/10 rounded-lg p-6 border border-white/10 hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300", children: [_jsx(motion.div, { className: "absolute -right-2 -top-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold text-sm px-3 py-1 rounded-lg", whileHover: { scale: 1.05 }, children: exp.period }), _jsx("h3", { className: "text-xl font-bold text-white group-hover:text-gradient transition-colors duration-300", children: exp.role }), _jsx("p", { className: "text-gray-300 mt-1", children: exp.organization }), _jsx(motion.div, { className: "w-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mt-4 group-hover:w-full transition-all duration-500", initial: { width: 0 }, whileInView: { width: "100%" }, transition: { delay: 0.3, duration: 0.8 } })] }, i))) })), activeTab === "activities" && (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [activities.map((activity, i) => (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: i * 0.15 }, whileHover: { y: -5, boxShadow: "5px 5px 0px #000000" }, className: "bg-white/10 rounded-lg p-4 border border-white/10 flex items-start gap-4 transition-all duration-300", children: [_jsx("div", { className: "mt-1 text-gradient", children: i === 0 ? _jsx(Anchor, { size: 20 }) :
                                                    i === 1 ? _jsx(Shell, { size: 20 }) :
                                                        i === 2 ? _jsx(Waves, { size: 20 }) :
                                                            _jsx(Trophy, { size: 20 }) }), _jsx("div", { children: _jsx("p", { className: "text-gray-300", children: activity }) })] }, i))), _jsxs(motion.div, { className: "md:col-span-2 mt-6 bg-white/10 p-6 rounded-lg border border-white/10", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, children: [_jsx("p", { className: "text-center text-gray-300 font-bold", children: "\"I am committed to learning and growth, excited to embark on new ventures and contribute to the success of any organization I join.\"" }), _jsx("div", { className: "flex justify-center mt-4", children: _jsx(motion.div, { className: "h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500", animate: { width: [20, 80, 20] }, transition: { duration: 2, repeat: Infinity } }) })] })] }))] }, activeTab)] })] }));
}
