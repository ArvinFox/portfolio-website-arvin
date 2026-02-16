# Setting Up Email Functionality (Resend)

This guide explains how to enable the contact form email sending using Resend.

## Option 1: Using Resend (Recommended)

Resend is a modern email API with a generous free tier.

### Steps:

1. **Sign up for Resend:**
   - Go to: https://resend.com/signup
   - Sign up with your email or GitHub account
   - Free plan includes 3,000 emails/month - perfect for a portfolio!

2. **Create an API Key:**
   - After signing in, go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Give it a name like "Portfolio Website"
   - Copy the API key (it starts with `re_`)

3. **Add the API Key to `.env.local`:**

   ```
   RESEND_API_KEY="re_your_actual_api_key_here"
   CONTACT_EMAIL="your.email@example.com"
   ```

4. **Verify Your Domain (Optional):**
   - For testing, you can use Resend's default sender.
   - For production, verify your domain at https://resend.com/domains
   - This allows sending from your own domain (e.g., contact@yourdomain.com)

5. **Test It:**
   - Restart your dev server: stop the current one and run `npm run dev` again
   - Fill out the contact form on your website
   - Check your email inbox!

---

## Option 2: Gmail SMTP (Alternative)

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
   SMTP_USER="your.email@example.com"
   SMTP_PASSWORD="your_16_char_app_password"
   CONTACT_EMAIL="your.email@example.com"
   ```

5. **Update the API route** (app/api/contact/route.ts) to use nodemailer instead of Resend

---

## Current Status

- Contact form created with validation
- API route set up at `/api/contact`
- Resend integration installed
- Environment variables configured via `.env.local`

## Testing

1. Get your Resend API key
2. Add it to `.env.local`
3. Restart your dev server
4. Visit http://localhost:3000
5. Scroll to the contact section
6. Fill out and submit the form
7. Check your email!

---

## Notes

- Do not commit `.env.local` to GitHub.
- Keep keys and passwords private.
