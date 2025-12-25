"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Package, HardHat, Droplets } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Digital Loan Management Platform",
    description:
      "Digitized manual loan application processes for land collateral loans. Designed user-friendly forms and structured approval workflows.",
    icon: Building,
    roles: ["Project Manager", "Full Stack Lead", "Progress Tracking"],
    tech: ["Next.js", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Smart Supply Chain System",
    description:
      "Developed front-end and back-end for inventory accuracy. Unified operations across warehouse and sales with a structured change request system.",
    icon: Package,
    roles: ["Project Manager", "Full Stack Developer", "Operations Support"],
    tech: ["React.js", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Water Monitoring System",
    description:
      "Led requirements gathering and resource allocation for a real-time environmental monitoring solution.",
    icon: Droplets,
    roles: ["Project Manager", "Solution Architect", "Requirement Gathering"],
    tech: ["React.js", "Spring Boot", "PostgreSQL", "MQTT"],
  },
  {
    title: "Construction Management Web App",
    description:
      "Tailored for a leading real estate firm. Integrated certificate, collateral, and approval management to enhance project oversight.",
    icon: HardHat,
    roles: ["Full Stack Developer", "System Optimization", "Operations Support"],
    tech: ["Next.js", "Spring Boot", "PostgreSQL"],
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-primary" />
            Featured Projects
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-foreground text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.roles.map((role) => (
                          <Badge key={role} className="text-xs bg-primary text-primary-foreground hover:bg-primary/90">
                            {role}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-muted-foreground/30 text-muted-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
