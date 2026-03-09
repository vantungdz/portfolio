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
import { skillsCategories } from "@/data/skills";

const SKILL_ICONS = {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaAngular,
  FaRobot,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVuedotjs,
  SiSocketdotio,
  SiExpress,
  SiJira,
  SiPrettier,
  SiEslint,
};

const SkillCard = ({ skill, index }) => {
  const IconComponent = SKILL_ICONS[skill.iconKey] || FaDatabase;
  const icon = <IconComponent />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-[border-color,transform] duration-300 hover:scale-[1.02] hover:border-primary/50">
        {/* Glow effect – CSS only */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <div
              className="text-4xl transition-transform duration-300 group-hover:scale-110"
              style={{ color: skill.color }}
            >
              {icon}
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
            Skills & <span className="text-primary">Technologies</span>
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
          {skillsCategories.map((category) => (
            <button
              key={category.category}
              type="button"
              onClick={() => setActiveCategory(category.category)}
              className={`rounded-full px-6 py-3 font-medium transition-[background-color,color,transform] duration-300 hover:scale-[1.02] ${activeCategory === category.category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
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
          {skillsCategories
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
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Always Learning & Growing
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm constantly exploring new technologies and best practices to stay current
              with industry trends. Currently diving deep into AI/ML integration,
              microservices architecture, and advanced React patterns.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">
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
