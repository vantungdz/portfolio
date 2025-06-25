"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import ProjectCard from "./ProjectCard"; // Đã sửa hiệu ứng đẹp

const projects = [
  {
    title: "Tomaho Soft",
    description:
      "Enterprise management system covering accounting, warehouse, and business process workflows.",
    image: "/images/tomaho.png",
    liveUrl: "https://github.com/your-user/portfolio", // Nếu có demo nội bộ thì bạn điền, không thì để trống
    githubUrl: "https://github.com/your-user/portfolio",
  },
  {
    title: "KingFood Mart",
    description:
      "Supermarket inventory management UI — filter, search, and update product data efficiently.",
    image: "/images/kingfood.png",
    liveUrl: "https://github.com/your-user/portfolio",
    githubUrl: "https://github.com/your-user/portfolio",
  },
  {
    title: "FUJIA - Banking System",
    description:
      "Modern banking system frontend with NextJS, TypeScript, Redux, unit testing and dynamic forms.",
    image: "/images/dashboard.png",
    liveUrl: "https://github.com/your-user/portfolio",
    githubUrl: "https://github.com/your-user/portfolio",
  },
  {
    title: "NEOHOP - Hotel System",
    description:
      "Hotel management software refactored from VB to Angular; includes design, testing, and manual QA.",
    image: "/images/ecommerce.jpeg",
    liveUrl: "https://github.com/your-user/portfolio",
    githubUrl: "https://github.com/your-user/portfolio",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio to showcase professional experience and skills using Next.js, Framer Motion.",
    image: "/images/portfolio.jpg",
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/your-user/portfolio",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen snap-start w-full bg-black text-white py-20 px-4"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          A selection of things I’ve built.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
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
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal hiển thị chi tiết */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
