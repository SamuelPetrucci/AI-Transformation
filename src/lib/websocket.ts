// WebSocket connection for real-time demo updates
import { useEffect, useRef, useState } from 'react'

export interface WebSocketMessage {
  type: 'metrics' | 'activity' | 'notification'
  data: any
  timestamp: string
}

export const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>()
  const reconnectAttempts = useRef(0)
  const maxReconnectAttempts = 5

  useEffect(() => {
    const connect = () => {
      try {
        const ws = new WebSocket(url)
        
        ws.onopen = () => {
          console.log('WebSocket connected')
          setIsConnected(true)
          setSocket(ws)
          reconnectAttempts.current = 0
        }

        ws.onmessage = (event) => {
          try {
            const message: WebSocketMessage = JSON.parse(event.data)
            setLastMessage(message)
          } catch (error) {
            console.error('Error parsing WebSocket message:', error)
          }
        }

        ws.onclose = () => {
          console.log('WebSocket disconnected')
          setIsConnected(false)
          setSocket(null)
          
          // Attempt to reconnect
          if (reconnectAttempts.current < maxReconnectAttempts) {
            reconnectAttempts.current++
            const delay = Math.pow(2, reconnectAttempts.current) * 1000 // Exponential backoff
            reconnectTimeoutRef.current = setTimeout(connect, delay)
          }
        }

        ws.onerror = (error) => {
          console.error('WebSocket error:', error)
        }

      } catch (error) {
        console.error('Error creating WebSocket connection:', error)
      }
    }

    connect()

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current)
      }
      if (socket) {
        socket.close()
      }
    }
  }, [url])

  const sendMessage = (message: WebSocketMessage) => {
    if (socket && isConnected) {
      socket.send(JSON.stringify(message))
    }
  }

  return {
    socket,
    isConnected,
    lastMessage,
    sendMessage
  }
}

// Demo-specific WebSocket hook
export const useDemoWebSocket = () => {
  const { socket, isConnected, lastMessage, sendMessage } = useWebSocket(
    process.env.NODE_ENV === 'production' 
      ? 'wss://your-demo-server.com/ws'
      : 'ws://localhost:8080/ws'
  )

  const subscribeToService = (service: string) => {
    sendMessage({
      type: 'subscription',
      data: { service },
      timestamp: new Date().toISOString()
    })
  }

  const unsubscribeFromService = (service: string) => {
    sendMessage({
      type: 'unsubscription', 
      data: { service },
      timestamp: new Date().toISOString()
    })
  }

  return {
    socket,
    isConnected,
    lastMessage,
    subscribeToService,
    unsubscribeFromService
  }
}
