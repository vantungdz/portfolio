import "./globals.css";
import type { ReactNode } from "react";
import ScrollBackground from "@/components/ScrollBackground";

export const metadata = {
  title: "My Portfolio",
  description: "Creative developer portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body> 
      <ScrollBackground />
      {children}
      </body>
    </html>
  );
}
