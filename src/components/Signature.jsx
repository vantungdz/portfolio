"use client";
import { motion } from "framer-motion";

export default function Signature() {
  return (
    <motion.svg
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-80 h-24"
    >
      <motion.text
        x="10"
        y="50"
        fill="white"
        fontFamily="'Ballet', cursive"
        fontSize="50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Do Van Tung
      </motion.text>
    </motion.svg>
  );
}
