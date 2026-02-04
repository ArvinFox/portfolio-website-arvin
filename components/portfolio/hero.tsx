"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, ArrowUp, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

// Colorful social icons as SVG components
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#000000">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

const socialLinks = [
  { icon: GithubIcon, href: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com", label: "GitHub", hoverColor: "hover:bg-[#333]/10 dark:hover:bg-[#f0f0f0]/10" },
  { icon: LinkedinIcon, href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com", label: "LinkedIn", hoverColor: "hover:bg-[#0A66C2]/10" },
  { icon: TwitterIcon, href: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com", label: "Twitter/X", hoverColor: "hover:bg-[#000]/10 dark:hover:bg-[#fff]/10" },
  { icon: FacebookIcon, href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com", label: "Facebook", hoverColor: "hover:bg-[#1877F2]/10" },
]

export function Hero() {
  const [showScrollDown, setShowScrollDown] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = Math.max(0, window.scrollY)
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Hide scroll down indicator after scrolling past 20% of viewport
      setShowScrollDown(scrollY < windowHeight * 0.2)
      
      // Show back to top button when user is past 50% of the page
      setShowBackToTop(scrollY > (documentHeight - windowHeight) * 0.5)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 pt-20" id="about">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-accent font-medium tracking-wide"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance"
              >
                {process.env.NEXT_PUBLIC_NAME || "Arvin Premathilake"}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground"
              >
                {process.env.NEXT_PUBLIC_TITLE || "Software Engineer"}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                I craft beautiful, accessible, and performant web and mobile applications. 
                Currently pursuing {process.env.NEXT_PUBLIC_DEGREE || "BSc. (Hons) Software Engineering"} at {process.env.NEXT_PUBLIC_UNIVERSITY || "NSBM Green University"}, 
                affiliated with {process.env.NEXT_PUBLIC_AFFILIATION || "University of Plymouth, UK"}.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <Button
                  asChild
                  className="rounded-full px-6 transition-all duration-300 hover:scale-105"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full px-6 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <a href="#individual-projects">View Projects</a>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="rounded-full px-6 transition-all duration-300 hover:scale-105 gap-2"
                >
                  <a href={process.env.NEXT_PUBLIC_RESUME_PATH || "/assets/resume.pdf"} download="Arvin_Premathilake_Resume.pdf">
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center gap-3 pt-6"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 transition-all duration-200 rounded-full ${link.hoverColor}`}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Gradient ring */}
                <div className="absolute -inset-1 bg-gradient-to-br from-accent via-pink-500 to-orange-400 rounded-full blur-sm opacity-75" />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-background">
                  <img
                    src={process.env.NEXT_PUBLIC_PROFILE_PHOTO || "/assets/profile-photo.jpg"}
                    alt={process.env.NEXT_PUBLIC_NAME || "/placeholder-user.jpg"}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-user.jpg"
                    }}
                  />
                </div>
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll down indicator - fixed at bottom center, disappears on scroll */}
      <AnimatePresence>
        {showScrollDown && (
          <motion.a
            href="#experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs tracking-wider uppercase">Scroll</span>
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Back to top button - appears when scrolled down */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
