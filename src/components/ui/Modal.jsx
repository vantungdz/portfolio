"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-4 flex gap-4">
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
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
