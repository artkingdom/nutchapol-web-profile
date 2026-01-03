"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "MSc Information Systems Management",
    institutions: ["University of Greenwich"],
    period: "2015 - 2016",
    type: "Master's Degree",
  },
  {
    degree: "BSc Information Technology",
    institutions: ["King Mongkut's University of Technology Thonburi"],
    period: "2010 - 2014",
    type: "Bachelor's Degree",
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-primary" />
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-primary font-medium mb-1">{edu.type}</p>
                    <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
                    {edu.institutions?.length
                      ? edu.institutions.map((institution) => (
                          <p key={institution} className="text-muted-foreground">
                            {institution}
                          </p>
                        ))
                      : edu.institution && <p className="text-muted-foreground">{edu.institution}</p>}
                  </div>
                  {edu.period ? <div className="text-sm text-muted-foreground">{edu.period}</div> : null}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
