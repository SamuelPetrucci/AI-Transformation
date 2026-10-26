# 🤖 AI Chatbot Setup Guide

## 🚀 **What We've Built**

Your chatbot now has:
- ✅ **Real LLM Integration** (OpenAI GPT-4)
- ✅ **Database Storage** (Supabase)
- ✅ **Lead Qualification** & Scoring
- ✅ **Conversation Tracking**
- ✅ **Information Extraction**

## 📋 **Setup Steps**

### **Step 1: Set up Supabase Database**

1. **Create Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up for free account
   - Create new project

2. **Run Database Schema**
   - Go to SQL Editor in Supabase
   - Copy and paste the contents of `database-schema.sql`
   - Run the script

3. **Get API Keys**
   - Go to Settings → API
   - Copy your Project URL and anon/public key

### **Step 2: Set up OpenAI**

1. **Get OpenAI API Key**
   - Go to [platform.openai.com](https://platform.openai.com)
   - Create account or sign in
   - Go to API Keys section
   - Create new API key

### **Step 3: Configure Environment Variables**

Create a `.env.local` file in your project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4-turbo-preview

# Business Configuration
COMPANY_EMAIL=info@aitransformationllc.com
COMPANY_PHONE=(860) 705-3417
```

### **Step 4: Test the Chatbot**

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Test Chatbot**
   - Open your site
   - Click the chat button
   - Try asking questions like:
     - "Hi, I'm John from ABC Insurance"
     - "We need help with process automation"
     - "Our budget is around $50k"

## 🎯 **How It Works**

### **Lead Capture Process:**
1. **Visitor starts chat** → Session created
2. **AI analyzes conversation** → Extracts information
3. **Lead data stored** → Database updated
4. **Lead scored** → Qualification determined
5. **Follow-up suggested** → Booking/contact form

### **Information Extracted:**
- ✅ Name, email, phone
- ✅ Company and industry
- ✅ Budget range
- ✅ Timeline
- ✅ Project requirements
- ✅ Lead score (0-100)

### **Lead Scoring:**
- **0-25**: Just browsing
- **26-50**: Some interest
- **51-75**: Qualified lead
- **76-100**: Hot lead

## 📊 **Database Tables**

### **leads** - Main lead information
- Basic contact info
- Industry and company
- Budget and timeline
- Lead score and qualification

### **conversations** - Chat history
- Full message history
- Session tracking
- Analytics data

### **lead_events** - Interaction tracking
- Email provided
- Budget discussed
- Timeline mentioned
- Consultation requested

## 🔧 **Customization Options**

### **Update Business Context**
Edit `src/lib/openai.ts` to modify:
- Company information
- Services offered
- Industries served
- Key benefits

### **Adjust Lead Scoring**
Modify the scoring logic in:
- `src/lib/openai.ts` (AI-based scoring)
- `src/app/api/chat/route.ts` (conversation analysis)

### **Add New Response Types**
Update the business context prompt to handle:
- New services
- Different industries
- Special offers
- Custom workflows

## 📈 **Analytics & Monitoring**

### **View Leads in Supabase**
- Go to Table Editor
- Check `leads` table for new entries
- Monitor lead scores and qualification

### **Track Conversations**
- View `conversations` table
- Analyze message patterns
- Monitor engagement metrics

### **Lead Events**
- Check `lead_events` table
- Track user interactions
- Identify conversion points

## 🚀 **Next Steps**

### **Phase 2 Enhancements:**
1. **Email Notifications** - Get alerts for new leads
2. **CRM Integration** - Connect to your existing CRM
3. **Analytics Dashboard** - Visual lead tracking
4. **A/B Testing** - Test different response strategies

### **Advanced Features:**
1. **Multi-language Support**
2. **Voice Chat Integration**
3. **Advanced Lead Scoring**
4. **Automated Follow-ups**

## 🔒 **Security & Privacy**

### **Data Protection:**
- All data stored in Supabase (GDPR compliant)
- API keys secured in environment variables
- Row Level Security enabled
- No sensitive data in client-side code

### **Privacy Compliance:**
- Add privacy policy link to chat
- Implement data retention policies
- Provide opt-out mechanisms
- Follow GDPR requirements

## 🆘 **Troubleshooting**

### **Common Issues:**

**Chatbot not responding:**
- Check OpenAI API key
- Verify environment variables
- Check browser console for errors

**Database not saving:**
- Verify Supabase credentials
- Check RLS policies
- Ensure schema is created

**Poor AI responses:**
- Update business context
- Adjust temperature setting
- Review conversation history

## 📞 **Support**

Need help? Check:
1. **Console logs** for errors
2. **Supabase logs** for database issues
3. **OpenAI dashboard** for API usage
4. **Environment variables** for configuration

---

**Your AI-powered lead generation system is ready! 🎉**
