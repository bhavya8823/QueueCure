'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Clock, Target } from 'lucide-react'

export function PerformanceAnalytics() {
  const metrics = [
    {
      label: 'Avg. Consult Time',
      value: '18 min',
      icon: Clock,
      color: 'from-blue-50 to-blue-100/50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      progress: 75,
    },
    {
      label: 'Patient Satisfaction',
      value: '4.8/5.0',
      icon: Target,
      color: 'from-green-50 to-green-100/50',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      progress: 96,
    },
    {
      label: 'Patients Seen Today',
      value: '12',
      icon: TrendingUp,
      color: 'from-purple-50 to-purple-100/50',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      progress: 60,
    },
    {
      label: 'Efficiency Score',
      value: '92%',
      icon: Zap,
      color: 'from-amber-50 to-amber-100/50',
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-100',
      progress: 92,
    },
  ]

  return (
    <div className="space-y-4 rounded-xl border border-border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">Today&apos;s Performance</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg bg-gradient-to-br ${metric.color} p-4`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{metric.label}</p>
                  <p className="mt-1 text-xl font-bold text-foreground">{metric.value}</p>
                </div>
                <div className={`rounded-lg ${metric.iconBg} p-2`}>
                  <Icon className={`h-4 w-4 ${metric.iconColor}`} />
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-border/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                  className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
