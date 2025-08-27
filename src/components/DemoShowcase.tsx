'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Calendar, 
  BarChart3, 
  ShoppingCart, 
  Globe, 
  Play,
  ExternalLink,
  Activity,
  Home,
  Shield,
  Utensils,
  Target,
  Eye,
  Wrench,
  Heart,
  Star as StarIcon,
  Clock,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Building,
  Phone
} from 'lucide-react'

const aiServices = [
  {
    icon: Calendar,
    title: 'Smart Booking System',
    description: 'AI-powered appointment scheduling with automated reminders and calendar integration.',
    demo: 'booking-demo',
    color: 'from-blue-500 to-blue-600',
    features: ['Automated Scheduling', 'Calendar Sync', 'Reminder System', 'Payment Integration']
  },
  {
    icon: BarChart3,
    title: 'Data Consolidation',
    description: 'Unify your business data from multiple sources into actionable insights.',
    demo: 'data-demo',
    color: 'from-green-500 to-green-600',
    features: ['Multi-Source Integration', 'Real-time Analytics', 'Custom Dashboards', 'Automated Reports']
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies.',
    demo: 'website-demo',
    color: 'from-purple-500 to-purple-600',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Easy Management']
  },
  {
    icon: ShoppingCart,
    title: 'Point of Sale Systems',
    description: 'Complete POS solutions for retail and service businesses.',
    demo: 'pos-demo',
    color: 'from-orange-500 to-orange-600',
    features: ['Inventory Management', 'Payment Processing', 'Sales Analytics', 'Customer Tracking']
  },
  {
    icon: Bot,
    title: 'RAG Knowledge Base',
    description: 'Build intelligent knowledge bases that understand and answer your business questions.',
    demo: 'rag-demo',
    color: 'from-indigo-500 to-indigo-600',
    features: ['Document Processing', 'Smart Search', 'Contextual Answers', 'Continuous Learning']
  }
]

const websiteTemplates = [
  {
    id: 'realtor',
    title: 'Real Estate Professional',
    description: 'Modern property showcase with virtual tours and client portals',
    category: 'Real Estate',
    style: 'Modern & Clean',
    color: 'from-blue-500 to-blue-600',
    features: ['Property Listings', 'Virtual Tours', 'Client Portal', 'Lead Capture'],
    tags: ['Modern', 'Professional', 'High-end']
  },
  {
    id: 'insurance',
    title: 'Insurance Broker',
    description: 'Trustworthy insurance website with quote calculators',
    category: 'Insurance',
    style: 'Professional & Trustworthy',
    color: 'from-green-500 to-green-600',
    features: ['Quote Calculator', 'Policy Management', 'Claims Portal', 'Agent Directory'],
    tags: ['Trustworthy', 'Professional', 'Clean']
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Hospitality',
    description: 'Appetizing design with online ordering and reservations',
    category: 'Food & Hospitality',
    style: 'Warm & Inviting',
    color: 'from-orange-500 to-orange-600',
    features: ['Online Ordering', 'Reservation System', 'Menu Management', 'Loyalty Program'],
    tags: ['Warm', 'Inviting', 'Appetizing']
  },
  {
    id: 'golf',
    title: 'Golf Course & Club',
    description: 'Elegant golf course website with tee time booking',
    category: 'Sports & Recreation',
    style: 'Elegant & Premium',
    color: 'from-emerald-500 to-emerald-600',
    features: ['Tee Time Booking', 'Membership Portal', 'Course Information', 'Pro Shop'],
    tags: ['Elegant', 'Premium', 'Sophisticated']
  },
  {
    id: 'consultant',
    title: 'Business Consultant',
    description: 'Professional consulting website with case studies',
    category: 'Professional Services',
    style: 'Corporate & Polished',
    color: 'from-purple-500 to-purple-600',
    features: ['Case Studies', 'Client Testimonials', 'Service Portfolio', 'Contact Forms'],
    tags: ['Corporate', 'Polished', 'Professional']
  },
  {
    id: 'contractor',
    title: 'Construction Contractor',
    description: 'Robust contractor website showcasing projects and services',
    category: 'Construction',
    style: 'Strong & Reliable',
    color: 'from-amber-500 to-amber-600',
    features: ['Project Gallery', 'Service Areas', 'Quote Requests', 'Team Profiles'],
    tags: ['Strong', 'Reliable', 'Industrial']
  }
]

// Full-Size Website Template Component
const FullWebsiteTemplate = ({ template }: { template: typeof websiteTemplates[0] }) => {
  const getTemplateContent = () => {
    switch (template.id) {
      case 'realtor':
        return (
          <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="font-bold text-xl">Premier Real Estate</div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span className="hover:text-blue-200 cursor-pointer">Properties</span>
                    <span className="hover:text-blue-200 cursor-pointer">Virtual Tours</span>
                    <span className="hover:text-blue-200 cursor-pointer">About</span>
                    <span className="hover:text-blue-200 cursor-pointer">Contact</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Dream Home</h1>
              <p className="text-xl text-gray-600 mb-6">Luxury Properties in Prime Locations</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  View Properties
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Schedule Tour
                </button>
              </div>
            </div>
            
            {/* Featured Properties */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600">Property Image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Modern Villa</h3>
                    <p className="text-gray-600 mb-2">4 bed • 3 bath • 2,500 sqft</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">$850,000</span>
                      <button className="text-blue-600 hover:text-blue-700">View Details</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600">Property Image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Downtown Condo</h3>
                    <p className="text-gray-600 mb-2">2 bed • 2 bath • 1,200 sqft</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">$450,000</span>
                      <button className="text-blue-600 hover:text-blue-700">View Details</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600">Property Image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Luxury Penthouse</h3>
                    <p className="text-gray-600 mb-2">3 bed • 3.5 bath • 3,000 sqft</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">$1,200,000</span>
                      <button className="text-blue-600 hover:text-blue-700">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Virtual Tours</h3>
                  <p className="text-gray-600">Experience properties from anywhere with our immersive virtual tours.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Client Portal</h3>
                  <p className="text-gray-600">Access your property information and documents anytime, anywhere.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">Get personalized advice from our experienced real estate professionals.</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'restaurant':
        return (
          <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="font-bold text-xl">Bella Vista</div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span className="hover:text-orange-200 cursor-pointer">Menu</span>
                    <span className="hover:text-orange-200 cursor-pointer">Reservations</span>
                    <span className="hover:text-orange-200 cursor-pointer">About</span>
                    <span className="hover:text-orange-200 cursor-pointer">Contact</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Open Now</span>
                </div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Authentic Italian Cuisine</h1>
              <p className="text-xl text-gray-600 mb-6">Fresh Ingredients, Traditional Recipes, Unforgettable Experience</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  Order Online
                </button>
                <button className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                  Reserve Table
                </button>
              </div>
            </div>
            
            {/* Menu Preview */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Dishes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg flex items-center justify-center">
                    <span className="text-orange-800 text-xs">Pizza</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Margherita Pizza</h3>
                    <p className="text-gray-600 mb-2">Fresh mozzarella, basil, tomato sauce</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-orange-600">$18.99</span>
                      <div className="flex items-center space-x-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg flex items-center justify-center">
                    <span className="text-orange-800 text-xs">Pasta</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Pasta Carbonara</h3>
                    <p className="text-gray-600 mb-2">Eggs, cheese, pancetta, black pepper</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-orange-600">$22.99</span>
                      <div className="flex items-center space-x-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Special Features */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Bella Vista?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Made with Love</h3>
                  <p className="text-orange-100">Every dish is prepared with passion and attention to detail.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Fresh Ingredients</h3>
                  <p className="text-orange-100">We source only the finest, freshest ingredients daily.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Family Atmosphere</h3>
                  <p className="text-orange-100">Enjoy a warm, welcoming environment perfect for any occasion.</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'insurance':
        return (
          <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="font-bold text-xl">Secure Insurance Group</div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span className="hover:text-green-200 cursor-pointer">Coverage</span>
                    <span className="hover:text-green-200 cursor-pointer">Claims</span>
                    <span className="hover:text-green-200 cursor-pointer">About</span>
                    <span className="hover:text-green-200 cursor-pointer">Contact</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Protect What Matters Most</h1>
              <p className="text-xl text-gray-600 mb-6">Comprehensive insurance solutions for life&apos;s uncertainties</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Get Free Quote
                </button>
                <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
                  File a Claim
                </button>
              </div>
            </div>
            
            {/* Insurance Types */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Coverage Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Auto Insurance</h3>
                  <p className="text-gray-600 mb-4">Comprehensive coverage for your vehicle with competitive rates</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Liability Coverage</li>
                    <li>• Collision Protection</li>
                    <li>• Roadside Assistance</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Home Insurance</h3>
                  <p className="text-gray-600 mb-4">Protect your home and belongings with comprehensive coverage</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Property Protection</li>
                    <li>• Personal Liability</li>
                    <li>• Natural Disaster Coverage</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Life Insurance</h3>
                  <p className="text-gray-600 mb-4">Secure your family&apos;s future with reliable life insurance</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Term Life Policies</li>
                    <li>• Whole Life Coverage</li>
                    <li>• Family Protection</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Claims Process */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Simple Claims Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Report Claim</h3>
                  <p className="text-green-100 text-sm">Contact us 24/7 to report your claim</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Assessment</h3>
                  <p className="text-green-100 text-sm">Our experts assess your situation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Processing</h3>
                  <p className="text-green-100 text-sm">Fast processing of your claim</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Resolution</h3>
                  <p className="text-green-100 text-sm">Quick resolution and payment</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'golf':
        return (
          <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="font-bold text-xl">Pine Valley Golf Club</div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span className="hover:text-emerald-200 cursor-pointer">Course</span>
                    <span className="hover:text-emerald-200 cursor-pointer">Tee Times</span>
                    <span className="hover:text-emerald-200 cursor-pointer">Pro Shop</span>
                    <span className="hover:text-emerald-200 cursor-pointer">Membership</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Target className="w-4 h-4" />
                  <span className="text-sm">Par 72</span>
                </div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Championship Golf Experience</h1>
              <p className="text-xl text-gray-600 mb-6">18 holes of pristine golf in a stunning natural setting</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                  Book Tee Time
                </button>
                <button className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
                  View Membership
                </button>
              </div>
            </div>
            
            {/* Course Information */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">Course Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Length:</span>
                      <span className="font-semibold">7,200 yards</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Par:</span>
                      <span className="font-semibold">72</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Slope Rating:</span>
                      <span className="font-semibold">142</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Course Rating:</span>
                      <span className="font-semibold">74.2</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">Today&apos;s Rates</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekday:</span>
                      <span className="font-semibold">$85</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekend:</span>
                      <span className="font-semibold">$125</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Twilight (after 3pm):</span>
                      <span className="font-semibold">$65</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cart Rental:</span>
                      <span className="font-semibold">$25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Club Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Pro Shop</h3>
                  <p className="text-emerald-100">Latest equipment and apparel from top brands</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Golf Lessons</h3>
                  <p className="text-emerald-100">Professional instruction for all skill levels</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Clubhouse Restaurant</h3>
                  <p className="text-emerald-100">Fine dining with spectacular course views</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'consultant':
        return (
          <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="font-bold text-xl">Strategic Solutions Consulting</div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span className="hover:text-purple-200 cursor-pointer">Services</span>
                    <span className="hover:text-purple-200 cursor-pointer">Case Studies</span>
                    <span className="hover:text-purple-200 cursor-pointer">About</span>
                    <span className="hover:text-purple-200 cursor-pointer">Contact</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">15+ Years Experience</span>
                </div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Transform Your Business</h1>
              <p className="text-xl text-gray-600 mb-6">Strategic consulting solutions that drive growth and innovation</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Free Consultation
                </button>
                <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
            
            {/* Services */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Strategy Consulting</h3>
                  <p className="text-gray-600 mb-4">Develop comprehensive business strategies for sustainable growth</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Market Analysis</li>
                    <li>• Competitive Positioning</li>
                    <li>• Growth Planning</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Digital Transformation</h3>
                  <p className="text-gray-600 mb-4">Modernize your business with cutting-edge technology solutions</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Technology Assessment</li>
                    <li>• Process Optimization</li>
                    <li>• Digital Strategy</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Case Studies */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Manufacturing Co.</h3>
                  <p className="text-purple-100 mb-4">Increased efficiency by 40% through process optimization</p>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">40% Efficiency Gain</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Tech Startup</h3>
                  <p className="text-purple-100 mb-4">Scaled from 10 to 100 employees in 18 months</p>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">10x Growth</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Retail Chain</h3>
                  <p className="text-purple-100 mb-4">Digital transformation increased sales by 60%</p>
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-sm">60% Sales Increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'contractor':
        return (
          <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="font-bold text-xl">BuildRight Construction</div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span className="hover:text-amber-200 cursor-pointer">Services</span>
                    <span className="hover:text-amber-200 cursor-pointer">Projects</span>
                    <span className="hover:text-amber-200 cursor-pointer">About</span>
                    <span className="hover:text-amber-200 cursor-pointer">Contact</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Wrench className="w-4 h-4" />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Quality Construction Services</h1>
              <p className="text-xl text-gray-600 mb-6">Residential and commercial construction with unmatched craftsmanship</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                  Get Free Estimate
                </button>
                <button className="border border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors">
                  View Projects
                </button>
              </div>
            </div>
            
            {/* Services */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Residential Construction</h3>
                  <p className="text-gray-600 mb-4">Custom homes and renovations built to your specifications</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Custom Home Building</li>
                    <li>• Kitchen Remodeling</li>
                    <li>• Bathroom Renovations</li>
                    <li>• Additions & Extensions</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Commercial Construction</h3>
                  <p className="text-gray-600 mb-4">Office buildings, retail spaces, and industrial facilities</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Office Buildings</li>
                    <li>• Retail Spaces</li>
                    <li>• Industrial Facilities</li>
                    <li>• Renovations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Project Gallery */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Recent Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="w-full h-32 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/70">Project Image</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Modern Office Complex</h3>
                  <p className="text-amber-100 mb-2">50,000 sq ft commercial building</p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Completed 2023</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="w-full h-32 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/70">Project Image</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Luxury Home</h3>
                  <p className="text-amber-100 mb-2">4,500 sq ft custom residence</p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Completed 2023</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="w-full h-32 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/70">Project Image</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Kitchen Renovation</h3>
                  <p className="text-amber-100 mb-2">Complete kitchen transformation</p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Completed 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return (
          <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{template.title}</h2>
              <p className="text-gray-600 mb-6">{template.description}</p>
              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-gray-500">Custom website design for {template.category}</p>
              </div>
            </div>
          </div>
        )
    }
  }

  return getTemplateContent()
}

export default function DemoShowcase() {
  const [selectedService, setSelectedService] = useState(aiServices[0])
  const [selectedTemplate, setSelectedTemplate] = useState(websiteTemplates[0])

  const handleServiceClick = (service: typeof aiServices[0]) => {
    setSelectedService(service)
  }

  const handleTemplateClick = (template: typeof websiteTemplates[0]) => {
    setSelectedTemplate(template)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
              Proof of Concept Demos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how we can transform your business with these proven solutions. 
            Each demo showcases real capabilities ready for implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-fit">
              <h3 className="text-xl font-bold text-white mb-6">Proof of Concept Demos</h3>
              <div className="space-y-3">
                {aiServices.map((service, index) => (
                  <motion.button
                    key={service.title}
                    onClick={() => handleServiceClick(service)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      selectedService.title === service.title
                        ? 'bg-blue-500/20 border border-blue-500/50'
                        : 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{service.title}</h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Demo */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${selectedService.color} rounded-xl flex items-center justify-center`}>
                    <selectedService.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                    <p className="text-gray-400">{selectedService.description}</p>
                  </div>
                </div>
                                 <button 
                   onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                   className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-300"
                 >
                   <Play className="w-4 h-4" />
                   <span>Live Demo</span>
                 </button>
              </div>

              {/* Website Template Gallery */}
              {selectedService.title === 'Website Development' ? (
                <div className="space-y-6">
                  {/* Template Selector */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {websiteTemplates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => handleTemplateClick(template)}
                        className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                          selectedTemplate.id === template.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                        }`}
                      >
                        {template.title}
                      </button>
                    ))}
                  </div>

                  {/* Full-Size Website Template */}
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-white">{selectedTemplate.title}</h4>
                        <p className="text-gray-400">{selectedTemplate.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-blue-400">{selectedTemplate.category}</span>
                          <span className="text-sm text-purple-400">{selectedTemplate.style}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Custom Design</div>
                        <div className="text-sm text-blue-400">Tailored to Your Brand</div>
                      </div>
                    </div>

                    {/* Template Preview */}
                    <div className="bg-gray-100 rounded-lg p-4 overflow-hidden">
                      <FullWebsiteTemplate template={selectedTemplate} />
                    </div>

                    {/* Template Features */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      {selectedTemplate.features.map((feature, index) => (
                        <div key={index} className="bg-gray-700/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-blue-400">{feature}</div>
                        </div>
                      ))}
                    </div>

                    {/* Style Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedTemplate.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 text-xs bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Customization Options */}
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
                      <h5 className="text-sm font-semibold text-blue-400 mb-2">What We Can Build For You</h5>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                        <div>• Custom Brand Colors & Logo</div>
                        <div>• Industry-Specific Content</div>
                        <div>• Mobile-Responsive Design</div>
                        <div>• SEO Optimization</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Demo Interface for other services */
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">{selectedService.title} Features</h4>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="bg-gray-700/50 rounded-lg p-3">
                        <div className="text-sm font-semibold text-blue-400">{feature}</div>
                      </div>
                    ))}
                  </div>

                  {selectedService.title === 'RAG Knowledge Base' && (
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
                      <h5 className="text-sm font-semibold text-blue-400 mb-2">What is RAG?</h5>
                      <p className="text-xs text-gray-300 mb-3">
                        RAG (Retrieval-Augmented Generation) combines your business documents with AI to create intelligent knowledge bases that can answer questions about your specific business processes, policies, and data.
                      </p>
                      <div className="text-xs text-gray-400">
                        <strong>Benefits:</strong> Instant answers, reduced training time, consistent information, 24/7 availability
                      </div>
                    </div>
                  )}

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Proof of Concept</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">Ready for implementation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">Customizable to your needs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">Scalable solution</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI solutions to streamline operations, 
              increase efficiency, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Full Demo</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
