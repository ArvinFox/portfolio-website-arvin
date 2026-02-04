"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, ExternalLink } from "lucide-react"

// Mock GitHub repos data - replace with actual API call
const mockRepos = [
  {
    name: "react-component-library",
    description: "A comprehensive React component library with TypeScript support and extensive documentation.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 234,
    forks: 45,
    url: "https://github.com/johndeveloper/react-component-library",
    topics: ["react", "typescript", "components", "ui"],
  },
  {
    name: "nextjs-starter-template",
    description: "Production-ready Next.js starter with authentication, database, and deployment configurations.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 189,
    forks: 32,
    url: "https://github.com/johndeveloper/nextjs-starter-template",
    topics: ["nextjs", "starter", "template"],
  },
  {
    name: "ai-chatbot",
    description: "An intelligent chatbot powered by OpenAI with streaming responses and conversation memory.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 156,
    forks: 28,
    url: "https://github.com/johndeveloper/ai-chatbot",
    topics: ["ai", "openai", "chatbot", "python"],
  },
  {
    name: "portfolio-website",
    description: "My personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 98,
    forks: 15,
    url: "https://github.com/johndeveloper/portfolio-website",
    topics: ["portfolio", "nextjs", "tailwind"],
  },
  {
    name: "cli-tools",
    description: "A collection of useful CLI tools for developers to boost productivity.",
    language: "Rust",
    languageColor: "#dea584",
    stars: 76,
    forks: 12,
    url: "https://github.com/johndeveloper/cli-tools",
    topics: ["cli", "rust", "productivity"],
  },
  {
    name: "mobile-app",
    description: "Cross-platform mobile application built with React Native and Expo.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 54,
    forks: 8,
    url: "https://github.com/johndeveloper/mobile-app",
    topics: ["react-native", "expo", "mobile"],
  },
]

function GithubLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

export function GithubRepos() {
  return (
    <section className="py-24 px-6" id="github">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <GithubLogo className="w-6 h-6" />
            <h2 className="text-sm font-medium text-accent tracking-wider uppercase">
              GitHub
            </h2>
          </div>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">
            Open Source & Repositories
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A selection of my public repositories showcasing various projects and contributions to the open source community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockRepos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group block p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors truncate pr-2">
                  {repo.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 min-h-[2.5rem]">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <Badge 
                    key={topic} 
                    variant="secondary" 
                    className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border-0"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/johndeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all repositories on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
