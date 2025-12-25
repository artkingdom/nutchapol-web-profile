"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, X } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showCertificate, setShowCertificate] = useState(false)

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
            Results-oriented Senior Full Stack Developer and Project Manager with over 8 years of experience. Expert in
            bridging the gap between complex technical requirements and business goals. Proven track record in leading
            digital transformation initiatives—ranging from <b>CRM Digital Loan Platforms</b> to{" "}
            <b>ERP Smart Supply Chain Management</b>—leveraging hybrid methodologies that combine the strategic planning
            of Waterfall with the adaptability of Agile to ensure successful delivery.
          </p>

          <div
            className="flex items-center gap-3 text-primary hover:text-primary/80 cursor-pointer transition-colors"
            onClick={() => setShowCertificate(true)}
          >
            <Award className="h-5 w-5" />
            <span className="font-medium">Certified Professional Scrum Master I (View Certificate)</span>
          </div>
        </motion.div>
      </div>

      {showCertificate && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowCertificate(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setShowCertificate(false)}
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-4xl w-full max-h-[90vh] overflow-auto bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe src="/professional-scrum-master-i.pdf" className="w-full h-[80vh]" title="Certificate Viewer" />
          </div>
        </div>
      )}
    </section>
  )
}
