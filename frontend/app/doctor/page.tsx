'use client'

import { Header } from '@/components/header'
import { CurrentPatientCard } from '@/components/doctor/current-patient-card'
import { ConsultationNotes } from '@/components/doctor/consultation-notes'
import { NextQueue } from '@/components/doctor/next-queue'
import { PerformanceAnalytics } from '@/components/doctor/performance-analytics'
import { useState } from 'react'

interface Patient {
  id: string
  token: string
  name: string
  phone: string
  age: number
  consultationType: string
  status: 'waiting' | 'called' | 'completed'
}

export default function DoctorPage() {
  const [patients] = useState<Patient[]>([
    {
      id: '1',
      token: 'A001',
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      age: 45,
      consultationType: 'General Checkup',
      status: 'called',
    },
    {
      id: '2',
      token: 'A002',
      name: 'Sarah Johnson',
      phone: '+1 (555) 234-5678',
      age: 32,
      consultationType: 'Dental',
      status: 'waiting',
    },
    {
      id: '3',
      token: 'A003',
      name: 'Michael Davis',
      phone: '+1 (555) 345-6789',
      age: 58,
      consultationType: 'Follow-up',
      status: 'waiting',
    },
    {
      id: '4',
      token: 'A004',
      name: 'Emily Brown',
      phone: '+1 (555) 456-7890',
      age: 28,
      consultationType: 'Vaccination',
      status: 'waiting',
    },
    {
      id: '5',
      token: 'A005',
      name: 'Robert Wilson',
      phone: '+1 (555) 567-8901',
      age: 52,
      consultationType: 'Eye Care',
      status: 'waiting',
    },
    {
      id: '6',
      token: 'A006',
      name: 'Lisa Anderson',
      phone: '+1 (555) 678-9012',
      age: 35,
      consultationType: 'General Checkup',
      status: 'waiting',
    },
  ])

  const currentPatient = patients.find((p) => p.status === 'called')
  const upcomingPatients = patients.filter((p) => p.status === 'waiting')

  if (!currentPatient) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex h-96 items-center justify-center rounded-xl border-2 border-dashed border-border">
            <p className="text-center text-lg text-muted-foreground">No patient currently being served</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Current Patient (70%) */}
          <div className="lg:col-span-2 space-y-6">
            <CurrentPatientCard
              token={currentPatient.token}
              name={currentPatient.name}
              age={currentPatient.age}
              consultationType={currentPatient.consultationType}
              onComplete={() => {}}
            />
            <ConsultationNotes patientId={currentPatient.id} />
            <PerformanceAnalytics />
          </div>

          {/* Right Column - Queue (30%) */}
          <div className="lg:col-span-1">
            <NextQueue patients={upcomingPatients} />
          </div>
        </div>
      </main>
    </div>
  )
}
