"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { socialLinksConfig, contactInfoConfig } from "@/config/socialLinks";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const resourceLinks = [
  { name: "Resume", href: "#resume" },
  { name: "CV", href: "#cv" },
  { name: "Portfolio", href: "#home" },
  { name: "Blog Posts", href: "#blog" },
];

const socialLinks = [
  { icon: FaGithub, href: socialLinksConfig.github, label: "GitHub" },
  { icon: FaLinkedin, href: socialLinksConfig.linkedin, label: "LinkedIn" },
  { icon: FaFacebook, href: socialLinksConfig.facebook, label: "Facebook" },
  { icon: FaInstagram, href: socialLinksConfig.instagram, label: "Instagram" },
  {
    icon: FaEnvelope,
    href: `mailto:${contactInfoConfig.email}`,
    label: "Email",
  },
];

function ColumnHeading({ children }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
      {children}
    </h3>
  );
}

function LinkList({ links, className = "" }) {
  return (
    <ul className={`mt-4 space-y-3 ${className}`}>
      {links.map(({ name, href }) => (
        <li key={name}>
          <Link
            href={href}
            className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/[0.06] bg-[#0b0b0c] text-white overflow-hidden"
      role="contentinfo"
    >
      {/* Subtle gradient glow at top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />
      {/* Very subtle background gradient for depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 – Brand: logo as primary, tagline, then social */}
          <div className="lg:col-span-1 flex flex-col">
            <Link
              href="#home"
              className="inline-flex transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0c] w-fit"
              aria-label="Home"
            >
              <Image
                src="/images/logo-footer.jpg"
                alt="DVT"
                width={192}
                height={64}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-500 max-w-[280px]">
              Building modern web experiences with React, TypeScript and clean
              UI.
            </p>
            <div className="mt-8 flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Navigation */}
          <div>
            <ColumnHeading>Navigation</ColumnHeading>
            <LinkList links={navigationLinks} />
          </div>

          {/* Column 3 – Resources */}
          <div>
            <ColumnHeading>Resources</ColumnHeading>
            <LinkList links={resourceLinks} />
          </div>

          {/* Column 4 – Contact */}
          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={`mailto:${contactInfoConfig.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
                >
                  <FaEnvelope className="h-4 w-4 shrink-0 text-gray-500" />
                  {contactInfoConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfoConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
                >
                  <FaPhone className="h-4 w-4 shrink-0 text-gray-500" />
                  {contactInfoConfig.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <FaMapMarkerAlt className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                <span>{contactInfoConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {year} Do Van Tung. All rights reserved.
          </p>
          <span className="hidden sm:block h-4 w-px bg-white/10" aria-hidden />
          <p className="flex items-center gap-1.5 text-sm text-gray-500">
            Made with <FaHeart className="h-3.5 w-3.5 text-red-500/90" /> in
            Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
