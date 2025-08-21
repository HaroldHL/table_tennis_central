'use client'

import { useState } from 'react'
import { siteConfig } from '@/data/site-config'

export default function GoogleMaps({ showActions = true, height = 400, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false)

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.2676677532546!2d151.20599831521343!3d-33.868830680653285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892fdd%3A0x3133f8d75a1ac251!2sSydney%20Olympic%20Park%20NSW%2C%20Australia!5e0!3m2!1sen!2sau!4v1629798654321!5m2!1sen!2sau`

  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.contact.address)}`
  }

  const getMapUrl = () => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`
  }

  const openInGoogleMaps = () => {
    window.open(getMapUrl(), '_blank', 'noopener,noreferrer')
  }

  const getDirections = () => {
    window.open(getDirectionsUrl(), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Loading Placeholder */}
      {!isLoaded && (
        <div 
          className="bg-gray-200 flex items-center justify-center"
          style={{ height: `${height}px` }}
        >
          <div className="text-center text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
            <p className="text-sm">Loading map...</p>
          </div>
        </div>
      )}

      {/* Google Maps Iframe */}
      <iframe
        src={mapSrc}
        width="100%"
        height={height}
        style={{ 
          border: 0,
          display: isLoaded ? 'block' : 'none'
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)}
        title="Table Tennis Central Location"
      ></iframe>

      {/* Map Overlay with Actions */}
      {showActions && isLoaded && (
        <div className="absolute top-4 left-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div>
                <h4 className="font-semibold text-gray-800">{siteConfig.name}</h4>
                <p className="text-sm text-gray-600">{siteConfig.contact.address}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={getDirections}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"
                >
                  <span>🧭</span>
                  <span>Directions</span>
                </button>
                <button
                  onClick={openInGoogleMaps}
                  className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"
                >
                  <span>📍</span>
                  <span className="hidden sm:inline">View Larger</span>
                  <span className="sm:hidden">View</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions for Mobile */}
      {showActions && isLoaded && (
        <div className="absolute bottom-4 left-4 right-4 sm:hidden">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={getDirections}
                className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center space-x-1"
              >
                <span>🧭</span>
                <span>Navigate</span>
              </button>
              <button
                onClick={() => window.open(`tel:${siteConfig.contact.phone}`, '_self')}
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center space-x-1"
              >
                <span>📞</span>
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}