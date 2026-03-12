import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const themeInitScript = `
(() => {
  try {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    document.documentElement.classList.toggle("dark", isDark);
  } catch {}
})();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Remnis",
  description: "Context engine for macOS",
  openGraph: {
    title: "Remnis",
    description: "Local work memory for macOS developers.",
    images: [
      {
        url: "/Light%20mode%20Logo.png",
        alt: "Remnis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remnis",
    description: "Local work memory for macOS developers.",
    images: ["/Light%20mode%20Logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/dark-favicon.ico",
        media: "(prefers-color-scheme: light)", // colors are inverted
      },
    ],
    apple: [{ url: "/icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
