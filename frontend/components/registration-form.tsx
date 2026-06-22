'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface RegistrationFormProps {
  onSubmit: (formData: {
    fullName: string
    phone: string
    age: string
    consultationType: string
  }) => void
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    age: '',
    consultationType: 'General Checkup',
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.phone || !formData.age) {
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      onSubmit(formData)
      setFormData({
        fullName: '',
        phone: '',
        age: '',
        consultationType: 'General Checkup',
      })
      setIsLoading(false)
    }, 300)
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-foreground">
        Patient Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-foreground">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            min="1"
            max="120"
            className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="consultationType"
            className="block text-sm font-medium text-foreground"
          >
            Consultation Type
          </label>
          <select
            id="consultationType"
            name="consultationType"
            value={formData.consultationType}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option>General</option>
            <option>Dental</option>
            <option>Cardiology</option>
            <option>Orthopedic</option>
          </select>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isLoading ? 'Registering...' : 'Register Patient'}
        </Button>
      </form>
    </div>
  )
}
