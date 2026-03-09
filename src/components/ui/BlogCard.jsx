"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaExternalLinkAlt } from "react-icons/fa";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogCard({ article, blogUrl }) {
  return (
    <article
      className="group relative flex h-full flex-col cursor-default rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-900/50">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badge: category */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-black backdrop-blur-sm">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content - aligned with ProjectCard structure */}
      <div className="flex flex-1 flex-col p-5">
        {/* Meta: date + read time */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
          <time dateTime={article.date} className="flex items-center gap-1.5">
            <FaCalendarAlt className="h-3.5 w-3.5" />
            {formatDate(article.date)}
          </time>
          <span className="flex items-center gap-1.5">
            <FaClock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold tracking-tight text-white group-hover:text-white">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-400">
          {article.excerpt}
        </p>

        {/* Tags - same style as ProjectCard technologies */}
        {article.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {article.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded bg-white/10 px-2 py-0.5 text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}
            {article.tags.length > 4 && (
              <span className="rounded bg-white/5 px-2 py-0.5 text-xs text-gray-500">
                +{article.tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* CTA: link to external blog */}
        {blogUrl && (
          <div className="mt-5 border-t border-white/10 pt-4">
            <Link
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white/30 w-full sm:w-auto"
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" />
              Read on blog
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
