"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getPostsBySlugs, getPostUrl, getPostInsight, BLOG_BASE_URL } from "@/data/blog";

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function getFocusables(container) {
  if (!container) return [];
  const nodes = container.querySelectorAll(FOCUSABLE);
  return Array.from(nodes).filter(
    (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
  );
}

export default function Modal({ isOpen, onClose, project }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen || !project) return;

    closeButtonRef.current?.focus();

    const container = dialogRef.current;
    if (!container) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = getFocusables(container);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener("keydown", onKeyDown);
    return () => container.removeEventListener("keydown", onKeyDown);
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.2 }}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="relative w-full max-w-lg rounded-xl bg-[#111] p-6 text-white shadow-lg"
          initial={{ scale: reducedMotion ? 1 : 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: reducedMotion ? 1 : 0.9 }}
          transition={
            reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300 }
          }
          onClick={(e) => e.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute right-3 top-2 text-2xl text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#111]"
            aria-label="Close modal"
          >
            ×
          </button>

          <img
            src={project.image}
            alt={project.title}
            className="mb-4 rounded"
          />

          <h3 id="modal-title" className="mb-2 text-2xl font-bold">
            {project.title}
          </h3>
          <p id="modal-description" className="mb-4 text-gray-300">
            {project.description}
          </p>

          {project.features && project.features.length > 0 && (
            <ul className="mb-4 list-disc list-inside space-y-1 text-sm text-gray-400">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}

          {(() => {
            const relatedPosts = project.relatedPostSlugs?.length
              ? getPostsBySlugs(project.relatedPostSlugs).filter((post) => getPostUrl(post.slug))
              : [];
            const maxInsights = 3;
            const displayPosts = relatedPosts.slice(0, maxInsights);
            const hasMore = relatedPosts.length > maxInsights;

            return (
              <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white" id="modal-insights-heading">
                  <span className="text-primary" aria-hidden>📖</span>
                  Engineering Insights
                </h4>
                {displayPosts.length > 0 ? (
                  <>
                    <p className="mb-3 text-xs text-gray-400">
                      How I approached this project — case studies and technical breakdowns.
                    </p>
                    <ul className="space-y-3" aria-labelledby="modal-insights-heading">
                      {displayPosts.map((post) => (
                        <li key={post.slug}>
                          <a
                            href={getPostUrl(post.slug)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-lg border border-white/10 bg-white/[0.02] p-3 transition-colors hover:border-primary/20 hover:bg-white/[0.04]"
                            aria-label={`Read full breakdown: ${post.title}`}
                          >
                            <span className="block text-sm font-medium text-white group-hover:text-primary transition-colors">
                              {post.title}
                            </span>
                            <p className="mt-1 text-xs leading-relaxed text-gray-400">
                              {getPostInsight(post)}
                            </p>
                            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                              Read full breakdown
                              <FaExternalLinkAlt className="h-3 w-3 shrink-0" />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    {hasMore && BLOG_BASE_URL && (
                      <a
                        href={BLOG_BASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors"
                        aria-label={`View all ${relatedPosts.length} articles on blog`}
                      >
                        View all {relatedPosts.length} articles →
                      </a>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-gray-500 italic">
                    Technical breakdown coming soon.
                  </p>
                )}
              </div>
            );
          })()}

          <div className="mt-4 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#111]"
              >
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#111]"
              >
                GitHub
              </a>
            )}
            {!project.liveUrl && !project.githubUrl && project.codeNote && (
              <span className="text-sm italic text-gray-500">{project.codeNote}</span>
            )}
            {project.caseStudy && project.slug && (
              <a
                href={`/projects/${project.slug}`}
                className="ml-auto inline-flex items-center gap-1.5 rounded border border-primary/40 bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#111]"
              >
                <FaBookOpen className="h-3.5 w-3.5" />
                Full Case Study
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
