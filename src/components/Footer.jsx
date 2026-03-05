"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { socialLinksConfig, contactInfoConfig } from "@/config/socialLinks";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Main content */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="#home"
              className="text-xl font-semibold text-white transition-opacity hover:opacity-90"
            >
              TungDo<span className="text-white/50">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Frontend developer focused on React, TypeScript, and modern web
              apps.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links + Contact */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Links
              </h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Contact
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href={`mailto:${contactInfoConfig.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {contactInfoConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfoConfig.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {contactInfoConfig.phone}
                  </a>
                </li>
                <li>{contactInfoConfig.location}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {year} Tung Do. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-gray-500">
            Made with <FaHeart className="h-3.5 w-3.5 text-red-500/90" /> in
            Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
