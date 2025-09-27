# 🚀 MercadoShops Migration Landing

Landing page optimizada para ayudar a comerciantes a migrar de MercadoShops a sus propias tiendas online.

## ✨ Características

- **Hero Section** con video de fondo
- **Formulario de contacto** integrado con EmailJS
- **Diseño responsive** optimizado para móviles
- **Animaciones suaves** con Framer Motion
- **Deploy automático** en Netlify

## 🛠️ Tecnologías

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- shadcn/ui

## 🚀 Deployment

### En Netlify:

1. Conecta tu repositorio de GitHub
2. Netlify detectará automáticamente la configuración
3. El sitio se desplegará en cada push a main

### Variables de entorno (opcional):

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

## 📧 Configuración de Emails

Ver `EMAILJS_SETUP.md` para instrucciones detalladas de configuración de EmailJS.

## 🔧 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar build local
npm start
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── page.tsx          # Página principal
│   └── layout.tsx        # Layout base
├── components/
│   ├── contact-form.tsx  # Formulario de contacto
│   ├── typing-hero.tsx   # Hero con animación
│   └── ui/              # Componentes UI
├── public/              # Archivos estáticos
└── styles/             # Estilos globales
```

## 📊 Performance

- ⚡ Optimizado para Core Web Vitals
- 🎯 Diseño centrado en conversión
- 📱 Mobile-first responsive
- 🔒 Headers de seguridad configurados

---

**Desarrollado para ayudar a comerciantes a hacer la transición a tiendas propias** 🛍️