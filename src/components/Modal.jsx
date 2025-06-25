"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-[#111] text-white rounded-xl p-6 max-w-lg w-full relative shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>

          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="rounded mb-4"
          />

          {/* Title + Description */}
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Optional Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex gap-4 mt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded transition-all"
                >
                  🔗 View Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition-all"
                >
                  💻 GitHub
                </a>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
