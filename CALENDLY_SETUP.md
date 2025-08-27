# Calendly Integration Setup Guide

## 🎯 Overview

Your AI Transformation LLC landing page now includes a dual booking system:
1. **Contact Form** - Traditional form for inquiries
2. **Calendly Integration** - Direct appointment booking

## 📋 Setup Steps

### 1. Create a Calendly Account
1. Go to [calendly.com](https://calendly.com)
2. Sign up for a free account
3. Complete your profile setup

### 2. Create Event Types
Create the following event types in your Calendly dashboard:

#### AI Transformation Consultation (30 minutes)
- **Name**: AI Transformation Consultation
- **Duration**: 30 minutes
- **Description**: Free consultation to discuss AI solutions for your business
- **Location**: Video call (Zoom/Google Meet)

#### Discovery Call (15 minutes)
- **Name**: AI Discovery Call
- **Duration**: 15 minutes
- **Description**: Quick discovery call to understand your business needs
- **Location**: Video call (Zoom/Google Meet)

#### Strategy Session (60 minutes)
- **Name**: AI Strategy Session
- **Duration**: 60 minutes
- **Description**: Comprehensive AI strategy planning session
- **Location**: Video call (Zoom/Google Meet)

### 3. Get Your Calendly Link
1. Go to your Calendly dashboard
2. Click on "Event Types"
3. Select your main consultation event
4. Click "Share" > "Link"
5. Copy the URL (e.g., `https://calendly.com/yourusername/ai-transformation-consultation`)

### 4. Update Configuration
1. Open `src/config/calendly.ts`
2. Replace `"https://calendly.com/your-calendly-link"` with your actual Calendly URL
3. Update the event type names if needed

```typescript
export const CALENDLY_CONFIG = {
  CALENDLY_URL: "https://calendly.com/yourusername/ai-transformation-consultation",
  // ... rest of config
}
```

### 5. Customize Event Types (Optional)
Update the `EVENT_TYPES` in the config file to match your actual event type names:

```typescript
EVENT_TYPES: {
  CONSULTATION: "ai-transformation-consultation",
  DISCOVERY_CALL: "ai-transformation-discovery", 
  STRATEGY_SESSION: "ai-transformation-strategy"
}
```

## 🎨 Customization Options

### Widget Styling
The Calendly widget is styled to match your site's theme:
- **Background**: Dark gray (`#1f2937`)
- **Primary Color**: Blue (`#3b82f6`)
- **Text Color**: White (`#ffffff`)

### Widget Size
Default size is 700px height. You can adjust this in `src/config/calendly.ts`:

```typescript
WIDGET_STYLES: {
  height: '700px', // Adjust this value
  width: '100%'
}
```

## 🔧 Advanced Features

### Prefill Form Data
You can prefill the Calendly form with data from your contact form:

```typescript
// In SmartBooking.tsx, you can pass form data to Calendly
const prefillData = {
  email: formData.email,
  name: formData.name,
  firstName: formData.name.split(' ')[0],
  lastName: formData.name.split(' ').slice(1).join(' ')
}
```

### Multiple Event Types
You can create different booking buttons for different consultation types:

```typescript
// Example: Different consultation types
<InlineWidget url={getCalendlyUrl('discovery-call')} />
<InlineWidget url={getCalendlyUrl('strategy-session')} />
```

## 📱 Mobile Optimization
The Calendly widget is fully responsive and works on all devices.

## 🚀 Testing
1. Start your development server: `npm run dev`
2. Navigate to the booking section
3. Click "Book Directly" to test the Calendly integration
4. Verify that appointments are being created in your Calendly dashboard

## 📧 Email Notifications
Calendly automatically sends:
- Confirmation emails to clients
- Calendar invites
- Reminder emails
- Cancellation notifications

## 🔒 Security
- Calendly handles all data securely
- No sensitive information is stored on your server
- All communications go through Calendly's secure platform

## 💡 Tips
1. **Set up your calendar integration** (Google Calendar, Outlook, etc.)
2. **Configure your availability** and time zones
3. **Add buffer time** between appointments
4. **Set up email templates** for professional communication
5. **Test the booking flow** from a client's perspective

## 🆘 Support
- [Calendly Help Center](https://help.calendly.com/)
- [Calendly API Documentation](https://developer.calendly.com/)
- [React Calendly Package](https://www.npmjs.com/package/react-calendly)
