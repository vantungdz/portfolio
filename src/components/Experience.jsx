"use client";

import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    company: "ISB Vietnam",
    position: "Frontend Engineer",
    duration: "Jul 2022 – Present",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Frontend Engineer working on enterprise software projects, participating in implementation and coding phases while continuously researching and applying new technologies.",
    achievements: [
      "Participated in implementation and coding phases of software development",
      "Performed unit testing and debugging to ensure application quality",
      "Researched and applied new technologies when required by projects",
      "Updated and improved applications based on customer requirements",
    ],
    technologies: [
      "ReactJS",
      "TypeScript",
      "Next.js",
      "Redux",
      "Redux-Saga",
    ],
    logo: "🏢",
  },
  {
    id: 2,
    company: "BUSO",
    position: "Frontend Engineer",
    duration: "Oct 2020 – Dec 2021",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Developed interfaces for enterprise management applications, implementing and improving features based on customer feedback and requirements.",
    achievements: [
      "Developed interfaces for enterprise management applications",
      "Updated and improved application features based on customer requirements",
      "Collaborated with team members to improve UI functionality",
    ],
    technologies: ["ReactJS", "JavaScript", "HTML", "CSS"],
    logo: "💻",
  },
];

const stats = [
  { number: "4+", label: "Years Experience" },
  { number: "10+", label: "Projects Completed" },
  { number: "15+", label: "Technologies" },
  { number: "2", label: "Companies" },
];

function TimelineCard({ experience, isLast }) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline dot */}
      <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-black text-xl shadow-[0_0_0_4px_rgba(0,0,0,1)]">
        <span aria-hidden>{experience.logo}</span>
      </div>

      {/* Card */}
      <div
        className={`min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-black/20 sm:p-6 ${isLast ? "pb-0" : "pb-8 sm:pb-10"
          }`}
      >
        {/* Job title – most prominent */}
        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
          {experience.position}
        </h3>

        {/* Company + duration */}
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-sm font-medium text-white/70">
            {experience.company}
          </span>
          <span className="text-xs text-gray-500">·</span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <FaCalendarAlt className="h-3.5 w-3.5" />
            {experience.duration}
          </span>
        </div>

        {/* Location + type */}
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="h-3.5 w-3.5" />
            {experience.location}
          </span>
          <span className="rounded bg-white/10 px-2 py-0.5 text-gray-400">
            {experience.type}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          {experience.description}
        </p>

        {/* Key achievements */}
        {experience.achievements?.length > 0 && (
          <div className="mt-5">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <FaBriefcase className="h-3.5 w-3.5" />
              Key achievements
            </h4>
            <ul className="mt-3 space-y-2">
              {experience.achievements.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {experience.technologies?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="min-h-screen snap-start bg-black py-20 px-6 pt-24"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <header className="mb-12 text-center md:mb-16">
          <h2
            id="experience-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Work <span className="text-white/80">Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
            My professional journey in software development, showcasing growth,
            achievements, and continuous learning.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-white/10 sm:left-6"
            aria-hidden
          />

          <ul className="space-y-0">
            {experiences.map((exp, index) => (
              <li key={exp.id}>
                <TimelineCard
                  experience={exp}
                  isLast={index === experiences.length - 1}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-5 text-center transition-colors hover:bg-white/[0.04] sm:px-6 sm:py-6"
            >
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {stat.number}
              </div>
              <div className="mt-1 text-xs text-gray-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
