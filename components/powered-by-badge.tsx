"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Clock, DollarSign, Users, Award, X, CheckCircle, Zap, Globe } from "lucide-react"


export function PoweredByBadge() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (showSidebar && isMobile) {
      const timer = setTimeout(() => {
        setShowSidebar(false)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [showSidebar, isMobile])

  const handleClick = () => {
    setShowSidebar(true)
  }

  const handleClose = () => {
    setShowSidebar(false)
  }

  return (
    <>
      <div className="relative inline-block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-3 py-2 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-full text-xs text-gray-300 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]"
          onClick={handleClick}
        >
          <span className="text-xs ml-1 mr-1">El 31 de diciembre de 2025</span>
        </motion.div>
      </div>
    </>
  )
}
