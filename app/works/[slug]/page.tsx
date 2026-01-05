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
      {/* Hero Image */}
      <section className="h-screen relative">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/works"
              className="accent-text text-xs text-muted hover:text-foreground transition-colors mb-8 inline-block"
            >
              ← All Works
            </Link>
            <h1 className="display-heading text-5xl md:text-7xl lg:text-9xl mb-4">
              {work.title}
            </h1>
            <div className="flex items-center gap-6 text-muted">
              <span className="accent-text text-sm">{work.category}</span>
              <span className="w-12 h-px bg-muted" />
              <span>{work.year}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 md:py-32 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="accent-text text-xs text-muted block mb-6">About This Work</span>
            <h2 className="display-heading text-3xl md:text-4xl">
              The Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              {work.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Images (placeholder for more images) */}
      <section className="px-6 md:px-16 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] image-hover"
          >
            <Image
              src={work.image}
              alt={`${work.title} detail 1`}
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] image-hover mt-0 md:mt-24"
          >
            <Image
              src={work.image}
              alt={`${work.title} detail 2`}
              fill
              className="object-cover grayscale"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="border-t border-border">
        <div className="grid md:grid-cols-2">
          {/* Previous */}
          <Link
            href={`/works/${prevWork.slug}`}
            className="group p-8 md:p-16 border-b md:border-b-0 md:border-r border-border hover:bg-foreground/5 transition-colors"
          >
            <span className="accent-text text-xs text-muted block mb-4">Previous</span>
            <h3 className="display-heading text-2xl md:text-3xl group-hover:-translate-x-2 transition-transform">
              ← {prevWork.title}
            </h3>
          </Link>

          {/* Next */}
          <Link
            href={`/works/${nextWork.slug}`}
            className="group p-8 md:p-16 text-right hover:bg-foreground/5 transition-colors"
          >
            <span className="accent-text text-xs text-muted block mb-4">Next</span>
            <h3 className="display-heading text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">
              {nextWork.title} →
            </h3>
          </Link>
        </div>
      </section>
    </main>
  );
}
