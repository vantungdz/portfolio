"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, image, description, category, technologies, year, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotate: 0.3 }}
      transition={{ type: "spring", stiffness: 200 }}
      onClick={onClick}
      className="relative group cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-transparent hover:border-transparent hover:bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20 shadow-md hover:shadow-xl transition-all duration-500"
    >
      {/* Gradient border glow layer */}
      <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

      {/* Main content inside glow */}
      <div className="relative z-10">
        {/* Image */}
        <div className="relative h-64">
          <Image
            src={image}
            alt={`${title} - ${category} project`}
            fill
            className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-indigo-500/90 backdrop-blur-md text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-medium rounded-full">
              {year}
            </span>
          </div>

          {/* View Details Button */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl mb-2">👁️</div>
              <span className="text-white font-medium">View Details</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies?.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full border border-indigo-500/30"
              >
                {tech}
              </span>
            ))}
            {technologies?.length > 3 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                +{technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-indigo-500/20 text-indigo-400 py-2 px-3 rounded-lg text-sm font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                // Handle live demo
              }}
            >
              <FaExternalLinkAlt className="text-xs" />
              Demo
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gray-500/20 text-gray-400 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                // Handle GitHub
              }}
            >
              <FaGithub className="text-xs" />
              Code
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
