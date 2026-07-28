/**
 * Shared layout constants and scroll utilities.
 * Single source of truth for header height and section scrolling.
 */

export const HEADER_HEIGHT = 64;

/** Section IDs used for navigation and scroll targets. Must match id on each <section>. */
export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "ai-workflow",
  "experience",
  "projects",
  "learning",
  "blog",
  "resume",
  "contact",
];

/**
 * Scrolls the page so the element with the given id is in view, accounting for fixed header.
 * @param {string} id - Element id (e.g. "about", "contact")
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - HEADER_HEIGHT,
      behavior: "smooth",
    });
  }
}

/**
 * Maps section id to nav label (e.g. "resume" -> "Resume").
 */
export function sectionIdToLabel(id) {
  if (id === "resume") return "Resume";
  if (id === "ai-workflow") return "AI Workflow";
  if (id === "learning") return "Learning";
  return id.charAt(0).toUpperCase() + id.slice(1);
}
