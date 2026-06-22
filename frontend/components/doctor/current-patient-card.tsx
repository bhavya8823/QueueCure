'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CurrentPatientCardProps {
  token: string
  name: string
  age: number
  consultationType: string
  onComplete: () => void
}

export function CurrentPatientCard({
  token,
  name,
  age,
  consultationType,
  onComplete,
}: CurrentPatientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 shadow-lg"
    >
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            NOW SERVING
          </p>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-2 text-7xl font-bold text-primary"
          >
            {token}
          </motion.div>
        </div>

        <div className="space-y-3 border-t border-primary/10 pt-6">
          <div>
            <p className="text-xs font-medium text-muted-foreground">
              PATIENT NAME
            </p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              {name}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">AGE</p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                {age} years
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">TYPE</p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                {consultationType}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 border-t border-primary/10 pt-6">
          <Button
            onClick={onComplete}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            Complete Consultation
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
