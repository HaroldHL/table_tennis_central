'use client'

import { useState } from 'react'
import { siteConfig } from '@/data/site-config'

export default function Coaches() {
  const [selectedCoach, setSelectedCoach] = useState(null)

  return (
    <section id="coaches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-800 mb-6">
              Meet Our Expert Coaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from experienced professionals who are passionate about helping you improve your game
            </p>
          </div>

          {/* Coaches Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.coaches.map((coach, index) => (
              <div 
                key={coach.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fadeIn cursor-pointer"
                style={{animationDelay: `${index * 0.2}s`}}
                onClick={() => setSelectedCoach(coach)}
              >
                {/* Coach Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {coach.experience}
                  </div>
                </div>

                {/* Coach Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {coach.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {coach.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.slice(0, 2).map((specialty, index) => (
                        <span 
                          key={index} 
                          className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                      {coach.specialties.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{coach.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Rate & Book Button */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="font-bold text-lg text-primary-600">
                        {coach.rate}
                      </div>
                      <div className="text-xs text-gray-500">per session</div>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coach Modal */}
          {selectedCoach && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  {/* Modal Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={selectedCoach.image} 
                        alt={selectedCoach.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {selectedCoach.name}
                        </h3>
                        <p className="text-primary-600 font-semibold">
                          {selectedCoach.title}
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedCoach(null)}
                      className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  {/* Coach Details */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">About</h4>
                      <p className="text-gray-600">{selectedCoach.bio}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCoach.specialties.map((specialty, index) => (
                          <span 
                            key={index} 
                            className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Achievements</h4>
                      <ul className="space-y-2">
                        {selectedCoach.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-secondary-500 mt-1">•</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">
                          {selectedCoach.rate}
                        </div>
                        <div className="text-sm text-gray-500">
                          Experience: {selectedCoach.experience}
                        </div>
                      </div>
                      <button className="btn-primary">
                        Book with {selectedCoach.name.split(' ')[0]}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Coaching Information */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Perfect Your Table Tennis Game
              </h3>
              <p className="text-lg text-gray-600">
                Our experienced coaches are available for one-on-one or group classes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Personal Training</h4>
                <p className="text-gray-600 text-sm">One-on-one sessions tailored to your specific needs and goals</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Group Classes</h4>
                <p className="text-gray-600 text-sm">Learn with friends or meet new players in our group coaching sessions</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Competition Prep</h4>
                <p className="text-gray-600 text-sm">Advanced training for competitive players and tournament preparation</p>
              </div>
            </div>

            {/* Contact for Coaching */}
            <div className="text-center mt-8 pt-8 border-t">
              <p className="text-gray-600 mb-4">
                Ready to take your game to the next level?
              </p>
              <button className="btn-primary mr-4">
                Book Coaching Session
              </button>
              <button className="btn-secondary">
                Contact Us for Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}