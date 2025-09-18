// frontend/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar"; // FIX: match filename
import Footer from "@/components/Footer";

// Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Global metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.surajpoudel.com.np"),
  title: {
    default: "Suraj Poudel — Portfolio & Blog",
    template: "%s | Suraj Poudel",
  },
  description: "Personal portfolio + blog built with Next.js, Sanity, and TailwindCSS.",
  openGraph: {
    title: "Suraj Poudel — Portfolio & Blog",
    description: "Personal portfolio + blog built with Next.js, Sanity, and TailwindCSS.",
    url: "https://www.surajpoudel.com.np",
    siteName: "Suraj Poudel",
    images: [
      {
        url: "/og-image.png", // create later
        width: 1200,
        height: 630,
        alt: "Suraj Poudel Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yourtwitter",
    title: "Suraj Poudel — Portfolio & Blog",
    description: "Portfolio + blog built with Next.js, Sanity, and TailwindCSS.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-1 relative container mx-auto px-6 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
