"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Code, Layout, Server, Database, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "Kotlin", "PHP", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "jQuery"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Laravel", "CodeIgniter", "Groovy on Grails"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "Microsoft SQL", "MySQL"],
  },
  {
    title: "Tools & AI",
    icon: Wrench,
    skills: ["Jira", "ClickUp", "Redmine", "Prompt Engineering", "n8n"],
  },
  {
    title: "Management",
    icon: Users,
    skills: ["Agile/Scrum", "Requirement Analysis", "Resource Allocation", "Stakeholder Management", "Solution Design"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-primary" />
            Tech Stack & Skills
          </h2>

          <div className="grid gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex items-center gap-3 min-w-[140px]">
                  <category.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{category.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
