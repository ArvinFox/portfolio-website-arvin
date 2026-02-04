"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Frontend Engineer",
    company: "TechCorp",
    description:
      "Lead the development of the company's design system and component library. Collaborate with cross-functional teams to deliver accessible, performant user interfaces.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    period: "2021 — 2023",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    description:
      "Built and maintained multiple web applications from the ground up. Implemented CI/CD pipelines and improved deployment processes.",
    skills: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    link: "#",
  },
  {
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "DigitalAgency",
    description:
      "Developed responsive websites and web applications for various clients. Focused on performance optimization and accessibility improvements.",
    skills: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
    link: "#",
  },
]

export function Experience() {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
            Experience
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">
            Where I've Worked
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.a
              key={exp.title}
              href={exp.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block p-6 -mx-6 rounded-xl transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="grid sm:grid-cols-[140px_1fr] gap-4">
                <p className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                      {exp.title}
                      <span className="text-accent"> · </span>
                      {exp.company}
                      <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-full font-medium text-xs px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group"
          >
            View Full Resume
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
