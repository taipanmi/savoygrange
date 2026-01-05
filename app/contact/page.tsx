"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">Contact</h1>
          <p className="text-muted mb-12">
            For inquiries, commissions, or just to say hello.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16 text-center"
          >
            <p className="text-xl mb-4">Thank you for reaching out.</p>
            <p className="text-muted">I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-widest text-muted mb-3"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-widest text-muted mb-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-widest text-muted mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-foreground px-8 py-3 text-sm hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-16 border-t border-border"
        >
          <h2 className="text-xs uppercase tracking-widest text-muted mb-6">
            Or reach out directly
          </h2>
          <a
            href="mailto:hello@savoygrange.com"
            className="text-xl hover:text-muted transition-colors"
          >
            hello@savoygrange.com
          </a>

          <div className="mt-12 flex gap-6">
            <a
              href="#"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
