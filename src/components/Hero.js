'use client'

import { useState } from 'react'
import { siteConfig } from '@/data/site-config'
import BookingModal from './BookingModal'

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        {/* Animated ping pong balls */}
        <div className="ping-pong-ball absolute top-1/4 left-1/4 opacity-30" style={{animationDelay: '0s'}}></div>
        <div className="ping-pong-ball absolute top-3/4 right-1/4 opacity-20" style={{animationDelay: '1s'}}></div>
        <div className="ping-pong-ball absolute top-1/2 left-3/4 opacity-25" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-responsive-xl font-bold mb-6 animate-fadeIn">
            {siteConfig.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-responsive-md mb-4 opacity-90 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            {siteConfig.hero.subtitle}
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-lg opacity-90 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <span className="flex items-center">
              <span className="mr-2">✓</span>
              Open Everyday
            </span>
            <span className="flex items-center">
              <span className="mr-2">✓</span>
              Online Booking
            </span>
            <span className="flex items-center">
              <span className="mr-2">✓</span>
              Professional Tables
            </span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-primary-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:scale-105"
            >
              {siteConfig.hero.primaryCTA}
            </button>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              {siteConfig.hero.secondaryCTA}
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fadeIn" style={{animationDelay: '0.8s'}}>
            {siteConfig.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-75">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  )
}