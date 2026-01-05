import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Savoy Grange",
  description: "Artist portfolio showcasing creative works",
  keywords: ["artist", "portfolio", "creative", "art", "gallery"],
  authors: [{ name: "Savoy Grange" }],
  openGraph: {
    title: "Savoy Grange",
    description: "Artist portfolio showcasing creative works",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <CustomCursor />
        <Navigation />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
