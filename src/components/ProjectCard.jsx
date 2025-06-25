"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, image, description, onClick }) {
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
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-64 rounded-2xl group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay content on hover */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end rounded-2xl">
          <h3 className="text-xl font-semibold text-white drop-shadow">{title}</h3>
          <p className="text-sm mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
