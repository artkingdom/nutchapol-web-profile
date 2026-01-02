"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Independent Software Consultant (Freelance)",
    period: "Jul 2025 - Present",
    role: "Independent Software Consultant",
    highlights: [
      "Designed and delivered digital service operation systems for an automotive service company.",
      "Reduced manual operations and delivery time by about 50%.",
      "Applied AI-assisted development (Vibe Code) to accelerate system delivery.",
    ],
  },
  {
    company: "Bluebik Group Public Company Limited",
    period: "Mar 2025 - Jun 2025",
    role: "Project Manager",
    highlights: [
      "Facilitated Agile ceremonies across consulting teams.",
      "Removed technical delivery blockers to maintain client milestones.",
      "Ensured efficient resolution of critical delivery issues.",
    ],
  },
  {
    company: "Smart Shift Solutions",
    period: "Jan 2020 - Feb 2025",
    role: "Project Manager & Senior Full Stack Developer",
    highlights: [
      "Delivered an ERP-based smart supply chain management system and led go-live execution.",
      "Built a CRM-driven land collateral loan platform with online submissions and approval workflows.",
      "Designed logistics modules to optimize truck load planning and delivery execution.",
      "Coordinated HR and sales operations systems covering attendance, leave, and inventory workflows.",
      "Implemented CRM features for a home service operation system to improve contractor queue management.",
    ],
  },
  {
    company: "Smart Shift Solutions",
    period: "Apr 2018 - Jan 2020",
    role: "Software Engineer",
    highlights: [
      "Developed an enterprise construction management web application.",
      "Integrated certificate, collateral, and approval workflows to improve project oversight.",
    ],
  },
  {
    company: "Smart Shift Solutions",
    period: "May 2014 - Mar 2015",
    role: "Junior Programmer",
    highlights: [
      "Developed web-based procurement tools.",
      "Standardized supplier sourcing data and supported factory production planning.",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-primary" />
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-[2px] bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-8 sm:pl-14"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                  <div className="bg-card rounded-lg p-5 border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-foreground">{exp.role}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    {exp.highlights?.length ? (
                      <ul className="text-muted-foreground text-sm leading-relaxed list-disc pl-5 space-y-1">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
