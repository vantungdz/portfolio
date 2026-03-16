"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import BlogCard from "@/components/ui/BlogCard";
import { getLatestArticles, BLOG_BASE_URL } from "@/data/blog";

const LATEST_COUNT = 3;

export default function Blog() {
  const latestArticles = getLatestArticles(LATEST_COUNT);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="min-h-screen snap-start bg-black py-20 px-6 pt-24"
    >
      <div className="mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {latestArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard article={article} slug={article.slug} />
            </motion.div>
          ))}
        </div>

        {latestArticles.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-6xl" aria-hidden>
              📝
            </p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              No articles yet
            </h3>
            <p className="mt-2 text-gray-500">
              Check back later or visit the blog.
            </p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center md:mt-20"
        >
          <a
            href={BLOG_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
          >
            View all articles
            <FaExternalLinkAlt className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
