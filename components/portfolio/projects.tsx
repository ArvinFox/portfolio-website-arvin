"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, User, Users } from "lucide-react"

const individualProjects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "/project-1.jpg",
    skills: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An AI-powered writing assistant that helps users improve their content with suggestions, grammar checking, and style recommendations.",
    image: "/project-2.jpg",
    skills: ["TypeScript", "OpenAI API", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A comprehensive personal finance application with budget tracking, expense categorization, and financial insights visualization.",
    image: "/project-3.jpg",
    skills: ["React", "Chart.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const groupProjects = [
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/project-4.jpg",
    skills: ["React", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    team: ["John Developer", "Jane Designer", "Mike Backend"],
  },
  {
    title: "Healthcare Platform",
    description:
      "A telemedicine platform enabling video consultations, appointment scheduling, and electronic health records management.",
    image: "/project-5.jpg",
    skills: ["Next.js", "WebRTC", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    team: ["John Developer", "Sarah PM", "Alex DevOps"],
  },
  {
    title: "Educational Learning System",
    description:
      "An interactive learning management system with course creation, progress tracking, and gamification features.",
    image: "/project-6.jpg",
    skills: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    team: ["John Developer", "Emily UX", "Chris Data"],
  },
]

type ProjectType = "individual" | "group"

function ProjectCard({ project, index, showTeam = false }: { 
  project: typeof individualProjects[0] & { team?: string[] }
  index: number
  showTeam?: boolean 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden bg-muted"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm">Project Preview</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>
          
          {showTeam && project.team && (
            <div className="mb-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Team</p>
              <div className="flex flex-wrap gap-2">
                {project.team.map((member) => (
                  <span 
                    key={member}
                    className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="rounded-full font-medium text-xs px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View GitHub repository"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View live project"
            >
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectType>("individual")

  return (
    <>
      {/* Individual Projects Section */}
      <section className="py-24 px-6" id="individual-projects">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-accent" />
              <h2 className="text-sm font-medium text-accent tracking-wider uppercase">
                Individual Projects
              </h2>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-foreground">
              Personal Work
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Projects I've built independently, showcasing my full-stack development skills and problem-solving abilities.
            </p>
          </motion.div>

          <div className="space-y-16">
            {individualProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Group Projects Section */}
      <section className="py-24 px-6" id="group-projects">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-accent" />
              <h2 className="text-sm font-medium text-accent tracking-wider uppercase">
                Group Projects
              </h2>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-foreground">
              Collaborative Work
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Projects where I've collaborated with talented teams, demonstrating my ability to work effectively in group settings.
            </p>
          </motion.div>

          <div className="space-y-16">
            {groupProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} showTeam />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
