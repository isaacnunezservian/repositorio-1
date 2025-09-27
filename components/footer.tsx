"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, MessageSquare, Phone, Mail, Linkedin } from "lucide-react"
import { NewsletterForm } from "./newsletter-form"
import { FooterPopup } from "./footer-popup"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const footerSections = [
    {
      id: "services",
      title: "Servicios",
      items: ["Tiendas Online", "E-commerce", "Desarrollo Web", "Marketing Digital", "SEO", "Consultoría"],
    },
    {
      id: "company",
      title: "Empresa",
      items: ["Nosotros", "Portafolio", "Proyectos", "Proceso", "Blog", "Testimonios"],
    },
    {
      id: "contact",
      title: "Contacto",
      items: ["Consulta Gratuita", "WhatsApp", "Email", "LinkedIn", "Soporte", "FAQ"],
    },
    {
      id: "legal",
      title: "Legal",
      items: ["Privacidad", "Términos", "Cookies", "GDPR", "Accesibilidad", "Licencias"],
    },
  ]

  return (
    <footer className="py-12 px-4 sm:px-6  backdrop-blur-sm border-t border-slate-800/50 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Teléfonos de contacto</h3>
               <div className="flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Rafael: +54 9 11 7006-1908</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Jonathan: +54 9 11 2578-0200</span>
                </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-slate-300 font-medium text-sm uppercase tracking-wider">Contacto</h4>
              <div className="space-y-3">
                
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <a href="mailto:isaac.nunezservian@gmail.com" className="hover:text-emerald-400 transition-colors">
                    isaac.nunezservian@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                  <a 
                    href="https://linkedin.com/in/isaac-nunez-dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Isaac Núñez - Developer
                  </a>
                </div>
              </div>
            </div>

      
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} Rafael Nuñez & Jhonatan Victorica. Todos los derechos reservados.
            </div>
            
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden">
          <div className="space-y-8">
          

            {/* Contact Grid */}
            <div className="grid grid-cols-1 gap-6">
              <div className=" rounded-lg p-6 border">
                <h4 className="text-slate-300 font-medium text-sm mb-4 text-center">Contacto</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>Rafael: +54 9 11 7006-1908</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>Jonathan: +54 9 11 2578-0200</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <a href="mailto:isaac.nunezservian@gmail.com" className="hover:text-emerald-400 transition-colors">
                      isaac.nunezservian@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                    <a 
                      href="https://linkedin.com/in/isaac-nunez-dev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      Isaac Núñez - Developer
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="pt-6 border-t border-slate-800/50 text-center space-y-4">
              <div className="text-slate-500 text-xs">
                &copy; {new Date().getFullYear()} Rafael Nuñez & Jhonata Victorica. Todos los derechos reservados.
              </div>
              
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
