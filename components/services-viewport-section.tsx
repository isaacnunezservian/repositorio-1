"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  Globe,
  Smartphone,
  Cog,
  Package,
  Building2,
  Laptop,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Shield,
  Rocket,
  Target,
  BarChart,
  Lightbulb,
  Layers,
  Code,
  Database,
  Cloud,
  Lock,
  Gauge,
  Activity,
  ShoppingCart,
  Grid3X3,
  Settings,
  Truck,
  Eye,
  RefreshCw,
  Clock,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "catalogo",
    title: "Catálogo",
    subtitle: "Moderno, Rápido y Escalable",
    description:
      "Creamos un catálogo completo y organizado que facilita la navegación de tus clientes. Con categorías claras, filtros inteligentes y búsqueda optimizada para que encuentren lo que necesitan.",
    icon: <Grid3X3 className="w-8 h-8" />,
    features: [
      { icon: <Rocket className="w-5 h-5" />, text: "Carga rápida de productos" },
      { icon: <Shield className="w-5 h-5" />, text: "Seguridad en datos de productos" },
      { icon: <Target className="w-5 h-5" />, text: "Diseño orientado a conversión" },
      { icon: <Gauge className="w-5 h-5" />, text: "Disponibilidad 99.9%" },
    ],
    stats: [
      { label: "Mejora en velocidad", value: "340%" },
      { label: "Aumento conversión", value: "127%" },
      { label: "Satisfacción cliente", value: "98%" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    bgGradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
    accentColor: "text-blue-400",
  },
  {
    id: "carrito",
    title: "Carrito",
    subtitle: "Nativo y Multiplataforma",
    description:
      "Sistema de carrito inteligente que permite a tus clientes comprar fácil y rápido. Incluye opción 'Pagar en local' con cupón QR para retirar en tu tienda física.",
    icon: <ShoppingCart className="w-8 h-8" />,
    features: [
      { icon: <Users className="w-5 h-5" />, text: "Compatible multi-dispositivo" },
      { icon: <Zap className="w-5 h-5" />, text: "Sincronización en tiempo real" },
      { icon: <Lock className="w-5 h-5" />, text: "Seguridad avanzada" },
      { icon: <BarChart className="w-5 h-5" />, text: "Analytics integrados" },
    ],
    stats: [
      { label: "Calificación tienda", value: "4.8★" },
      { label: "Retención usuarios", value: "85%" },
      { label: "Velocidad checkout", value: "2x Más rápido" },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-purple-500 via-pink-400 to-purple-600",
    bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
    accentColor: "text-purple-400",
  },
  {
    id: "panel-admin",
    title: "Panel Admin",
    subtitle: "Automatización e Integración",
    description:
      "Panel de administración simple y potente para gestionar tu tienda. Controla pedidos, stock, ventas y clientes desde un solo lugar con reportes claros.",
    icon: <Settings className="w-8 h-8" />,
    features: [
      { icon: <Cog className="w-5 h-5" />, text: "Automatización de workflows" },
      { icon: <Database className="w-5 h-5" />, text: "Integración de datos" },
      { icon: <Cloud className="w-5 h-5" />, text: "Arquitectura en la nube" },
      { icon: <Layers className="w-5 h-5" />, text: "Diseño API-first" },
    ],
    stats: [
      { label: "Aumento eficiencia", value: "250%" },
      { label: "Reducción errores", value: "95%" },
      { label: "Automatización", value: "98%" },
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    gradient: "from-green-500 via-emerald-400 to-green-600",
    bgGradient: "from-green-500/20 via-emerald-400/10 to-green-600/20",
    accentColor: "text-green-400",
  },
  {
    id: "despacho",
    title: "Despacho",
    subtitle: "Ingeniería de Precisión",
    description:
      "Sistema de despacho optimizado que coordina el envío de productos con empresas de delivery. Incluye tracking en tiempo real y notificaciones automáticas.",
    icon: <Truck className="w-8 h-8" />,
    features: [
      { icon: <Target className="w-5 h-5" />, text: "Precisión en entregas" },
      { icon: <Cog className="w-5 h-5" />, text: "Sistemas automatizados" },
      { icon: <Shield className="w-5 h-5" />, text: "Control de calidad" },
      { icon: <Activity className="w-5 h-5" />, text: "Monitoreo continuo" },
    ],
    stats: [
      { label: "Precisión dimensional", value: "±0.01mm" },
      { label: "Tiempo de entrega", value: "24-48h" },
      { label: "Satisfacción", value: "96%" },
    ],
    technologies: ["AutoCAD", "SolidWorks", "CNC", "CAM", "Precisión CNC"],
    gradient: "from-orange-500 via-amber-400 to-orange-600",
    bgGradient: "from-orange-500/20 via-amber-400/10 to-orange-600/20",
    accentColor: "text-orange-400",
  },
  {
    id: "impacto-visual",
    title: "Impacto Visual",
    subtitle: "Innovación y Mercado",
    description:
      "Diseñamos la identidad visual de tu tienda online con colores, tipografías y elementos que conecten con tus clientes y reflejen tu marca personal.",
    icon: <Eye className="w-8 h-8" />,
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, text: "Investigación de mercado" },
      { icon: <Users className="w-5 h-5" />, text: "Prototipado con usuarios" },
      { icon: <Rocket className="w-5 h-5" />, text: "Iteración rápida" },
      { icon: <Star className="w-5 h-5" />, text: "Validación de concepto" },
    ],
    stats: [
      { label: "Éxito en lanzamiento", value: "92%" },
      { label: "ROI promedio", value: "3.2x" },
      { label: "Tiempo al mercado", value: "-40%" },
    ],
    technologies: ["Design Thinking", "Figma", "Prototype", "A/B Testing", "Analytics"],
    gradient: "from-indigo-500 via-blue-400 to-indigo-600",
    bgGradient: "from-indigo-500/20 via-blue-400/10 to-indigo-600/20",
    accentColor: "text-indigo-400",
  },
  {
    id: "sincronia",
    title: "Sincronía",
    subtitle: "Diseño Arquitectónico",
    description:
      "Mantenemos tu tienda online sincronizada con tu inventario local en tiempo real. Sin sobreventa, sin productos agotados showing como disponibles.",
    icon: <RefreshCw className="w-8 h-8" />,
    features: [
      { icon: <Building2 className="w-5 h-5" />, text: "Diseño estructural" },
      { icon: <Layers className="w-5 h-5" />, text: "Planificación espacial" },
      { icon: <Shield className="w-5 h-5" />, text: "Cumplimiento normativo" },
      { icon: <Award className="w-5 h-5" />, text: "Sostenibilidad" },
    ],
    stats: [
      { label: "Proyectos completados", value: "150+" },
      { label: "Satisfacción cliente", value: "96%" },
      { label: "Certificación sostenible", value: "89%" },
    ],
    technologies: ["AutoCAD", "Revit", "SketchUp", "3D Modeling", "BIM"],
    gradient: "from-rose-500 via-pink-400 to-rose-600",
    bgGradient: "from-rose-500/20 via-pink-400/10 to-rose-600/20",
    accentColor: "text-rose-400",
  },
]

export default function ServicesViewportSection() {
  const [currentService, setCurrentService] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const serviceRefs = useRef<(HTMLElement | null)[]>([])
  const router = useRouter()

  useEffect(() => {
    if (!isAutoRotating) return

    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoRotating])

  useEffect(() => {
    serviceRefs.current[currentService]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
  }, [currentService])

  const handleServiceClick = (index: number) => {
    setCurrentService(index)
    setIsAutoRotating(false)
    // Re-enable auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000)
  }

  const handleStartProjectClick = () => {
    router.push("/consultation")
  }

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 px-6 py-2 text-sm font-medium bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Servicios Especializados
            </Badge>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Experiencias Técnicas
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Inmersivas
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explora cada servicio en detalle con interfaces interactivas que muestran las tecnologías
            y capacidades que utilizamos para crear soluciones excepcionales.
          </p>
        </motion.div>

        {/* Enhanced Service Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              ref={(el) => {
                if (el) serviceRefs.current[index] = el
              }}
              onClick={() => handleServiceClick(index)}
              className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                currentService === index
                  ? "bg-white text-gray-900 shadow-2xl"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <span className={`${currentService === index ? "text-gray-900" : "text-white"}`}>
                  {service.icon}
                </span>
                <span>{service.title}</span>
              </div>
              {currentService === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
                  layoutId="activeServiceBg"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Service Display Area */}
        <div className="relative">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${
                currentService === index ? "block" : "hidden"
              } grid lg:grid-cols-2 gap-12 items-center`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Service Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div>
                  <motion.div
                    className="flex items-center space-x-4 mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl`}>
                      <span className="text-white">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white">{service.title}</h3>
                      <p className={`text-lg ${service.accentColor} font-medium`}>{service.subtitle}</p>
                    </div>
                  </motion.div>
                  <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                </div>

                {/* Enhanced Features Grid */}
                <motion.div
                  className="grid md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className={`${service.accentColor} flex-shrink-0`}>{feature.icon}</span>
                      <span className="text-white font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced CTA Section */}
                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <motion.button
                    onClick={handleStartProjectClick}
                    className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Iniciar Proyecto</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Enhanced Interactive UI Demo */}
              <motion.div
                className="relative order-first lg:order-last"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ServiceUIGraphic service={service} index={index} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// UI Graphics Components - Definidas antes del uso
function CatalogoUIGraphic({ service }: { service: any }) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Enhanced Phone Mockup */}
      <div className="relative">
        <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 text-xs">
              <span className="font-medium">9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* App Header */}
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
                <div className="h-3 bg-gray-300 rounded w-20"></div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="p-4 grid grid-cols-2 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 rounded-lg p-2 border border-gray-200 shadow-sm"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced App Features */}
      <div className="space-y-4">
        {service.features.slice(0, 3).map((feature: any, index: number) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function CarritoUIGraphic({ service }: { service: any }) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Enhanced Phone Mockup */}
      <div className="relative">
        <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 text-xs">
              <span className="font-medium">9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-4">
              <motion.div
                className="h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded w-3/4 shadow-sm"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-300 rounded w-full shadow-sm"></div>
                <div className="h-2 bg-gray-300 rounded w-2/3 shadow-sm"></div>
              </div>

              {/* Cart Items */}
              <div className="space-y-3 mt-6">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-sm"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Checkout Button */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
              <div className="bg-green-500 text-white text-center py-2 rounded-lg">
                <span className="text-sm font-medium">Pagar en Local - QR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Cart Features */}
      <div className="space-y-4">
        {service.features.slice(0, 3).map((feature: any, index: number) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function PanelAdminUIGraphic({ service }: { service: any }) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Enhanced Desktop Mockup */}
      <div className="relative">
        <div className="w-56 h-36 bg-gray-900 rounded-lg p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded overflow-hidden relative">
            {/* Window Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-gray-100 border-b border-gray-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-600">Panel Admin</div>
              <div className="w-4"></div>
            </div>

            {/* Dashboard Content */}
            <div className="p-3 space-y-3">
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Ventas", color: "bg-green-500" },
                  { label: "Productos", color: "bg-blue-500" },
                  { label: "Clientes", color: "bg-purple-500" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-2 bg-gray-50 rounded border border-gray-200 shadow-sm"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                  >
                    <div className={`w-full h-1 ${stat.color} rounded mb-1`}></div>
                    <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                  </motion.div>
                ))}
              </div>

              {/* Data Table */}
              <div className="space-y-1">
                <div className="h-1.5 bg-gray-400 rounded w-full"></div>
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-1 bg-gray-300 rounded w-full"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced System Features */}
      <div className="space-y-4">
        {service.features.slice(0, 3).map((feature: any, index: number) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DespachoUIGraphic({ service }: { service: any }) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Enhanced Delivery Truck */}
      <div className="relative">
        <div className="w-32 h-20 bg-gray-800 rounded-lg shadow-2xl">
          {/* Truck Body */}
          <div className="w-20 h-12 bg-blue-600 rounded-tl-lg rounded-bl-lg relative">
            <div className="absolute top-2 left-2 w-4 h-4 bg-blue-400 rounded-sm"></div>
            <div className="absolute top-2 right-2 w-4 h-6 bg-blue-400 rounded-sm"></div>
          </div>
          
          {/* Cargo Area */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-gray-600 rounded-tr-lg">
            <motion.div
              className="absolute inset-1 bg-yellow-400 rounded opacity-80"
              animate={{ opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="absolute inset-2 flex items-center justify-center">
              <Truck className="w-4 h-4 text-gray-800" />
            </div>
          </div>

          {/* Wheels */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-4 h-4 bg-gray-900 rounded-full border-2 border-gray-700"
              style={{ left: `${16 + i * 12}px` }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          ))}

          {/* Route Line */}
          <motion.div
            className="absolute -bottom-4 left-0 right-0 h-1 bg-green-500 rounded-full"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
        
        {/* GPS Tracking */}
        <div className="absolute -top-6 -right-6">
          <motion.div
            className="w-4 h-4 bg-green-500 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Number.POSITIVE_INFINITY 
            }}
          />
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Enhanced Delivery Features */}
      <div className="space-y-4">
        {service.features.slice(0, 3).map((feature: any, index: number) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ImpactoVisualUIGraphic({ service }: { service: any }) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Enhanced Design Canvas */}
      <div className="relative">
        <div className="w-48 h-32 bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          {/* Canvas Background */}
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 relative">
            {/* Color Palette */}
            <div className="absolute top-2 left-2 flex space-x-1">
              {['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500'].map((color, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 ${color} rounded-full shadow-sm`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                />
              ))}
            </div>

            {/* Design Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-20 h-16 bg-white rounded-lg shadow-lg p-3"
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="space-y-1">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                  <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                  <div className="flex justify-between mt-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Design Tools */}
            <motion.div
              className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Eye className="w-3 h-3 text-gray-600" />
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
              animate={{ 
                x: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-2 h-2 bg-purple-500 rounded"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Design Features */}
      <div className="space-y-4">
        {service.features.slice(0, 3).map((feature: any, index: number) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function SincroniaUIGraphic({ service }: { service: any }) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Enhanced Sync Dashboard */}
      <div className="relative">
        <div className="w-40 h-28 bg-gray-900 rounded-lg shadow-2xl p-3">
          <div className="w-full h-full bg-white rounded relative overflow-hidden">
            {/* Header */}
            <div className="bg-gray-100 px-2 py-1 border-b border-gray-200">
              <div className="text-xs text-gray-600 font-medium">Sistema de Sincronía</div>
            </div>

            {/* Sync Status */}
            <div className="p-2 space-y-2">
              {['MercadoShops', 'Local Store', 'Inventory'].map((system, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                    />
                    <span className="text-xs text-gray-700">{system}</span>
                  </div>
                  <RefreshCw className="w-3 h-3 text-gray-500" />
                </div>
              ))}

              {/* Progress Bar */}
              <div className="mt-3">
                <div className="text-xs text-gray-600 mb-1">Sincronización</div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <motion.div
                    className="bg-green-500 h-1 rounded-full"
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sync Arrows */}
        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 space-y-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                x: [0, 8, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Number.POSITIVE_INFINITY, 
                delay: i * 0.4 
              }}
            >
              <div className="w-4 h-0.5 bg-blue-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Sync Features */}
      <div className="space-y-4">
        {service.features.slice(0, 3).map((feature: any, index: number) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Enhanced UI Graphics Components
function ServiceUIGraphic({ service, index }: { service: any; index: number }) {
  const getServiceGraphic = () => {
    switch (service.id) {
      case "catalogo":
        return <CatalogoUIGraphic service={service} />
      case "carrito":
        return <CarritoUIGraphic service={service} />
      case "panel-admin":
        return <PanelAdminUIGraphic service={service} />
      case "despacho":
        return <DespachoUIGraphic service={service} />
      case "impacto-visual":
        return <ImpactoVisualUIGraphic service={service} />
      case "sincronia":
        return <SincroniaUIGraphic service={service} />
      default:
        return <CatalogoUIGraphic service={service} />
    }
  }

  return (
    <div className="relative">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Main UI Container */}
      <div className="relative bg-white/95 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 overflow-hidden shadow-2xl">
        {getServiceGraphic()}
      </div>
    </div>
  )
}