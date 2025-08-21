import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Table Rental', href: '/services' },
      { name: 'Coaching', href: '/coaches' },
      { name: 'Tournaments', href: '/services' },
      { name: 'Group Events', href: '/contact' }
    ],
    quickLinks: [
      { name: 'About Us', href: '/about' },
      { name: 'Book Now', href: '/contact' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/services' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cancellation Policy', href: '#' },
      { name: 'Safety Guidelines', href: '#' }
    ]
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">🏓</span>
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Australia's premier dedicated table tennis venue offering professional facilities, 
              expert coaching, and a welcoming community for players of all levels.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href={siteConfig.social.facebook}
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className="text-sm">f</span>
              </a>
              <a 
                href={siteConfig.social.instagram}
                className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="text-sm">📷</span>
              </a>
              <a 
                href={siteConfig.social.twitter}
                className="w-10 h-10 bg-gray-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <span className="text-sm">🐦</span>
              </a>
              <a 
                href={siteConfig.social.youtube}
                className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <span className="text-sm">▶️</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <span className="text-primary-400 mt-1">📍</span>
                <div>
                  <p className="text-sm">{siteConfig.contact.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-400">📞</span>
                <p className="text-sm">{siteConfig.contact.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-400">✉️</span>
                <p className="text-sm">{siteConfig.contact.email}</p>
              </div>
            </div>
            
            {/* Opening Hours */}
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-2">Opening Hours</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Mon-Fri: {siteConfig.contact.hours.weekdays}</p>
                <p>Weekends: {siteConfig.contact.hours.weekends}</p>
                <p>Holidays: {siteConfig.contact.hours.holidays}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="py-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest news about tournaments, special events, and exclusive offers.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="pb-6">
          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <p className="text-gray-300 text-sm">
              <strong>Emergency Contact:</strong> For urgent after-hours issues, call {siteConfig.contact.phone}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}