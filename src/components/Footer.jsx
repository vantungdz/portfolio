"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/your-github",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/your-linkedin",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaFacebook />,
      href: "https://facebook.com/your-facebook",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/your-instagram",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:tungdo.dev@example.com",
      label: "Email",
      color: "hover:text-indigo-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold">
                TungDo<span className="text-indigo-500">.</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A passionate frontend developer dedicated to creating exceptional digital experiences. 
              Specializing in React, TypeScript, and modern web technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    boxShadow: "0px 0px 20px rgba(99,102,241,0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.5, delay: index * 0.1 }}
                  className={`text-xl text-gray-400 transition-colors duration-300 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>📍 Ho Chi Minh City, Vietnam</p>
              <p>📧 tungdo.dev@example.com</p>
              <p>📱 +84 123 456 789</p>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to my newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Tung Do. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>in Vietnam</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 