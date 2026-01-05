"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/works";

export default function WorksPage() {
  return (
    <main className="min-h-screen grain">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="accent-text text-xs text-muted block mb-6">Discography</span>
          <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl">
            Music
            <br />
            Releases
          </h1>
        </motion.div>
      </section>

      {/* Releases Grid */}
      <section className="px-6 md:px-16 pb-24">
        <div className="grid gap-24 md:gap-32">
          {works.map((work, index) => (
            <motion.article
              key={work.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link href={`/works/${work.slug}`} className="group block">
                <div className={`grid md:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Album Art */}
                  <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:col-start-7' : ''}`}>
                    <div className="relative aspect-square image-hover">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <span className="accent-text text-xs text-muted block mb-4">
                      {work.category} • {work.year}
                    </span>
                    <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl mb-6 group-hover:translate-x-2 transition-transform duration-500">
                      {work.title}
                    </h2>
                    <p className="text-muted mb-8 max-w-md">
                      {work.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="accent-text text-xs group-hover:translate-x-2 transition-transform">
                        Listen Now →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Streaming Links */}
      <section className="py-24 md:py-32 px-6 md:px-16 border-t border-border text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="accent-text text-xs text-muted block mb-6">Stream Everywhere</span>
          <h2 className="display-heading text-4xl md:text-6xl mb-12">
            Listen Now
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="inline-block border border-foreground px-10 py-4 accent-text text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Spotify
            </a>
            <a
              href="#"
              className="inline-block border border-foreground px-10 py-4 accent-text text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Apple Music
            </a>
            <a
              href="#"
              className="inline-block border border-foreground px-10 py-4 accent-text text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              SoundCloud
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
