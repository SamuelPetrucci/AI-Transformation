# Contact Form Setup Guide

## Overview
Your contact form is now set up with a databaseless solution using Resend for email notifications. The form will send email notifications when someone submits the contact form.

## Setup Instructions

### 1. Get Resend API Key
1. Go to [resend.com](https://resend.com) and create a free account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key

### 2. Set Up Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
# Resend Configuration


# Email Configuration
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=your-email@example.com
```

### 3. Verify Your Domain (Optional but Recommended)
1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., yourdomain.com)
3. Follow the DNS verification steps
4. Update the `FROM_EMAIL` in your `.env.local` to use your verified domain

### 4. Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the environment variables in your Vercel project settings
4. Deploy

## How It Works

1. **Form Submission**: When someone submits the contact form, it sends a POST request to `/api/contact`
2. **Email Notification**: The API route sends an email notification using Resend
3. **Success Redirect**: The user is redirected to the success page
4. **Form Reset**: The form is automatically reset after submission

## Alternative Options

If you prefer other solutions, here are some alternatives:

### Option 2: Use Formspree
- Free tier available
- No API key needed
- Simple setup

### Option 3: Use Netlify Forms
- Built into Netlify
- Free tier available
- Automatic spam filtering

### Option 4: Use Google Forms
- Completely free
- Integrate via iframe or API
- Built-in analytics

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email for the notification
5. Check the browser console for logs

## Troubleshooting

- **Email not sending**: Check your Resend API key and domain verification
- **Form not submitting**: Check browser console for errors
- **Environment variables not working**: Restart your development server after adding `.env.local`

## Security Notes

- The form includes basic validation
- Email addresses are validated on both client and server side
- The API key is stored securely in environment variables
- Form submissions are logged for debugging purposes
