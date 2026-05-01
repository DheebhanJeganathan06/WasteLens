import type { EvidenceGrade, Intervention } from '../types'

interface Props {
  intervention: Intervention
}

const gradeMeta: Record<EvidenceGrade, { label: string; tone: string }> = {
  strong: { label: 'Strong evidence', tone: 'text-confidence-high border-confidence-high/40 bg-confidence-high/5' },
  moderate: { label: 'Moderate evidence', tone: 'text-confidence-med border-confidence-med/40 bg-confidence-med/5' },
  weak: { label: 'Weak evidence', tone: 'text-confidence-low border-confidence-low/40 bg-confidence-low/5' },
  unproven: { label: 'Unproven', tone: 'text-confidence-misleading border-confidence-misleading/40 bg-confidence-misleading/5' },
}

export default function InterventionCard({ intervention }: Props) {
  const meta = gradeMeta[intervention.evidence]
  return (
    <article className="rounded-md border border-paper-line bg-paper-card p-6">
      <header className="mb-3 flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-serif text-lg font-semibold text-ink">{intervention.name}</h3>
        <span className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium ${meta.tone}`}>
          {meta.label}
        </span>
      </header>
      <p className="mb-4 text-sm text-ink-soft">{intervention.summary}</p>
      <dl className="grid gap-3 text-sm sm:grid-cols-3">
        <div>
          <dt className="small-caps text-ink-mute">Effect size</dt>
          <dd className="text-ink-soft">{intervention.effectSize}</dd>
        </div>
        <div>
          <dt className="small-caps text-ink-mute">Studies</dt>
          <dd className="text-ink-soft">{intervention.studyCount}</dd>
        </div>
        <div>
          <dt className="small-caps text-ink-mute">Sources</dt>
          <dd className="text-ink-soft">{intervention.sources.join(', ')}</dd>
        </div>
      </dl>
      <p className="mt-4 border-t border-paper-line pt-3 text-xs italic text-ink-mute">
        Caveat: {intervention.caveat}
      </p>
    </article>
  )
}
