"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Work } from "@/lib/works";

interface WorkCardProps {
  work: Work;
  index: number;
}

export default function WorkCard({ work, index }: WorkCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link href={`/works/${work.slug}`} className="group block">
        <div className="relative aspect-[4/3] md:aspect-[16/10] bg-border/20 overflow-hidden mb-6">
          <motion.div
            className="w-full h-full bg-muted/10 flex items-center justify-center"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-muted text-sm">[ Image: {work.title} ]</span>
          </motion.div>
        </div>

        <div className="flex justify-between items-start gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-light mb-1 group-hover:text-muted transition-colors">
              {work.title}
            </h2>
            <p className="text-sm text-muted">{work.category}</p>
          </div>
          <span className="text-sm text-muted">{work.year}</span>
        </div>
      </Link>
    </motion.article>
  );
}
