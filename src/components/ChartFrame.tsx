import type { ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  source: string
  sampleSize: string
  caveat?: string
  children: ReactNode
  height?: number
}

export default function ChartFrame({
  title,
  subtitle,
  source,
  sampleSize,
  caveat,
  children,
  height = 320,
}: Props) {
  return (
    <figure className="rounded-md border border-paper-line bg-paper-card p-5 md:p-6">
      <figcaption className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg font-semibold text-ink">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-ink-mute">{subtitle}</p>}
        </div>
        <span className="small-caps whitespace-nowrap rounded border border-paper-line bg-paper px-2 py-1 text-ink-mute">
          n = {sampleSize}
        </span>
      </figcaption>
      <div style={{ width: '100%', height }}>{children}</div>
      <footer className="mt-4 flex flex-wrap justify-between gap-3 text-[11px] text-ink-mute">
        <span>Source: {source}</span>
        {caveat && <span className="max-w-md text-right italic">{caveat}</span>}
      </footer>
    </figure>
  )
}
