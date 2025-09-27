"use client"

import { Palette, ShoppingCart, CreditCard, Truck, Settings, Globe } from "lucide-react"

interface ServiceAdvantage {
  title: string
  description: string
  icon: React.ReactNode
}

export default function Tienda() {
  const serviceAdvantages: ServiceAdvantage[] = [
    {
      title: " Diseño atractivo e intuitivo",
      description: "Una web de alto impacto visual pero con una experiencia de compra similar a MercadoLibre",
      icon: <Palette className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "Especificaciones y carrito de compras",
      description: "Fotos, detalles técnicos,colores y variantes para cada producto. Un carrito de compras dinámico. ",
      icon: <ShoppingCart className="h-6 w-6 text-green-400" />,
    },
    {
      title: "Checkout y Pagos",
      description: "Pagos por transferencia o MercadoPago. Opción de seña online y pago en el local. Generación automática de comprobantes.",
      icon: <CreditCard className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "Gestor de envíos",
      description: "Podes elegir tu propio servicio de motomensajería o integrar los provedores clásicos(Andreani, OCA, etc).",
      icon: <Truck className="h-6 w-6 text-orange-400" />,
    },
    {
      title: "Panel de administrador",
      description: "Gestión completa de tu tienda, productos y pedidos desde un solo lugar. Base de datos dispobible para remarketing.",
      icon: <Settings className="h-6 w-6 text-cyan-400" />,
    },
    {
      title: "Estructura Web",
      description: "Link a WhatsApp, Barra de Navegación y Footer. Links de redes y contacto.Mapa de Local.",
      icon: <Globe className="h-6 w-6 text-indigo-400" />,
    },
  ]

  return (
    <div className="px-4  max-w-6xl mx-auto ">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-emerald-400 via-green-400 to-green-600 bg-clip-text text-transparent leading-tight">
            La tienda que te ofrecemos
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full"></div>
        </div>
      <div className=" rounded-2xl p-6 sm:p-8 lg:p-12 mb-16 bg-white/30 backdrop-blur-xl">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {serviceAdvantages.map((benefit, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-base sm:text-lg leading-tight">{benefit.title}</h4>
              </div>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  )
}