"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[3/4] bg-border/20 flex items-center justify-center sticky top-32">
            <span className="text-muted text-sm">[ Artist Portrait ]</span>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-8">About</h1>

          <div className="space-y-6 text-muted leading-relaxed">
            <p className="text-lg">
              Savoy Grange is a visual artist based in exploring the boundaries
              of perception through various mediums.
            </p>

            <p>
              My practice centers on the quiet moments—the spaces between the
              obvious, where meaning emerges from subtlety. I work primarily
              with mixed media, photography, and digital compositions, each
              offering unique possibilities for expression.
            </p>

            <p>
              The work investigates how we perceive and remember, questioning
              the reliability of visual experience. Through layering, texture,
              and careful consideration of negative space, I aim to create
              pieces that reward sustained attention.
            </p>

            <p>
              I believe in the power of restraint—that what is left unsaid often
              speaks louder than what is shown. This philosophy guides both my
              creative process and the final presentation of each work.
            </p>
          </div>

          {/* Statement */}
          <div className="mt-16 pt-16 border-t border-border">
            <h2 className="text-xs uppercase tracking-widest text-muted mb-6">
              Artist Statement
            </h2>
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed">
              "I seek to capture not what is seen, but what is felt in the
              seeing—the weight of a shadow, the memory of light."
            </blockquote>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-muted mb-4">
              Interested in collaborating or acquiring work?
            </p>
            <Link
              href="/contact"
              className="inline-block border border-foreground px-6 py-3 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
