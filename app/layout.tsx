import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./main.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agent HUB - Internal AI Agent Marketplace",
  description: "Discover, understand, and reuse AI agents across your enterprise. The single source of truth for all intelligent systems.",
  keywords: ["AI Agents", "Enterprise", "Marketplace", "Automation", "Internal Tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
