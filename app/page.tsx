"use client"

import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { GithubRepos } from "@/components/portfolio/github-repos"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { SpotifyWidget } from "@/components/portfolio/spotify-widget"
import { ScrollGradient } from "@/components/portfolio/scroll-gradient"

export default function Portfolio() {
  return (
    <>
      <ScrollGradient />
      <main className="min-h-screen text-foreground transition-colors duration-300">
        <Header />
        <Hero />
        <Experience />
        <Projects />
        <GithubRepos />
        <Contact />
        <Footer />
        <SpotifyWidget />
      </main>
    </>
  )
}
