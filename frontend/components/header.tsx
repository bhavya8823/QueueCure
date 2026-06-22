'use client'

import { Clock, Bell, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const getTitle = () => {
    if (pathname === '/doctor') return 'Doctor Workspace'
    if (pathname === '/waiting-room') return 'Waiting Room Display'
    return 'Receptionist Dashboard'
  }

  const navItems = [
    { href: '/', label: 'Receptionist', icon: '👤' },
    { href: '/doctor', label: 'Doctor', icon: '👨‍⚕️' },
    { href: '/waiting-room', label: 'Waiting Room', icon: '📺' },
  ]

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-foreground">{getTitle()}</h1>
            <p className="text-sm text-muted-foreground">QueueCure Clinic Management System</p>
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{time || '--:--'}</span>
              </div>

              <button className="relative rounded-lg p-2 hover:bg-secondary">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
              </button>

              <button className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 hover:bg-secondary/80">
                <div className="h-8 w-8 rounded-full bg-primary" />
                <div className="text-left">
                  <p className="text-xs font-medium text-foreground">Dr. Admin</p>
                  <p className="text-xs text-muted-foreground">Clinic Staff</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
