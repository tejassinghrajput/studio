"use client";

import { motion } from 'framer-motion';

export function FooterSection() {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-6 border-t border-border bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }} // Slight delay after content load
    >
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        © {currentYear} Tejas Kumar Singh. Crafted with Next.js & Tailwind CSS.
      </div>
    </motion.footer>
  );
}
