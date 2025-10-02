"use client"

import Link from "next/link"
import { CodeRain } from "@/components/code-rain"
import { Footer } from "@/components/footer"
import { PoweredByBadge } from "@/components/powered-by-badge"
import { SpinningEarth } from "@/components/spinning-earth"
import { TypingHero } from "@/components/typing-hero"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import Tienda from "@/mycomponents/tienda"
import Timeline from "@/mycomponents/bonus"
import Countdown from "../mycomponents/countdown"
import CountUp from "@/mycomponents/counter"
import {ContactForm} from "@/mycomponents/contact-form"
import { useState } from "react"
import { FloatingWhatsApp } from "react-floating-whatsapp"

// import Urgencia from "@/mycomponents/urgencia"
import { ArrowRight } from "lucide-react"

// Custom WhatsApp button component for direct redirect
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5491170061908"
    const message = "👋 ¡Hola! ¿En qué puedo ayudarte con tu tienda online?"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-[50px] h-[50px] bg-emerald-600 text-white rounded-full shadow-sm transition-all duration-800 hover:scale-110 group"
      style={{
        backgroundColor: 'rgba(34, 197, 94, 0.9)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="fill-current"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690"/>
      </svg>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping"></div>
    </button>
  )
}

export default function Home() {
  const [formu, setformu] = useState(false)
  return (
    <>
      <WhatsAppButton />
      <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
        {/* Background layers */}
        <div className="fixed inset-0 z-0">
          {/* Spinning Earth */}
          <div className="opacity-10">
            <SpinningEarth />
          </div>

        </div>

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
          {/* Hero section with better contrast */}
          <section className="flex flex-col items-center justify-center min-h-[100vh] px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="mb-8">
                <PoweredByBadge />
              </div>

              {/* Enhanced hero with better contrast */}
              <div className="relative">
                {/* Background for better contrast in light mode */}
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
                  Formá tu propio canal de ventas antes de las fiestas. <br /> Por fuera de las <span className="text-emerald-500">comisiones</span> de Mercado Libre
                </p>
              </div>

              {/* Button section - Left to Right order */}
              <button className="pt-8"
              onClick={() => setformu(true)}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div
                    className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium text-base hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                  >
                    <span className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Agendá una llamada gratis</span>
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </section>

          <Tienda />

          <Timeline />
          {/* Expertise section */}
          {/* <ExpertiseSection /> */}

          {/* Services viewport section */}

          <section id="cta" className="w-full py-12 relative border-y-2  border-white/35">
            {/* Opaque background to block video - darker */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl"></div>

            {/* Gradient overlay for visual impact - darker */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/95 to-green-950/20"></div>

        
            <Countdown timeTillDate="12 31 2025, 23:59 am" timeFormat="MM DD YYYY, h:mm a" />

     

            <div className="relative z-10 max-w-7xl mt-6 mx-auto px-6 md:px-8">
              <motion.div
                className="flex flex-col items-center justify-center space-y-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
              
              
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 items-center justify-between">


                  <div className="flex-1">
                    <motion.div
                      className="max-w-[900px] mx-auto space-y-8"
                      initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {/* Pricing Section */}
                    <div className="bg-gradient-to-br from-emerald-100/30 via-emerald-950/50 to-emerald-500/40 border border-slate-400/20 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-400/5 via-gray-300/10 to-slate-400/5 rounded-3xl"></div>
                      
                      
                      {/* Discount badge */}
                      <div className=" z-20">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          <span className="flex items-center space-x-2">
                            <span className="text-yellow-200">⚡</span>
                            <span>80% OFF - DESCUENTO ESPECIAL</span>
                          </span>
                        </div>
                      </div>
                      
                      <div className="relative z-10 text-center pt-6">
                         <div className="mb-4">
                          <span className="text-white/80  text-sm md:text-md ">
                          Transformá tu negocio por tan solo:
                          </span>
                        </div>
                        {/* Original price with strikethrough */}
                        <div className="mb-4">
                          <span className="text-slate-400/70 text-lg md:text-xl line-through font-medium">
                            Precio Regular: $1.500.000
                          </span>
                        </div>

                        {/* Current price - highlighted */}
                        <div className="mb-6">
                          <div className="flex items-center justify-center space-x-1">
                            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-200 via-gray-100 to-slate-300 bg-clip-text text-transparent drop-shadow-lg">
                              $ ARS 299.
                            </span>
                            <span className="text-lg text-slate-400/60 font-medium">
                              000 
                            </span>
                          </div>
                          
                          {/* Savings highlight */}
                          <p className="text-emerald-300 font-semibold text-lg mt-2">
                            ¡Ahorrás ARS 1.201.000!
                          </p>
                        </div>
                        {/* Validity notice */}
                        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-4">
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-yellow-300">⏰</span>
                            <span className="text-yellow-200 font-semibold text-sm md:text-base">
                              Oferta válida hasta Viernes 3/04
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-slate-400/10 to-gray-500/5 rounded-full blur-xl"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-slate-500/10 to-gray-400/5 rounded-full blur-xl"></div>
                    </div>
                  </motion.div>
                  
                  </div>
                  
                  <div className="bg-gradient-to-br p-8 backdrop-blur-sm relative overflow-hidden shadow-2xl flex-1">
                      {/* Pulsing background effect */}
                      <motion.div
                        className="absolute inset-0 "
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      />
                      
                        <div className="flex justify-center mb-4">
                          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse inline-flex">
                            <span className="flex items-center space-x-1">
                              <span>🔥</span>
                              <span>CUPOS LIMITADOS</span>
                            </span>
                          </div>
                        </div>
                     

                      <div className="relative z-10 text-center pt-4">
                     

                        {/* Counter section */}
                        <div className="bg-black/40 rounded-2xl p-6 border border-emerald-400/20 mb-4">
                          <div className="flex items-center justify-center space-x-4 mb-3">
                            {/* Available spots */}
                            <div className="text-center">
                              <div className="text-2xl md:text-3xl font-bold text-emerald-300">
                                {10 - 6}
                              </div>
                              <div className="text-xs text-emerald-200/70 uppercase tracking-wider">
                                Disponibles
                              </div>
                            </div>
                            
                            <div className="text-slate-300 text-2xl">/</div>
                            
                            {/* Total spots */}
                            <div className="text-center">
                              <div className="text-2xl md:text-3xl font-bold text-slate-300">
                                10
                              </div>
                              <div className="text-xs text-slate-400/70 uppercase tracking-wider">
                                Cupos totales
                              </div>
                            </div>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full bg-gray-700 rounded-full h-3 mb-3">
                            <motion.div
                              className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full relative overflow-hidden"
                              style={{ width: '60%' }}
                              initial={{ width: 0 }}
                              animate={{ width: '60%' }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            >
                              {/* Animated glow effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{
                                  x: ['-100%', '100%']
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'linear'
                                }}
                              />
                            </motion.div>
                          </div>

                          <p className="text-slate-200 font-semibold text-sm">
                            Trabajaremos con un cupo de 10 negocios, de los cuales{" "}
                            <span className="text-yellow-300/60 font-bold text-lg">
                              <CountUp to={6} />
                            </span>{" "}
                            ya están inscriptos
                          </p>
                        </div>

                        {/* Call to action */}
                        <div className="text-center">
                          <p className="text-emerald-200 text-sm font-medium mb-2">
                            🏃‍♂️ ¡No te quedes sin tu lugar!
                          </p>
                         
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500/20 rounded-full animate-ping"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 bg-green-500/20 rounded-full animate-ping delay-1000"></div>
                      
                      {/* Border glow effect */}
                     
                  </div>
                </div>
                      
                       {/* Main CTA Button */}
                    <motion.button
                      onClick={() => setformu(true)}
                      className="group relative mt-8 md:mt-24 px-4 md:px-12 py-6 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_50px_rgba(52,211,153,0.6)] hover:scale-105 active:scale-95"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.6,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 50px rgba(52, 211, 153, 0.8)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        boxShadow: '0 10px 30px rgba(52, 211, 153, 0.4), 0 0 60px rgba(52, 211, 153, 0.2)'
                      }}
                    >
                      {/* Pulsing ring effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-4 border-emerald-300/50"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"
                        animate={{
                          x: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                          repeatDelay: 1
                        }}
                      />

                      {/* Button content */}
                      <div className="relative z-10 flex flex-col items-center space-y-2">
                        <motion.div
                          className="flex items-center space-x-0 md:space-x-3"
                          animate={{
                            y: [0, -3, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="text-md md:text-3xl">🚀</span>
                          <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                            ¡AGENDA UNA LLAMADA GRATIS!
                          </span>
                        </motion.div>
                        
                        <motion.p 
                          className="text-emerald-100 text-base font-semibold opacity-90"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.9 }}
                          transition={{ delay: 1 }}
                        >
                          Desarrollamos tu tienda y nos pagás solo si estás conforme. 
                        </motion.p>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-emerald-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>

                    {/* Click hint */}
                    <motion.div
                      className="flex items-center justify-center mt-4 space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        ​🔥​​
                      </motion.div>
                      <span className="text-emerald-300/80 text-sm font-medium">
                        Tenés 7 días para probarla GRATIS.
                      </span>
                      <motion.div
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      >
                       🔥​​  
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Decorative line */}
                  <motion.div
                    className="w-40 h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 mx-auto rounded-full mb-8"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 160, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    style={{
                      boxShadow: '0 0 30px rgba(52, 211, 153, 0.8), 0 0 60px rgba(52, 211, 153, 0.4)'
                    }}
                  />

                </div>
              </motion.div>
            </div>

            <style>{`
              @keyframes shimmer {
                0% {
                  background-position: -200% 0;
                }
                100% {
                  background-position: 200% 0;
                }
              }
            `}</style>
          </section>

          <Footer />
        </div>
        <ContactForm 
        isOpen={formu} 
        onClose={() => setformu(false)} 
      />
      </main>
    </>
  )
}
