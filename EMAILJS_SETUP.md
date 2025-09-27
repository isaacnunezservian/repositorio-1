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