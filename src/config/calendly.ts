// Calendly Configuration
export const CALENDLY_CONFIG = {
  // Replace this with your actual Calendly link
  // You can find this in your Calendly dashboard under "Event Types" > "Share" > "Link"
  CALENDLY_URL: "https://calendly.com/aitransformationllc-info/30min",
  
  // Event type settings
  EVENT_TYPES: {
    CONSULTATION: "ai-transformation-consultation",
    DISCOVERY_CALL: "ai-transformation-discovery",
    STRATEGY_SESSION: "ai-transformation-strategy"
  },
  
  // Widget styling
  WIDGET_STYLES: {
    height: '700px',
    width: '100%'
  },
  
  // Page settings for the widget
  PAGE_SETTINGS: {
    backgroundColor: '1f2937', // Dark gray to match your theme
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '3b82f6', // Blue to match your theme
    textColor: 'ffffff' // White text
  },
  
  // Prefill settings (can be customized based on form data)
  PREFILL: {
    email: 'info@aitransformationllc.com',
    name: 'AI Transformation LLC',
    firstName: 'AI',
    lastName: 'Transformation'
  }
}

// Helper function to get Calendly URL with event type
export const getCalendlyUrl = (eventType?: string) => {
  if (eventType) {
    return `${CALENDLY_CONFIG.CALENDLY_URL}/${eventType}`;
  }
  return CALENDLY_CONFIG.CALENDLY_URL;
}
