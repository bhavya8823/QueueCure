'use client'

import { Header } from '@/components/header'
import { StatsCards } from '@/components/stats-cards'
import { RegistrationForm } from '@/components/registration-form'
import { QueueTable } from '@/components/queue-table'
import { CallNextButton } from '@/components/call-next-button'
import { useState } from 'react'
import { useQueueStats } from "@/hooks/useQueueStats";

interface Patient {
  id: string
  token: string
  name: string
  phone: string
  age: number
  consultationType: string
  status: 'waiting' | 'called' | 'completed'
}

export default function Home() {
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: '1',
      token: 'A001',
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      age: 45,
      consultationType: 'General Checkup',
      status: 'waiting',
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
      status: 'called',
    },
    {
      id: '4',
      token: 'A004',
      name: 'Emily Brown',
      phone: '+1 (555) 456-7890',
      age: 28,
      consultationType: 'Vaccination',
      status: 'completed',
    },
  ])

  const handleRegisterPatient = (formData: {
    fullName: string
    phone: string
    age: string
    consultationType: string
  }) => {
    const newPatient: Patient = {
      id: String(patients.length + 1),
      token: `A${String(patients.length + 1).padStart(3, '0')}`,
      name: formData.fullName,
      phone: formData.phone,
      age: parseInt(formData.age),
      consultationType: formData.consultationType,
      status: 'waiting',
    }
    setPatients([...patients, newPatient])
  }

  const handleCallPatient = (id: string) => {
    setPatients(
      patients.map((p) =>
        p.id === id ? { ...p, status: 'called' as const } : p
      )
    )
  }

  const handleCompletePatient = (id: string) => {
    setPatients(
      patients.map((p) =>
        p.id === id ? { ...p, status: 'completed' as const } : p
      )
    )
  }

  const handleCallNextPatient = () => {
    const nextWaiting = patients.find((p) => p.status === 'waiting')
    if (nextWaiting) {
      handleCallPatient(nextWaiting.id)
    }
  }

  const { data: statsData, isLoading } = useQueueStats();
  console.log("Stats Data:", statsData);
  const waitingCount = statsData?.waiting ?? 0;
  const calledCount = statsData?.called ?? 0;
  const completedCount = statsData?.completed ?? 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <StatsCards
          waiting={waitingCount}
          called={calledCount}
          completed={completedCount}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <RegistrationForm onSubmit={handleRegisterPatient} />
          </div>
          <div className="lg:col-span-2">
            <QueueTable
              patients={patients}
              onCallPatient={handleCallPatient}
              onCompletePatient={handleCompletePatient}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <CallNextButton
            onClick={handleCallNextPatient}
            disabled={waitingCount === 0}
          />
        </div>
      </main>
    </div>
  )
}
