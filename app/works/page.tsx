"use client";

import { motion } from "framer-motion";
import { works } from "@/lib/works";
import WorkCard from "@/components/WorkCard";

export default function WorksPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-light mb-4">Works</h1>
        <p className="text-muted mb-16 max-w-lg">
          A collection of selected projects exploring various mediums and ideas.
        </p>
      </motion.div>

      <div className="grid gap-16 md:gap-24">
        {works.map((work, index) => (
          <WorkCard key={work.slug} work={work} index={index} />
        ))}
      </div>
    </main>
  );
}
