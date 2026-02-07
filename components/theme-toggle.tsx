"use client"

import * as React from "react"
import { Moon, Sun, ChevronDown, Monitor } from "lucide-react"

function SystemIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Sun half (left side) */}
      <defs>
        <clipPath id="leftHalf">
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
        <clipPath id="rightHalf">
          <rect x="12" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      <g clipPath="url(#leftHalf)">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </g>
      {/* Moon half (right side) */}
      <g clipPath="url(#rightHalf)">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </g>
    </svg>
  )
}
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Theme = "light" | "dark" | "system"

export function ThemeToggle() {
  const [theme, setThemeState] = React.useState<Theme>("dark")
  const [mounted, setMounted] = React.useState(false)

  const applyTheme = React.useCallback((newTheme: Theme) => {
    if (newTheme === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (systemDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const initialTheme = savedTheme || "dark"
    setThemeState(initialTheme)
    applyTheme(initialTheme)
    setMounted(true)
  }, [applyTheme])

  // Listen for system theme changes when in system mode
  React.useEffect(() => {
    if (theme !== "system") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => applyTheme("system")
    
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, applyTheme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  const getCurrentIcon = () => {
    if (theme === "system") return <SystemIcon className="h-4 w-4" />
    if (theme === "dark") return <Moon className="h-4 w-4" />
    return <Sun className="h-4 w-4" />
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-9 px-3 rounded-full gap-2">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-9 px-3 rounded-full gap-2 hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-300"
        >
          {getCurrentIcon()}
          <span className="text-sm capitalize hidden sm:inline">{theme}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        <DropdownMenuItem 
          onSelect={() => setTheme("light")}
        >
          <Sun className="h-4 w-4 text-amber-500" />
          <span>Light</span>
          {theme === "light" && <span className="ml-auto text-accent">*</span>}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onSelect={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4 text-indigo-400" />
          <span>Dark</span>
          {theme === "dark" && <span className="ml-auto text-accent">*</span>}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onSelect={() => setTheme("system")}
        >
          <SystemIcon className="h-4 w-4" />
          <span>System</span>
          {theme === "system" && <span className="ml-auto text-accent">*</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
