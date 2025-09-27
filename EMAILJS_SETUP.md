<<<<<<< HEAD
# 📧 EmailJS Setup Guide

## Quick Setup Steps:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

### 2. Add Email Service
- Go to Email Services
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Follow the setup instructions
- Note your **Service ID** (example: `service_abc123`)

### 3. Create Email Template
- Go to Email Templates
- Click "Create New Template"
- Use this template content:

```
Subject: 🚀 Nueva Consulta Web - {{from_name}}

{{summary}}
```

**Template Variables to add:**
- `{{from_name}}`
- `{{business_name}}`
- `{{contact_method}}`
- `{{contact_info}}`
- `{{appointment_date}}`
- `{{appointment_time}}`
- `{{message}}`
- `{{submission_date}}`
- `{{summary}}`

- Save template and note your **Template ID** (example: `template_xyz789`)

### 4. Get Public Key
- Go to Account > General
- Find your **Public Key** (example: `abcdef123456`)

### 5. Update Environment Variables
Edit `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_actual_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_actual_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test the Form
- Restart your development server: `npm run dev`
- Fill out and submit the contact form
- Check isaac.nunezservian@gmail.com for the email

## Email Content Includes:
✅ Contact name and business
✅ Preferred contact method (email/phone)
✅ Contact information
✅ Selected appointment date and time
✅ Optional message
✅ Submission timestamp
✅ Formatted summary for easy reading

## Free Tier Limits:
- 200 emails/month (free tier)
- Perfect for contact forms
- No credit card required for setup
=======
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
>>>>>>> 4379fcf94ef83abff5fd029075a6a0cf2282d3ca
