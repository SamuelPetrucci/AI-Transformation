# SMTP Email Setup Guide

This guide shows you how to configure SMTP email notifications for your AI Transformation website.

## Environment Variables

Add these variables to your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# SMTP Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=your_email@gmail.com

# Email Recipients
TO_EMAIL=info@aitransformationllc.com
```

## Gmail SMTP Setup

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to Google Account → Security → 2-Step Verification
2. Scroll down to "App passwords"
3. Generate a new app password for "Mail"
4. Use this password as your `SMTP_PASS`

### Step 3: Configure Environment Variables
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_16_character_app_password
SMTP_FROM=your_gmail@gmail.com
```

## Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@outlook.com
SMTP_PASS=your_password
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@yahoo.com
SMTP_PASS=your_app_password
```

### Custom SMTP Server
```env
SMTP_HOST=your_smtp_server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_username
SMTP_PASS=your_password
```

## Testing the Setup

1. **Start your development server**: `npm run dev`
2. **Submit a test form** on your website
3. **Check your email** - you should receive a notification
4. **Check the console logs** for any errors

## What Happens When Someone Submits a Form

1. ✅ **Form data is validated**
2. ✅ **Data is saved to database** (`ai_transformation_contact` table)
3. ✅ **Email notification sent** via SMTP
4. ✅ **Success message shown** to the user
5. ✅ **Form resets** automatically

## Troubleshooting

### Common Issues:

**"Authentication failed"**
- Check your email and password
- For Gmail, make sure you're using an App Password, not your regular password
- Ensure 2-Factor Authentication is enabled

**"Connection timeout"**
- Check your SMTP_HOST and SMTP_PORT settings
- Try different ports (587, 465, 25)
- Check if your network blocks SMTP connections

**"Email not received"**
- Check spam/junk folder
- Verify TO_EMAIL address is correct
- Check console logs for error messages

### Debug Mode:
Add this to your `.env.local` for detailed logging:
```env
NODE_ENV=development
```

## Benefits of SMTP

✅ **No third-party dependencies** - Uses standard email protocols  
✅ **More reliable** - Direct connection to email servers  
✅ **Better deliverability** - Emails less likely to be marked as spam  
✅ **Cost-effective** - No monthly fees for email services  
✅ **Full control** - Use your own email domain  

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords instead of your main email password
- Consider using a dedicated email address for notifications
- Regularly rotate your SMTP credentials
