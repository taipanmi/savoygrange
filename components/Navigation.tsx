"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="flex justify-between items-center px-8 py-6">
          <Link href="/" className="text-lg font-medium tracking-tight">
            Savoy Grange
          </Link>
          <div className="flex gap-8">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-lg font-medium tracking-tight">
            SG
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-px bg-foreground block"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 3 : 0,
              }}
            />
            <motion.span
              className="w-6 h-px bg-foreground block"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -3 : 0,
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-40 md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-light ${
                      pathname === item.href ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
