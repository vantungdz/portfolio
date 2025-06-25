"use client";
import { motion } from "framer-motion";
import Signature from "./Signature";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen snap-start py-20 px-6 bg-[#0e0e0e] text-white flex items-center"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-gray-400">
            Whether you have an idea, a project, or just want to say hi — I’m always open to
            opportunities and collaboration. Just fill out the form and let’s connect!
          </p>

          <div className="space-y-2 text-gray-300 text-sm">
            <p><span className="text-indigo-400 font-medium">Email:</span> tungdo.dev@example.com</p>
            <p><span className="text-indigo-400 font-medium">Location:</span> Ho Chi Minh City, Vietnam</p>
            <p><span className="text-indigo-400 font-medium">Available for:</span> Freelance & Full-time</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              {
                icon: <FaGithub />,
                label: "GitHub",
                href: "https://github.com/your-github",
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                href: "https://linkedin.com/in/your-linkedin",
              },
              {
                icon: <FaFacebook />,
                label: "Facebook",
                href: "https://facebook.com/your-facebook",
              },
              {
                icon: <FaInstagram />,
                label: "Instagram",
                href: "https://instagram.com/your-instagram",
              },
              {
                icon: <FaEnvelope />,
                label: "Email",
                href: "mailto:tungdo.dev@example.com",
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  boxShadow: "0px 0px 8px rgba(99,102,241,0.8)", // indigo glow
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group text-2xl text-gray-400 hover:text-indigo-400 transition"
              >
                {item.icon}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-sm bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg"
        >
          <input
            className="w-full p-3 rounded bg-black/40 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your name"
            type="text"
            required
          />
          <input
            className="w-full p-3 rounded bg-black/40 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your email"
            type="email"
            required
          />
          <textarea
            rows={5}
            className="w-full p-3 rounded bg-black/40 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your message"
            required
          />
          <button
            type="submit"
            className="bg-indigo-500 w-full py-3 rounded hover:bg-indigo-600 transition font-semibold tracking-wide"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Signature */}
      <div className="mt-16 w-full flex justify-center col-span-2">
        <Signature />
      </div>
    </section>
  );
}
