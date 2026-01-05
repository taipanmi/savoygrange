"use client";

import { motion } from "framer-motion";
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

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/works"
          className="text-sm text-muted hover:text-foreground transition-colors mb-12 block"
        >
          ← Back to works
        </Link>
      </motion.div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-light mb-4">{work.title}</h1>
        <div className="flex gap-4 text-muted">
          <span>{work.category}</span>
          <span>—</span>
          <span>{work.year}</span>
        </div>
      </motion.div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <div className="aspect-[16/10] md:aspect-[21/9] bg-border/20 flex items-center justify-center">
          <span className="text-muted text-sm">[ Image: {work.title} ]</span>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-2xl mb-24"
      >
        <h2 className="text-xs uppercase tracking-widest text-muted mb-4">
          About this work
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-muted">
          {work.description}
        </p>
      </motion.div>

      {/* Next Project */}
      {nextWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border pt-16"
        >
          <span className="text-xs uppercase tracking-widest text-muted mb-6 block">
            Next Project
          </span>
          <Link href={`/works/${nextWork.slug}`} className="group block">
            <h3 className="text-2xl md:text-3xl font-light group-hover:text-muted transition-colors">
              {nextWork.title} →
            </h3>
          </Link>
        </motion.div>
      )}
    </main>
  );
}
