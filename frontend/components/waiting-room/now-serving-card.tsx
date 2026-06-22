'use client'

import { motion } from 'framer-motion'

interface NowServingCardProps {
  token: string
  patientName: string
  room: string
}

export function NowServingCard({ token, patientName, room }: NowServingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border-4 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-12 text-center shadow-2xl"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-transparent blur-xl opacity-50" />

      <div className="relative space-y-8">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-primary/60"
          >
            NOW SERVING
          </motion.p>
        </div>

        <div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
            className="text-9xl font-black text-primary drop-shadow-lg"
          >
            {token}
          </motion.div>
        </div>

        <div className="space-y-4 border-t-4 border-primary/20 pt-8">
          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              Patient Name
            </p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-5xl font-bold text-foreground"
            >
              {patientName}
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Room
              </p>
              <p className="mt-2 text-3xl font-bold text-primary">{room}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Status
              </p>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-2 inline-block rounded-full bg-green-500 px-4 py-2 text-xl font-bold text-white"
              >
                READY
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
