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
            src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=1920&q=90"
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
              Sound
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
              Music producer and artist crafting sonic landscapes that blur the lines
              between electronic, ambient, and experimental sounds.
            </p>
            <p>
              Drawing inspiration from late-night sessions, urban atmospheres, and
              the spaces between genres, each release is a sonic exploration—a
              journey through texture, rhythm, and emotion.
            </p>
            <p>
              With a production style that balances organic warmth with digital
              precision, the music invites listeners into immersive soundscapes
              designed for both the dancefloor and headphone listening.
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
          <span className="accent-text text-xs text-muted block mb-8">Philosophy</span>
          <blockquote className="display-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
            "Music is the space between the notes—
            it's the silence that gives sound its meaning."
          </blockquote>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 px-6 md:px-16 border-t border-border">
        <div className="grid md:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="display-heading text-6xl md:text-7xl block mb-4">3</span>
            <span className="accent-text text-xs text-muted">Releases</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="display-heading text-6xl md:text-7xl block mb-4">∞</span>
            <span className="accent-text text-xs text-muted">Hours in the Studio</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="display-heading text-6xl md:text-7xl block mb-4">1</span>
            <span className="accent-text text-xs text-muted">Vision</span>
          </motion.div>
        </div>
      </section>

      {/* Listen */}
      <section className="py-24 md:py-32 px-6 md:px-16 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-heading text-4xl md:text-5xl">
              Listen
              <br />
              Now
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
