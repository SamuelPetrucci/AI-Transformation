'use client'

import { useEffect } from 'react'

export default function HashNavigation() {
  useEffect(() => {
    // Handle hash navigation when page loads
    const handleHashNavigation = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash.substring(1) // Remove the #
        const element = document.getElementById(hash)
        
        if (element) {
          // Add a small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      }
    }

    // Call on mount
    handleHashNavigation()

    // Also listen for hash changes
    const handleHashChange = () => {
      handleHashNavigation()
    }

    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return null
}
