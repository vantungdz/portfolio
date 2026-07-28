"use client";
import { motion } from "framer-motion";
import { FaRobot, FaSitemap, FaCloud, FaTachometerAlt } from "react-icons/fa";
import { currentlyLearning } from "@/data/learning";

const ICONS = [FaRobot, FaSitemap, FaCloud, FaTachometerAlt];

export default function CurrentlyLearning() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="min-h-screen snap-start w-full bg-black py-20 px-4 pt-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            id="learning-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Currently <span className="text-primary">Learning</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            What I&apos;m actively growing into right now.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {currentlyLearning.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
