"use client"

import { useEffect, useState } from "react"

// Color stops for the gradient journey (purple -> hot pink -> orange -> cyan -> purple)
const lightColors = [
  { r: 245, g: 235, b: 255 }, // Soft purple
  { r: 255, g: 230, b: 245 }, // Hot pink tint
  { r: 255, g: 240, b: 230 }, // Peachy orange
  { r: 230, g: 250, b: 255 }, // Cyan tint
  { r: 240, g: 235, b: 255 }, // Back to purple
]

const darkColors = [
  { r: 30, g: 20, b: 50 },   // Deep purple
  { r: 45, g: 20, b: 40 },   // Dark magenta
  { r: 40, g: 25, b: 30 },   // Dark coral
  { r: 20, g: 35, b: 45 },   // Dark cyan
  { r: 30, g: 20, b: 50 },   // Back to deep purple
]

function interpolateColor(
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number },
  factor: number
) {
  return {
    r: Math.round(color1.r + (color2.r - color1.r) * factor),
    g: Math.round(color1.g + (color2.g - color1.g) * factor),
    b: Math.round(color1.b + (color2.b - color1.b) * factor),
  }
}

function getGradientColors(scrollProgress: number, isDark: boolean) {
  const colors = isDark ? darkColors : lightColors
  const segments = colors.length - 1
  // Clamp progress to valid range to prevent crashes on mobile overscroll
  const clampedProgress = Math.max(0, Math.min(scrollProgress, 1))
  const segment = Math.min(Math.floor(clampedProgress * segments), segments - 1)
  const segmentProgress = Math.max(0, (clampedProgress * segments) - segment)
  
  const color1 = interpolateColor(colors[segment], colors[segment + 1], segmentProgress)
  const color2 = interpolateColor(
    colors[Math.min(segment + 1, segments)], 
    colors[Math.min(segment + 2, segments)], 
    segmentProgress
  )
  
  return { color1, color2 }
}

export function ScrollGradient() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains("dark"))

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      // Clamp scroll values to prevent issues with mobile overscroll/bounce
      const scrollY = Math.max(0, window.scrollY)
      const progress = scrollHeight > 0 ? Math.max(0, Math.min(scrollY / scrollHeight, 1)) : 0
      setScrollProgress(progress)
    }

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  if (!mounted) return null

  const { color1, color2 } = getGradientColors(scrollProgress, isDark)
  
  const gradientStyle = {
    background: `linear-gradient(
      135deg,
      rgb(${color1.r}, ${color1.g}, ${color1.b}) 0%,
      rgb(${color2.r}, ${color2.g}, ${color2.b}) 100%
    )`,
    transition: "background 0.3s ease-out",
  }

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={gradientStyle}
      aria-hidden="true"
    />
  )
}
