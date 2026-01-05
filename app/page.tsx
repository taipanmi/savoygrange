"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedWork } from "@/lib/works";

export default function Home() {
  const featuredWork = getFeaturedWork();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
            Savoy Grange
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-md mx-auto">
            Visual artist exploring the intersection of form, light, and emotion
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-px h-8 bg-border" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      {featuredWork && (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-xs text-muted uppercase tracking-widest mb-8 block">
              Featured Work
            </span>

            <Link href={`/works/${featuredWork.slug}`} className="group block">
              <div className="relative aspect-[16/10] md:aspect-[21/9] bg-border/20 overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
                <motion.div
                  className="w-full h-full bg-muted/10 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-muted text-sm">
                    [ Image: {featuredWork.title} ]
                  </span>
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-light mb-2 group-hover:text-muted transition-colors">
                    {featuredWork.title}
                  </h2>
                  <p className="text-muted">
                    {featuredWork.category} — {featuredWork.year}
                  </p>
                </div>
                <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                  View project →
                </span>
              </div>
            </Link>
          </motion.div>
        </section>
      )}

      {/* Brief About Section */}
      <section className="min-h-[50vh] flex items-center px-6 md:px-16 py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-muted">
            Creating visual narratives that speak to the quiet moments between
            the obvious.{" "}
            <Link href="/about" className="text-foreground hover:underline">
              Learn more about my practice →
            </Link>
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <span>© {new Date().getFullYear()} Savoy Grange</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
