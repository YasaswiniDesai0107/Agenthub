import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./main.css";
import { AuthProvider } from "@/contexts/AuthContext";
import GlobalLayout from "@/components/GlobalLayout";

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
  title: "AgentHub - Agents Catalog for Enterprise",
  description: "Discover, deploy, and manage AI agents across your enterprise. The single source of truth for all intelligent systems.",
  keywords: ["AI Agents", "Enterprise", "AgentHub", "Automation", "Internal Tools", "Agent Management"],
  openGraph: {
    title: "AgentHub - Agents Catalog for Enterprise",
    description: "Enterprise AI Agent Management Platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        <AuthProvider>
          <GlobalLayout>
            {children}
          </GlobalLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
