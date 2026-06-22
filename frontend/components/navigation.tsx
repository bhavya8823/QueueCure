'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ClipboardList, Stethoscope, Monitor, LogOut } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-white">QC</span>
            </div>
            <span className="text-lg font-semibold text-foreground">QueueCure</span>
          </div>

          <div className="flex items-center gap-1">
            <Link
              href="/"
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <ClipboardList className="h-4 w-4" />
              Receptionist
            </Link>

            <Link
              href="/doctor"
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/doctor')
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Stethoscope className="h-4 w-4" />
              Doctor
            </Link>

            <Link
              href="/waiting-room"
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/waiting-room')
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Monitor className="h-4 w-4" />
              Waiting Room
            </Link>
          </div>

          <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <LogOut className="h-4 w-4" />
            Exit
          </button>
        </div>
      </div>
    </nav>
  )
}
