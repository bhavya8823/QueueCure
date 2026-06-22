import { Button } from '@/components/ui/button'

interface CallNextButtonProps {
  onClick: () => void
  disabled: boolean
}

export function CallNextButton({ onClick, disabled }: CallNextButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size="lg"
      className="w-full max-w-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Call Next Patient
    </Button>
  )
}
