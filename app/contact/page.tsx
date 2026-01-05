"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen grain">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="accent-text text-xs text-muted block mb-6">Contact</span>
          <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl">
            Let's
            <br />
            Talk
          </h1>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="px-6 md:px-16 pb-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {isSubmitted ? (
              <div className="py-16">
                <h2 className="display-heading text-3xl md:text-4xl mb-4">
                  Thank You
                </h2>
                <p className="text-muted mb-8">
                  Your message has been sent. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="accent-text text-sm link-underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="accent-text text-xs text-muted block mb-4"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b-2 border-border py-4 text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-muted/50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="accent-text text-xs text-muted block mb-4"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b-2 border-border py-4 text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-muted/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="accent-text text-xs text-muted block mb-4"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b-2 border-border py-4 text-lg focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted/50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="border border-foreground px-12 py-4 accent-text text-sm hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <span className="accent-text text-xs text-muted block mb-4">Email</span>
              <a
                href="mailto:hello@savoygrange.com"
                className="text-2xl md:text-3xl font-light hover:text-muted transition-colors"
              >
                hello@savoygrange.com
              </a>
            </div>

            <div>
              <span className="accent-text text-xs text-muted block mb-4">Social</span>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-lg hover:text-muted transition-colors link-underline inline-block w-fit"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-lg hover:text-muted transition-colors link-underline inline-block w-fit"
                >
                  Twitter / X
                </a>
                <a
                  href="#"
                  className="text-lg hover:text-muted transition-colors link-underline inline-block w-fit"
                >
                  Behance
                </a>
                <a
                  href="#"
                  className="text-lg hover:text-muted transition-colors link-underline inline-block w-fit"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <span className="accent-text text-xs text-muted block mb-4">Location</span>
              <p className="text-lg text-muted">
                Available for remote collaborations
                <br />
                worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to works */}
      <section className="px-6 md:px-16 py-16 border-t border-border">
        <Link
          href="/works"
          className="inline-flex items-center gap-4 accent-text text-sm group"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span>
          <span className="link-underline">View My Work</span>
        </Link>
      </section>
    </main>
  );
}
