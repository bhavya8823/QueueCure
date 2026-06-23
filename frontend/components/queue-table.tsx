'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { Patient } from '@/types/patient'
interface QueueTableProps {
  patients: Patient[]
  onCallPatient: (id: string) => void
  onCompletePatient: (id: string) => void
}

export function QueueTable({
  patients,
  onCallPatient,
  onCompletePatient,
}: QueueTableProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'waiting' | 'called' | 'completed'>('all')

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.phone.includes(searchQuery) ||
      patient.token.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: Patient['status']) => {
    switch (status) {
      case 'waiting':
        return (
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-200">
            Waiting
          </span>
        )
      case 'called':
        return (
          <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 border border-amber-200">
            Called
          </span>
        )
      case 'completed':
        return (
          <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 border border-green-200">
            Completed
          </span>
        )
    }
  }

  if (patients.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center shadow-sm">
        <p className="text-muted-foreground">No patients in the queue</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, phone, or token..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {(["all", "waiting", "called", "completed"] as const).map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`rounded-lg px-3 py-1 text-sm font-medium capitalize transition-colors ${
                    statusFilter === status
                      ? "bg-primary text-white"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {status}
                </button>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
        <div className="max-h-[565px] overflow-y-auto overflow-x-auto">
          <table className="w-full">
            <thead className="sticky top-0 z-20 border-b border-border bg-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Token
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Consultation
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-sm text-muted-foreground"
                  >
                    No patients found matching your search
                  </td>
                </tr>
              ) : (
                filteredPatients.map((patient, index) => (
                  <tr
                    key={patient._id}
                    className={`border-b border-border transition-colors hover:bg-secondary/30 ${
                      index % 2 === 0 ? "bg-card" : "bg-secondary/10"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-primary">
                      {patient.token}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-foreground">
                          {patient.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {patient.phone}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {patient.consultationType}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(patient.status)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {patient.status === "waiting" && (
                          <span className="text-xs text-muted-foreground">
                            Waiting
                          </span>
                        )}
                        {patient.status === "called" && (
                          <Button
                            size="sm"
                            onClick={() => onCompletePatient(patient._id)}
                            variant="outline"
                            className="border-green-200 text-green-600 hover:bg-green-50"
                          >
                            Complete
                          </Button>
                        )}
                        {patient.status === "completed" && (
                          <span className="text-xs text-muted-foreground">
                            Done
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
