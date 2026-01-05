"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, works } from "@/lib/works";
import { use } from "react";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export default function WorkPage({ params }: WorkPageProps) {
  const { slug } = use(params);
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  const currentIndex = works.findIndex((w) => w.slug === slug);
  const nextWork = works[(currentIndex + 1) % works.length];
  const prevWork = works[(currentIndex - 1 + works.length) % works.length];

  return (
    <main className="min-h-screen grain">
      {/* Hero - Album Art */}
      <section className="min-h-screen relative flex items-center justify-center px-6 md:px-16 py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center max-w-7xl w-full">
          {/* Album Art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square image-hover"
          >
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/works"
              className="accent-text text-xs text-muted hover:text-foreground transition-colors mb-8 inline-block"
            >
              ← All Releases
            </Link>

            <span className="accent-text text-xs text-muted block mb-4">
              {work.category} • {work.year}
            </span>

            <h1 className="display-heading text-5xl md:text-7xl mb-8">
              {work.title}
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-12">
              {work.description}
            </p>

            {/* Streaming buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-block border border-foreground px-8 py-4 accent-text text-sm hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Spotify
              </a>
              <a
                href="#"
                className="inline-block border border-foreground px-8 py-4 accent-text text-sm hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Apple Music
              </a>
              <a
                href="#"
                className="inline-block border border-foreground px-8 py-4 accent-text text-sm hover:bg-foreground hover:text-background transition-all duration-300"
              >
                SoundCloud
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional visuals */}
      <section className="px-6 md:px-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="accent-text text-xs text-muted block mb-4">Visuals</span>
          <h2 className="display-heading text-3xl md:text-4xl">Artwork</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] image-hover"
          >
            <Image
              src={work.image}
              alt={`${work.title} artwork`}
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] image-hover"
          >
            <Image
              src={work.image}
              alt={`${work.title} artwork alt`}
              fill
              className="object-cover grayscale"
            />
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="grid md:grid-cols-2">
          <Link
            href={`/works/${prevWork.slug}`}
            className="group p-8 md:p-16 border-b md:border-b-0 md:border-r border-border hover:bg-foreground/5 transition-colors"
          >
            <span className="accent-text text-xs text-muted block mb-4">Previous Release</span>
            <h3 className="display-heading text-2xl md:text-3xl group-hover:-translate-x-2 transition-transform">
              ← {prevWork.title}
            </h3>
          </Link>

          <Link
            href={`/works/${nextWork.slug}`}
            className="group p-8 md:p-16 text-right hover:bg-foreground/5 transition-colors"
          >
            <span className="accent-text text-xs text-muted block mb-4">Next Release</span>
            <h3 className="display-heading text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">
              {nextWork.title} →
            </h3>
          </Link>
        </div>
      </section>
    </main>
  );
}
