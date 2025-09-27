"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

interface TimelineEvent {
  year: string | number
  title: string
  description: string
  details: string | React.ReactNode
};

const timelineEvents: TimelineEvent[] = [
  {
    year: "4 videoconsultas uno a uno",
    title: "Construimos una tienda totalmente a medida de tu negocio",
    description: "",
    details:
      "En un proceso de 4 entrevistas, escuchamos activamente tus necesidades y construimos tu web ideal",
  },
  {
    year: "Mejoras mensuales",
    title: "Con tu pago incial único, accedes a mejoras innovadoras continuamente.",
    description: "",
    details: (
      <div className="mt-2 space-y-2">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-white/60">Campañas de Remarketing por WhatsApp para personas que ya te compraron</span>
        </div>
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-white/60">Asistentes IA para responder mensajes automáticamente</span>
        </div>
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-white/60">Mensajes automáticos en WhatsApp para gestión y seguimiento de ventas</span>
        </div>
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-white/60">Integración de la web en campañas de marketing en Google y Meta</span>
        </div>
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-white/60">Y mucho más según las necesidades de tu negocio</span>
        </div>
      </div>
    ),
  },
  {
    year: "Mantenimiento gratis e ilimitado por 3 meses",
    title: "Podes llamarnos la cantidad de veces que necesites para hacer cambios y evaluaciones.",
    description: "",
    details:
      "Nuestra prioridad es tu experiencia cómo usuario, por eso aún después de la fase de onboarding, queremos asegurarnos que todo funcione como vos querés.",
  },
  {
    year: "Dominio gratis por 3 meses",
    title: "Si no tenes dominio, te regalamos uno por 3 meses.",
    description: "",
    details:
      "Te ayudamos a elegir el mejor dominio para tu negocio y lo gestionamos por vos, sin costo adicional.",
  },
  {
    year: "Identidad visual",
    title: "No tenés que contratar a un diseñador, nosotros mejoramos la imagen de tu marca",
    description: "",
    details:
      "Trabajamos en la identidad visual de tu marca mejorando la paleta de colores y tipografías para que tu tienda refleje profesionalismo y confianza.",
  },
  
]

const CheckIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-emerald-400 drop-shadow-lg"
    style={{ 
      transform: `scale(${progress})`,
      filter: 'brightness(1.5) drop-shadow(0 0 8px rgba(52, 211, 153, 0.6))'
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-6-6a1 1 0 011.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
      fill="currentColor"
    />
  </svg>
)

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-20  backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
            Y además..
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full mb-4"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 top-0 w-0.5 h-full bg-emerald-400/30"
            style={{ scaleY: scaleX }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
function TimelineEvent({
  event,
  index,
  scrollYProgress,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  scrollYProgress: any
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className="mb-12 flex justify-start items-start w-full gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="z-20 flex items-center justify-center flex-shrink-0">
        <motion.div
          className="w-12 h-12 backdrop-blur-sm rounded-full border-2 border-emerald-400/50 flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          style={{ 
            boxShadow: '0 0 20px rgba(52, 211, 153, 0.3)' 
          }}
        >
          <CheckIcon progress={1} />
        </motion.div>
      </div>
      <motion.div
        className="flex-1"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:border-emerald-400/50 hover:bg-white/15 transition-all duration-300">
          <span className="inline-block px-3 py-1 text-xl font-bold text-emerald-400  rounded-full mb-3">
            {event.year}
          </span>
          <h3 className=" font-bold mb-2 text-white leading-tight">{event.title}</h3>
          <p className="text-white/70 text-base">{event.description}</p>
          <div className="mt-4">
            {typeof event.details === 'string' ? (
              <p className="text-sm text-white/60 leading-relaxed">{event.details}</p>
            ) : (
              event.details
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
}
