'use client'

import { useState } from 'react'
import { siteConfig } from '@/data/site-config'
import GoogleMaps from '@/components/GoogleMaps'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your table tennis journey? Contact us for bookings, coaching, or any questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Visit Table Tennis Central
                </h3>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">{siteConfig.contact.phone}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">{siteConfig.contact.email}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Opening Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Mon-Fri: {siteConfig.contact.hours.weekdays}</p>
                        <p>Sat-Sun: {siteConfig.contact.hours.weekends}</p>
                        <p>Holidays: {siteConfig.contact.hours.holidays}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors text-left">
                    🏓 Reserve a Table Now
                  </button>
                  <button className="w-full bg-white hover:bg-gray-50 text-primary-600 py-3 px-4 rounded-lg font-semibold transition-colors border border-primary-200 text-left">
                    👨‍🏫 Book Coaching Session
                  </button>
                  <button className="w-full bg-white hover:bg-gray-50 text-primary-600 py-3 px-4 rounded-lg font-semibold transition-colors border border-primary-200 text-left">
                    🎉 Plan Group Event
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href={siteConfig.social.facebook} 
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    f
                  </a>
                  <a 
                    href={siteConfig.social.instagram} 
                    className="w-12 h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-lg flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📷
                  </a>
                  <a 
                    href={siteConfig.social.twitter} 
                    className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🐦
                  </a>
                  <a 
                    href={siteConfig.social.youtube} 
                    className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ▶️
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="(02) 9XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Table Booking</option>
                      <option value="coaching">Coaching Inquiry</option>
                      <option value="event">Group Event</option>
                      <option value="membership">Membership</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your inquiry, preferred times, skill level, or any other details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours. For urgent bookings, please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Find Us on the Map
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Located in the heart of Sydney's sports district, easily accessible by public transport and car.
                </p>
              </div>
              
              {/* Google Maps Embed */}
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.2676677532546!2d151.20599831521343!3d-33.868830680653285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892fdd%3A0x3133f8d75a1ac251!2sSydney%20Olympic%20Park%20NSW%2C%20Australia!5e0!3m2!1sen!2sau!4v1629798654321!5m2!1sen!2sau"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
                
                {/* Map Overlay with Actions */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">Table Tennis Central</h4>
                        <p className="text-sm text-gray-600">{siteConfig.contact.address}</p>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.contact.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"
                        >
                          <span>🧭</span>
                          <span>Directions</span>
                        </a>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"
                        >
                          <span>📍</span>
                          <span>View Larger</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation Info */}
              <div className="p-8 bg-gray-50">
                <h4 className="font-semibold text-gray-800 mb-4">Getting Here</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-lg">🚗</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">By Car</h5>
                      <p className="text-gray-600 text-sm">Free parking available. Located just off the main highway with easy access.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-lg">🚊</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">Public Transport</h5>
                      <p className="text-gray-600 text-sm">5-minute walk from Central Station. Multiple bus routes available.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 text-lg">🚲</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">Bike Friendly</h5>
                      <p className="text-gray-600 text-sm">Secure bike parking and shower facilities available for cyclists.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}