"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen grain">
      {/* Hero */}
      <section className="min-h-screen relative flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=1920&q=90"
            alt="Artist portrait"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative z-10 p-8 md:p-16 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="accent-text text-xs text-muted block mb-6">About</span>
            <h1 className="display-heading text-6xl md:text-8xl lg:text-9xl">
              Savoy
              <br />
              Grange
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 md:py-32 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="accent-text text-xs text-muted block mb-6">Biography</span>
            <h2 className="display-heading text-4xl md:text-5xl mb-8">
              The
              <br />
              Artist
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted leading-relaxed"
          >
            <p className="text-lg md:text-xl">
              Visual artist exploring the boundaries of perception through various mediums.
              Based in the intersection of digital and traditional art forms.
            </p>
            <p>
              My practice centers on the quiet moments—the spaces between the obvious,
              where meaning emerges from subtlety. I work primarily with mixed media,
              photography, and digital compositions, each offering unique possibilities
              for expression.
            </p>
            <p>
              The work investigates how we perceive and remember, questioning the
              reliability of visual experience. Through layering, texture, and careful
              consideration of negative space, I aim to create pieces that reward
              sustained attention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-24 md:py-32 px-6 md:px-16 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="accent-text text-xs text-muted block mb-8">Artist Statement</span>
          <blockquote className="display-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
            "I seek to capture not what is seen, but what is felt in the seeing—
            the weight of a shadow, the memory of light."
          </blockquote>
        </motion.div>
      </section>

      {/* Experience / Highlights */}
      <section className="py-24 md:py-32 px-6 md:px-16 border-t border-border">
        <div className="grid md:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="display-heading text-6xl md:text-7xl block mb-4">5+</span>
            <span className="accent-text text-xs text-muted">Years Experience</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="display-heading text-6xl md:text-7xl block mb-4">20+</span>
            <span className="accent-text text-xs text-muted">Projects Completed</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="display-heading text-6xl md:text-7xl block mb-4">∞</span>
            <span className="accent-text text-xs text-muted">Ideas Brewing</span>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-16 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-heading text-4xl md:text-5xl">
              Let's Create
              <br />
              Something
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block border border-foreground px-12 py-4 accent-text text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
