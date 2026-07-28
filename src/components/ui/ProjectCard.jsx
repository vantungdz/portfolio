"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaBookOpen } from "react-icons/fa";
import { trackEvent } from "@/lib/analytics";
import { getPostsBySlugs, getPostUrl, getPostInsight } from "@/data/blog";

export default function ProjectCard({
  title,
  image,
  description,
  domain,
  ownership,
  technologies,
  year,
  liveUrl,
  githubUrl,
  relatedPostSlugs,
  onClick,
}) {
  const handleCardClick = (e) => {
    if (e.target.closest("a")) return;
    trackEvent("project_click", { projectName: title });
    onClick?.();
  };

  const isClient = ownership === "client";
  const hasLinks = liveUrl || githubUrl;
  const relatedPosts = relatedPostSlugs?.length ? getPostsBySlugs(relatedPostSlugs) : [];
  const firstPost = relatedPosts[0];

  return (
    <article
      onClick={handleCardClick}
      className="group relative flex h-full flex-col cursor-pointer rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-900/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {isClient && (
            <span className="rounded-md bg-amber-400/90 px-2.5 py-1 text-xs font-medium text-black backdrop-blur-sm">
              Client Project
            </span>
          )}
          <span className="rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-black backdrop-blur-sm">
            {domain}
          </span>
          <span className="rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-white">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-400">
          {description}
        </p>

        {/* Technologies */}
        {technologies?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded bg-white/10 px-2 py-0.5 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="rounded bg-white/5 px-2 py-0.5 text-xs text-gray-500">
                +{technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Engineering Insights: one-line proof + CTA when related posts exist */}
        {firstPost && (
          <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.02] p-2.5">
            <p className="text-xs leading-snug text-gray-400 line-clamp-2">
              {getPostInsight(firstPost)}
            </p>
            <a
              href={getPostUrl(firstPost.slug)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              aria-label={`Read full breakdown: ${firstPost.title}`}
            >
              <FaBookOpen className="h-3 w-3 shrink-0" aria-hidden />
              Read full breakdown
              <FaExternalLinkAlt className="h-2.5 w-2.5 shrink-0" aria-hidden />
            </a>
          </div>
        )}

        {/* Actions */}
        <div className="mt-5 flex gap-3 border-t border-white/10 pt-4">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" />
              Demo
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white/30"
            >
              <FaGithub className="h-3.5 w-3.5" />
              Code
            </Link>
          )}
          {!hasLinks && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                trackEvent("project_click", { projectName: title });
                onClick?.();
              }}
              className="w-full rounded-lg border border-white/20 bg-white/5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              View details
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
