"use client";
import { motion } from "framer-motion";

export default function Signature() {
  return (
    <motion.svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-48 h-12 text-white"
    >
      <motion.path
        d="M10 30 C 30 10, 60 50, 90 30 C 110 10, 140 50, 170 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
