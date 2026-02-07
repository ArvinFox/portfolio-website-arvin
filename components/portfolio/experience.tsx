"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2026 - Present",
    title: "Software Engineering Intern",
    company: "Majstro Solutions (Pvt) Ltd., Kiribathgoda",
    logo: "/assets/majstro-logo-color.svg",
    description:
      "Developing mobile and web applications as a Software Engineering Intern. Working with modern technologies and contributing to various projects across the full stack.",
    skills: ["React", "Flutter", "Node.js", "Express", "TypeScript", "JavaScript", "Dart", "Java", "Firebase", "MongoDB", "Supabase", "REST APIs", "Docker", "Git", "Mobile Development", "Web Development"],
    link: "https://majstro.io",
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
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block p-6 rounded-xl bg-secondary/50 border border-border/50"
            >
              <div className="flex gap-4 items-center">
                {exp.logo && (
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-14 h-14 object-contain flex-shrink-0"
                  />
                )}
                <div className="flex-1 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {exp.period}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                      <span className="text-accent"> · </span>
                      <a 
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors duration-200 group"
                      >
                        {exp.company}
                        <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                          ↗
                        </span>
                      </a>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
