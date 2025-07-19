"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large React applications using TypeScript, including best practices for state management, component composition, and performance optimization.",
    image: "/images/dashboard.png",
    category: "React",
    readTime: "8 min read",
    date: "2024-01-15",
    tags: ["React", "TypeScript", "Architecture"],
    featured: true
  },
  {
    id: 2,
    title: "The Future of Web Development: AI-Powered Tools",
    excerpt: "Exploring how artificial intelligence is transforming the way we build and maintain web applications, from code generation to automated testing.",
    image: "/images/portfolio.jpg",
    category: "AI/ML",
    readTime: "6 min read",
    date: "2024-01-10",
    tags: ["AI", "Web Development", "Automation"]
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    excerpt: "A comprehensive guide to improving loading speeds, reducing bundle sizes, and implementing advanced caching strategies in Next.js projects.",
    image: "/images/ecommerce.jpeg",
    category: "Performance",
    readTime: "10 min read",
    date: "2024-01-05",
    tags: ["Next.js", "Performance", "Optimization"]
  },
  {
    id: 4,
    title: "Design Systems: From Theory to Implementation",
    excerpt: "How to create and maintain a robust design system that scales with your product and team, including component libraries and documentation.",
    image: "/images/kingfood.png",
    category: "Design",
    readTime: "12 min read",
    date: "2023-12-28",
    tags: ["Design Systems", "UI/UX", "Components"]
  },
  {
    id: 5,
    title: "State Management Patterns in Modern React",
    excerpt: "Comparing different state management solutions and patterns, from useState to Redux Toolkit and Zustand, with real-world examples.",
    image: "/images/tomaho.png",
    category: "React",
    readTime: "9 min read",
    date: "2023-12-20",
    tags: ["React", "State Management", "Redux"]
  },
  {
    id: 6,
    title: "Microservices Architecture for Frontend Teams",
    excerpt: "How frontend teams can benefit from microservices architecture, including module federation, independent deployments, and team autonomy.",
    image: "/images/dashboard.png",
    category: "Architecture",
    readTime: "11 min read",
    date: "2023-12-15",
    tags: ["Microservices", "Architecture", "Team Structure"]
  }
];

const categories = ["All", "React", "AI/ML", "Performance", "Design", "Architecture"];

const ArticleCard = ({ article, isFeatured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group cursor-pointer ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              isFeatured ? 'h-64' : 'h-48'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-indigo-500/90 backdrop-blur-md text-white text-xs font-medium rounded-full">
              {article.category}
            </span>
          </div>

          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-yellow-500/90 backdrop-blur-md text-black text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-xs" />
              {new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="text-xs" />
              {article.readTime}
            </div>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors ${
            isFeatured ? 'text-xl' : 'text-lg'
          }`}>
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full border border-indigo-500/30"
              >
                {tag}
              </span>
            ))}
            {article.tags.length > 2 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                +{article.tags.length - 2} more
              </span>
            )}
          </div>

          {/* Read More */}
          <div className="flex items-center justify-between">
            <span className="text-indigo-400 text-sm font-medium group-hover:text-indigo-300 transition-colors">
              Read Article
            </span>
            <FaArrowRight className="text-indigo-400 text-sm group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = articles.filter(article => 
    activeCategory === "All" || article.category === activeCategory
  );

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <section
      id="blog"
      className="min-h-screen snap-start w-full bg-[#0a0a0a] text-white py-20 px-4 pt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-indigo-500">Articles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on modern web development, 
            design patterns, and emerging technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Article */}
          {featuredArticle && activeCategory === "All" && (
            <ArticleCard article={featuredArticle} isFeatured={true} />
          )}
          
          {/* Regular Articles */}
          {regularArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
            <p className="text-gray-400">Try selecting a different category.</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for the latest articles, tutorials, and insights 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaExternalLinkAlt className="text-sm" />
                View All Articles
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-indigo-500 text-indigo-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 