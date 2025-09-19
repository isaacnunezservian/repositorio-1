"use client"

import { useState } from "react"
import { PoweredByBadge } from "@/components/powered-by-badge"
import { TypingHero } from "@/components/typing-hero"
import { ContactForm } from "@/components/contact-form"
import { Zap } from "lucide-react"

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Hero Video - Full screen background */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          style={{
            filter: "contrast(1.2) brightness(0.7) grayscale(100%)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp%20%283%29%20%281%29%20%282%29%20%282%29-i8U3zTcWrQss8nKM5ekseP7qFR5KVP.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Hero section */}
        <section className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="mb-8">
              <PoweredByBadge />
            </div>

            {/* Enhanced hero with better contrast */}
            <div className="relative">
              {/* Background for better contrast */}
              <div className="absolute inset-0 bg-background/80 dark:bg-transparent rounded-2xl blur-3xl"></div>
              <div className="relative z-10">
                <TypingHero />
              </div>
            </div>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8"></div>

            {/* Enhanced description with better contrast */}
            <div className="relative">
              <div className="absolute inset-0 bg-background/60 dark:bg-transparent rounded-xl blur-2xl"></div>
              <p className="relative z-10 text-muted-foreground max-w-xl mx-auto font-medium">
                No te quedes sin web y pedinos la tuya. Nosotros nos encargamos de todo, y nos pagás al final, si te gusta.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => setShowContactForm(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium text-lg hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
              >
                <span className="flex items-center space-x-3">
                  <Zap className="w-6 h-6" />
                  <span>Quiero mi web</span>
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </main>
  )
}
