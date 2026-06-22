'use client'

import { Header } from '@/components/header'
import { CurrentPatientCard } from '@/components/doctor/current-patient-card'
import { NextQueue } from '@/components/doctor/next-queue'
import { useCurrentPatient } from "@/hooks/useCurrentPatient";
import { useWaitingPatients } from "@/hooks/useWaitingPatients";

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
  

  const { data: currentPatient } = useCurrentPatient();

  const { data: upcomingPatients = [] } = useWaitingPatients();

  if (!currentPatient) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex h-96 items-center justify-center rounded-xl border-2 border-dashed border-border">
            <p className="text-center text-lg text-muted-foreground">
              No patient currently being served
            </p>
          </div>
        </main>
      </div>
    );
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
          </div>

          {/* Right Column - Queue (30%) */}
          <div className="lg:col-span-1">
            <NextQueue patients={upcomingPatients} />
          </div>
        </div>
      </main>
    </div>
  );
}
