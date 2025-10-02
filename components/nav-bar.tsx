"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Users, Briefcase, Phone, FileText, Settings, Zap, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { name: t?.("nav.services") || "Servicios", href: "/services", icon: Settings },
    { name: t?.("nav.projects") || "Proyectos", href: "/projects", icon: Briefcase },
    { name: t?.("nav.process") || "Proceso", href: "/process", icon: FileText },
    { name: t?.("nav.support") || "Soporte", href: "/support", icon: Users },
    { name: "Partnership", href: "/partnership", icon: Handshake },
  ]

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b ${scrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent"}`}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-emerald-500 font-bold text-lg">Rafael Web Solutions</div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${pathname === item.href ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"}`}
              >
                {item.name}
              </Link>
            ))}

            <Button asChild className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
              <Link href="/consultation">Consulta Gratis</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Link href="/consultation" onClick={scrollToTop} className="mr-3">
              <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-2">
                <Zap className="w-4 h-4 mr-1" />
                Free
              </Button>
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`md:hidden absolute top-full left-0 right-0 ${scrolled ? "bg-black/70" : "bg-black/30"} backdrop-blur-md border-b border-gray-800`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                    className={`flex items-center space-x-2 text-base font-medium transition-colors duration-200 ${pathname === item.href ? "text-emerald-400" : "text-gray-300 hover:text-white"}`}
                  >
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
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white">Free Consultation</Button>
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

