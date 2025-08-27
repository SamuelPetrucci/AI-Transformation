'use client'

import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: string
}

export default function SEOHead({
  title = "AI Transformation LLC - Transform Your Business with AI Solutions",
  description = "AI Transformation LLC specializes in cutting-edge AI solutions that drive business growth and operational efficiency. We provide AI strategy, automation, data analytics, and industry-grade protection.",
  keywords = ["AI solutions", "artificial intelligence", "business automation", "AI transformation"],
  canonical = "https://aitransformationllc.com",
  ogImage = "/og-image.jpg",
  ogType = "website"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical)
    
    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `${canonical}${ogImage}` },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonical },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${canonical}${ogImage}` },
    ]
    
    ogTags.forEach(({ property, name, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`
      let metaTag = document.querySelector(selector) as HTMLMetaElement
      
      if (!metaTag) {
        metaTag = document.createElement('meta')
        if (property) {
          metaTag.setAttribute('property', property)
        } else if (name) {
          metaTag.setAttribute('name', name)
        }
        document.head.appendChild(metaTag)
      }
      metaTag.setAttribute('content', content)
    })
    
  }, [title, description, keywords, canonical, ogImage, ogType])
  
  return null
}
