'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // 检查是否已经登录
  useEffect(() => {
    if (localStorage.getItem('adminLoggedIn') === 'true') {
      router.push('/admin/dashboard')
    }
  }, [router])

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // 模拟登录验证
    setTimeout(() => {
      if (
        (credentials.username === 'admin' && credentials.password === 'admin123') ||
        (credentials.username === 'manager' && credentials.password === 'manager456')
      ) {
        localStorage.setItem('adminLoggedIn', 'true')
        localStorage.setItem('adminUser', credentials.username)
        router.push('/admin/dashboard')
      } else {
        setError('Invalid username or password')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="mx-auto h-16 w-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <span className="text-white text-3xl">🏓</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
          <p className="text-blue-200">Table Tennis Central Management</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-100 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-2"></div>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/60 text-xs text-center mb-4">Demo Credentials</p>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-white/80 text-sm font-medium">Admin</div>
                <div className="text-white/60 text-xs">admin / admin123</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-white/80 text-sm font-medium">Manager</div>
                <div className="text-white/60 text-xs">manager / manager456</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice - 移除了返回网站链接 */}
        <div className="text-center mt-6">
          <p className="text-blue-200/60 text-xs">
            🔒 Secure Admin Area - Authorized Personnel Only
          </p>
        </div>
      </div>
    </div>
  )
}