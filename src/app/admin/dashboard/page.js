'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  LightBulbIcon, 
  LockClosedIcon, 
  LockOpenIcon, 
  PowerIcon,
  HomeIcon,
  ArrowRightOnRectangleIcon,
  WifiIcon,
  ExclamationTriangleIcon,
  Cog6ToothIcon,
  SunIcon
} from '@heroicons/react/24/outline'

// 初始设备状态
const initialDevices = [
  {
    id: 'front_door',
    name: 'Front Door Lock',
    type: 'lock',
    location: 'Main Entrance',
    state: { locked: true, battery: 87 },
    icon: LockClosedIcon,
    color: 'red'
  },
  {
    id: 'back_door',
    name: 'Back Door Lock', 
    type: 'lock',
    location: 'Back Exit',
    state: { locked: false, battery: 92 },
    icon: LockOpenIcon,
    color: 'green'
  },
  {
    id: 'main_hall_lights',
    name: 'Main Hall Lights',
    type: 'light',
    location: 'Main Hall',
    state: { on: true, brightness: 85 },
    icon: LightBulbIcon,
    color: 'yellow'
  },
  {
    id: 'table_area_1',
    name: 'Table Area 1',
    type: 'light', 
    location: 'Playing Area',
    state: { on: false, brightness: 0 },
    icon: LightBulbIcon,
    color: 'gray'
  },
  {
    id: 'table_area_2',
    name: 'Table Area 2',
    type: 'light',
    location: 'Playing Area', 
    state: { on: true, brightness: 75 },
    icon: LightBulbIcon,
    color: 'yellow'
  },
  {
    id: 'reception_lights',
    name: 'Reception Lights',
    type: 'light',
    location: 'Reception',
    state: { on: true, brightness: 60 },
    icon: LightBulbIcon,
    color: 'yellow'
  }
]

export default function AdminDashboard() {
  const [devices, setDevices] = useState(initialDevices)
  const [user, setUser] = useState('')
  const [connectionStatus, setConnectionStatus] = useState('connected')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // 检查登录状态
    const isLoggedIn = localStorage.getItem('adminLoggedIn')
    const adminUser = localStorage.getItem('adminUser')
    
    if (!isLoggedIn) {
      router.push('/admin')
      return
    }

    setUser(adminUser || 'Admin')
    
    // 加载保存的设备状态
    const savedDevices = localStorage.getItem('deviceStates')
    if (savedDevices) {
      setDevices(JSON.parse(savedDevices))
    }

    // 模拟连接状态检查
    setTimeout(() => {
      setConnectionStatus(Math.random() > 0.8 ? 'error' : 'connected')
      setIsLoading(false)
    }, 1000)
  }, [router])

  // 保存设备状态到本地存储
  const saveDeviceStates = (newDevices) => {
    setDevices(newDevices)
    localStorage.setItem('deviceStates', JSON.stringify(newDevices))
  }

  // 切换设备状态
  const toggleDevice = async (deviceId) => {
    const updatedDevices = devices.map(device => {
      if (device.id === deviceId) {
        let newState = { ...device.state }
        
        if (device.type === 'lock') {
          newState.locked = !newState.locked
        } else if (device.type === 'light') {
          newState.on = !newState.on
          if (newState.on && newState.brightness === 0) {
            newState.brightness = 75
          }
        }
        
        return { ...device, state: newState }
      }
      return device
    })

    saveDeviceStates(updatedDevices)
    
    // 模拟API调用
    setTimeout(() => {
      console.log(`Device ${deviceId} toggled`)
    }, 500)
  }

  // 调节亮度
  const adjustBrightness = (deviceId, brightness) => {
    const updatedDevices = devices.map(device => {
      if (device.id === deviceId && device.type === 'light') {
        return {
          ...device,
          state: { 
            ...device.state, 
            brightness: parseInt(brightness),
            on: brightness > 0
          }
        }
      }
      return device
    })
    saveDeviceStates(updatedDevices)
  }

  // 批量操作
  const bulkOperation = (operation) => {
    const updatedDevices = devices.map(device => {
      if (operation === 'all_lights_on' && device.type === 'light') {
        return { ...device, state: { ...device.state, on: true, brightness: 80 } }
      } else if (operation === 'all_lights_off' && device.type === 'light') {
        return { ...device, state: { ...device.state, on: false, brightness: 0 } }
      } else if (operation === 'lock_all' && device.type === 'lock') {
        return { ...device, state: { ...device.state, locked: true } }
      }
      return device
    })
    saveDeviceStates(updatedDevices)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    localStorage.removeItem('adminUser')
    router.push('/admin')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'text-green-500'
      case 'disconnected': return 'text-gray-400' 
      case 'error': return 'text-red-500'
      default: return 'text-gray-400'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-3 group transition-colors hover:opacity-80"
                title="Back to Website"
              >
                <HomeIcon className="h-8 w-8 text-blue-600 group-hover:text-blue-700" />
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-gray-900">
                    Table Tennis Central
                  </h1>
                  <p className="text-xs md:text-sm text-gray-500">Device Management</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Connection Status */}
              <div className="hidden md:flex items-center space-x-2">
                <WifiIcon className={`h-5 w-5 ${getStatusColor(connectionStatus)}`} />
                <span className={`text-sm font-medium ${getStatusColor(connectionStatus)}`}>
                  {connectionStatus === 'connected' ? 'Online' : 'Offline'}
                </span>
              </div>

              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <div className="text-right hidden md:block">
                  <div className="text-sm font-medium text-gray-900">
                    Welcome, {user}
                  </div>
                  <div className="text-xs text-gray-500">Administrator</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                  title="Logout"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Connection Alert */}
      {connectionStatus === 'error' && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                HomeAssistant connection unstable. Some features may be limited.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Quick Actions */}
        <div className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => bulkOperation('all_lights_on')}
              className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-colors"
            >
              <SunIcon className="h-8 w-8 text-yellow-500 mb-2" />
              <span className="text-sm font-medium">All Lights On</span>
            </button>
            
            <button
              onClick={() => bulkOperation('all_lights_off')}
              className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              <PowerIcon className="h-8 w-8 text-gray-500 mb-2" />
              <span className="text-sm font-medium">All Lights Off</span>
            </button>
            
            <button
              onClick={() => bulkOperation('lock_all')}
              className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-red-400 hover:bg-red-50 transition-colors"
            >
              <LockClosedIcon className="h-8 w-8 text-red-500 mb-2" />
              <span className="text-sm font-medium">Lock All Doors</span>
            </button>
            
            <button
              onClick={() => setConnectionStatus(connectionStatus === 'connected' ? 'error' : 'connected')}
              className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
            >
              <Cog6ToothIcon className="h-8 w-8 text-blue-500 mb-2" />
              <span className="text-sm font-medium">Refresh Status</span>
            </button>
          </div>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device) => {
            const IconComponent = device.icon
            const isActive = device.type === 'lock' ? device.state.locked : device.state.on

            return (
              <div
                key={device.id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  {/* Device Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl ${
                        isActive 
                          ? device.type === 'lock' 
                            ? device.state.locked 
                              ? 'bg-red-100 text-red-600' 
                              : 'bg-green-100 text-green-600'
                            : 'bg-yellow-100 text-yellow-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                          {device.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">{device.location}</p>
                      </div>
                    </div>
                    
                    <div className={`w-3 h-3 rounded-full ${
                      isActive ? 'bg-green-400' : 'bg-gray-300'
                    }`}></div>
                  </div>

                  {/* Device Controls */}
                  <div className="space-y-4">
                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleDevice(device.id)}
                      className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-colors ${
                        device.type === 'lock'
                          ? device.state.locked
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                          : device.state.on
                            ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {device.type === 'lock' ? (
                        device.state.locked ? (
                          <>
                            <LockOpenIcon className="h-5 w-5" />
                            <span>Unlock</span>
                          </>
                        ) : (
                          <>
                            <LockClosedIcon className="h-5 w-5" />
                            <span>Lock</span>
                          </>
                        )
                      ) : (
                        <>
                          <PowerIcon className="h-5 w-5" />
                          <span>{device.state.on ? 'Turn Off' : 'Turn On'}</span>
                        </>
                      )}
                    </button>

                    {/* Battery Level (for locks) */}
                    {device.type === 'lock' && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Battery:</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all ${
                                device.state.battery > 20 ? 'bg-green-400' : 'bg-red-400'
                              }`}
                              style={{ width: `${device.state.battery}%` }}
                            ></div>
                          </div>
                          <span className="font-medium text-xs">{device.state.battery}%</span>
                        </div>
                      </div>
                    )}

                    {/* Brightness Control (for lights) */}
                    {device.type === 'light' && device.state.on && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Brightness:</span>
                          <span className="font-medium">{device.state.brightness}%</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="100"
                          value={device.state.brightness}
                          onChange={(e) => adjustBrightness(device.id, e.target.value)}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          style={{
                            background: `linear-gradient(to right, #fbbf24 0%, #fbbf24 ${device.state.brightness}%, #e5e7eb ${device.state.brightness}%, #e5e7eb 100%)`
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* System Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Connection:</span>
                <span className={`font-medium ${getStatusColor(connectionStatus)}`}>
                  {connectionStatus === 'connected' ? 'Online' : 'Offline'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total Devices:</span>
                <span className="text-gray-900 font-medium">{devices.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Active:</span>
                <span className="text-gray-900 font-medium">
                  {devices.filter(d => d.type === 'lock' ? d.state.locked : d.state.on).length}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Lights</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Total Lights:</span>
                <span className="text-gray-900 font-medium">
                  {devices.filter(d => d.type === 'light').length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Currently On:</span>
                <span className="text-yellow-600 font-medium">
                  {devices.filter(d => d.type === 'light' && d.state.on).length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Avg Brightness:</span>
                <span className="text-gray-900 font-medium">
                  {Math.round(devices.filter(d => d.type === 'light' && d.state.on)
                    .reduce((acc, d) => acc + d.state.brightness, 0) / 
                    devices.filter(d => d.type === 'light' && d.state.on).length) || 0}%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Security</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Total Locks:</span>
                <span className="text-gray-900 font-medium">
                  {devices.filter(d => d.type === 'lock').length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Locked:</span>
                <span className="text-red-600 font-medium">
                  {devices.filter(d => d.type === 'lock' && d.state.locked).length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Battery Status:</span>
                <span className="text-green-600 font-medium">Good</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}