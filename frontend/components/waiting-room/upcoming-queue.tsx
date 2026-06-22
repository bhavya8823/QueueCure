'use client'

import { motion } from 'framer-motion'

interface Patient {
  token: string
  name: string
}

interface UpcomingQueueProps {
  patients: Patient[]
}

export function UpcomingQueue({ patients }: UpcomingQueueProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Upcoming</h2>

      <div className="space-y-3">
        {patients.map((patient, index) => (
          <motion.div
            key={patient.token}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 rounded-2xl border-2 border-border bg-white p-4 shadow-lg"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-white"
            >
              {patient.token}
            </motion.div>

            <div className="flex-1">
              <p className="text-lg font-semibold text-foreground">{patient.name}</p>
              <p className="text-sm text-muted-foreground">Position {index + 1}</p>
            </div>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-3 w-3 rounded-full bg-amber-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
