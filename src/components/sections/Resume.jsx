"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { getResumeExperiences, education, resumeSkillTags, resumeCounters } from "@/data/experience";

export default function Resume() {
  const experiences = getResumeExperiences();

  return (
    <section id="resume" className="min-h-screen snap-start py-20 px-6 bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Resume / Experience
        </motion.h2>

        {/* COUNTERS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
          <div>
            <p className="text-4xl font-bold text-primary">
              <CountUp end={resumeCounters.yearsExperience} duration={2} />+
            </p>
            <p className="text-gray-400 mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">
              <CountUp end={resumeCounters.majorProjects} duration={2} />+
            </p>
            <p className="text-gray-400 mt-1">Major Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">
              <CountUp end={resumeCounters.companies} duration={2} />
            </p>
            <p className="text-gray-400 mt-1">Companies</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">
              <CountUp end={resumeCounters.commitment} duration={2} />%
            </p>
            <p className="text-gray-400 mt-1">Commitment</p>
          </div>
        </div>

        {/* EXPERIENCE + EDUCATION + SKILLS */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* EXPERIENCE */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="relative border-l border-gray-700 pl-6 space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-3 top-1 w-3 h-3 bg-primary rounded-full" />
                  <h4 className="text-lg font-semibold">{exp.role}</h4>
                  <p className="text-primary text-sm font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.time}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EDUCATION + SKILLS */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              {education.map((edu, idx) => (
                <div key={idx}>
                  <p className="text-lg font-medium">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.time}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {resumeSkillTags.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-sm text-white px-3 py-1 rounded-full hover:bg-primary transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
