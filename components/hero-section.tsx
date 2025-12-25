"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [showProfileImage, setShowProfileImage] = useState(false)

  const handleOpenAIChat = () => {
    const chatButton = document.querySelector("[data-ai-chat-button]") as HTMLButtonElement
    if (chatButton) {
      chatButton.click()
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div
            className="w-48 h-48 mx-auto rounded-full bg-gray-200 overflow-hidden border-2 border-primary shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setShowProfileImage(true)}
          >
            <Image
              src="/images/profile-image.jpg"
              alt="Nutchapol Kanokvechayun"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Nutchapol Kanokvechayun
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl sm:text-2xl text-primary font-medium mb-6">
            Senior Full Stack Developer & Project Manager
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty"
        >
          Over 8 years of experience delivering impactful enterprise software solutions and leading cross-functional
          teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="min-h-[44px]">
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button onClick={handleOpenAIChat} variant="outline" size="lg" className="min-h-[44px] bg-transparent">
            <MessageCircle className="mr-2 h-4 w-4" />
            Talk with my AI Assistant
          </Button>
        </motion.div>
      </div>

      {showProfileImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowProfileImage(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setShowProfileImage(false)}
          >
            <X className="h-8 w-8" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-2xl">
            <Image
              src="/images/profile-image.jpg"
              alt="Nutchapol Kanokvechayun - Full Size"
              width={800}
              height={800}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
