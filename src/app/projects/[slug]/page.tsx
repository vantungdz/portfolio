import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { personalInfo } from "@/data/personal";

export function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.title} — Case Study | ${personalInfo.name}`;
  const description = project.caseStudy?.problem ?? project.description;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: project.image }],
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const isClient = project.ownership === "client";

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <FaArrowLeft className="h-3 w-3" />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            {isClient && (
              <span className="rounded-md bg-amber-400/90 px-2.5 py-1 text-xs font-medium text-black">
                Client Project
              </span>
            )}
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-gray-300">
              {project.domain}
            </span>
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-gray-300">
              {project.year}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            {project.description}
          </p>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-900/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              quality={90}
              priority
            />
          </div>

          {project.technologies?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-white/10 px-2.5 py-1 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-200"
              >
                <FaExternalLinkAlt className="h-3.5 w-3.5" />
                Live Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <FaGithub className="h-3.5 w-3.5" />
                View Code
              </Link>
            )}
            {!project.liveUrl && !project.githubUrl && project.codeNote && (
              <span className="text-sm italic text-gray-500">
                {project.codeNote}
              </span>
            )}
          </div>
        </header>

        {/* Case study body */}
        {caseStudy ? (
          <div className="mt-14 space-y-12">
            <section>
              <h2 className="text-xl font-semibold text-white">The Problem</h2>
              <p className="mt-3 leading-relaxed text-gray-400">
                {caseStudy.problem}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Challenges</h2>
              <ul className="mt-3 space-y-2">
                {caseStudy.challenges.map((c, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed text-gray-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            {caseStudy.decisions && caseStudy.decisions.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-white">
                  Key Decisions &amp; Trade-offs
                </h2>
                <div className="mt-4 space-y-4">
                  {caseStudy.decisions.map((d, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-white/10 bg-white/[0.02] p-4"
                    >
                      <p className="font-medium text-white">{d.decision}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                        {d.why}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-xl font-semibold text-white">Results</h2>
              <ul className="mt-3 space-y-2">
                {caseStudy.results.map((r, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed text-gray-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Lessons Learned
              </h2>
              <ul className="mt-3 space-y-2">
                {caseStudy.lessonsLearned.map((l, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed text-gray-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ) : (
          project.features && (
            <section className="mt-14">
              <h2 className="text-xl font-semibold text-white">Features</h2>
              <ul className="mt-3 space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed text-gray-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          )
        )}

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <FaArrowLeft className="h-3 w-3" />
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
