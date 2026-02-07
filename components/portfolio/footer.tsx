"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 px-6 border-t border-border/50"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arvin Premathilake. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Designed & Built with care
          <span className="text-accent"> by Arvin.</span>
        </p>
      </div>
    </motion.footer>
  )
}
