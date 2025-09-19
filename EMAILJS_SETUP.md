# Configuración de EmailJS

Para activar el envío de emails desde el formulario de contacto, sigue estos pasos:

## 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

## 2. Configurar servicio de email
1. En el dashboard, ve a "Email Services"
2. Añade un servicio (Gmail, Outlook, etc.)
3. Conecta tu cuenta de email isaac.nunezservian@gmail.com
4. Copia el **Service ID**

## 3. Crear template de email
1. Ve a "Email Templates"
2. Crea un nuevo template
3. Usa estas variables en tu template:

```
Nuevo lead desde la web:

Nombre: {{from_name}}
Negocio: {{business_name}}
Método de contacto preferido: {{contact_method}}
Información de contacto: {{contact_info}}
Mensaje: {{message}}
Fecha: {{date}}
```

4. Copia el **Template ID**

## 4. Obtener Public Key
1. Ve a "Account" > "General"
2. Copia tu **Public Key**

## 5. Actualizar el código
En `components/contact-form.tsx`, descomenta y actualiza estas líneas:

```typescript
await emailjs.send(
  'TU_SERVICE_ID',     // Reemplaza con tu Service ID
  'TU_TEMPLATE_ID',    // Reemplaza con tu Template ID
  templateParams,
  'TU_PUBLIC_KEY'      // Reemplaza con tu Public Key
)
```

## 6. Variables de entorno (opcional)
Para mayor seguridad, puedes crear un archivo `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

Y usar en el código:
```typescript
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  templateParams,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)
```

¡Listo! Los emails llegarán a isaac.nunezservian@gmail.com cada vez que alguien complete el formulario.