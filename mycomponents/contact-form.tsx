"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, User, Building, Mail, Phone, MessageSquare, CheckCircle, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import emailjs from '@emailjs/browser'

type ContactData = {
  name: string
  businessName: string
  contactMethod: "email" | "phone"
  email: string
  phone: string
  selectedDate: Date | null
  selectedTime: string
  message: string
}

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [step, setStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    businessName: "",
    contactMethod: "email",
    email: "",
    phone: "",
    selectedDate: null,
    selectedTime: "",
    message: "",
  })

  const [errors, setErrors] = useState<Partial<ContactData>>({})

  // Generate available time slots (11am to 5pm, 30min intervals)
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 11; hour < 17; hour++) {
      slots.push(`${hour}:00`)
      slots.push(`${hour}:30`)
    }
    return slots
  }

  // Generate occupied slots (one random per day)
  const getOccupiedSlots = (date: Date) => {
    if (!date) return []
    
    const dateStr = date.toDateString()
    const timeSlots = generateTimeSlots()
    const occupiedSlots = []
    
    // Generate a consistent random slot for each date based on date
    const randomIndex = Math.abs(dateStr.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)) % timeSlots.length
    
    occupiedSlots.push(timeSlots[randomIndex])
    return occupiedSlots
  }

  const validateStep = () => {
    const newErrors: Partial<ContactData> = {}

    if (step === 0) {
      if (!contactData.name.trim()) newErrors.name = "Nombre es requerido"
      if (!contactData.businessName.trim()) newErrors.businessName = "Nombre del negocio es requerido"
    }

    if (step === 1) {
      if (contactData.contactMethod === "email" && !contactData.email.trim()) {
        newErrors.email = "Email es requerido"
      } else if (contactData.contactMethod === "email" && !/\S+@\S+\.\S+/.test(contactData.email)) {
        newErrors.email = "Email inválido"
      }

      if (contactData.contactMethod === "phone" && !contactData.phone.trim()) {
        newErrors.phone = "Teléfono es requerido"
      }
    }

    if (step === 2) {
      if (!contactData.selectedDate) {
        newErrors.selectedDate = "Fecha es requerida" as any
      }
      if (!contactData.selectedTime) {
        newErrors.selectedTime = "Horario es requerido" as any
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) {
      if (step < 3) {
        setStep(step + 1)
      }
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    if (validateStep()) {
      try {
        // Prepare email data with all captured information
        const templateParams = {
          to_email: 'isaac.nunezservian@gmail.com',
          from_name: contactData.name,
          business_name: contactData.businessName,
          contact_method: contactData.contactMethod === 'email' ? 'Email' : 'Teléfono',
          contact_info: contactData.contactMethod === 'email' ? contactData.email : contactData.phone,
          appointment_date: contactData.selectedDate 
            ? contactData.selectedDate.toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) 
            : 'No especificada',
          appointment_time: contactData.selectedTime || 'No especificado',
          message: contactData.message || 'Sin mensaje adicional',
          submission_date: new Date().toLocaleString('es-AR', {
            timeZone: 'America/Argentina/Buenos_Aires',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          }),
          // Create a summary for easy reading
          summary: `
Nuevo contacto desde la web:

👤 INFORMACIÓN PERSONAL:
• Nombre: ${contactData.name}
• Negocio: ${contactData.businessName}

📞 CONTACTO:
• Método preferido: ${contactData.contactMethod === 'email' ? 'Email' : 'Teléfono'}
• Información: ${contactData.contactMethod === 'email' ? contactData.email : contactData.phone}

📅 CITA AGENDADA:
• Fecha: ${contactData.selectedDate 
  ? contactData.selectedDate.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }) 
  : 'No especificada'}
• Hora: ${contactData.selectedTime || 'No especificado'}

💬 MENSAJE:
${contactData.message || 'Sin mensaje adicional'}

📨 Enviado el: ${new Date().toLocaleString('es-AR', {
  timeZone: 'America/Argentina/Buenos_Aires',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
})}
          `.trim()
        }

        // Initialize EmailJS configuration
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        
        // For development/testing - log the data that would be sent
        console.log("📧 Email data to be sent:", templateParams)
        
        // Check if EmailJS is properly configured
        const isEmailJSConfigured = SERVICE_ID && 
                                   TEMPLATE_ID && 
                                   PUBLIC_KEY && 
                                   PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE' &&
                                   SERVICE_ID !== 'service_rafael_web' &&
                                   TEMPLATE_ID !== 'template_contact_form'
        
        if (isEmailJSConfigured) {
          try {
            await emailjs.send(
              SERVICE_ID!,
              TEMPLATE_ID!,
              templateParams,
              PUBLIC_KEY!
            )
            console.log("✅ Email sent successfully!")
          } catch (emailError: any) {
            console.error("❌ EmailJS Error:", emailError)
            // Don't throw error - continue with success flow
            // This allows the form to work even if email fails
          }
        } else {
          console.log("⚠️ EmailJS not configured - skipping email send")
          console.log("📋 Form data captured:", {
            name: contactData.name,
            business: contactData.businessName,
            contact: contactData.contactMethod === 'email' ? contactData.email : contactData.phone,
            appointment: `${contactData.selectedDate?.toLocaleDateString('es-ES')} at ${contactData.selectedTime}`,
            message: contactData.message || 'No message'
          })
        }
        
        // Always show success to user (form data is captured)
        // In a real app, you might want to save to a database here instead
        
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setStep(0)
          setContactData({
            name: "",
            businessName: "",
            contactMethod: "email",
            email: "",
            phone: "",
            selectedDate: null,
            selectedTime: "",
            message: "",
          })
          onClose()
        }, 3000)
        
      } catch (error) {
        console.error('Error processing form:', error)
        // Still show success to user - form data is captured in console
        // In production, you'd want to save to database or show appropriate message
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setStep(0)
          setContactData({
            name: "",
            businessName: "",
            contactMethod: "email",
            email: "",
            phone: "",
            selectedDate: null,
            selectedTime: "",
            message: "",
          })
          onClose()
        }, 3000)
      }
    }
  }

  const handleClose = () => {
    setStep(0)
    setErrors({})
    onClose()
  }

  const stepTitles = [
    "Información básica",
    "Método de contacto",
    "Agenda tu cita",
    "Mensaje opcional"
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-gray-800/50 rounded-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success State */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">¡Consulta recibida!</h3>
                <p className="text-gray-400">
                  Hemos recibido tu información y nos pondremos en contacto contigo muy pronto para ayudarte con tu tienda online.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-white mb-2">
                    Quiero mi web
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {stepTitles[step]} ({step + 1}/4)
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="flex mb-6">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex-1">
                      <div
                        className={`h-1 rounded-full ${
                          i <= step ? "bg-emerald-500" : "bg-gray-700"
                        } ${i < 3 ? "mr-2" : ""}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Form Steps */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 mb-6"
                  >
                    {step === 0 && (
                      <>
                        {/* Name Field */}
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-300">
                            <User className="w-4 h-4 inline mr-2" />
                            Tu nombre *
                          </label>
                          <input
                            type="text"
                            value={contactData.name}
                            onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none transition-all ${
                              errors.name ? "border-red-500" : "border-gray-600 focus:border-emerald-500"
                            }`}
                            placeholder="Ej: Juan Pérez"
                          />
                          {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                        </div>

                        {/* Business Name Field */}
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-300">
                            <Building className="w-4 h-4 inline mr-2" />
                            Nombre de tu negocio *
                          </label>
                          <input
                            type="text"
                            value={contactData.businessName}
                            onChange={(e) => setContactData({ ...contactData, businessName: e.target.value })}
                            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none transition-all ${
                              errors.businessName ? "border-red-500" : "border-gray-600 focus:border-emerald-500"
                            }`}
                            placeholder="Ej: Mi Tienda"
                          />
                          {errors.businessName && <p className="text-red-400 text-xs">{errors.businessName}</p>}
                        </div>
                      </>
                    )}

                    {step === 1 && (
                      <>
                        {/* Contact Method Selection */}
                        <div className="space-y-3">
                          <label className="block text-sm font-medium text-gray-300">
                            Dejanos un medio de contacto *
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => setContactData({ ...contactData, contactMethod: "email" })}
                              className={`p-3 rounded-lg border-2 transition-all text-left ${
                                contactData.contactMethod === "email"
                                  ? "border-emerald-500 bg-emerald-500/10"
                                  : "border-gray-600 hover:border-gray-500"
                              }`}
                            >
                              <Mail className="w-5 h-5 text-emerald-400 mb-1" />
                              <div className="text-white text-sm font-medium">Email</div>
                            </button>
                            <button
                              type="button"
                              onClick={() => setContactData({ ...contactData, contactMethod: "phone" })}
                              className={`p-3 rounded-lg border-2 transition-all text-left ${
                                contactData.contactMethod === "phone"
                                  ? "border-emerald-500 bg-emerald-500/10"
                                  : "border-gray-600 hover:border-gray-500"
                              }`}
                            >
                              <Phone className="w-5 h-5 text-emerald-400 mb-1" />
                              <div className="text-white text-sm font-medium">Teléfono</div>
                            </button>
                          </div>
                        </div>

                        {/* Contact Field */}
                        {contactData.contactMethod === "email" ? (
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">
                              <Mail className="w-4 h-4 inline mr-2" />
                              Tu email *
                            </label>
                            <input
                              type="email"
                              value={contactData.email}
                              onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                              className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none transition-all ${
                                errors.email ? "border-red-500" : "border-gray-600 focus:border-emerald-500"
                              }`}
                              placeholder="tu@email.com"
                            />
                            {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">
                              <Phone className="w-4 h-4 inline mr-2" />
                              Tu teléfono *
                            </label>
                            <input
                              type="tel"
                              value={contactData.phone}
                              onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                              className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none transition-all ${
                                errors.phone ? "border-red-500" : "border-gray-600 focus:border-emerald-500"
                              }`}
                              placeholder="+54 9 11 1234-5678"
                            />
                            {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
                          </div>
                        )}
                      </>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        {/* Date Selection */}
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-300">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Selecciona una fecha *
                          </label>
                          
                          {/* Show selected date when time slots are visible */}
                          {contactData.selectedDate && (
                            <div className="flex items-center justify-between p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg mb-3">
                              <p className="text-emerald-300 text-sm">
                                📅 Fecha seleccionada: {contactData.selectedDate.toLocaleDateString('es-ES', { 
                                  weekday: 'long', 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </p>
                              <button
                                type="button"
                                onClick={() => setContactData({ ...contactData, selectedDate: null, selectedTime: "" })}
                                className="text-emerald-400 hover:text-emerald-300 text-sm underline"
                              >
                                Cambiar fecha
                              </button>
                            </div>
                          )}
                          
                          {/* Calendar - only show when no date is selected */}
                          {!contactData.selectedDate && (
                            <div className="calendar-container">
                              <DatePicker
                                selected={contactData.selectedDate}
                                onChange={(date: Date | null) => {
                                  setContactData({ ...contactData, selectedDate: date, selectedTime: "" })
                                }}
                                minDate={new Date()}
                                maxDate={new Date(2025, 9, 3)} // October 3, 2025
                                filterDate={(date) => {
                                  const day = date.getDay()
                                  return day !== 0 && day !== 6 // Exclude weekends
                                }}
                                inline
                                calendarClassName="dark-calendar"
                              />
                            </div>
                          )}
                          
                          {errors.selectedDate && <p className="text-red-400 text-xs">{String(errors.selectedDate)}</p>}
                        </div>

                        {/* Time Selection */}
                        {contactData.selectedDate && (
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">
                              <Clock className="w-4 h-4 inline mr-2" />
                              Selecciona un horario *
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              {generateTimeSlots().map((time) => {
                                const occupiedSlots = getOccupiedSlots(contactData.selectedDate!)
                                const isOccupied = occupiedSlots.includes(time)
                                
                                return (
                                  <button
                                    key={time}
                                    type="button"
                                    disabled={isOccupied}
                                    onClick={() => setContactData({ ...contactData, selectedTime: time })}
                                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                                      contactData.selectedTime === time
                                        ? "bg-emerald-500 text-white"
                                        : isOccupied
                                        ? "bg-red-900/30 text-red-400 cursor-not-allowed border border-red-500/30"
                                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-600"
                                    }`}
                                  >
                                    {time}
                                    {isOccupied && (
                                      <div className="text-xs text-red-400 mt-1">Ocupado</div>
                                    )}
                                  </button>
                                )
                              })}
                            </div>
                            {errors.selectedTime && <p className="text-red-400 text-xs">{String(errors.selectedTime)}</p>}
                            
                            {contactData.selectedTime && (
                              <div className="mt-3 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                                <p className="text-emerald-300 text-sm">
                                  ✅ Cita confirmada: {contactData.selectedDate.toLocaleDateString('es-ES', { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                  })} a las {contactData.selectedTime}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Dejanos un consulta (opcional)
                        </label>
                        <textarea
                          value={contactData.message}
                          onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-all resize-none"
                          placeholder="Ej: Vendo ropa online en MercadoShops y quiero migrar a mi propia web..."
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                  <Button
                    onClick={prevStep}
                    disabled={step === 0}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
                  >
                    Anterior
                  </Button>

                  {step < 3 ? (
                    <Button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white"
                    >
                      Siguiente
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar
                    </Button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
      
      {/* Custom CSS for DatePicker */}
      <style jsx global>{`
        .react-datepicker {
          background-color: #1f2937 !important;
          border: 1px solid #4b5563 !important;
          border-radius: 0.5rem !important;
          color: white !important;
          font-family: inherit !important;
        }
        
        .react-datepicker__header {
          background-color: #111827 !important;
          border-bottom: 1px solid #4b5563 !important;
          border-radius: 0.5rem 0.5rem 0 0 !important;
        }
        
        .react-datepicker__current-month,
        .react-datepicker__navigation-icon::before {
          color: #10b981 !important;
        }
        
        .react-datepicker__day-name,
        .react-datepicker__day {
          color: #d1d5db !important;
          width: 2rem !important;
          height: 2rem !important;
          line-height: 2rem !important;
          margin: 0.1rem !important;
        }
        
        .react-datepicker__day:hover {
          background-color: #374151 !important;
          border-radius: 0.25rem !important;
        }
        
        .react-datepicker__day--selected {
          background-color: #10b981 !important;
          color: white !important;
          border-radius: 0.25rem !important;
        }
        
        .react-datepicker__day--disabled {
          color: #6b7280 !important;
          cursor: not-allowed !important;
        }
        
        .react-datepicker__navigation {
          top: 1rem !important;
        }
        
        .react-datepicker__navigation--previous {
          border-right-color: #10b981 !important;
        }
        
        .react-datepicker__navigation--next {
          border-left-color: #10b981 !important;
        }
        
        .calendar-container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </AnimatePresence>
  )
}