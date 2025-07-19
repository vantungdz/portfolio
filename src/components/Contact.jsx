"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Signature from "./Signature";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCheck,
  FaTimes
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "tungdo.dev@example.com",
      href: "mailto:tungdo.dev@example.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+84 123 456 789",
      href: "tel:+84123456789"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/your-github",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-linkedin",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      href: "https://facebook.com/your-facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://instagram.com/your-instagram",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen snap-start py-20 px-6 bg-[#0e0e0e] text-white flex items-center pt-24"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-indigo-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have an idea, a project, or just want to say hi — I'm always open to
            opportunities and collaboration. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                If you have a project that needs some creative thinking, I'd love to hear about it.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-2xl text-indigo-400">{info.icon}</div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
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
                    className={`relative group text-2xl text-gray-400 transition-colors duration-300 ${social.color}`}
                  >
                    {social.icon}
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-sm bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-green-400 font-medium">Available for new opportunities</p>
                  <p className="text-gray-400 text-sm">Response time: Within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-4 rounded-lg bg-black/40 text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.name ? 'border-red-500' : 'border-white/10 focus:border-indigo-500'
                }`}
                placeholder="Your full name"
                type="text"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-1 flex items-center gap-1"
                >
                  <FaTimes className="text-xs" />
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 rounded-lg bg-black/40 text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.email ? 'border-red-500' : 'border-white/10 focus:border-indigo-500'
                }`}
                placeholder="your.email@example.com"
                type="email"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-1 flex items-center gap-1"
                >
                  <FaTimes className="text-xs" />
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-4 rounded-lg bg-black/40 text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.subject ? 'border-red-500' : 'border-white/10 focus:border-indigo-500'
                }`}
                placeholder="What's this about?"
                type="text"
              />
              {errors.subject && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-1 flex items-center gap-1"
                >
                  <FaTimes className="text-xs" />
                  {errors.subject}
                </motion.p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full p-4 rounded-lg bg-black/40 text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                  errors.message ? 'border-red-500' : 'border-white/10 focus:border-indigo-500'
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-1 flex items-center gap-1"
                >
                  <FaTimes className="text-xs" />
                  {errors.message}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-lg font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : submitStatus === "success" ? (
                <>
                  <FaCheck className="text-sm" />
                  Message Sent!
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
              >
                <p className="text-green-400 font-medium">Thank you for your message!</p>
                <p className="text-gray-400 text-sm">I'll get back to you within 24 hours.</p>
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 w-full flex justify-center"
        >
          <Signature />
        </motion.div>
      </div>
    </section>
  );
}
