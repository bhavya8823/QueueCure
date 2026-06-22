'use client'

import { motion } from 'framer-motion'
import { Users, Clock, TrendingUp } from 'lucide-react'

interface WaitingRoomStatsProps {
  totalWaiting: number
  avgWaitTime: string
  totalServed: number
}

export function WaitingRoomStats({
  totalWaiting,
  avgWaitTime,
  totalServed,
}: WaitingRoomStatsProps) {
  const stats = [
    {
      label: 'Waiting',
      value: totalWaiting,
      icon: Users,
      color: 'from-blue-50 to-blue-100/50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
    },
    {
      label: 'Avg Wait',
      value: avgWaitTime,
      icon: Clock,
      color: 'from-amber-50 to-amber-100/50',
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-100',
    },
    {
      label: 'Served Today',
      value: totalServed,
      icon: TrendingUp,
      color: 'from-green-50 to-green-100/50',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-2xl bg-gradient-to-br ${stat.color} p-6 shadow-lg`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase">{stat.label}</p>
                <motion.p
                  key={stat.value}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-2 text-4xl font-bold text-foreground"
                >
                  {stat.value}
                </motion.p>
              </div>
              <div className={`rounded-xl ${stat.iconBg} p-3`}>
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
