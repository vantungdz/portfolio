"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp Solutions",
    avatar: "👩‍💼",
    rating: 5,
    text: "Tung is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He transformed our dashboard into a modern, user-friendly interface that our customers love.",
    project: "Enterprise Dashboard Redesign"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "Digital Innovations Ltd",
    avatar: "👨‍💻",
    rating: 5,
    text: "Working with Tung was a game-changer for our development team. His expertise in React and modern web technologies helped us build scalable applications that exceeded our expectations. Highly recommended!",
    project: "E-commerce Platform"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "UX Director",
    company: "StartUp Ventures",
    avatar: "👩‍🎨",
    rating: 5,
    text: "Tung's understanding of both technical implementation and user experience is remarkable. He not only built our application flawlessly but also provided valuable insights that improved our overall product design.",
    project: "Mobile-First Web App"
  },
  {
    id: 4,
    name: "David Kim",
    position: "Senior Developer",
    company: "Innovation Labs",
    avatar: "👨‍🔬",
    rating: 5,
    text: "As a fellow developer, I'm impressed by Tung's clean code practices and architectural decisions. He's a great team player who always goes the extra mile to ensure project success.",
    project: "Real-time Collaboration Tool"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Project Manager",
    company: "Global Solutions Inc",
    avatar: "👩‍💼",
    rating: 5,
    text: "Tung delivered our project on time and within budget, exceeding all our requirements. His communication skills and technical expertise make him an invaluable asset to any development team.",
    project: "Financial Management System"
  }
];

const TestimonialCard = ({ testimonial, isActive, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isActive ? 1 : 0.3, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
      className={`relative ${isActive ? 'z-10' : 'z-0'}`}
    >
      <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 ${
        isActive ? 'shadow-2xl shadow-indigo-500/20' : 'shadow-lg'
      }`}>
        {/* Quote Icon */}
        <div className="text-4xl text-indigo-400 mb-4">
          <FaQuoteLeft />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-sm" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          "{testimonial.text}"
        </p>

        {/* Project Info */}
        <div className="mb-6 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
          <p className="text-indigo-400 text-sm font-medium">Project: {testimonial.project}</p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="text-3xl">{testimonial.avatar}</div>
          <div>
            <h4 className="text-white font-semibold">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.position}</p>
            <p className="text-indigo-400 text-sm font-medium">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="testimonials"
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
            Client <span className="text-indigo-500">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12">
          {/* Main Testimonial */}
          <div className="max-w-4xl mx-auto">
            <TestimonialCard 
              testimonial={testimonials[currentIndex]} 
              isActive={true} 
              index={currentIndex}
            />
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-400 p-3 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            <FaChevronLeft />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-400 p-3 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-indigo-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "100%", label: "Client Satisfaction" },
            { number: "50+", label: "Projects Delivered" },
            { number: "15+", label: "Happy Clients" },
            { number: "4.9/5", label: "Average Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and see how I can help bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 