import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import ScrollBackground from "@/components/ScrollBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Creative developer portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body> <ScrollBackground />
      {children}</body>
    </html>
  );
}
