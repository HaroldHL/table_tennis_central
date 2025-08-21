'use client'

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/data/site-config'

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    duration: 1,
    tableType: '',
    players: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission
    alert('Booking request submitted! We\'ll confirm your reservation shortly.')
    onClose()
    setStep(1)
    setBookingData({
      date: '',
      time: '',
      duration: 1,
      tableType: '',
      players: 2,
      name: '',
      email: '',
      phone: '',
      specialRequests: ''
    })
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const selectedTable = siteConfig.booking.tableTypes.find(t => t.id.toString() === bookingData.tableType)
  const totalCost = selectedTable ? selectedTable.price * bookingData.duration : 0

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            Reserve Your Table
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Step {step} of 3</span>
            <span className="text-sm text-gray-500">
              {step === 1 && 'Select Date & Time'}
              {step === 2 && 'Choose Table'}
              {step === 3 && 'Your Details'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-6">
            {/* Step 1: Date & Time */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {siteConfig.booking.timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setBookingData({...bookingData, time})}
                        className={`py-3 px-4 rounded-lg border transition-colors ${
                          bookingData.time === time
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Duration (hours)
                    </label>
                    <select
                      value={bookingData.duration}
                      onChange={(e) => setBookingData({...bookingData, duration: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    >
                      <option value={1}>1 hour</option>
                      <option value={2}>2 hours</option>
                      <option value={3}>3 hours</option>
                      <option value={4}>4 hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Number of Players
                    </label>
                    <select
                      value={bookingData.players}
                      onChange={(e) => setBookingData({...bookingData, players: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    >
                      <option value={2}>2 players</option>
                      <option value={4}>4 players</option>
                      <option value={6}>6 players</option>
                      <option value={8}>8+ players</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Table Selection */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Choose Your Table
                </h3>
                <div className="space-y-4">
                  {siteConfig.booking.tableTypes.map((table) => (
                    <div
                      key={table.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        bookingData.tableType === table.id.toString()
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-300 hover:border-primary-300'
                      }`}
                      onClick={() => setBookingData({...bookingData, tableType: table.id.toString()})}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{table.name}</h4>
                          <p className="text-gray-600 text-sm">
                            {table.id === 1 && 'Perfect for casual play and practice sessions'}
                            {table.id === 2 && 'Enhanced experience with premium equipment'}
                            {table.id === 3 && 'Professional tournament-grade table'}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600">
                            ${table.price}
                          </div>
                          <div className="text-sm text-gray-500">per hour</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booking Summary */}
                {bookingData.tableType && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Booking Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{bookingData.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{bookingData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{bookingData.duration} hour(s)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Table:</span>
                        <span>{selectedTable?.name}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 font-semibold">
                        <span>Total Cost:</span>
                        <span>${totalCost}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Your Contact Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="(02) 9XXX-XXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Special Requests
                  </label>
                  <textarea
                    value={bookingData.specialRequests}
                    onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Any special requirements or requests..."
                  ></textarea>
                </div>

                {/* Final Summary */}
                <div className="bg-primary-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Final Booking Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Date:</strong> {bookingData.date}</p>
                      <p><strong>Time:</strong> {bookingData.time}</p>
                      <p><strong>Duration:</strong> {bookingData.duration} hour(s)</p>
                      <p><strong>Players:</strong> {bookingData.players}</p>
                    </div>
                    <div>
                      <p><strong>Table:</strong> {selectedTable?.name}</p>
                      <p><strong>Rate:</strong> ${selectedTable?.price}/hour</p>
                      <p><strong>Total Cost:</strong> <span className="text-2xl font-bold text-primary-600">${totalCost}</span></p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">Important Information:</h5>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Booking confirmation will be sent to your email</li>
                    <li>• You'll receive a unique access code before your session</li>
                    <li>• Equipment is provided, but you're welcome to bring your own</li>
                    <li>• Cancellations must be made at least 2 hours in advance</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between p-6 border-t bg-gray-50">
            <div className="flex space-x-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              )}
            </div>
            
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={
                    (step === 1 && (!bookingData.date || !bookingData.time)) ||
                    (step === 2 && !bookingData.tableType)
                  }
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}