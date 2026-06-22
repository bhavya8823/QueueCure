'use client'

import { NowServingCard } from '@/components/waiting-room/now-serving-card'
import { UpcomingQueue } from '@/components/waiting-room/upcoming-queue'
import { AnnouncementTicker } from '@/components/waiting-room/announcement-ticker'
import { useState } from 'react'

interface Patient {
  token: string
  name: string
}

export default function WaitingRoomPage() {
  const [currentPatient] = useState<Patient>({
    token: 'A001',
    name: 'John Smith',
  })

  const [upcomingPatients] = useState<Patient[]>([
    { token: 'A002', name: 'Sarah Johnson' },
    { token: 'A003', name: 'Michael Davis' },
    { token: 'A004', name: 'Emily Brown' },
    { token: 'A005', name: 'Robert Wilson' },
    { token: 'A006', name: 'Lisa Anderson' },
  ])

  const announcements = [
    'Please check in at the reception desk 10 minutes before your appointment',
    'Masks are optional but recommended in medical areas',
    'Thank you for choosing our clinic - Your health is our priority',
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Simplified header for waiting room */}
      <div className="border-b border-border bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">QueueCure Clinic</h1>
              <p className="text-sm text-muted-foreground">Patient Waiting Area</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">
                {new Date().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content - TV optimized layout */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Left & Center - Now Serving (70%) */}
          <div className="lg:col-span-3 space-y-8">
            <NowServingCard
              token={currentPatient.token}
              patientName={currentPatient.name}
              room="Room 3"
            />


            <AnnouncementTicker announcements={announcements} />
          </div>

          {/* Right - Upcoming Queue (30%) */}
          <div className="lg:col-span-1">
            <UpcomingQueue patients={upcomingPatients} />
          </div>
        </div>
      </main>
    </div>
  )
}
