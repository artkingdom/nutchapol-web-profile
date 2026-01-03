"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, X } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCertificate, setActiveCertificate] = useState<{
    src: string
    alt: string
  } | null>(null)

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-primary" />
            About
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Senior Software Consultant and Project Manager with 8 years of experience in enterprise digital
            transformation across automotive, finance, logistics, and internal operations. Strong background in
            AI-assisted software delivery, leveraging AI agents and Vibe Code to shorten development cycles while
            maintaining quality and compliance. Experienced in end-to-end project lifecycles from technology selection
            and requirement analysis to deployment, ensuring alignment with regulatory and business objectives.
          </p>

          <div className="space-y-2">
            <div
              className="flex items-center gap-3 text-primary hover:text-primary/80 cursor-pointer transition-colors"
              onClick={() =>
                setActiveCertificate({
                  src: "/professional-scrum-master-i.jpg",
                  alt: "Professional Scrum Master I certificate",
                })
              }
            >
              <Award className="h-5 w-5" />
              <span className="font-medium">Professional Scrum Master I (View Certificate)</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div
                className="flex items-center gap-3 text-primary hover:text-primary/80 cursor-pointer transition-colors"
                onClick={() =>
                  setActiveCertificate({
                    src: "/Gemini%20Educator.jpg",
                    alt: "Gemini Educator certificate",
                  })
                }
              >
                <Award className="h-5 w-5" />
                <span className="font-medium">Gemini Educator (View Certificate)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {activeCertificate && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveCertificate(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setActiveCertificate(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-4xl w-full max-h-[90vh] overflow-hidden bg-white rounded-lg flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCertificate.src}
              className="max-h-[80vh] w-auto max-w-full object-contain"
              alt={activeCertificate.alt}
            />
          </div>
        </div>
      )}
    </section>
  )
}
