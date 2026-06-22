'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

interface AnnouncementTickerProps {
  announcements: string[]
}

export function AnnouncementTicker({ announcements }: AnnouncementTickerProps) {
  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 shadow-lg overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <AlertCircle className="h-6 w-6 flex-shrink-0 text-primary" />
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap text-xl font-semibold text-foreground"
        >
          {announcements.map((announcement, index) => (
            <span key={index} className="mx-8">
              ● {announcement}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
