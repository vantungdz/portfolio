"use client";
import { motion } from "framer-motion";
import { FaSearch, FaBug, FaFileAlt } from "react-icons/fa";
import { aiWorkflowItems } from "@/data/aiWorkflow";

const ICONS = [FaSearch, FaBug, FaFileAlt];

export default function AIWorkflow() {
  return (
    <section
      id="ai-workflow"
      aria-labelledby="ai-workflow-heading"
      className="min-h-screen snap-start w-full bg-[#121212] py-20 px-4 pt-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            id="ai-workflow-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            AI <span className="text-primary">Workflow</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            AI is a tool I collaborate with, not a black box I trust blindly. Every suggestion gets verified before it ships.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {aiWorkflowItems.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
