'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/data/site-config'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // 检查是否在管理员页面
  const isAdminPage = pathname.startsWith('/admin')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Coaches', href: '/coaches' },
    { name: 'Contact', href: '/contact' },
  ]

  // 判断链接是否为当前页面
  const isActivePage = (href) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  // 如果是管理员页面，不显示Header
  if (isAdminPage) {
    return null
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🏓</div>
            <Link 
              href="/"
              className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {siteConfig.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors relative ${
                  isActivePage(item.href)
                    ? isScrolled 
                      ? 'text-primary-600' 
                      : 'text-white'
                    : isScrolled 
                      ? 'text-gray-600 hover:text-primary-600' 
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {/* Active page indicator */}
                {isActivePage(item.href) && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-colors ${
                    isScrolled ? 'bg-primary-600' : 'bg-white'
                  }`}></span>
                )}
              </Link>
            ))}
            <Link
              href="/booking"
              className={`ml-4 px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm'
              }`}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="bg-white/95 backdrop-blur-sm rounded-xl mt-4 py-4 px-4 shadow-lg border border-white/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                  isActivePage(item.href)
                    ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="block mt-4 bg-primary-600 hover:bg-primary-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}