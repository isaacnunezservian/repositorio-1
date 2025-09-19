"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, User, Building, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import emailjs from '@emailjs/browser'

type ContactData = {
  name: string
  businessName: string
  contactMethod: "email" | "phone"
  email: string
  phone: string
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
    message: "",
  })

  const [errors, setErrors] = useState<Partial<ContactData>>({})

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

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) {
      if (step < 2) {
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
        // Prepare email data
        const templateParams = {
          to_email: 'isaac.nunezservian@gmail.com',
          from_name: contactData.name,
          business_name: contactData.businessName,
          contact_method: contactData.contactMethod === 'email' ? 'Email' : 'Teléfono',
          contact_info: contactData.contactMethod === 'email' ? contactData.email : contactData.phone,
          message: contactData.message || 'Sin mensaje adicional',
          date: new Date().toLocaleString('es-AR', {
            timeZone: 'America/Argentina/Buenos_Aires',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          })
        }

        // Send email using EmailJS
        // Note: You'll need to configure EmailJS service, template, and get your public key
        // For now, we'll just log the data and show success
        console.log("Form data to be sent:", templateParams)
        
        // Uncomment this when you configure EmailJS:
        // await emailjs.send(
        //   'YOUR_SERVICE_ID',
        //   'YOUR_TEMPLATE_ID',
        //   templateParams,
        //   'YOUR_PUBLIC_KEY'
        // )
        
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
            message: "",
          })
          onClose()
        }, 3000)
        
      } catch (error) {
        console.error('Error sending email:', error)
        // You might want to show an error message to the user here
        alert('Error al enviar el formulario. Por favor intenta nuevamente.')
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
                <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-400">
                  Nos pondremos en contacto contigo muy pronto para ayudarte con tu migración a una web propia.
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
                    {stepTitles[step]} ({step + 1}/3)
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="flex mb-6">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex-1">
                      <div
                        className={`h-1 rounded-full ${
                          i <= step ? "bg-emerald-500" : "bg-gray-700"
                        } ${i < 2 ? "mr-2" : ""}`}
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
                            ¿Cómo prefieres que te contactemos? *
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
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Cuéntanos sobre tu negocio (opcional)
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

                  {step < 2 ? (
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
    </AnimatePresence>
  )
}