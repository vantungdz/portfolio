import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Tung Do - Senior Frontend Developer | React, TypeScript, Next.js",
  description: "Passionate Senior Frontend Developer with 4+ years of experience building scalable web applications. Expert in React, TypeScript, and modern web technologies. Available for freelance and full-time opportunities.",
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
  metadataBase: new URL('https://your-portfolio-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tung Do - Senior Frontend Developer",
    description: "Passionate Senior Frontend Developer with 4+ years of experience building scalable web applications. Expert in React, TypeScript, and modern web technologies.",
    url: 'https://your-portfolio-domain.com', // Replace with your actual domain
    siteName: "Tung Do Portfolio",
    images: [
      {
        url: '/images/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Tung Do - Senior Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tung Do - Senior Frontend Developer",
    description: "Passionate Senior Frontend Developer with 4+ years of experience building scalable web applications.",
    images: ['/images/avatar.jpg'],
    creator: '@your_twitter_handle', // Replace with your Twitter handle
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
  verification: {
    google: 'your-google-verification-code', // Replace with your Google Search Console verification code
    yandex: 'your-yandex-verification-code', // Optional
    yahoo: 'your-yahoo-verification-code', // Optional
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#6366f1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tung Do",
              "jobTitle": "Senior Frontend Developer",
              "description": "Passionate Senior Frontend Developer with 4+ years of experience building scalable web applications",
              "url": "https://your-portfolio-domain.com", // Replace with your actual domain
              "image": "https://your-portfolio-domain.com/images/avatar.jpg", // Replace with your actual domain
              "sameAs": [
                "https://github.com/vantungdz",
                "https://www.linkedin.com/in/t%C3%B9ng-%C4%91%E1%BB%97-v%C4%83n-475b8637a/",
                "https://twitter.com/your-twitter"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ho Chi Minh City",
                "addressCountry": "Vietnam"
              },
              "knowsAbout": [
                "React",
                "TypeScript",
                "Next.js",
                "JavaScript",
                "Web Development",
                "Frontend Development",
                "UI/UX Design"
              ]
            })
          }}
        />
      </head>
      <body> 
        {children}
      </body>
    </html>
  );
}
