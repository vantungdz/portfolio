"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { scrollToSection } from "@/lib/layout";

const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn how to structure large React applications using TypeScript, including best practices for state management, component composition, and performance optimization.",
    image: "/images/dashboard.png",
    category: "React",
    readTime: "8 min read",
    date: "2024-01-15",
    tags: ["React", "TypeScript", "Architecture"],
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Web Development: AI-Powered Tools",
    excerpt:
      "Exploring how artificial intelligence is transforming the way we build and maintain web applications, from code generation to automated testing.",
    image: "/images/portfolio.jpg",
    category: "AI/ML",
    readTime: "6 min read",
    date: "2024-01-10",
    tags: ["AI", "Web Development", "Automation"],
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "A comprehensive guide to improving loading speeds, reducing bundle sizes, and implementing advanced caching strategies in Next.js projects.",
    image: "/images/ecommerce.jpeg",
    category: "Performance",
    readTime: "10 min read",
    date: "2024-01-05",
    tags: ["Next.js", "Performance", "Optimization"],
  },
  {
    id: 4,
    title: "Design Systems: From Theory to Implementation",
    excerpt:
      "How to create and maintain a robust design system that scales with your product and team, including component libraries and documentation.",
    image: "/images/kingfood.png",
    category: "Design",
    readTime: "12 min read",
    date: "2023-12-28",
    tags: ["Design Systems", "UI/UX", "Components"],
  },
  {
    id: 5,
    title: "State Management Patterns in Modern React",
    excerpt:
      "Comparing different state management solutions and patterns, from useState to Redux Toolkit and Zustand, with real-world examples.",
    image: "/images/tomaho.png",
    category: "React",
    readTime: "9 min read",
    date: "2023-12-20",
    tags: ["React", "State Management", "Redux"],
  },
  {
    id: 6,
    title: "Microservices Architecture for Frontend Teams",
    excerpt:
      "How frontend teams can benefit from microservices architecture, including module federation, independent deployments, and team autonomy.",
    image: "/images/dashboard.png",
    category: "Architecture",
    readTime: "11 min read",
    date: "2023-12-15",
    tags: ["Microservices", "Architecture", "Team Structure"],
  },
];

const categories = [
  "All",
  "React",
  "AI/ML",
  "Performance",
  "Design",
  "Architecture",
];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function scrollToContact() {
  scrollToSection("contact");
}

function ArticleCard({ article, isFeatured = false }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={scrollToContact}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToContact();
        }
      }}
      className={`group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gray-900/50">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            isFeatured
              ? "(max-width: 1024px) 100vw, 66vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-black backdrop-blur-sm">
            {article.category}
          </span>
          {isFeatured && (
            <span className="rounded-md bg-amber-400/90 px-2.5 py-1 text-xs font-medium text-black backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <header className="flex flex-1 flex-col p-5">
        {/* Meta */}
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

        {/* Title */}
        <h3 className="mt-3 text-lg font-semibold leading-tight tracking-tight text-white transition-colors group-hover:text-white md:text-xl">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-400">
          {article.excerpt}
        </p>

        {/* Tags */}
        {article.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded bg-white/10 px-2 py-0.5 text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more */}
        <div className="mt-5 border-t border-white/10 pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
            Read more
            <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </header>
    </article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featuredArticle = articles.find((a) => a.featured);
  const displayArticles =
    activeCategory === "All" && featuredArticle
      ? [featuredArticle, ...articles.filter((a) => !a.featured)]
      : filteredArticles;

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="min-h-screen snap-start bg-black py-20 px-6 pt-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <header className="mb-12 text-center md:mb-16">
          <h2
            id="blog-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Latest <span className="text-white/80">Articles</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
            Insights and tutorials on web development, design patterns, and
            emerging technologies.
          </p>
        </header>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {displayArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              isFeatured={
                activeCategory === "All" && article.featured === true
              }
            />
          ))}
        </div>

        {/* Empty state */}
        {displayArticles.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-6xl" aria-hidden>
              📝
            </p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              No articles found
            </h3>
            <p className="mt-2 text-gray-500">
              Try selecting a different category.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center md:mt-20">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <h3 className="text-xl font-semibold text-white md:text-2xl">
              Stay updated
            </h3>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Subscribe for the latest articles and tutorials.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
                Get in touch
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
