'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ConsultationNotesProps {
  patientId: string
}

export function ConsultationNotes({ patientId }: ConsultationNotesProps) {
  const [notes, setNotes] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  return (
    <div className="space-y-4 rounded-xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Consultation Notes</h2>
        <Button
          size="sm"
          onClick={handleSave}
          className={`gap-2 ${
            isSaved ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90'
          }`}
        >
          <Save className="h-4 w-4" />
          {isSaved ? 'Saved' : 'Save'}
        </Button>
      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write consultation notes, diagnosis, and recommendations here..."
        className="min-h-48 w-full rounded-lg border border-border bg-background p-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />

      <div className="flex gap-2 pt-2">
        <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-xs text-muted-foreground">Auto-save enabled</span>
        </div>
      </div>
    </div>
  )
}
