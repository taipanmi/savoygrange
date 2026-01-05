"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { getFeaturedWork, works } from "@/lib/works";

export default function Home() {
  const featuredWork = getFeaturedWork();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main className="min-h-screen grain">
      {/* Hero Section - Full viewport with massive typography */}
      <section className="h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=90"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative z-10"
        >
          <h1 className="display-heading text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] mb-4">
            Savoy
          </h1>
          <h1 className="display-heading text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] -mt-4 md:-mt-8">
            Grange
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="accent-text text-xs md:text-sm text-muted mt-8 relative z-10"
        >
          Visual Artist • Creative Director
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="accent-text text-[10px] text-muted">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work - Dramatic full-width */}
      {featuredWork && (
        <section className="min-h-screen relative">
          <Link href={`/works/${featuredWork.slug}`} className="group block">
            {/* Full bleed image */}
            <div className="relative h-screen image-hover">
              <Image
                src={featuredWork.image}
                alt={featuredWork.title}
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="accent-text text-xs text-muted block mb-4">
                    Featured Work
                  </span>
                  <h2 className="display-heading text-4xl md:text-6xl lg:text-8xl mb-4 group-hover:translate-x-4 transition-transform duration-500">
                    {featuredWork.title}
                  </h2>
                  <div className="flex items-center gap-4 text-muted">
                    <span>{featuredWork.category}</span>
                    <span className="w-8 h-px bg-muted" />
                    <span>{featuredWork.year}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Works Grid Preview */}
      <section className="py-24 md:py-32 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="accent-text text-xs text-muted block mb-4">Selected Works</span>
          <div className="flex justify-between items-end">
            <h2 className="display-heading text-4xl md:text-6xl">Latest</h2>
            <Link href="/works" className="accent-text text-xs text-muted link-underline">
              View All
            </Link>
          </div>
        </motion.div>

        {/* Horizontal scrolling gallery on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto horizontal-scroll pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {works.slice(0, 2).map((work, index) => (
            <motion.article
              key={work.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[85vw] md:w-auto"
            >
              <Link href={`/works/${work.slug}`} className="group block">
                <div className="relative aspect-[4/5] mb-6 image-hover">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 group-hover:translate-x-2 transition-transform">
                  {work.title}
                </h3>
                <p className="text-sm text-muted">{work.category}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* About Teaser - Split layout */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16 px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="accent-text text-xs text-muted block mb-8">About</span>
            <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl mb-8">
              Creating
              <br />
              Visual
              <br />
              Stories
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
              Visual artist exploring the boundaries of perception through various mediums.
              My practice centers on the quiet moments—the spaces between the obvious,
              where meaning emerges from subtlety.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-4 accent-text text-sm group"
            >
              <span className="link-underline">Learn More</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 md:py-48 px-6 md:px-16 text-center border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="accent-text text-xs text-muted block mb-8">Get in Touch</span>
          <h2 className="display-heading text-5xl md:text-7xl lg:text-8xl mb-12">
            Let's Create
            <br />
            Together
          </h2>
          <Link
            href="/contact"
            className="inline-block border border-foreground px-12 py-4 accent-text text-sm hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Contact
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted">
          <span className="accent-text text-xs">© {new Date().getFullYear()} Savoy Grange</span>
          <div className="flex gap-8">
            <a href="#" className="link-underline hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="link-underline hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="link-underline hover:text-foreground transition-colors">
              Behance
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
