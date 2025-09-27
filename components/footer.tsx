"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
<<<<<<< HEAD
import { ChevronDown, ChevronUp, MessageSquare, Phone, Mail, Linkedin } from "lucide-react"
=======
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react"
>>>>>>> 4379fcf94ef83abff5fd029075a6a0cf2282d3ca
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
<<<<<<< HEAD
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
=======
      title: "Services",
      items: ["Web Development", "Mobile Apps", "Physical Products", "SEO", "Google Ads", "Patent Services"],
    },
    {
      id: "company",
      title: "Company",
      items: ["About", "Portfolio", "Projects", "Process", "Careers", "Blog"],
    },
    {
      id: "resources",
      title: "Resources",
      items: ["Documentation", "Support", "API", "Status", "Security", "Downloads"],
>>>>>>> 4379fcf94ef83abff5fd029075a6a0cf2282d3ca
    },
    {
      id: "legal",
      title: "Legal",
<<<<<<< HEAD
      items: ["Privacidad", "Términos", "Cookies", "GDPR", "Accesibilidad", "Licencias"],
=======
      items: ["Privacy", "Terms", "Cookies", "GDPR", "Accessibility", "Licenses"],
>>>>>>> 4379fcf94ef83abff5fd029075a6a0cf2282d3ca
    },
  ]

  return (
<<<<<<< HEAD
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
=======
    <footer className="py-8 px-4 sm:px-6 border-t border-border/50 relative overflow-hidden">
      {/* Code background */}
      <div className="absolute inset-0 opacity-5">
        <pre className="text-xs text-primary/30 font-mono leading-relaxed transform rotate-6 scale-150 absolute -top-20 -left-20">
          {`function innovate() {
  const solutions = [];
  
  // Web Development
  solutions.push({
    framework: 'Next.js',
    backend: 'Node.js',
    database: 'PostgreSQL',
    deployment: 'Vercel'
  });
  
  // Mechanical Engineering
  solutions.push({
    design: 'SolidWorks',
    simulation: 'ANSYS',
    manufacturing: 'CNC',
    materials: 'Advanced Composites'
  });
}`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Desktop Footer */}
        <div className="hidden md:flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <img src="/images/weltivation-logo.png" alt="Weltivation" className="h-14" />
            <FooterPopup />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Weltivation. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => (window.location.href = "/support")}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-4 py-2 text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Start Chat
              </Button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Subscribe to our newsletter</span>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer - Stacked with collapsible sections */}
        <div className="md:hidden space-y-6">
          {/* Logo and main info */}
          <div className="text-center space-y-4">
            <img src="/images/weltivation-logo.png" alt="Weltivation" className="h-12 mx-auto" />
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Weltivation. All rights reserved.
            </div>
          </div>

          {/* Collapsible sections */}
          <div className="space-y-2">
            {footerSections.map((section) => (
              <div key={section.id} className="border border-border/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-background/50 hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-sm">{section.title}</span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-2 border-t border-border/30">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={index}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Newsletter signup and chat button */}
          <div className="text-center space-y-4 pt-4 border-t border-border/30">
            <span className="text-sm text-muted-foreground">Stay updated</span>
            <div className="px-4">
              <NewsletterForm />
            </div>
            <Button
              onClick={() => (window.location.href = "/support")}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-4 py-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
>>>>>>> 4379fcf94ef83abff5fd029075a6a0cf2282d3ca
          </div>
        </div>
      </div>
    </footer>
  )
}
