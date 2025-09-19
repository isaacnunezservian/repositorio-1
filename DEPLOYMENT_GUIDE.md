# 🚀 Guía de Deployment a Netlify

## Pasos para subir a GitHub y conectar con Netlify:

### 1. Preparar el repositorio local
```bash
cd "C:\Users\Rafael\Desktop\Web landing"
git init
git add .
git commit -m "Initial commit: Landing page completa"
```

### 2. Crear repositorio en GitHub
1. Ve a [github.com](https://github.com)
2. Crea un nuevo repositorio
3. **NO** inicialices con README (ya tienes uno local)
4. Copia la URL del repositorio

### 3. Conectar con GitHub
```bash
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git branch -M main
git push -u origin main
```

### 4. Deployment en Netlify
1. Ve a [netlify.com](https://netlify.com)
2. "Add new site" > "Import an existing project"
3. Conecta con GitHub
4. Selecciona tu repositorio
5. Netlify detectará automáticamente:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. ¡Deploy!

### 5. Configurar EmailJS (después del deploy)
1. Sigue las instrucciones en `EMAILJS_SETUP.md`
2. Actualiza las líneas comentadas en `contact-form.tsx`
3. Haz commit y push para actualizar el sitio

## ✅ Lo que ya está configurado:

- ✅ `.gitignore` optimizado
- ✅ `netlify.toml` con configuraciones
- ✅ `package.json` optimizado para producción
- ✅ Headers de seguridad
- ✅ Caché optimizado
- ✅ Formulario de contacto listo para EmailJS

## 🔧 Variables de entorno en Netlify (opcional):

En el dashboard de Netlify, ve a:
"Site settings" > "Environment variables" y añade:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

## 📊 Archivos que NO se subirán a GitHub:

- `node_modules/` (dependencias)
- `.next/` (build cache)
- `.env*` (variables de entorno)
- `sadas.txt` (archivo personal)
- IDE configurations
- OS generated files

¡Tu sitio estará listo en minutos! 🎉