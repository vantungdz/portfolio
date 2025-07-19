"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Frontend Developer",
    duration: "2023 - Present",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.",
    achievements: [
      "Led a team of 5 developers to rebuild the main product dashboard",
      "Improved application performance by 40% through code optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored 3 junior developers and conducted code reviews"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "Jest"],
    logo: "🏢"
  },
  {
    id: 2,
    company: "Digital Innovations Ltd",
    position: "Frontend Developer",
    duration: "2021 - 2023",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description: "Developed responsive web applications and collaborated with design and backend teams to deliver high-quality products.",
    achievements: [
      "Built 10+ responsive web applications for various clients",
      "Reduced bundle size by 30% through code splitting",
      "Implemented accessibility features improving WCAG compliance",
      "Collaborated with UX team to improve user experience"
    ],
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Git", "Figma"],
    logo: "💻"
  },
  {
    id: 3,
    company: "StartUp Ventures",
    position: "Junior Developer",
    duration: "2020 - 2021",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description: "Started my journey as a developer, learning modern web technologies and contributing to various projects.",
    achievements: [
      "Developed 5+ small to medium web applications",
      "Learned modern JavaScript frameworks and tools",
      "Participated in code reviews and team meetings",
      "Contributed to open-source projects"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"],
    logo: "🚀"
  }
];

const ExperienceCard = ({ experience, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 ${
        isActive ? 'bg-indigo-500/20 border-indigo-500' : 'bg-white/5 border-white/10'
      } border rounded-2xl p-6 hover:bg-white/10`}
    >
      {/* Active indicator */}
      {isActive && (
        <div className="absolute -right-2 -top-2 w-4 h-4 bg-indigo-500 rounded-full animate-pulse" />
      )}

      <div className="flex items-start gap-4">
        <div className="text-3xl">{experience.logo}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">
            {experience.position}
          </h3>
          <p className="text-indigo-400 font-medium mb-2">
            {experience.company}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-xs" />
              {experience.duration}
            </div>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-xs" />
              {experience.location}
            </div>
            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs">
              {experience.type}
            </span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceDetail = ({ experience }) => {
  if (!experience) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {experience.position}
          </h2>
          <p className="text-2xl text-indigo-400 font-medium">
            {experience.company}
          </p>
        </div>
        <div className="text-6xl">{experience.logo}</div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Key Achievements */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaBriefcase className="text-indigo-400" />
            Key Achievements
          </h3>
          <ul className="space-y-3">
            {experience.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm border border-indigo-500/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Duration & Location */}
          <div className="mt-6 space-y-2 text-gray-400">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-indigo-400" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-400" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section
      id="experience"
      className="min-h-screen snap-start w-full bg-[#0f0f0f] text-white py-20 px-6 pt-24"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-indigo-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development, 
            showcasing growth, achievements, and continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isActive={selectedExperience?.id === experience.id}
                onClick={() => setSelectedExperience(experience)}
              />
            ))}
          </div>

          {/* Experience Detail */}
          <div className="lg:sticky lg:top-8">
            <ExperienceDetail experience={selectedExperience} />
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "4+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 