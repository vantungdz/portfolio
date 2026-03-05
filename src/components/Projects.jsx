"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import ProjectCard from "./ProjectCard";
import { FaFilter, FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";

const projects = [
  {
    title: "Tomaho Soft",
    description: "Enterprise management system covering accounting, warehouse, and business process workflows.",
    image: "/images/tomaho.png",
    liveUrl: "https://github.com/your-user/portfolio",
    githubUrl: "https://github.com/your-user/portfolio",
    category: "Enterprise",
    technologies: ["React", "TypeScript", "Redux", "Node.js", "PostgreSQL"],
    features: ["User Management", "Inventory Control", "Financial Reports", "Workflow Automation"],
    year: "2024"
  },
  {
    title: "KingFood Mart",
    description: "Supermarket inventory management UI — filter, search, and update product data efficiently.",
    image: "/images/kingfood.png",
    liveUrl: "https://github.com/your-user/portfolio",
    githubUrl: "https://github.com/your-user/portfolio",
    category: "E-commerce",
    technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
    features: ["Product Management", "Search & Filter", "Inventory Tracking", "Responsive Design"],
    year: "2023"
  },
  {
    title: "FUJIA - Banking System",
    description: "Modern banking system frontend with NextJS, TypeScript, Redux, unit testing and dynamic forms.",
    image: "/images/dashboard.png",
    liveUrl: "https://github.com/your-user/portfolio",
    githubUrl: "https://github.com/your-user/portfolio",
    category: "Finance",
    technologies: ["Next.js", "TypeScript", "Redux", "Jest", "Tailwind CSS"],
    features: ["Account Management", "Transaction History", "Security Features", "Real-time Updates"],
    year: "2023"
  },
  {
    title: "NEOHOP - Hotel System",
    description: "Hotel management software refactored from VB to Angular; includes design, testing, and manual QA.",
    image: "/images/ecommerce.jpeg",
    liveUrl: "https://github.com/your-user/portfolio",
    githubUrl: "https://github.com/your-user/portfolio",
    category: "Hospitality",
    technologies: ["Angular", "TypeScript", "Bootstrap", "REST API"],
    features: ["Room Booking", "Guest Management", "Billing System", "Admin Dashboard"],
    year: "2022"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase professional experience and skills using Next.js, Framer Motion.",
    image: "/images/portfolio.jpg",
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/your-user/portfolio",
    category: "Personal",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "GSAP"],
    features: ["Responsive Design", "Smooth Animations", "Contact Form", "Project Showcase"],
    year: "2024"
  },
  {
    title: "Task Management App",
    description: "A modern task management application with real-time collaboration and progress tracking.",
    image: "/images/dashboard.png",
    liveUrl: "https://github.com/your-user/portfolio",
    githubUrl: "https://github.com/your-user/portfolio",
    category: "Productivity",
    technologies: ["React", "Firebase", "Material-UI", "Real-time DB"],
    features: ["Task Creation", "Team Collaboration", "Progress Tracking", "Notifications"],
    year: "2023"
  }
];

const categories = ["All", "Enterprise", "E-commerce", "Finance", "Hospitality", "Personal", "Productivity"];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProjects = projects
    .filter(project => activeCategory === "All" || project.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "newest") return b.year - a.year;
      if (sortBy === "oldest") return a.year - b.year;
      return a.title.localeCompare(b.title);
    });

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="min-h-screen snap-start w-full bg-black text-white py-20 px-4 pt-24"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          id="projects-heading"
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-indigo-500">Projects</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          A curated collection of my best work, showcasing diverse skills and problem-solving abilities.
        </motion.p>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="newest" className="bg-gray-800 text-white">Newest First</option>
              <option value="oldest" className="bg-gray-800 text-white">Oldest First</option>
              <option value="name" className="bg-gray-800 text-white">Name A-Z</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Project Count */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-8"
      >
        <p className="text-gray-400 text-center">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
              category={project.category}
              technologies={project.technologies}
              year={project.year}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
          <p className="text-gray-400">Try adjusting your filters to see more projects.</p>
        </motion.div>
      )}

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <FaGithub className="text-sm" />
          View All Projects on GitHub
        </motion.button>
      </motion.div>

      {/* Modal hiển thị chi tiết */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
