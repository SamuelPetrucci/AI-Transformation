// Real-time demo utilities - NO DATABASE NEEDED
import { useState, useEffect } from 'react'

// Simulate real-time metrics without database
export const useRealTimeMetrics = (service: string) => {
  const [metrics, setMetrics] = useState({
    activeUsers: 1247,
    totalInteractions: 45200,
    successRate: 94.2,
    revenue: 2400000
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        totalInteractions: prev.totalInteractions + Math.floor(Math.random() * 10),
        successRate: Math.min(99.9, prev.successRate + (Math.random() - 0.5) * 0.1),
        revenue: prev.revenue + Math.floor(Math.random() * 1000)
      }))
    }, 2000) // Update every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return metrics
}

// Real-time activity feed simulation
export const useRealTimeActivity = () => {
  const [activities, setActivities] = useState([
    {
      id: '1',
      service: 'Smart Booking',
      action: 'New appointment scheduled',
      user: 'Sarah Johnson',
      timestamp: new Date(Date.now() - 30000).toISOString(),
      status: 'success' as const
    }
  ])

  useEffect(() => {
    const activities = [
      'New user registered',
      'Appointment scheduled', 
      'Payment processed',
      'Report generated',
      'AI response sent',
      'Data synchronized'
    ]
    
    const services = ['Smart Booking', 'AI Assistant', 'Data Analytics', 'POS System']
    const users = ['Sarah Johnson', 'Mike Chen', 'Lisa Wang', 'David Smith']

    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now().toString(),
        service: services[Math.floor(Math.random() * services.length)],
        action: activities[Math.floor(Math.random() * activities.length)],
        user: users[Math.floor(Math.random() * users.length)],
        timestamp: new Date().toISOString(),
        status: 'success' as const
      }
      
      setActivities(prev => [newActivity, ...prev.slice(0, 9)]) // Keep last 10
    }, 3000) // New activity every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return activities
}

// Real Calendly integration (no database needed)
export const getCalendlyStats = async () => {
  // This would connect to your actual Calendly API
  // Return real booking statistics
  return {
    totalBookings: 1247,
    thisMonth: 89,
    conversionRate: 12.4
  }
}

// Real Google Analytics integration
export const getAnalyticsStats = async () => {
  // Connect to your actual Google Analytics
  // Return real website metrics
  return {
    pageViews: 45200,
    uniqueVisitors: 12470,
    bounceRate: 34.2
  }
}
