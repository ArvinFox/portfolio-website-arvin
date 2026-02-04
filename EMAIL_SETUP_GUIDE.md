# Setting Up Email Functionality - Resend

Your contact form is now set up! Here's how to get your email working:

## Option 1: Using Resend (Recommended - Easiest)

Resend is a modern email API that's super easy to set up.

### Steps:

1. **Sign up for Resend (Free):**
   - Go to: https://resend.com/signup
   - Sign up with your email or GitHub account
   - Free plan includes 3,000 emails/month - perfect for a portfolio!

2. **Get Your API Key:**
   - After signing in, go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Give it a name like "Portfolio Website"
   - Copy the API key (it starts with `re_`)

3. **Add API Key to `.env.local`:**

   ```
   RESEND_API_KEY="re_your_actual_api_key_here"
   CONTACT_EMAIL="arvin250cc@gmail.com"
   ```

4. **Verify Your Domain (Optional but Recommended):**
   - For testing: You can use Resend's default email `onboarding@resend.dev`
   - For production: Verify your own domain at https://resend.com/domains
   - This allows emails to come from your own domain (e.g., contact@yourdomain.com)

5. **Test It:**
   - Restart your dev server: Stop the current one and run `npm run dev` again
   - Fill out the contact form on your website
   - Check your email inbox!

---

## Option 2: Using Gmail SMTP (Alternative)

If you prefer using Gmail instead:

### Steps:

1. **Enable 2-Factor Authentication on your Gmail:**
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate an App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Website"
   - Copy the 16-character password

3. **Install nodemailer:**

   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

4. **Update `.env.local`:**

   ```
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="arvin250cc@gmail.com"
   SMTP_PASSWORD="your_16_char_app_password"
   CONTACT_EMAIL="arvin250cc@gmail.com"
   ```

5. **Update the API route** (app/api/contact/route.ts) to use nodemailer instead of Resend

---

## Current Status

✅ Contact form created with validation
✅ API route set up at `/api/contact`
✅ Email package (Resend) installed
✅ Environment variables configured
⏳ **Next Step:** Get your Resend API key from https://resend.com/signup

## Testing

1. Get your Resend API key
2. Add it to `.env.local`
3. Restart your dev server
4. Visit http://localhost:3000
5. Scroll to the contact section
6. Fill out and submit the form
7. Check your email!

---

## What Changed

1. ✅ Removed the mail icon from social links
2. ✅ Added a beautiful contact form with Name, Email, and Message fields
3. ✅ Created API endpoint to handle email sending
4. ✅ Added form validation and error handling
5. ✅ Added success/error messages
6. ✅ Installed Resend package

The form is now live on your website - just add your Resend API key to make it functional!
