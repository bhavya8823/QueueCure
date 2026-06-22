'use client'

import { Clock, Users } from 'lucide-react'

interface Patient {
  _id: string;
  token: string;
  name: string;
  consultationType: string;
}

interface NextQueueProps {
  patients: Patient[]
}

export function NextQueue({ patients }: NextQueueProps) {
  const upcomingPatients = patients.slice(0, 6)

  return (
    <div className="space-y-4 rounded-xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Next Patients</h2>
        <span className="ml-auto rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
          {upcomingPatients.length}
        </span>
      </div>

      <div className="space-y-2">
        {upcomingPatients.map((patient, index) => (
          <div key={patient._id} className="flex items-center gap-3 rounded-lg border border-border/50 bg-secondary/20 p-3 transition-colors hover:bg-secondary/40">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-semibold text-primary">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{patient.name}</p>
              <p className="text-xs text-muted-foreground">{patient.consultationType}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-primary">{patient.token}</p>
            </div>
          </div>
        ))}
      </div>

      {upcomingPatients.length === 0 && (
        <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-border">
          <p className="text-sm text-muted-foreground">No upcoming patients</p>
        </div>
      )}
    </div>
  )
}
