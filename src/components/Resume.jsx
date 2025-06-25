"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaDownload } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "ISB Vietnam",
    time: "07/2022 – Present",
    description:
      "Participated in implementation, unit testing, and tech research. Updated UI according to customer requirements.",
  },
  {
    role: "Frontend Engineer",
    company: "BUSO",
    time: "10/2020 – 12/2021",
    description:
      "Developed and enhanced business management applications' interfaces based on customer needs.",
  },
];

const education = [
  {
    school: "VNUHCM - University Of Science",
    degree: "Bachelor of Computer Science",
    time: "Graduated 08/2020",
  },
];

const skills = [
  "JavaScript", "TypeScript", "ReactJS", "NextJS", "Redux", "VueJS",
  "Angular", "HTML/CSS", "Tailwind", "Formik + Yup", "Jest",
  "MongoDB", "MySQL", "PostgreSQL",
  "Git", "SVN", "Jira", "EsLint", "Prettier",
];

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen snap-start py-20 px-6 bg-black text-white">
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
            <p className="text-4xl font-bold text-indigo-500">
              <CountUp end={4} duration={2} />+
            </p>
            <p className="text-gray-400 mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-500">
              <CountUp end={4} duration={2} />+
            </p>
            <p className="text-gray-400 mt-1">Major Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-500">
              <CountUp end={3} duration={2} />
            </p>
            <p className="text-gray-400 mt-1">Companies</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-500">
              <CountUp end={100} duration={2} />%
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
                  <div className="absolute -left-3 top-1 w-3 h-3 bg-indigo-500 rounded-full" />
                  <h4 className="text-lg font-semibold">{exp.role}</h4>
                  <p className="text-indigo-400 text-sm font-medium mb-1">{exp.company}</p>
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
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-sm text-white px-3 py-1 rounded-full hover:bg-indigo-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CV Button */}
        <div className="text-center mt-16">
          <a
            href="/cv-tungdo.pdf"
            download
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white px-6 py-3 rounded-full font-semibold shadow-md"
          >
            <FaDownload className="text-lg" />
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
