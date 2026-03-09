import type { Testimonial, TestimonialStat } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp Solutions",
    avatar: "👩‍💼",
    rating: 5,
    text: "Tung is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He transformed our dashboard into a modern, user-friendly interface that our customers love.",
    project: "Enterprise Dashboard Redesign",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "Digital Innovations Ltd",
    avatar: "👨‍💻",
    rating: 5,
    text: "Working with Tung was a game-changer for our development team. His expertise in React and modern web technologies helped us build scalable applications that exceeded our expectations. Highly recommended!",
    project: "E-commerce Platform",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "UX Director",
    company: "StartUp Ventures",
    avatar: "👩‍🎨",
    rating: 5,
    text: "Tung's understanding of both technical implementation and user experience is remarkable. He not only built our application flawlessly but also provided valuable insights that improved our overall product design.",
    project: "Mobile-First Web App",
  },
  {
    id: 4,
    name: "David Kim",
    position: "Senior Developer",
    company: "Innovation Labs",
    avatar: "👨‍🔬",
    rating: 5,
    text: "As a fellow developer, I'm impressed by Tung's clean code practices and architectural decisions. He's a great team player who always goes the extra mile to ensure project success.",
    project: "Real-time Collaboration Tool",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Project Manager",
    company: "Global Solutions Inc",
    avatar: "👩‍💼",
    rating: 5,
    text: "Tung delivered our project on time and within budget, exceeding all our requirements. His communication skills and technical expertise make him an invaluable asset to any development team.",
    project: "Financial Management System",
  },
];

export const testimonialStats: TestimonialStat[] = [
  { number: "100%", label: "Client Satisfaction" },
  { number: "50+", label: "Projects Delivered" },
  { number: "15+", label: "Happy Clients" },
  { number: "4.9/5", label: "Average Rating" },
];
