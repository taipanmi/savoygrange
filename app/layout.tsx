import type { Metadata } from "next";
import { Rubik, Francois_One } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const francoisOne = Francois_One({
  variable: "--font-francois",
  subsets: ["latin"],
  weight: "400",
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
        className={`${rubik.variable} ${francoisOne.variable} antialiased bg-background text-foreground`}
      >
        <CustomCursor />
        <Navigation />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
