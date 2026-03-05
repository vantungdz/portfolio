"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaAngular,
  FaRobot
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiVuedotjs, SiSocketdotio, SiExpress, SiJira, SiPrettier, SiEslint } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 88, color: "#e2e8f0" },
      { name: "Vue.js", icon: <SiVuedotjs />, level: 80, color: "#42B883" },
      { name: "Angular", icon: <FaAngular />, level: 70, color: "#DD0031" },
      { name: "TypeScript", icon: <SiTypescript />, level: 90, color: "#3178C6" },
      { name: "JavaScript", icon: <FaJs />, level: 92, color: "#F7DF1E" },
      { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, level: 85, color: "#06B6D4" },
    ]
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", icon: <SiRedux />, level: 88, color: "#764ABC" },
      { name: "Redux-Saga", icon: <SiRedux />, level: 82, color: "#999999" },
      { name: "Vuex", icon: <SiVuedotjs />, level: 78, color: "#42B883" },
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, level: 75, color: "#339933" },
      { name: "Express", icon: <SiExpress />, level: 70, color: "#e2e8f0" },
      { name: "REST APIs", icon: <FaDatabase />, level: 85, color: "#6366f1" },
      { name: "JWT Auth", icon: <FaDatabase />, level: 80, color: "#eab308" },
      { name: "RBAC", icon: <FaDatabase />, level: 78, color: "#f97316" },
      { name: "Socket.IO", icon: <SiSocketdotio />, level: 75, color: "#e2e8f0" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, level: 75, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, level: 72, color: "#4479A1" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 70, color: "#336791" },
    ]
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git", icon: <FaGitAlt />, level: 90, color: "#F05032" },
      { name: "ESLint", icon: <SiEslint />, level: 85, color: "#4B32C3" },
      { name: "Prettier", icon: <SiPrettier />, level: 85, color: "#F7B93E" },
      { name: "Jira", icon: <SiJira />, level: 80, color: "#0052CC" },
      { name: "Redmine", icon: <FaDatabase />, level: 75, color: "#9b2335" },
      { name: "VS Code", icon: <FaDatabase />, level: 95, color: "#007ACC" },
    ]
  },
  {
    category: "AI Tools",
    items: [
      { name: "Cursor", icon: <FaRobot />, level: 85, color: "#6366f1" },
      { name: "GitHub Copilot", icon: <FaRobot />, level: 82, color: "#e2e8f0" },
      { name: "Gemini", icon: <FaRobot />, level: 80, color: "#4285F4" },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-[border-color,transform] duration-300 hover:scale-[1.02] hover:border-indigo-500/50">
        {/* Glow effect – CSS only */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <div
              className="text-4xl transition-transform duration-300 group-hover:scale-110"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-400">
              {skill.level}%
            </span>
          </div>

          <h3 className="mb-3 text-lg font-semibold text-white">
            {skill.name}
          </h3>

          <div className="mb-2 h-2 w-full rounded-full bg-gray-700">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="h-2 rounded-full transition-[box-shadow] duration-300 group-hover:shadow-md"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
              }}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-400">
            <span>Beginner</span>
            <span>Expert</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="min-h-screen snap-start w-full bg-[#0a0a0a] text-white py-20 px-4 pt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-indigo-500">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical expertise spans across modern web technologies,
            with a focus on creating scalable and maintainable applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skills.map((category) => (
            <button
              key={category.category}
              type="button"
              onClick={() => setActiveCategory(category.category)}
              className={`rounded-full px-6 py-3 font-medium transition-[background-color,color,transform] duration-300 hover:scale-[1.02] ${activeCategory === category.category
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
            >
              {category.category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills
            .find(cat => cat.category === activeCategory)
            ?.items.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">
              Always Learning & Growing
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm constantly exploring new technologies and best practices to stay current
              with industry trends. Currently diving deep into AI/ML integration,
              microservices architecture, and advanced React patterns.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">
                🚀 Performance Optimization
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                🎨 UI/UX Design
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">
                🔒 Security Best Practices
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                📱 Responsive Design
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 