import type { HeadlineStat } from '../types'
import ConfidenceTag from './ConfidenceTag'

interface Props {
  stat: HeadlineStat
}

export default function StatCard({ stat }: Props) {
  return (
    <article className="flex h-full flex-col justify-between rounded-md border border-paper-line bg-paper-card p-6 shadow-[0_1px_0_rgba(31,36,34,0.04)]">
      <div>
        <div className="small-caps mb-3">{stat.label}</div>
        <div className="font-serif text-5xl md:text-6xl font-bold leading-none text-ink">
          {stat.value}
        </div>
        <div className="mt-2 text-sm text-ink-mute">{stat.unit}</div>
      </div>
      <div className="mt-6 space-y-3 text-xs text-ink-soft">
        <ConfidenceTag level={stat.confidence} />
        <p className="leading-relaxed">{stat.caveat}</p>
        <dl className="space-y-1 border-t border-paper-line pt-3 text-[11px] text-ink-mute">
          <div className="flex justify-between gap-4">
            <dt>Source</dt>
            <dd className="text-right text-ink-soft">{stat.source}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Sample</dt>
            <dd className="text-right text-ink-soft">{stat.sampleSize}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Year</dt>
            <dd className="text-right text-ink-soft">{stat.year}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
