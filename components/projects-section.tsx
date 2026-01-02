"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Package, HardHat, Landmark, Truck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Automotive Service Operation System",
    description:
      "Designed and delivered digital service operations for an automotive service company, reducing manual work and delivery time by about 50% with AI-assisted development.",
    icon: Car,
    roles: ["Project Manager", "Consultant", "AI-assisted Delivery"],
    tech: ["Service Operations", "Workflow Automation", "Vibe Code"],
  },
  {
    title: "Smart Supply Chain Management System",
    description:
      "Delivered an ERP-based supply chain system, led go-live execution, and managed change requests for continuous improvements.",
    icon: Package,
    roles: ["Project Manager", "Software Developer", "Go-live Lead"],
    tech: ["ERP", "Supply Chain", "Change Management"],
  },
  {
    title: "Land Collateral Loan Platform",
    description:
      "Built a CRM-driven loan origination platform with online submissions, approval workflows, and contract execution.",
    icon: Landmark,
    roles: ["Project Manager", "Software Developer", "Requirements"],
    tech: ["CRM", "Loan Origination", "Workflow"],
  },
  {
    title: "Logistics Management System",
    description:
      "Designed logistics modules that optimized truck load planning and delivery execution to reduce scheduling time.",
    icon: Truck,
    roles: ["Project Coordinator", "Process Optimization"],
    tech: ["Logistics", "Route Planning", "Operations"],
  },
  {
    title: "Construction Management System",
    description:
      "Developed an enterprise web application with certificate, collateral, and approval workflows to improve project oversight.",
    icon: HardHat,
    roles: ["Software Engineer", "Workflow Design"],
    tech: ["Approvals", "Certificates", "Collateral"],
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
