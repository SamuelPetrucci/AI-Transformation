# Deployment Guide

This guide covers deploying the AI Transformation LLC website to production.

## 🚀 Vercel Deployment (Recommended)

### Prerequisites
- Vercel account
- GitHub repository connected
- Environment variables configured

### Steps

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository: `AI-Transformation`

2. **Configure Build Settings**
   - Framework Preset: `Next.js`
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `.next` (default)

3. **Environment Variables**
   Add the following in Vercel dashboard under Settings > Environment Variables:

   ```
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

   # OpenAI (for chatbot)
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be available at `https://your-project.vercel.app`

5. **Custom Domain**
   - Go to Settings > Domains
   - Add your custom domain: `aitransformationllc.com`
   - Configure DNS records as instructed

## 🗄️ Database Setup

### Supabase Configuration

1. **Create Project**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Create new project
   - Note your project URL and anon key

2. **Run Database Schema**
   - Go to SQL Editor in Supabase
   - Copy and paste contents of `database-schema.sql`
   - Execute the script

3. **Configure Row Level Security**
   - The schema includes RLS policies
   - Test with a sample insert to ensure it works

## 📧 Email Configuration

### Gmail SMTP Setup

1. **Enable 2-Factor Authentication**
   - Go to Google Account settings
   - Enable 2FA if not already enabled

2. **Generate App Password**
   - Go to Google Account > Security > 2-Step Verification
   - Scroll to "App passwords"
   - Generate password for "Mail"
   - Use this as `SMTP_PASS`

3. **Test Email**
   - Submit a test contact form
   - Check email delivery
   - Verify database storage

## 🔍 Post-Deployment Checklist

### Functionality Tests
- [ ] Home page loads correctly
- [ ] Services page displays properly
- [ ] Industries page works
- [ ] Contact form submits successfully
- [ ] Email notifications are sent
- [ ] Database stores submissions
- [ ] Chatbot responds correctly
- [ ] Calendly integration works
- [ ] Analytics tracking active

### Performance Tests
- [ ] Page load speeds < 3 seconds
- [ ] Mobile responsiveness
- [ ] Image optimization
- [ ] Core Web Vitals scores

### SEO Tests
- [ ] Meta tags present
- [ ] Open Graph tags working
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Structured data valid

## 🚨 Troubleshooting

### Common Issues

**Build Failures**
- Check environment variables
- Verify all dependencies installed
- Check for TypeScript errors

**Email Not Sending**
- Verify SMTP credentials
- Check firewall settings
- Test with different email provider

**Database Connection Issues**
- Verify Supabase URL and key
- Check RLS policies
- Test with sample data

**Analytics Not Working**
- Verify Vercel Analytics is enabled
- Check for ad blockers
- Wait 24-48 hours for data

### Debug Commands

```bash
# Check build locally
npm run build

# Run type checking
npm run type-check

# Lint code
npm run lint

# Clean cache
npm run clean
```

## 📊 Monitoring

### Vercel Analytics
- Monitor page views and performance
- Check Core Web Vitals
- Review error logs

### Database Monitoring
- Monitor contact form submissions
- Check for failed inserts
- Review lead quality

### Email Monitoring
- Check email delivery rates
- Monitor bounce rates
- Verify SMTP logs

## 🔄 Updates and Maintenance

### Regular Updates
1. Keep dependencies updated
2. Monitor security vulnerabilities
3. Update content as needed
4. Backup database regularly

### Deployment Process
1. Test changes locally
2. Push to GitHub
3. Vercel auto-deploys
4. Verify functionality
5. Monitor for issues

## 📞 Support

For deployment issues:
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Supabase Support**: [supabase.com/support](https://supabase.com/support)
- **Internal Team**: info@aitransformationllc.com

---

**Last Updated**: December 2024  
**Version**: 1.0.0
