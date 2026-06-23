'use client'

import { Clock, Phone, CheckCircle2 } from 'lucide-react'

interface StatsCardsProps {
  waiting: number
  called: number
  completed: number
}

export function StatsCards({ waiting, called, completed }: StatsCardsProps) {
  const stats = [
    {
      label: 'Waiting Patients',
      value: waiting,
      icon: Clock,
      color: 'from-blue-50 to-blue-100/50',
      textColor: 'text-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      trend: '+2 this hour',
    },
    {
      label: 'Called Patients',
      value: called,
      icon: Phone,
      color: 'from-amber-50 to-amber-100/50',
      textColor: 'text-amber-500',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      trend: 'In progress',
    },
    {
      label: 'Completed Patients',
      value: completed,
      icon: CheckCircle2,
      color: 'from-green-50 to-green-100/50',
      textColor: 'text-green-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      trend: 'Lifetime',
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className={`rounded-xl border border-border bg-gradient-to-br ${stat.color} p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-blue-100/20`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className={`mt-2 text-4xl font-bold ${stat.textColor}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{stat.trend}</p>
              </div>
              <div className={`rounded-lg ${stat.iconBg} p-3`}>
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
