# Portfolio Architecture Refactor – Summary

## 1. New Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollProgress.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Blog.jsx
│   │   ├── CV.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Signature.jsx
│   ├── ui/
│   │   ├── Modal.jsx
│   │   ├── ProjectCard.jsx
│   │   └── BlogCard.jsx
│   ├── background/
│   │   ├── AnimatedBackground.jsx
│   │   └── ScrollBackground.jsx
│   └── system/
│       └── PerformanceMonitor.jsx
├── config/
│   └── socialLinks.js
├── data/
│   ├── personal.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── blog.ts
│   ├── skills.ts
│   ├── testimonials.ts
│   └── contact.ts
├── types/
│   ├── project.ts
│   ├── experience.ts
│   ├── blog.ts
│   ├── skill.ts
│   └── testimonial.ts
├── hooks/
│   └── useReducedMotion.js
└── lib/
    └── layout.js
```

---

## 2. Files Moved (no duplicates created)

| From | To |
|------|----|
| `components/Header.jsx` | `components/layout/Header.jsx` |
| `components/Footer.jsx` | `components/layout/Footer.jsx` |
| `components/ScrollProgress.jsx` | `components/layout/ScrollProgress.jsx` |
| `components/Hero.jsx` | `components/sections/Hero.jsx` |
| `components/About.jsx` | `components/sections/About.jsx` |
| `components/Skills.jsx` | `components/sections/Skills.jsx` |
| `components/Experience.jsx` | `components/sections/Experience.jsx` |
| `components/Projects.jsx` | `components/sections/Projects.jsx` |
| `components/Testimonials.jsx` | `components/sections/Testimonials.jsx` |
| `components/Blog.jsx` | `components/sections/Blog.jsx` |
| `components/CV.jsx` | `components/sections/CV.jsx` |
| `components/Resume.jsx` | `components/sections/Resume.jsx` |
| `components/Contact.jsx` | `components/sections/Contact.jsx` |
| `components/Signature.jsx` | `components/sections/Signature.jsx` |
| `components/Modal.jsx` | `components/ui/Modal.jsx` |
| `components/ProjectCard.jsx` | `components/ui/ProjectCard.jsx` |
| `components/AnimatedBackground.jsx` | `components/background/AnimatedBackground.jsx` |
| `components/ScrollBackground.jsx` | `components/background/ScrollBackground.jsx` |
| `components/PerformanceMonitor.jsx` | `components/system/PerformanceMonitor.jsx` |

**New file (extracted, not duplicated):**  
- `components/ui/BlogCard.jsx` – extracted from the former inline `ArticleCard` in `Blog.jsx`.  
- All section and data files listed below.

---

## 3. New Data Files

| File | Purpose |
|------|--------|
| `data/personal.ts` | Already existed; used for schema + CV/hero. |
| `data/experience.ts` | Single source for work experience: `experiences`, `experienceStats`, `getResumeExperiences()`, `education`, `resumeSkillTags`, `resumeCounters`. |
| `data/projects.ts` | `projects`, `projectCategories` (typed with `Project`). |
| `data/blog.ts` | `articles` (with `slug`), `blogCategories` (typed with `BlogPost`). |
| `data/skills.ts` | `skillsCategories` with `iconKey` per skill (icons resolved in Skills.jsx). |
| `data/testimonials.ts` | `testimonials`, `testimonialStats`. |
| `data/contact.ts` | Re-exports `socialLinksConfig` and `contactInfoConfig` from `@/config/socialLinks`. |

---

## 4. New Type Files

| File | Main types |
|------|------------|
| `types/project.ts` | `Project` |
| `types/experience.ts` | `Experience`, `ExperienceStat`, `ResumeExperience`, `Education` |
| `types/blog.ts` | `BlogPost` |
| `types/skill.ts` | `SkillItem`, `SkillCategory` |
| `types/testimonial.ts` | `Testimonial`, `TestimonialStat` |

---

## 5. No Duplicate Components

- Every component exists in exactly one place under `components/` (layout, sections, ui, background, system).
- BlogCard is the only new component; it was extracted from Blog’s inline ArticleCard and is used only by `sections/Blog.jsx`.
- No “NewHero”, “HeroSection”, or parallel copies were added.

---

## 6. UI Unchanged

- Layout, section order, and content are the same.
- Animations (Framer Motion, reduced motion) unchanged.
- Styles use the same classes; `indigo-500` / `#6366f1` were replaced with `primary` where appropriate.
- Build completes successfully; no intentional behavior or visual change.

---

## 7. Standardized Imports

- All imports use the `@/` alias: `@/components/...`, `@/data/...`, `@/types/...`, `@/lib/...`, `@/hooks/...`, `@/config/...`.
- The previous relative import in Contact (`../config/socialLinks`) was removed; Contact now uses `@/data/contact`.

---

## 8. Color System

- `tailwind.config.js`: `primary: { DEFAULT: "#6366f1" }`.
- Components use `text-primary`, `bg-primary`, `border-primary`, `shadow-primary/25`, etc., instead of raw `indigo-500` or `#6366f1` where it made sense.
- `globals.css` still uses `#6366f1` for scrollbar and focus where theme() in plain CSS is not used.

---

## 9. Unification of Duplicated Content

- **Experience / Resume / CV**  
  - One source: `data/experience.ts` (`experiences` with optional `resumeTime` and `resumeDescription`).  
  - **Experience** section: uses `experiences` and `experienceStats`.  
  - **Resume** section: uses `getResumeExperiences()`, `education`, `resumeSkillTags`, `resumeCounters`.  
  - **CV** section: uses `personalInfo`, `contactInfoConfig`, `experiences`, `education`, `projects` (first 3) for preview and PDF generation.

---

## 10. Blog Data Shape

- `data/blog.ts` defines each post with: `id`, `title`, `slug`, `excerpt`, `image`, `category`, `tags`, `date`, `readTime`, optional `featured`.
- Ready for future routing (e.g. `/blog/[slug]`) without changing the data structure.
