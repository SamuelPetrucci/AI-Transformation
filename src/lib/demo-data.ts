// Real-time demo data management
import { supabase } from './supabase'

export interface DemoMetrics {
  id: string
  service: string
  activeUsers: number
  totalInteractions: number
  successRate: number
  revenue: number
  lastUpdated: string
}

export interface DemoActivity {
  id: string
  service: string
  action: string
  user: string
  timestamp: string
  status: 'success' | 'pending' | 'error'
}

// Real-time metrics for demo services
export const getDemoMetrics = async (): Promise<DemoMetrics[]> => {
  try {
    const { data, error } = await supabase
      .from('demo_metrics')
      .select('*')
      .order('last_updated', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching demo metrics:', error)
    // Return fallback data
    return [
      {
        id: '1',
        service: 'Smart Booking',
        activeUsers: 1247,
        totalInteractions: 45200,
        successRate: 94.2,
        revenue: 2400000,
        lastUpdated: new Date().toISOString()
      },
      {
        id: '2',
        service: 'AI Assistant',
        activeUsers: 892,
        totalInteractions: 28900,
        successRate: 91.8,
        revenue: 1800000,
        lastUpdated: new Date().toISOString()
      },
      {
        id: '3',
        service: 'Data Analytics',
        activeUsers: 634,
        totalInteractions: 15600,
        successRate: 96.5,
        revenue: 1200000,
        lastUpdated: new Date().toISOString()
      }
    ]
  }
}

// Real-time activity feed
export const getDemoActivity = async (): Promise<DemoActivity[]> => {
  try {
    const { data, error } = await supabase
      .from('demo_activity')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(10)

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching demo activity:', error)
    // Return fallback data
    return [
      {
        id: '1',
        service: 'Smart Booking',
        action: 'New appointment scheduled',
        user: 'Sarah Johnson',
        timestamp: new Date(Date.now() - 30000).toISOString(),
        status: 'success'
      },
      {
        id: '2',
        service: 'AI Assistant',
        action: 'Customer inquiry resolved',
        user: 'Mike Chen',
        timestamp: new Date(Date.now() - 60000).toISOString(),
        status: 'success'
      },
      {
        id: '3',
        service: 'Data Analytics',
        action: 'Report generated',
        user: 'Lisa Wang',
        timestamp: new Date(Date.now() - 90000).toISOString(),
        status: 'success'
      }
    ]
  }
}

// Simulate real-time updates
export const simulateDemoActivity = () => {
  const activities = [
    'New user registered',
    'Appointment scheduled',
    'Payment processed',
    'Report generated',
    'AI response sent',
    'Data synchronized',
    'Alert triggered',
    'Backup completed'
  ]
  
  const services = [
    'Smart Booking',
    'AI Assistant', 
    'Data Analytics',
    'POS System',
    'Website Builder',
    'Marketing Automation'
  ]
  
  const users = [
    'Sarah Johnson',
    'Mike Chen', 
    'Lisa Wang',
    'David Smith',
    'Emma Davis',
    'Alex Rodriguez'
  ]

  return {
    service: services[Math.floor(Math.random() * services.length)],
    action: activities[Math.floor(Math.random() * activities.length)],
    user: users[Math.floor(Math.random() * users.length)],
    timestamp: new Date().toISOString(),
    status: Math.random() > 0.1 ? 'success' : 'pending'
  }
}
