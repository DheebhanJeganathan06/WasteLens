import type { ReactNode } from 'react'

interface Props {
  title?: string
  children: ReactNode
  tone?: 'caution' | 'note'
}

export default function CaveatCallout({ title = 'What this can\'t tell us', children, tone = 'caution' }: Props) {
  const accent =
    tone === 'caution'
      ? 'border-confidence-misleading/40 bg-confidence-misleading/5'
      : 'border-paper-line bg-paper-card'
  const titleColor =
    tone === 'caution' ? 'text-confidence-misleading' : 'text-ink-mute'
  return (
    <aside className={`rounded-md border-l-2 ${accent} p-5`}>
      <div className={`small-caps mb-2 ${titleColor}`}>{title}</div>
      <div className="text-sm text-ink-soft leading-relaxed space-y-2">{children}</div>
    </aside>
  )
}
