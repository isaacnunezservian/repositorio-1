"use client"

<<<<<<< HEAD
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Home, Users, Briefcase, Phone, FileText, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Servicios", href: "/services", icon: Settings },
    { name: "Proyectos", href: "/projects", icon: Briefcase },
    { name: "Proceso", href: "/process", icon: FileText },
    { name: "Portafolio", href: "/portfolio", icon: Users },
    { name: "Contacto", href: "/contact", icon: Phone },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-emerald-500 font-bold text-xl">
              Rafael Web Solutions
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            <Button 
              asChild
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white"
            >
              <Link href="/consultation">
                Consulta Gratis
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
=======
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Monitor, Handshake, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Services", href: "/services" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.process"), href: "/process" },
    { name: t("nav.support"), href: "/support" },
    { name: "Partnership", href: "/partnership", icon: <Handshake className="w-4 h-4" /> },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-gray-800/50" : "bg-black/30 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <Image
              src="/images/weltivation-logo.png"
              alt="Weltivation"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={scrollToTop}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href ? "text-emerald-400" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.icon && item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right side items - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <Link
              href="/corporate-login"
              onClick={scrollToTop}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Monitor className="w-5 h-5" />
            </Link>
            <Link href="/consultation" onClick={scrollToTop}>
              <Button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button and Free Consultation */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link href="/consultation" onClick={scrollToTop}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium text-xs px-3 py-2"
              >
                <Zap className="w-3 h-3 mr-1" />
                Free
              </Button>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> 4379fcf94ef83abff5fd029075a6a0cf2282d3ca
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
<<<<<<< HEAD
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              
              <div className="pt-2">
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/consultation">
                    Consulta Gratis
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
=======
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b border-gray-800 ${
                scrolled ? "bg-black/70" : "bg-black/30"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                    className={`flex items-center space-x-2 text-base font-medium transition-colors duration-200 ${
                      pathname === item.href ? "text-emerald-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.icon && item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-700">
                  <Link
                    href="/consultation"
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                  >
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium">
                      <Zap className="w-4 h-4 mr-2" />
                      Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
>>>>>>> 4379fcf94ef83abff5fd029075a6a0cf2282d3ca
