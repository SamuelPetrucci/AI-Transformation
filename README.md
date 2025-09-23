# AI Transformation LLC Website

A modern, responsive website for AI Transformation LLC built with Next.js 15, featuring AI-powered solutions, interactive demos, and comprehensive business services.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **AI Chatbot**: Interactive AI assistant for customer support
- **Service Demos**: Interactive proof-of-concept demonstrations
- **Contact Forms**: SMTP email integration with database storage
- **Analytics**: Vercel Analytics integration
- **Responsive**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Comprehensive meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Email**: SMTP (Nodemailer)
- **Analytics**: Vercel Analytics
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── chat/          # AI chatbot API
│   │   ├── contact/       # Contact form API
│   │   └── insurance-quote/ # Insurance quote API
│   ├── industries/        # Industries page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Chatbot.tsx        # AI chatbot component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Home page hero
│   ├── ServicesHero.tsx   # Services page hero
│   ├── ServiceCategories.tsx # Service categories
│   ├── ServiceProcess.tsx # Service process flow
│   ├── ServiceCTA.tsx     # Call-to-action section
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility libraries
│   ├── supabase.ts        # Database client
│   ├── email.ts           # SMTP email utilities
│   ├── openai.ts          # OpenAI integration
│   └── real-time-demos.ts # Demo utilities
└── config/
    └── calendly.ts        # Calendly configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- SMTP email service (Gmail, Outlook, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-transformation-next.git
   cd ai-transformation-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
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

   # OpenAI (for chatbot)
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Database Setup**
   Run the SQL schema in your Supabase project:
   ```bash
   # Copy and paste the contents of database-schema.sql into Supabase SQL editor
   ```

5. **Development Server**
   ```bash
   npm run dev
   ```

## 📊 Database Schema

The project uses a centralized database with the following main table:

### `ai_transformation_contact`
- Stores all contact form submissions
- Includes chatbot conversations
- Tracks lead information and status

**Key Fields:**
- `first_name`, `last_name`, `email`, `phone`
- `company`, `consultation_type`, `message`
- `status` (new, contacted, in_progress, closed)
- `source` (Website, Chatbot, etc.)

## 🔧 Configuration

### SMTP Email Setup
See `SMTP_SETUP.md` for detailed email configuration instructions.

### Calendly Integration
Update `src/config/calendly.ts` with your Calendly URL:
```typescript
export const CALENDLY_CONFIG = {
  CALENDLY_URL: "https://calendly.com/your-username/30min",
  // ... other config
}
```

### Analytics
Vercel Analytics is automatically configured. No additional setup required.

## 📝 API Endpoints

### Contact Form (`/api/contact`)
- **Method**: POST
- **Purpose**: Handle contact form submissions
- **Features**: SMTP email notifications, database storage

### Chat API (`/api/chat`)
- **Method**: POST
- **Purpose**: AI chatbot interactions
- **Features**: OpenAI integration, conversation storage

### Insurance Quote (`/api/insurance-quote`)
- **Method**: POST
- **Purpose**: Handle insurance quote requests
- **Features**: Specialized form handling

## 🎨 Customization

### Styling
- Uses Tailwind CSS for styling
- Custom color scheme in `tailwind.config.js`
- Responsive design with mobile-first approach

### Content
- Update service information in `src/components/ServiceCategories.tsx`
- Modify hero content in respective Hero components
- Update contact information in footer and forms

### Branding
- Replace logo files in `public/` directory
- Update favicon and manifest files
- Modify color scheme in Tailwind config

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 📱 Performance

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Dynamic imports for heavy components
- **Caching**: Optimized caching strategies

## 🛡️ Security

- **Environment Variables**: Secure API key management
- **Input Validation**: Form data sanitization
- **HTTPS**: Secure connections enforced
- **CORS**: Proper cross-origin policies

## 📊 Analytics & Monitoring

- **Vercel Analytics**: Page views and performance metrics
- **Error Tracking**: Built-in error boundaries
- **Performance Monitoring**: Core Web Vitals tracking

## 🔧 Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor security vulnerabilities: `npm audit`
- Update content and services as needed

### Database Maintenance
- Regular backups of Supabase database
- Monitor contact form submissions
- Clean up old or duplicate records

### Performance Monitoring
- Check Vercel Analytics dashboard
- Monitor Core Web Vitals
- Optimize images and assets

## 📞 Support

For technical support or questions:
- **Email**: info@aitransformationllc.com
- **Website**: https://aitransformationllc.com

## 📄 License

This project is proprietary to AI Transformation LLC. All rights reserved.

## 🤝 Contributing

This is a private project. For internal development:
1. Create feature branches from `main`
2. Test thoroughly before merging
3. Update documentation as needed
4. Follow the existing code style and patterns

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Maintainer**: AI Transformation LLC Development Team