import type { Confidence } from '../types'

interface Props {
  level: Confidence
  className?: string
}

const labels: Record<Confidence, string> = {
  high: 'High confidence',
  medium: 'Medium confidence',
  low: 'Low confidence',
  misleading: 'Misleading if extrapolated',
}

const styles: Record<Confidence, string> = {
  high: 'bg-confidence-high/10 text-confidence-high border-confidence-high/30',
  medium: 'bg-confidence-med/10 text-confidence-med border-confidence-med/30',
  low: 'bg-confidence-low/10 text-confidence-low border-confidence-low/30',
  misleading: 'bg-confidence-misleading/10 text-confidence-misleading border-confidence-misleading/30',
}

export default function ConfidenceTag({ level, className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide ${styles[level]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {labels[level]}
    </span>
  )
}
