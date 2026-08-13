import "./globals.css";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import ScrollBackground from "@/components/background/ScrollBackground";
import PerformanceMonitor from "@/components/system/PerformanceMonitor";
import { getPersonSchema } from "@/data/personal";

export const metadata = {
  title: "Tung Do - Frontend Developer | React, TypeScript, Next.js",
  description: "Passionate Frontend Developer with 4+ years of experience building scalable web applications. Expert in React, TypeScript, and modern web technologies. Available for freelance and full-time opportunities.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Web Developer",
    "UI/UX Developer",
    "JavaScript Developer",
    "Ho Chi Minh City",
    "Vietnam",
    "Freelance Developer"
  ].join(", "),
  authors: [{ name: "Tung Do" }],
  creator: "Tung Do",
  publisher: "Tung Do",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio-virid-pi-75.vercel.app/'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tung Do - Frontend Developer",
    description: "Passionate Frontend Developer with 4+ years of experience building scalable web applications. Expert in React, TypeScript, and modern web technologies.",
    url: 'https://portfolio-virid-pi-75.vercel.app/', // Replace with your actual domain
    siteName: "Tung Do Portfolio",
    images: [
      {
        url: '/images/ava.png',
        width: 1200,
        height: 630,
        alt: 'Tung Do - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tung Do - Senior Frontend Developer",
    description: "Passionate Senior Frontend Developer with 4+ years of experience building scalable web applications.",
    images: ['/images/ava.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/icon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/images/icon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#6366f1" />
        
        {/* Structured Data (Schema.org Person) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
        />
      </head>
      <body>
        <PerformanceMonitor />
        <ScrollBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
