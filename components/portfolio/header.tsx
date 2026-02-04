"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#individual-projects" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        {/* Subtle top highlight */}
        <div 
          className="absolute inset-x-0 top-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
        />
        
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#"
            className="text-lg font-semibold tracking-tight text-foreground"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Arvin Premathilake
          </motion.a>

          <div className="flex items-center gap-2">
            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-all duration-200 rounded-lg hover:bg-white/10"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 rounded-full hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(4px)',
              }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[73px] left-4 right-4 rounded-2xl overflow-hidden border border-white/10"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >
              <ul className="p-4 flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
